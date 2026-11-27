import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 1993.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october1993Discoveries: Discovery[] = [
  {
    slug: "pasadena-bulk-metallic-glass-slow-cooling-casting",
    "datePublished": "2026-11-27",
    title: "A Bulk Metal Alloy Solidifies as a Glass at Modest Cooling Rates",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 1993,
    dateDiscovered: "1993-10-25",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "California Institute of Technology, Pasadena (research-team proxy)",
      lat: 34.138,
      lng: -118.125,
      country: "United States",
    },
    discoveringOrg: "Atakan Peker and William L. Johnson",
    heroImage: "/images/discoveries/1993/pasadena-bulk-metallic-glass-slow-cooling-casting.webp",
    imageAlt: "Original editorial diagram for A metal stays structurally disordered as it cools. Up to 14 mm: diameter of cast glassy rods. About 10 K/s or less: estimated critical cooling rate.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1993/pasadena-bulk-metallic-glass-slow-cooling-casting.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "An alloy that resisted crystallization while cooling allowed researchers to cast glassy metal rods up to 14 millimeters in diameter.",
    story: {
      whyThere: "A metallic glass is a solid whose atoms lack the long-range pattern of a metal crystal. That structure can form when crystallization is slow enough during cooling.",
      howFound: "The zirconium-based alloy in the study remained glassy with an estimated critical cooling rate of about 10 kelvin per second or less. The team cast bulk samples and studied crystallization by observing heat flow as the samples changed temperature.",
      whatMakesUnique: "The result applied to the tested composition and conditions. It showed that a metallic glass could be produced in a piece much thicker than a thin ribbon.",
    },
    gallery: ["/images/discoveries/1993/pasadena-bulk-metallic-glass-slow-cooling-casting.webp"],
    primarySourceUrl: "https://pubs.aip.org/aip/apl/article/63/17/2342/1023105/A-highly-processable-metallic-glass-Zr41-2Ti13",
    videoUrls: [],
    relatedSlugs: ["berkeley-nacre-inspired-ceramic-polymer-fracture-toughness"],
    tags: ["metallic glasses", "amorphous solids", "casting"],
  },
];
