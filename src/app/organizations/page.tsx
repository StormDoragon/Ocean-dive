import type { Metadata } from "next";
import Link from "next/link";
import { getOrganizations } from "@/lib/hubs";
import { canonicalUrl, itemListJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Discovering organizations and research teams",
  description: "Browse the institutions and collaborations connected to discoveries in the Beyond Signal scientific directory.",
  alternates: { canonical: canonicalUrl("/organizations") },
};

export default function OrganizationsPage() {
  const organizations = getOrganizations();
  const jsonLd = { "@context": "https://schema.org", ...itemListJsonLd("Discovering organizations", organizations.map((o) => ({ name: o.name, path: `/organizations/${o.slug}` }))) };
  return (
    <div className="container-page py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">Research network</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Discovering organizations</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-300">Institutions, expeditions, observatories, and collaborations are part of the evidence chain behind a discovery. Browse their connected work and follow the sources back to individual entries.</p>
      </header>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {organizations.map((organization) => <Link key={organization.slug} href={`/organizations/${organization.slug}`} className="card p-5 hover:border-signal/40"><h2 className="font-semibold text-white">{organization.name}</h2><p className="mt-2 text-sm text-slate-400">{organization.discoveries.length} {organization.discoveries.length === 1 ? "discovery" : "discoveries"}</p></Link>)}
      </div>
    </div>
  );
}
