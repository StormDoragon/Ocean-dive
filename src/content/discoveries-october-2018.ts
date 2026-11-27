import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2018.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2018Discoveries: Discovery[] = [
  {
    slug: "angkor-medieval-water-network-flood-cascading-failure-model",
    "datePublished": "2026-11-27",
    title: "A model showed how flood damage could spread through Angkor’s canals",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2018,
    dateDiscovered: "2018-10-17",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Angkor archaeological park (regional map proxy for the hydraulic network)",
      lat: 13.45,
      lng: 103.85,
      country: "Cambodia",
    },
    discoveringOrg: "Dan Penny and the Angkor hydraulic network study team",
    heroImage: "/images/discoveries/2018/angkor-medieval-water-network-flood-cascading-failure-model.webp",
    imageAlt: "Original editorial diagram for How flood damage could cascade through Angkor. Connected canals: rerouted high flows in the model. Erosion and sediment: changed capacity across the system.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2018/angkor-medieval-water-network-flood-cascading-failure-model.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A model based on Angkor's interconnected water infrastructure showed how strong flows could cause damage that spread through the network.",
    story: {
      whyThere: "Angkor used canals, embankments and other waterworks to move and store water. Because parts of the system were connected, a change in one channel could affect flows elsewhere.",
      howFound: "The researchers represented the mapped system as a network and tested its response to intense flows. Under some conditions, erosion and sediment buildup redirected water in ways that spread damage.",
      whatMakesUnique: "The results offered a plausible mechanism for failures during periods of extreme rainfall. Historical changes at Angkor had multiple causes, and the model tests a specific role for infrastructure.",
    },
    gallery: [
      "/images/discoveries/2018/angkor-medieval-water-network-flood-cascading-failure-model.webp",
    ],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6192684/",
    videoUrls: [],
    relatedSlugs: ["yeha-beta-samati-aksumite-town-basilica"],
    tags: ["Angkor", "hydraulic engineering", "archaeological modelling"],
  },
];
