/**
 * Deterministic, transactional discovery-batch import core.
 *
 * Reads an externally prepared batch bundle:
 *
 *   <bundle>/
 *     discoveries.json     — array of Discovery objects (see the Discovery interface)
 *     image-rights.csv     — one row per discovery (rights manifest)
 *     images/<slug>.webp   — the local hero image for each entry
 *     README.md            — human notes about the batch
 *
 * and integrates it into the catalog:
 *   - validates every entry against the Discovery interface and catalog rules,
 *   - decodes every image with sharp (format, dimensions, size, truncation),
 *   - rejects duplicate slugs, titles, scientific names, DOIs, primary-source
 *     URLs, and image hashes (within the batch, against the live catalog, and
 *     against previously committed audit manifests),
 *   - groups entries into monthly TypeScript modules and registers new ones,
 *   - copies images to public/images/discoveries/<year>/<slug>.webp,
 *   - writes a permanent, normalized audit manifest to docs/discovery-image-rights/.
 *
 * The apply step is transactional: everything is generated in memory, staged in
 * a temporary directory, verified, then moved into place. Any failure restores
 * every modified file byte-for-byte, deletes every newly created file and image,
 * removes directories the failed run created, and leaves catalog.ts and the
 * discovery count unchanged. This module performs NO research and invents NO
 * data; it only integrates what the bundle supplies.
 */
import {
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  statSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  copyFileSync,
  unlinkSync,
  rmdirSync,
  rmSync,
  realpathSync,
} from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { join, dirname, relative, resolve, sep, basename } from "node:path";
import sharp from "sharp";

import { discoveries as existingCatalog } from "@/content/catalog";
import { categories } from "@/content/categories";
import { slugify } from "@/lib/hubs";
import { monthLabel } from "@/lib/seo";
import { validateCatalog, type ContentIssue } from "@/lib/validation/rules";
import type { Discovery, DiscoveryImageType } from "@/content/types";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const CONTENT_DIR = join(ROOT, "src", "content");
const CATALOG_FILE = join(CONTENT_DIR, "catalog.ts");
const PUBLIC_DIR = join(ROOT, "public");
const DISCOVERY_IMG_DIR = join(PUBLIC_DIR, "images", "discoveries");
const MANIFEST_DIR = join(ROOT, "docs", "discovery-image-rights");

const IMAGE_TYPES: DiscoveryImageType[] = [
  "photograph",
  "telescope image",
  "microscopy image",
  "data visualization",
  "artist impression",
  "reconstruction",
  "diagram",
];
const IMAGE_RELATIONS = ["exact", "contextual", "illustration"] as const;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DOI_RE = /10\.\d{4,9}\/[-._;()/:a-z0-9]+/gi;
const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

const MAX_IMAGE_BYTES = 700 * 1024;
const MIN_WIDTH = 800;
const MIN_HEIGHT = 500;
const EXCEPTION_TOKEN = "scientific-detail-exception";

export interface BatchIssue {
  level: "error" | "warn";
  code: string;
  slug?: string;
  message: string;
}

export interface ImageMeta {
  slug: string;
  width: number;
  height: number;
  size: number;
  hash: string;
  format: string;
  animated: boolean;
}

/** A single file write scheduled by the plan (module, catalog, or manifest). */
export interface FileOp {
  kind: "module-new" | "module-append" | "catalog" | "manifest-csv" | "manifest-json";
  path: string;
  contents: string;
  existedBefore: boolean;
  original: string | null;
}

/** A single image copy scheduled by the plan. */
export interface ImageOp {
  slug: string;
  from: string;
  to: string;
  existedBefore: boolean;
}

export interface PlannedFile {
  fileBase: string;
  filePath: string;
  exportName: string;
  monthName: string;
  year: number;
  isNew: boolean;
  count: number;
}

export interface BatchPlan {
  bundleDir: string;
  batchName: string;
  ok: boolean;
  entries: Discovery[];
  issues: BatchIssue[];
  files: PlannedFile[];
  fileOps: FileOp[];
  imageOps: ImageOp[];
  imageMeta: Map<string, ImageMeta>;
  manifestRowCount: number;
  manifestCsvPath: string;
  manifestJsonPath: string;
  stats: {
    entryCount: number;
    byYear: Record<string, number>;
    byCategory: Record<string, number>;
    byImageRelation: Record<string, number>;
    newFiles: number;
    appendedFiles: number;
    imageBytes: number;
  };
}

/* ------------------------------------------------------------------ *
 * Small helpers.
 * ------------------------------------------------------------------ */

function isBlank(v: unknown): boolean {
  return typeof v !== "string" || v.trim().length === 0;
}

function isValidIsoDate(value: unknown): value is string {
  if (typeof value !== "string" || !ISO_DATE.test(value)) return false;
  const [y, m, d] = value.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() + 1 === m && dt.getUTCDate() === d;
}

function sha256Buffer(buf: Buffer): string {
  return createHash("sha256").update(buf).digest("hex");
}

function sha256File(path: string): string {
  return sha256Buffer(readFileSync(path));
}

function extractDois(...urls: (string | undefined)[]): string[] {
  const out: string[] = [];
  for (const u of urls) {
    if (!u) continue;
    const matches = u.match(DOI_RE);
    if (matches) out.push(...matches.map((m) => m.toLowerCase().replace(/[.,;)]+$/, "")));
  }
  return out;
}

function normUrl(u: string | undefined): string | undefined {
  if (!u) return undefined;
  return u.trim().toLowerCase().replace(/\/+$/, "");
}

/** Normalize a scientific name for dedup: case- and whitespace-insensitive. */
function normSci(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

function canonicalHero(year: number, slug: string): string {
  return `/images/discoveries/${year}/${slug}.webp`;
}

/** True when `child` is inside (or equal to) `base` — no traversal escape. */
function isInside(base: string, child: string): boolean {
  const b = resolve(base);
  const c = resolve(child);
  return c === b || c.startsWith(b + sep);
}

/** Every image file already committed under public/images (hash → repo-rel path). */
function existingImageHashes(): Map<string, string> {
  const byHash = new Map<string, string>();
  const walk = (dir: string) => {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(webp|png|jpe?g|gif)$/i.test(entry.name)) {
        byHash.set(sha256File(full), relative(PUBLIC_DIR, full));
      }
    }
  };
  walk(join(PUBLIC_DIR, "images"));
  return byHash;
}

interface CommittedManifestIndex {
  slugs: Map<string, string>;
  paths: Map<string, string>;
  hashes: Map<string, string>;
  dois: Map<string, string>;
  primary: Map<string, string>;
}

/** Read every committed audit manifest so an import cannot re-claim a record. */
function committedManifestIndex(): CommittedManifestIndex {
  const idx: CommittedManifestIndex = {
    slugs: new Map(),
    paths: new Map(),
    hashes: new Map(),
    dois: new Map(),
    primary: new Map(),
  };
  if (!existsSync(MANIFEST_DIR)) return idx;
  for (const entry of readdirSync(MANIFEST_DIR)) {
    if (!entry.endsWith(".json")) continue;
    const batch = entry.replace(/\.json$/, "");
    let rows: Array<Record<string, unknown>>;
    try {
      rows = JSON.parse(readFileSync(join(MANIFEST_DIR, entry), "utf8")) as Array<Record<string, unknown>>;
    } catch {
      continue;
    }
    if (!Array.isArray(rows)) continue;
    for (const r of rows) {
      const slug = typeof r.slug === "string" ? r.slug : undefined;
      if (slug && !idx.slugs.has(slug)) idx.slugs.set(slug, batch);
      const p = typeof r.localImagePath === "string" ? r.localImagePath : undefined;
      if (p && !idx.paths.has(p)) idx.paths.set(p, batch);
      const h = typeof r.sha256 === "string" ? r.sha256.toLowerCase() : undefined;
      if (h && !idx.hashes.has(h)) idx.hashes.set(h, batch);
      const prim = normUrl(typeof r.primarySourceUrl === "string" ? r.primarySourceUrl : undefined);
      if (prim && !idx.primary.has(prim)) idx.primary.set(prim, batch);
      const dois = Array.isArray(r.dois) ? (r.dois as unknown[]) : [];
      for (const d of dois) if (typeof d === "string" && !idx.dois.has(d.toLowerCase())) idx.dois.set(d.toLowerCase(), batch);
    }
  }
  return idx;
}

/* ------------------------------------------------------------------ *
 * Minimal RFC-4180 CSV parser (quoted fields, embedded commas/newlines).
 * ------------------------------------------------------------------ */

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field); field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.length > 1 || row[0] !== "") rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((c) => c.trim() !== ""));
}

function csvCell(value: unknown): string {
  const s = value === undefined || value === null ? "" : String(value);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** Resolve manifest column indexes by matching keywords against headers. */
function resolveColumns(header: string[]): Record<string, number> {
  const norm = header.map((h) => slugify(h));
  const find = (...keys: string[]) =>
    norm.findIndex((h) => keys.some((k) => h === k || h.includes(k)));
  return {
    slug: find("slug"),
    localPath: find("local-image-path", "image-path", "local-path"),
    hash: find("sha-256", "sha256", "hash"),
    imageType: find("image-type"),
    imageRelation: find("image-relation", "relation"),
    credit: find("creator-or-institution", "creator", "credit"),
    license: find("licence-or-reuse-status", "license-or-reuse-status", "license", "licence"),
    sourcePage: find("image-source-page", "source-page", "image-source-url"),
    downloadDate: find("source-download-date", "download-date"),
    width: find("width"),
    height: find("height"),
    fileSize: find("file-size", "size-bytes", "size"),
    notes: find("notes"),
  };
}

/* ------------------------------------------------------------------ *
 * Image decoding (sharp).
 * ------------------------------------------------------------------ */

async function decodeImage(path: string): Promise<Omit<ImageMeta, "slug"> & { decodable: boolean; error?: string }> {
  const buf = readFileSync(path);
  const size = buf.length;
  const hash = sha256Buffer(buf);
  try {
    const meta = await sharp(buf).metadata();
    // Force a full pixel decode to catch truncated / malformed payloads.
    await sharp(buf).toColorspace("srgb").raw().toBuffer();
    return {
      width: meta.width ?? 0,
      height: meta.height ?? 0,
      size,
      hash,
      format: meta.format ?? "unknown",
      animated: (meta.pages ?? 1) > 1,
      decodable: true,
    };
  } catch (e) {
    return { width: 0, height: 0, size, hash, format: "unknown", animated: false, decodable: false, error: (e as Error).message };
  }
}

/* ------------------------------------------------------------------ *
 * Plan builder (async — decodes images).
 * ------------------------------------------------------------------ */

export async function buildPlan(bundleDirInput: string): Promise<BatchPlan> {
  const issues: BatchIssue[] = [];
  const err = (code: string, message: string, slug?: string) =>
    issues.push({ level: "error", code, message, slug });
  const warn = (code: string, message: string, slug?: string) =>
    issues.push({ level: "warn", code, message, slug });

  const batchName = slugify(basename(bundleDirInput.replace(/[/\\]+$/, ""))) || "batch";
  const manifestCsvPath = join(MANIFEST_DIR, `${batchName}.csv`);
  const manifestJsonPath = join(MANIFEST_DIR, `${batchName}.json`);

  const plan: BatchPlan = {
    bundleDir: bundleDirInput,
    batchName,
    ok: false,
    entries: [],
    issues,
    files: [],
    fileOps: [],
    imageOps: [],
    imageMeta: new Map(),
    manifestRowCount: 0,
    manifestCsvPath,
    manifestJsonPath,
    stats: {
      entryCount: 0,
      byYear: {},
      byCategory: {},
      byImageRelation: {},
      newFiles: 0,
      appendedFiles: 0,
      imageBytes: 0,
    },
  };

  // ---- Path safety: bundle must resolve inside the repository root ----
  let bundleDir: string;
  try {
    bundleDir = realpathSync(resolve(bundleDirInput));
  } catch {
    err("missing-bundle", `Bundle directory "${bundleDirInput}" does not exist.`);
    return plan;
  }
  plan.bundleDir = bundleDir;
  if (!isInside(ROOT, bundleDir)) {
    err("bundle-outside-root", `Bundle path resolves outside the repository root: ${bundleDir}`);
    return plan;
  }
  if (!statSync(bundleDir).isDirectory()) {
    err("missing-bundle", `Bundle path is not a directory: ${bundleDir}`);
    return plan;
  }

  const jsonPath = join(bundleDir, "discoveries.json");
  const csvPath = join(bundleDir, "image-rights.csv");
  const imagesDir = join(bundleDir, "images");

  if (!existsSync(jsonPath)) err("missing-json", "discoveries.json is missing from the bundle.");
  if (!existsSync(csvPath)) err("missing-csv", "image-rights.csv is missing from the bundle.");
  if (!existsSync(imagesDir)) err("missing-images-dir", "images/ directory is missing from the bundle.");
  if (issues.some((i) => i.level === "error")) return plan;

  let raw: unknown;
  try {
    raw = JSON.parse(readFileSync(jsonPath, "utf8"));
  } catch (e) {
    err("invalid-json", `discoveries.json is not valid JSON: ${(e as Error).message}`);
    return plan;
  }
  if (!Array.isArray(raw)) {
    err("invalid-json", "discoveries.json must be a JSON array of discovery objects.");
    return plan;
  }
  if (raw.length === 0) {
    warn("empty-batch", "discoveries.json is an empty array; nothing to import.");
    plan.ok = true;
    return plan;
  }

  const categorySlugs = new Set(categories.map((c) => c.slug));
  const subtopicsByCategory = new Map(
    categories.map((c) => [c.slug, new Set(c.subtopics.map((s) => slugify(s)))]),
  );

  // Live-catalog indexes for duplicate rejection.
  const existingSlugs = new Set(existingCatalog.map((d) => d.slug));
  const existingTitles = new Set(existingCatalog.map((d) => slugify(d.title)));
  const existingSci = new Set(
    existingCatalog.filter((d) => d.scientificName).map((d) => normSci(d.scientificName!)),
  );
  const existingPrimary = new Set(
    existingCatalog.map((d) => normUrl(d.primarySourceUrl)).filter(Boolean) as string[],
  );
  const existingDois = new Set(existingCatalog.flatMap((d) => extractDois(d.paperUrl, d.primarySourceUrl)));
  const existingHashes = existingImageHashes();
  const committed = committedManifestIndex();

  // Intra-batch indexes (first-seen wins; collisions reported).
  const seenSlug = new Map<string, string>();
  const seenTitle = new Map<string, string>();
  const seenSci = new Map<string, string>();
  const seenPrimary = new Map<string, string>();
  const seenDoi = new Map<string, string>();
  const seenHash = new Map<string, string>();

  const entries: Discovery[] = [];
  const csvNotesBySlug = new Map<string, string>();

  // First pass: read + parse the manifest (so per-entry validation can use it).
  let manifestRows: string[][] = [];
  let cols: Record<string, number> = {};
  try {
    manifestRows = parseCsv(readFileSync(csvPath, "utf8"));
    if (manifestRows.length >= 1) cols = resolveColumns(manifestRows[0]);
  } catch (e) {
    err("manifest-parse", `Could not read image-rights.csv: ${(e as Error).message}`);
  }
  const manifestDataRows = manifestRows.slice(1);
  const manifestBySlug = new Map<string, string[]>();
  if (cols.slug !== undefined && cols.slug >= 0) {
    for (const r of manifestDataRows) {
      const s = (r[cols.slug] ?? "").trim();
      if (s && !manifestBySlug.has(s)) manifestBySlug.set(s, r);
    }
  }
  const cell = (r: string[] | undefined, i: number | undefined) =>
    r && i !== undefined && i >= 0 ? (r[i] ?? "").trim() : "";

  for (let index = 0; index < raw.length; index++) {
    const d = raw[index] as Partial<Discovery>;
    const slug = typeof d.slug === "string" ? d.slug : `#${index}`;
    const at = (code: string, message: string) => err(code, message, slug);

    // ---- Required scalar fields & shapes -------------------------------
    if (isBlank(d.slug)) { at("missing-slug", `Entry #${index} has no slug.`); continue; }
    if (!SLUG_RE.test(d.slug!)) at("invalid-slug", `Slug "${d.slug}" is not lowercase kebab-case (blocks path traversal).`);
    if (isBlank(d.title)) at("missing-title", "Missing title.");
    if (isBlank(d.summary)) at("missing-summary", "Missing summary.");
    if (!d.story || isBlank(d.story.whyThere) || isBlank(d.story.howFound) || isBlank(d.story.whatMakesUnique)) {
      at("incomplete-story", "story.whyThere, story.howFound, and story.whatMakesUnique are all required.");
    }
    if (!Array.isArray(d.tags) || d.tags.length === 0) at("missing-tags", "At least one tag is required.");
    if (!Array.isArray(d.videoUrls)) at("missing-videoUrls", "videoUrls must be an array (use []).");
    if (!Array.isArray(d.gallery)) at("missing-gallery", "gallery must be an array.");
    if (!Array.isArray(d.relatedSlugs)) at("missing-relatedSlugs", "relatedSlugs must be an array.");

    // ---- Category & subtopic ------------------------------------------
    if (!d.categorySlug || !categorySlugs.has(d.categorySlug)) {
      at("invalid-category", `Unknown categorySlug "${d.categorySlug}".`);
    } else {
      const known = subtopicsByCategory.get(d.categorySlug);
      if (!d.subtopic || (known && !known.has(slugify(d.subtopic)))) {
        at("invalid-subtopic", `Subtopic "${d.subtopic}" is not valid for category "${d.categorySlug}".`);
      }
    }

    // ---- Dates & year --------------------------------------------------
    if (!isValidIsoDate(d.dateDiscovered)) {
      at("invalid-date", `dateDiscovered "${d.dateDiscovered}" is not a valid YYYY-MM-DD date.`);
    } else if (typeof d.year === "number" && d.year !== Number(d.dateDiscovered!.slice(0, 4))) {
      at("year-mismatch", `year (${d.year}) does not match dateDiscovered (${d.dateDiscovered}).`);
    }
    for (const [f, v] of [
      ["dateUpdated", d.dateUpdated],
      ["dateReviewed", d.dateReviewed],
      ["sourceAccessedAt", d.sourceAccessedAt],
    ] as const) {
      if (v !== undefined && !isValidIsoDate(v)) at("invalid-date", `${f} "${v}" is not a valid YYYY-MM-DD date.`);
    }

    // ---- Location ------------------------------------------------------
    const loc = d.location;
    if (!loc || typeof loc.lat !== "number" || typeof loc.lng !== "number") {
      at("invalid-location", "location must have numeric lat and lng.");
    } else {
      if (loc.lat < -90 || loc.lat > 90) at("invalid-location", `latitude ${loc.lat} is out of range (-90..90).`);
      if (loc.lng < -180 || loc.lng > 180) at("invalid-location", `longitude ${loc.lng} is out of range (-180..180).`);
      if (isBlank(loc.name)) at("invalid-location", "location.name is required.");
      if (isBlank(loc.country)) at("invalid-location", "location.country is required.");
    }
    if (isBlank(d.discoveringOrg)) at("missing-org", "discoveringOrg is required.");

    // ---- Review status (never editor-reviewed for imported content) ----
    if (d.reviewStatus === "editor-reviewed") {
      at("editor-reviewed-forbidden", 'Imported entries may not be marked "editor-reviewed".');
    } else if (
      d.reviewStatus !== undefined &&
      d.reviewStatus !== "source-verified" &&
      d.reviewStatus !== "preliminary"
    ) {
      at("invalid-review-status", `reviewStatus "${d.reviewStatus}" is not allowed for imports.`);
    }

    // ---- Sources -------------------------------------------------------
    if (isBlank(d.primarySourceUrl) && isBlank(d.paperUrl)) {
      at("missing-source", "Entry needs a primarySourceUrl or paperUrl.");
    }
    for (const u of [d.primarySourceUrl, d.paperUrl]) {
      if (u && !/^https:\/\//i.test(u)) at("insecure-source", `Source URL "${u}" must use HTTPS.`);
    }

    // ---- Image rights & canonical hero path ----------------------------
    const year = typeof d.year === "number" ? d.year : Number(String(d.dateDiscovered).slice(0, 4));
    const hero = canonicalHero(year, d.slug!);
    if (d.heroImage !== undefined && d.heroImage !== hero) {
      at("hero-path-mismatch", `heroImage must be "${hero}" (derived from year + slug), got "${d.heroImage}".`);
    }
    if (isBlank(d.imageAlt)) at("missing-alt", "imageAlt is required.");
    if (isBlank(d.imageCredit)) at("missing-credit", "imageCredit is required.");
    if (isBlank(d.imageSourceUrl)) at("missing-image-source", "imageSourceUrl is required.");
    else if (!/^https:\/\//i.test(d.imageSourceUrl!)) at("insecure-image-source", `imageSourceUrl "${d.imageSourceUrl}" must use HTTPS.`);
    if (isBlank(d.imageLicense)) at("missing-license", "imageLicense is required.");
    if (!d.imageType || !IMAGE_TYPES.includes(d.imageType)) at("invalid-image-type", `imageType "${d.imageType}" is not valid.`);
    if (!d.imageRelation || !IMAGE_RELATIONS.includes(d.imageRelation)) {
      at("invalid-image-relation", `imageRelation "${d.imageRelation}" must be one of ${IMAGE_RELATIONS.join(", ")}.`);
    }

    // ---- Bundle image: exists, no symlink escape, decodes, dimensions --
    const imgSrc = join(imagesDir, `${d.slug}.webp`);
    let meta: (Omit<ImageMeta, "slug"> & { decodable: boolean; error?: string }) | null = null;
    if (!existsSync(imgSrc)) {
      at("missing-image", `Bundle image images/${d.slug}.webp is missing.`);
    } else if (!lstatSync(imgSrc).isFile() || !isInside(imagesDir, realpathSync(imgSrc))) {
      at("image-symlink-escape", `images/${d.slug}.webp is a symlink or resolves outside the bundle images/ directory.`);
    } else {
      const mrow = manifestBySlug.get(d.slug!);
      const notes = cell(mrow, cols.notes);
      const hasException = notes.toLowerCase().includes(EXCEPTION_TOKEN);
      meta = await decodeImage(imgSrc);
      if (!meta.decodable) {
        at("undecodable-image", `images/${d.slug}.webp could not be decoded (truncated or malformed): ${meta.error}`);
      } else {
        if (meta.format !== "webp") at("bad-image-format", `images/${d.slug}.webp decodes as "${meta.format}", not WebP.`);
        if (meta.animated) at("animated-image", `images/${d.slug}.webp is an animated WebP, which is not supported.`);
        if (meta.width < MIN_WIDTH) at("image-too-small", `images/${d.slug}.webp width ${meta.width}px is below the ${MIN_WIDTH}px minimum.`);
        if (meta.height < MIN_HEIGHT) at("image-too-small", `images/${d.slug}.webp height ${meta.height}px is below the ${MIN_HEIGHT}px minimum.`);
        if (meta.size > MAX_IMAGE_BYTES && !hasException) {
          at("image-too-large", `images/${d.slug}.webp is ${meta.size} bytes (> ${MAX_IMAGE_BYTES}); add "${EXCEPTION_TOKEN}" to the manifest notes if the detail requires it.`);
        }
        plan.imageMeta.set(d.slug!, { slug: d.slug!, ...meta });
      }
    }

    // ---- Duplicate rejection: catalog + intra-batch + committed manifests
    const titleKey = d.title ? slugify(d.title) : "";
    const sciKey = d.scientificName ? normSci(d.scientificName) : "";
    const primaryKey = normUrl(d.primarySourceUrl);
    const dois = extractDois(d.paperUrl, d.primarySourceUrl);
    const hash = meta?.decodable ? meta.hash : "";

    if (existingSlugs.has(d.slug!)) at("duplicate-slug", `Slug "${d.slug}" already exists in the catalog.`);
    if (committed.slugs.has(d.slug!)) at("committed-manifest-duplicate-slug", `Slug "${d.slug}" is already claimed by committed manifest "${committed.slugs.get(d.slug!)}".`);
    if (seenSlug.has(d.slug!)) at("duplicate-slug", `Slug "${d.slug}" is repeated within the batch.`);
    else seenSlug.set(d.slug!, d.slug!);

    if (titleKey) {
      if (existingTitles.has(titleKey)) at("duplicate-title", `Title "${d.title}" collides with an existing discovery.`);
      if (seenTitle.has(titleKey)) at("duplicate-title", `Title "${d.title}" is repeated within the batch (matches "${seenTitle.get(titleKey)}").`);
      else seenTitle.set(titleKey, d.slug!);
    }
    if (sciKey) {
      if (existingSci.has(sciKey)) at("duplicate-scientific-name", `scientificName "${d.scientificName}" already exists in the catalog.`);
      if (seenSci.has(sciKey)) at("duplicate-scientific-name", `scientificName "${d.scientificName}" is repeated within the batch.`);
      else seenSci.set(sciKey, d.slug!);
    }
    if (primaryKey) {
      if (existingPrimary.has(primaryKey)) at("duplicate-primary-source", `primarySourceUrl "${d.primarySourceUrl}" already exists in the catalog.`);
      if (committed.primary.has(primaryKey)) at("committed-manifest-duplicate-primary-source", `primarySourceUrl already claimed by committed manifest "${committed.primary.get(primaryKey)}".`);
      if (seenPrimary.has(primaryKey)) at("duplicate-primary-source", `primarySourceUrl "${d.primarySourceUrl}" is repeated within the batch.`);
      else seenPrimary.set(primaryKey, d.slug!);
    }
    for (const doi of dois) {
      if (existingDois.has(doi)) at("duplicate-doi", `DOI "${doi}" already exists in the catalog.`);
      if (committed.dois.has(doi)) at("committed-manifest-duplicate-doi", `DOI "${doi}" already claimed by committed manifest "${committed.dois.get(doi)}".`);
      if (seenDoi.has(doi)) at("duplicate-doi", `DOI "${doi}" is repeated within the batch (matches "${seenDoi.get(doi)}").`);
      else seenDoi.set(doi, d.slug!);
    }
    if (hash) {
      if (existingHashes.has(hash)) at("duplicate-image-hash", `Image is byte-identical to existing repository image ${existingHashes.get(hash)}.`);
      if (committed.hashes.has(hash)) at("committed-manifest-duplicate-image-hash", `Image hash already claimed by committed manifest "${committed.hashes.get(hash)}".`);
      if (committed.paths.has(hero)) at("committed-manifest-duplicate-path", `Image path "${hero}" already claimed by committed manifest "${committed.paths.get(hero)}".`);
      if (seenHash.has(hash)) at("duplicate-image-hash", `Image is byte-identical to batch image for "${seenHash.get(hash)}".`);
      else seenHash.set(hash, d.slug!);
    }

    // ---- Normalize the accepted entry (deterministic hero + gallery) ---
    const gallery = Array.isArray(d.gallery) ? d.gallery.slice() : [];
    if (!gallery.includes(hero)) gallery.unshift(hero);
    entries.push({ ...(d as Discovery), heroImage: hero, gallery, year });
    if (d.slug) csvNotesBySlug.set(d.slug, cell(manifestBySlug.get(d.slug), cols.notes));
  }

  plan.entries = entries;

  // ---- relatedSlugs resolve within (existing ∪ batch) ------------------
  const allSlugs = new Set<string>([...existingSlugs, ...entries.map((e) => e.slug)]);
  for (const e of entries) {
    for (const rel of e.relatedSlugs ?? []) {
      if (rel === e.slug) warn("self-relation", "relatedSlugs contains the entry itself.", e.slug);
      else if (!allSlugs.has(rel)) err("broken-relation", `relatedSlugs points to "${rel}", which does not exist in the catalog or this batch.`, e.slug);
    }
  }

  // ---- Manifest cross-checks ------------------------------------------
  if (manifestRows.length < 1) {
    err("empty-manifest", "image-rights.csv has no header row.");
  } else {
    plan.manifestRowCount = manifestDataRows.length;
    if (cols.slug < 0) err("manifest-columns", "image-rights.csv is missing a 'slug' column.");
    if (cols.hash < 0) err("manifest-columns", "image-rights.csv is missing a SHA-256 'hash' column.");
    if (manifestDataRows.length !== entries.length) {
      err("manifest-count", `image-rights.csv has ${manifestDataRows.length} data rows but discoveries.json has ${entries.length} entries.`);
    }
    const rowSlugs = new Set<string>();
    for (const r of manifestDataRows) {
      const rslug = cell(r, cols.slug);
      if (!rslug) { err("manifest-row", "A manifest row has no slug."); continue; }
      rowSlugs.add(rslug);
      const entry = entries.find((e) => e.slug === rslug);
      if (!entry) { err("manifest-orphan", `Manifest row "${rslug}" has no matching discovery.`, rslug); continue; }
      const im = plan.imageMeta.get(rslug);
      const rowHash = cell(r, cols.hash).toLowerCase();
      if (im && rowHash && rowHash !== im.hash) err("manifest-hash", `Manifest SHA-256 for "${rslug}" does not match the actual image hash.`, rslug);
      const rowPath = cell(r, cols.localPath);
      if (rowPath && rowPath !== entry.heroImage) err("manifest-path", `Manifest local path for "${rslug}" ("${rowPath}") does not match "${entry.heroImage}".`, rslug);
      const rowW = Number(cell(r, cols.width));
      if (im && cols.width >= 0 && cell(r, cols.width) && rowW !== im.width) err("manifest-width", `Manifest width for "${rslug}" (${rowW}) does not match decoded width (${im.width}).`, rslug);
      const rowH = Number(cell(r, cols.height));
      if (im && cols.height >= 0 && cell(r, cols.height) && rowH !== im.height) err("manifest-height", `Manifest height for "${rslug}" (${rowH}) does not match decoded height (${im.height}).`, rslug);
      const rowSize = Number(cell(r, cols.fileSize));
      if (im && cols.fileSize >= 0 && cell(r, cols.fileSize) && rowSize !== im.size) err("manifest-size", `Manifest file size for "${rslug}" (${rowSize}) does not match actual size (${im.size}).`, rslug);
    }
    for (const e of entries) {
      if (!rowSlugs.has(e.slug)) err("manifest-missing-row", `Discovery "${e.slug}" has no row in image-rights.csv.`, e.slug);
    }
  }

  // ---- Full catalog rules on the merged set (blocks on new-entry errors) -
  const merged = [...existingCatalog, ...entries];
  const catalogIssues: ContentIssue[] = validateCatalog({ discoveries: merged });
  const newSlugSet = new Set(entries.map((e) => e.slug));
  for (const ci of catalogIssues) {
    const scoped = ci.slug === undefined || newSlugSet.has(ci.slug);
    if (!scoped) continue;
    if (ci.level === "error") err(`catalog:${ci.code}`, ci.message, ci.slug);
    else warn(`catalog:${ci.code}`, ci.message, ci.slug);
  }

  // ---- Plan monthly modules -------------------------------------------
  interface MonthGroup extends PlannedFile { entries: Discovery[] }
  const byFile = new Map<string, MonthGroup>();
  for (const e of entries) {
    const year = e.year;
    const monthIdx = Number(e.dateDiscovered.slice(5, 7)) - 1;
    const monthName = MONTHS[monthIdx] ?? monthLabel(monthIdx + 1).toLowerCase();
    const fileBase = `discoveries-${monthName}-${year}`;
    const filePath = join(CONTENT_DIR, `${fileBase}.ts`);
    let g = byFile.get(fileBase);
    if (!g) {
      g = { fileBase, filePath, exportName: `${monthName}${year}Discoveries`, monthName, year, isNew: !existsSync(filePath), count: 0, entries: [] };
      byFile.set(fileBase, g);
    }
    g.entries.push(e);
    g.count += 1;
  }
  const groups = [...byFile.values()].sort((a, b) => a.fileBase.localeCompare(b.fileBase));
  plan.files = groups.map(({ entries: _e, ...rest }) => rest);

  // ---- Image operations (destinations must not already exist) ----------
  for (const e of entries) {
    const to = join(DISCOVERY_IMG_DIR, String(e.year), `${e.slug}.webp`);
    if (!isInside(DISCOVERY_IMG_DIR, to)) { err("output-path-escape", `Computed image path escapes public/images/discoveries: ${to}`, e.slug); continue; }
    const existedBefore = existsSync(to);
    if (existedBefore) err("unexpected-existing-image", `Destination image already exists unexpectedly: ${relative(ROOT, to)}`, e.slug);
    plan.imageOps.push({ slug: e.slug, from: join(imagesDir, `${e.slug}.webp`), to, existedBefore });
  }

  // ---- File operations (generated in memory now) -----------------------
  const fileOps: FileOp[] = [];
  for (const g of groups) {
    if (!isInside(CONTENT_DIR, g.filePath)) { err("output-path-escape", `Module path escapes src/content: ${g.filePath}`); continue; }
    if (g.isNew) {
      if (existsSync(g.filePath)) err("unexpected-existing-module", `New module already exists unexpectedly: ${relative(ROOT, g.filePath)}`);
      fileOps.push({ kind: "module-new", path: g.filePath, contents: newFileContents(g.monthName, g.year, g.exportName, g.entries), existedBefore: false, original: null });
    } else {
      const original = readFileSync(g.filePath, "utf8");
      fileOps.push({ kind: "module-append", path: g.filePath, contents: appendToExisting(original, g.exportName, g.entries, g.filePath), existedBefore: true, original });
    }
  }
  const catalogContents = registerInCatalog(groups);
  if (catalogContents) {
    const original = readFileSync(CATALOG_FILE, "utf8");
    fileOps.push({ kind: "catalog", path: CATALOG_FILE, contents: catalogContents, existedBefore: true, original });
  }

  // ---- Permanent audit manifest (part of the transaction) --------------
  if (entries.length > 0) {
    const { csv, json } = buildPermanentManifest(entries, plan.imageMeta, manifestBySlug, cols, cell, csvNotesBySlug);
    for (const [kind, p, contents] of [
      ["manifest-csv", manifestCsvPath, csv],
      ["manifest-json", manifestJsonPath, json],
    ] as const) {
      const existed = existsSync(p);
      fileOps.push({ kind, path: p, contents, existedBefore: existed, original: existed ? readFileSync(p, "utf8") : null });
    }
  }

  plan.fileOps = fileOps;

  // ---- Stats -----------------------------------------------------------
  for (const e of entries) {
    plan.stats.byYear[e.year] = (plan.stats.byYear[e.year] ?? 0) + 1;
    plan.stats.byCategory[e.categorySlug] = (plan.stats.byCategory[e.categorySlug] ?? 0) + 1;
    const rel = e.imageRelation ?? "unspecified";
    plan.stats.byImageRelation[rel] = (plan.stats.byImageRelation[rel] ?? 0) + 1;
  }
  plan.stats.entryCount = entries.length;
  plan.stats.newFiles = groups.filter((f) => f.isNew).length;
  plan.stats.appendedFiles = groups.filter((f) => !f.isNew).length;
  plan.stats.imageBytes = [...plan.imageMeta.values()].reduce((n, m) => n + m.size, 0);

  plan.ok = !issues.some((i) => i.level === "error");
  return plan;
}

/* ------------------------------------------------------------------ *
 * Permanent audit manifest.
 * ------------------------------------------------------------------ */

const MANIFEST_HEADERS = [
  "slug", "title", "year", "local image path", "image source page",
  "creator or institution", "licence or reuse status", "image type",
  "image relation", "source download date", "width", "height",
  "file size in bytes", "sha-256", "contextual or illustration notes",
];

function buildPermanentManifest(
  entries: Discovery[],
  imageMeta: Map<string, ImageMeta>,
  manifestBySlug: Map<string, string[]>,
  cols: Record<string, number>,
  cell: (r: string[] | undefined, i: number | undefined) => string,
  notesBySlug: Map<string, string>,
): { csv: string; json: string } {
  const rows = entries.map((e) => {
    const im = imageMeta.get(e.slug);
    const mrow = manifestBySlug.get(e.slug);
    return {
      slug: e.slug,
      title: e.title,
      year: e.year,
      localImagePath: e.heroImage,
      imageSourcePage: e.imageSourceUrl ?? cell(mrow, cols.sourcePage),
      creatorOrInstitution: e.imageCredit ?? cell(mrow, cols.credit),
      licenceOrReuseStatus: e.imageLicense ?? cell(mrow, cols.license),
      imageType: e.imageType ?? "",
      imageRelation: e.imageRelation ?? "",
      sourceDownloadDate: cell(mrow, cols.downloadDate),
      width: im?.width ?? 0,
      height: im?.height ?? 0,
      fileSizeBytes: im?.size ?? 0,
      sha256: im?.hash ?? "",
      notes: notesBySlug.get(e.slug) ?? "",
      // extra machine-dedup fields (JSON only)
      dois: extractDois(e.paperUrl, e.primarySourceUrl),
      primarySourceUrl: e.primarySourceUrl ?? "",
    };
  });

  const csvLines = [MANIFEST_HEADERS.join(",")];
  for (const r of rows) {
    csvLines.push([
      r.slug, r.title, r.year, r.localImagePath, r.imageSourcePage,
      r.creatorOrInstitution, r.licenceOrReuseStatus, r.imageType, r.imageRelation,
      r.sourceDownloadDate, r.width, r.height, r.fileSizeBytes, r.sha256, r.notes,
    ].map(csvCell).join(","));
  }
  return { csv: csvLines.join("\n") + "\n", json: JSON.stringify(rows, null, 2) + "\n" };
}

/* ------------------------------------------------------------------ *
 * TypeScript serialization (deterministic, matches repo style).
 * ------------------------------------------------------------------ */

const FIELD_ORDER: (keyof Discovery)[] = [
  "slug", "title", "categorySlug", "subtopic", "year", "dateDiscovered", "dateUpdated",
  "reviewStatus", "dateReviewed", "reviewedBy", "sourceTier", "sourceAccessedAt",
  "correctionHistory", "location", "discoveringOrg", "scientificName", "classification",
  "conservationStatus", "heroImage", "imageAlt", "imageCredit", "imageSourceUrl",
  "imageLicense", "imageType", "imageRelation", "summary", "story", "gallery", "paperUrl",
  "primarySourceUrl", "supportingSources", "videoUrls", "relatedSlugs", "tags",
];

function serializeValue(value: unknown, indent: string): string {
  if (value === null || value === undefined) return "undefined";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const inline = value.every((v) => typeof v === "string" || typeof v === "number");
    if (inline) {
      const oneLine = `[${value.map((v) => serializeValue(v, indent)).join(", ")}]`;
      if (oneLine.length + indent.length <= 92) return oneLine;
    }
    const inner = indent + "  ";
    return `[\n${value.map((v) => `${inner}${serializeValue(v, inner)}`).join(",\n")},\n${indent}]`;
  }
  if (typeof value === "object") {
    const obj = value as Record<string, unknown>;
    const keys = Object.keys(obj).filter((k) => obj[k] !== undefined);
    if (keys.length === 0) return "{}";
    const inner = indent + "  ";
    const body = keys
      .map((k) => `${inner}${/^[a-z_$][\w$]*$/i.test(k) ? k : JSON.stringify(k)}: ${serializeValue(obj[k], inner)}`)
      .join(",\n");
    return `{\n${body},\n${indent}}`;
  }
  return "undefined";
}

/** Emit one Discovery as a TS object literal indented for an array element. */
export function serializeEntry(d: Discovery, baseIndent = "  "): string {
  const rec = d as unknown as Record<string, unknown>;
  const ordered: Record<string, unknown> = {};
  for (const key of FIELD_ORDER) {
    if (rec[key] !== undefined) ordered[key] = rec[key];
  }
  for (const key of Object.keys(rec)) {
    if (!(key in ordered) && rec[key] !== undefined) ordered[key] = rec[key];
  }
  return `${baseIndent}${serializeValue(ordered, baseIndent)}`;
}

function newFileContents(monthName: string, year: number, exportName: string, entries: Discovery[]): string {
  const title = monthName[0].toUpperCase() + monthName.slice(1);
  const body = entries.map((e) => serializeEntry(e, "  ")).join(",\n");
  return `import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during ${title} ${year}.
 * Imported via \`npm run import:discoveries\`. Run \`npm run validate\` before release.
 */
export const ${exportName}: Discovery[] = [
${body},
];
`;
}

function appendToExisting(text: string, exportName: string, entries: Discovery[], filePath: string): string {
  if (!text.includes(`export const ${exportName}`)) {
    throw new Error(`${filePath} does not export ${exportName}; refusing to edit.`);
  }
  const marker = text.lastIndexOf("\n];");
  if (marker < 0) throw new Error(`${filePath} has no closing "];" for the discovery array.`);
  const block = entries.map((e) => serializeEntry(e, "  ")).join(",\n");
  return `${text.slice(0, marker)}\n${block},${text.slice(marker)}`;
}

function registerInCatalog(files: PlannedFile[]): string | null {
  let catalog = readFileSync(CATALOG_FILE, "utf8");
  const importAnchor = "// scaffold:import";
  const spreadAnchor = "// scaffold:spread";
  if (!catalog.includes(importAnchor) || !catalog.includes(spreadAnchor)) {
    throw new Error("catalog.ts is missing the scaffold anchors; cannot register new files.");
  }
  let changed = false;
  for (const f of files) {
    if (!f.isNew || catalog.includes(`./${f.fileBase}"`)) continue;
    catalog = catalog
      .replace(importAnchor, `import { ${f.exportName} } from "./${f.fileBase}";\n${importAnchor}`)
      .replace(spreadAnchor, `...${f.exportName},\n  ${spreadAnchor}`);
    changed = true;
  }
  return changed ? catalog : null;
}

/* ------------------------------------------------------------------ *
 * Transactional apply.
 * ------------------------------------------------------------------ */

/** Test-only fault injection to prove rollback. */
export interface ApplyFaults {
  failBeforeImageIndex?: number;
  failBeforeFileKind?: FileOp["kind"];
  failBeforeCatalog?: boolean;
}

export interface RollbackReport {
  restored: string[];
  deletedFiles: string[];
  deletedImages: string[];
  removedDirs: string[];
}

export interface ApplyResult {
  imagesCopied: number;
  filesCreated: string[];
  filesAppended: string[];
  catalogUpdated: boolean;
  manifestCsv: string;
  manifestJson: string;
}

export class ImportError extends Error {
  rollback: RollbackReport;
  constructor(message: string, rollback: RollbackReport) {
    super(message);
    this.name = "ImportError";
    this.rollback = rollback;
  }
}

/** mkdir -p, recording only the directories that this call newly creates. */
function ensureDir(dir: string, createdDirs: string[]) {
  const missing: string[] = [];
  let cur = dir;
  while (!existsSync(cur) && isInside(ROOT, cur)) {
    missing.unshift(cur);
    cur = dirname(cur);
  }
  if (missing.length) {
    mkdirSync(dir, { recursive: true });
    createdDirs.push(...missing);
  }
}

export async function applyPlan(plan: BatchPlan, faults: ApplyFaults = {}): Promise<ApplyResult> {
  if (!plan.ok) throw new Error("Refusing to apply a plan that has errors.");
  if (plan.entries.length === 0) {
    return { imagesCopied: 0, filesCreated: [], filesAppended: [], catalogUpdated: false, manifestCsv: "", manifestJson: "" };
  }

  const stageDir = mkdtempSync(join(ROOT, ".import-stage-"));
  const writtenFiles: FileOp[] = [];
  const copiedImages: string[] = [];
  const createdDirs: string[] = [];

  const rollback = (): RollbackReport => {
    const report: RollbackReport = { restored: [], deletedFiles: [], deletedImages: [], removedDirs: [] };
    for (let i = writtenFiles.length - 1; i >= 0; i--) {
      const op = writtenFiles[i];
      if (op.existedBefore && op.original !== null) { writeFileSync(op.path, op.original); report.restored.push(relative(ROOT, op.path)); }
      else if (existsSync(op.path)) { unlinkSync(op.path); report.deletedFiles.push(relative(ROOT, op.path)); }
    }
    for (let i = copiedImages.length - 1; i >= 0; i--) {
      if (existsSync(copiedImages[i])) { unlinkSync(copiedImages[i]); report.deletedImages.push(relative(ROOT, copiedImages[i])); }
    }
    for (let i = createdDirs.length - 1; i >= 0; i--) {
      try {
        if (existsSync(createdDirs[i]) && readdirSync(createdDirs[i]).length === 0) { rmdirSync(createdDirs[i]); report.removedDirs.push(relative(ROOT, createdDirs[i])); }
      } catch { /* leave non-empty dirs */ }
    }
    return report;
  };

  try {
    // ---- Stage: copy images + write files into the temp dir, verify ----
    const stagedImages = new Map<string, string>();
    for (let i = 0; i < plan.imageOps.length; i++) {
      const op = plan.imageOps[i];
      const staged = join(stageDir, `img-${i}.webp`);
      copyFileSync(op.from, staged);
      const meta = await sharp(readFileSync(staged)).metadata();
      if (meta.format !== "webp") throw new Error(`Staged image for "${op.slug}" is not WebP.`);
      await sharp(readFileSync(staged)).raw().toBuffer(); // re-verify full decode
      stagedImages.set(op.slug, staged);
    }
    const stagedFiles = new Map<string, string>();
    for (let i = 0; i < plan.fileOps.length; i++) {
      const op = plan.fileOps[i];
      const staged = join(stageDir, `file-${i}`);
      writeFileSync(staged, op.contents);
      const back = readFileSync(staged, "utf8");
      if (back !== op.contents || back.length === 0) throw new Error(`Staged file ${op.path} failed verification.`);
      if ((op.kind === "module-new" || op.kind === "module-append") && !back.includes("export const")) {
        throw new Error(`Staged module ${op.path} is missing its export.`);
      }
      stagedFiles.set(op.path, staged);
    }

    // ---- Move into place: images, then modules/manifests, catalog LAST -
    for (let i = 0; i < plan.imageOps.length; i++) {
      if (faults.failBeforeImageIndex === i) throw new Error(`Injected failure before image #${i}.`);
      const op = plan.imageOps[i];
      ensureDir(dirname(op.to), createdDirs);
      copyFileSync(stagedImages.get(op.slug)!, op.to);
      copiedImages.push(op.to);
    }

    const ordered = [...plan.fileOps].sort((a, b) => (a.kind === "catalog" ? 1 : 0) - (b.kind === "catalog" ? 1 : 0));
    for (const op of ordered) {
      if (op.kind === "catalog" && faults.failBeforeCatalog) throw new Error("Injected failure before catalog write.");
      if (op.kind !== "catalog" && faults.failBeforeFileKind === op.kind) throw new Error(`Injected failure before writing ${op.kind}.`);
      ensureDir(dirname(op.path), createdDirs);
      writeFileSync(op.path, stagedFiles.get(op.path) ? readFileSync(stagedFiles.get(op.path)!) : op.contents);
      writtenFiles.push(op);
    }

    return {
      imagesCopied: plan.imageOps.length,
      filesCreated: plan.fileOps.filter((o) => o.kind === "module-new").map((o) => relative(ROOT, o.path)),
      filesAppended: plan.fileOps.filter((o) => o.kind === "module-append").map((o) => relative(ROOT, o.path)),
      catalogUpdated: plan.fileOps.some((o) => o.kind === "catalog"),
      manifestCsv: relative(ROOT, plan.manifestCsvPath),
      manifestJson: relative(ROOT, plan.manifestJsonPath),
    };
  } catch (e) {
    const report = rollback();
    throw new ImportError((e as Error).message, report);
  } finally {
    rmSync(stageDir, { recursive: true, force: true });
  }
}

/* ------------------------------------------------------------------ *
 * Report rendering (shared by both CLIs).
 * ------------------------------------------------------------------ */

export function renderReport(plan: BatchPlan): string {
  const lines: string[] = [];
  const errors = plan.issues.filter((i) => i.level === "error");
  const warnings = plan.issues.filter((i) => i.level === "warn");

  lines.push(`\nDiscovery batch: ${relative(ROOT, plan.bundleDir)}  (name: ${plan.batchName})`);
  lines.push(`  entries in bundle:   ${plan.stats.entryCount}`);
  lines.push(`  manifest data rows:  ${plan.manifestRowCount}`);
  lines.push(`  images to copy:      ${plan.imageOps.length}  (${(plan.stats.imageBytes / 1024).toFixed(0)} KiB total)`);
  lines.push(`  monthly modules:     ${plan.stats.newFiles} new, ${plan.stats.appendedFiles} appended`);
  if (plan.stats.entryCount) {
    lines.push(`  by year:             ${JSON.stringify(plan.stats.byYear)}`);
    lines.push(`  by category:         ${JSON.stringify(plan.stats.byCategory)}`);
    lines.push(`  by image relation:   ${JSON.stringify(plan.stats.byImageRelation)}`);
    lines.push(`  audit manifest:      ${relative(ROOT, plan.manifestCsvPath)} (+ .json)`);
  }

  if (plan.imageMeta.size) {
    lines.push("\n  images (decoded):");
    for (const m of plan.imageMeta.values()) {
      lines.push(`    ${m.slug}: ${m.width}×${m.height}px, ${(m.size / 1024).toFixed(0)} KiB, ${m.format}`);
    }
  }

  if (plan.files.length) {
    lines.push("\n  target modules:");
    for (const f of plan.files) lines.push(`    ${f.isNew ? "create" : "append"}  src/content/${f.fileBase}.ts  (+${f.count})`);
  }

  if (errors.length) {
    lines.push(`\nErrors (${errors.length}) — nothing will be written:`);
    for (const i of errors) lines.push(`  ✗ ${i.code}${i.slug ? ` [${i.slug}]` : ""}: ${i.message}`);
  }
  if (warnings.length) {
    lines.push(`\nWarnings (${warnings.length}):`);
    for (const i of warnings) lines.push(`  • ${i.code}${i.slug ? ` [${i.slug}]` : ""}: ${i.message}`);
  }
  if (!errors.length) lines.push(`\n✓ Batch is valid and ready to import (${plan.stats.entryCount} entries).`);
  lines.push("");
  return lines.join("\n");
}
