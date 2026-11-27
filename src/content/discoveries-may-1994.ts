import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 1994.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may1994Discoveries: Discovery[] = [
  {
    slug: "mt-kirkpatrick-cryolophosaurus-early-jurassic-theropod",
    "datePublished": "2026-11-27",
    title: "A Crested Theropod Is Described From Antarctica",
    categorySlug: "dinosaurs-fossils",
    subtopic: "New dinosaur species",
    year: 1994,
    dateDiscovered: "1994-05-06",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Mount Kirkpatrick region (fossil site proxy)",
      lat: -84.33,
      lng: 166.42,
      country: "Antarctica",
    },
    discoveringOrg: "William R. Hammer and William J. Hickerson",
    scientificName: "Cryolophosaurus ellioti",
    heroImage: "/images/discoveries/1994/mt-kirkpatrick-cryolophosaurus-early-jurassic-theropod.webp",
    imageAlt: "Original editorial diagram for An Early Jurassic predator recovered in Antarctica. Partial skull: preserved a distinctive crest. Falla Formation: source of associated vertebrate fossils.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1994/mt-kirkpatrick-cryolophosaurus-early-jurassic-theropod.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A partial skull and other bones from the Transantarctic Mountains revealed the Early Jurassic dinosaur Cryolophosaurus ellioti.",
    story: {
      whyThere: "The fossil came from rocks of the Falla Formation, deposited when Antarctica formed part of Gondwana. Other vertebrate remains were recovered from the same formation.",
      howFound: "The skull preserves a distinctive crest, while bones behind the skull offered additional traits for comparison with other early meat-eating dinosaurs.",
      whatMakesUnique: "The discovery records a diverse fossil vertebrate fauna at a high latitude in the Early Jurassic. The exact relationships of the theropod have been the subject of later studies.",
    },
    gallery: ["/images/discoveries/1994/mt-kirkpatrick-cryolophosaurus-early-jurassic-theropod.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17794724/",
    videoUrls: [],
    relatedSlugs: ["ellesmere-tiktaalik-pelvic-girdle-hind-fin"],
    tags: ["jurassic", "theropods", "gondwana"],
  },
];
