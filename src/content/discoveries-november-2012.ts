import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2012.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2012Discoveries: Discovery[] = [
  {
    slug: "southern-ocean-living-pteropods-aragonite-shell-dissolution",
    "datePublished": "2026-11-27",
    title: "Live Southern Ocean sea snails showed shell damage in corrosive water",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2012,
    dateDiscovered: "2012-11-25",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Scotia Sea (regional map proxy for the 2008 survey transect)",
      lat: -58.35,
      lng: -41.2,
      country: "Antarctica",
    },
    discoveringOrg: "Nina Bednaršek and the Southern Ocean pteropod research team",
    heroImage: "/images/discoveries/2012/southern-ocean-living-pteropods-aragonite-shell-dissolution.webp",
    imageAlt: "Original editorial diagram for Shell dissolution in living pteropods. Aragonite: mineral in the shell. Low saturation: linked to shell damage.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2012/southern-ocean-living-pteropods-aragonite-shell-dissolution.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Free-swimming snails sampled from water with low aragonite saturation had damage to their shells consistent with dissolution.",
    story: {
      whyThere: "Pteropods make thin shells from aragonite, a form of calcium carbonate. When seawater chemistry provides too little carbonate to keep aragonite stable, exposed shell surfaces can begin to dissolve.",
      howFound: "The researchers compared the condition of shells from naturally occurring water with different levels of aragonite saturation. The most undersaturated samples showed extensive surface damage in living snails.",
      whatMakesUnique: "The findings connect water chemistry with effects on animals in the field. Natural upwelling and added carbon dioxide can both shape the conditions the snails experience.",
    },
    gallery: [
      "/images/discoveries/2012/southern-ocean-living-pteropods-aragonite-shell-dissolution.webp",
    ],
    primarySourceUrl: "https://www.nature.com/articles/ngeo1635",
    supportingSources: [
      {
        title: "Lead-team author record and accepted paper",
        url: "https://ueaeprints.uea.ac.uk/id/eprint/40212/",
        publisher: "University of East Anglia",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["larsen-a-weddell-sea-glass-sponge-expansion-after-ice-collapse"],
    tags: ["pteropods", "ocean acidification", "aragonite"],
  },
];
