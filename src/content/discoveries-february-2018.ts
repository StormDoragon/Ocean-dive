import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2018.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2018Discoveries: Discovery[] = [
  {
    slug: "cartagena-cueva-de-los-aviones-flowstone-neanderthal-shells",
    "datePublished": "2026-11-27",
    title: "Flowstone Put Pigmented Neanderthal Shells at Least 115,000 Years Back",
    categorySlug: "archaeology",
    subtopic: "Artifacts",
    year: 2018,
    dateDiscovered: "2018-02-22",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Cartagena Bay, Cueva de los Aviones site area",
      lat: 37.585,
      lng: -0.986,
      country: "Spain",
    },
    discoveringOrg: "Dirk L. Hoffmann and the Cueva de los Aviones dating team",
    heroImage: "/images/discoveries/2018/cartagena-cueva-de-los-aviones-flowstone-neanderthal-shells.webp",
    imageAlt: "Original editorial diagram for Shells under dated calcite. 115–120 ka: Age inferred from flowstone. Cartagena: Coastal cave.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2018/cartagena-cueva-de-los-aviones-flowstone-neanderthal-shells.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Dating the calcite over an archaeological deposit placed perforated and pigmented marine shells from Cartagena Bay at about 115,000 to 120,000 years old.",
    story: {
      whyThere: "A layer of mineral growth sealed deposits containing colored minerals, shells with holes, and shell interiors with pigment mixtures. Uranium-series measurements dated the calcite that formed after the archaeological layer.",
      howFound: "The age placed the shell assemblage in a part of the Middle Paleolithic associated with Neanderthals in Iberia. Earlier measurements had left the deposits’ age less certain.",
      whatMakesUnique: "The authors interpreted some of the shells as evidence for symbolic behavior. Their specific meaning and use are still open to interpretation.",
    },
    gallery: [
      "/images/discoveries/2018/cartagena-cueva-de-los-aviones-flowstone-neanderthal-shells.webp",
    ],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5833998/",
    videoUrls: [],
    relatedSlugs: ["schelklingen-hohle-fels-aurignacian-mammoth-ivory-figure"],
    tags: ["Neanderthals", "uranium-series dating", "Marine shells", "pigments"],
  },
];
