import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 1988.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may1988Discoveries: Discovery[] = [
  {
    slug: "pasadena-caltech-femtosecond-sodium-iodide-wave-packet-oscillations",
    "datePublished": "2026-11-27",
    title: "Femtosecond Measurements Followed a Molecule as It Separated",
    categorySlug: "technology",
    subtopic: "Imaging",
    year: 1988,
    dateDiscovered: "1988-05-15",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "California Institute of Technology, experimental site",
      lat: 34.137,
      lng: -118.125,
      country: "United States",
    },
    discoveringOrg: "Todd S. Rose, Mark J. Rosker and Ahmed H. Zewail",
    heroImage: "/images/discoveries/1988/pasadena-caltech-femtosecond-sodium-iodide-wave-packet-oscillations.webp",
    imageAlt: "Original editorial diagram for The timing of a chemical reaction. Femtoseconds: Time between observations. Sodium iodide: Molecule in the experiment.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1988/pasadena-caltech-femtosecond-sodium-iodide-wave-packet-oscillations.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Short light pulses let a Caltech team follow oscillations during the separation of sodium iodide. The changing signal revealed that fragments could linger before escaping.",
    story: {
      whyThere: "The team prepared the molecule in an excited state and sampled its behavior after short successive delays. The signals provided a time record of the motion associated with dissociation.",
      howFound: "The experiment found repeated features as the fragment distribution moved through a temporarily bound region. The observations supported a wave-packet interpretation of the reaction.",
      whatMakesUnique: "This approach measured changes during the reaction and helped establish femtosecond spectroscopy. The map identifies Caltech, where the experiment was based.",
    },
    gallery: [
      "/images/discoveries/1988/pasadena-caltech-femtosecond-sodium-iodide-wave-packet-oscillations.webp",
    ],
    primarySourceUrl: "https://authors.library.caltech.edu/records/55vz5-ymz44",
    videoUrls: [],
    relatedSlugs: ["bethesda-betzig-hess-photoactivated-localization-microscopy"],
    tags: ["Femtochemistry", "Ultrafast spectroscopy", "Wave packets", "chemical bonds"],
  },
];
