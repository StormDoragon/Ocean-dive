import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2022.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2022Discoveries: Discovery[] = [
  {
    slug: "lower-omo-kibish-shala-ash-older-minimum-age-omo-i",
    "datePublished": "2026-11-27",
    title: "Volcanic ash raised the minimum age of Ethiopia’s Omo I fossil",
    categorySlug: "biology",
    subtopic: "Human evolution",
    year: 2022,
    dateDiscovered: "2022-01-12",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Lower Omo Valley near Kibish (regional map proxy for the geological study)",
      lat: 5.42,
      lng: 35.98,
      country: "Ethiopia",
    },
    discoveringOrg: "Céline M. Vidal and the Omo-Kibish dating study team",
    heroImage: "/images/discoveries/2022/lower-omo-kibish-shala-ash-older-minimum-age-omo-i.webp",
    imageAlt: "Original editorial diagram for Dating a fossil with an overlying ash layer. About 233,000 years: central age of the overlying ash. Minimum age: the fossil lies below the ash.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2022/lower-omo-kibish-shala-ash-older-minimum-age-omo-i.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A chemically matched ash layer linked to Ethiopia's Shala volcano gave Omo I a minimum age of roughly 233,000 years, with an uncertainty of about 22,000 years.",
    story: {
      whyThere: "The Omo I remains were found in the lower Omo Valley below a distinct ash bed. Dating the ash can place a lower bound on the age of the sediment containing the fossil.",
      howFound: "The team compared the chemistry of the ash with the products of eruptions in the Ethiopian Rift. The close match pointed to a Shala eruption dated to about 233,000 years ago.",
      whatMakesUnique: "The resulting bound puts Omo I earlier than many previous estimates. The exact time the individual lived could be older than the overlying eruption, and the new bound carries dating uncertainty.",
    },
    gallery: ["/images/discoveries/2022/lower-omo-kibish-shala-ash-older-minimum-age-omo-i.webp"],
    primarySourceUrl: "https://www.nature.com/articles/s41586-021-04275-8",
    videoUrls: [],
    relatedSlugs: ["mount-carmel-misliya-upper-jaw-early-modern-human-fossil"],
    tags: ["human evolution", "volcanic ash", "early Homo sapiens"],
  },
];
