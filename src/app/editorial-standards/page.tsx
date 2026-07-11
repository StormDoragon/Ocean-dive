import type { Metadata } from "next";
import Link from "next/link";
import { editorialTeam, reviewStatuses, sourceHierarchy } from "@/content/editorial";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Editorial standards",
  description: "How Beyond Signal selects, explains, reviews, cites, and corrects scientific discovery entries.",
  alternates: { canonical: canonicalUrl("/editorial-standards") },
};

export default function EditorialStandardsPage() {
  return (
    <div className="container-page max-w-4xl py-12">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">Trust and provenance</p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Editorial standards</h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-300">Beyond Signal is a structured science directory, not a replacement for the underlying research. These standards explain how the editorial team presents evidence, uncertainty, sources, images, and corrections.</p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">Our core rule</h2>
        <p className="mt-2 leading-relaxed text-slate-300">A discovery claim must be traceable to a source. Editorial explanation may clarify why a result matters, but it is labeled as context and is never presented as a quotation from a paper or as a new scientific finding.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">Source hierarchy</h2>
        <div className="mt-4 space-y-3">
          {sourceHierarchy.map((source) => (
            <article key={source.tier} className="card p-5">
              <h3 className="font-semibold text-white">{source.tier}: {source.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{source.description}</p>
              <p className="mt-2 text-xs text-slate-500">Examples: {source.examples}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">Review statuses</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {Object.entries(reviewStatuses).map(([status, info]) => (
            <article key={status} className="card p-5">
              <h3 className="font-semibold text-white">{info.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{info.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">Who reviews the entries?</h2>
        <p className="mt-2 leading-relaxed text-slate-300">The public byline is {editorialTeam.name}. A page is marked editor reviewed only when a review date and reviewer attribution are recorded. Until then, a source-linked entry remains visibly preliminary or source verified.</p>
        <Link href={editorialTeam.url} className="mt-4 inline-block text-signal underline underline-offset-2">Meet the editorial team →</Link>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">Images and visual evidence</h2>
        <p className="mt-2 leading-relaxed text-slate-300">Images are labeled with their type, credit, source, and licence information when supplied. An artist impression, reconstruction, diagram, or placeholder is not described as a photograph of the discovery.</p>
      </section>
    </div>
  );
}
