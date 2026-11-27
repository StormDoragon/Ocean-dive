import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2015.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2015Discoveries: Discovery[] = [
  {
    slug: "arguin-bay-mauritania-buried-saharan-paleoriver",
    "datePublished": "2026-11-27",
    title: "Radar traced a buried river course along Mauritania’s coast",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2015,
    dateDiscovered: "2015-11-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Arguin Bay, coastal Mauritania (paleodrainage map proxy)",
      lat: 19.8,
      lng: -16.34,
      country: "Mauritania",
    },
    discoveringOrg: "Charlotte Skonieczny and the western Sahara paleodrainage team",
    heroImage: "/images/discoveries/2015/arguin-bay-mauritania-buried-saharan-paleoriver.webp",
    imageAlt: "Original editorial diagram for A river hidden below the desert. About 520 kilometers: of coastal drainage mapped. Thick dunes: hide parts of the proposed route.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2015/arguin-bay-mauritania-buried-saharan-paleoriver.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Satellite radar and offshore sediment evidence pointed to a buried drainage system that carried runoff toward the Atlantic during wetter periods.",
    story: {
      whyThere: "Satellite radar can reveal contrasts beneath some dry surface sediments. Researchers searched coastal Mauritania for traces of drainage that might connect to a deep-sea sediment system offshore.",
      howFound: "They mapped about 520 kilometers of buried channels in the Arguin Bay region. The route is consistent with a coastal segment of the larger proposed Tamanrasset river system.",
      whatMakesUnique: "The channels add physical evidence that water crossed the region during wet periods. Thick dunes obscured parts of the proposed system, leaving its full course unresolved.",
    },
    gallery: ["/images/discoveries/2015/arguin-bay-mauritania-buried-saharan-paleoriver.webp"],
    primarySourceUrl: "https://doi.org/10.1038/ncomms9751",
    videoUrls: [],
    relatedSlugs: ["southwest-pacific-zealandia-connected-submerged-continent"],
    tags: ["Sahara", "paleorivers", "radar mapping"],
  },
];
