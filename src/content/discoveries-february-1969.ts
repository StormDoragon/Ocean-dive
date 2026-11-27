import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 1969.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february1969Discoveries: Discovery[] = [
  {
    slug: "tucson-crab-pulsar-optical-flashes",
    "datePublished": "2026-11-27",
    title: "The Crab Pulsar’s Rapid Radio Clock Had a Visible-Light Counterpart",
    categorySlug: "space",
    subtopic: "Galaxies",
    year: 1969,
    dateDiscovered: "1969-02-08",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Steward Observatory, Tucson (research-team proxy)",
      lat: 32.233,
      lng: -110.948,
      country: "United States",
    },
    discoveringOrg: "W. J. Cocke, M. J. Disney and D. J. Taylor",
    heroImage: "/images/discoveries/1969/tucson-crab-pulsar-optical-flashes.webp",
    imageAlt: "Original editorial diagram for A repeating pulse appears in visible light. About 33 ms: period of the pulsar’s flashes. Optical timing: links the visible source to the radio pulse.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1969/tucson-crab-pulsar-optical-flashes.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Optical observations revealed recurring flashes associated with the Crab Nebula pulsar at its measured period of roughly 33 milliseconds.",
    story: {
      whyThere: "Radio measurements provided the repeat interval. That gave observers a timing signature to look for in optical data.",
      howFound: "Using the expected period made a repeating signal detectable. The flashes tied the visible source to the radio pulsar.",
      whatMakesUnique: "The visible flashes reveal the same clock as the radio signal. Much of the higher-energy emission from the larger nebula follows a different pattern.",
    },
    gallery: ["/images/discoveries/1969/tucson-crab-pulsar-optical-flashes.webp"],
    primarySourceUrl: "https://www.nature.com/articles/221525a0",
    videoUrls: [],
    relatedSlugs: ["mount-hopkins-crab-nebula-tev-cherenkov-detection"],
    tags: ["Crab pulsar", "visible light", "pulsar timing"],
  },
];
