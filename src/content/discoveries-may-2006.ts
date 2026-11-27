import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2006.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2006Discoveries: Discovery[] = [
  {
    slug: "southern-tanzania-kipunji-rungwecebus-new-primate-genus",
    "datePublished": "2026-11-27",
    title: "A New Genus Separates the Kipunji From Other Mangabeys",
    categorySlug: "biology",
    subtopic: "New species",
    year: 2006,
    dateDiscovered: "2006-05-11",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Southern Highlands, Tanzania (broad proxy for the Mount Rungwe study)",
      lat: -9.21,
      lng: 33.68,
      country: "Tanzania",
    },
    discoveringOrg: "Tim R. B. Davenport, William T. Stanley and colleagues",
    scientificName: "Rungwecebus kipunji",
    heroImage: "/images/discoveries/2006/southern-tanzania-kipunji-rungwecebus-new-primate-genus.webp",
    imageAlt: "Original editorial diagram for A specimen changes the classification of a Tanzanian primate. 2005: year of the original species description. 2006: year of the new genus description.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2006/southern-tanzania-kipunji-rungwecebus-new-primate-genus.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A specimen from Tanzania allowed researchers to reassess the placement of the kipunji and describe the new genus Rungwecebus.",
    story: {
      whyThere: "The kipunji had been described as a new monkey species in 2005, largely from observations. Its assignment to an existing genus was tested once researchers could compare a preserved specimen.",
      howFound: "The study combined anatomical information with analyses of relationships among African monkeys. The results placed the kipunji outside the genus where it had first been classified.",
      whatMakesUnique: "The work changed the genus name applied to the species. It also gave conservation researchers a clearer taxonomic framework for a monkey known from a limited part of Tanzania.",
    },
    gallery: [
      "/images/discoveries/2006/southern-tanzania-kipunji-rungwecebus-new-primate-genus.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/16690815/",
    videoUrls: [],
    relatedSlugs: ["central-congo-lomami-lesula-species-description"],
    tags: ["primate taxonomy", "Tanzania", "mangabeys"],
  },
];
