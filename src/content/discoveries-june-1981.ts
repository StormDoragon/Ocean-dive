import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 1981.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june1981Discoveries: Discovery[] = [
  {
    slug: "mount-st-helens-directed-eruption-blast-dynamics",
    "datePublished": "2026-11-27",
    title: "Mount St. Helens Deposits Traced a Fast, Sideways Volcanic Flow",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 1981,
    dateDiscovered: "1981-06-18",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Mount St. Helens, Washington (event-region proxy)",
      lat: 46.2,
      lng: -122.18,
      country: "United States",
    },
    discoveringOrg: "Susan W. Kieffer",
    heroImage: "/images/discoveries/1981/mount-st-helens-directed-eruption-blast-dynamics.webp",
    imageAlt: "Original editorial diagram for A slope failure and a lateral eruption leave a directional record. North flank: opened rapidly during the event. Field evidence: constrains the reconstructed flow.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1981/mount-st-helens-directed-eruption-blast-dynamics.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Analysis of the May 1980 eruption reconstructed an initially directed flow that spread north of the summit after a large slope failure.",
    story: {
      whyThere: "The pre-eruption volcano had a deformed north flank. A landslide abruptly removed material that had covered part of the pressurized system.",
      howFound: "The study compared the pattern of damaged ground and deposits with physical models of a fast flow. It evaluated how the eruption geometry could direct and spread the flow.",
      whatMakesUnique: "A directed blast can differ sharply from a vertically rising plume. The modeled flow describes a particular volcanic event and is constrained by its surviving record.",
    },
    gallery: ["/images/discoveries/1981/mount-st-helens-directed-eruption-blast-dynamics.webp"],
    primarySourceUrl: "https://www.nature.com/articles/291568a0",
    videoUrls: [],
    relatedSlugs: ["anak-krakatau-sunda-strait-flank-failure-cascade"],
    tags: ["Mount St. Helens", "lateral blast", "volcanic deposits"],
  },
];
