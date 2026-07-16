# Beyond Signal Discovery Batch 03

## Scope

- Exactly 20 discoveries
- Four entries from each year: 2022, 2023, 2024, 2025, and 2026
- Research/source cutoff: 2026-07-15
- No existing discovery is intentionally replaced
- Catalog target after integration: 111 discoveries

## Editorial status

- 19 entries: `source-verified`
- 1 entry: `preliminary`
  - `dark-oxygen-abyssal-seafloor`, because the oxygen signal and proposed
    electrochemical mechanism are actively disputed and the publisher carries an
    editor's note about the article
- No entry is marked `editor-reviewed`

## Subject balance

- Space: 5
- Biology: 4
- Technology: 3
- Archaeology: 2
- Dinosaurs and fossils: 2
- Ocean: 2
- Earth science: 1
- Physics: 1

## Image policy

All 20 hero assets are original, discovery-specific Beyond Signal editorial
graphics. They contain no third-party photographs, logos, screenshots, or copied
source artwork.

- Format: static SVG
- Canvas/viewBox: 1600 × 1000
- Credit: Beyond Signal Editorial Graphics
- Licence: CC BY 4.0
- Relation: `illustration`

The SVG format keeps every visual local, lightweight, auditable, and
resolution-independent. Every page must identify the asset as an illustration
rather than a photograph. Exact byte sizes and SHA-256 hashes are recorded in
both Batch 03 image-rights manifests.

## Required release checks

```bash
npm ci
npm run test:discovery-import
npm run validate
npm run lint
npm run build
npm run check:images
npm run validate:strict
```

Compare strict-validation output against `main`; Batch 03 may introduce no new
warnings. Before the pull request leaves draft, open all 20 discovery pages at
desktop and mobile widths and verify hero rendering, illustration labels,
citations, archives, categories, tags, organizations, locations, search, related
cards, sitemap output, and navigation.
