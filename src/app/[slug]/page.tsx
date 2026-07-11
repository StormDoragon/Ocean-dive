import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import { categories, getCategory } from "@/content/categories";
import { getAnnualDiscoveries, getYears } from "@/lib/hubs";
import type { CategorySlug } from "@/content/types";
import { getAvailableMonths } from "@/lib/discoveries";
import {
  breadcrumbJsonLd,
  canonicalUrl,
  itemListJsonLd,
  monthLabel,
  serializeJsonLd,
} from "@/lib/seo";

type AnnualHub = { slug: string; year: number; categorySlug?: CategorySlug; kind: "all" | "category" | "new-species" };

function annualHubs(): AnnualHub[] {
  return getYears().flatMap((year) => [
    { slug: `scientific-discoveries-${year}`, year, kind: "all" as const },
    { slug: `new-species-discovered-${year}`, year, kind: "new-species" as const },
    ...categories.map((category) => ({
      slug: `${category.slug}-discoveries-${year}`,
      year,
      categorySlug: category.slug,
      kind: "category" as const,
    })),
  ]);
}

function resolveAnnual(slug: string): AnnualHub | null {
  return annualHubs().find((hub) => hub.slug === slug) ?? null;
}

export function generateStaticParams() {
  return annualHubs().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const hub = resolveAnnual(slug);
  if (!hub) return { title: "Archive not found" };
  const category = hub.categorySlug ? getCategory(hub.categorySlug) : undefined;
  const label = category ? `${category.name} discoveries` : hub.kind === "new-species" ? "New species discovered" : "Scientific discoveries";
  const canonical = canonicalUrl(`/${hub.slug}`);
  return {
    title: `${label} ${hub.year}`,
    description: `Browse ${label.toLowerCase()} from ${hub.year}, with source-backed entries, locations, institutions, and scientific context.`,
    alternates: { canonical },
    openGraph: { type: "website", url: canonical },
  };
}

export default async function AnnualHubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hub = resolveAnnual(slug);
  if (!hub) notFound();
  const category = hub.categorySlug ? getCategory(hub.categorySlug) : undefined;
  const all = getAnnualDiscoveries(hub.year, hub.categorySlug);
  const discoveries = hub.kind === "new-species" ? all.filter((d) => d.subtopic.toLowerCase().includes("new species")) : all;
  const title = category ? `${category.name} Discoveries in ${hub.year}` : hub.kind === "new-species" ? `New Species Discovered in ${hub.year}` : `Scientific Discoveries in ${hub.year}`;
  const months = getAvailableMonths().filter(({ year, month }) =>
    year === hub.year && discoveries.some((d) => {
      const date = new Date(`${d.dateDiscovered}T00:00:00Z`);
      return date.getUTCMonth() + 1 === month;
    }),
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Discoveries", path: "/discoveries" },
        { name: title, path: `/${hub.slug}` },
      ]),
      itemListJsonLd(title, discoveries.map((d) => ({ name: d.title, path: `/discoveries/${d.slug}` }))),
    ],
  };

  return (
    <div className="container-page py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <nav className="text-sm text-slate-400">
        <Link href="/discoveries" className="hover:text-white">Discoveries</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{title}</span>
      </nav>
      <header className="mt-5 max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">Annual archive</p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          A year-level index of {discoveries.length} source-backed {hub.kind === "new-species" ? "new-species discoveries" : "scientific discoveries"} from {hub.year}. Use the monthly archives to follow the sequence of announcements, or open an entry for its location, method, and primary source.
        </p>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {discoveries.map((discovery) => <DiscoveryCard key={discovery.slug} discovery={discovery} />)}
      </section>

      {months.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-white">Browse {hub.year} by month</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {months.map(({ month }) => (
              <Link key={month} href={`/discoveries/${hub.year}/${monthLabel(month).toLowerCase()}`} className="pill hover:border-signal/40">
                {monthLabel(month)} {hub.year}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
