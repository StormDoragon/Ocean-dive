import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2015.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2015Discoveries: Discovery[] = [
  {
    slug: "darmstadt-rosetta-comet-67p-molecular-oxygen-coma",
    "datePublished": "2026-11-27",
    title: "Rosetta detected molecular oxygen escaping comet 67P",
    categorySlug: "space",
    subtopic: "Comets",
    year: 2015,
    dateDiscovered: "2015-10-28",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "ESA European Space Operations Centre, Darmstadt (Rosetta mission map proxy)",
      lat: 49.872,
      lng: 8.623,
      country: "Germany",
    },
    discoveringOrg: "André Bieler and the ROSINA instrument team",
    heroImage: "/images/discoveries/2015/darmstadt-rosetta-comet-67p-molecular-oxygen-coma.webp",
    imageAlt: "Original editorial diagram for Molecular oxygen in the gas around comet 67P. ROSINA: sampled the local gas. About 4 percent: average oxygen relative to water.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2015/darmstadt-rosetta-comet-67p-molecular-oxygen-coma.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "An instrument on ESA's Rosetta spacecraft measured molecular oxygen in gas released by comet 67P/Churyumov–Gerasimenko.",
    story: {
      whyThere: "Comets release gases from their surface as they warm. Rosetta's ROSINA mass spectrometer sampled the gas around comet 67P and distinguished a molecular oxygen signal.",
      howFound: "The signal tracked water vapour closely over many observations. The team reported an average abundance close to four oxygen molecules per hundred water molecules.",
      whatMakesUnique: "The relationship prompted the researchers to consider oxygen trapped within the comet's ice. The measurements established the gas composition but did not settle when or how the oxygen originally formed.",
    },
    gallery: ["/images/discoveries/2015/darmstadt-rosetta-comet-67p-molecular-oxygen-coma.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature15707",
    supportingSources: [
      {
        title: "Rosetta team account of the in situ detection",
        url: "https://blogs.esa.int/rosetta/2015/10/28/first-detection-of-molecular-oxygen-at-a-comet/",
        publisher: "European Space Agency",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["tucson-osiris-rex-bennu-asteroid-particle-ejection-events"],
    tags: ["Rosetta", "comet 67P", "molecular oxygen"],
  },
];
