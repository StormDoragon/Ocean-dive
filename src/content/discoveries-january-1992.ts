import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 1992.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january1992Discoveries: Discovery[] = [
  {
    slug: "luzon-pinatubo-sage-ii-stratospheric-aerosol-layer",
    "datePublished": "2026-11-27",
    title: "A Satellite Maps the Early Spread of Pinatubo’s Aerosol Cloud",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 1992,
    dateDiscovered: "1992-01-24",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Mount Pinatubo, Luzon (eruption source proxy)",
      lat: 15.14,
      lng: 120.35,
      country: "Philippines",
    },
    discoveringOrg: "M. Patrick McCormick and R. E. Veiga",
    heroImage: "/images/discoveries/1992/luzon-pinatubo-sage-ii-stratospheric-aerosol-layer.webp",
    imageAlt: "Original editorial diagram for Tracking an aerosol layer after a major eruption. 20–25 km: altitude of much of the early cloud. About 29 km: upper tropical extent in the measurements.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1992/luzon-pinatubo-sage-ii-stratospheric-aerosol-layer.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "SAGE II measured most early volcanic aerosols between 20 and 25 kilometres in the tropical stratosphere and tracked their movement toward higher latitudes.",
    story: {
      whyThere: "After the June 1991 eruption, the satellite recorded how much light passed through the atmosphere at different heights. The measurements gave researchers a vertical picture of the volcanic aerosol layer.",
      howFound: "Some material reached nearly 29 kilometres in the tropics. By late July, strong aerosol signals had appeared far to the north, and the researchers also documented substantial spreading southward.",
      whatMakesUnique: "The measurements helped distinguish how high the cloud initially rose from where its particles were carried later. Early estimates of the aerosol mass depended on the satellite retrievals.",
    },
    gallery: ["/images/discoveries/1992/luzon-pinatubo-sage-ii-stratospheric-aerosol-layer.webp"],
    primarySourceUrl: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/91GL02790",
    videoUrls: [],
    relatedSlugs: ["nintoku-emperor-seamounts-hawaiian-hotspot-motion"],
    tags: ["stratospheric aerosols", "volcanic plumes", "satellite observations"],
  },
];
