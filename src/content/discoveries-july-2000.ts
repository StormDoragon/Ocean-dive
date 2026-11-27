import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2000.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2000Discoveries: Discovery[] = [
  {
    slug: "gottingen-klar-hell-sted-90-to-110-nanometer-fluorescence-spot",
    "datePublished": "2026-11-27",
    title: "A Second Light Beam Shrunk the Fluorescent Spot to About 100 Nanometers",
    categorySlug: "technology",
    subtopic: "Imaging",
    year: 2000,
    dateDiscovered: "2000-07-18",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Max Planck Institute laboratory area, Göttingen",
      lat: 51.558,
      lng: 9.959,
      country: "Germany",
    },
    discoveringOrg: "Thomas A. Klar, Stefan W. Hell and the Göttingen microscopy team",
    heroImage: "/images/discoveries/2000/gottingen-klar-hell-sted-90-to-110-nanometer-fluorescence-spot.webp",
    imageAlt: "Original editorial diagram for Shrinking the glowing spot. 90–110 nm: Measured spot diameter. 3D: Imaging improvement.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2000/gottingen-klar-hell-sted-90-to-110-nanometer-fluorescence-spot.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "An experimental fluorescence microscope suppressed light emission around the edge of its focal spot. The study measured a nearly spherical fluorescent region about 90 to 110 nanometers across.",
    story: {
      whyThere: "The researchers used stimulated emission to reduce fluorescence away from the center of a spot. The remaining light came from a smaller volume, improving the optical resolution.",
      howFound: "Measurements on fluorescent samples found improvement both laterally and along the optical axis. That balance let the microscope distinguish features in three dimensions.",
      whatMakesUnique: "The result was an experimental demonstration of stimulated emission depletion microscopy. The map identifies the Max Planck research location in Göttingen.",
    },
    gallery: [
      "/images/discoveries/2000/gottingen-klar-hell-sted-90-to-110-nanometer-fluorescence-spot.webp",
    ],
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC26924/",
    videoUrls: [],
    relatedSlugs: ["vienna-hentschel-krausz-650-attosecond-soft-x-ray-pulse"],
    tags: [
      "STED microscopy",
      "Optical resolution",
      "Fluorescence microscopy",
      "Diffraction limit",
    ],
  },
];
