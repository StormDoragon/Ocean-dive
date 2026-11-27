import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2018.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2018Discoveries: Discovery[] = [
  {
    slug: "setif-ain-boucherit-oldowan-stone-tools-cut-marks",
    "datePublished": "2026-11-27",
    title: "Algerian deposits preserved early stone tools and cut-marked bones",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2018,
    dateDiscovered: "2018-11-29",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "El Eulma region, Sétif Province (regional map proxy for Aïn Boucherit)",
      lat: 36.22,
      lng: 5.7,
      country: "Algeria",
    },
    discoveringOrg: "Mohamed Sahnouni and the Aïn Boucherit excavation team",
    heroImage: "/images/discoveries/2018/setif-ain-boucherit-oldowan-stone-tools-cut-marks.webp",
    imageAlt: "Original editorial diagram for Early tool use at Aïn Boucherit. 1.9 and 2.4 Ma: estimated ages of the two levels. Cut-marked bones: evidence of tool use.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2018/setif-ain-boucherit-oldowan-stone-tools-cut-marks.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Finding stone artifacts and cut-marked animal bones in dated layers provided evidence of early hominin activity in North Africa.",
    story: {
      whyThere: "The Aïn Boucherit team excavated artifacts and animal fossils from two levels. The stone pieces had characteristic flaking patterns, and some bones carried cuts consistent with the use of sharp edges.",
      howFound: "They combined geological evidence and age estimates for the sediment. The levels were estimated at about 1.9 and 2.4 million years old.",
      whatMakesUnique: "The finds extend the evidence for tool use into early North African deposits. Sediment ages and the interpretation of the marks each carry uncertainty, and the toolmakers' species remains unknown.",
    },
    gallery: ["/images/discoveries/2018/setif-ain-boucherit-oldowan-stone-tools-cut-marks.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/30498166/",
    supportingSources: [
      {
        title: "Public location context for the archaeological sites",
        url: "https://www.wilayasetif.dz/sites-historiques-et-archeologiques/",
        publisher: "Wilaya of Sétif",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["lantian-shangchen-loess-plateau-early-stone-artifacts"],
    tags: ["stone tools", "North Africa", "Oldowan"],
  },
];
