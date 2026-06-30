import { getCategory } from "@/content/categories";
import type { Discovery } from "@/content/types";
import type { MapPoint } from "@/components/map/types";

export function toMapPoints(discoveries: Discovery[]): MapPoint[] {
  return discoveries.map((d) => {
    const category = getCategory(d.categorySlug);
    return {
      slug: d.slug,
      title: d.title,
      lat: d.location.lat,
      lng: d.location.lng,
      color: category?.color ?? "#38e1ff",
      categoryName: category?.name ?? "Discovery",
      categoryEmoji: category?.emoji ?? "🔭",
      year: d.year,
      depthMeters: d.location.depthMeters,
    };
  });
}
