# Discovery batch bundles

Externally prepared, verified discovery records are delivered here as **batch
bundles** and integrated into the catalog by the deterministic importer. The
importer performs **no research and invents no data** — it only validates and
integrates exactly what a bundle supplies.

```
imports/discovery-batches/<batch>/
  discoveries.json     # array of Discovery objects
  image-rights.csv     # one row per discovery (rights manifest)
  images/<slug>.webp   # the local hero image for each entry
  README.md            # notes about the batch (provenance, scope)
```

> The payload files (`discoveries.json`, `image-rights.csv`, `images/*.webp`)
> are **git-ignored** — they are transient inputs, not repository content. Only
> the folder structure and READMEs are tracked. Once a bundle is imported, the
> catalog TypeScript modules and `public/images/discoveries/<year>/` become the
> committed record.

## Commands

```bash
# Read-only audit (never writes):
npm run audit:discovery-batch -- imports/discovery-batches/batch-01

# Dry run (prints the plan, writes nothing, exits non-zero on any error):
npm run import:discoveries -- imports/discovery-batches/batch-01 --dry-run

# Apply (only if the batch is fully valid; otherwise nothing is written):
npm run import:discoveries -- imports/discovery-batches/batch-01
```

## `discoveries.json`

A JSON array of objects matching the `Discovery` interface in
`src/content/types.ts`. Key rules the importer enforces:

| Field | Requirement |
| --- | --- |
| `slug` | lowercase-kebab, unique across the catalog and the batch |
| `title` | required; must not duplicate an existing/normalized title |
| `categorySlug` | one of the eight existing categories |
| `subtopic` | an existing subtopic of that category (see `src/content/categories.ts`) |
| `year` / `dateDiscovered` | valid `YYYY-MM-DD`; year must match the date |
| `location` | `lat` in −90..90, `lng` in −180..180, `name` + `country` set |
| `reviewStatus` | omitted, `"source-verified"`, or `"preliminary"` — **never** `"editor-reviewed"` |
| `primarySourceUrl` / `paperUrl` | at least one, HTTPS |
| `heroImage` | omit it, or set exactly `"/images/discoveries/<year>/<slug>.webp"` (the importer derives and fills this) |
| `imageAlt`, `imageCredit`, `imageSourceUrl`, `imageLicense`, `imageType`, `imageRelation` | all required |
| `imageType` | one of the `DiscoveryImageType` values |
| `imageRelation` | `"exact"`, `"contextual"`, or `"illustration"` |
| `relatedSlugs` | 0+ slugs that resolve within the catalog ∪ this batch |
| `tags`, `videoUrls`, `gallery` | arrays (`videoUrls`/`gallery` may be `[]`) |

The hero image is supplied at `images/<slug>.webp` and copied to
`public/images/discoveries/<year>/<slug>.webp`. The importer sets `heroImage`
and prepends it to `gallery` automatically, so authors may omit `heroImage`.

## `image-rights.csv`

One header row plus one data row per discovery. Recommended columns (the parser
matches by header keywords, so order is flexible):

```
slug,title,year,local image path,image source page,creator or institution,
licence or reuse status,image type,image relation,source download date,
width,height,file size,sha-256 hash,notes
```

Cross-checks: exactly one row per discovery (and vice versa), the `slug` must
match an entry, the `sha-256 hash` (when present) must equal the actual hash of
`images/<slug>.webp`, and the `local image path` (when present) must equal the
derived hero path.

## Duplicate rejection

A bundle is rejected if any entry duplicates — within the batch **or** against
the live catalog — a: slug, normalized title, scientific name, DOI, primary
source URL, or **image hash** (byte-identical hero image).

## Safety

Nothing is written unless the batch has zero errors, and the catalog
registration in `src/content/catalog.ts` is written last, so the catalog is
never left half-registered.
