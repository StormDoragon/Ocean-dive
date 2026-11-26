import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2025.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2025Discoveries: Discovery[] = [
  {
    slug: "barnham-early-fire-making-evidence",
    "datePublished": "2026-11-26",
    title: "Barnham Preserves Evidence for Making Fire 400,000 Years Ago",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2025,
    dateDiscovered: "2025-12-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Barnham, Suffolk (regional marker)",
      lat: 52.38,
      lng: 0.77,
      country: "United Kingdom",
    },
    discoveringOrg: "Rob Davis, Martina Hatch and the British Museum-led Barnham team",
    heroImage: "/images/discoveries/2025/barnham-early-fire-making-evidence.webp",
    imageAlt: "Original editorial diagram for Clues to an ancient fire. About 400,000 years: age of the Barnham evidence. Heated ground: found with damaged flint and pyrite.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2025/barnham-early-fire-making-evidence.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Heated ground, flint broken by heat and rare pieces of pyrite at Barnham led archaeologists to infer that people deliberately started fires there about 400,000 years ago.",
    story: {
      whyThere: "Sediments in a former clay pit in Suffolk preserved the remains of an ancient pond and the surfaces that people used around it. Researchers could examine the burned ground in its original setting.",
      howFound: "The team compared the distribution and heating of the sediment, the fractures in stone tools and the origin of the pyrite. The mineral is scarce locally and can produce sparks when struck against flint.",
      whatMakesUnique: "The combination supports fire-making far earlier than previously documented. The act itself is inferred, and the site did not yield human remains that could establish the fire-makers' identity.",
    },
    gallery: ["/images/discoveries/2025/barnham-early-fire-making-evidence.webp"],
    primarySourceUrl: "https://www.nature.com/articles/s41586-025-09855-6",
    supportingSources: [
      {
        title: "Blazing a trail: the world's oldest known fire-making",
        url: "https://www.britishmuseum.org/blog/blazing-trail-worlds-oldest-known-fire-making",
        publisher: "The British Museum",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-26",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["casablanca-773000-year-hominins", "kalambo-falls-wooden-structure"],
    tags: ["fire-making", "Palaeolithic", "pyrite"],
  },
];
