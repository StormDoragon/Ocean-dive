import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 1963.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july1963Discoveries: Discovery[] = [
  {
    slug: "cambridge-shapiro-microwave-voltage-steps",
    "datePublished": "2026-11-27",
    title: "Microwaves Exposed Quantized Voltage Steps in a Superconducting Junction",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1963,
    dateDiscovered: "1963-07-15",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Cambridge, Massachusetts (research-team proxy)",
      lat: 42.373,
      lng: -71.11,
      country: "United States",
    },
    discoveringOrg: "Sidney Shapiro",
    heroImage: "/images/discoveries/1963/cambridge-shapiro-microwave-voltage-steps.webp",
    imageAlt: "Original editorial diagram for A periodic input sets a sequence of voltages. Microwave frequency: controls the spacing of steps. Superconducting junction: where the steps were measured.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1963/cambridge-shapiro-microwave-voltage-steps.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Applying microwaves to a superconducting tunnel junction produced voltage plateaus that depended on the radiation’s frequency.",
    story: {
      whyThere: "A thin insulating layer can separate two superconductors while still allowing quantum tunneling.",
      howFound: "The researchers measured how current and voltage changed under microwave irradiation. The response developed regularly separated voltage steps.",
      whatMakesUnique: "The frequency dependence tested a prediction of the Josephson effect. Later standards used that relation to link voltage and frequency.",
    },
    gallery: ["/images/discoveries/1963/cambridge-shapiro-microwave-voltage-steps.webp"],
    primarySourceUrl: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.11.80",
    videoUrls: [],
    relatedSlugs: ["hatoyama-shielded-magnetic-flux-electron-phase-shift"],
    tags: ["Josephson effect", "superconducting junctions", "quantized voltage"],
  },
];
