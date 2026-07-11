import type { Metadata } from "next";
import Link from "next/link";
import { sourceHierarchy } from "@/content/editorial";
import { getSourceDirectory } from "@/lib/editorial";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sources and citations",
  description: "Browse the source hierarchy and external publishers connected to Beyond Signal scientific discovery entries.",
  alternates: { canonical: canonicalUrl("/sources") },
};

export default function SourcesPage() {
  const sources = getSourceDirectory();
  return (
    <div className="container-page max-w-4xl py-12">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">Evidence index</p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Sources and citations</h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-300">Every discovery page links outward to the strongest source currently recorded for that entry. This page explains the hierarchy and shows the publishers represented in the current catalogue.</p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">How to read source status</h2>
        <div className="mt-4 space-y-3">
          {sourceHierarchy.slice(0, 4).map((source) => <div key={source.tier} className="card p-4"><h3 className="font-semibold text-white">{source.tier} · {source.name}</h3><p className="mt-1 text-sm text-slate-400">{source.description}</p></div>)}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">Publishers represented in the catalogue</h2>
        <p className="mt-2 text-sm text-slate-400">Counts reflect recorded primary and supporting links, not a ranking of scientific quality.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {sources.map((source) => <div key={source.publisher} className="card flex items-center justify-between gap-4 p-4"><span className="font-medium text-white">{source.publisher}</span><span className="text-right text-xs text-slate-500">{source.count} links<br />{source.tiers.join(", ")}</span></div>)}
        </div>
      </section>

      <p className="mt-10 text-sm text-slate-500">For the full selection and review process, read the <Link href="/editorial-standards" className="text-signal underline underline-offset-2">editorial standards</Link> and <Link href="/methodology" className="text-signal underline underline-offset-2">methodology</Link>.</p>
    </div>
  );
}
