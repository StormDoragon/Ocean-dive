import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2012.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2012Discoveries: Discovery[] = [
  {
    slug: "arica-chinchorro-early-mummification-climate-population-hypothesis",
    "datePublished": "2026-11-27",
    title: "Chinchorro Burials Preserved a Test of an Ancient Cultural Change",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2012,
    dateDiscovered: "2012-08-13",
    reviewStatus: "preliminary",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Arica, regional proxy for Chinchorro coast sites",
      lat: -18.48,
      lng: -70.31,
      country: "Chile",
    },
    discoveringOrg: "Pablo A. Marquet and the Chinchorro study team",
    heroImage: "/images/discoveries/2012/arica-chinchorro-early-mummification-climate-population-hypothesis.webp",
    imageAlt: "Original editorial diagram for An Atacama burial tradition. Coastal: Marine resources. Arid: Natural preservation.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2012/arica-chinchorro-early-mummification-climate-population-hypothesis.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A study linked the timing of deliberate Chinchorro mummification to coastal resources and population change, proposing an environmental and social explanation for the appearance of the practice.",
    story: {
      whyThere: "Chinchorro communities lived on the Pacific edge of the Atacama Desert. The dry environment could preserve bodies naturally, and archaeological sites also preserve burials that people deliberately prepared.",
      howFound: "Researchers compared environmental and archaeological records and modeled the exposure of living populations to naturally preserved remains. They proposed that resource availability helped coastal populations grow and that preservation kept the dead present in local landscapes.",
      whatMakesUnique: "The model provides one explanation for how the practice may have developed. The map marks Arica as a regional proxy for the coastal archaeological record.",
    },
    gallery: [
      "/images/discoveries/2012/arica-chinchorro-early-mummification-climate-population-hypothesis.webp",
    ],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3443180/",
    supportingSources: [
      {
        title: "Settlement and Artificial Mummification of the Chinchorro Culture",
        url: "https://whc.unesco.org/en/list/1634/",
        publisher: "UNESCO World Heritage Centre",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["daoxian-yuchanyan-cave-radiocarbon-early-pottery-sherds"],
    tags: ["Chinchorro", "Atacama Desert", "mortuary archaeology", "Paleoenvironment"],
  },
];
