"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "@/components/ContentImage";
import type { Discovery } from "@/content/types";
import type { ZoneWithDiscoveries } from "@/lib/ocean";

export function DepthExplorer({ zones }: { zones: ZoneWithDiscoveries[] }) {
  const bandRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [depth, setDepth] = useState(0);

  // Track scroll to compute the active zone and an interpolated "current depth".
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const centerY = window.innerHeight / 2;
        let idx = 0;
        let progress = 0;
        for (let i = 0; i < bandRefs.current.length; i++) {
          const el = bandRefs.current[i];
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= centerY) {
            idx = i;
            progress = Math.min(
              1,
              Math.max(0, (centerY - rect.top) / rect.height),
            );
          }
        }
        const zone = zones[idx];
        setActiveIndex(idx);
        setDepth(Math.round((zone.min + progress * (zone.max - zone.min)) / 10) * 10);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [zones]);

  const scrollToZone = (i: number) => {
    bandRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const markerPct = ((activeIndex + 0.5) / zones.length) * 100;

  return (
    <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-8">
      {/* Depth rail */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <div className="mb-3 text-center">
            <div className="text-xs uppercase tracking-wide text-slate-400">
              Current depth
            </div>
            <div className="text-3xl font-bold tabular-nums text-white">
              {depth.toLocaleString()} m
            </div>
          </div>
          <div className="relative flex h-[62vh] flex-col overflow-hidden rounded-xl border border-white/10">
            {zones.map((z, i) => (
              <button
                key={z.key}
                type="button"
                onClick={() => scrollToZone(i)}
                className={`relative flex flex-1 flex-col justify-center px-3 text-left transition-opacity ${
                  i === activeIndex ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
                style={{ backgroundColor: z.color }}
              >
                <span className="text-sm font-semibold text-white">{z.name}</span>
                <span className="text-[10px] text-white/70">{z.scientific}</span>
              </button>
            ))}
            {/* Moving marker */}
            <div
              className="pointer-events-none absolute -left-1 h-3 w-3 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-signal bg-signal/30"
              style={{ top: `${markerPct}%` }}
            />
          </div>
        </div>
      </aside>

      {/* Zone bands */}
      <div>
        {zones.map((zone, i) => (
          <section
            key={zone.key}
            id={`zone-${zone.key}`}
            ref={(el) => {
              bandRefs.current[i] = el;
            }}
            className="min-w-0 scroll-mt-20 rounded-2xl border border-white/10 p-4 sm:p-8"
            style={{
              background: `linear-gradient(180deg, ${zone.color} 0%, ${zone.color}cc 100%)`,
              marginBottom: i < zones.length - 1 ? "1.25rem" : 0,
            }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl font-bold text-white">{zone.name}</h2>
              <span className="pill max-w-full whitespace-normal break-words">{zone.scientific}</span>
            </div>
            <p className="mt-2 max-w-2xl text-slate-200/90">{zone.blurb}</p>

            {zone.discoveries.length === 0 ? (
              <p className="mt-6 rounded-lg border border-dashed border-white/15 p-6 text-center text-sm text-slate-300/80">
                No catalogued discoveries at this depth yet.
              </p>
            ) : (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {zone.discoveries.map((d) => (
                  <DepthCard key={d.slug} discovery={d} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

function DepthCard({ discovery }: { discovery: Discovery }) {
  const depth = discovery.location.depthMeters as number;
  return (
    <Link
      href={`/discoveries/${discovery.slug}`}
      className="group flex min-w-0 gap-4 rounded-xl border border-white/10 bg-abyss-950/50 p-3 transition-colors hover:border-signal/40"
    >
      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={discovery.heroImage}
          alt={discovery.title}
          fill
          sizes="96px"
          className="object-cover"
        />
        <span className="absolute bottom-0 left-0 right-0 bg-abyss-950/80 py-0.5 text-center text-[11px] font-semibold tabular-nums text-signal">
          ▼ {depth.toLocaleString()} m
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs text-slate-400">{discovery.subtopic}</div>
        <h3 className="truncate font-semibold text-white group-hover:text-signal">
          {discovery.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-400">{discovery.summary}</p>
      </div>
    </Link>
  );
}
