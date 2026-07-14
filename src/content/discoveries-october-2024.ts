import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2024.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2024Discoveries: Discovery[] = [
  {
    slug: "valeriana-maya-city-lidar",
    title: "Valeriana, a Maya City Revealed in Old LiDAR Data",
    categorySlug: "archaeology",
    subtopic: "Lost cities",
    year: 2024,
    dateDiscovered: "2024-10-29",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-13",
    location: {
      name: "Eastern Campeche near Xpujil, Mexico",
      lat: 18.5,
      lng: -89.4,
      country: "Mexico",
    },
    discoveringOrg: "Tulane University / Northern Arizona University / Mexico's INAH collaborators",
    classification: "Archaeology · Classic Maya urban landscape",
    heroImage: "/images/discoveries/2024/valeriana-maya-city-lidar.webp",
    imageAlt: "Original editorial LiDAR-style data visualization of Valeriana's Maya plazas, pyramids, causeways, reservoirs, and residential platforms emerging beneath a transparent forest canopy.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "data visualization",
    imageRelation: "illustration",
    summary: "Archaeologists reanalysed airborne LiDAR collected for an environmental survey and identified a dense Maya urban landscape in eastern Campeche, including the newly named centre Valeriana. Across 122 square kilometres, the data revealed 6,479 structures, ceremonial complexes, plazas, reservoirs, causeways, and residential zones.",
    story: {
      whyThere: "Much of the central Maya lowlands remains difficult to survey on foot because vegetation hides architecture and access is limited. Rather than commissioning a new flight, researchers examined an existing LiDAR dataset gathered for forest monitoring in an area archaeologists had not systematically mapped.",
      howFound: "The team processed elevation returns to remove the virtual forest canopy and inspected bare-earth models for geometric features. Follow-up interpretation distinguished house platforms, pyramids, enclosed plazas, roads, terraces, and water-management works distributed across several settlement clusters.",
      whatMakesUnique: "Valeriana showed that substantial urban centres can remain unrecognized even beside modern roads and farms. The work also demonstrated that repurposing environmental LiDAR archives can reveal archaeological landscapes at far lower cost than new surveys, while still requiring field verification.",
    },
    gallery: ["/images/discoveries/2024/valeriana-maya-city-lidar.webp"],
    paperUrl: "https://doi.org/10.15184/aqy.2024.148",
    videoUrls: [],
    relatedSlugs: ["gobekli-tepe", "beyond-epica-oldest-ice-core"],
    tags: ["maya", "lidar", "valeriana", "campeche", "lost city"],
  },
];
