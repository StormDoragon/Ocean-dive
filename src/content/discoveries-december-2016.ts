import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2016.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2016Discoveries: Discovery[] = [
  {
    slug: "laetoli-tanzania-site-s-early-hominin-footprints",
    "datePublished": "2026-11-27",
    title: "New Laetoli tracks recorded variation among early upright walkers",
    categorySlug: "biology",
    subtopic: "Human evolution",
    year: 2016,
    dateDiscovered: "2016-12-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Laetoli region, northern Tanzania (regional map proxy for Site S)",
      lat: -3.23,
      lng: 35.19,
      country: "Tanzania",
    },
    discoveringOrg: "Fidelis T. Masao and the Laetoli Site S team",
    heroImage: "/images/discoveries/2016/laetoli-tanzania-site-s-early-hominin-footprints.webp",
    imageAlt: "Original editorial diagram for More early footprints at Laetoli. About 3.66 million years: age of the track-bearing deposits. Different print sizes: recorded at nearby localities.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2016/laetoli-tanzania-site-s-early-hominin-footprints.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Tracks from a new area at Laetoli preserve footprints of different sizes from roughly the same geological interval.",
    story: {
      whyThere: "Volcanic ash at Laetoli preserved tracks from about 3.66 million years ago. A survey near the well-known footprint site identified additional impressions at a locality called Site S.",
      howFound: "The added tracks record upright walking and include some larger prints than those documented at the original locality. The difference can inform estimates of the bodies of the individuals who left them.",
      whatMakesUnique: "Larger and smaller footprints provide direct evidence of variation among track makers. Species identity, age and sex are harder to infer from footprint size alone.",
    },
    gallery: ["/images/discoveries/2016/laetoli-tanzania-site-s-early-hominin-footprints.webp"],
    primarySourceUrl: "https://elifesciences.org/articles/19568",
    supportingSources: [
      {
        title: "Public bibliographic record and abstract",
        url: "https://pubmed.ncbi.nlm.nih.gov/27964778/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["mbire-zimbabwe-mbiresaurus-raathi-triassic-dinosaur"],
    tags: ["Laetoli", "hominin footprints", "bipedalism"],
  },
];
