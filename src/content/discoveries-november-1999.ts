import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 1999.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november1999Discoveries: Discovery[] = [
  {
    slug: "tempe-ann-arbor-mof-5-permanent-crystalline-pores",
    "datePublished": "2026-11-27",
    title: "MOF-5 Keeps Its Crystal Pores Open After the Solvent Leaves",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 1999,
    dateDiscovered: "1999-11-18",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Arizona State University, Tempe (research-team proxy)",
      lat: 33.42,
      lng: -111.929,
      country: "United States",
    },
    discoveringOrg: "Hailian Li, Mohamed Eddaoudi, Michael O’Keeffe and Omar M. Yaghi",
    heroImage: "/images/discoveries/1999/tempe-ann-arbor-mof-5-permanent-crystalline-pores.webp",
    imageAlt: "Original editorial diagram for A crystal keeps its internal spaces. MOF-5: zinc-based framework with organic connectors. X-ray analysis: checks the structure after solvent removal.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1999/tempe-ann-arbor-mof-5-permanent-crystalline-pores.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A crystalline network of zinc-based clusters and organic links retained a porous structure after solvent was removed.",
    story: {
      whyThere: "The researchers assembled inorganic clusters and organic connectors into a repeating crystal. The arrangement left a system of openings within the material.",
      howFound: "Earlier open frameworks could collapse when guest molecules were taken out. X-ray analysis showed that MOF-5 retained crystalline order after the solvent was removed, alongside measurements indicating accessible internal space.",
      whatMakesUnique: "The result demonstrated permanent porosity under the study’s conditions. Its behavior depends on how the material is prepared and what it is exposed to.",
    },
    gallery: ["/images/discoveries/1999/tempe-ann-arbor-mof-5-permanent-crystalline-pores.webp"],
    primarySourceUrl: "https://deepblue.lib.umich.edu/items/0eaaee03-8df4-4ffe-8267-1381e36a3422",
    supportingSources: [
      {
        title: "Original Nature paper from the authors’ laboratory archive",
        url: "https://yaghi.berkeley.edu/pdfPublications/nature99-pg276.pdf",
        publisher: "Nature / Yaghi Laboratory",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["vancouver-cellulose-templated-silica-structural-colour"],
    tags: ["metal-organic frameworks", "porous materials", "MOF-5"],
  },
];
