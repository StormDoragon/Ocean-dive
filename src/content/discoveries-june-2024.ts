import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2024.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2024Discoveries: Discovery[] = [
  {
    slug: "earth-inner-core-backtracking",
    datePublished: "2026-07-17",
    title: "Earth's Inner Core Began Backtracking",
    categorySlug: "earth-science",
    subtopic: "Earthquakes",
    year: 2024,
    dateDiscovered: "2024-06-12",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-13",
    location: {
      name: "University of Southern California, Los Angeles",
      lat: 34.0224,
      lng: -118.2851,
      country: "United States",
    },
    discoveringOrg: "University of Southern California and Chinese Academy of Sciences researchers",
    classification: "Geophysics · Inner-core differential rotation",
    heroImage: "/images/discoveries/2024/earth-inner-core-backtracking.webp",
    imageAlt: "Original editorial cross-section of Earth showing the mantle, liquid outer core, solid inner core, and opposing arrows representing relative inner-core backtracking.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Seismic waveforms from repeating earthquakes indicated that Earth's solid inner core had slowed and was moving backward relative to the mantle after about 2010. The result extended evidence that inner-core rotation oscillates over decades rather than maintaining a constant faster or slower spin.",
    story: {
      whyThere: "The inner core cannot be observed directly, so seismologists search for earthquakes that recur along nearly identical paths. Comparing waves from such events can reveal tiny changes in the structure or orientation of the deep interior through which they travelled.",
      howFound: "Researchers assembled waveform pairs from South Sandwich Islands earthquakes recorded in Alaska and Canada between 1991 and 2023. Changes that appeared and then reversed provided a distinctive signature of inner-core positions repeating as its relative motion changed direction.",
      whatMakesUnique: "The study supplied evidence for backtracking, not a reversal of Earth's overall rotation. It helps constrain how the inner core couples to the liquid outer core and mantle, processes connected to the planet's magnetic field and subtle changes in day length.",
    },
    gallery: ["/images/discoveries/2024/earth-inner-core-backtracking.webp"],
    paperUrl: "https://www.nature.com/articles/s41586-024-07536-4",
    videoUrls: [],
    relatedSlugs: ["beyond-epica-oldest-ice-core", "giants-causeway-volcanic-timeline"],
    tags: ["inner core", "seismology", "earthquakes", "earth rotation", "geophysics"],
  },
];
