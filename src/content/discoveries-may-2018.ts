import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2018.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2018Discoveries: Discovery[] = [
  {
    slug: "western-kansas-ichthyornis-toothed-skull-early-beak",
    "datePublished": "2026-11-27",
    title: "An Ichthyornis skull combined teeth with an early beak",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil reinterpretation",
    year: 2018,
    dateDiscovered: "2018-05-02",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Western Kansas (regional map proxy for key Ichthyornis skull material)",
      lat: 38.78,
      lng: -99.72,
      country: "United States",
    },
    discoveringOrg: "Daniel J. Field, Michael Hanson and the Ichthyornis research team",
    scientificName: "Ichthyornis dispar",
    heroImage: "/images/discoveries/2018/western-kansas-ichthyornis-toothed-skull-early-beak.webp",
    imageAlt: "Original editorial diagram for An early beak and teeth in one skull. Toothless tip: at the front of the jaw. Teeth farther back: preserved in the fossil.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2018/western-kansas-ichthyornis-toothed-skull-early-beak.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "New fossil material and digital reconstruction showed that this Cretaceous bird had a small beak at its jaw tips and teeth farther back.",
    story: {
      whyThere: "Most early bird skulls in the fossil record are incomplete or flattened. The team studied several three-dimensional Ichthyornis specimens, including an unusually complete skull, and revisited older material.",
      howFound: "Digital reconstruction showed a short toothless tip paired with teeth behind it. Other regions combined birdlike and ancestral traits in the skull and jaw.",
      whatMakesUnique: "These observations show that parts of the modern bird head arose in different combinations over time. The fossil offers a detailed example rather than a complete sequence for all early birds.",
    },
    gallery: ["/images/discoveries/2018/western-kansas-ichthyornis-toothed-skull-early-beak.webp"],
    primarySourceUrl: "https://www.nature.com/articles/s41586-018-0053-y",
    supportingSources: [
      {
        title: "Institutional account from the study collaboration",
        url: "https://news.yale.edu/2018/05/02/scientists-find-first-bird-beak-right-under-their-noses",
        publisher: "Yale University",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["western-liaoning-yutyrannus-huali-giant-feathered-tyrannosauroid"],
    tags: ["early birds", "cretaceous", "skull anatomy"],
  },
];
