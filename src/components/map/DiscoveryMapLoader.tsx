"use client";

import dynamic from "next/dynamic";
import type { MapPoint } from "./types";

// Leaflet touches `window`, so the map must be client-only (ssr: false),
// which is why this loader is a client component.
const DiscoveryMap = dynamic(() => import("./DiscoveryMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-[420px] place-items-center rounded-xl border border-white/10 bg-abyss-900 text-sm text-slate-500">
      Loading map…
    </div>
  ),
});

export function DiscoveryMapLoader(props: {
  points: MapPoint[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}) {
  return <DiscoveryMap {...props} />;
}
