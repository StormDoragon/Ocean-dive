import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2014.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2014Discoveries: Discovery[] = [
  {
    slug: "alsea-juvenile-chinook-inherited-magnetic-map",
    "datePublished": "2026-11-27",
    title: "Young Chinook Salmon Respond to Magnetic Fields From Distant Parts of the Pacific",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2014,
    dateDiscovered: "2014-02-06",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Oregon Hatchery Research Center, Alsea (experiment-site proxy)",
      lat: 44.4,
      lng: -123.67,
      country: "United States",
    },
    discoveringOrg: "Nathan F. Putman, Michelle M. Scanlan and colleagues",
    scientificName: "Oncorhynchus tshawytscha",
    heroImage: "/images/discoveries/2014/alsea-juvenile-chinook-inherited-magnetic-map.webp",
    imageAlt: "Original editorial diagram for Ocean-naive fish respond to magnetic conditions. Field strength: changes across the ocean. Field angle: combines with strength as a directional cue.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2014/alsea-juvenile-chinook-inherited-magnetic-map.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Juvenile Chinook salmon with no ocean experience changed their swimming direction when exposed to magnetic conditions associated with the edges of their marine range.",
    story: {
      whyThere: "The researchers recreated magnetic fields characteristic of areas near the northern and southern parts of the salmon’s range. Young fish were tested before they had migrated through those waters.",
      howFound: "The average response to each field pointed toward the interior of the range. Additional tests indicated that both the strength and angle of the field supplied useful information.",
      whatMakesUnique: "The result supports an inherited ability to respond to magnetic conditions. The short trials did not follow fish on an actual ocean crossing.",
    },
    gallery: ["/images/discoveries/2014/alsea-juvenile-chinook-inherited-magnetic-map.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24508165/",
    videoUrls: [],
    relatedSlugs: ["azores-sargasso-sea-adult-eel-satellite-tracking"],
    tags: ["Chinook salmon", "geomagnetic navigation", "animal migration"],
  },
];
