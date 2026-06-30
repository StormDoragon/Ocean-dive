# Beyond Signal

> Explore every discovery humanity has ever made — and the ones still waiting to be found.

**Beyond Signal** is a searchable directory of scientific discovery — "IMDb for
science." Instead of a stream of articles, it organizes knowledge into a
database you can search, filter, and map. This repository is the **v1
foundation**: a deployable, SEO-friendly Next.js app seeded with real, well
documented discoveries across eight fields of science.

## Features (v1)

- **Living-dashboard homepage** — headline stats, "On this day in science," a
  featured discovery, latest additions, the category grid, and a map teaser.
- **Eight categories** — Ocean, Space, Dinosaurs & Fossils, Biology,
  Archaeology, Earth Science, Physics, Technology — each with subtopics and a
  landing page.
- **Searchable directory** — fuzzy full-text search (Fuse.js) plus
  category/sort filters.
- **Discovery detail pages** — hero, Quick Facts, story, gallery, an embedded
  map, scientific source link, tags, and related discoveries, with per-page
  SEO metadata and schema.org JSON-LD.
- **Interactive world map** — every discovery is a category-colored marker
  (react-leaflet); space finds are pinned to the Earth observatory that made
  them.
- **SEO baked in** — generated `sitemap.xml`, `robots.txt`, OpenGraph/Twitter
  metadata, and static pre-rendering.

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS (deep-ocean / cosmic theme)
- [Fuse.js](https://fusejs.io) for client-side search
- [react-leaflet](https://react-leaflet.js.org) + Leaflet for maps

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (static-generates all pages)
npm run start    # serve the production build
npm run lint
```

Optional environment variable:

- `NEXT_PUBLIC_SITE_URL` — canonical base URL used in metadata and the sitemap
  (defaults to a placeholder).

## Project structure

```
src/
  app/                 # routes: home, /discoveries, /categories, /map, /about
    discoveries/[slug] # discovery detail pages (generateStaticParams)
    categories/[slug]  # category landing pages
    sitemap.ts robots.ts
  components/          # UI: cards, header/footer, search, map, monetization slots
    map/              # client-only Leaflet map + loader
  content/            # the "database": types.ts, categories.ts, discoveries.ts
  lib/                # discoveries.ts (data access), map.ts, site.ts
public/images/        # local SVG placeholders (category heroes, textures, OG)
```

### Adding a discovery

Append a `Discovery` object to `src/content/discoveries.ts` (the type lives in
`src/content/types.ts`). Everything else — cards, search, map, sitemap, related
links — picks it up automatically.

## A note on content

Discovery facts are summarized from public reporting and linked to a source
where available. Images are **local SVG placeholders**, not photographs of the
actual discoveries. To use real photos later, drop image hosts into
`next.config.mjs` (`images.remotePatterns`) and point each discovery's
`heroImage`/`gallery` at them.

## Roadmap (deferred from v1)

These are intentionally **not** built yet; the v1 data model is structured so
they can layer in:

- AI natural-language search ("show every species discovered deeper than 3,000 m")
- User accounts: saved discoveries, collections, notes, badges
- Discovery **timeline** scrubber, **ocean depth explorer**, and **tree of life**
- Interactive 3D globe
- Premium membership; real ad / affiliate / store integrations
- A hosted database or CMS once the catalog outgrows flat files

## Monetization (planned, disclosed)

Display ads on informational pages, affiliate links for books and science gear,
an optional premium tier (advanced filters, datasets, alerts), and transparent
sponsored content. The `AdSlot` and `AffiliateCallout` components mark where
these live and are inert in v1.
