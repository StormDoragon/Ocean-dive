import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2006.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2006Discoveries: Discovery[] = [
  {
    slug: "mahares-desert-ants-step-length-homing-distance",
    "datePublished": "2026-11-27",
    title: "Changing desert ants’ stride changed where they searched for home",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2006,
    dateDiscovered: "2006-06-30",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Maharès region, coastal Tunisia (regional map proxy for desert ant field experiments)",
      lat: 34.531,
      lng: 10.54,
      country: "Tunisia",
    },
    discoveringOrg: "Matthias Wittlinger, Rüdiger Wehner and Harald Wolf",
    scientificName: "Cataglyphis fortis",
    heroImage: "/images/discoveries/2006/mahares-desert-ants-step-length-homing-distance.webp",
    imageAlt: "Original editorial diagram for The distance signal in ant navigation. Longer strides: led to an overshoot. Shorter strides: led to an undershoot.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2006/mahares-desert-ants-step-length-homing-distance.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A field experiment altered desert ants' stride and found that longer strides made their initial home search overshoot, while shorter strides made it fall short.",
    story: {
      whyThere: "Desert ants can take a direct path back after a winding journey. Their return requires an estimate of the distance travelled as well as a sense of direction.",
      howFound: "After ants walked a known distance from the nest, the researchers changed the effective length of their legs. Ants with longer strides searched too far along the return route, and those with shorter strides started searching too soon.",
      whatMakesUnique: "The changes support a system that estimates distance from walking. How the ants' nervous systems combine the relevant signals remained an open question.",
    },
    gallery: ["/images/discoveries/2006/mahares-desert-ants-step-length-homing-distance.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/16809544/",
    supportingSources: [
      {
        title: "Subsequent field experiments in the same region",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0928425712000423",
        publisher: "Behavioural Processes",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["yunnan-honey-bees-young-waggle-dance-social-learning"],
    tags: ["desert ants", "animal navigation", "path integration"],
  },
];
