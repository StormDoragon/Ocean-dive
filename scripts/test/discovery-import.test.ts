#!/usr/bin/env node
/**
 * Regression tests for the discovery import pipeline.
 *
 * Self-contained (no test framework): run with `npm run test:discovery-import`.
 * All fixtures are synthetic and generated at runtime with sharp inside an
 * in-repo, git-ignored temp directory (.import-tests/) — no real or copyrighted
 * images are used. Tests that mutate the repository snapshot the watched paths
 * first and restore them afterwards, and rollback tests assert the repository
 * tree hash is byte-for-byte identical before and after a simulated failure.
 */
import {
  mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, rmSync,
  unlinkSync,
} from "node:fs";
import { join, dirname, relative } from "node:path";
import { tmpdir } from "node:os";
import { createHash } from "node:crypto";
import sharp from "sharp";

import { buildPlan, applyPlan, ImportError, ROOT } from "../lib/import-batch";

const TESTROOT = join(ROOT, ".import-tests");
const CONTENT_DIR = join(ROOT, "src", "content");
const IMG_DIR = join(ROOT, "public", "images", "discoveries");
const MANIFEST_DIR = join(ROOT, "docs", "discovery-image-rights");

/* ------------------------------------------------------------------ *
 * Tiny test harness.
 * ------------------------------------------------------------------ */
let passed = 0;
const failures: string[] = [];
async function test(name: string, fn: () => Promise<void> | void) {
  const before = snapshot();
  try {
    await fn();
    passed++;
    console.log(`  ✓ ${name}`);
  } catch (e) {
    failures.push(`${name}: ${(e as Error).message}`);
    console.log(`  ✗ ${name}\n      ${(e as Error).message}`);
  } finally {
    restore(before); // always leave the repo as we found it
  }
}
function assert(cond: unknown, msg: string) { if (!cond) throw new Error(msg); }
function assertErr(plan: { issues: Array<{ level: string; code: string }> }, code: string) {
  const has = plan.issues.some((i) => i.level === "error" && i.code === code);
  assert(has, `expected error "${code}"; got [${plan.issues.filter((i) => i.level === "error").map((i) => i.code).join(", ")}]`);
}

/* ------------------------------------------------------------------ *
 * Watched-path snapshot / restore + tree hashing.
 * ------------------------------------------------------------------ */
function watchedFiles(): string[] {
  const out: string[] = [];
  const walk = (dir: string, filter?: (f: string) => boolean) => {
    if (!existsSync(dir)) return;
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, e.name);
      if (e.isDirectory()) walk(full, filter);
      else if (!filter || filter(e.name)) out.push(full);
    }
  };
  walk(IMG_DIR);
  walk(MANIFEST_DIR);
  for (const e of readdirSync(CONTENT_DIR)) {
    if (/^discoveries-.*\.ts$/.test(e) || e === "catalog.ts") out.push(join(CONTENT_DIR, e));
  }
  return out.sort();
}
function snapshot(): Map<string, Buffer> {
  const m = new Map<string, Buffer>();
  for (const f of watchedFiles()) m.set(f, readFileSync(f));
  return m;
}
function treeHash(snap: Map<string, Buffer>): string {
  const h = createHash("sha256");
  for (const key of [...snap.keys()].sort()) {
    h.update(relative(ROOT, key));
    h.update(createHash("sha256").update(snap.get(key)!).digest());
  }
  return h.digest("hex");
}
function pruneEmptyDirs(root: string) {
  const walk = (dir: string): boolean => {
    if (!existsSync(dir)) return false;
    let empty = true;
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, e.name);
      if (e.isDirectory()) { if (!walk(full)) empty = false; }
      else empty = false;
    }
    if (empty && dir !== root) { rmSync(dir, { recursive: true, force: true }); return true; }
    return empty;
  };
  walk(root);
}
function restore(before: Map<string, Buffer>) {
  for (const f of watchedFiles()) if (!before.has(f)) { try { unlinkSync(f); } catch { /* */ } }
  for (const [f, buf] of before) {
    mkdirSync(dirname(f), { recursive: true });
    if (!existsSync(f) || !readFileSync(f).equals(buf)) writeFileSync(f, buf);
  }
  pruneEmptyDirs(IMG_DIR);
  if (existsSync(MANIFEST_DIR)) pruneEmptyDirs(MANIFEST_DIR);
}

/* ------------------------------------------------------------------ *
 * Fixture builders (synthetic; sharp-generated WebP).
 * ------------------------------------------------------------------ */
let seq = 0;
function freshBundle(): string {
  mkdirSync(TESTROOT, { recursive: true });
  const dir = join(TESTROOT, `b${Date.now()}-${seq++}`);
  mkdirSync(join(dir, "images"), { recursive: true });
  return dir;
}
async function writeWebp(dir: string, slug: string, w = 1600, h = 1000, tint = 40) {
  const buf = await sharp({ create: { width: w, height: h, channels: 3, background: { r: tint % 256, g: (tint * 3) % 256, b: (tint * 7) % 256 } } })
    .webp({ quality: 82 }).toBuffer();
  writeFileSync(join(dir, "images", `${slug}.webp`), buf);
  return { hash: createHash("sha256").update(buf).digest("hex"), width: w, height: h, size: buf.length };
}
function E(slug: string, over: Record<string, unknown> = {}) {
  return {
    slug, title: `Fixture ${slug}`, categorySlug: "ocean", subtopic: "New species",
    year: 2022, dateDiscovered: "2022-03-15", reviewStatus: "source-verified",
    sourceTier: "Tier 1", sourceAccessedAt: "2026-07-13",
    location: { name: `Site ${slug}`, lat: -23.5, lng: -71.3, country: "International", depthMeters: 5000 },
    discoveringOrg: `Org ${slug}`,
    imageAlt: "A synthetic fixture image.", imageCredit: "Fixture Lab",
    imageSourceUrl: "https://example.org/rights", imageLicense: "CC BY 4.0",
    imageType: "photograph", imageRelation: "exact",
    summary: `A synthetic fixture entry (${slug}) used only to exercise the importer end to end here.`,
    story: { whyThere: "Synthetic fixture rationale for the survey location used in this test.", howFound: "Synthetic fixture method describing how the fixture record was produced here.", whatMakesUnique: "A fixture, not a real discovery, used purely to validate the importer." },
    gallery: [], paperUrl: `https://doi.org/10.9999/${slug}`, primarySourceUrl: `https://example.org/${slug}`,
    videoUrls: [], relatedSlugs: [], tags: ["fixture", "ocean", "test"],
    ...over,
  };
}
interface Meta { hash: string; width: number; height: number; size: number }
function csvFor(entries: Array<{ slug: string; title: string; year: number; imageType: string; imageRelation: string }>, meta: Record<string, Meta>, tamper: (slug: string, row: string[]) => string[] = (_s, r) => r) {
  const header = "slug,title,year,local image path,image source page,creator or institution,licence or reuse status,image type,image relation,source download date,width,height,file size,sha-256 hash,notes";
  const lines = [header];
  for (const e of entries) {
    const m = meta[e.slug] ?? { hash: "", width: 0, height: 0, size: 0 };
    let row = [e.slug, e.title, String(e.year), `/images/discoveries/${e.year}/${e.slug}.webp`, "https://example.org/rights", "Fixture Lab", "CC BY 4.0", e.imageType, e.imageRelation, "2026-07-13", String(m.width), String(m.height), String(m.size), m.hash, "synthetic"];
    row = tamper(e.slug, row);
    lines.push(row.map((c) => (/[",\n]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c)).join(","));
  }
  return lines.join("\n") + "\n";
}
/** A ready-made valid single-entry bundle. */
async function validBundle(slug = "zz-fixture-alpha") {
  const dir = freshBundle();
  const m = await writeWebp(dir, slug);
  const e = E(slug);
  writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e]));
  writeFileSync(join(dir, "image-rights.csv"), csvFor([e], { [slug]: m }));
  return { dir, slug, meta: m, entry: e };
}

/* ------------------------------------------------------------------ *
 * Tests.
 * ------------------------------------------------------------------ */
async function run() {
  console.log("\ndiscovery-import regression suite\n");

  await test("valid dry-run", async () => {
    const { dir } = await validBundle();
    const plan = await buildPlan(dir);
    assert(plan.ok, `expected ok; errors: ${plan.issues.filter((i) => i.level === "error").map((i) => i.code)}`);
    assert(plan.entries.length === 1, "one entry");
    assert(plan.imageMeta.size === 1, "one decoded image");
    const im = [...plan.imageMeta.values()][0];
    assert(im.width === 1600 && im.height === 1000, "reports decoded dimensions");
  });

  await test("valid apply writes files + manifest (harness reverts afterwards)", async () => {
    const { dir, slug } = await validBundle("zz-fixture-apply");
    const plan = await buildPlan(dir);
    assert(plan.ok, "plan ok");
    const res = await applyPlan(plan);
    assert(res.imagesCopied === 1, "one image copied");
    assert(existsSync(join(IMG_DIR, "2022", `${slug}.webp`)), "hero image on disk");
    assert(existsSync(join(MANIFEST_DIR, plan.batchName + ".csv")), "manifest csv on disk");
    const mj = JSON.parse(readFileSync(join(MANIFEST_DIR, plan.batchName + ".json"), "utf8"));
    assert(Array.isArray(mj) && mj.length === 1 && mj[0].slug === slug, "manifest json has the row");
    assert(mj[0].sha256 && mj[0].width === 1600, "manifest records hash + dims");
    assert(res.catalogUpdated, "new module registered in catalog");
    // The harness snapshots before and restores after, proving reversibility.
  });

  await test("empty batch is a no-op success", async () => {
    const dir = freshBundle();
    writeFileSync(join(dir, "discoveries.json"), "[]");
    writeFileSync(join(dir, "image-rights.csv"), "slug,sha-256 hash\n");
    const plan = await buildPlan(dir);
    assert(plan.ok, "empty batch ok");
    const res = await applyPlan(plan);
    assert(res.imagesCopied === 0 && res.filesCreated.length === 0, "nothing written");
  });

  await test("malformed JSON", async () => {
    const dir = freshBundle();
    writeFileSync(join(dir, "discoveries.json"), "{ not json ");
    writeFileSync(join(dir, "image-rights.csv"), "slug\n");
    assertErr(await buildPlan(dir), "invalid-json");
  });

  await test("missing manifest", async () => {
    const dir = freshBundle();
    writeFileSync(join(dir, "discoveries.json"), "[]");
    assertErr(await buildPlan(dir), "missing-csv");
  });

  await test("malformed CSV (no header / columns)", async () => {
    const { dir, slug, meta } = await validBundle("zz-fixture-badcsv");
    writeFileSync(join(dir, "image-rights.csv"), "not_a_slug_column,whatever\nfoo,bar\n");
    void slug; void meta;
    const plan = await buildPlan(dir);
    assertErr(plan, "manifest-columns");
  });

  await test("duplicate slug (within batch)", async () => {
    const dir = freshBundle();
    const m1 = await writeWebp(dir, "zz-dup", 1600, 1000, 10);
    const e1 = E("zz-dup"); const e2 = E("zz-dup", { title: "Fixture Two", dateDiscovered: "2022-04-01" });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e1, e2]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e1], { "zz-dup": m1 }));
    assertErr(await buildPlan(dir), "duplicate-slug");
  });

  await test("duplicate normalized title", async () => {
    const dir = freshBundle();
    const a = await writeWebp(dir, "zz-t-a", 1600, 1000, 11);
    const b = await writeWebp(dir, "zz-t-b", 1600, 1000, 22);
    const e1 = E("zz-t-a", { title: "Same Title" });
    const e2 = E("zz-t-b", { title: "Same  Title", dateDiscovered: "2022-04-02" });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e1, e2]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e1, e2], { "zz-t-a": a, "zz-t-b": b }));
    assertErr(await buildPlan(dir), "duplicate-title");
  });

  await test("duplicate scientific name", async () => {
    const dir = freshBundle();
    const a = await writeWebp(dir, "zz-s-a", 1600, 1000, 33);
    const b = await writeWebp(dir, "zz-s-b", 1600, 1000, 44);
    const e1 = E("zz-s-a", { scientificName: "Genus species" });
    const e2 = E("zz-s-b", { scientificName: "genus  species", dateDiscovered: "2022-04-03" });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e1, e2]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e1, e2], { "zz-s-a": a, "zz-s-b": b }));
    assertErr(await buildPlan(dir), "duplicate-scientific-name");
  });

  await test("duplicate DOI", async () => {
    const dir = freshBundle();
    const a = await writeWebp(dir, "zz-d-a", 1600, 1000, 55);
    const b = await writeWebp(dir, "zz-d-b", 1600, 1000, 66);
    const e1 = E("zz-d-a", { paperUrl: "https://doi.org/10.1000/shared" });
    const e2 = E("zz-d-b", { paperUrl: "https://doi.org/10.1000/shared", dateDiscovered: "2022-04-04" });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e1, e2]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e1, e2], { "zz-d-a": a, "zz-d-b": b }));
    assertErr(await buildPlan(dir), "duplicate-doi");
  });

  await test("duplicate primary source URL", async () => {
    const dir = freshBundle();
    const a = await writeWebp(dir, "zz-p-a", 1600, 1000, 77);
    const b = await writeWebp(dir, "zz-p-b", 1600, 1000, 88);
    const e1 = E("zz-p-a", { primarySourceUrl: "https://example.org/shared", paperUrl: "https://doi.org/10.1/a" });
    const e2 = E("zz-p-b", { primarySourceUrl: "https://example.org/shared/", paperUrl: "https://doi.org/10.1/b", dateDiscovered: "2022-04-05" });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e1, e2]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e1, e2], { "zz-p-a": a, "zz-p-b": b }));
    assertErr(await buildPlan(dir), "duplicate-primary-source");
  });

  await test("duplicate image hash (byte-identical)", async () => {
    const dir = freshBundle();
    const a = await writeWebp(dir, "zz-h-a", 1600, 1000, 99);
    // copy identical bytes to a second slug
    writeFileSync(join(dir, "images", "zz-h-b.webp"), readFileSync(join(dir, "images", "zz-h-a.webp")));
    const e1 = E("zz-h-a"); const e2 = E("zz-h-b", { dateDiscovered: "2022-04-06" });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e1, e2]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e1, e2], { "zz-h-a": a, "zz-h-b": a }));
    assertErr(await buildPlan(dir), "duplicate-image-hash");
  });

  await test("corrupt WebP (truncated)", async () => {
    const dir = freshBundle();
    const full = await sharp({ create: { width: 1600, height: 1000, channels: 3, background: { r: 1, g: 2, b: 3 } } }).webp().toBuffer();
    writeFileSync(join(dir, "images", "zz-corrupt.webp"), full.subarray(0, 24)); // header only, no pixels
    const e = E("zz-corrupt");
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e], { "zz-corrupt": { hash: "x", width: 0, height: 0, size: 0 } }));
    const plan = await buildPlan(dir);
    assert(plan.issues.some((i) => i.level === "error" && (i.code === "undecodable-image" || i.code === "bad-image-format")), "corrupt image rejected");
  });

  await test("wrong image format behind .webp extension", async () => {
    const dir = freshBundle();
    const png = await sharp({ create: { width: 1600, height: 1000, channels: 3, background: { r: 5, g: 6, b: 7 } } }).png().toBuffer();
    writeFileSync(join(dir, "images", "zz-png.webp"), png); // real PNG, .webp name
    const e = E("zz-png");
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e], { "zz-png": { hash: "x", width: 1600, height: 1000, size: png.length } }));
    assertErr(await buildPlan(dir), "bad-image-format");
  });

  await test("image too small (< 800×500)", async () => {
    const dir = freshBundle();
    const m = await writeWebp(dir, "zz-small", 400, 300, 12);
    const e = E("zz-small");
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e], { "zz-small": m }));
    assertErr(await buildPlan(dir), "image-too-small");
  });

  await test("manifest / image hash mismatch", async () => {
    const dir = freshBundle();
    const m = await writeWebp(dir, "zz-mm", 1600, 1000, 13);
    const e = E("zz-mm");
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e], { "zz-mm": m }, (_s, r) => { r[13] = "deadbeef"; return r; }));
    assertErr(await buildPlan(dir), "manifest-hash");
  });

  await test("invalid category / subtopic", async () => {
    const dir = freshBundle();
    const m = await writeWebp(dir, "zz-cat", 1600, 1000, 14);
    const e = E("zz-cat", { categorySlug: "not-a-category" });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e], { "zz-cat": m }));
    assertErr(await buildPlan(dir), "invalid-category");
  });

  await test("invalid date", async () => {
    const dir = freshBundle();
    const m = await writeWebp(dir, "zz-date", 1600, 1000, 15);
    const e = E("zz-date", { dateDiscovered: "2022-13-40", year: 2022 });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e], { "zz-date": m }));
    assertErr(await buildPlan(dir), "invalid-date");
  });

  await test("invalid coordinates", async () => {
    const dir = freshBundle();
    const m = await writeWebp(dir, "zz-coord", 1600, 1000, 16);
    const e = E("zz-coord", { location: { name: "X", lat: 200, lng: 500, country: "X" } });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e], { "zz-coord": m }));
    assertErr(await buildPlan(dir), "invalid-location");
  });

  await test("broken relatedSlug", async () => {
    const dir = freshBundle();
    const m = await writeWebp(dir, "zz-rel", 1600, 1000, 17);
    const e = E("zz-rel", { relatedSlugs: ["does-not-exist-anywhere"] });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e], { "zz-rel": m }));
    assertErr(await buildPlan(dir), "broken-relation");
  });

  await test("attempted editor-reviewed status", async () => {
    const dir = freshBundle();
    const m = await writeWebp(dir, "zz-er", 1600, 1000, 18);
    const e = E("zz-er", { reviewStatus: "editor-reviewed" });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e]));
    writeFileSync(join(dir, "image-rights.csv"), csvFor([e], { "zz-er": m }));
    assertErr(await buildPlan(dir), "editor-reviewed-forbidden");
  });

  await test("path traversal attempt (slug + bundle outside root)", async () => {
    // (a) traversal slug is rejected as an invalid slug
    const dir = freshBundle();
    await writeWebp(dir, "zz-ok", 1600, 1000, 19);
    const e = E("../../evil", { });
    writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e]));
    writeFileSync(join(dir, "image-rights.csv"), "slug,sha-256 hash\n../../evil,x\n");
    assertErr(await buildPlan(dir), "invalid-slug");
    // (b) a bundle resolving outside the repo root is rejected
    const outside = join(tmpdir(), `outside-bundle-${Date.now()}`);
    mkdirSync(join(outside, "images"), { recursive: true });
    writeFileSync(join(outside, "discoveries.json"), "[]");
    writeFileSync(join(outside, "image-rights.csv"), "slug\n");
    try { assertErr(await buildPlan(outside), "bundle-outside-root"); }
    finally { rmSync(outside, { recursive: true, force: true }); }
  });

  await test("unexpected existing destination image", async () => {
    const { dir, slug } = await validBundle("zz-existing");
    const dest = join(IMG_DIR, "2022", `${slug}.webp`);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, readFileSync(join(dir, "images", `${slug}.webp`)));
    assertErr(await buildPlan(dir), "unexpected-existing-image");
  });

  // ---- Rollback / atomicity under simulated mid-write failures ----
  for (const scenario of ["failBeforeImageIndex", "failBeforeFileKind", "failBeforeCatalog"] as const) {
    await test(`rollback: ${scenario}`, async () => {
      // A two-entry bundle whose entries land in a NEW module (so catalog.ts changes too).
      const dir = freshBundle();
      const a = await writeWebp(dir, "zz-rb-a", 1600, 1000, 21);
      const b = await writeWebp(dir, "zz-rb-b", 1600, 1000, 22);
      const e1 = E("zz-rb-a", { dateDiscovered: "2019-07-01", year: 2019, relatedSlugs: ["zz-rb-b"] });
      const e2 = E("zz-rb-b", { dateDiscovered: "2019-07-02", year: 2019, relatedSlugs: ["zz-rb-a"] });
      writeFileSync(join(dir, "discoveries.json"), JSON.stringify([e1, e2]));
      writeFileSync(join(dir, "image-rights.csv"), csvFor([e1, e2], { "zz-rb-a": a, "zz-rb-b": b }));
      const plan = await buildPlan(dir);
      assert(plan.ok, `plan ok; errors ${plan.issues.filter((i) => i.level === "error").map((i) => i.code)}`);
      const faults =
        scenario === "failBeforeImageIndex" ? { failBeforeImageIndex: 1 }
        : scenario === "failBeforeFileKind" ? { failBeforeFileKind: "module-new" as const }
        : { failBeforeCatalog: true };
      const treeBefore = treeHash(snapshot());
      let threw = false;
      try { await applyPlan(plan, faults); }
      catch (e) { threw = e instanceof ImportError; if (threw) assert(!!(e as ImportError).rollback, "rollback report present"); }
      assert(threw, "expected ImportError from injected fault");
      const treeAfter = treeHash(snapshot());
      assert(treeBefore === treeAfter, `tree hash changed after rollback (${treeBefore.slice(0, 8)} → ${treeAfter.slice(0, 8)})`);
      assert(!existsSync(join(IMG_DIR, "2019")), "no leftover image dir");
      assert(!existsSync(join(CONTENT_DIR, "discoveries-july-2019.ts")), "no leftover module");
    });
  }

  await test("repeated import of the same batch is rejected (committed manifest)", async () => {
    const { dir, slug } = await validBundle("zz-repeat");
    const plan1 = await buildPlan(dir);
    assert(plan1.ok, "first import ok");
    await applyPlan(plan1);
    assert(existsSync(join(MANIFEST_DIR, plan1.batchName + ".json")), "manifest committed");
    const plan2 = await buildPlan(dir);
    assert(!plan2.ok, "second import must be rejected");
    assert(
      plan2.issues.some((i) => i.code.startsWith("committed-manifest-duplicate") || i.code === "duplicate-image-hash" || i.code === "unexpected-existing-image"),
      `expected committed-manifest / dup errors; got ${plan2.issues.filter((i) => i.level === "error").map((i) => i.code)}`,
    );
    void slug;
  });

  // ---- Summary ----
  console.log(`\n${passed} passed, ${failures.length} failed\n`);
  if (failures.length) { for (const f of failures) console.log(`  - ${f}`); process.exit(1); }
  // Final safety: TESTROOT is transient scratch.
  if (existsSync(TESTROOT)) rmSync(TESTROOT, { recursive: true, force: true });
}

run().catch((e) => { console.error(e); process.exit(1); });
