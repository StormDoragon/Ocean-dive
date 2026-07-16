import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import { getAvailableMonths, getByMonth } from "@/lib/discoveries";
import {
  breadcrumbJsonLd,
  canonicalUrl,
  itemListJsonLd,
  monthLabel,
  monthNumberFromSlug,
  serializeJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return getAvailableMonths().map(({ year, month }) => ({
    slug: String(year),
    month: monthLabel(month).toLowerCase(),
  }));
}

function resolveArchive(yearParam: string, monthParam: string) {
  const year = Number(yearParam);
  const month = monthNumberFromSlug(monthParam);
  if (!Number.isInteger(year) || year < 1 || !month) return null;
  const available = getAvailableMonths().some(
    (entry) => entry.year === year && entry.month === month,
  );
  return available ? { year, month } : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; month: string }>;
}): Promise<Metadata> {
  const { slug: yearParam, month: monthParam } = await params;
  const archive = resolveArchive(yearParam, monthParam);
  if (!archive) return { title: "Archive not found" };

  const label = `${monthLabel(archive.month)} ${archive.year}`;
  const canonical = canonicalUrl(
    `/discoveries/${archive.year}/${monthLabel(archive.month).toLowerCase()}`,
  );
  return {
    title: `${label} Scientific Discoveries`,
    description: `Scientific discoveries catalogued in ${label}, including research in space, oceans, biology, physics, and Earth science.`,
    alternates: { canonical },
    openGraph: { type: "website", url: canonical },
  };
}

export default async function MonthlyDiscoveriesPage({
  params,
}: {
  params: Promise<{ slug: string; month: string }>;
}) {
  const { slug: yearParam, month: monthParam } = await params;
  const archive = resolveArchive(yearParam, monthParam);
  if (!archive) notFound();

  const discoveries = getByMonth(archive.year, archive.month);
  const label = `${monthLabel(archive.month)} ${archive.year}`;
  const archivePath = `/discoveries/${archive.year}/${monthLabel(archive.month).toLowerCase()}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Discoveries", path: "/discoveries" },
        { name: label, path: archivePath },
      ]),
      itemListJsonLd(
        `${label} scientific discoveries`,
        discoveries.map((d) => ({
          name: d.title,
          path: `/discoveries/${d.slug}`,
        })),
      ),
    ],
  };

  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <nav className="text-sm text-slate-400">
        <Link href="/discoveries" className="hover:text-white">Discoveries</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{label}</span>
      </nav>

      <header className="mt-4 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">
          Monthly archive
        </p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Scientific Discoveries in {label}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-300">
          Browse {discoveries.length} {discoveries.length === 1 ? "discovery" : "discoveries"} catalogued in {label}, with the source, location, and scientific significance of each entry.
        </p>
      </header>

      <section className="mt-10" aria-labelledby="archive-entries">
        <h2 id="archive-entries" className="text-lg font-semibold text-white">
          Discoveries from {label}
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {discoveries.map((discovery) => (
            <DiscoveryCard key={discovery.slug} discovery={discovery} />
          ))}
        </div>
      </section>
    </div>
  );
}
