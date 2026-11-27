import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2024.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2024Discoveries: Discovery[] = [
  {
    slug: "persian-plateau-early-modern-human-dispersal-hub-hypothesis",
    "datePublished": "2026-11-27",
    title: "Genomes and Climate Models Point to a Possible Early Human Hub in West Asia",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2024,
    dateDiscovered: "2024-03-25",
    reviewStatus: "preliminary",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Central Iranian Plateau (study-region proxy)",
      lat: 32.65,
      lng: 51.67,
      country: "Iran",
    },
    discoveringOrg: "Leonardo Vallini and the early human dispersal team",
    heroImage: "/images/discoveries/2024/persian-plateau-early-modern-human-dispersal-hub-hypothesis.webp",
    imageAlt: "Original editorial diagram for A proposed early dispersal hub. Persian Plateau: region suggested by two lines of evidence. Ancestry and past climate: combined in a regional model.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2024/persian-plateau-early-modern-human-dispersal-hub-hypothesis.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Researchers combined population history and past climate models to propose that the Persian Plateau could have supported early Homo sapiens groups before their wider spread across Eurasia.",
    story: {
      whyThere: "The study addressed a gap between the main dispersal out of Africa around 70,000 to 60,000 years ago and broader Eurasian expansion about 45,000 years ago.",
      howFound: "The authors compared ancestry patterns with simulated habitat suitability. They identified the Persian Plateau as compatible with both lines of evidence and estimated its ability to sustain a population.",
      whatMakesUnique: "The proposed hub is a regional inference. The study does not identify a particular camp or cave that could settle the question.",
    },
    gallery: [
      "/images/discoveries/2024/persian-plateau-early-modern-human-dispersal-hub-hypothesis.webp",
    ],
    primarySourceUrl: "https://doi.org/10.1038/s41467-024-46161-7",
    videoUrls: [],
    relatedSlugs: ["rub-al-khali-water-stone-early-settlement-survey"],
    tags: ["Persian Plateau", "human dispersal", "paleoclimate"],
  },
];
