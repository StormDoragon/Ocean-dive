"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import type { Discovery } from "@/content/types";
import type { Category } from "@/content/types";
import { DiscoveryCard } from "./DiscoveryCard";

export function SearchableDirectory({
  discoveries,
  categories,
  initialQuery = "",
}: {
  discoveries: Discovery[];
  categories: Category[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const fuse = useMemo(
    () =>
      new Fuse(discoveries, {
        keys: [
          { name: "title", weight: 3 },
          { name: "tags", weight: 2 },
          { name: "summary", weight: 1.5 },
          { name: "scientificName", weight: 1.5 },
          "subtopic",
          "discoveringOrg",
          "location.name",
        ],
        threshold: 0.38,
        ignoreLocation: true,
      }),
    [discoveries],
  );

  const results = useMemo(() => {
    let list = query.trim()
      ? fuse.search(query).map((r) => r.item)
      : [...discoveries];

    if (activeCategory !== "all") {
      list = list.filter((d) => d.categorySlug === activeCategory);
    }

    // Fuse already ranks by relevance; only re-sort when there is no query.
    if (!query.trim()) {
      list.sort((a, b) =>
        sort === "newest"
          ? b.dateDiscovered.localeCompare(a.dateDiscovered)
          : a.dateDiscovered.localeCompare(b.dateDiscovered),
      );
    }
    return list;
  }, [query, activeCategory, sort, fuse, discoveries]);

  return (
    <div>
      <div className="card sticky top-16 z-10 flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              ⌕
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search discoveries, species, places… try “shark”, “black hole”, “fusion”"
              className="w-full rounded-lg border border-white/10 bg-abyss-900 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:border-signal/50 focus:outline-none"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
            className="rounded-lg border border-white/10 bg-abyss-900 px-3 py-2.5 text-sm text-slate-200 focus:border-signal/50 focus:outline-none"
            aria-label="Sort order"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterChip
            label="All"
            active={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
          />
          {categories.map((c) => (
            <FilterChip
              key={c.slug}
              label={`${c.emoji} ${c.name}`}
              active={activeCategory === c.slug}
              onClick={() => setActiveCategory(c.slug)}
            />
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-slate-400">
        {results.length} {results.length === 1 ? "discovery" : "discoveries"}
        {query.trim() ? <> matching “{query.trim()}”</> : null}
      </p>

      {results.length === 0 ? (
        <div className="card mt-4 p-10 text-center text-slate-400">
          No discoveries match your search yet. Try a broader term.
        </div>
      ) : (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((d) => (
            <DiscoveryCard key={d.slug} discovery={d} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
        active
          ? "border-signal/50 bg-signal/15 text-signal"
          : "border-white/10 bg-white/5 text-slate-300 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
