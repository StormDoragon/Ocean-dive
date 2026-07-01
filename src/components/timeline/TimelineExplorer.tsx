"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import { getCategory } from "@/content/categories";
import type { Discovery } from "@/content/types";

interface TimelineExplorerProps {
  discoveries: Discovery[];
  minYear: number;
  maxYear: number;
}

const PLAY_INTERVAL_MS = 650;

export function TimelineExplorer({
  discoveries,
  minYear,
  maxYear,
}: TimelineExplorerProps) {
  const [year, setYear] = useState(maxYear);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance the year while playing; stop at the end.
  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setYear((y) => {
        if (y >= maxYear) {
          setPlaying(false);
          return y;
        }
        return y + 1;
      });
    }, PLAY_INTERVAL_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing, maxYear]);

  const span = Math.max(1, maxYear - minYear);
  const pct = (y: number) => ((y - minYear) / span) * 100;

  const revealed = useMemo(
    () => discoveries.filter((d) => d.year <= year),
    [discoveries, year],
  );

  const ticks = useMemo(() => {
    const step = span > 60 ? 20 : span > 30 ? 10 : 5;
    const start = Math.ceil(minYear / step) * step;
    const out: number[] = [];
    for (let y = start; y <= maxYear; y += step) out.push(y);
    return out;
  }, [minYear, maxYear, span]);

  function handlePlayToggle() {
    if (!playing && year >= maxYear) setYear(minYear); // restart from start
    setPlaying((p) => !p);
  }

  return (
    <div>
      {/* Controls + readout */}
      <div className="card p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400">
              Year
            </div>
            <div className="text-4xl font-bold tabular-nums text-white">{year}</div>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-wide text-slate-400">
              Documented by this year
            </div>
            <div className="text-4xl font-bold tabular-nums text-signal">
              {revealed.length}
              <span className="text-base font-normal text-slate-500">
                {" "}
                / {discoveries.length}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handlePlayToggle}
            className="rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-abyss-950 transition-colors hover:bg-signal-400"
          >
            {playing ? "⏸ Pause" : year >= maxYear ? "↻ Replay" : "▶ Play"}
          </button>
        </div>

        {/* Timeline track with dots */}
        <div className="relative mt-8 mb-2 h-16">
          {/* baseline */}
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/15" />
          {/* progress fill */}
          <div
            className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-signal"
            style={{ width: `${pct(year)}%` }}
          />
          {/* current-year handle */}
          <div
            className="absolute top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-abyss-950 bg-signal shadow-[0_0_12px_#38e1ff]"
            style={{ left: `${pct(year)}%` }}
          />
          {/* discovery dots */}
          {discoveries.map((d) => {
            const category = getCategory(d.categorySlug);
            const on = d.year <= year;
            return (
              <a
                key={d.slug}
                href={`/discoveries/${d.slug}`}
                title={`${d.title} (${d.year})`}
                className="group absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pct(d.year)}%` }}
              >
                <span
                  className="block h-2.5 w-2.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: on ? category?.color ?? "#38e1ff" : "#1c2a52",
                    boxShadow: on ? `0 0 8px ${category?.color ?? "#38e1ff"}` : "none",
                    transform: on ? "scale(1.15)" : "scale(0.8)",
                  }}
                />
                <span className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-abyss-800 px-2 py-1 text-xs text-white group-hover:block">
                  {d.title}
                </span>
              </a>
            );
          })}
        </div>

        {/* Slider */}
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={year}
          onChange={(e) => {
            setPlaying(false);
            setYear(Number(e.target.value));
          }}
          aria-label="Year"
          className="w-full accent-signal"
        />
        <div className="relative mt-1 h-4 text-xs text-slate-500">
          {ticks.map((t) => (
            <span
              key={t}
              className="absolute -translate-x-1/2 tabular-nums"
              style={{ left: `${pct(t)}%` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Revealed discoveries */}
      <div className="mt-8">
        {revealed.length === 0 ? (
          <div className="card p-10 text-center text-slate-400">
            Nothing documented yet by {year}. Move forward in time.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {revealed
              .slice()
              .sort((a, b) => b.dateDiscovered.localeCompare(a.dateDiscovered))
              .map((d) => (
                <DiscoveryCard key={d.slug} discovery={d} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
