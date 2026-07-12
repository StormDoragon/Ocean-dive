import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPost } from "@/content/blog";
import { site } from "@/lib/site";
import {
  blogArticleJsonLd,
  blogCanonicalUrl,
  breadcrumbJsonLd,
  canonicalUrl,
  serializeJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Guide not found" };

  const canonical = blogCanonicalUrl(post);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateUpdated ?? post.datePublished,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      blogArticleJsonLd(post),
      breadcrumbJsonLd([
        { name: "Discovery", path: "/discovery" },
        { name: post.title, path: `/discovery/${post.slug}` },
      ]),
    ],
  };

  const published = new Date(`${post.datePublished}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <article className="container-page max-w-3xl py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <nav className="text-sm text-slate-400">
        <Link href="/discovery" className="hover:text-white">
          Discovery
        </Link>
        <span className="px-2 text-slate-600">/</span>
        <span className="text-slate-300">Guide {String(post.order).padStart(2, "0")}</span>
      </nav>

      <header className="mt-4">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          {post.emoji ? `${post.emoji} ` : ""}
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
          <span>{published}</span>
          <span aria-hidden>·</span>
          <span>{site.editorialTeam}</span>
          {post.tags?.length ? (
            <>
              <span aria-hidden>·</span>
              <span>{post.tags.join(", ")}</span>
            </>
          ) : null}
        </div>
      </header>

      <p className="mt-6 text-lg leading-relaxed text-slate-300">{post.intro}</p>

      {post.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
          <div className="mt-3 space-y-3 leading-relaxed text-slate-300">
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 border-t border-white/10 pt-6">
        <Link
          href="/discovery"
          className="text-sm font-medium text-signal hover:underline"
        >
          ← Back to the Discovery hub
        </Link>
      </div>
    </article>
  );
}
