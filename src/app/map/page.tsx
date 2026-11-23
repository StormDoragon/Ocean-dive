import type { Metadata } from "next";
import { GeoExplorer } from "@/components/geo/GeoExplorer";
import { getAll } from "@/lib/discoveries";
import { toMapPoints } from "@/lib/map";
import { categories } from "@/content/categories";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Discovery map & globe",
  description:
    "Explore scientific discoveries on an interactive 3D globe or flat world map. Each glowing point marks where a discovery was made.",
  alternates: { canonical: canonicalUrl("/map") },
};

export default function MapPage() {
  const points = toMapPoints(getAll());

  return (
    <div className="container-page py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white">🌐 Discovery globe & map</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Spin the globe or switch to a flat map. Every glowing point marks where
          a discovery was made or observed. Select a point to read the discovery
          and see the location it represents. For studies spanning several sites,
          the entry identifies the site or region shown.
        </p>
      </header>

      <GeoExplorer points={points} />

      <div className="mt-6 flex flex-wrap gap-3">
        {categories.map((c) => (
          <span key={c.slug} className="flex items-center gap-2 text-sm text-slate-300">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: c.color, boxShadow: `0 0 8px ${c.color}` }}
            />
            {c.emoji} {c.name}
          </span>
        ))}
      </div>
    </div>
  );
}
