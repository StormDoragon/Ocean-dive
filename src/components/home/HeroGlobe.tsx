"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";
import { GlobeErrorBoundary } from "@/components/globe/GlobeErrorBoundary";
import { detectWebGL } from "@/lib/webgl";
import type { MapPoint } from "@/components/map/types";

// three.js stays out of the critical path: client-only chunk, fetched on idle.
const DiscoveryGlobe = dynamic(() => import("@/components/globe/DiscoveryGlobe"), {
  ssr: false,
  loading: () => null,
});

/**
 * Progressive-enhancement wrapper for the hero globe. The server-rendered
 * poster (passed as children) is the page's real content — it paints first
 * and is what mobile, reduced-motion, no-WebGL, and no-JS visitors keep.
 * On desktop, the interactive 3D globe is fetched after the browser goes
 * idle and fades in over the poster once it has actually rendered.
 */
export function HeroGlobe({
  points,
  children,
}: {
  points: MapPoint[];
  children: ReactNode;
}) {
  const [wanted, setWanted] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (!detectWebGL()) return;

    const start = () => setWanted(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(start, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(start, 1500);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="relative h-full w-full">
      {wanted ? (
        <GlobeErrorBoundary fallback={null} onError={() => setRendered(false)}>
          <div className="absolute inset-0">
            <DiscoveryGlobe
              points={points}
              className="h-full"
              chrome={false}
              enableZoom={false}
              autoRotateSpeed={0.5}
              onReady={() => setRendered(true)}
            />
          </div>
        </GlobeErrorBoundary>
      ) : null}
      <div
        aria-hidden={rendered}
        className={`relative h-full w-full transition-opacity duration-1000 ${
          rendered ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
