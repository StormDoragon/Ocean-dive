import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2020.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2020Discoveries: Discovery[] = [
  {
    slug: "virginia-lagoons-eelgrass-restoration-seed-recovery",
    "datePublished": "2026-11-27",
    title: "Reseeding Virginia lagoons restored thousands of hectares of eelgrass",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2020,
    dateDiscovered: "2020-10-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Virginia coastal lagoons (restoration-region proxy)",
      lat: 37.4,
      lng: -75.65,
      country: "United States",
    },
    discoveringOrg: "Robert J. Orth and colleagues",
    scientificName: "Zostera marina",
    heroImage: "/images/discoveries/2020/virginia-lagoons-eelgrass-restoration-seed-recovery.webp",
    imageAlt: "Original editorial diagram for Eelgrass recovery in Virginia. 3,612 ha: area of seagrass recovered. Since 1999: period of seed restoration.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2020/virginia-lagoons-eelgrass-restoration-seed-recovery.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A long-running restoration project documented the return of eelgrass meadows and several ecosystem functions they support.",
    story: {
      whyThere: "Researchers sowed eelgrass seeds in coastal lagoons and tracked the spread of the meadows over many years. The project documented recovery across approximately 3,612 hectares.",
      howFound: "As the beds expanded, the team measured changes including clearer water, more animal habitat and carbon storage in the sediment.",
      whatMakesUnique: "The original project took place in shallow Atlantic lagoons suited to eelgrass. The results show what was possible at those sites and help researchers assess restoration elsewhere.",
    },
    gallery: ["/images/discoveries/2020/virginia-lagoons-eelgrass-restoration-seed-recovery.webp"],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7541073/",
    videoUrls: [],
    relatedSlugs: ["shark-bay-posidonia-clone-180-km"],
    tags: ["seagrass", "restoration", "coastal ecology"],
  },
];
