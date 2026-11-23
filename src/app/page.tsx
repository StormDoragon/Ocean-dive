import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import { GuideCard } from "@/components/GuideCard";
import { ResilientImage } from "@/components/ResilientImage";
import { ReviewBadge } from "@/components/ReviewBadge";
import { CountUpValue } from "@/components/home/CountUpValue";
import { DeepLayer } from "@/components/home/DeepLayer";
import { DepthNav } from "@/components/home/DepthNav";
import { HeroGlobe } from "@/components/home/HeroGlobe";
import { Reveal } from "@/components/home/Reveal";
import { SectionLabel } from "@/components/home/SectionLabel";
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
import { getRecentBlogPosts } from "@/content/blog";
import { toMapPoints } from "@/lib/map";
import { getCategory } from "@/content/categories";
import { imagePresentation } from "@/lib/images";
import { site } from "@/lib/site";

/**
 * The homepage as a dive: it opens at the surface with a living globe of
 * every discovery and descends, zone by zone, to the map at the bottom.
 * Each [data-zone] section anchors the DepthNav rail and the readout depth.
 * All content is server-rendered HTML; the globe and motion are enhancements.
 */
export default function HomePage() {
  const stats = getStats();
  const featured = getFeatured();
  const recent = getRecent(3);
  const onThisDay = getOnThisDay();
  const categories = getCategoriesWithCounts();
  const points = toMapPoints(getAll());
  const featuredCategory = getCategory(featured.categorySlug);
  const featuredImage = imagePresentation(featured);
  const recentGuides = getRecentBlogPosts(3);
  const deepestMeters = stats.deepest?.depthMeters;
  const yearSpan = stats.newestYear - stats.oldestYear;

  return (
    <div className="relative overflow-hidden">
      {/* The descent: sunlit teal fading to near black down the page. */}
      <div aria-hidden className="descent-bg pointer-events-none absolute inset-0 -z-10" />
      {/* Dive 04: WebGL deep layer painted between the gradient and the content. */}
      <DeepLayer />
      <DepthNav />

      {/* ZONE — SURFACE */}
      <section data-zone="Surface" data-depth="0" className="container-page scroll-mt-20 pb-4 pt-5 sm:pt-14">
        <div className="grid items-center gap-4 sm:gap-7 lg:gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,460px)]">
          <div>
            <SectionLabel>A living atlas of discovery</SectionLabel>
            <h1 className="font-display mt-3 text-4xl sm:mt-5 font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl xl:text-6xl">
              Every discovery has coordinates
              <span className="text-signal">.</span>
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300 sm:mt-5 sm:text-lg">
              New species, exoplanets, lost cities, particles — {site.name} is a
              source-linked directory of scientific discovery, mapped where each
              find happened, from the sea floor to deep space.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-7 sm:gap-3">
              <Link
                href="/discoveries"
                className="rounded-full bg-signal px-4 py-2.5 text-sm font-semibold sm:px-6 sm:py-3 text-abyss-950 shadow-[0_0_24px_rgba(56,225,255,0.35)] transition-all hover:-translate-y-0.5 hover:bg-signal-400"
              >
                Explore discoveries
              </Link>
              <Link
                href="/discoveries#search"
                className="rounded-full border border-white/20 px-4 py-2.5 text-sm sm:px-6 sm:py-3 font-semibold text-white transition-colors hover:border-signal/60 hover:text-signal"
              >
                Search the archive
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[330px] sm:max-w-[380px] lg:max-w-[460px]">
            <HeroGlobe points={points} />
          </div>
        </div>

        {/* Live stat strip */}
        <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-xl border border-white/10 bg-abyss-900/60 backdrop-blur-sm sm:grid-cols-4">
          <div className="border-b border-r border-white/10 p-5 sm:border-b-0">
            <div className="font-mono text-2xl font-semibold tabular-nums text-white">
              <CountUpValue value={stats.total} />
            </div>
            <div className="label-mono mt-1 text-slate-500">Documented finds</div>
          </div>
          <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
            <div className="font-mono text-2xl font-semibold tabular-nums text-white">
              <CountUpValue value={stats.categoryCount} />
            </div>
            <div className="label-mono mt-1 text-slate-500">Fields of science</div>
          </div>
          <div className="border-r border-white/10 p-5">
            <div className="font-mono text-2xl font-semibold tabular-nums text-white">
              {deepestMeters ? (
                <>
                  −<CountUpValue value={deepestMeters} />
                  <span className="text-base text-signal"> m</span>
                </>
              ) : (
                "—"
              )}
            </div>
            <div className="label-mono mt-1 text-slate-500">Deepest entry</div>
          </div>
          <div className="p-5">
            <div className="font-mono text-2xl font-semibold tabular-nums text-white">
              <CountUpValue value={yearSpan} />
              <span className="text-base text-signal"> yrs</span>
            </div>
            <div className="label-mono mt-1 text-slate-500">
              {stats.oldestYear} → {stats.newestYear}
            </div>
          </div>
        </div>
      </section>

      {/* ZONE — TWILIGHT: featured + on this day */}
      <section data-zone="Twilight" data-depth="200" className="container-page scroll-mt-20 pt-16">
        <Reveal>
          <SectionLabel>Featured discovery</SectionLabel>
        </Reveal>
        <div className="mt-5 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Link
              href={`/discoveries/${featured.slug}`}
              className="card group relative flex min-h-[340px] flex-col justify-end overflow-hidden p-6"
            >
              <ResilientImage
                src={featuredImage.src}
                fallbackSrc={`/images/categories/${featured.categorySlug}.svg`}
                alt={featuredImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/40 to-transparent" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-slate-300">
                  <span>{featuredCategory?.name}</span>
                  <span aria-hidden>·</span>
                  <span>{featured.year}</span>
                  <span aria-hidden>·</span>
                  <span>{featured.location.name}</span>
                  {featured.reviewStatus ? (
                    <>
                      <span aria-hidden>·</span>
                      <ReviewBadge status={featured.reviewStatus} />
                    </>
                  ) : null}
                </div>
                <h2 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-2 max-w-xl text-slate-300 line-clamp-2">{featured.summary}</p>
              </div>
            </Link>
          </Reveal>

          <Reveal index={1}>
            <div className="card flex h-full flex-col p-6">
              <SectionLabel>On this day in science</SectionLabel>
              <div className="mt-4 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                {new Date(onThisDay.dateDiscovered).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </div>
              <h3 className="mt-1.5 text-lg font-semibold text-white">{onThisDay.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-400 line-clamp-5">{onThisDay.summary}</p>
              <Link
                href={`/discoveries/${onThisDay.slug}`}
                className="link-glow mt-3 text-sm font-medium"
              >
                Read the story →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ZONE — MIDNIGHT: latest additions + guides */}
      <section data-zone="Midnight" data-depth="1000" className="container-page scroll-mt-20 pt-16">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <SectionLabel count={recent.length}>Latest additions</SectionLabel>
              <h2 className="font-display mt-3 text-2xl font-bold text-white">
                Fresh from the field
              </h2>
            </div>
            <Link href="/discoveries" className="link-glow whitespace-nowrap text-sm font-medium">
              View all →
            </Link>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((d, i) => (
            <Reveal key={d.slug} index={i}>
              <DiscoveryCard discovery={d} />
            </Reveal>
          ))}
        </div>

        {recentGuides.length > 0 ? (
          <div className="mt-14">
            <Reveal>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <SectionLabel count={recentGuides.length}>Field guides</SectionLabel>
                  <h2 className="font-display mt-3 text-2xl font-bold text-white">
                    Go deeper on the stories
                  </h2>
                </div>
                <Link href="/discovery" className="link-glow whitespace-nowrap text-sm font-medium">
                  View all →
                </Link>
              </div>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recentGuides.map((post, i) => (
                <Reveal key={post.slug} index={i}>
                  <GuideCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-12">
          <AdSlot />
        </div>
      </section>

      {/* ZONE — ABYSS: browse by field */}
      <section data-zone="Abyss" data-depth="4000" className="container-page scroll-mt-20 pt-16">
        <Reveal>
          <SectionLabel count={categories.length}>Fields of science</SectionLabel>
          <h2 className="font-display mt-3 text-2xl font-bold text-white">Browse by field</h2>
          <p className="mt-1 text-slate-400">
            Eight domains of discovery, each its own corner of the universe.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.slug} index={i % 4}>
              <CategoryCard category={c} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ZONE — HADAL: the map, at the bottom where it belongs */}
      <section
        data-zone="Hadal"
        data-depth={deepestMeters ?? 6000}
        className="mt-20 scroll-mt-20 border-t border-white/10 bg-abyss-950/70 py-16"
      >
        <div className="container-page">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <SectionLabel count={points.length}>The floor · every coordinate</SectionLabel>
                <h2 className="font-display mt-3 text-2xl font-bold text-white">
                  The discovery map
                </h2>
                <p className="mt-1 text-slate-400">
                  Every glowing point marks where a discovery was made — also explorable as a
                  3D globe.
                </p>
              </div>
              <Link href="/map" className="link-glow whitespace-nowrap text-sm font-medium">
                Open globe &amp; map →
              </Link>
            </div>
          </Reveal>
          <div className="mt-6">
            <DiscoveryMapLoader points={points} />
          </div>
        </div>
      </section>
    </div>
  );
}
