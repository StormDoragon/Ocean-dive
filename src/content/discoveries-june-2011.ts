import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2011.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2011Discoveries: Discovery[] = [
  {
    slug: "seattle-american-crows-social-learning-dangerous-face-mask",
    "datePublished": "2026-11-27",
    title: "Seattle Crows Learned to Scold a Face They Had Never Encountered During Capture",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2011,
    dateDiscovered: "2011-06-29",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Washington, Seattle, one study location",
      lat: 47.655,
      lng: -122.308,
      country: "United States",
    },
    discoveringOrg: "Heather N. Cornell, John M. Marzluff and Shannon Pecoraro",
    scientificName: "Corvus brachyrhynchos",
    heroImage: "/images/discoveries/2011/seattle-american-crows-social-learning-dangerous-face-mask.webp",
    imageAlt: "Original editorial diagram for A learned warning spreads. 1.2+ km: Spread at one site. 5 years: Observation window.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2011/seattle-american-crows-social-learning-dangerous-face-mask.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "American crows began responding to a distinctive mask even when they had never been caught by a person wearing it. The spread of their response supported learning from other crows.",
    story: {
      whyThere: "At five sites near Seattle, a masked person handled marked crows, and researchers later recorded reactions to the mask and comparison faces.",
      howFound: "Some birds with no experience of being caught scolded the mask when they encountered it alone. Some young birds also acquired the response after observing their parents.",
      whatMakesUnique: "At one site, reports of scolding spread at least 1.2 kilometers over five years. The map points to the University of Washington site within the wider study.",
    },
    gallery: [
      "/images/discoveries/2011/seattle-american-crows-social-learning-dangerous-face-mask.webp",
    ],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3234554/",
    videoUrls: [],
    relatedSlugs: ["karuizawa-japanese-tits-combined-call-sequence-playback"],
    tags: ["American crow", "social learning", "Face recognition", "animal cognition"],
  },
];
