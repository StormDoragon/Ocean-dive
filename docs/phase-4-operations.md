# Phase 4 — Growth & Authority Operations

Phases 1–3 built the technical SEO, content architecture, and authority layers.
Phase 4 turns that foundation into a **repeatable operating system**: review
discipline, regular ingestion, image quality, internal-link integrity, and
measurement. The gains now come from operating consistently, not from adding
empty routes.

This directory documents the workflows. The commands below are the operating
surface.

| Command | What it does |
| --- | --- |
| `npm run validate` | Content + SEO release gate (errors block, warnings report). |
| `npm run validate:strict` | Same, but warnings also fail — use in review. |
| `npm run new-month 2026-07` | Scaffold and register a monthly discovery batch. |
| `npm run build` | Runs `validate` first, then static-generates every route + the sitemap. |

## Workstreams → tooling → definition of done

| # | Workstream | Where it lives | Definition of done |
| --- | --- | --- | --- |
| 0 | Editorial review operations | `src/lib/validation/rules.ts` (invariant + coverage), [editorial-review.md](./editorial-review.md) | Every entry has an explicit honest status; nothing is "editor reviewed" without a dated reviewer record. |
| 1 | Monthly discovery ingestion | `scripts/new-month.mjs`, [monthly-ingestion.md](./monthly-ingestion.md) | A new month publishes with no manual route or sitemap edits. |
| 2 | Image SEO and rights | `src/lib/images.ts`, image rules in the validator | No public image is uncredited, misleadingly labeled, or missing required context. |
| 3 | Internal-link automation | `scripts/validate-content.ts` (route graph, orphans) | Every discovery and hub has valid contextual links; orphans are reported. |
| 4 | Search & performance reporting | `verification` in `src/app/layout.tsx`, [measurement.md](./measurement.md) | Verification connected; a recurring report identifies pages to improve. |
| 5 | Release quality gates | `npm run validate` + `.github/workflows/ci.yml` | The build fails before publication when integrity or SEO requirements fail. |

## The release gate

`npm run validate` runs on every `npm run build` (via the `prebuild` script) and
in CI (`.github/workflows/ci.yml`). It checks:

- **Content integrity** — unique slugs, valid non-future dates, `year` matching
  `dateDiscovered`, a traceable source on every entry, complete story fields.
- **Internal links** — related-slug targets resolve, no self-links, every
  *static* internal link in the app resolves to a route the site serves, and
  hub-name slug collisions are flagged.
- **Image SEO & rights** — local images exist in `public/`; real (hosted) images
  carry alt text, credit, source URL, and licence. Placeholder illustrations are
  labeled honestly by `imagePresentation()` and never presented as photographs.
- **Review invariant** — `editor-reviewed` requires a dated reviewer record.
- **Sitemap coverage** — every discovery appears in the generated sitemap.

Errors block a release. Warnings (orphan related-links, missing tags, future
dates) are reported as a backlog but do not fail the gate; run
`npm run validate:strict` to treat them as blocking during review.
