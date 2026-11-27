import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2003.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2003Discoveries: Discovery[] = [
  {
    slug: "wahgi-valley-kuk-swamp-banana-cultivation-and-mounds",
    "datePublished": "2026-11-27",
    title: "Soils and Plant Remains Trace Early Cultivation at Kuk Swamp",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2003,
    dateDiscovered: "2003-06-19",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Kuk Swamp, Wahgi Valley",
      lat: -5.783,
      lng: 144.33,
      country: "Papua New Guinea",
    },
    discoveringOrg: "Tim P. Denham, Simon G. Haberle and the Kuk Swamp research team",
    heroImage: "/images/discoveries/2003/wahgi-valley-kuk-swamp-banana-cultivation-and-mounds.webp",
    imageAlt: "Original editorial diagram for A wetland records changes in cultivation. 6,950–6,440 years: estimated age range of the mounded phase. Bananas: cultivation supported by plant evidence.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2003/wahgi-valley-kuk-swamp-banana-cultivation-and-mounds.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Excavated planting features and small plant remains supported intensive banana cultivation in the New Guinea Highlands by about 6,950 to 6,440 years ago.",
    story: {
      whyThere: "Waterlogged layers recorded successive changes to the wetland margin. Earlier disturbances indicate plant use and some cultivation, while later layers preserved mounds associated with more intensive land management.",
      howFound: "The mounded phase contained evidence of banana cultivation. A later phase of the site preserved ditch networks that moved water through the farming area.",
      whatMakesUnique: "These findings make Kuk an important record of agriculture developing in New Guinea. The dates refer to the archaeological phases of this particular site.",
    },
    gallery: ["/images/discoveries/2003/wahgi-valley-kuk-swamp-banana-cultivation-and-mounds.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/12817084/",
    supportingSources: [
      {
        title: "Kuk Early Agricultural Site nomination and research record",
        url: "https://whc.unesco.org/uploads/nominations/887.pdf",
        publisher: "UNESCO World Heritage Centre",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["lower-galilee-ein-zippori-olive-oil-residue"],
    tags: ["early farming", "bananas", "wetland archaeology"],
  },
];
