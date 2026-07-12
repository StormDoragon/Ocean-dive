/**
 * SEO blog posts that live under the Discovery hub (`/discovery`).
 *
 * Each post carries an explicit numeric `order`. Posts are listed on the hub
 * and in the sitemap sorted by that number (ascending), so a new SEO post only
 * needs the next number in the sequence and a unique `slug`. Body content is
 * plain, structured data — an `intro` paragraph plus a list of `sections`,
 * each a heading with one or more paragraphs — so every post renders with the
 * same clean, search-friendly layout.
 */
export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  /** Sequential position under the Discovery hub. Lower numbers come first. */
  order: number;
  slug: string;
  title: string;
  /** Meta description and hub summary. Keep under ~160 characters. */
  description: string;
  /** ISO date (YYYY-MM-DD). */
  datePublished: string;
  /** ISO date (YYYY-MM-DD) of the last meaningful edit, if any. */
  dateUpdated?: string;
  /** Short emoji shown beside the post on the hub. */
  emoji?: string;
  tags?: string[];
  /** Opening paragraph, rendered as the lede above the sections. */
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    order: 1,
    slug: "welcome-to-the-discovery-hub",
    title: "Welcome to the Discovery Hub",
    description:
      "The Discovery hub gathers every part of Beyond Signal in one place and is home to our growing library of science guides and explainers.",
    datePublished: "2026-07-12",
    emoji: "🧭",
    tags: ["guide", "getting started"],
    intro:
      "The Discovery hub is the front door to everything on Beyond Signal. From here you can jump into any section of the site, and it is where every new guide and explainer we publish will appear — numbered in the order it was written so the whole library is easy to follow start to finish.",
    sections: [
      {
        heading: "Everything in one place",
        paragraphs: [
          "Beyond Signal has grown into a handful of distinct ways to explore scientific discovery: a searchable catalog, a timeline, an ocean depth explorer, a tree of life, an interactive map and globe, and an AI-powered question box. The Discovery hub links to all of them from a single page so you never have to hunt through the menu.",
          "Every section is also reachable from the navigation bar at the top and from the footer at the bottom of any page — the hub simply brings them together with a short description of what each one does.",
        ],
      },
      {
        heading: "A home for our guides",
        paragraphs: [
          "Below the section links you will find our library of guides. These are longer, plain-English articles that explain how discoveries are made, how to get the most out of each tool, and the stories behind the science.",
          "Each guide is given the next number in the sequence when it is published, so the list reads in order. Newer guides build on earlier ones, but every article stands on its own — start wherever you like.",
        ],
      },
      {
        heading: "How to use this page",
        paragraphs: [
          "If you are new, start with the section cards above and pick whichever area sounds most interesting. If you are here to read, browse the numbered guides and open any that catch your eye. Everything on Beyond Signal is free to read and linked back to a source wherever possible.",
        ],
      },
    ],
  },
];

const bySlug = new Map(blogPosts.map((post) => [post.slug, post]));

/** All posts sorted by their numeric order (ascending). */
export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => a.order - b.order);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return bySlug.get(slug);
}

/** Most recent edit across all posts, for the hub's `lastModified`. */
export function blogLastModified(post: BlogPost): string {
  return post.dateUpdated ?? post.datePublished;
}
