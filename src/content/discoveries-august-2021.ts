import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2021.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2021Discoveries: Discovery[] = [
  {
    slug: "yamdena-tanimbar-cockatoos-wild-origin-three-tool-types",
    "datePublished": "2026-11-27",
    title: "Two Wild-Caught Cockatoos Used Different Tools on the Same Fruit",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2021,
    dateDiscovered: "2021-08-31",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Yamdena Island, Tanimbar Islands field-study proxy",
      lat: -7.6,
      lng: 131.4,
      country: "Indonesia",
    },
    discoveringOrg: "Mark O’Hara and the Goffin’s cockatoo field team",
    scientificName: "Cacatua goffiniana",
    heroImage: "/images/discoveries/2021/yamdena-tanimbar-cockatoos-wild-origin-three-tool-types.webp",
    imageAlt: "Original editorial diagram for A tool set for one fruit. Up to 3: Distinct tool types. 2 birds: Repeated tool-set use in trials.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2021/yamdena-tanimbar-cockatoos-wild-origin-three-tool-types.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Two wild-origin Goffin’s cockatoos repeatedly used sets of up to three kinds of wooden tools to extract seed material from fruit during observations on Yamdena.",
    story: {
      whyThere: "Researchers on Yamdena offered fruit to temporarily captive wild cockatoos at a field station. Two birds produced and used tools that served different purposes during extraction.",
      howFound: "The tools differed in shape and function. Signs from free-ranging birds supported the possibility that the behavior occurs outside the observation trials.",
      whatMakesUnique: "The study documented repeated tool-set use in a small number of birds. Its frequency across the species remains unknown.",
    },
    gallery: [
      "/images/discoveries/2021/yamdena-tanimbar-cockatoos-wild-origin-three-tool-types.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/34469771/",
    videoUrls: [],
    relatedSlugs: ["seattle-american-crows-social-learning-dangerous-face-mask"],
    tags: ["Goffin’s cockatoo", "Tool use", "animal cognition", "Tanimbar Islands"],
  },
];
