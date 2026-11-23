import type { Metadata } from "next";
import Link from "next/link";
import { getTags } from "@/lib/hubs";
import { canonicalUrl, itemListJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Scientific discovery tags",
  description: "Browse connected scientific subjects across The Nucleon discovery directory.",
  alternates: { canonical: canonicalUrl("/tags") },
};

export default function TagsPage() {
  const tags = getTags();
  const jsonLd = { "@context": "https://schema.org", ...itemListJsonLd("Scientific discovery tags", tags.map((tag) => ({ name: tag.name, path: `/tags/${tag.slug}` }))) };
  return (
    <div className="container-page py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">Connected subjects</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Scientific discovery tags</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-300">Use tags to follow a subject across categories, years, locations, and research teams. Each tag page explains the connection and links to the underlying entries.</p>
      </header>
      <div className="mt-10 flex flex-wrap gap-3">
        {tags.map((tag) => <Link key={tag.slug} href={`/tags/${tag.slug}`} className="pill px-4 py-2 hover:border-signal/40">{tag.name} <span className="text-slate-500">{tag.discoveries.length}</span></Link>)}
      </div>
    </div>
  );
}
