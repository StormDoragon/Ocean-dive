import type { Metadata } from "next";
import { correctionPolicy } from "@/content/editorial";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Corrections policy",
  description: "How The Nucleon handles factual corrections, source changes, image credits, and scientific updates.",
  alternates: { canonical: canonicalUrl("/corrections") },
};

export default function CorrectionsPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">Editorial accountability</p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{correctionPolicy.title}</h1>
      <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-300">
        {correctionPolicy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <section className="mt-10 card p-6">
        <h2 className="text-lg font-semibold text-white">What to include</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
          <li>The URL of the affected page</li>
          <li>The exact claim, date, name, image credit, or source link that needs review</li>
          <li>A reliable supporting source or explanation of the discrepancy</li>
          <li>Your preferred contact method if follow-up is needed</li>
        </ul>
        <a href="https://github.com/StormDoragon/Ocean-dive/issues/new" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-abyss-950 hover:bg-signal-400">Submit a correction request ↗</a>
      </section>
    </div>
  );
}
