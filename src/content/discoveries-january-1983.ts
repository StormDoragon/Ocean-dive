import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 1983.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january1983Discoveries: Discovery[] = [
  {
    slug: "ruschlikon-ibm-silicon-111-seven-by-seven-tunneling-microscope",
    "datePublished": "2026-11-27",
    title: "A Tunneling Microscope Resolved Silicon’s 7 × 7 Surface Pattern",
    categorySlug: "technology",
    subtopic: "Imaging",
    year: 1983,
    dateDiscovered: "1983-01-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "IBM Zurich Research Laboratory, Rüschlikon",
      lat: 47.307,
      lng: 8.554,
      country: "Switzerland",
    },
    discoveringOrg: "Gerd Binnig, Heinrich Rohrer, Christoph Gerber and Edmund Weibel",
    heroImage: "/images/discoveries/1983/ruschlikon-ibm-silicon-111-seven-by-seven-tunneling-microscope.webp",
    imageAlt: "Original editorial diagram for Silicon’s repeating surface. 7 × 7: Reconstruction pattern. 12 adatoms: Model favored by the data.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1983/ruschlikon-ibm-silicon-111-seven-by-seven-tunneling-microscope.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A scanning tunneling microscope mapped a repeating 7 × 7 pattern on the Si(111) surface. The images favored a model with 12 extra surface atoms per unit cell.",
    story: {
      whyThere: "A freshly prepared silicon surface can rearrange into a repeating pattern larger than the bulk crystal’s unit. The team scanned the surface directly to see where individual features appeared.",
      howFound: "The current between probe and sample changed with the local electronic structure. The real-space pattern provided a new comparison for models previously tested with diffraction.",
      whatMakesUnique: "The study supported a repeating arrangement with 12 adatoms, while leaving finer details of the reconstruction open. The map identifies IBM’s Zurich research laboratory.",
    },
    gallery: [
      "/images/discoveries/1983/ruschlikon-ibm-silicon-111-seven-by-seven-tunneling-microscope.webp",
    ],
    primarySourceUrl: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.50.120",
    videoUrls: [],
    relatedSlugs: ["holmdel-bell-labs-single-beam-optical-tweezers"],
    tags: [
      "Scanning tunneling microscopy",
      "Silicon",
      "Atomic resolution",
      "Surface reconstruction",
    ],
  },
];
