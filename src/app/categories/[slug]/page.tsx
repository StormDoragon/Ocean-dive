import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import { categories, getCategory } from "@/content/categories";
import { getBlogPostsByCategory } from "@/content/blog";
import { getCategoryContext } from "@/lib/hubs";
import type { CategorySlug } from "@/content/types";
import {
  breadcrumbJsonLd,
  canonicalUrl,
  itemListJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug as CategorySlug);
  if (!category) return { title: "Category not found" };
  const canonical = canonicalUrl(`/categories/${category.slug}`);
  return {
    title: `${category.name}: Discoveries and Scientific Research`,
    description: category.description,
    alternates: { canonical },
    openGraph: { type: "website", url: canonical },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug as CategorySlug);
  if (!category) notFound();

  const context = getCategoryContext(category.slug);
  if (!context) notFound();
  const { discoveries, guide, subtopics } = context;
  const guides = getBlogPostsByCategory(category.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Categories", path: "/categories" },
        { name: category.name, path: `/categories/${category.slug}` },
      ]),
      itemListJsonLd(
        `${category.name} discoveries`,
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
        <Link href="/categories" className="hover:text-white">Categories</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{category.name}</span>
      </nav>

      <header
        className="mt-4 overflow-hidden rounded-2xl border border-white/10 p-8"
        style={{
          background: `linear-gradient(135deg, ${category.color}22, transparent)`,
        }}
      >
        <div className="text-5xl">{category.emoji}</div>
        <h1 className="mt-3 text-3xl font-bold text-white">{category.name}</h1>
        <p className="mt-2 max-w-2xl text-slate-300">{category.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {category.subtopics.map((s) => (
            <span key={s} className="pill">{s}</span>
          ))}
        </div>
        {category.slug === "ocean" ? (
          <Link
            href="/depth"
            className="mt-5 inline-flex rounded-full border border-signal/40 bg-signal/10 px-4 py-2 text-sm font-semibold text-signal transition-colors hover:bg-signal/20"
          >
            🌊 Explore these by depth →
          </Link>
        ) : null}
      </header>

      <section className="mt-10 max-w-4xl" aria-labelledby="category-guide">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">
          Field guide
        </p>
        <h2 id="category-guide" className="mt-2 text-2xl font-semibold text-white">
          Understanding {category.name.toLowerCase()}
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-300">
          {guide.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      {guide.sections.map((section) => (
        <section key={section.heading} className="mt-8 max-w-4xl">
          <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
          <p className="mt-2 leading-relaxed text-slate-300">{section.body}</p>
        </section>
      ))}

      {guides.length > 0 ? (
        <section className="mt-10" aria-labelledby="category-guides">
          <h2 id="category-guides" className="text-xl font-semibold text-white">
            Guides &amp; explainers
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {guides.map((post) => (
              <Link
                key={post.slug}
                href={`/discovery/${post.slug}`}
                className="card p-4 transition-colors hover:border-signal/40"
              >
                <h3 className="font-semibold text-white">
                  {post.emoji ? `${post.emoji} ` : ""}
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400 line-clamp-2">{post.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-10" aria-labelledby="subtopics">
        <h2 id="subtopics" className="text-xl font-semibold text-white">Explore by subtopic</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {subtopics.map((subtopic) => (
            <Link
              key={subtopic.slug}
              href={`/${category.slug}/${subtopic.slug}`}
              className="card p-4 transition-colors hover:border-signal/40"
            >
              <h3 className="font-semibold text-white">{subtopic.name}</h3>
              <p className="mt-1 text-sm text-slate-400">
                {subtopic.discoveries.length} catalogued {subtopic.discoveries.length === 1 ? "discovery" : "discoveries"}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-white">
          {discoveries.length} {discoveries.length === 1 ? "discovery" : "discoveries"}
        </h2>
        {discoveries.length === 0 ? (
          <p className="mt-3 text-slate-400">
            No discoveries catalogued here yet — check back soon.
          </p>
        ) : (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {discoveries.map((d) => (
              <DiscoveryCard key={d.slug} discovery={d} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-white">Major discoveries by year</h2>
          <ol className="mt-4 space-y-3 border-l border-white/10 pl-5">
            {discoveries.slice(0, 8).map((discovery) => (
              <li key={discovery.slug} className="relative">
                <span className="absolute -left-[1.65rem] top-1.5 h-2 w-2 rounded-full bg-signal" />
                <Link href={`/discoveries/${discovery.slug}`} className="font-medium text-white hover:text-signal">
                  {discovery.title}
                </Link>
                <p className="text-sm text-slate-500">{discovery.year} · {discovery.subtopic}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Related scientific terms</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {guide.relatedTerms.map((term) => <span key={term} className="pill">{term}</span>)}
          </div>
        </div>
      </section>

      <section className="mt-12 max-w-4xl" aria-labelledby="category-faq">
        <h2 id="category-faq" className="text-xl font-semibold text-white">Frequently asked questions</h2>
        <div className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10">
          {guide.faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer font-medium text-white marker:text-signal">{faq.question}</summary>
              <p className="mt-3 leading-relaxed text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
