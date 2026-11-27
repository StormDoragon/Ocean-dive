import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2012.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2012Discoveries: Discovery[] = [
  {
    slug: "poverty-point-louisiana-mound-a-rapid-construction-evidence",
    "datePublished": "2026-11-27",
    title: "Sediment layers suggested Mound A at Poverty Point rose quickly",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2012,
    dateDiscovered: "2012-12-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Poverty Point World Heritage Site, Louisiana",
      lat: 32.637,
      lng: -91.405,
      country: "United States",
    },
    discoveringOrg: "Anthony L. Ortmann and Tristram R. Kidder",
    heroImage: "/images/discoveries/2012/poverty-point-louisiana-mound-a-rapid-construction-evidence.webp",
    imageAlt: "Original editorial diagram for Evidence of rapid earthen construction. Mound A: largest mound at Poverty Point. Layer contacts: left few signs of long pauses.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2012/poverty-point-louisiana-mound-a-rapid-construction-evidence.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Excavations found evidence that the largest mound at Poverty Point was assembled substantially faster than a prolonged sequence of building episodes.",
    story: {
      whyThere: "Archaeologists studied the sediments and construction sequence inside Mound A. They compared the layers and looked for signs that surfaces had stood exposed for extended periods.",
      howFound: "The structure contained deliberately placed sediment. The scarcity of developed soils and other weathered breaks in key areas supported a relatively rapid build.",
      whatMakesUnique: "The pace implied coordinated work by the Indigenous people who shaped the earthwork. Excavated sections give clues to how the work proceeded, while exact labor numbers and overall duration remain estimates.",
    },
    gallery: [
      "/images/discoveries/2012/poverty-point-louisiana-mound-a-rapid-construction-evidence.webp",
    ],
    primarySourceUrl: "https://onlinelibrary.wiley.com/doi/10.1002/gea.21430",
    videoUrls: [],
    relatedSlugs: ["angkor-medieval-water-network-flood-cascading-failure-model"],
    tags: ["earthworks", "Poverty Point", "geoarchaeology"],
  },
];
