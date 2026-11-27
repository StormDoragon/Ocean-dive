import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 1986.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january1986Discoveries: Discovery[] = [
  {
    slug: "rochester-organic-two-layer-photovoltaic-cell",
    "datePublished": "2026-11-27",
    title: "Two Organic Layers Make a Thin-Film Solar Cell",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 1986,
    dateDiscovered: "1986-01-13",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Eastman Kodak research laboratories, Rochester (research-team proxy)",
      lat: 43.199,
      lng: -77.663,
      country: "United States",
    },
    discoveringOrg: "Ching W. Tang, Eastman Kodak Research Laboratories",
    heroImage: "/images/discoveries/1986/rochester-organic-two-layer-photovoltaic-cell.webp",
    imageAlt: "Original editorial diagram for Two films separate light-generated charges. About 1%: laboratory power conversion. Two layers: organic thin-film architecture.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1986/rochester-organic-two-layer-photovoltaic-cell.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Two dissimilar organic layers produced a thin-film device that converted about 1 percent of simulated sunlight to electrical power.",
    story: {
      whyThere: "Tang used two light-responsive organic materials as separate layers. The interface helped separate the charges produced after light absorption.",
      howFound: "The reported device converted about 1 percent of incident power under simulated AM2 illumination. Charge generation depended relatively little on the applied voltage in the reported device.",
      whatMakesUnique: "The result showed that putting two organic films together could improve charge separation. The recorded efficiency applies to this cell and illumination standard.",
    },
    gallery: ["/images/discoveries/1986/rochester-organic-two-layer-photovoltaic-cell.webp"],
    primarySourceUrl: "https://pubs.aip.org/aip/apl/article/48/2/183/1023090/Two-layer-organic-photovoltaic-cell",
    videoUrls: [],
    relatedSlugs: ["lausanne-dye-sensitized-nanoporous-titanium-dioxide-cell"],
    tags: ["organic semiconductors", "thin films", "photovoltaics"],
  },
];
