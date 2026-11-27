import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 1956.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july1956Discoveries: Discovery[] = [
  {
    slug: "savannah-river-cowan-reines-reactor-antineutrino-detection",
    "datePublished": "2026-11-27",
    title: "Paired Signals in a Reactor Experiment Detected the Electron Antineutrino",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 1956,
    dateDiscovered: "1956-07-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Savannah River Site, South Carolina (experiment-site proxy)",
      lat: 33.3,
      lng: -81.72,
      country: "United States",
    },
    discoveringOrg: "Clyde L. Cowan Jr., Frederick Reines and colleagues",
    heroImage: "/images/discoveries/1956/savannah-river-cowan-reines-reactor-antineutrino-detection.webp",
    imageAlt: "Original editorial diagram for Two timed pulses mark a rare particle interaction. Prompt signal: starts the characteristic pair. Delayed signal: helps separate events from background.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1956/savannah-river-cowan-reines-reactor-antineutrino-detection.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A detector near a reactor recorded pairs of signals with the pattern expected when electron antineutrinos interacted with matter.",
    story: {
      whyThere: "Neutrinos interact very rarely. A source producing many of them improves the chance of detecting occasional events.",
      howFound: "The team identified a prompt signal and a second shortly afterward. The distinctive timing helped separate likely interactions from background events.",
      whatMakesUnique: "The facility supplied antineutrinos from a reactor. The experiment measured a rare interaction that had for years been treated largely as a prediction.",
    },
    gallery: [
      "/images/discoveries/1956/savannah-river-cowan-reines-reactor-antineutrino-detection.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17796274/",
    videoUrls: [],
    relatedSlugs: ["daya-bay-electron-antineutrino-theta-thirteen"],
    tags: ["antineutrinos", "Particle detection", "reactor experiments"],
  },
];
