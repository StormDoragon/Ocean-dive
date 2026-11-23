import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntityHub } from "@/components/EntityHub";
import { getTags, isIndexableEntityHub } from "@/lib/hubs";
import { breadcrumbJsonLd, canonicalUrl, itemListJsonLd, serializeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return getTags().map((tag) => ({ slug: tag.slug }));
}

function getTag(slug: string) {
  return getTags().find((tag) => tag.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTag(slug);
  if (!tag) return { title: "Tag not found" };
  const canonical = canonicalUrl(`/tags/${tag.slug}`);
  return {
    title: `${tag.name}: Scientific Discoveries and Research`,
    description: `Browse source-backed scientific discoveries tagged ${tag.name.toLowerCase()}, with related topics, locations, and research context.`,
    alternates: { canonical },
    robots: { index: isIndexableEntityHub(tag), follow: true },
    openGraph: { type: "website", url: canonical },
  };
}

export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tag = getTag(slug);
  if (!tag) notFound();
  const categories = [...new Set(tag.discoveries.map((d) => d.categorySlug))];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Scientific tags", path: "/tags" },
        { name: tag.name, path: `/tags/${tag.slug}` },
      ]),
      itemListJsonLd(`${tag.name} discoveries`, tag.discoveries.map((d) => ({ name: d.title, path: `/discoveries/${d.slug}` }))),
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <EntityHub
        eyebrow="Scientific tag"
        title={tag.name}
        intro={[
          `The ${tag.name.toLowerCase()} tag groups ${tag.discoveries.length} source-backed ${tag.discoveries.length === 1 ? "discovery" : "discoveries"} that share a scientific subject. Tags are a connective layer across the catalogue: they help readers move from a single entry to related findings without replacing the more specific category, location, or institution context.`,
          `The current group crosses ${categories.length} ${categories.length === 1 ? "field" : "fields"}. Follow the individual pages for the evidence, source status, and explanation of what each discovery contributes.`,
        ]}
        facts={[
          { label: "Entries", value: String(tag.discoveries.length) },
          { label: "Scientific fields", value: String(categories.length) },
        ]}
        discoveries={tag.discoveries}
        backHref="/discoveries"
        backLabel="All discoveries"
      />
    </>
  );
}
