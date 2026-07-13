"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { DiscoveryMapLoader } from "@/components/map/DiscoveryMapLoader";
import { GlobeErrorBoundary } from "@/components/globe/GlobeErrorBoundary";
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

/** True when the browser can actually create a WebGL context. */
function detectWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

export function GeoExplorer({
  points,
  initialView = "globe",
}: {
  points: MapPoint[];
  initialView?: View;
}) {
  const [view, setView] = useState<View>(initialView);
  // undefined until the client-side check runs (SSR renders the toggle enabled).
  const [webglOk, setWebglOk] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const ok = detectWebGL();
    setWebglOk(ok);
    if (!ok) setView("map");
  }, []);

  const globeAvailable = webglOk !== false;

  return (
    <div>
      <div className="mb-4 inline-flex rounded-full border border-white/10 bg-abyss-900 p-1 text-sm">
        <ToggleButton
          active={view === "globe"}
          disabled={!globeAvailable}
          title={globeAvailable ? undefined : "3D globe needs WebGL, which this browser doesn't support"}
          onClick={() => setView("globe")}
        >
          🌐 3D Globe
        </ToggleButton>
        <ToggleButton active={view === "map"} onClick={() => setView("map")}>
          🗺 Flat map
        </ToggleButton>
      </div>

      {view === "globe" && globeAvailable ? (
        <GlobeErrorBoundary
          onError={() => setView("map")}
          fallback={<DiscoveryMapLoader points={points} className="h-[70vh] min-h-[480px]" />}
        >
          <DiscoveryGlobe points={points} className="h-[70vh] min-h-[480px]" />
        </GlobeErrorBoundary>
      ) : (
        <DiscoveryMapLoader points={points} className="h-[70vh] min-h-[480px]" />
      )}

      {!globeAvailable ? (
        <p className="mt-3 text-xs text-slate-500">
          Showing the flat map — this browser doesn&apos;t support the WebGL 3D globe.
        </p>
      ) : null}
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
  disabled = false,
  title,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  title?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`rounded-full px-4 py-1.5 font-medium transition-colors ${
        active ? "bg-signal text-abyss-950" : "text-slate-300 hover:text-white"
      } ${disabled ? "cursor-not-allowed opacity-40 hover:text-slate-300" : ""}`}
    >
      {children}
    </button>
  );
}
