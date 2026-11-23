import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EntityHub } from "@/components/EntityHub";
import { getLocations, isIndexableEntityHub } from "@/lib/hubs";
import { breadcrumbJsonLd, canonicalUrl, itemListJsonLd, serializeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return getLocations().map((location) => ({ slug: location.slug }));
}

function getLocation(slug: string) {
  return getLocations().find((location) => location.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: "Location not found" };
  const canonical = canonicalUrl(`/locations/${location.slug}`);
  return {
    title: `${location.name}: Scientific Discoveries`,
    description: `Explore scientific discoveries documented at ${location.name}, including the research context, dates, and institutions connected to the site.`,
    alternates: { canonical },
    robots: { index: isIndexableEntityHub(location), follow: true },
    openGraph: { type: "website", url: canonical },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();
  const categories = [...new Set(location.discoveries.map((d) => d.categorySlug))];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        name: location.name,
        geo: { "@type": "GeoCoordinates", latitude: location.lat, longitude: location.lng },
        address: { "@type": "PostalAddress", addressCountry: location.country },
      },
      breadcrumbJsonLd([
        { name: "Locations", path: "/locations" },
        { name: location.name, path: `/locations/${location.slug}` },
      ]),
      itemListJsonLd(`Discoveries at ${location.name}`, location.discoveries.map((d) => ({ name: d.title, path: `/discoveries/${d.slug}` }))),
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <EntityHub
        eyebrow="Discovery location"
        title={location.name}
        intro={[
          `${location.name} is a connected research setting in The Nucleon catalogue, with ${location.discoveries.length} documented ${location.discoveries.length === 1 ? "discovery" : "discoveries"}. A location page is useful because discoveries are shaped by their environment: depth, climate, geology, access, and the instruments that can operate there.`,
          `The entries associated with this place span ${categories.length} scientific ${categories.length === 1 ? "field" : "fields"}. Read them together to see how observations from one region can illuminate species, habitats, planetary processes, or the history of human research.`,
        ]}
        facts={[
          { label: "Country or region", value: location.country },
          { label: "Latitude", value: location.lat.toFixed(2) },
          { label: "Longitude", value: location.lng.toFixed(2) },
          { label: "Discoveries", value: String(location.discoveries.length) },
        ]}
        discoveries={location.discoveries}
        backHref="/map"
        backLabel="Discovery map"
      />
    </>
  );
}
