import type { Metadata } from "next";
import { TimelineExplorer } from "@/components/timeline/TimelineExplorer";
import { getAll, getYearBounds } from "@/lib/discoveries";
import { canonicalUrl, itemListJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Discovery timeline",
  description:
    "Scrub through time and watch scientific discoveries appear, from the earliest entry to today. An interactive timeline of human discovery.",
  alternates: { canonical: canonicalUrl("/timeline") },
};

export default function TimelinePage() {
  const discoveries = getAll();
  const { minYear, maxYear } = getYearBounds();
  const jsonLd = {
    "@context": "https://schema.org",
    ...itemListJsonLd(
      "Scientific discovery timeline",
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
        <h1 className="text-3xl font-bold text-white">📅 Discovery timeline</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Drag the slider or press play to move through time and watch
          discoveries appear. Each dot is a discovery, colored by field — hover
          to see what it is, click to open it.
        </p>
      </header>

      <TimelineExplorer
        discoveries={discoveries}
        minYear={minYear}
        maxYear={maxYear}
      />
    </div>
  );
}
