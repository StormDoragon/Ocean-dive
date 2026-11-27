import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2005.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2005Discoveries: Discovery[] = [
  {
    slug: "larsen-b-seafloor-cores-holocene-ice-shelf-persistence",
    "datePublished": "2026-11-27",
    title: "Seafloor Cores Indicated Larsen B’s Collapse Was Unusual Across the Holocene",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2005,
    dateDiscovered: "2005-08-04",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Larsen B embayment, Antarctic Peninsula (marine core-area proxy)",
      lat: -65.5,
      lng: -61.5,
      country: "Antarctica",
    },
    discoveringOrg: "Eugene W. Domack, David Duran and colleagues",
    heroImage: "/images/discoveries/2005/larsen-b-seafloor-cores-holocene-ice-shelf-persistence.webp",
    imageAlt: "Original editorial diagram for The former ice shelf left a long sediment record. 2002 collapse: exposed the study area to open water. Holocene sediments: record evidence of extended ice cover.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2005/larsen-b-seafloor-cores-holocene-ice-shelf-persistence.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Sediment sequences from the former Larsen B Ice Shelf area indicated that the shelf had persisted through much of the Holocene before its 2002 breakup.",
    story: {
      whyThere: "When an ice shelf opens, the sediment reaching the bottom changes. Researchers used cores to investigate when the seafloor had previously been open to the ocean surface.",
      howFound: "The layered sequences were consistent with long-term ice shelf cover. Their record suggested that the abrupt modern loss of the shelf was unusual across the interval examined.",
      whatMakesUnique: "The conclusion concerns Larsen B and evidence recovered from particular parts of its former footprint. Antarctica’s other ice shelves have their own histories.",
    },
    gallery: ["/images/discoveries/2005/larsen-b-seafloor-cores-holocene-ice-shelf-persistence.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/16079842/",
    videoUrls: [],
    relatedSlugs: ["vostok-ice-core-four-glacial-cycles"],
    tags: ["Larsen B", "ice shelves", "marine sediment cores"],
  },
];
