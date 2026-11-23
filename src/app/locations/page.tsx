import type { Metadata } from "next";
import Link from "next/link";
import { getLocations } from "@/lib/hubs";
import { canonicalUrl, itemListJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Scientific discovery locations",
  description: "Explore the places, observatories, habitats, and expedition sites connected to The Nucleon discoveries.",
  alternates: { canonical: canonicalUrl("/locations") },
};

export default function LocationsPage() {
  const locations = getLocations();
  const jsonLd = { "@context": "https://schema.org", ...itemListJsonLd("Scientific discovery locations", locations.map((l) => ({ name: l.name, path: `/locations/${l.slug}` }))) };
  return (
    <div className="container-page py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">Field geography</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Scientific discovery locations</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-300">A discovery is shaped by where it happens. Explore the habitats, observatories, laboratories, and expedition sites represented in the catalogue.</p>
      </header>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => <Link key={location.slug} href={`/locations/${location.slug}`} className="card p-5 hover:border-signal/40"><h2 className="font-semibold text-white">{location.name}</h2><p className="mt-2 text-sm text-slate-400">{location.country} · {location.discoveries.length} {location.discoveries.length === 1 ? "discovery" : "discoveries"}</p></Link>)}
      </div>
    </div>
  );
}
