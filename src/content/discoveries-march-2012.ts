import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2012.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2012Discoveries: Discovery[] = [
  {
    slug: "tahiti-iodp-fossil-coral-meltwater-pulse-1a-sea-level",
    "datePublished": "2026-11-27",
    title: "Tahiti coral cores dated a rapid rise in sea level after the Ice Age",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2012,
    dateDiscovered: "2012-03-28",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Tahiti (island map proxy for offshore coral cores)",
      lat: -17.656,
      lng: -149.443,
      country: "France",
    },
    discoveringOrg: "Pierre Deschamps and the Integrated Ocean Drilling Program Tahiti team",
    heroImage: "/images/discoveries/2012/tahiti-iodp-fossil-coral-meltwater-pulse-1a-sea-level.webp",
    imageAlt: "Original editorial diagram for Dating Meltwater Pulse 1A from Tahiti coral. About 14,650–14,310: estimated years ago. 14–18 metres: most likely local rise.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2012/tahiti-iodp-fossil-coral-meltwater-pulse-1a-sea-level.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Dated offshore coral cores indicated that Tahiti's local sea level probably rose by 14 to 18 metres during Meltwater Pulse 1A.",
    story: {
      whyThere: "Reef-building corals grow within particular depth ranges. The team combined the depths of fossil corals drilled off Tahiti with radiometric ages to estimate where sea level stood as the corals lived.",
      howFound: "The cores constrained the rapid rise to about 14,650 to 14,310 years ago, during a warming interval called the Bølling. The paper estimated 14 to 18 metres as the most likely local rise within a wider uncertainty range.",
      whatMakesUnique: "Coral locations and ages narrow the timing and magnitude of the event. Estimating how much meltwater came from individual ice sheets requires additional information about how local and global sea levels respond.",
    },
    gallery: ["/images/discoveries/2012/tahiti-iodp-fossil-coral-meltwater-pulse-1a-sea-level.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature10902",
    videoUrls: [],
    relatedSlugs: [
      "beaufort-shelf-arctic-submarine-permafrost-seafloor-collapse",
      "lake-bosumtwi-ghana-million-year-sediment-chronology",
    ],
    tags: ["paleoclimate", "sea level", "fossil corals"],
  },
];
