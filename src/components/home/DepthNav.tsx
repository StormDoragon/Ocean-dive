"use client";

import { useEffect, useRef, useState } from "react";

interface Zone {
  label: string;
  depth: number;
  el: HTMLElement;
}

/**
 * The homepage depth gauge: a fixed rail of clickable ticks (one per
 * [data-zone] section) with a live metres readout. It responds to native
 * scrolling and offers direct jumps — it never hijacks the wheel.
 * Purely additive: without JS it simply doesn't render.
 */
export function DepthNav() {
  const [zones, setZones] = useState<Zone[]>([]);
  const [active, setActive] = useState(0);
  const [depth, setDepth] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-zone]"));
    const zs = els.map((el) => ({
      label: el.dataset.zone ?? "",
      depth: Number(el.dataset.depth ?? 0),
      el,
    }));
    setZones(zs);
    if (zs.length === 0) return;

    const update = () => {
      const probe = window.scrollY + window.innerHeight * 0.55;
      let idx = 0;
      let d = 0;
      zs.forEach((z, i) => {
        const top = z.el.offsetTop;
        if (probe < top) return;
        idx = i;
        const nextTop =
          i + 1 < zs.length ? zs[i + 1].el.offsetTop : document.documentElement.scrollHeight;
        const nextDepth = i + 1 < zs.length ? zs[i + 1].depth : z.depth;
        const f = Math.min(Math.max((probe - top) / Math.max(nextTop - top, 1), 0), 1);
        d = Math.round(z.depth + (nextDepth - z.depth) * f);
      });
      setActive(idx);
      setDepth(d);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (zones.length === 0) return null;

  const jump = (zone: Zone) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    zone.el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Depth navigator"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2.5 xl:flex"
    >
      <span className="font-mono text-[10px] font-semibold tabular-nums tracking-wider text-signal">
        {depth === 0 ? "0 m" : `−${depth.toLocaleString("en-US")} m`}
      </span>
      {zones.map((zone, i) => (
        <button
          key={zone.label}
          type="button"
          onClick={() => jump(zone)}
          aria-label={`Jump to ${zone.label}${
            zone.depth > 0 ? `, ${zone.depth.toLocaleString("en-US")} metres down` : ""
          }`}
          aria-current={i === active ? "true" : undefined}
          className={`h-2.5 w-2.5 rounded-full border transition-colors ${
            i === active
              ? "border-signal bg-signal shadow-[0_0_8px_rgba(56,225,255,0.9)]"
              : "border-slate-500/60 bg-abyss-900 hover:border-signal focus-visible:border-signal"
          }`}
        />
      ))}
      <span
        className="font-mono text-[9px] uppercase tracking-widest text-slate-500"
        style={{ writingMode: "vertical-rl" }}
      >
        {zones[active].label}
      </span>
    </nav>
  );
}
