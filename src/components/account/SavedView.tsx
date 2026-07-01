"use client";

import { useMemo } from "react";
import Link from "next/link";
import { getBySlug } from "@/lib/discoveries";
import { computeBadges } from "@/lib/badges";
import type { Discovery } from "@/content/types";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import { AuthPanel } from "./AuthPanel";
import { SaveButton } from "./SaveButton";
import { useSaved } from "./SavedProvider";

export function SavedView() {
  const { saved, loading, source } = useSaved();

  const savedDiscoveries = useMemo<Discovery[]>(
    () =>
      [...saved]
        .map((slug) => getBySlug(slug))
        .filter((d): d is Discovery => Boolean(d))
        .sort((a, b) => b.dateDiscovered.localeCompare(a.dateDiscovered)),
    [saved],
  );

  const badges = useMemo(() => computeBadges(savedDiscoveries), [savedDiscoveries]);
  const earned = badges.filter((b) => b.earned).length;

  return (
    <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
      {/* Sidebar: account + badges */}
      <aside className="space-y-6">
        <AuthPanel />

        <div className="card p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-signal">
              Badges
            </h2>
            <span className="pill">
              {earned}/{badges.length}
            </span>
          </div>
          <ul className="mt-4 space-y-3">
            {badges.map((b) => (
              <li key={b.key} className="flex items-start gap-3">
                <span
                  className={`text-xl ${b.earned ? "" : "opacity-30 grayscale"}`}
                  aria-hidden
                >
                  {b.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-medium ${b.earned ? "text-white" : "text-slate-400"}`}
                    >
                      {b.name}
                    </span>
                    {b.earned ? <span className="text-xs text-signal">earned</span> : null}
                  </div>
                  <p className="text-xs text-slate-500">{b.description}</p>
                  {!b.earned ? (
                    <div className="mt-1 h-1 overflow-hidden rounded bg-white/10">
                      <div
                        className="h-full rounded bg-signal/60"
                        style={{ width: `${b.progress * 100}%` }}
                      />
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Saved discoveries */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Saved discoveries
            <span className="ml-2 text-sm font-normal text-slate-500">
              ({savedDiscoveries.length})
            </span>
          </h2>
          <span className="text-xs text-slate-500">
            {source === "supabase" ? "Synced to your account" : "Saved in this browser"}
          </span>
        </div>

        {loading ? (
          <div className="card mt-4 p-10 text-center text-slate-400">Loading…</div>
        ) : savedDiscoveries.length === 0 ? (
          <div className="card mt-4 p-10 text-center text-slate-400">
            No saved discoveries yet. Browse the{" "}
            <Link href="/discoveries" className="link-glow">directory</Link> and
            tap ☆ Save on anything that sparks your curiosity.
          </div>
        ) : (
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {savedDiscoveries.map((d) => (
              <div key={d.slug} className="space-y-2">
                <DiscoveryCard discovery={d} />
                <SaveButton slug={d.slug} className="w-full justify-center" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
