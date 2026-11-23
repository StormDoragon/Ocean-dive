import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntityHub } from "@/components/EntityHub";
import { getOrganizations, isIndexableEntityHub } from "@/lib/hubs";
import { breadcrumbJsonLd, canonicalUrl, itemListJsonLd, serializeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return getOrganizations().map((organization) => ({ slug: organization.slug }));
}

function getOrganization(slug: string) {
  return getOrganizations().find((organization) => organization.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const organization = getOrganization(slug);
  if (!organization) return { title: "Organization not found" };
  const canonical = canonicalUrl(`/organizations/${organization.slug}`);
  return {
    title: `${organization.name}: Discoveries and Research`,
    description: `Explore scientific discoveries associated with ${organization.name}, including locations, dates, fields, and source-backed context.`,
    alternates: { canonical },
    robots: { index: isIndexableEntityHub(organization), follow: true },
    openGraph: { type: "website", url: canonical },
  };
}

export default async function OrganizationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const organization = getOrganization(slug);
  if (!organization) notFound();
  const years = [...new Set(organization.discoveries.map((d) => d.year))].sort((a, b) => a - b);
  const fields = [...new Set(organization.discoveries.map((d) => d.categorySlug))];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: organization.name, url: canonicalUrl(`/organizations/${organization.slug}`) },
      breadcrumbJsonLd([
        { name: "Organizations", path: "/organizations" },
        { name: organization.name, path: `/organizations/${organization.slug}` },
      ]),
      itemListJsonLd(organization.name, organization.discoveries.map((d) => ({ name: d.title, path: `/discoveries/${d.slug}` }))),
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <EntityHub
        eyebrow="Discovering organization"
        title={organization.name}
        intro={[
          `${organization.name} appears in The Nucleon as a documented contributor to ${organization.discoveries.length} catalogued ${organization.discoveries.length === 1 ? "discovery" : "discoveries"}. This page keeps the institution connected to the places, methods, and scientific questions represented in those entries rather than treating its name as a standalone label.`,
          `The linked work spans ${fields.length} scientific ${fields.length === 1 ? "field" : "fields"} and runs from ${years[0]} to ${years[years.length - 1]}. Open each discovery to follow the primary source and see how the organisation contributed to observation, analysis, expedition work, or collaboration.`,
        ]}
        facts={[
          { label: "Catalogued discoveries", value: String(organization.discoveries.length) },
          { label: "Scientific fields", value: String(fields.length) },
          { label: "Active years", value: `${years[0]}–${years[years.length - 1]}` },
        ]}
        discoveries={organization.discoveries}
        backHref="/categories"
        backLabel="Science categories"
      />
    </>
  );
}
