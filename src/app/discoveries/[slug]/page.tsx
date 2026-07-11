import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuickFacts } from "@/components/QuickFacts";
import { Gallery } from "@/components/Gallery";
import { RelatedDiscoveries } from "@/components/RelatedDiscoveries";
import { SaveButton } from "@/components/account/SaveButton";
import { AffiliateCallout } from "@/components/Monetization";
import { DiscoveryMapLoader } from "@/components/map/DiscoveryMapLoader";
import { getAll, getBySlug, getRelated } from "@/lib/discoveries";
import { toMapPoints } from "@/lib/map";
import { getCategory } from "@/content/categories";
import { editorialTeam } from "@/content/editorial";
import { formatSourceType, getDiscoverySources, getReviewPresentation } from "@/lib/editorial";
import { getSubtopics, slugify } from "@/lib/hubs";
import {
  absoluteImageUrl,
  breadcrumbJsonLd,
  discoveryArticleJsonLd,
  discoveryCanonicalUrl,
  monthLabel,
  serializeJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return getAll().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const discovery = getBySlug(slug);
  if (!discovery) return { title: "Discovery not found" };

  const canonical = discoveryCanonicalUrl(discovery);
  const seoTitle = `${discovery.title}: Discovery, Location and Scientific Significance`;
  const seoDescription = `${discovery.summary} Learn where it was found, how scientists identified it, and why the discovery matters.`;
  return {
    title: seoTitle,
    description: seoDescription,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: seoTitle,
      description: seoDescription,
      images: [absoluteImageUrl(discovery.heroImage)],
    },
  };
}

export default async function DiscoveryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const discovery = getBySlug(slug);
  if (!discovery) notFound();

  const category = getCategory(discovery.categorySlug);
  const related = getRelated(discovery);
  const points = toMapPoints([discovery]);
  const discoveredDate = new Date(`${discovery.dateDiscovered}T00:00:00Z`);
  const discoveryMonth = discoveredDate.getUTCMonth() + 1;
  const subtopicSlug = slugify(discovery.subtopic);
  const hasSubtopicHub = getSubtopics(discovery.categorySlug).some((entry) => entry.slug === subtopicSlug);
  const subtopicHref = hasSubtopicHub
    ? `/${discovery.categorySlug}/${subtopicSlug}`
    : `/categories/${discovery.categorySlug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      discoveryArticleJsonLd(discovery),
      breadcrumbJsonLd([
        { name: "Discoveries", path: "/discoveries" },
        {
          name: category?.name ?? discovery.categorySlug,
          path: `/categories/${discovery.categorySlug}`,
        },
        { name: discovery.title, path: `/discoveries/${discovery.slug}` },
      ]),
    ],
  };

  return (
    <article className="container-page py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400">
        <Link href="/discoveries" className="hover:text-white">Discoveries</Link>
        <span className="mx-2">/</span>
        <Link href={`/categories/${discovery.categorySlug}`} className="hover:text-white">
          {category?.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{discovery.title}</span>
      </nav>

      {/* Hero */}
      <header className="mt-4">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={discovery.heroImage}
            alt={discovery.imageAlt ?? discovery.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/80 to-transparent" />
        </div>
        {discovery.imageCredit ? (
          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
            {discovery.imageType ? <span>{discovery.imageType}</span> : null}
            {discovery.imageType ? <span aria-hidden="true">•</span> : null}
            {discovery.imageSourceUrl ? (
              <a
                href={discovery.imageSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-slate-700 underline-offset-2 hover:text-slate-300"
              >
                Image: {discovery.imageCredit}
              </a>
            ) : (
              <span>Image: {discovery.imageCredit}</span>
            )}
            {discovery.imageLicense ? <span>({discovery.imageLicense})</span> : null}
          </div>
        ) : null}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Link
            href={`/categories/${discovery.categorySlug}`}
            className="rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: (category?.color ?? "#38e1ff") + "cc" }}
          >
            {category?.emoji} {category?.name}
          </Link>
          <Link href={subtopicHref} className="pill hover:border-signal/40">
            {discovery.subtopic}
          </Link>
          <Link href={`/scientific-discoveries-${discovery.year}`} className="pill hover:border-signal/40">
            {discovery.year}
          </Link>
          <Link href={`/discoveries/${discovery.year}/${monthLabel(discoveryMonth).toLowerCase()}`} className="pill hover:border-signal/40">
            {monthLabel(discoveryMonth)} archive
          </Link>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{discovery.title}</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-300">{discovery.summary}</p>
        <div className="mt-4">
          <SaveButton slug={discovery.slug} />
        </div>
      </header>

      {/* Body grid */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-10">
          {/* Story */}
          <section>
            <h2 className="text-lg font-semibold text-white">The story</h2>
            <div className="mt-4 space-y-5">
              <StoryBlock heading="Why scientists were there" body={discovery.story.whyThere} />
              <StoryBlock heading="How they found it" body={discovery.story.howFound} />
              <StoryBlock heading="What makes it unique" body={discovery.story.whatMakesUnique} />
            </div>
          </section>

          {/* Gallery */}
          <section>
            <h2 className="text-lg font-semibold text-white">Gallery</h2>
            {!discovery.imageCredit ? (
              <p className="mt-1 text-xs text-slate-500">Placeholder imagery for this prototype.</p>
            ) : null}
            <div className="mt-4">
              <Gallery images={discovery.gallery} title={discovery.title} />
            </div>
          </section>

          {/* Map */}
          <section>
            <h2 className="text-lg font-semibold text-white">Where it was found</h2>
            <p className="mt-1 text-sm text-slate-400">{discovery.location.name}</p>
            <div className="mt-4">
              <DiscoveryMapLoader
                points={points}
                center={[discovery.location.lat, discovery.location.lng]}
                zoom={4}
                className="h-[320px]"
              />
            </div>
          </section>

          {/* Tags */}
          {discovery.tags.length > 0 ? (
            <section>
              <h2 className="text-lg font-semibold text-white">Tags</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {discovery.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${slugify(tag)}`} className="pill hover:border-signal/40">#{tag}</Link>
                ))}
              </div>
            </section>
          ) : null}

          {/* Community discussion (coming soon) */}
          <section className="card border-dashed p-6 text-center">
            <h2 className="text-lg font-semibold text-white">Community discussion</h2>
            <p className="mt-2 text-sm text-slate-400">
              Comments, notes, and collections are coming soon. Sign-in and saved
              discoveries are planned for a future release.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
          <QuickFacts discovery={discovery} />

          <EditorialSources discovery={discovery} />

          <AffiliateCallout
            items={[
              "Field guide to the topic",
              "Recommended documentary",
              "Related science book",
            ]}
          />
        </aside>
      </div>

      {/* Related */}
      <div className="mt-14">
        <RelatedDiscoveries items={related} />
      </div>
    </article>
  );
}

function StoryBlock({ heading, body }: { heading: string; body: string }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-signal">{heading}</h3>
      <p className="mt-1.5 leading-relaxed text-slate-300">{body}</p>
    </div>
  );
}

function EditorialSources({ discovery }: { discovery: ReturnType<typeof getBySlug> }) {
  if (!discovery) return null;
  const review = getReviewPresentation(discovery);
  const sources = getDiscoverySources(discovery);

  return (
    <section className="card p-4" aria-label="Editorial and source information">
      <h2 className="text-sm font-semibold text-white">Editorial record</h2>
      <dl className="mt-3 space-y-2 text-xs text-slate-400">
        <div className="flex justify-between gap-4">
          <dt>Published</dt>
          <dd className="text-right text-slate-300">{discovery.dateDiscovered}</dd>
        </div>
        {discovery.dateUpdated ? (
          <div className="flex justify-between gap-4">
            <dt>Updated</dt>
            <dd className="text-right text-slate-300">{discovery.dateUpdated}</dd>
          </div>
        ) : null}
        <div className="flex justify-between gap-4">
          <dt>Last reviewed</dt>
          <dd className="text-right text-slate-300">{review.lastReviewed ?? "Pending editorial review"}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Status</dt>
          <dd className="text-right text-slate-300">{review.label}</dd>
        </div>
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-slate-500">{review.description}</p>
      {review.isEditoriallyReviewed ? (
        <p className="mt-3 text-xs text-slate-400">Reviewed by {review.reviewedBy ?? editorialTeam.name}.</p>
      ) : (
        <p className="mt-3 text-xs text-slate-500">Not yet independently reviewed by the editorial team.</p>
      )}
      {sources.length ? (
        <div className="mt-4 border-t border-white/10 pt-3">
          <p className="text-xs font-medium text-slate-300">External citations</p>
          <ul className="mt-2 space-y-2 text-xs">
            {sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 underline underline-offset-2 hover:text-slate-200"
                >
                  {source.title} · {source.publisher} ↗
                </a>
                <span className="mt-0.5 block text-slate-600">{source.tier} · {formatSourceType(source.sourceType)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : <p className="mt-4 text-xs text-slate-500">Primary source pending.</p>}
      {discovery.correctionHistory?.length ? (
        <div className="mt-4 border-t border-white/10 pt-3">
          <p className="text-xs font-medium text-slate-300">Correction history</p>
          <ul className="mt-2 space-y-1 text-xs text-slate-500">
            {discovery.correctionHistory.map((correction) => <li key={`${correction.date}-${correction.summary}`}>{correction.date}: {correction.summary}</li>)}
          </ul>
        </div>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs">
        <Link href="/editorial-standards" className="text-signal underline underline-offset-2">Editorial standards</Link>
        <Link href="/methodology" className="text-signal underline underline-offset-2">Methodology</Link>
        <Link href="/corrections" className="text-signal underline underline-offset-2">Report a correction</Link>
      </div>
    </section>
  );
}
