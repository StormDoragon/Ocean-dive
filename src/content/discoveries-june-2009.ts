import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2009.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2009Discoveries: Discovery[] = [
  {
    slug: "daoxian-yuchanyan-cave-radiocarbon-early-pottery-sherds",
    "datePublished": "2026-11-27",
    title: "Charcoal and Bone Dated Early Pottery in Yuchanyan Cave",
    categorySlug: "archaeology",
    subtopic: "Artifacts",
    year: 2009,
    dateDiscovered: "2009-06-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Daoxian County, published Yuchanyan Cave study-area coordinates",
      lat: 25.5,
      lng: 111.5,
      country: "China",
    },
    discoveringOrg: "Elisabetta Boaretto, Xiaohong Wu and the Yuchanyan dating team",
    heroImage: "/images/discoveries/2009/daoxian-yuchanyan-cave-radiocarbon-early-pottery-sherds.webp",
    imageAlt: "Original editorial diagram for Dating a ceramic fragment. 17.5–18.3 ka: Best-constrained sherd. Hunan: Cave deposits.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2009/daoxian-yuchanyan-cave-radiocarbon-early-pottery-sherds.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Radiocarbon measurements on material around ceramic fragments put the oldest securely associated Yuchanyan Cave pottery at about 17,500 to 18,300 years ago.",
    story: {
      whyThere: "Excavation uncovered pieces of early vessels in a cave in China’s Hunan province. The pottery fragments sat among layers containing charcoal and animal bone.",
      howFound: "The researchers measured charcoal and bone collagen near the finds, comparing the sequence at several depths. Samples above and below one fragment constrained the age of that piece more securely than some other finds in the cave.",
      whatMakesUnique: "The dates record early ceramic technology in southern China. The oldest figure applies to the context of the best-dated fragment.",
    },
    gallery: [
      "/images/discoveries/2009/daoxian-yuchanyan-cave-radiocarbon-early-pottery-sherds.webp",
    ],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2689310/",
    videoUrls: [],
    relatedSlugs: ["kalahari-wonderwerk-cave-one-million-year-fire-traces"],
    tags: ["Yuchanyan Cave", "Early pottery", "radiocarbon dating", "Hunan"],
  },
];
