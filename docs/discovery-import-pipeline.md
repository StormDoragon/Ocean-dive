# Discovery import pipeline

A deterministic, **transactional** pipeline for integrating **externally
prepared, verified** discovery batches into the Beyond Signal catalog. Research,
source verification, image-rights clearance, written records, and image
processing all happen **outside** this repository; the pipeline only validates
and integrates what a batch bundle supplies. It performs no research and invents
no data.

## Bundle contract

```
imports/discovery-batches/<batch>/
  discoveries.json     # array of Discovery objects (src/content/types.ts)
  image-rights.csv     # one row per discovery (rights manifest)
  images/<slug>.webp   # one local hero image per entry
  README.md
```

The full field-by-field contract lives in
[`imports/discovery-batches/README.md`](../imports/discovery-batches/README.md).
Input payload files are git-ignored; the committed record after import is the
catalog modules, the copied images under `public/images/discoveries/<year>/`,
and the permanent audit manifests under `docs/discovery-image-rights/`.

## Commands

```bash
npm run test:discovery-import                                                # regression suite
npm run audit:discovery-batch -- imports/discovery-batches/batch-01          # read-only audit
npm run import:discoveries    -- imports/discovery-batches/batch-01 --dry-run # plan only
npm run import:discoveries    -- imports/discovery-batches/batch-01           # apply if valid
```

## Validation

Structural / interface conformance
- Slug shape (also blocks path-traversal slugs), required narrative fields,
  valid category + existing subtopic, real `YYYY-MM-DD` dates with matching
  `year`, `lat` −90..90 / `lng` −180..180 with name + country, ≥1 HTTPS source,
  and full image-rights metadata (`imageAlt`, `imageCredit`, `imageSourceUrl`
  HTTPS, `imageLicense`, `imageType`, `imageRelation`).
- `reviewStatus` may be omitted, `source-verified`, or `preliminary` — **never**
  `editor-reviewed`.

Real image decoding (via **sharp**) — filename and header bytes are never
trusted alone
- Fully decodes each `images/<slug>.webp` (rejects truncated/malformed files).
- Confirms the actual format is WebP; rejects animated WebP.
- Requires width ≥ 800 px and height ≥ 500 px.
- Rejects files > 700 KB unless the manifest notes contain
  `scientific-detail-exception`.
- Reads width/height/size/SHA-256 and compares them to the manifest.
- Reports dimensions and size during dry-run.

Duplicate rejection — within the batch, against the live catalog, **and against
previously committed audit manifests**
- slug, normalized title, scientific name (case- and whitespace-insensitive),
  DOI, primary-source URL, and byte-identical image hash (and image path).

Manifest cross-checks
- Exactly one `image-rights.csv` row per discovery and vice versa; row `slug`
  matches an entry; row SHA-256 / width / height / file size (when present)
  match the decoded image; row local path matches the derived hero path.

Graph + catalog rules
- Every `relatedSlug` resolves within the catalog ∪ the batch; the full
  `validateCatalog` rule set runs on the merged catalog and any new-entry error
  blocks the import.

## Path safety (cross-platform)

Paths use `fileURLToPath(import.meta.url)` (matching the repo's other scripts).
The bundle directory must resolve **inside the repository root**; hero-image
symlinks that escape the bundle `images/` directory are rejected; and every
output path is asserted to stay within `public/images/discoveries` and
`src/content`. Slugs are strict kebab-case, so a slug can never traverse.

## Grouping and registration

Entries are grouped by `dateDiscovered` into monthly modules
`src/content/discoveries-<month>-<year>.ts` (matching `npm run new-month`
naming/exports). Existing modules are appended to without disturbing existing
entries or comments; missing modules are created and registered at the
`// scaffold:import` / `// scaffold:spread` anchors in
`src/content/catalog.ts`. Consumers keep importing from `@/content/catalog`.

## Permanent audit manifest

On a successful import, a normalized manifest is written to
`docs/discovery-image-rights/<batch>.csv` and `<batch>.json` (part of the
transaction). It records slug, title, year, local image path, image source page,
creator/institution, licence/reuse status, image type, image relation, source
download date, width, height, file size in bytes, SHA-256, and notes. The JSON
also carries `dois` and `primarySourceUrl` so a later import can be rejected if
it re-claims an already-committed record. See
[`docs/discovery-image-rights/README.md`](./discovery-image-rights/README.md).

## Transaction and rollback

`applyPlan` is transactional:

1. Every monthly module, `catalog.ts`, and both manifest files are generated
   **in memory**; original contents of any file that will change are recorded;
   destinations that already exist unexpectedly (images or new modules) are
   rejected up front.
2. All images and generated files are written into a temporary **staging**
   directory inside the repo and re-verified (images re-decoded with sharp,
   files read back and checked for their export).
3. Staged output is moved into place — images first, then modules and manifests,
   with `catalog.ts` **last**.
4. The whole move is wrapped in try/catch. On any failure the pipeline:
   - restores every modified file byte-for-byte,
   - deletes every newly created file and copied image,
   - removes directories the failed run created,
   - leaves `catalog.ts` and the discovery count unchanged,
   - returns a precise rollback report.

This is proven, not asserted: `npm run test:discovery-import` injects a failure
before an image copy, before a module write, and before the catalog write, and
checks that the repository **tree hash is identical** before and after each
simulated failure.

## Tests

`npm run test:discovery-import` runs a self-contained suite (no framework) using
synthetic, sharp-generated WebP fixtures in an in-repo, git-ignored
`.import-tests/` directory — no real or copyrighted images. It covers the happy
path (dry-run + apply), empty batch, malformed JSON/CSV, missing manifest, every
duplicate class, corrupt WebP, wrong format behind a `.webp` name, undersized
images, manifest/hash mismatch, invalid category/subtopic/date/coordinates,
broken related slug, attempted `editor-reviewed`, path-traversal attempts,
unexpected existing destination, mid-write failure + full rollback for each
phase, and repeated import of the same batch.
