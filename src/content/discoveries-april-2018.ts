import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2018.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2018Discoveries: Discovery[] = [
  {
    slug: "western-nefud-al-wusta-fossil-human-finger-palaeolake",
    "datePublished": "2026-11-27",
    title: "A fossil finger placed early Homo sapiens in the Arabian interior",
    categorySlug: "biology",
    subtopic: "Human evolution",
    year: 2018,
    dateDiscovered: "2018-04-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Western Nefud Desert (regional map proxy for Al Wusta)",
      lat: 28.65,
      lng: 39.55,
      country: "Saudi Arabia",
    },
    discoveringOrg: "Huw S. Groucutt and the Al Wusta research team",
    heroImage: "/images/discoveries/2018/western-nefud-al-wusta-fossil-human-finger-palaeolake.webp",
    imageAlt: "Original editorial diagram for An early human fossil from an Arabian lake bed. About 85,000 years: lower age in the paper's interpretation. Finger bone: identified through comparison.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2018/western-nefud-al-wusta-fossil-human-finger-palaeolake.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A finger bone assigned to Homo sapiens and evidence from an ancient lake placed members of our species in Arabia by about 85,000 years ago.",
    story: {
      whyThere: "The field team found the small finger bone at a former lake in what is now the Nefud Desert. Animals preserved in the lake deposits and the sediment itself record a wetter environment than today.",
      howFound: "The researchers compared the fossil's shape with finger bones from recent humans and other hominins. Direct dating and dates from surrounding materials gave an age in the late Pleistocene.",
      whatMakesUnique: "The evidence establishes that early humans reached the Arabian interior during a suitable environmental interval. One fossil leaves the size and later history of that population open.",
    },
    gallery: ["/images/discoveries/2018/western-nefud-al-wusta-fossil-human-finger-palaeolake.webp"],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5935238/",
    videoUrls: [],
    relatedSlugs: ["mount-carmel-misliya-upper-jaw-early-modern-human-fossil"],
    tags: ["human evolution", "Arabian Peninsula", "early Homo sapiens"],
  },
];
