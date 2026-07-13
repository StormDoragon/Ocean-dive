import { discoveries } from "@/content/catalog";
import { categories, getCategory } from "@/content/categories";
import type { Category, CategorySlug, Discovery } from "@/content/types";

/** All discoveries, newest first. */
export function getAll(): Discovery[] {
  return [...discoveries].sort((a, b) =>
    b.dateDiscovered.localeCompare(a.dateDiscovered),
  );
}

export function getBySlug(slug: string): Discovery | undefined {
  return discoveries.find((d) => d.slug === slug);
}

export function getByCategory(categorySlug: CategorySlug): Discovery[] {
  return getAll().filter((d) => d.categorySlug === categorySlug);
}

export function getByMonth(year: number, month: number): Discovery[] {
  return getAll().filter((d) => {
    const date = new Date(`${d.dateDiscovered}T00:00:00Z`);
    return date.getUTCFullYear() === year && date.getUTCMonth() + 1 === month;
  });
}

export function getAvailableMonths(): Array<{ year: number; month: number }> {
  const keys = new Set(
    discoveries.map((d) => {
      const date = new Date(`${d.dateDiscovered}T00:00:00Z`);
      return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}`;
    }),
  );

  return [...keys]
    .map((key) => {
      const [year, month] = key.split("-").map(Number);
      return { year, month };
    })
    .sort((a, b) => b.year - a.year || b.month - a.month);
}

/**
 * Resolve a discovery's related entries (deduped, valid only).
 *
 * Relations are treated as bidirectional: the entry's own `relatedSlugs` come
 * first (editorial intent), then any other discovery that links *to* this one.
 * Newer entries almost always point back at established anchors without those
 * anchors listing them, so without this an anchor page would never surface —
 * and never pass link equity to — the entries that cite it. Capped so a popular
 * anchor's section stays readable.
 */
export function getRelated(discovery: Discovery, limit = 6): Discovery[] {
  const outbound = discovery.relatedSlugs
    .map((slug) => getBySlug(slug))
    .filter((d): d is Discovery => Boolean(d));

  const seen = new Set([discovery.slug, ...outbound.map((d) => d.slug)]);
  const inbound = getAll().filter(
    (d) => !seen.has(d.slug) && d.relatedSlugs.includes(discovery.slug),
  );

  return [...outbound, ...inbound].slice(0, limit);
}

/** Newest N discoveries by date. */
export function getRecent(limit = 4): Discovery[] {
  return getAll().slice(0, limit);
}

/** Editor's pick used as the homepage hero (newest is fine + lively). */
export function getFeatured(): Discovery {
  return getRecent(1)[0];
}

export interface CategoryWithCount extends Category {
  count: number;
}

export function getCategoriesWithCounts(): CategoryWithCount[] {
  return categories.map((c) => ({
    ...c,
    count: discoveries.filter((d) => d.categorySlug === c.slug).length,
  }));
}

export interface DiscoveryStats {
  total: number;
  categoryCount: number;
  deepest?: { discovery: Discovery; depthMeters: number };
  newestYear: number;
  oldestYear: number;
  newThisWeekCount: number;
  /** Distinct countries/regions inferred from location names. */
  siteCount: number;
}

export function getStats(now: Date = new Date()): DiscoveryStats {
  const all = getAll();
  const years = all.map((d) => d.year);

  let deepest: DiscoveryStats["deepest"];
  for (const d of all) {
    const depth = d.location.depthMeters;
    if (depth != null && (!deepest || depth > deepest.depthMeters)) {
      deepest = { discovery: d, depthMeters: depth };
    }
  }

  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const newThisWeekCount = all.filter(
    (d) => new Date(`${d.dateDiscovered}T00:00:00Z`) >= weekAgo,
  ).length;

  return {
    total: all.length,
    categoryCount: categories.length,
    deepest,
    newestYear: Math.max(...years),
    oldestYear: Math.min(...years),
    newThisWeekCount,
    siteCount: new Set(all.map((d) => d.location.name)).size,
  };
}

/**
 * "On this day in science" — matches today's month/day; if nothing matches
 * exactly, returns the entry whose calendar day is closest, so the homepage
 * always has something to show.
 */
export function getOnThisDay(now: Date = new Date()): Discovery {
  // Compare in UTC on both sides so a "YYYY-MM-DD" entry (parsed as UTC
  // midnight) lines up with today — matching getByMonth/getAvailableMonths and
  // avoiding an off-by-one day in time zones behind UTC.
  const month = now.getUTCMonth();
  const day = now.getUTCDate();
  const all = getAll();

  const parse = (d: Discovery) => new Date(`${d.dateDiscovered}T00:00:00Z`);
  const dayOfYear = (d: Date) => d.getUTCMonth() * 31 + d.getUTCDate();
  const target = month * 31 + day;
  // Circular distance on the ~372-point month*31+day scale, so late December
  // and early January count as neighbors rather than a year apart.
  const distance = (d: Date) => {
    const raw = Math.abs(dayOfYear(d) - target);
    return Math.min(raw, 372 - raw);
  };

  const exact = all.filter((d) => {
    const date = parse(d);
    return date.getUTCMonth() === month && date.getUTCDate() === day;
  });
  if (exact.length > 0) return exact[0];

  return [...all].sort(
    (a, b) => distance(parse(a)) - distance(parse(b)),
  )[0];
}

/** Earliest discovery year and an upper bound (today's year). */
export function getYearBounds(now: Date = new Date()): {
  minYear: number;
  maxYear: number;
} {
  const years = discoveries.map((d) => d.year);
  return {
    minYear: Math.min(...years),
    maxYear: Math.max(now.getFullYear(), ...years),
  };
}

/** Re-export category helpers so pages can import from one module. */
export { categories, getCategory };
