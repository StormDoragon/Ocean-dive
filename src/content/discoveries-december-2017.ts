import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2017.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2017Discoveries: Discovery[] = [
  {
    slug: "saviranna-estonia-schmidtiellus-early-cambrian-compound-eye",
    "datePublished": "2026-11-27",
    title: "A Cambrian Trilobite Fossil Preserved the Inner Structure of a Compound Eye",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil reinterpretation",
    year: 2017,
    dateDiscovered: "2017-12-04",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Northern Estonia, Saviranna study-region proxy",
      lat: 59.47,
      lng: 25.04,
      country: "Estonia",
    },
    discoveringOrg: "Brigitte Schoenemann, Helje Pärnaste and Euan N. K. Clarkson",
    scientificName: "Schmidtiellus reetae",
    heroImage: "/images/discoveries/2017/saviranna-estonia-schmidtiellus-early-cambrian-compound-eye.webp",
    imageAlt: "Original editorial diagram for Inside an early compound eye. 500+ Ma: Age of the fossil. Optical units: Repeated internal structures.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2017/saviranna-estonia-schmidtiellus-early-cambrian-compound-eye.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A well-preserved Cambrian trilobite from Estonia revealed internal structures that repeated across its eye. The arrangement resembled a basic form of compound vision still found in arthropods.",
    story: {
      whyThere: "The specimen preserved details beneath the outside of its eye. Individual optical units could be studied separately rather than inferred from the surface pattern alone.",
      howFound: "The authors compared the internal structures with those in living arthropods. They interpreted them as evidence for a form of apposition compound eye very early in the Cambrian.",
      whatMakesUnique: "The paper shows how a compound visual system was organized more than half a billion years ago. The map marks the northern Estonian study region.",
    },
    gallery: [
      "/images/discoveries/2017/saviranna-estonia-schmidtiellus-early-cambrian-compound-eye.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/29203666/",
    supportingSources: [
      {
        title: "Research team account of the Cambrian eye",
        url: "https://uni-koeln.de/en/university/news/news/press-releases/single-news/compound-eyes-a-continuous-feature-of-evolution",
        publisher: "University of Cologne",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["cerrejon-colombia-titanoboa-giant-paleocene-snake-vertebrae"],
    tags: ["Trilobites", "Compound eyes", "cambrian", "Fossil preservation"],
  },
];
