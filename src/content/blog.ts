import { discoveryDeepDivePosts } from "./blog-discovery-deep-dives";
import type { CategorySlug } from "./types";

/**
 * SEO blog posts that live under the Discovery hub (`/discovery`).
 *
 * Each post carries an explicit numeric `order`. Posts are listed on the hub
 * and in the sitemap sorted by that number (ascending), so a new SEO post only
 * needs the next number in the sequence and a unique `slug`. A post may be
 * filed under a site `category` (e.g. "space") so it is grouped on the hub and
 * cross-linked from that category page.
 *
 * Body content is plain, structured data — an `intro` paragraph plus a list of
 * `sections`, each a heading with one or more paragraphs and an optional image —
 * so every post renders with the same clean, search-friendly layout.
 */
export type BlogImage = {
  src: string;
  /** Always non-empty, accessible alt text. */
  alt: string;
  /** Credit line, e.g. "CSIRO / John Sarkissian". */
  credit?: string;
  /** Link to the image's source or file page. */
  sourceUrl?: string;
  /** License short label, e.g. "CC BY 3.0". */
  license?: string;
  /** Optional caption shown beneath the image. */
  caption?: string;
  /** CSS aspect-ratio for the frame (e.g. "16 / 9", "3 / 2"). Defaults to 16/9. */
  aspect?: string;
  /** CSS object-position for the crop (e.g. "center 30%", "top"). */
  objectPosition?: string;
  /**
   * True when this is placeholder art rather than a real photograph, so it is
   * never presented as a depiction of the real subject.
   */
  placeholder?: boolean;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  /** Optional image rendered at the end of this section. */
  image?: BlogImage;
};

export type BlogFaq = { question: string; answer: string };

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
  /** The site category this guide is filed under (e.g. "space"). */
  category?: CategorySlug;
  /** Optional catalog discovery that this article expands. */
  discoverySlug?: string;
  tags?: string[];
  /** Real photograph or clearly labelled editorial illustration shown at the top. */
  heroImage?: BlogImage;
  /** Scannable at-a-glance facts, rendered as a key-facts box. */
  keyFacts?: { label: string; value: string }[];
  /** Opening paragraph, rendered as the lede above the sections. */
  intro: string;
  sections: BlogSection[];
  faqs?: BlogFaq[];
  /** External authorities the post draws on, linked at the foot of the article. */
  sources?: { label: string; url: string }[];
};

const originalBlogPosts: BlogPost[] = [
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
  {
    order: 2,
    slug: "project-phoenix-parkes-observatory-seti-search",
    title: "The Search for Extraterrestrial Life: Project Phoenix at Parkes Observatory",
    description:
      "In February 1995, Project Phoenix began listening for alien signals from the Parkes radio telescope in Australia — the story of SETI's most sensitive targeted search.",
    datePublished: "2026-07-12",
    emoji: "📡",
    category: "space",
    tags: ["SETI", "Project Phoenix", "Parkes Observatory", "radio astronomy"],
    heroImage: {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/00/CSIRO_ScienceImage_4350_CSIROs_Parkes_Radio_Telescope_with_moon_in_the_background.jpg",
      alt: "The 64-metre CSIRO Parkes radio telescope silhouetted at dusk with the Moon rising behind the dish.",
      credit: "CSIRO",
      license: "CC BY 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_4350_CSIROs_Parkes_Radio_Telescope_with_moon_in_the_background.jpg",
      // Source is portrait (2129×2657); bias the crop toward the top to keep the Moon.
      aspect: "3 / 2",
      objectPosition: "center 30%",
    },
    keyFacts: [
      { label: "Project", value: "Project Phoenix (SETI Institute)" },
      { label: "Started", value: "February 1995" },
      { label: "Telescope", value: "Parkes 64 m radio telescope, NSW, Australia" },
      { label: "Targets", value: "~800 nearby, Sun-like stars" },
      { label: "Frequency band", value: "~1,200–3,000 MHz" },
      { label: "Confirmed signal", value: "None detected" },
    ],
    intro:
      "In February 1995, a small team of astronomers pointed the largest radio telescope in the Southern Hemisphere at the nearest stars and began to listen for a signal that would change everything. This was Project Phoenix — a privately funded revival of a search NASA had been ordered to abandon — and its first campaign ran from the iconic Parkes Observatory in New South Wales, Australia. It remains one of the most sensitive targeted searches for extraterrestrial intelligence ever attempted.",
    sections: [
      {
        heading: "A search reborn from the ashes",
        paragraphs: [
          "Project Phoenix took its name from the mythical bird that rises from its own ashes, and the metaphor was earned. In 1992 NASA had launched an ambitious High Resolution Microwave Survey to hunt for radio signals from other civilizations. Barely a year later, in October 1993, the U.S. Congress cancelled the program's funding, and the government's role in the search for extraterrestrial intelligence came to an abrupt end.",
          "Rather than let the effort die, the non-profit SETI Institute in California raised private money to continue the most promising part of the work — the targeted search of individual Sun-like stars. Backed by donors including several of Silicon Valley's founding figures, and led by astronomer Jill Tarter, the reborn program was christened Project Phoenix.",
        ],
      },
      {
        heading: "Why Parkes, and why the Southern Hemisphere",
        paragraphs: [
          "To listen for a faint whisper from light-years away, you need a very large, very sensitive dish — and you need to be able to see the right stars. Many of the closest Sun-like stars sit in the southern sky, invisible from the northern observatories where earlier searches had been based. That made Australia the natural place to begin.",
          "The CSIRO Parkes radio telescope, a 64-metre dish that opened in 1961 and famously relayed television from the Apollo 11 Moon landing, was the largest telescope in the Southern Hemisphere and a critical hub for studying distant solar systems. From February 1995, Project Phoenix used Parkes as its primary ear on the cosmos, with the smaller Mopra antenna nearby acting as a second dish to help tell a genuine cosmic signal apart from local interference.",
        ],
        image: {
          src: "/images/blog/project-phoenix/parkes-dish-daytime.jpg",
          alt: "Daytime view of the white 64-metre Parkes radio telescope dish tilted toward the sky.",
          credit: "Adrian Pingstone",
          license: "Public domain",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Parkes.arp.750pix.jpg",
          caption: "The Parkes 64-metre dish, opened in 1961 and the largest radio telescope in the Southern Hemisphere.",
        },
      },
      {
        heading: "How Project Phoenix actually listened",
        paragraphs: [
          "Project Phoenix was a targeted search, not a survey of the whole sky. Astronomers drew up a list of roughly 800 nearby stars that resembled our Sun — stars old enough and stable enough to give life a chance — most of them within about 200 light-years of Earth.",
          "For each star, the telescope scanned a wide band of radio frequencies, splitting it into billions of narrow channels and searching for the tell-tale sign of technology: a signal squeezed into a single, unnaturally narrow frequency that nature does not produce. When the system flagged a promising candidate, an automated protocol immediately re-checked it and compared it against the second telescope. If a signal was really coming from the star and not from a passing satellite or a microwave oven on Earth, it would move across the sky with the star. Almost everything the search flagged turned out to be human-made interference.",
        ],
      },
      {
        heading: "What it found — and why silence still matters",
        paragraphs: [
          "Across its Parkes campaign in 1995, and later observations from telescopes in the United States and at Arecibo in Puerto Rico, Project Phoenix examined its full list of target stars through 2004. It never detected a confirmed signal from another civilization.",
          "That is not the failure it might sound like. A search of a few hundred stars, in one slice of the radio spectrum, over a few years, is a single cup dipped into a cosmic ocean. Project Phoenix proved that a rigorous, sensitive, privately funded search was possible, and it sharpened the tools and the discipline that modern efforts rely on. Its direct descendants — the Allen Telescope Array, purpose-built for SETI, and the Breakthrough Listen initiative, which has itself observed from Parkes — carry the work forward across far more stars and far wider frequencies.",
        ],
        image: {
          src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Allen_Telescope_Array_-_Flickr_-_brewbooks.jpg",
          alt: "A row of small white dish antennas of the Allen Telescope Array under a blue sky at Hat Creek, California.",
          credit: "brewbooks (Flickr)",
          license: "CC BY-SA 2.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Allen_Telescope_Array_-_Flickr_-_brewbooks.jpg",
          caption: "The Allen Telescope Array in California — purpose-built for SETI and a direct descendant of Project Phoenix.",
        },
      },
    ],
    faqs: [
      {
        question: "What was Project Phoenix?",
        answer:
          "Project Phoenix was a privately funded search for extraterrestrial intelligence run by the SETI Institute from 1995 to 2004. It listened for radio signals from around 800 nearby Sun-like stars and was the successor to NASA's cancelled High Resolution Microwave Survey.",
      },
      {
        question: "When did Project Phoenix start at Parkes Observatory?",
        answer:
          "Project Phoenix began its first observing campaign at the Parkes radio telescope in New South Wales, Australia, in February 1995.",
      },
      {
        question: "Why did Project Phoenix use the Parkes telescope?",
        answer:
          "Parkes was the largest radio telescope in the Southern Hemisphere and could see many of the nearest Sun-like stars, which lie in the southern sky and are hidden from northern observatories.",
      },
      {
        question: "Did Project Phoenix find alien life?",
        answer:
          "No. Project Phoenix did not detect any confirmed signal from an extraterrestrial civilization, but it demonstrated that a sensitive, disciplined targeted search was possible and shaped the SETI projects that followed.",
      },
    ],
    sources: [
      { label: "SETI Institute — Project Phoenix", url: "https://www.seti.org/seti-institute/project/details/project-phoenix" },
      { label: "Project Phoenix (Wikipedia)", url: "https://en.wikipedia.org/wiki/Project_Phoenix_(SETI)" },
      { label: "CSIRO Parkes Observatory", url: "https://www.parkes.atnf.csiro.au/" },
    ],
  },
];

export const blogPosts: BlogPost[] = [...originalBlogPosts, ...discoveryDeepDivePosts];

const bySlug = new Map(blogPosts.map((post) => [post.slug, post]));
const byDiscoverySlug = new Map(
  blogPosts
    .filter((post): post is BlogPost & { discoverySlug: string } => Boolean(post.discoverySlug))
    .map((post) => [post.discoverySlug, post]),
);

/** All posts sorted by their numeric order (ascending). */
export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => a.order - b.order);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return bySlug.get(slug);
}

export function getBlogPostByDiscoverySlug(discoverySlug: string): BlogPost | undefined {
  return byDiscoverySlug.get(discoverySlug);
}

/** Posts filed under a given category, in numeric order. */
export function getBlogPostsByCategory(category: CategorySlug): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.category === category);
}

/**
 * Posts sorted most-recent-first (by publish date, then newest order). Pass a
 * `category` to limit to that field, and a `limit` to cap the count — used for
 * the homepage "latest guides" strip and each category's article section.
 */
export function getRecentBlogPosts(limit?: number, category?: CategorySlug): BlogPost[] {
  const posts = blogPosts
    .filter((post) => (category ? post.category === category : true))
    .sort((a, b) => {
      if (a.datePublished !== b.datePublished) {
        return a.datePublished < b.datePublished ? 1 : -1;
      }
      return b.order - a.order;
    });
  return typeof limit === "number" ? posts.slice(0, limit) : posts;
}

/** Most recent edit across all posts, for the hub's `lastModified`. */
export function blogLastModified(post: BlogPost): string {
  return post.dateUpdated ?? post.datePublished;
}
