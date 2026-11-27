import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 1982.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december1982Discoveries: Discovery[] = [
  {
    slug: "orsay-aspect-bell-test-time-varying-polarization-analyzers",
    "datePublished": "2026-11-27",
    title: "A Fast-Switching Polarization Test Violated a Bell Inequality",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1982,
    dateDiscovered: "1982-12-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Orsay, Institut d’Optique study-team location",
      lat: 48.701,
      lng: 2.181,
      country: "France",
    },
    discoveringOrg: "Institut d’Optique",
    heroImage: "/images/discoveries/1982/orsay-aspect-bell-test-time-varying-polarization-analyzers.webp",
    imageAlt: "Original editorial diagram for Changing the measurement. 5 σ: Bell inequality violation. Two arms: Photon polarization.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1982/orsay-aspect-bell-test-time-varying-polarization-analyzers.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Alain Aspect, Jean Dalibard and Gérard Roger changed polarization analyzer settings during the flight of photon pairs and found correlations that violated their Bell inequality by five standard deviations.",
    story: {
      whyThere: "The experiment compared polarization measurements at two arms of an apparatus in Orsay. Each arm switched between analyzer settings while the light was in flight.",
      howFound: "The resulting combination of correlations exceeded the bound used in the paper. Its agreement with the quantum prediction made the experiment a landmark in tests of entanglement.",
      whatMakesUnique: "Later tests addressed remaining experimental assumptions with different detectors and switching schemes. The pin marks the study team’s Orsay laboratory area.",
    },
    gallery: [
      "/images/discoveries/1982/orsay-aspect-bell-test-time-varying-polarization-analyzers.webp",
    ],
    primarySourceUrl: "https://doi.org/10.1103/PhysRevLett.49.1804",
    videoUrls: [],
    relatedSlugs: ["boulder-jila-rubidium-first-dilute-gas-bose-einstein-condensate"],
    tags: ["Bell test", "Photon polarization", "Entanglement", "Quantum physics"],
  },
];
