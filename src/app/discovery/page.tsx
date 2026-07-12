import type { Metadata } from "next";
import Link from "next/link";
import { sections, site } from "@/lib/site";
import { getAllBlogPosts } from "@/content/blog";
import { canonicalUrl, itemListJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Discovery",
  description:
    "The Discovery hub gathers every section of Beyond Signal in one place, alongside our growing library of numbered science guides and explainers.",
  alternates: { canonical: canonicalUrl("/discovery") },
};

export default function DiscoveryHubPage() {
  const posts = getAllBlogPosts();
  const jsonLd = {
    "@context": "https://schema.org",
    ...itemListJsonLd(
      "Beyond Signal guides",
      posts.map((post) => ({ name: post.title, path: `/discovery/${post.slug}` })),
    ),
  };

  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <header className="max-w-2xl">
        <p className="pill">Discovery hub</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">Discovery</h1>
        <p className="mt-3 text-lg text-slate-300">
          Every part of {site.name} in one place — and the home for our guides. Jump
          into any section below, or read through the numbered library of science
          explainers.
        </p>
      </header>

      {/* Every section, together */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-white">Explore every section</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="card group flex flex-col p-5 transition-colors hover:border-signal/50"
            >
              <span className="text-2xl" aria-hidden>
                {section.emoji}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-signal">
                {section.label}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{section.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Numbered guides */}
      <section className="mt-14">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white">Guides &amp; explainers</h2>
          <span className="text-sm text-slate-500">{posts.length} published</span>
        </div>
        <p className="mt-1 max-w-2xl text-slate-400">
          Long-form, plain-English guides — numbered in the order they were
          published so the whole library reads start to finish.
        </p>

        <ol className="mt-6 space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/discovery/${post.slug}`}
                className="card group flex items-start gap-4 p-5 transition-colors hover:border-signal/50"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-signal/40 bg-signal/10 text-sm font-semibold text-signal">
                  {String(post.order).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white group-hover:text-signal">
                    {post.emoji ? `${post.emoji} ` : ""}
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{post.description}</p>
                  <div className="mt-2 text-xs text-slate-500">
                    {new Date(post.datePublished).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
