import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { BlogImage } from "@/content/blog";
import { getAllBlogPosts, getBlogPost } from "@/content/blog";
import { getCategory } from "@/content/categories";
import { site } from "@/lib/site";
import {
  absoluteImageUrl,
  blogArticleJsonLd,
  blogCanonicalUrl,
  breadcrumbJsonLd,
  faqPageJsonLd,
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
  const ogImages =
    post.heroImage && !post.heroImage.placeholder
      ? [absoluteImageUrl(post.heroImage.src)]
      : undefined;
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
      ...(ogImages ? { images: ogImages } : {}),
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

  const category = post.category ? getCategory(post.category) : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      blogArticleJsonLd(post),
      breadcrumbJsonLd([
        { name: "Discovery", path: "/discovery" },
        ...(category ? [{ name: category.name, path: `/categories/${category.slug}` }] : []),
        { name: post.title, path: `/discovery/${post.slug}` },
      ]),
      ...(post.faqs?.length ? [faqPageJsonLd(post.faqs)] : []),
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

      <nav className="flex flex-wrap items-center gap-x-2 text-sm text-slate-400">
        <Link href="/discovery" className="hover:text-white">
          Discovery
        </Link>
        {category ? (
          <>
            <span className="text-slate-600">/</span>
            <Link href={`/categories/${category.slug}`} className="hover:text-white">
              {category.emoji} {category.name}
            </Link>
          </>
        ) : null}
        <span className="text-slate-600">/</span>
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

      {post.heroImage ? <Figure image={post.heroImage} priority className="mt-6" /> : null}

      <p className="mt-6 text-lg leading-relaxed text-slate-300">{post.intro}</p>

      {post.keyFacts?.length ? (
        <section className="mt-8 rounded-2xl border border-white/10 bg-abyss-900/40 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-signal">
            Key facts
          </h2>
          <dl className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {post.keyFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col">
                <dt className="text-xs uppercase tracking-wide text-slate-500">{fact.label}</dt>
                <dd className="text-sm font-medium text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {post.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
          <div className="mt-3 space-y-3 leading-relaxed text-slate-300">
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {section.image ? <Figure image={section.image} className="mt-6" /> : null}
        </section>
      ))}

      {post.faqs?.length ? (
        <section className="mt-12" aria-labelledby="faq">
          <h2 id="faq" className="text-xl font-semibold text-white">
            Frequently asked questions
          </h2>
          <div className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10">
            {post.faqs.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="cursor-pointer font-medium text-white marker:text-signal">
                  {faq.question}
                </summary>
                <p className="mt-3 leading-relaxed text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {post.sources?.length ? (
        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Sources
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {post.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-signal hover:underline"
                >
                  {source.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-12 border-t border-white/10 pt-6">
        <Link href="/discovery" className="text-sm font-medium text-signal hover:underline">
          ← Back to the Discovery hub
        </Link>
      </div>
    </article>
  );
}

/** Renders an article image with an honest caption, credit, and license line. */
function Figure({
  image,
  priority,
  className,
}: {
  image: BlogImage;
  priority?: boolean;
  className?: string;
}) {
  const hasMeta = Boolean(image.caption || image.credit || image.license || image.sourceUrl);
  return (
    <figure className={className}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-abyss-900/40">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 768px"
          className={image.placeholder ? "object-contain p-8 opacity-80" : "object-cover"}
        />
      </div>
      {hasMeta ? (
        <figcaption className="mt-2 text-xs text-slate-500">
          {image.caption ? <span>{image.caption} </span> : null}
          {image.credit ? <span>Credit: {image.credit}. </span> : null}
          {image.license ? <span>{image.license}. </span> : null}
          {image.sourceUrl ? (
            <a
              href={image.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-signal"
            >
              Source ↗
            </a>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
