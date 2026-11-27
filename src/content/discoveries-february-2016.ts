import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2016.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2016Discoveries: Discovery[] = [
  {
    slug: "boe-west-africa-chimpanzee-stone-throwing-tree-accumulations",
    "datePublished": "2026-11-27",
    title: "Trail cameras caught chimpanzees building stone accumulations at trees",
    categorySlug: "biology",
    subtopic: "Human evolution",
    year: 2016,
    dateDiscovered: "2016-02-29",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Boé sector, Guinea-Bissau (regional map proxy for one study population)",
      lat: 11.75,
      lng: -14.22,
      country: "Guinea-Bissau",
    },
    discoveringOrg: "Hjalmar S. Kühl and the Pan African Programme research team",
    scientificName: "Pan troglodytes",
    heroImage: "/images/discoveries/2016/boe-west-africa-chimpanzee-stone-throwing-tree-accumulations.webp",
    imageAlt: "Original editorial diagram for Chimpanzee stone accumulations. Four study populations: documented the behavior. Tree cavities: one place stones accumulated.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2016/boe-west-africa-chimpanzee-stone-throwing-tree-accumulations.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A multi-site study documented chimpanzees banging or throwing stones at trees, leaving accumulations at four West African sites.",
    story: {
      whyThere: "Field teams found trees with impact marks and groups of stones around their bases or in cavities. Camera traps recorded chimpanzees throwing or banging rocks at some of those trees.",
      howFound: "The study found the behavior in four West African populations, including Boé in Guinea-Bissau. It did not appear at most surveyed communities.",
      whatMakesUnique: "The piles link an animal's repeated behavior to a durable trace. The initial study left its function open. Later camera work at Boé found patterns consistent with a possible drumming or display role.",
    },
    gallery: [
      "/images/discoveries/2016/boe-west-africa-chimpanzee-stone-throwing-tree-accumulations.webp",
    ],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4770594/",
    supportingSources: [
      {
        title: "Follow-up camera-trap research at Boé",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12055282/",
        publisher: "Royal Society Open Science",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["yunnan-honey-bees-young-waggle-dance-social-learning"],
    tags: ["chimpanzees", "animal behavior", "stone tools"],
  },
];
