import { discoveries } from "@/content/discoveries";
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

/** Resolve a discovery's related entries (deduped, valid only). */
export function getRelated(discovery: Discovery): Discovery[] {
  return discovery.relatedSlugs
    .map((slug) => getBySlug(slug))
    .filter((d): d is Discovery => Boolean(d));
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
    (d) => new Date(d.dateDiscovered) >= weekAgo,
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
  const month = now.getMonth();
  const day = now.getDate();
  const all = getAll();

  const dayOfYear = (d: Date) => d.getMonth() * 31 + d.getDate();
  const target = month * 31 + day;

  const exact = all.filter((d) => {
    const date = new Date(d.dateDiscovered);
    return date.getMonth() === month && date.getDate() === day;
  });
  if (exact.length > 0) return exact[0];

  return [...all].sort((a, b) => {
    const da = Math.abs(dayOfYear(new Date(a.dateDiscovered)) - target);
    const db = Math.abs(dayOfYear(new Date(b.dateDiscovered)) - target);
    return da - db;
  })[0];
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
