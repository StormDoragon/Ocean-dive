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
- [react-leaflet](https://react-leaflet.js.org) + Leaflet for the flat map
- [react-globe.gl](https://github.com/vasturiano/react-globe.gl) + three.js for the 3D globe
- Built-in natural-language `/ask` engine, with an optional Claude upgrade

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

Optional environment variables (see `.env.example`):

- `NEXT_PUBLIC_SITE_URL` — canonical base URL used in metadata and the sitemap
  (defaults to a placeholder).
- `ANTHROPIC_API_KEY` — **optional.** Leave unset to use the built-in local
  search engine. Set it to upgrade `/ask` to Claude-powered answers.
- `ANTHROPIC_MODEL` — optional model override (defaults to `claude-sonnet-5`).
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — **optional.**
  Leave unset to run accounts in guest mode (saves persist to the browser).
  Set both to enable Supabase-backed accounts (see below).
- `NOTION_API_KEY` / `NOTION_DISCOVERIES_DB_ID` — **optional.** Set to pull the
  catalog from Notion via `npm run sync:notion` (see below).

### Accounts, saved discoveries & badges (`/saved`)

Every discovery has a **☆ Save** button, a header count, and a `/saved`
collection page that awards badges as you explore. It works with **no
backend** — saves persist to `localStorage` (guest mode).

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to switch to
real accounts: create a Supabase project, run `supabase/migrations/0001_init.sql`
(saved discoveries + collections tables with Row-Level Security), and paste the
API values into `.env.local`. Sign-in appears, saves sync to the account, and
any guest saves migrate over on first sign-in. Auth/data live in
`src/lib/supabase/` and `src/components/account/`.

### Editable content via Notion (`npm run sync:notion`)

By default the catalog lives in `src/content/discoveries.ts` (version-controlled
TypeScript). To let non-developers add and edit discoveries, connect a Notion
database instead:

1. Create a Notion integration (https://www.notion.so/my-integrations), copy its
   token, and share your discoveries database with it.
2. Set `NOTION_API_KEY` and `NOTION_DISCOVERIES_DB_ID` in `.env.local`.
3. Run `npm run sync:notion`. It pulls every row into
   `src/content/discoveries.generated.json`, which the app automatically prefers
   over the built-in catalog. Commit the generated file and rebuild (or run the
   sync as a build step).

The required Notion database columns are documented at the top of
`scripts/sync-notion.mjs`. Without the env vars the script is a safe no-op, so
the built-in catalog keeps working.

### Natural-language search (`/ask`)

The `/ask` page answers plain-English questions about the catalog — depth
(`deeper than 3,000 m`), field, time (`since 2019`, `this year`, `the 2010s`),
counts, and rankings (`which countries discover the most?`). It works with **no
API key** via a dependency-free rule-based engine (`src/lib/ask/engine.ts`).

When `ANTHROPIC_API_KEY` is set, the `/api/ask` route instead asks Claude
(`src/lib/ask/llm.ts`) and gracefully falls back to the local engine on any
error. The key is read server-side only and never reaches the browser; the UI
shows whether answers came from the local engine or the AI.

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
where available. Newer entries use **real, credited imagery** (with
`imageCredit`, `imageSourceUrl`, and `imageLicense` fields); older seed entries
still use **local SVG placeholders**. To add real photos, whitelist the image
host in `next.config.mjs` (`images.remotePatterns`) and point the discovery's
`heroImage`/`gallery` at it, filling in the credit/license fields. Social share
cards are generated as PNGs at build time (`src/app/opengraph-image.tsx`), so
placeholder entries still get a branded preview when shared.

## Roadmap

**Shipped in phase 2:**

- ✅ Discovery **timeline** scrubber (`/timeline`)
- ✅ Interactive **3D globe** (`/map`, toggle with the flat map)
- ✅ AI-style **natural-language search** (`/ask`), local now, Claude-ready
- ✅ **Ocean depth explorer** (`/depth`) — descend the ocean's zones by scroll
- ✅ **Tree of life** (`/tree`) — zoom Life → Kingdom → … → species
- ✅ **Accounts, saved discoveries & badges** (`/saved`) — guest mode now,
  Supabase-backed accounts when configured
- ✅ **Editable content via Notion** (`npm run sync:notion`, optional)

**Still to come** (the data model is structured so these can layer in):

- Collections & notes UI (schema already in the Supabase migration)
- Premium membership; real ad / affiliate / store integrations

## Monetization (planned, disclosed)

Display ads on informational pages, affiliate links for books and science gear,
an optional premium tier (advanced filters, datasets, alerts), and transparent
sponsored content. The `AdSlot` and `AffiliateCallout` components mark where
these live and are inert in v1.
