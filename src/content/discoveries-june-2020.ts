import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2020.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2020Discoveries: Discovery[] = [
  {
    slug: "pahiyangala-fa-hien-lena-bone-projectile-and-ornament-evidence",
    "datePublished": "2026-11-27",
    title: "Sri Lankan cave finds documented early rainforest tool use",
    categorySlug: "archaeology",
    subtopic: "Artifacts",
    year: 2020,
    dateDiscovered: "2020-06-12",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Pahiyangala area, Sri Lanka (regional map proxy for Fa-Hien Lena)",
      lat: 6.62,
      lng: 80.15,
      country: "Sri Lanka",
    },
    discoveringOrg: "Michelle C. Langley and the Fa-Hien Lena research collaboration",
    heroImage: "/images/discoveries/2020/pahiyangala-fa-hien-lena-bone-projectile-and-ornament-evidence.webp",
    imageAlt: "Original editorial diagram for Early tools in a Sri Lankan forest. About 48,000 years: ages for the early bone points. Wear and breakage: supported the projectile interpretation.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2020/pahiyangala-fa-hien-lena-bone-projectile-and-ornament-evidence.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Bone points dating to about 48,000 years ago support the use of small projectiles by people living in a South Asian rainforest.",
    story: {
      whyThere: "Fa-Hien Lena preserves traces of people living in a tropical forest in what is now Sri Lanka. The deposits contain remains of hunted animals and implements fashioned from bone.",
      howFound: "The researchers examined the size, form and damage on some points and judged them consistent with arrow tips. Other finds, including ornaments in the wider sequence, provide separate evidence of how people used materials at the cave.",
      whatMakesUnique: "The finds show early occupants could live and hunt in tropical forests. The bows themselves have not survived, so the evidence comes from the artifacts and their archaeological context.",
    },
    gallery: [
      "/images/discoveries/2020/pahiyangala-fa-hien-lena-bone-projectile-and-ornament-evidence.webp",
    ],
    paperUrl: "https://doi.org/10.1126/sciadv.aba3831",
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7292635/",
    videoUrls: [],
    relatedSlugs: ["kilifi-panga-ya-saidi-child-burial-78000-years"],
    tags: ["rainforest archaeology", "bone tools", "Middle Stone Age"],
  },
];
