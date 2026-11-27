import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2015.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2015Discoveries: Discovery[] = [
  {
    slug: "central-lake-malawi-1-3-million-year-dry-period-core",
    "datePublished": "2026-11-27",
    title: "Lake Malawi’s Sediments Recorded 24 Major Water-Level Drops",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2015,
    dateDiscovered: "2015-12-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Central Lake Malawi, drilling site 1 area",
      lat: -11.294,
      lng: 34.436,
      country: "Malawi",
    },
    discoveringOrg: "Robert P. Lyons and the Lake Malawi Drilling Project",
    heroImage: "/images/discoveries/2015/central-lake-malawi-1-3-million-year-dry-period-core.webp",
    imageAlt: "Original editorial diagram for A lake expands and contracts. 1.3 million: Years in the record. 24 intervals: Lake drops greater than 200 m.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2015/central-lake-malawi-1-3-million-year-dry-period-core.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A sediment core extended Lake Malawi’s hydroclimate record to 1.3 million years. Evidence in the core pointed to 24 intervals with lake levels more than 200 meters below modern levels.",
    story: {
      whyThere: "A drilling team recovered sediment from the central basin of Lake Malawi. Deep deposits preserved physical and chemical traces of changing conditions in the lake.",
      howFound: "The record shows repeated large falls in water level. After roughly 800,000 years ago, the lake was more often deep, but some lake-level lows became unusually severe or long lasting.",
      whatMakesUnique: "The findings quantify how much available freshwater habitat varied. Links to the evolution of particular fish groups remain an interpretation of the record.",
    },
    gallery: ["/images/discoveries/2015/central-lake-malawi-1-3-million-year-dry-period-core.webp"],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4697375/",
    videoUrls: [],
    relatedSlugs: ["lake-ohrid-deep-core-mediterranean-rainfall-african-monsoons"],
    tags: ["Lake Malawi", "lake sediments", "African hydroclimate", "Lake level"],
  },
];
