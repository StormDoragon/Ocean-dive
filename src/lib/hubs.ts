import { categories } from "@/content/categories";
import { getCategoryGuide } from "@/content/category-guides";
import { getAll } from "@/lib/discoveries";
import type { CategorySlug, Discovery } from "@/content/types";

export function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getDiscoveriesForSubtopic(
  categorySlug: CategorySlug,
  subtopicSlug: string,
): Discovery[] {
  return getAll().filter(
    (d) => d.categorySlug === categorySlug && slugify(d.subtopic) === subtopicSlug,
  );
}

export function getSubtopics(categorySlug: CategorySlug) {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return category.subtopics
    .map((name) => ({ name, slug: slugify(name), discoveries: getDiscoveriesForSubtopic(categorySlug, slugify(name)) }))
    .filter((subtopic) => subtopic.discoveries.length > 0);
}

export function getYears(): number[] {
  return [...new Set(getAll().map((d) => d.year))].sort((a, b) => b - a);
}

/** Single-entry taxonomy pages remain available from the atlas directories. */
export function isIndexableEntityHub(hub: { discoveries: Discovery[] }): boolean {
  return hub.discoveries.length >= 2;
}

export function getOrganizations() {
  const grouped = new Map<string, Discovery[]>();
  for (const discovery of getAll()) {
    const entries = grouped.get(discovery.discoveringOrg) ?? [];
    entries.push(discovery);
    grouped.set(discovery.discoveringOrg, entries);
  }
  return [...grouped.entries()]
    .map(([name, discoveries]) => ({ name, slug: slugify(name), discoveries }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getLocations() {
  const grouped = new Map<string, Discovery[]>();
  for (const discovery of getAll()) {
    const entries = grouped.get(discovery.location.name) ?? [];
    entries.push(discovery);
    grouped.set(discovery.location.name, entries);
  }
  return [...grouped.entries()]
    .map(([name, discoveries]) => ({
      name,
      slug: slugify(name),
      lat: discoveries[0].location.lat,
      lng: discoveries[0].location.lng,
      country: discoveries[0].location.country,
      discoveries,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getTags() {
  const grouped = new Map<string, { name: string; slug: string; discoveries: Discovery[] }>();
  for (const discovery of getAll()) {
    for (const tag of discovery.tags) {
      const slug = slugify(tag);
      if (!slug) continue;
      const hub = grouped.get(slug) ?? { name: tag, slug, discoveries: [] };
      if (!hub.discoveries.includes(discovery)) hub.discoveries.push(discovery);
      grouped.set(slug, hub);
    }
  }
  return [...grouped.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export function getCategoryContext(categorySlug: CategorySlug) {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return null;
  return {
    category,
    guide: getCategoryGuide(categorySlug),
    discoveries: getAll().filter((d) => d.categorySlug === categorySlug),
    subtopics: getSubtopics(categorySlug),
  };
}

export function getAnnualDiscoveries(year: number, categorySlug?: CategorySlug): Discovery[] {
  return getAll().filter((d) => d.year === year && (!categorySlug || d.categorySlug === categorySlug));
}
