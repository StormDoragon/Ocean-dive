"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Globe, { type GlobeMethods } from "react-globe.gl";
import { MeshPhongMaterial } from "three";
import type { MapPoint } from "@/components/map/types";

/**
 * 3D interactive globe of discoveries. A self-contained stylized "data globe":
 * a solid on-brand sphere with graticule grid lines and a glowing HTML marker
 * per discovery (placed by lat/lng); clicking a marker opens the discovery.
 * No external textures are fetched, so it renders reliably offline.
 */
export default function DiscoveryGlobe({
  points,
  className = "h-[70vh] min-h-[480px]",
}: {
  points: MapPoint[];
  className?: string;
}) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Measure the container so the canvas fills it (and tracks resizes).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () =>
      setSize({ width: el.clientWidth, height: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Auto-rotate and frame the globe once it is ready.
  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    const controls = g.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enableZoom = true;
    g.pointOfView({ lat: 15, lng: 0, altitude: 2.4 }, 0);
  }, [size.width]);

  // A solid on-brand sphere material so the globe is always visible, even if
  // the realistic Earth texture (loaded from a CDN) is slow or unavailable.
  const globeMaterial = useMemo(
    () =>
      new MeshPhongMaterial({
        color: "#0d1b34",
        emissive: "#0a1226",
        emissiveIntensity: 0.6,
        shininess: 6,
      }),
    [],
  );

  const htmlElement = useMemo(
    () => (d: object) => {
      const p = d as MapPoint;
      const a = document.createElement("a");
      a.href = `/discoveries/${p.slug}`;
      a.title = `${p.title} (${p.year})`;
      a.style.cssText = "cursor:pointer;pointer-events:auto;";
      a.innerHTML = `<span style="
        display:block;width:12px;height:12px;border-radius:9999px;
        background:${p.color};border:1.5px solid #03040a;
        box-shadow:0 0 0 2px ${p.color}55, 0 0 10px ${p.color};
        transform:translate(-50%,-50%);
      "></span>`;
      return a;
    },
    [],
  );

  return (
    <div
      ref={containerRef}
      className={`${className} overflow-hidden rounded-xl border border-white/10 bg-abyss-950`}
    >
      {size.width > 0 ? (
        <Globe
          ref={globeRef}
          width={size.width}
          height={size.height}
          backgroundColor="rgba(0,0,0,0)"
          globeMaterial={globeMaterial}
          showGraticules
          showAtmosphere
          atmosphereColor="#38e1ff"
          atmosphereAltitude={0.18}
          htmlElementsData={points}
          htmlLat={(d: object) => (d as MapPoint).lat}
          htmlLng={(d: object) => (d as MapPoint).lng}
          htmlAltitude={0.01}
          htmlElement={htmlElement}
        />
      ) : null}
    </div>
  );
}
