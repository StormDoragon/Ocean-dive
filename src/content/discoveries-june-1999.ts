import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 1999.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june1999Discoveries: Discovery[] = [
  {
    slug: "vostok-ice-core-four-glacial-cycles",
    "datePublished": "2026-11-27",
    title: "Vostok Ice Preserved Atmospheric Changes Across Four Glacial Cycles",
    categorySlug: "earth-science",
    subtopic: "Ice cores",
    year: 1999,
    dateDiscovered: "1999-06-03",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Vostok Station, East Antarctica (core-site proxy)",
      lat: -78.465,
      lng: 106.837,
      country: "Antarctica",
    },
    discoveringOrg: "Jean-Robert Petit, Jean Jouzel, Dominique Raynaud and colleagues",
    heroImage: "/images/discoveries/1999/vostok-ice-core-four-glacial-cycles.webp",
    imageAlt: "Original editorial diagram for Antarctic ice contains a multi-cycle climate record. About 420,000 years: length of the published paleoclimate series. Four glacial cycles: represented in the archive.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1999/vostok-ice-core-four-glacial-cycles.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Ice and trapped air from the Vostok core recorded approximately 420,000 years of variation, including shifts in greenhouse gases and indicators of Antarctic temperature.",
    story: {
      whyThere: "Snow that accumulates and compresses into ice can retain information about past temperatures. Bubbles trap samples of the air when the ice closes over them.",
      howFound: "The authors measured isotopic variations and gases including carbon dioxide and methane. The time series showed large swings across several glacial cycles.",
      whatMakesUnique: "The records put modern observations into a much longer context. Comparing ice and bubble records requires accounting for the difference in when the ice and the air were enclosed.",
    },
    gallery: ["/images/discoveries/1999/vostok-ice-core-four-glacial-cycles.webp"],
    primarySourceUrl: "https://www.nature.com/articles/20859",
    videoUrls: [],
    relatedSlugs: ["lomonosov-ridge-petm-subtropical-arctic-temperatures"],
    tags: ["Vostok ice core", "glacial cycles", "trapped air"],
  },
];
