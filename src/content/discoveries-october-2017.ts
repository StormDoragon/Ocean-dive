import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2017.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2017Discoveries: Discovery[] = [
  {
    slug: "lord-howe-archipelago-stick-insect-museum-genetic-confirmation",
    "datePublished": "2026-11-27",
    title: "Museum Specimens Confirm That the Lord Howe Stick Insect Survived",
    categorySlug: "biology",
    subtopic: "Genetics",
    year: 2017,
    dateDiscovered: "2017-10-05",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Lord Howe Island Group (archipelago-scale conservation proxy)",
      lat: -31.55,
      lng: 159.09,
      country: "Australia",
    },
    discoveringOrg: "Alexander S. Mikheyev, Andreas Zwick and colleagues",
    scientificName: "Dryococelus australis",
    heroImage: "/images/discoveries/2017/lord-howe-archipelago-stick-insect-museum-genetic-confirmation.webp",
    imageAlt: "Original editorial diagram for Historical material clarifies the identity of a surviving insect. Museum specimens: represented the historic population. Living specimens: matched the same species.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2017/lord-howe-archipelago-stick-insect-museum-genetic-confirmation.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Genetic comparisons tied insects found on an offshore rock stack to historical specimens of the species reported lost from Lord Howe Island.",
    story: {
      whyThere: "Insects resembling the missing species were found alive in the archipelago in 2001. Differences in body shape made it hard to settle the identification by appearance alone.",
      howFound: "The team compared genetic evidence from living insects with that in museum collections. The genetic differences were consistent with variation within the historical species.",
      whatMakesUnique: "The results established that the offshore population belonged to the same species. The paper addresses identity and survival, while the status of populations changes as conservation work progresses.",
    },
    gallery: [
      "/images/discoveries/2017/lord-howe-archipelago-stick-insect-museum-genetic-confirmation.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/28988864/",
    videoUrls: [],
    relatedSlugs: ["blue-mountains-wollemi-pine-new-conifer-genus"],
    tags: ["stick insects", "museum genomics", "conservation genetics"],
  },
];
