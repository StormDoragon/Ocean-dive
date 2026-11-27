import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 1991.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november1991Discoveries: Discovery[] = [
  {
    slug: "tsukuba-iijima-graphitic-carbon-nanotubes",
    "datePublished": "2026-11-27",
    title: "Electron Micrographs Revealed Nested Tubes Made of Graphitic Carbon",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 1991,
    dateDiscovered: "1991-11-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "NEC research laboratories, Tsukuba (research-team proxy)",
      lat: 36.083,
      lng: 140.112,
      country: "Japan",
    },
    discoveringOrg: "Sumio Iijima",
    heroImage: "/images/discoveries/1991/tsukuba-iijima-graphitic-carbon-nanotubes.webp",
    imageAlt: "Original editorial diagram for A carbon structure consists of nested cylinders. Electron micrographs: resolve individual walls. Graphitic layers: arranged around a hollow interior.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1991/tsukuba-iijima-graphitic-carbon-nanotubes.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "High-resolution microscopy showed narrow carbon tubes with multiple graphite-like walls nested around one another.",
    story: {
      whyThere: "The samples contained carbon structures too small to resolve with ordinary light microscopy.",
      howFound: "Electron micrographs resolved walls with a layered arrangement. Their geometry supported a model in which graphitic sheets form concentric cylinders.",
      whatMakesUnique: "The observation established the structure of these particular nanotubes. Their electrical and mechanical behavior depends on dimensions and how the layers are arranged.",
    },
    gallery: ["/images/discoveries/1991/tsukuba-iijima-graphitic-carbon-nanotubes.webp"],
    primarySourceUrl: "https://www.nature.com/articles/354056a0",
    videoUrls: [],
    relatedSlugs: ["houston-carbon-sixty-cluster-buckminsterfullerene"],
    tags: ["carbon nanotubes", "electron microscopy", "graphitic carbon"],
  },
];
