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
import { site } from "@/lib/site";

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

  return {
    title: discovery.title,
    description: discovery.summary,
    openGraph: {
      type: "article",
      title: discovery.title,
      description: discovery.summary,
      images: [discovery.heroImage],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: discovery.title,
    description: discovery.summary,
    image: `${site.url}${discovery.heroImage}`,
    datePublished: discovery.dateDiscovered,
    about: discovery.scientificName ?? category?.name,
    locationCreated: {
      "@type": "Place",
      name: discovery.location.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: discovery.location.lat,
        longitude: discovery.location.lng,
      },
    },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <article className="container-page py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400">
        <Link href="/discoveries" className="hover:text-white">Discoveries</Link>
        <span className="mx-2">/</span>
        <Link href={`/categories/${discovery.categorySlug}`} className="hover:text-white">
          {category?.name}
        </Link>
      </nav>

      {/* Hero */}
      <header className="mt-4">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={discovery.heroImage}
            alt={discovery.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/80 to-transparent" />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Link
            href={`/categories/${discovery.categorySlug}`}
            className="rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: (category?.color ?? "#38e1ff") + "cc" }}
          >
            {category?.emoji} {category?.name}
          </Link>
          <span className="pill">{discovery.subtopic}</span>
          <span className="pill">{discovery.year}</span>
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
            <p className="mt-1 text-xs text-slate-500">Placeholder imagery for this prototype.</p>
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
                  <span key={tag} className="pill">#{tag}</span>
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

          {discovery.paperUrl ? (
            <a
              href={discovery.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center justify-between p-4 transition-colors hover:border-signal/40"
            >
              <span className="text-sm font-medium text-white">📄 Scientific source</span>
              <span className="text-signal">↗</span>
            </a>
          ) : null}

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
