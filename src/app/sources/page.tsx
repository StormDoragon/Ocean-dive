import type { Metadata } from "next";
import Link from "next/link";
import { getSourceDirectory } from "@/lib/editorial";
import { sourceHierarchy } from "@/content/editorial";
import { canonicalUrl, itemListJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Source index",
  description:
    "The publishers, institutions, and archives that back discoveries in the Beyond Signal directory, grouped by source tier.",
  alternates: { canonical: canonicalUrl("/sources") },
};

export default function SourcesPage() {
  const directory = getSourceDirectory();
  const jsonLd = {
    "@context": "https://schema.org",
    ...itemListJsonLd(
      "Beyond Signal source index",
      directory.slice(0, 50).map((entry) => ({ name: entry.publisher, path: "/sources" })),
    ),
  };

  return (
    <div className="container-page py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">Editorial record</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Source index</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-300">
          Every discovery links back to the strongest source we could verify. This index lists the
          publishers, institutions, and archives cited across the catalog and the{" "}
          <Link href="/editorial-standards" className="text-signal underline underline-offset-2">
            source tier
          </Link>{" "}
          each one is treated as. Tiers describe how directly a source establishes a claim — not
          whether it is trustworthy in general.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">Source tiers</h2>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          {sourceHierarchy.map((tier) => (
            <div key={tier.tier} className="card p-5">
              <dt className="font-semibold text-white">
                {tier.tier} · {tier.name}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-400">{tier.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-white">Cited sources</h2>
          <p className="text-sm text-slate-400">
            {directory.length} {directory.length === 1 ? "publisher" : "publishers"}
          </p>
        </div>
        <ul className="mt-4 divide-y divide-white/5 overflow-hidden rounded-xl border border-white/5">
          {directory.map((entry) => (
            <li key={entry.publisher} className="flex items-center justify-between gap-4 bg-white/[0.02] px-5 py-3">
              <span className="font-medium text-white">{entry.publisher}</span>
              <span className="flex items-center gap-3 text-sm text-slate-400">
                <span className="hidden sm:inline">{entry.tiers.join(", ")}</span>
                <span className="tabular-nums">
                  {entry.count} {entry.count === 1 ? "citation" : "citations"}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm text-slate-400">
        Found a source we should reconsider? See the{" "}
        <Link href="/corrections" className="text-signal underline underline-offset-2">
          corrections policy
        </Link>
        .
      </p>
    </div>
  );
}
