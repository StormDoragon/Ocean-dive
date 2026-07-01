"use client";

import { useMemo, useState } from "react";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import type { TaxNode } from "@/lib/tree";

export function TreeExplorer({ root }: { root: TaxNode }) {
  // `path` is the list of node names from the root down to the current node.
  const [path, setPath] = useState<string[]>([]);

  const current = useMemo(() => {
    let node = root;
    for (const name of path) {
      const next = node.children.find((c) => c.name === name);
      if (!next) break;
      node = next;
    }
    return node;
  }, [root, path]);

  const crumbs = [root, ...resolveChain(root, path)];

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-1 text-sm">
        {crumbs.map((node, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-slate-600">→</span>}
            <button
              type="button"
              onClick={() => setPath(path.slice(0, i))}
              className={
                i === crumbs.length - 1
                  ? "font-semibold text-white"
                  : "text-signal hover:text-signal-400"
              }
            >
              {node.name}
            </button>
          </span>
        ))}
      </nav>

      {/* Current node header */}
      <div className="mt-4 flex flex-wrap items-baseline gap-3">
        <h2 className="text-3xl font-bold text-white">{current.name}</h2>
        <span className="pill">{current.rank}</span>
        <span className="text-sm text-slate-400">
          {current.count} {current.count === 1 ? "species" : "species"} below
        </span>
      </div>

      {path.length > 0 && (
        <button
          type="button"
          onClick={() => setPath(path.slice(0, -1))}
          className="mt-3 text-sm text-slate-400 hover:text-white"
        >
          ← Back
        </button>
      )}

      {/* Child branches */}
      {current.children.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {current.children.map((child) => (
            <button
              key={child.name}
              type="button"
              onClick={() => setPath([...path, child.name])}
              className="card group flex items-center justify-between gap-3 p-4 text-left transition-transform hover:-translate-y-0.5 hover:border-signal/40"
            >
              <span>
                <span className="block text-xs uppercase tracking-wide text-slate-500">
                  {child.rank}
                </span>
                <span className="block font-semibold text-white group-hover:text-signal">
                  {child.name}
                </span>
              </span>
              <span className="flex items-center gap-2 text-slate-400">
                <span className="pill">{child.count}</span>
                <span aria-hidden className="text-signal">→</span>
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Discoveries attached at this node */}
      {current.discoveries.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-signal">
            {current.discoveries.length === 1 ? "Species" : "Species here"}
          </h3>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {current.discoveries.map((d) => (
              <DiscoveryCard key={d.slug} discovery={d} />
            ))}
          </div>
        </div>
      )}

      {current.children.length === 0 && current.discoveries.length === 0 && (
        <p className="mt-6 text-slate-400">Nothing catalogued under this branch yet.</p>
      )}
    </div>
  );
}

/** Resolve the chain of nodes named by `path`, for breadcrumbs. */
function resolveChain(root: TaxNode, path: string[]): TaxNode[] {
  const chain: TaxNode[] = [];
  let node = root;
  for (const name of path) {
    const next = node.children.find((c) => c.name === name);
    if (!next) break;
    chain.push(next);
    node = next;
  }
  return chain;
}
