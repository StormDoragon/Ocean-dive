# Discovery import pipeline

A deterministic pipeline for integrating **externally prepared, verified**
discovery batches into the Beyond Signal catalog. Research, source verification,
image-rights clearance, written records, and image processing all happen
**outside** this repository; the pipeline only validates and integrates what a
batch bundle supplies. It performs no research and invents no data.

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
Payload files are git-ignored — only the committed catalog modules and
`public/images/discoveries/<year>/` become repository content after import.

## Commands

```bash
# Read-only audit — never writes, exits non-zero on any error:
npm run audit:discovery-batch -- imports/discovery-batches/batch-01

# Dry run — prints the plan, writes nothing:
npm run import:discoveries -- imports/discovery-batches/batch-01 --dry-run

# Apply — writes ONLY if the batch is fully valid:
npm run import:discoveries -- imports/discovery-batches/batch-01
```

## What the pipeline validates

Structural / interface conformance
- Slug shape and required fields (`title`, `summary`, complete `story`, `tags`,
  `videoUrls`, `gallery`, `relatedSlugs`).
- Category and subtopic exist (`src/content/categories.ts`).
- `dateDiscovered` is a real `YYYY-MM-DD` and `year` matches it.
- `location.lat` ∈ −90..90, `location.lng` ∈ −180..180, with `name` + `country`.
- `reviewStatus` is omitted, `source-verified`, or `preliminary` — **never**
  `editor-reviewed`.
- At least one HTTPS `primarySourceUrl`/`paperUrl`.
- Full image-rights metadata: `imageAlt`, `imageCredit`, `imageSourceUrl`
  (HTTPS), `imageLicense`, `imageType`, `imageRelation`.

Image integrity
- `images/<slug>.webp` exists and has a real WebP (`RIFF`/`WEBP`) header.
- Hero path is derived as `/images/discoveries/<year>/<slug>.webp`; the importer
  fills `heroImage` and prepends it to `gallery`.

Duplicate rejection (within the batch **and** against the live catalog)
- slug, normalized title, scientific name, DOI, primary-source URL, and
  **image hash** (byte-identical hero images are rejected).

Manifest cross-checks
- Exactly one `image-rights.csv` data row per discovery and vice versa.
- Each row's `slug` matches an entry; the `sha-256 hash` (when present) equals
  the real image hash; the `local image path` (when present) equals the derived
  hero path.

Graph + catalog rules
- Every `relatedSlug` resolves within the catalog ∪ the batch.
- The full `validateCatalog` rule set runs on the merged catalog; any
  error-level issue attributable to a new entry blocks the import.

## Grouping and registration

Entries are grouped by `dateDiscovered` into monthly modules
`src/content/discoveries-<month>-<year>.ts` (matching `npm run new-month`
naming and export conventions). Existing modules are **appended** to without
disturbing existing entries or comments; missing modules are created and
registered at the `// scaffold:import` / `// scaffold:spread` anchors in
`src/content/catalog.ts`. Consumers keep importing from `@/content/catalog`.

## Fail-safe guarantees

- Nothing is written unless the batch has **zero** errors.
- All new file contents are computed in memory first; monthly files are written,
  then `catalog.ts` **last**, so the catalog is never left half-registered.
- A failed run leaves at most harmless, idempotently-overwritten image copies —
  never a partially-modified catalog.
