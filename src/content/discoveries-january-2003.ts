import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2003.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2003Discoveries: Discovery[] = [
  {
    slug: "churchill-manitoba-isotelus-rex-giant-trilobite",
    "datePublished": "2026-11-27",
    title: "An Exceptionally Large Trilobite From Manitoba Was Described as Isotelus rex",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2003,
    dateDiscovered: "2003-01-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Churchill area, northern Manitoba (fossil-region proxy)",
      lat: 58.77,
      lng: -94.17,
      country: "Canada",
    },
    discoveringOrg: "David M. Rudkin, Graham A. Young and colleagues",
    scientificName: "Isotelus rex",
    heroImage: "/images/discoveries/2003/churchill-manitoba-isotelus-rex-giant-trilobite.webp",
    imageAlt: "Original editorial diagram for A nearly complete exoskeleton records a giant trilobite. Over 70 cm: reported length of the large specimen. Diagnostic anatomy: helps separate the species from relatives.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2003/churchill-manitoba-isotelus-rex-giant-trilobite.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A nearly complete exoskeleton more than 70 centimeters long helped distinguish a large Ordovician trilobite from its relatives.",
    story: {
      whyThere: "Ancient marine sediment preserved the outline of much of the segmented exoskeleton. More complete specimens are especially useful for estimating length.",
      howFound: "The authors measured the body and examined diagnostic features of its head and other segments. Their comparison supported recognizing a new species.",
      whatMakesUnique: "The specimen demonstrates that this trilobite reached a remarkable size. Size alone is insufficient to identify all specimens or classify closely related forms.",
    },
    gallery: ["/images/discoveries/2003/churchill-manitoba-isotelus-rex-giant-trilobite.webp"],
    primarySourceUrl: "https://pubs.geoscienceworld.org/paleosoc/jpaleontol/article-abstract/77/1/99/83433/THE-WORLD-S-BIGGEST-TRILOBITE-ISOTELUS-REX-NEW",
    videoUrls: [],
    relatedSlugs: ["kootenay-tokummia-mandibulate-mouthpart-fossils"],
    tags: ["Trilobites", "Ordovician fossils", "Manitoba"],
  },
];
