/**
 * Deterministic discovery-batch import core.
 *
 * Reads an externally prepared batch bundle:
 *
 *   imports/discovery-batches/<batch>/
 *     discoveries.json     — array of Discovery objects (see the Discovery interface)
 *     image-rights.csv     — one row per discovery (rights manifest)
 *     images/<slug>.webp   — the local hero image for each entry
 *     README.md            — human notes about the batch
 *
 * and produces a plan that:
 *   - validates every entry against the Discovery interface and catalog rules,
 *   - rejects duplicate slugs, titles, scientific names, DOIs, primary-source
 *     URLs, and image hashes (within the batch and against the live catalog),
 *   - groups entries into the correct monthly TypeScript modules,
 *   - copies images to public/images/discoveries/<year>/<slug>.webp,
 *   - registers any new monthly module in src/content/catalog.ts.
 *
 * Nothing is written unless `apply()` is called on a plan with zero errors, and
 * even then the catalog registration is written last so the catalog is never
 * left half-registered.  This module performs NO research and invents NO data;
 * it only integrates what the bundle supplies.
 */
import {
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  statSync,
  mkdirSync,
  copyFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname, relative } from "node:path";

import { discoveries as existingCatalog } from "@/content/catalog";
import { categories } from "@/content/categories";
import { slugify } from "@/lib/hubs";
import { monthLabel } from "@/lib/seo";
import { validateCatalog, type ContentIssue } from "@/lib/validation/rules";
import type { Discovery, DiscoveryImageType } from "@/content/types";

export const ROOT = join(dirname(new URL(import.meta.url).pathname), "..", "..");
const CONTENT_DIR = join(ROOT, "src", "content");
const CATALOG_FILE = join(CONTENT_DIR, "catalog.ts");
const PUBLIC_DIR = join(ROOT, "public");

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

export interface BatchIssue {
  level: "error" | "warn";
  code: string;
  slug?: string;
  message: string;
}

export interface PlannedImage {
  slug: string;
  from: string;
  to: string;
  hash: string;
}

export interface PlannedFile {
  fileBase: string;
  filePath: string;
  exportName: string;
  monthName: string;
  year: number;
  isNew: boolean;
  entries: Discovery[];
}

export interface BatchPlan {
  bundleDir: string;
  ok: boolean;
  entries: Discovery[];
  issues: BatchIssue[];
  files: PlannedFile[];
  images: PlannedImage[];
  manifestRowCount: number;
  stats: {
    entryCount: number;
    byYear: Record<string, number>;
    byCategory: Record<string, number>;
    byImageRelation: Record<string, number>;
    newFiles: number;
    appendedFiles: number;
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

function sha256(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function isWebp(path: string): boolean {
  const fd = readFileSync(path);
  if (fd.length < 12) return false;
  return fd.toString("ascii", 0, 4) === "RIFF" && fd.toString("ascii", 8, 12) === "WEBP";
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

function canonicalHero(year: number, slug: string): string {
  return `/images/discoveries/${year}/${slug}.webp`;
}

/** Every image file already committed under public/images (for hash collisions). */
function existingImageHashes(): Map<string, string> {
  const byHash = new Map<string, string>();
  const walk = (dir: string) => {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(webp|png|jpe?g|gif)$/i.test(entry.name)) {
        byHash.set(sha256(full), relative(PUBLIC_DIR, full));
      }
    }
  };
  walk(join(PUBLIC_DIR, "images"));
  return byHash;
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

/** Resolve a manifest column index by matching keywords against headers. */
function resolveColumns(header: string[]): Record<string, number> {
  const norm = header.map((h) => slugify(h));
  const find = (...keys: string[]) =>
    norm.findIndex((h) => keys.some((k) => h === k || h.includes(k)));
  return {
    slug: find("slug"),
    localPath: find("local-image-path", "image-path", "local-path"),
    hash: find("sha-256-hash", "sha256-hash", "sha-256", "sha256", "hash"),
    imageType: find("image-type"),
    imageRelation: find("image-relation", "relation"),
    credit: find("creator-or-institution", "creator", "credit"),
    license: find("licence-or-reuse-status", "license-or-reuse-status", "license", "licence"),
    sourcePage: find("image-source-page", "source-page", "image-source-url"),
  };
}

/* ------------------------------------------------------------------ *
 * Plan builder.
 * ------------------------------------------------------------------ */

export function buildPlan(bundleDir: string): BatchPlan {
  const issues: BatchIssue[] = [];
  const err = (code: string, message: string, slug?: string) =>
    issues.push({ level: "error", code, message, slug });
  const warn = (code: string, message: string, slug?: string) =>
    issues.push({ level: "warn", code, message, slug });

  const plan: BatchPlan = {
    bundleDir,
    ok: false,
    entries: [],
    issues,
    files: [],
    images: [],
    manifestRowCount: 0,
    stats: {
      entryCount: 0,
      byYear: {},
      byCategory: {},
      byImageRelation: {},
      newFiles: 0,
      appendedFiles: 0,
    },
  };

  const jsonPath = join(bundleDir, "discoveries.json");
  const csvPath = join(bundleDir, "image-rights.csv");
  const imagesDir = join(bundleDir, "images");

  if (!existsSync(bundleDir) || !statSync(bundleDir).isDirectory()) {
    err("missing-bundle", `Bundle directory "${bundleDir}" does not exist.`);
    return plan;
  }
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
    existingCatalog.filter((d) => d.scientificName).map((d) => d.scientificName!.trim().toLowerCase()),
  );
  const existingPrimary = new Set(
    existingCatalog.map((d) => normUrl(d.primarySourceUrl)).filter(Boolean) as string[],
  );
  const existingDois = new Set(
    existingCatalog.flatMap((d) => extractDois(d.paperUrl, d.primarySourceUrl)),
  );
  const existingHashes = existingImageHashes();

  // Intra-batch indexes (first-seen wins; collisions reported).
  const seenSlug = new Map<string, string>();
  const seenTitle = new Map<string, string>();
  const seenSci = new Map<string, string>();
  const seenPrimary = new Map<string, string>();
  const seenDoi = new Map<string, string>();
  const seenHash = new Map<string, string>();

  const entries: Discovery[] = [];
  const hashBySlug = new Map<string, string>();

  raw.forEach((item, index) => {
    const d = item as Partial<Discovery>;
    const slug = typeof d.slug === "string" ? d.slug : `#${index}`;
    const at = (code: string, message: string) => err(code, message, slug);

    // ---- Required scalar fields & shapes -------------------------------
    if (isBlank(d.slug)) return at("missing-slug", `Entry #${index} has no slug.`);
    if (!SLUG_RE.test(d.slug!)) at("invalid-slug", `Slug "${d.slug}" is not lowercase kebab-case.`);
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

    // ---- Bundle image: exists, is a real WebP, hashed ------------------
    const imgSrc = join(imagesDir, `${d.slug}.webp`);
    let hash = "";
    if (!existsSync(imgSrc)) {
      at("missing-image", `Bundle image images/${d.slug}.webp is missing.`);
    } else if (!isWebp(imgSrc)) {
      at("bad-image-format", `images/${d.slug}.webp is not a valid WebP file (RIFF/WEBP header missing).`);
    } else {
      hash = sha256(imgSrc);
      hashBySlug.set(d.slug!, hash);
    }

    // ---- Duplicate rejection: catalog + intra-batch --------------------
    const titleKey = d.title ? slugify(d.title) : "";
    const sciKey = d.scientificName ? d.scientificName.trim().toLowerCase() : "";
    const primaryKey = normUrl(d.primarySourceUrl);
    const dois = extractDois(d.paperUrl, d.primarySourceUrl);

    if (existingSlugs.has(d.slug!)) at("duplicate-slug", `Slug "${d.slug}" already exists in the catalog.`);
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
      if (seenPrimary.has(primaryKey)) at("duplicate-primary-source", `primarySourceUrl "${d.primarySourceUrl}" is repeated within the batch.`);
      else seenPrimary.set(primaryKey, d.slug!);
    }
    for (const doi of dois) {
      if (existingDois.has(doi)) at("duplicate-doi", `DOI "${doi}" already exists in the catalog.`);
      if (seenDoi.has(doi)) at("duplicate-doi", `DOI "${doi}" is repeated within the batch (matches "${seenDoi.get(doi)}").`);
      else seenDoi.set(doi, d.slug!);
    }
    if (hash) {
      if (existingHashes.has(hash)) at("duplicate-image-hash", `Image is byte-identical to existing repository image ${existingHashes.get(hash)}.`);
      if (seenHash.has(hash)) at("duplicate-image-hash", `Image is byte-identical to batch image for "${seenHash.get(hash)}".`);
      else seenHash.set(hash, d.slug!);
    }

    // ---- Normalize the accepted entry (deterministic hero + gallery) ---
    const gallery = Array.isArray(d.gallery) ? d.gallery.slice() : [];
    if (!gallery.includes(hero)) gallery.unshift(hero);
    const entry = { ...(d as Discovery), heroImage: hero, gallery, year };
    entries.push(entry);
  });

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
  try {
    const rows = parseCsv(readFileSync(csvPath, "utf8"));
    if (rows.length < 1) {
      err("empty-manifest", "image-rights.csv has no header row.");
    } else {
      const cols = resolveColumns(rows[0]);
      const dataRows = rows.slice(1);
      plan.manifestRowCount = dataRows.length;
      if (cols.slug < 0) err("manifest-columns", "image-rights.csv is missing a 'slug' column.");
      if (cols.hash < 0) err("manifest-columns", "image-rights.csv is missing a SHA-256 'hash' column.");
      if (dataRows.length !== entries.length) {
        err("manifest-count", `image-rights.csv has ${dataRows.length} data rows but discoveries.json has ${entries.length} entries.`);
      }
      const rowSlugs = new Set<string>();
      for (const r of dataRows) {
        const rslug = cols.slug >= 0 ? (r[cols.slug] ?? "").trim() : "";
        if (!rslug) { err("manifest-row", "A manifest row has no slug."); continue; }
        rowSlugs.add(rslug);
        const entry = entries.find((e) => e.slug === rslug);
        if (!entry) { err("manifest-orphan", `Manifest row "${rslug}" has no matching discovery.`, rslug); continue; }
        if (cols.hash >= 0) {
          const rowHash = (r[cols.hash] ?? "").trim().toLowerCase();
          const realHash = hashBySlug.get(rslug);
          if (realHash && rowHash && rowHash !== realHash) {
            err("manifest-hash", `Manifest SHA-256 for "${rslug}" does not match the actual image hash.`, rslug);
          }
        }
        if (cols.localPath >= 0) {
          const rowPath = (r[cols.localPath] ?? "").trim();
          if (rowPath && rowPath !== entry.heroImage) {
            err("manifest-path", `Manifest local path for "${rslug}" ("${rowPath}") does not match "${entry.heroImage}".`, rslug);
          }
        }
      }
      for (const e of entries) {
        if (!rowSlugs.has(e.slug)) err("manifest-missing-row", `Discovery "${e.slug}" has no row in image-rights.csv.`, e.slug);
      }
    }
  } catch (e) {
    err("manifest-parse", `Could not read image-rights.csv: ${(e as Error).message}`);
  }

  // ---- Full catalog rules on the merged set (blocks on new-entry errors) -
  const merged = [...existingCatalog, ...entries];
  const catalogIssues: ContentIssue[] = validateCatalog({ discoveries: merged });
  const newSlugSet = new Set(entries.map((e) => e.slug));
  for (const ci of catalogIssues) {
    const scoped = ci.slug === undefined || newSlugSet.has(ci.slug);
    if (!scoped) continue; // pre-existing catalog issue, not our concern here
    if (ci.level === "error") err(`catalog:${ci.code}`, ci.message, ci.slug);
    else warn(`catalog:${ci.code}`, ci.message, ci.slug);
  }

  // ---- Plan monthly files & image copies ------------------------------
  const byFile = new Map<string, PlannedFile>();
  for (const e of entries) {
    const year = e.year;
    const monthIdx = Number(e.dateDiscovered.slice(5, 7)) - 1;
    const monthName = MONTHS[monthIdx] ?? monthLabel(monthIdx + 1).toLowerCase();
    const fileBase = `discoveries-${monthName}-${year}`;
    const filePath = join(CONTENT_DIR, `${fileBase}.ts`);
    let pf = byFile.get(fileBase);
    if (!pf) {
      pf = {
        fileBase,
        filePath,
        exportName: `${monthName}${year}Discoveries`,
        monthName,
        year,
        isNew: !existsSync(filePath),
        entries: [],
      };
      byFile.set(fileBase, pf);
    }
    pf.entries.push(e);
    plan.images.push({ slug: e.slug, from: join(imagesDir, `${e.slug}.webp`), to: join(PUBLIC_DIR, "images", "discoveries", String(year), `${e.slug}.webp`), hash: hashBySlug.get(e.slug) ?? "" });
  }
  plan.files = [...byFile.values()].sort((a, b) => a.fileBase.localeCompare(b.fileBase));

  // ---- Stats -----------------------------------------------------------
  for (const e of entries) {
    plan.stats.byYear[e.year] = (plan.stats.byYear[e.year] ?? 0) + 1;
    plan.stats.byCategory[e.categorySlug] = (plan.stats.byCategory[e.categorySlug] ?? 0) + 1;
    const rel = e.imageRelation ?? "unspecified";
    plan.stats.byImageRelation[rel] = (plan.stats.byImageRelation[rel] ?? 0) + 1;
  }
  plan.stats.entryCount = entries.length;
  plan.stats.newFiles = plan.files.filter((f) => f.isNew).length;
  plan.stats.appendedFiles = plan.files.filter((f) => !f.isNew).length;

  plan.ok = !issues.some((i) => i.level === "error");
  return plan;
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
  // Preserve any extra keys not in FIELD_ORDER (forward-compatible).
  for (const key of Object.keys(rec)) {
    if (!(key in ordered) && rec[key] !== undefined) ordered[key] = rec[key];
  }
  return `${baseIndent}${serializeValue(ordered, baseIndent)}`;
}

function newFileContents(pf: PlannedFile): string {
  const title = pf.monthName[0].toUpperCase() + pf.monthName.slice(1);
  const body = pf.entries.map((e) => serializeEntry(e, "  ")).join(",\n");
  return `import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during ${title} ${pf.year}.
 * Imported via \`npm run import:discoveries\`. Run \`npm run validate\` before release.
 */
export const ${pf.exportName}: Discovery[] = [
${body},
];
`;
}

function appendToExistingFile(filePath: string, exportName: string, entries: Discovery[]): string {
  const text = readFileSync(filePath, "utf8");
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
    if (catalog.includes(`./${f.fileBase}"`)) continue;
    catalog = catalog
      .replace(importAnchor, `import { ${f.exportName} } from "./${f.fileBase}";\n${importAnchor}`)
      .replace(spreadAnchor, `...${f.exportName},\n  ${spreadAnchor}`);
    changed = true;
  }
  return changed ? catalog : null;
}

/* ------------------------------------------------------------------ *
 * Apply (mutating). Only call on a plan with plan.ok === true.
 * ------------------------------------------------------------------ */

export interface ApplyResult {
  imagesCopied: number;
  filesCreated: string[];
  filesAppended: string[];
  catalogUpdated: boolean;
}

export function applyPlan(plan: BatchPlan): ApplyResult {
  if (!plan.ok) throw new Error("Refusing to apply a plan that has errors.");
  if (plan.entries.length === 0) {
    return { imagesCopied: 0, filesCreated: [], filesAppended: [], catalogUpdated: false };
  }

  // 1) Copy images first — stray copies are harmless if a later step fails.
  for (const img of plan.images) {
    mkdirSync(dirname(img.to), { recursive: true });
    copyFileSync(img.from, img.to);
  }

  // 2) Compute every file's new contents in memory before writing anything.
  const newFiles = plan.files.filter((f) => f.isNew).map((f) => ({ path: f.filePath, contents: newFileContents(f) }));
  const appendFiles = plan.files
    .filter((f) => !f.isNew)
    .map((f) => ({ path: f.filePath, contents: appendToExistingFile(f.filePath, f.exportName, f.entries) }));
  const catalogContents = registerInCatalog(plan.files);

  // 3) Write monthly files, then the catalog registration LAST.
  const filesCreated: string[] = [];
  const filesAppended: string[] = [];
  for (const f of newFiles) { writeFileSync(f.path, f.contents); filesCreated.push(relative(ROOT, f.path)); }
  for (const f of appendFiles) { writeFileSync(f.path, f.contents); filesAppended.push(relative(ROOT, f.path)); }
  if (catalogContents) writeFileSync(CATALOG_FILE, catalogContents);

  return {
    imagesCopied: plan.images.length,
    filesCreated,
    filesAppended,
    catalogUpdated: catalogContents !== null,
  };
}

/* ------------------------------------------------------------------ *
 * Report rendering (shared by both CLIs).
 * ------------------------------------------------------------------ */

export function renderReport(plan: BatchPlan): string {
  const lines: string[] = [];
  const errors = plan.issues.filter((i) => i.level === "error");
  const warnings = plan.issues.filter((i) => i.level === "warn");

  lines.push(`\nDiscovery batch: ${relative(ROOT, plan.bundleDir)}`);
  lines.push(`  entries in bundle:   ${plan.stats.entryCount}`);
  lines.push(`  manifest data rows:  ${plan.manifestRowCount}`);
  lines.push(`  images to copy:      ${plan.images.length}`);
  lines.push(
    `  monthly files:       ${plan.stats.newFiles} new, ${plan.stats.appendedFiles} appended`,
  );
  if (plan.stats.entryCount) {
    lines.push(`  by year:             ${JSON.stringify(plan.stats.byYear)}`);
    lines.push(`  by category:         ${JSON.stringify(plan.stats.byCategory)}`);
    lines.push(`  by image relation:   ${JSON.stringify(plan.stats.byImageRelation)}`);
  }

  if (plan.files.length) {
    lines.push("\n  target modules:");
    for (const f of plan.files) {
      lines.push(`    ${f.isNew ? "create" : "append"}  src/content/${f.fileBase}.ts  (+${f.entries.length})`);
    }
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
