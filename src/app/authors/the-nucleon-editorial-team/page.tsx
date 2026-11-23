import type { Metadata } from "next";
import { editorialTeam } from "@/content/editorial";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: editorialTeam.name,
  description: editorialTeam.description,
  alternates: { canonical: canonicalUrl(editorialTeam.url) },
};

export default function EditorialTeamPage() {
  const url = canonicalUrl(editorialTeam.url);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: editorialTeam.name,
    description: editorialTeam.description,
    url,
    worksFor: { "@type": "Organization", name: "The Nucleon", url: canonicalUrl("/") },
  };
  return (
    <div className="container-page max-w-3xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">Author and reviewer</p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{editorialTeam.name}</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-300">{editorialTeam.description}</p>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">Editorial responsibility</h2>
        <p className="mt-2 leading-relaxed text-slate-300">The team is responsible for source selection, structured data accuracy, attribution, review status, correction records, and the separation of scientific evidence from explanatory writing.</p>
      </section>
    </div>
  );
}
