"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { DiscoveryMapLoader } from "@/components/map/DiscoveryMapLoader";
import type { MapPoint } from "@/components/map/types";

// Globe is WebGL + three.js, so it is client-only and lazily loaded.
const DiscoveryGlobe = dynamic(
  () => import("@/components/globe/DiscoveryGlobe"),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-[70vh] min-h-[480px] place-items-center rounded-xl border border-white/10 bg-abyss-900 text-sm text-slate-500">
        Loading globe…
      </div>
    ),
  },
);

type View = "globe" | "map";

export function GeoExplorer({
  points,
  initialView = "globe",
}: {
  points: MapPoint[];
  initialView?: View;
}) {
  const [view, setView] = useState<View>(initialView);

  return (
    <div>
      <div className="mb-4 inline-flex rounded-full border border-white/10 bg-abyss-900 p-1 text-sm">
        <ToggleButton active={view === "globe"} onClick={() => setView("globe")}>
          🌐 3D Globe
        </ToggleButton>
        <ToggleButton active={view === "map"} onClick={() => setView("map")}>
          🗺 Flat map
        </ToggleButton>
      </div>

      {view === "globe" ? (
        <DiscoveryGlobe points={points} className="h-[70vh] min-h-[480px]" />
      ) : (
        <DiscoveryMapLoader points={points} className="h-[70vh] min-h-[480px]" />
      )}
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 font-medium transition-colors ${
        active ? "bg-signal text-abyss-950" : "text-slate-300 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
