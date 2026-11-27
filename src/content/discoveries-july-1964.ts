import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 1964.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july1964Discoveries: Discovery[] = [
  {
    slug: "brookhaven-long-lived-kaon-two-pion-cp-violation",
    "datePublished": "2026-11-27",
    title: "A Rare Kaon Decay Exposed a Symmetry Violation Between Matter and Antimatter",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 1964,
    dateDiscovered: "1964-07-27",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Brookhaven National Laboratory, Upton (experiment-site proxy)",
      lat: 40.869,
      lng: -72.877,
      country: "United States",
    },
    discoveringOrg: "James H. Christenson, James W. Cronin, Val L. Fitch and René Turlay",
    heroImage: "/images/discoveries/1964/brookhaven-long-lived-kaon-two-pion-cp-violation.webp",
    imageAlt: "Original editorial diagram for A rare decay exposes a failure of combined symmetry. Long-lived kaons: the selected neutral-meson component. Two pions: appeared in a small fraction of decays.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1964/brookhaven-long-lived-kaon-two-pion-cp-violation.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A beam containing long-lived neutral kaons produced rare two-pion decays, showing that combined charge and parity symmetry is not exact in these weak decays.",
    story: {
      whyThere: "Neutral kaons mix between states that differ in lifetime and likely decay.",
      howFound: "The team found a small population of two-pion events from the long-lived component. The tested model would rule out this process under exact charge-parity symmetry.",
      whatMakesUnique: "The effect matters for how matter and antimatter behave. It does not by itself explain the cosmic imbalance between them.",
    },
    gallery: ["/images/discoveries/1964/brookhaven-long-lived-kaon-two-pion-cp-violation.webp"],
    primarySourceUrl: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.13.138",
    videoUrls: [],
    relatedSlugs: ["washington-wu-cobalt-decay-parity-violation"],
    tags: ["neutral kaons", "CP violation", "weak interaction"],
  },
];
