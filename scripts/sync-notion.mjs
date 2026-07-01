#!/usr/bin/env node
/**
 * Sync the discovery catalog from a Notion database into
 * src/content/discoveries.generated.json, which the app prefers over the
 * hand-authored seed catalog when it is non-empty.
 *
 * Usage:
 *   NOTION_API_KEY=... NOTION_DISCOVERIES_DB_ID=... npm run sync:notion
 *
 * If the env vars are not set, the script is a no-op (safe to run in CI).
 *
 * Expected Notion database properties (create these columns):
 *   Title            title
 *   Slug             rich_text     (unique kebab-case id)
 *   Category         select        (one of the 8 category slugs, e.g. "ocean")
 *   Subtopic         rich_text
 *   Year             number
 *   Date             date          (discovery/announcement date)
 *   LocationName     rich_text
 *   Lat, Lng         number
 *   Depth            number        (optional, meters below sea level)
 *   Country          rich_text
 *   Organization     rich_text
 *   ScientificName   rich_text     (optional)
 *   Classification   rich_text     (optional)
 *   Conservation     rich_text     (optional)
 *   Summary          rich_text
 *   StoryWhy         rich_text
 *   StoryHow         rich_text
 *   StoryUnique      rich_text
 *   PaperUrl         url           (optional)
 *   Tags             multi_select
 *   RelatedSlugs     rich_text     (optional, comma-separated)
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Client } from "@notionhq/client";

const OUT = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "content",
  "discoveries.generated.json",
);

const { NOTION_API_KEY, NOTION_DISCOVERIES_DB_ID } = process.env;

if (!NOTION_API_KEY || !NOTION_DISCOVERIES_DB_ID) {
  console.log(
    "[sync-notion] NOTION_API_KEY / NOTION_DISCOVERIES_DB_ID not set — " +
      "skipping (the app will use the built-in seed catalog).",
  );
  process.exit(0);
}

const notion = new Client({ auth: NOTION_API_KEY });

// ── Property readers ────────────────────────────────────────────────────────
const rich = (p) => (p?.rich_text ?? []).map((t) => t.plain_text).join("").trim();
const title = (p) => (p?.title ?? []).map((t) => t.plain_text).join("").trim();
const num = (p) => (typeof p?.number === "number" ? p.number : undefined);
const select = (p) => p?.select?.name?.trim() ?? "";
const multi = (p) => (p?.multi_select ?? []).map((s) => s.name);
const date = (p) => p?.date?.start ?? "";
const url = (p) => p?.url ?? undefined;

function toDiscovery(page) {
  const p = page.properties;
  const categorySlug = select(p.Category) || "biology";
  const slug = rich(p.Slug) || title(p.Title).toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return {
    slug,
    title: title(p.Title),
    categorySlug,
    subtopic: rich(p.Subtopic),
    year: num(p.Year) ?? new Date(date(p.Date) || Date.now()).getUTCFullYear(),
    dateDiscovered: date(p.Date),
    location: {
      name: rich(p.LocationName),
      lat: num(p.Lat) ?? 0,
      lng: num(p.Lng) ?? 0,
      country: rich(p.Country) || "International",
      ...(num(p.Depth) != null ? { depthMeters: num(p.Depth) } : {}),
    },
    discoveringOrg: rich(p.Organization),
    scientificName: rich(p.ScientificName) || undefined,
    classification: rich(p.Classification) || undefined,
    conservationStatus: rich(p.Conservation) || undefined,
    heroImage: `/images/categories/${categorySlug}.svg`,
    summary: rich(p.Summary),
    story: {
      whyThere: rich(p.StoryWhy),
      howFound: rich(p.StoryHow),
      whatMakesUnique: rich(p.StoryUnique),
    },
    gallery: [`/images/categories/${categorySlug}.svg`, "/images/textures/waves.svg"],
    paperUrl: url(p.PaperUrl),
    videoUrls: [],
    relatedSlugs: rich(p.RelatedSlugs)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    tags: multi(p.Tags),
  };
}

/**
 * Notion SDK v5 queries *data sources*, not databases. Accept either kind of
 * ID: if it resolves as a database, use its first data source; otherwise
 * assume the ID is already a data source ID.
 */
async function resolveDataSourceId(id) {
  try {
    const db = await notion.databases.retrieve({ database_id: id });
    const ds = db.data_sources?.[0]?.id;
    if (ds) return ds;
  } catch {
    /* not a database id — fall through */
  }
  return id;
}

async function main() {
  const dataSourceId = await resolveDataSourceId(NOTION_DISCOVERIES_DB_ID);
  const results = [];
  let cursor;
  do {
    const res = await notion.dataSources.query({
      data_source_id: dataSourceId,
      start_cursor: cursor,
      page_size: 100,
    });
    results.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);

  const discoveries = results
    .map(toDiscovery)
    .filter((d) => d.slug && d.title);

  writeFileSync(OUT, JSON.stringify(discoveries, null, 2) + "\n");
  console.log(`[sync-notion] Wrote ${discoveries.length} discoveries to ${OUT}`);
}

main().catch((err) => {
  console.error("[sync-notion] Failed:", err.message);
  process.exit(1);
});
