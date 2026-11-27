import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 1980.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august1980Discoveries: Discovery[] = [
  {
    slug: "grenoble-silicon-quantized-hall-resistance-plateaus",
    "datePublished": "2026-11-27",
    title: "Silicon’s Hall Resistance Landed on Quantum Plateaus",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1980,
    dateDiscovered: "1980-08-11",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Grenoble high magnetic field laboratory area, experimental proxy",
      lat: 45.193,
      lng: 5.687,
      country: "France",
    },
    discoveringOrg: "Max Planck Institute for Solid State Research",
    heroImage: "/images/discoveries/1980/grenoble-silicon-quantized-hall-resistance-plateaus.webp",
    imageAlt: "Original editorial diagram for Steps in electrical resistance. Integer: Plateau sequence. Silicon: Measured device.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1980/grenoble-silicon-quantized-hall-resistance-plateaus.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Klaus von Klitzing and colleagues reported flat, repeatable Hall-resistance steps in silicon under a strong magnetic field, linking the measured resistance to fundamental constants.",
    story: {
      whyThere: "The experiment measured transverse electrical resistance in a silicon device at low temperature. The resistance remained nearly constant over ranges of the experimental control settings and shifted between discrete levels.",
      howFound: "The values followed a simple integer sequence built from the elementary charge and Planck’s constant. The paper used the measurement to estimate the fine-structure constant.",
      whatMakesUnique: "Stable resistance values also enabled precise electrical calibration. The pin identifies the high-field laboratory area in Grenoble.",
    },
    gallery: ["/images/discoveries/1980/grenoble-silicon-quantized-hall-resistance-plateaus.webp"],
    primarySourceUrl: "https://link.aps.org/doi/10.1103/PhysRevLett.45.494",
    videoUrls: [],
    relatedSlugs: ["orsay-aspect-bell-test-time-varying-polarization-analyzers"],
    tags: ["quantum Hall effect", "Silicon", "Resistance standards", "Quantum physics"],
  },
];
