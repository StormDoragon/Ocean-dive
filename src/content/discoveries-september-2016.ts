import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2016.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2016Discoveries: Discovery[] = [
  {
    slug: "dunedin-pigeons-letter-patterns-word-nonword-test",
    "datePublished": "2026-11-27",
    title: "Trained pigeons used letter patterns to sort words from nonwords",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2016,
    dateDiscovered: "2016-09-16",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Otago, Dunedin (research laboratory map proxy)",
      lat: -45.864,
      lng: 170.514,
      country: "New Zealand",
    },
    discoveringOrg: "Damian Scarf and the Otago animal cognition team",
    scientificName: "Columba livia",
    heroImage: "/images/discoveries/2016/dunedin-pigeons-letter-patterns-word-nonword-test.webp",
    imageAlt: "Original editorial diagram for Sorting written patterns on a screen. Four trained pigeons: completed the visual task. New letter strings: tested generalization.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2016/dunedin-pigeons-letter-patterns-word-nonword-test.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Four trained pigeons learned a visual sorting task and showed sensitivity to letter patterns in new groups of English letters.",
    story: {
      whyThere: "The researchers rewarded pigeons for sorting four-letter English words apart from letter strings that did not form words. The task used visual choices on a screen.",
      howFound: "Some of the same birds generalized to new examples. Their performance depended partly on familiar combinations of letters and the visual similarity between strings.",
      whatMakesUnique: "The results concern learning structure in written patterns. The experiment measured visual classification and left linguistic meaning outside the task.",
    },
    gallery: ["/images/discoveries/2016/dunedin-pigeons-letter-patterns-word-nonword-test.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/27638211/",
    videoUrls: [],
    relatedSlugs: ["tubingen-carrion-crows-vocalize-target-counts"],
    tags: ["pigeons", "animal cognition", "pattern learning"],
  },
];
