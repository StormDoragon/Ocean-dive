import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 1957.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february1957Discoveries: Discovery[] = [
  {
    slug: "washington-wu-cobalt-decay-parity-violation",
    "datePublished": "2026-11-27",
    title: "Cobalt Decay Revealed a Directional Asymmetry in the Weak Interaction",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 1957,
    dateDiscovered: "1957-02-15",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "National Bureau of Standards, Washington (experiment-site proxy)",
      lat: 38.942,
      lng: -77.066,
      country: "United States",
    },
    discoveringOrg: "Chien-Shiung Wu, Ernest Ambler and colleagues",
    heroImage: "/images/discoveries/1957/washington-wu-cobalt-decay-parity-violation.webp",
    imageAlt: "Original editorial diagram for Beta decay distinguishes two opposite directions. Nuclear spin: provides the reference direction. Electron emission: showed a preferred direction.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1957/washington-wu-cobalt-decay-parity-violation.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Beta decay measurements found that electrons left oriented cobalt nuclei preferentially in one direction relative to nuclear spin.",
    story: {
      whyThere: "The team tested whether mirroring the experiment would leave its behavior unchanged. Aligning spins gave the measurement a reference direction.",
      howFound: "The distribution of electrons showed an asymmetry relative to that direction. A mirror-symmetric description could not account for it.",
      whatMakesUnique: "The study established parity violation in this beta decay. Different interactions can have different symmetry properties.",
    },
    gallery: ["/images/discoveries/1957/washington-wu-cobalt-decay-parity-violation.webp"],
    primarySourceUrl: "https://journals.aps.org/pr/abstract/10.1103/PhysRev.105.1413",
    videoUrls: [],
    relatedSlugs: ["brookhaven-long-lived-kaon-two-pion-cp-violation"],
    tags: ["parity violation", "beta decay", "weak interaction"],
  },
];
