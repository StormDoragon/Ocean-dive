"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { GlobeErrorBoundary } from "@/components/globe/GlobeErrorBoundary";
import { GlobePoster } from "./GlobePoster";
import { detectWebGL } from "@/lib/webgl";
import type { MapPoint } from "@/components/map/types";

const DiscoveryGlobe = dynamic(() => import("@/components/globe/DiscoveryGlobe"), {
  ssr: false,
  loading: () => null,
});

export function HeroGlobe({ points }: { points: MapPoint[] }) {
  const [wanted, setWanted] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let cancel: (() => void) | undefined;
    const update = () => {
      cancel?.();
      setWanted(false);
      setRendered(false);
      if (!desktop.matches) return;
      const start = () => setWanted(detectWebGL());
      if (typeof window.requestIdleCallback === "function") {
        const id = window.requestIdleCallback(start, { timeout: 2500 });
        cancel = () => window.cancelIdleCallback(id);
      } else {
        const id = window.setTimeout(start, 1500);
        cancel = () => window.clearTimeout(id);
      }
    };
    update();
    desktop.addEventListener("change", update);
    return () => { cancel?.(); desktop.removeEventListener("change", update); };
  }, []);

  return (
    <div className="relative h-full w-full">
      {wanted && (
        <GlobeErrorBoundary fallback={null} onError={() => setRendered(false)}>
          <div className="absolute inset-0">
            <DiscoveryGlobe points={points} className="h-full" chrome={false} enableZoom={false}
              autoRotateSpeed={0.5} onReady={() => setRendered(true)} />
          </div>
        </GlobeErrorBoundary>
      )}
      <div inert={rendered} className={`relative h-full w-full transition-opacity duration-1000 ${
        rendered ? "pointer-events-none opacity-0" : "opacity-100"
      }`}>
        <GlobePoster points={points} active={!rendered} />
      </div>
    </div>
  );
}
