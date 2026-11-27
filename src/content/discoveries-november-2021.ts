import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2021.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2021Discoveries: Discovery[] = [
  {
    slug: "jameson-land-greenland-issi-saaneq-two-triassic-skulls",
    "datePublished": "2026-11-27",
    title: "Two Greenland Skulls Identified a Distinct Triassic Dinosaur",
    categorySlug: "dinosaurs-fossils",
    subtopic: "New dinosaur species",
    year: 2021,
    dateDiscovered: "2021-11-03",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Macknight Bjerg locality, Jameson Land",
      lat: 71.3835,
      lng: -22.5686,
      country: "Greenland",
    },
    discoveringOrg: "Victor Beccari and the Jameson Land dinosaur study team",
    scientificName: "Issi saaneq",
    heroImage: "/images/discoveries/2021/jameson-land-greenland-issi-saaneq-two-triassic-skulls.webp",
    imageAlt: "Original editorial diagram for Two skulls from Greenland. 2 skulls: Basis for the description. Late Triassic: Age of the formation.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2021/jameson-land-greenland-issi-saaneq-two-triassic-skulls.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Two nearly complete skulls from Jameson Land showed anatomical differences that led researchers to name the early sauropodomorph Issi saaneq.",
    story: {
      whyThere: "Fossils from the Late Triassic of East Greenland had previously been compared with Plateosaurus. The new study examined a pair of skulls representing different juvenile growth stages.",
      howFound: "A combination of features in the snout and in bones near the jaw joint distinguished the Greenland specimens in the comparison. The analysis placed them close to Plateosaurus.",
      whatMakesUnique: "The species adds a high-latitude record of early long-necked dinosaur relatives. The pin identifies the Macknight Bjerg locality in the published description.",
    },
    gallery: ["/images/discoveries/2021/jameson-land-greenland-issi-saaneq-two-triassic-skulls.webp"],
    primarySourceUrl: "https://www.mdpi.com/1424-2818/13/11/561",
    videoUrls: [],
    relatedSlugs: ["rio-negro-la-buitrera-najash-skulls-leg-bearing-snakes"],
    tags: ["sauropodomorphs", "Late Triassic", "East Greenland", "Fossil skull"],
  },
];
