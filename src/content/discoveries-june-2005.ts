import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2005.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2005Discoveries: Discovery[] = [
  {
    slug: "shark-bay-bottlenose-dolphin-sponge-tool-traditions",
    "datePublished": "2026-11-27",
    title: "Shark Bay Observations Linked Sponge Tool Use to Dolphin Families",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2005,
    dateDiscovered: "2005-06-06",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Shark Bay, Western Australia (study-region proxy)",
      lat: -25.83,
      lng: 113.61,
      country: "Australia",
    },
    discoveringOrg: "Michael Krützen, Janet Mann and colleagues",
    scientificName: "Tursiops sp.",
    heroImage: "/images/discoveries/2005/shark-bay-bottlenose-dolphin-sponge-tool-traditions.webp",
    imageAlt: "Original editorial diagram for A sponge helps some dolphins forage along the bottom. Sponge worn over the snout: used during particular searches. Maternal relationships: link many of the observed tool users.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2005/shark-bay-bottlenose-dolphin-sponge-tool-traditions.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A combination of observations and genetic relationships found that dolphins using marine sponges as foraging tools belonged mostly to one maternal lineage.",
    story: {
      whyThere: "Some bottlenose dolphins placed a sponge over the front of their snout while searching near the bottom.",
      howFound: "The researchers compared tool use, genetics and habitat. The clustering of many tool users within a maternal family was consistent with learning from mothers.",
      whatMakesUnique: "The data support transmission of a foraging tradition. Family membership alone does not show the exact sequence through which every animal acquired it.",
    },
    gallery: ["/images/discoveries/2005/shark-bay-bottlenose-dolphin-sponge-tool-traditions.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/15947077/",
    videoUrls: [],
    relatedSlugs: ["oxford-new-caledonian-crow-wire-hook-forming"],
    tags: ["bottlenose dolphins", "social learning", "Tool use"],
  },
];
