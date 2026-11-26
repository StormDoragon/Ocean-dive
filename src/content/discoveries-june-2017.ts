import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2017.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2017Discoveries: Discovery[] = [
  {
    slug: "jebel-irhoud-early-homo-sapiens-fossils",
    "datePublished": "2026-11-26",
    title: "Moroccan Fossils Push Back the Record of Early Homo sapiens",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2017,
    dateDiscovered: "2017-06-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Jebel Irhoud (site-area marker)",
      lat: 31.85,
      lng: -8.87,
      country: "Morocco",
    },
    discoveringOrg: "Jean-Jacques Hublin, Abdelouahed Ben-Ncer and the Jebel Irhoud teams",
    heroImage: "/images/discoveries/2017/jebel-irhoud-early-homo-sapiens-fossils.webp",
    imageAlt: "Original editorial diagram for Jebel Irhoud. ~315,000 years: age of the fossil-bearing context. Mixed anatomy: modern-looking faces and long braincases.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2017/jebel-irhoud-early-homo-sapiens-fossils.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Fossils from Jebel Irhoud combine faces similar to those of living people with longer braincases. Dating of their archaeological context put the material at roughly 315,000 years old.",
    story: {
      whyThere: "A former mine in western Morocco exposed fossils at Jebel Irhoud decades before renewed excavation recovered more human remains in context.",
      howFound: "Researchers compared the fossils' shape with that of other early humans. A companion study used heat-altered flints and a human tooth to help date the layer.",
      whatMakesUnique: "The mix of features indicates that the recognizably modern face and the rounded braincase did not necessarily evolve together. One site cannot identify a single geographic origin for the species.",
    },
    gallery: ["/images/discoveries/2017/jebel-irhoud-early-homo-sapiens-fossils.webp"],
    paperUrl: "https://doi.org/10.1038/nature22336",
    primarySourceUrl: "https://www.mpg.de/11322481/oldest-homo-sapiens-fossils-at-jebel-irhoud-morocco",
    supportingSources: [
      {
        title: "Companion age study",
        url: "https://doi.org/10.1038/nature22335",
        publisher: "Nature",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-11-26",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["guangxi-homo-erectus-rainforest-teeth"],
    tags: ["human origins", "morocco", "thermoluminescence", "fossil skulls"],
  },
];
