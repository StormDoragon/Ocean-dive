import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import { categories, getCategory } from "@/content/categories";
import { getSubtopics } from "@/lib/hubs";
import type { CategorySlug } from "@/content/types";
import {
  breadcrumbJsonLd,
  canonicalUrl,
  itemListJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return categories.flatMap((category) =>
    getSubtopics(category.slug).map((subtopic) => ({
      slug: category.slug,
      subtopic: subtopic.slug,
    })),
  );
}

function resolveTopic(categoryParam: string, subtopicParam: string) {
  const category = getCategory(categoryParam as CategorySlug);
  if (!category) return null;
  const subtopic = getSubtopics(category.slug).find((entry) => entry.slug === subtopicParam);
  return subtopic ? { category, subtopic } : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subtopic: string }>;
}): Promise<Metadata> {
  const { slug: categoryParam, subtopic: subtopicParam } = await params;
  const topic = resolveTopic(categoryParam, subtopicParam);
  if (!topic) return { title: "Topic not found" };
  const canonical = canonicalUrl(`/${topic.category.slug}/${topic.subtopic.slug}`);
  return {
    title: `${topic.subtopic.name} ${topic.category.name}: Scientific Discoveries`,
    description: `Explore ${topic.subtopic.name.toLowerCase()} discoveries in ${topic.category.name.toLowerCase()}, with context, timelines, sources, and related research.`,
    alternates: { canonical },
    openGraph: { type: "website", url: canonical },
  };
}

export default async function SubtopicPage({
  params,
}: {
  params: Promise<{ slug: string; subtopic: string }>;
}) {
  const { slug: categoryParam, subtopic: subtopicParam } = await params;
  const topic = resolveTopic(categoryParam, subtopicParam);
  if (!topic) notFound();

  const { category, subtopic } = topic;
  const discoveries = subtopic.discoveries;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: category.name, path: `/categories/${category.slug}` },
        { name: subtopic.name, path: `/${category.slug}/${subtopic.slug}` },
      ]),
      itemListJsonLd(
        `${subtopic.name} discoveries`,
        discoveries.map((d) => ({ name: d.title, path: `/discoveries/${d.slug}` })),
      ),
    ],
  };
  const otherSubtopics = getSubtopics(category.slug).filter((entry) => entry.slug !== subtopic.slug);

  return (
    <div className="container-page py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <nav className="text-sm text-slate-400">
        <Link href={`/categories/${category.slug}`} className="hover:text-white">{category.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{subtopic.name}</span>
      </nav>

      <header className="mt-5 max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">Topic hub</p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          {subtopic.name} discoveries in {category.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          This topic hub follows {discoveries.length} catalogued {subtopic.name.toLowerCase()} {discoveries.length === 1 ? "discovery" : "discoveries"} across the Beyond Signal directory. Each entry connects the finding to its location, discovering institution, scientific source, and related work.
        </p>
      </header>

      <section className="mt-10 max-w-4xl">
        <h2 className="text-xl font-semibold text-white">What this topic includes</h2>
        <p className="mt-3 leading-relaxed text-slate-300">
          In {category.name.toLowerCase()}, {subtopic.name.toLowerCase()} can describe a change in what scientists observe, classify, or measure. The entries below are grouped by their documented subject rather than by headline popularity, making it easier to compare discoveries from different years and places.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="topic-entries">
        <h2 id="topic-entries" className="text-xl font-semibold text-white">Key discoveries</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {discoveries.map((discovery) => <DiscoveryCard key={discovery.slug} discovery={discovery} />)}
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-white">Questions readers ask</h2>
          <div className="mt-4 space-y-4">
            <div className="card p-5">
              <h3 className="font-medium text-white">How many {subtopic.name.toLowerCase()} discoveries are catalogued?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Beyond Signal currently lists {discoveries.length}. The total changes as new source-checked entries are added.</p>
            </div>
            <div className="card p-5">
              <h3 className="font-medium text-white">Where have these discoveries been made?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">They span {new Set(discoveries.map((d) => d.location.country)).size} countries or international research settings, from {discoveries[0].location.name} to other locations in the catalogue.</p>
            </div>
            <div className="card p-5">
              <h3 className="font-medium text-white">How should these entries be compared?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Start with the primary source and the discovery method. A visually striking result and a formal species or particle identification do not always use the same standard of evidence.</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Related {category.name.toLowerCase()} topics</h2>
          <div className="mt-4 space-y-2">
            {otherSubtopics.map((entry) => (
              <Link key={entry.slug} href={`/${category.slug}/${entry.slug}`} className="card flex items-center justify-between p-4 hover:border-signal/40">
                <span className="font-medium text-white">{entry.name}</span>
                <span className="text-sm text-slate-400">{entry.discoveries.length} entries →</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {discoveries.slice(0, 5).map((d) => <Link key={d.slug} href={`/discoveries/${d.slug}`} className="pill hover:border-signal/40">{d.year}</Link>)}
          </div>
        </div>
      </section>
    </div>
  );
}
