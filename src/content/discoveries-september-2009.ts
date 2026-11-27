import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2009.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2009Discoveries: Discovery[] = [
  {
    slug: "worcester-monarch-antennal-clocks-sun-compass",
    "datePublished": "2026-11-27",
    title: "Monarch Antennae Supply Timing for the Butterfly’s Sun Compass",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2009,
    dateDiscovered: "2009-09-25",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Massachusetts Medical School, Worcester (research-team proxy)",
      lat: 42.28,
      lng: -71.76,
      country: "United States",
    },
    discoveringOrg: "Christine Merlin, Robert J. Gegear and Steven M. Reppert",
    scientificName: "Danaus plexippus",
    heroImage: "/images/discoveries/2009/worcester-monarch-antennal-clocks-sun-compass.webp",
    imageAlt: "Original editorial diagram for An antenna helps interpret Sun position. Daily clock: supplies timing for a moving Sun. Flight simulator: measures differences in headings.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2009/worcester-monarch-antennal-clocks-sun-compass.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Flight-simulator and laboratory experiments showed that monarch antennae contain daily clocks important for choosing a heading from the Sun.",
    story: {
      whyThere: "Migrating monarchs use the position of the Sun as a directional cue. Because it moves across the sky, the insects need a time signal to interpret it.",
      howFound: "The team compared orientation under different conditions affecting the antennae. It also measured daily rhythms in the antennae, supporting an internal clock there.",
      whatMakesUnique: "The experiment localized part of the timing system for the sun compass. A later study tested how signals from the two antennae are combined.",
    },
    gallery: ["/images/discoveries/2009/worcester-monarch-antennal-clocks-sun-compass.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/19779201/",
    supportingSources: [
      {
        title: "Follow-up on signals from the two antennae",
        url: "https://www.nature.com/articles/ncomms1965",
        publisher: "Nature Communications",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["johannesburg-dung-beetles-milky-way-orientation"],
    tags: ["monarch butterflies", "circadian clocks", "animal navigation"],
  },
];
