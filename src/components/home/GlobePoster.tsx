"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { MapPoint } from "@/components/map/types";

const R = 264;
const C = 320;
const DEG = Math.PI / 180;
const INITIAL_LONGITUDE = -30;
const MERIDIANS = Array.from({ length: 12 }, (_, i) => i * 30);

function position(latitude: number, longitude: number, view: number) {
  const lat = latitude * DEG;
  const delta = (longitude - view) * DEG;
  return {
    x: C + R * Math.cos(lat) * Math.sin(delta),
    y: C - R * Math.sin(lat),
    visible: Math.cos(lat) * Math.cos(delta) > 0.015,
  };
}

function meridian(longitude: number, view: number) {
  const delta = (longitude - view) * DEG;
  if (Math.cos(delta) < -0.001) return "";
  const width = R * Math.sin(delta);
  if (Math.abs(width) < 0.1) return `M${C} ${C - R}v${R * 2}`;
  return `M${C} ${C-R}a${Math.abs(width).toFixed(2)} ${R} 0 0 ${width > 0 ? 1 : 0} 0 ${R*2}`;
}

// The first frame is rendered on the server, including real discovery links.
// On phones the same SVG becomes the interactive globe, without loading WebGL.
export function GlobePoster({ points, active }: { points: MapPoint[]; active: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const view = useRef(INITIAL_LONGITUDE);
  const [interactive, setInteractive] = useState(false);
  const [paused, setPaused] = useState(false);
  const locations = useMemo(() => points.map(p => ({
    point: p,
    initial: position(p.lat, p.lng, INITIAL_LONGITUDE),
    radius: R * Math.cos(p.lat * DEG),
    longitude: p.lng * DEG,
  })), [points]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!active || !svg) return;
    const pins = Array.from(svg.querySelectorAll<SVGGElement>("g[data-pin]"));
    const lines = Array.from(svg.querySelectorAll<SVGPathElement>("path[data-meridian]"));
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    let frame = 0;
    let previous = 0;
    let pointer: number | null = null;
    let startX = 0;
    let startY = 0;
    let startView = 0;
    let dragged = false;
    let focused = false;

    function paint() {
      const angle = view.current * DEG;
      locations.forEach(({ longitude, radius, initial }, i) => {
        const delta = longitude - angle;
        const shown = radius * Math.cos(delta) > R * 0.015;
        pins[i].style.display = shown ? "" : "none";
        if (shown) pins[i].setAttribute("transform", `translate(${(C + radius * Math.sin(delta)).toFixed(2)} ${initial.y.toFixed(2)})`);
      });
      lines.forEach((line, i) => line.setAttribute("d", meridian(MERIDIANS[i], view.current)));
    }

    function tick(time: number) {
      if (!previous || time - previous >= 32) {
        if (previous) view.current += Math.min(time - previous, 80) * 0.007;
        previous = time;
        paint();
      }
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      cancelAnimationFrame(frame);
      previous = 0;
      if (visible && !document.hidden && !motion.matches && !paused && pointer === null && !focused) {
        frame = requestAnimationFrame(tick);
      }
    }
    function down(e: PointerEvent) {
      if (!e.isPrimary || e.button !== 0) return;
      pointer = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      startView = view.current;
      dragged = false;
      sync();
    }
    function move(e: PointerEvent) {
      if (e.pointerId !== pointer || !svg) return;
      const dx = e.clientX - startX;
      if (!dragged) {
        if (Math.abs(dx) < 6 || Math.abs(dx) < Math.abs(e.clientY - startY)) return;
        dragged = true;
        svg.setPointerCapture(e.pointerId);
      }
      view.current = startView - dx * 150 / Math.max(1, svg.getBoundingClientRect().width);
      paint();
    }
    function end(e: PointerEvent) {
      if (e.pointerId !== pointer) return;
      pointer = null;
      sync();
    }
    function click(e: MouseEvent) {
      if (dragged && e.detail !== 0) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
    function key(e: KeyboardEvent) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      view.current += e.key === "ArrowLeft" ? -15 : 15;
      paint();
    }
    function focusIn() { focused = pointer === null; sync(); }
    function focusOut(e: FocusEvent) {
      focused = e.relatedTarget instanceof Node && !!svg?.contains(e.relatedTarget);
      sync();
    }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(svg);
    svg.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    svg.addEventListener("click", click, true);
    svg.addEventListener("keydown", key);
    svg.addEventListener("focusin", focusIn);
    svg.addEventListener("focusout", focusOut);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    paint();
    sync();
    setInteractive(true);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      svg.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      svg.removeEventListener("click", click, true);
      svg.removeEventListener("keydown", key);
      svg.removeEventListener("focusin", focusIn);
      svg.removeEventListener("focusout", focusOut);
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [active, locations, paused]);

  return (
    <div className="relative h-full w-full">
      <svg ref={svgRef} viewBox="0 0 640 640" role="group" tabIndex={0}
        aria-label={`Globe of ${points.length} discoveries. Drag or use the left and right arrow keys to turn. Select a point to read its discovery.`}
        className="h-full w-full cursor-grab select-none active:cursor-grabbing" style={{ touchAction: "pan-y pinch-zoom" }}>
        <defs>
          <radialGradient id="globe-sphere" cx="36%" cy="28%" r="76%">
            <stop stopColor="#253354" /><stop offset="60%" stopColor="#15223d" /><stop offset="100%" stopColor="#0c152a" />
          </radialGradient>
          <radialGradient id="globe-halo">
            <stop offset="72%" stopColor="#80dbef" stopOpacity="0" />
            <stop offset="84%" stopColor="#80dbef" stopOpacity=".26" />
            <stop offset="100%" stopColor="#80dbef" stopOpacity="0" />
          </radialGradient>
          <filter id="pin-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <circle cx={C} cy={C} r={R * 1.18} fill="url(#globe-halo)" />
        <circle cx={C} cy={C} r={R} fill="url(#globe-sphere)" stroke="#456579" />
        <g transform="rotate(-8 320 320)">
          <g fill="none" stroke="#66839d" strokeOpacity=".3" strokeWidth="1.3">
            {[-60,-30,0,30,60].map(lat => {
              const { y } = position(lat, 0, 0);
              const dx = R * Math.cos(lat*DEG);
              return <line key={lat} x1={C-dx} x2={C+dx} y1={y} y2={y} />;
            })}
            {MERIDIANS.map(lng => <path key={lng} data-meridian="" d={meridian(lng, INITIAL_LONGITUDE)} />)}
          </g>
          {locations.map(({ point: p, initial }) => (
            <g key={p.slug} data-pin=""
              transform={`translate(${initial.x.toFixed(2)} ${initial.y.toFixed(2)})`}
              style={{ display: initial.visible ? undefined : "none" }}>
              <a href={`/discoveries/${p.slug}`} aria-label={`${p.title} (${p.year})`}>
                <title>{p.title + " (" + p.year + ")"}</title>
                <circle r="20" fill="transparent" />
                <circle r="11" fill={p.color} opacity=".65" filter="url(#pin-glow)" />
                <circle r="8" fill={p.color} stroke="#0a1123" strokeWidth="2.8" />
              </a>
            </g>
          ))}
        </g>
      </svg>
      {active && interactive && <button type="button" onClick={() => setPaused(v => !v)} aria-pressed={paused}
        className="globe-motion absolute bottom-0 right-1 rounded-full border border-white/15 bg-abyss-950/80 px-3 py-2 text-xs text-slate-300">
        {paused ? "Resume rotation" : "Pause rotation"}
      </button>}
    </div>
  );
}
