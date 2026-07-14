# Beyond Signal Discovery Batch 01

## Scope

- Exactly 20 discoveries
- Four entries from each year: 2022, 2023, 2024, 2025, and 2026
- Cutoff: 2026-07-13
- Prepared for the transactional importer merged in Ocean-dive PR #24
- No existing catalog entry is intentionally replaced

## Image policy

Every hero asset in `images/` is an original, discovery-specific editorial
scientific graphic generated for Beyond Signal. No third-party photographs,
logos, screenshots, or copyrighted source images were copied into the bundle.

All 20 visuals must be displayed honestly as `imageRelation: "illustration"`.
They are explanatory diagrams, reconstructions, data-style visualizations, or
artist impressions grounded in the cited sources. They are not photographs of
the discoveries.

Credit: Beyond Signal Editorial Graphics  
Licence: CC BY 4.0  
Dimensions: 1600 × 1000 pixels  
Format: static WebP  
Maximum file size: below 700 KB

## Editorial status

- 18 entries: `source-verified`
- 2 entries: `preliminary`
  - `twa-7-b-direct-imaging`, because the imaged source remains a planet candidate
  - `demogorgon-cavefish`, because Batch 01 records the current direct reporting
    and does not invent a paper URL that was not independently resolved

No entry is marked `editor-reviewed`.

## Integration commands

```bash
npm run audit:discovery-batch -- imports/discovery-batches/batch-01
npm run import:discoveries -- imports/discovery-batches/batch-01 --dry-run
npm run import:discoveries -- imports/discovery-batches/batch-01
npm run test:discovery-import
npm run validate
npm run validate:strict
npm run lint
npm run build
```

The existing repository has pre-existing strict-validation warnings. Compare
base and head and require this batch to introduce zero new warnings.

## Required review before merge

- Open all 20 generated discovery pages
- Verify hero and gallery rendering
- Verify image captions identify the assets as illustrations
- Verify every external citation
- Check archives, category pages, tags, organizations, locations, search, map,
  related cards, sitemap, and mobile layout
- Open a draft PR and stop before merge
