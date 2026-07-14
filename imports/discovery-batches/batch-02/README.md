# Beyond Signal Discovery Batch 02

## Scope

- Exactly 20 discoveries
- Four entries from each year: 2022, 2023, 2024, 2025, and 2026
- Research/source cutoff: 2026-07-14
- No existing discovery is intentionally replaced
- Catalog target after integration: 91 discoveries

## Editorial status

- 18 entries: `source-verified`
- 2 entries: `preliminary`
  - `nanograv-gravitational-wave-background`, because the collaboration reported strong evidence rather than a single-source definitive detection
  - `little-red-dots-gas-cocoon`, because the physical interpretation remains a preprint-stage model
- No entry is marked `editor-reviewed`

## Image policy

All 20 hero assets are original, discovery-specific Beyond Signal editorial
graphics. They contain no third-party photographs, logos, screenshots, or copied
source artwork.

- Format: static SVG
- Canvas/viewBox: 1600 × 1000
- Credit: Beyond Signal Editorial Graphics
- Licence: CC BY 4.0
- Relation: `illustration`

The SVG format is deliberate for this batch: it keeps every visual local,
lightweight, auditable, and resolution-independent. Every page must identify the
asset as an illustration rather than a photograph.

## Source correction carried with Batch 02

The existing `twa-7-b-direct-imaging` entry is updated to use the peer-reviewed
Nature version of record (DOI `10.1038/s41586-025-09150-4`) as its primary source.
The earlier arXiv manuscript and follow-up preprint remain supporting sources.

## Required release checks

```bash
npm ci
npm run test:discovery-import
npm run validate
npm run validate:strict
npm run lint
npm run build
```

Before merge, open all 20 discovery pages and verify hero rendering, illustration
labels, citations, archives, categories, tags, organizations, locations, search,
related cards, sitemap output, and mobile layout.
