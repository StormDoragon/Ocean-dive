import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2022.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2022Discoveries: Discovery[] = [
  {
    slug: "aotearoa-cook-strait-maori-settlement-radiocarbon-chronology",
    "datePublished": "2026-11-27",
    title: "Radiocarbon evidence narrowed the timing of early Māori settlement",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2022,
    dateDiscovered: "2022-11-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Cook Strait, Aotearoa New Zealand (map proxy for study spanning both main islands)",
      lat: -41.23,
      lng: 174.52,
      country: "New Zealand",
    },
    discoveringOrg: "Magdalena M. E. Bunbury and the Aotearoa chronology team",
    heroImage: "/images/discoveries/2022/aotearoa-cook-strait-maori-settlement-radiocarbon-chronology.webp",
    imageAlt: "Original editorial diagram for A 13th-century settlement chronology. 1250–1275 CE: North Island modeled interval. 1280–1295 CE: South Island modeled interval.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2022/aotearoa-cook-strait-maori-settlement-radiocarbon-chronology.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A reanalysis of radiocarbon dates placed reliably supported settlement in the 13th century and estimated different windows for the North and South Islands.",
    story: {
      whyThere: "Archaeological radiocarbon dates can vary in how directly a sample represents the activities archaeologists want to date. Bunbury and colleagues reassessed samples and compared settlement evidence across both islands.",
      howFound: "The statistical models gave a settlement interval of about 1250 to 1275 CE for the North Island and 1280 to 1295 CE for the South Island. Those intervals describe the evidence included in the models.",
      whatMakesUnique: "The chronology offers a clearer basis for comparing early settlement with later changes in hunting, cultivation and the landscape. It leaves the timing of individual voyages uncertain.",
    },
    gallery: [
      "/images/discoveries/2022/aotearoa-cook-strait-maori-settlement-radiocarbon-chronology.webp",
    ],
    primarySourceUrl: "https://www.pnas.org/doi/10.1073/pnas.2207609119",
    supportingSources: [
      {
        title: "Open archived author paper",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9674228/",
        publisher: "PubMed Central",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: [
      "kilifi-panga-ya-saidi-child-burial-78000-years",
      "upper-upano-ecuador-earthen-platforms-road-network",
    ],
    tags: ["Māori archaeology", "radiocarbon dating", "Polynesian settlement"],
  },
];
