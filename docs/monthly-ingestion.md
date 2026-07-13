# Monthly discovery ingestion (Workstream 1)

A new month is published through one documented workflow. Routes, archives,
subtopic/organization/location/tag hubs, related links, and the sitemap all
derive from the catalog data, so **no route or sitemap file is edited by hand.**

## The workflow

1. **Scaffold the month.**

   ```bash
   npm run new-month 2026-07     # or: npm run new-month july 2026
   ```

   This creates `src/content/discoveries-july-2026.ts` from a template and
   registers it in `src/content/catalog.ts` at the `scaffold:` anchors.

2. **Add sourced entries.** Fill the array with `Discovery` objects (the type is
   in `src/content/types.ts`). For each entry:
   - Link the strongest **primary or institutional** source in
     `primarySourceUrl` (or `paperUrl`) and set `sourceAccessedAt`.
   - Set `categorySlug` and a `subtopic` that exists on that category in
     `src/content/categories.ts` (add the subtopic there if it is new — that is
     the one place a new topic is registered).
   - Give the hero an honest image. Placeholder category art is fine; a hosted
     photo must include `imageAlt`, `imageCredit`, `imageSourceUrl`, and
     `imageLicense`.
   - Add `tags` and a couple of outbound `relatedSlugs`. Note the orphan check
     is *inbound*: to clear an entry's `orphan-related` warning, at least one
     **existing** entry must add the new slug to *its* `relatedSlugs` (a
     reciprocal link) — pointing outward from the new entry alone is not enough.

3. **Validate.**

   ```bash
   npm run validate        # content + SEO release gate
   ```

   Fix any errors. Review the warnings (orphans, missing tags).

4. **Build.**

   ```bash
   npm run build           # runs validate first, then regenerates every route
   ```

   The new month's archive (`/discoveries/2026/july`), the annual hubs, and the
   sitemap now include the batch automatically.

## Intake checklist

- [ ] `npm run new-month <month>` run; file registered in `catalog.ts`.
- [ ] Every entry has a unique kebab-case `slug`.
- [ ] Every entry links a primary/institutional source with an access date.
- [ ] `subtopic` values exist on their category (or were added to it).
- [ ] Images are honest: credited photo **or** labeled placeholder.
- [ ] `relatedSlugs` connect the batch to existing entries, and at least one
      existing entry links **back** to each new entry (clears orphan warnings).
- [ ] `npm run validate` passes with no errors.
- [ ] `npm run build` succeeds.
