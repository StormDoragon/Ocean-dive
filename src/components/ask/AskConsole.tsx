"use client";

import { useState } from "react";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import type { AskResult } from "@/lib/ask/types";

const EXAMPLES = [
  "Show every species discovered deeper than 3,000 meters",
  "Which countries discover the most?",
  "Space discoveries since 2019",
  "How many discoveries in the 2010s?",
  "Ocean discoveries",
];

export function AskConsole({ aiEnabled }: { aiEnabled: boolean }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AskResult | null>(null);

  async function ask(q: string) {
    const question = q.trim();
    if (!question) return;
    setQuery(question);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query: question }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setResult((await res.json()) as AskResult);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  const maxCount = result?.aggregation
    ? Math.max(...result.aggregation.rows.map((r) => r.count), 1)
    : 1;

  return (
    <div>
      {/* Ask box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(query);
        }}
        className="card p-4"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything — e.g. “species found deeper than 3,000 m”"
            className="flex-1 rounded-lg border border-white/10 bg-abyss-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-signal/50 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-signal px-6 py-3 text-sm font-semibold text-abyss-950 transition-colors hover:bg-signal-400 disabled:opacity-60"
          >
            {loading ? "Thinking…" : "Ask"}
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => ask(ex)}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-colors hover:text-white"
            >
              {ex}
            </button>
          ))}
        </div>
      </form>

      {/* Status / mode badge */}
      <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
        <span
          className={`inline-block h-2 w-2 rounded-full ${aiEnabled ? "bg-emerald-400" : "bg-signal"}`}
        />
        {aiEnabled
          ? "AI answers enabled (Claude)."
          : "Answered locally by the built-in engine. Add an API key to enable AI answers."}
      </div>

      {error ? (
        <div className="card mt-6 border-rose-500/30 p-6 text-sm text-rose-300">
          {error}
        </div>
      ) : null}

      {result ? (
        <div className="mt-6 space-y-6">
          <div className="card p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="pill">
                {result.source === "claude" ? "🤖 AI answer" : "⚙️ Local answer"}
              </span>
              <span className="text-xs text-slate-500">{result.results.length} results</span>
            </div>
            <p className="mt-3 text-lg text-white">{result.answer}</p>
            <p className="mt-1 text-sm text-slate-400">
              <span className="text-slate-500">Interpreted as:</span>{" "}
              {result.interpretation}
            </p>
          </div>

          {result.aggregation ? (
            <div className="card p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-signal">
                {result.aggregation.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {result.aggregation.rows.map((row) => (
                  <li key={row.label} className="flex items-center gap-3">
                    <span className="w-40 shrink-0 truncate text-sm text-slate-300">
                      {row.label}
                    </span>
                    <span className="relative h-6 flex-1 overflow-hidden rounded bg-white/5">
                      <span
                        className="absolute inset-y-0 left-0 rounded bg-signal/60"
                        style={{ width: `${(row.count / maxCount) * 100}%` }}
                      />
                    </span>
                    <span className="w-8 shrink-0 text-right text-sm tabular-nums text-white">
                      {row.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {result.results.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {result.results.map((d) => (
                <DiscoveryCard key={d.slug} discovery={d} />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
