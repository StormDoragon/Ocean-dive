import Link from "next/link";
import Image from "next/image";
import { CategoryCard } from "@/components/CategoryCard";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import { StatTile } from "@/components/StatTile";
import { DiscoveryMapLoader } from "@/components/map/DiscoveryMapLoader";
import { AdSlot } from "@/components/Monetization";
import {
  getAll,
  getCategoriesWithCounts,
  getFeatured,
  getOnThisDay,
  getRecent,
  getStats,
} from "@/lib/discoveries";
import { toMapPoints } from "@/lib/map";
import { getCategory } from "@/content/categories";
import { site } from "@/lib/site";

export default function HomePage() {
  const stats = getStats();
  const featured = getFeatured();
  const recent = getRecent(3);
  const onThisDay = getOnThisDay();
  const categories = getCategoriesWithCounts();
  const points = toMapPoints(getAll());
  const featuredCategory = getCategory(featured.categorySlug);

  return (
    <div className="container-page py-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-abyss-900/60 p-8 sm:p-12">
        <p className="pill">A living encyclopedia of discovery</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Explore every discovery humanity has ever made
          <span className="text-signal"> — and the ones still waiting.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          {site.name} organizes scientific discovery into a searchable, mappable
          database — from deep-sea species to exoplanets, fossils, and fusion.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/discoveries"
            className="rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-abyss-950 transition-colors hover:bg-signal-400"
          >
            Start exploring
          </Link>
          <Link
            href="/map"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-signal/50"
          >
            Open the discovery map
          </Link>
          <Link
            href="/timeline"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-signal/50"
          >
            Travel through time
          </Link>
        </div>
      </section>

      {/* Living dashboard stats */}
      <section className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatTile label="Documented discoveries" value={stats.total.toLocaleString()} sub="and growing" />
        <StatTile label="Categories" value={String(stats.categoryCount)} sub="fields of science" />
        <StatTile
          label="Deepest find"
          value={stats.deepest ? `${stats.deepest.depthMeters.toLocaleString()} m` : "—"}
          sub={stats.deepest ? stats.deepest.discovery.title : undefined}
        />
        <StatTile
          label="Spanning"
          value={`${stats.newestYear - stats.oldestYear} yrs`}
          sub={`${stats.oldestYear} → ${stats.newestYear}`}
        />
      </section>

      {/* Featured + On this day */}
      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <Link
          href={`/discoveries/${featured.slug}`}
          className="card group relative col-span-2 flex min-h-[320px] flex-col justify-end overflow-hidden p-6"
        >
          <Image
            src={featured.heroImage}
            alt={featured.title}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover opacity-50 transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/40 to-transparent" />
          <div className="relative">
            <span className="pill">
              {featuredCategory?.emoji} Featured discovery · {featured.year}
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white">{featured.title}</h2>
            <p className="mt-2 max-w-xl text-slate-300 line-clamp-2">{featured.summary}</p>
          </div>
        </Link>

        <div className="card flex flex-col p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-signal">
            📅 On this day in science
          </h2>
          <div className="mt-3 text-xs text-slate-400">
            {new Date(onThisDay.dateDiscovered).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })}
          </div>
          <h3 className="mt-1 text-lg font-semibold text-white">{onThisDay.title}</h3>
          <p className="mt-2 flex-1 text-sm text-slate-400 line-clamp-5">{onThisDay.summary}</p>
          <Link
            href={`/discoveries/${onThisDay.slug}`}
            className="mt-3 text-sm font-medium text-signal"
          >
            Read the story →
          </Link>
        </div>
      </section>

      {/* Latest additions */}
      <section className="mt-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white">🆕 Latest additions</h2>
          <Link href="/discoveries" className="text-sm font-medium text-signal">
            View all →
          </Link>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((d) => (
            <DiscoveryCard key={d.slug} discovery={d} />
          ))}
        </div>
      </section>

      <div className="mt-12">
        <AdSlot />
      </div>

      {/* Categories */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">Browse by field</h2>
        <p className="mt-1 text-slate-400">Eight domains of discovery, each its own corner of the universe.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* Map teaser */}
      <section className="mt-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">🗺 The discovery map</h2>
            <p className="mt-1 text-slate-400">
              Every glowing point marks where a discovery was made.
            </p>
          </div>
          <Link href="/map" className="text-sm font-medium text-signal">
            Open full map →
          </Link>
        </div>
        <div className="mt-5">
          <DiscoveryMapLoader points={points} />
        </div>
      </section>
    </div>
  );
}
