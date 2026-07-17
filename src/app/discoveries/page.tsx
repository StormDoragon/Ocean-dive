import type { Metadata } from "next";
import { SearchableDirectory } from "@/components/SearchableDirectory";
import { getAll } from "@/lib/discoveries";
import { categories } from "@/content/categories";
import { canonicalUrl, itemListJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "All discoveries",
  description:
    "Search and filter the full Beyond Signal catalog of scientific discoveries by keyword, species, place, or field.",
  alternates: { canonical: canonicalUrl("/discoveries") },
};

export default function DiscoveriesPage() {
  const discoveries = getAll();
  const jsonLd = {
    "@context": "https://schema.org",
    ...itemListJsonLd(
      "Latest scientific discoveries",
      discoveries.map((d) => ({ name: d.title, path: `/discoveries/${d.slug}` })),
    ),
  };

  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white">Discoveries</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          The full catalog — search by keyword, species, place, or filter by field.
        </p>
      </header>
      <div id="search" className="scroll-mt-24">
        <SearchableDirectory discoveries={discoveries} categories={categories} />
      </div>
    </div>
  );
}
