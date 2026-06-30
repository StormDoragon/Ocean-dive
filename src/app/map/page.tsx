import type { Metadata } from "next";
import { DiscoveryMapLoader } from "@/components/map/DiscoveryMapLoader";
import { getAll } from "@/lib/discoveries";
import { toMapPoints } from "@/lib/map";
import { categories } from "@/content/categories";

export const metadata: Metadata = {
  title: "Discovery map",
  description:
    "An interactive world map of scientific discoveries. Each glowing point marks where a discovery was made.",
};

export default function MapPage() {
  const points = toMapPoints(getAll());

  return (
    <div className="container-page py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white">🗺 Discovery map</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Every glowing point marks where a discovery was made. Click a marker to
          open its page. Space discoveries are pinned to the Earth-based
          observatory that made them.
        </p>
      </header>

      <DiscoveryMapLoader points={points} className="h-[70vh] min-h-[480px]" />

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
