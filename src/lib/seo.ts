import type { Discovery } from "@/content/types";
import type { BlogPost } from "@/content/blog";
import { site } from "@/lib/site";

/** The site URL without a trailing slash, for stable canonical URLs. */
export const siteUrl = site.url.replace(/\/$/, "");

export function canonicalUrl(path: string): string {
  const normalizedPath = path === "/" ? "" : `/${path.replace(/^\/+/, "")}`;
  return `${siteUrl}${normalizedPath}`;
}

export function absoluteImageUrl(src: string): string {
  return /^https?:\/\//i.test(src) ? src : canonicalUrl(src);
}

/** Prevent a content string from terminating the JSON-LD script element. */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function discoveryCanonicalUrl(discovery: Discovery): string {
  return canonicalUrl(`/discoveries/${discovery.slug}`);
}

export function discoveryLastModified(discovery: Discovery): string {
  return discovery.dateUpdated ?? discovery.dateDiscovered;
}

export function monthLabel(month: number): string {
  return new Intl.DateTimeFormat("en-US", { month: "long", timeZone: "UTC" }).format(
    new Date(Date.UTC(2020, month - 1, 1)),
  );
}

export function monthSlug(month: number): string {
  return monthLabel(month).toLowerCase();
}

export function monthNumberFromSlug(slug: string): number | undefined {
  const normalized = slug.toLowerCase();
  const month = Array.from({ length: 12 }, (_, index) => index + 1).find(
    (value) => monthSlug(value) === normalized,
  );
  return month;
}

export function discoveryArticleJsonLd(discovery: Discovery) {
  const canonical = discoveryCanonicalUrl(discovery);
  const primarySource = discovery.primarySourceUrl ?? discovery.paperUrl;
  const citations = [
    primarySource,
    ...(discovery.supportingSources?.map((source) => source.url) ?? []),
  ].filter((url): url is string => Boolean(url));

  return {
    "@type": "Article",
    "@id": `${canonical}#article`,
    url: canonical,
    headline: discovery.title,
    description: discovery.summary,
    image: [absoluteImageUrl(discovery.heroImage)],
    datePublished: discovery.dateDiscovered,
    dateModified: discoveryLastModified(discovery),
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: canonicalUrl("/icon.svg"),
      },
    },
    ...(citations.length ? { citation: citations } : {}),
    about: {
      "@type": "Thing",
      name: discovery.scientificName ?? discovery.title,
    },
    locationCreated: {
      "@type": "Place",
      name: discovery.location.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: discovery.location.lat,
        longitude: discovery.location.lng,
      },
    },
  };
}

export function blogCanonicalUrl(post: BlogPost): string {
  return canonicalUrl(`/discovery/${post.slug}`);
}

export function blogArticleJsonLd(post: BlogPost) {
  const canonical = blogCanonicalUrl(post);
  return {
    "@type": "BlogPosting",
    "@id": `${canonical}#article`,
    url: canonical,
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateUpdated ?? post.datePublished,
    mainEntityOfPage: canonical,
    ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
    author: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: canonicalUrl("/icon.svg"),
      },
    },
  };
}

export function faqPageJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function itemListJsonLd(
  name: string,
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.path),
    })),
  };
}
