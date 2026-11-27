import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 1947.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august1947Discoveries: Discovery[] = [
  {
    slug: "columbia-lamb-retherford-hydrogen-microwave-level-shift",
    "datePublished": "2026-11-27",
    title: "Microwaves Reveal a Small Split in Hydrogen’s Energy Levels",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1947,
    dateDiscovered: "1947-08-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Columbia University, New York (experiment-site proxy)",
      lat: 40.807,
      lng: -73.963,
      country: "United States",
    },
    discoveringOrg: "Willis E. Lamb Jr. and Robert C. Retherford",
    heroImage: "/images/discoveries/1947/columbia-lamb-retherford-hydrogen-microwave-level-shift.webp",
    imageAlt: "Original editorial diagram for Two hydrogen levels have different energies. Microwave resonance: measured the energy difference. 1947: first published report.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1947/columbia-lamb-retherford-hydrogen-microwave-level-shift.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Microwave measurements revealed that two states expected to have the same energy in hydrogen were separated by a small amount.",
    story: {
      whyThere: "The team produced a beam of hydrogen atoms in an unusually long-lived excited state. At a resonant frequency, microwaves transferred atoms into a state that decayed much faster.",
      howFound: "The frequency of the transition revealed a difference between the 2S and 2P states with the same total electron angular momentum. The effect became known as the Lamb shift.",
      whatMakesUnique: "The original experiment exposed a mismatch between an idealized description and measured atomic energies. It became a test for theories of how electrons interact with electromagnetic fields.",
    },
    gallery: [
      "/images/discoveries/1947/columbia-lamb-retherford-hydrogen-microwave-level-shift.webp",
    ],
    primarySourceUrl: "https://journals.aps.org/pr/abstract/10.1103/PhysRev.72.241",
    supportingSources: [
      {
        title: "Detailed follow-up measurements and apparatus",
        url: "https://journals.aps.org/pr/abstract/10.1103/PhysRev.79.549",
        publisher: "Physical Review",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["cern-alpha-doppler-laser-cooling-antihydrogen"],
    tags: ["hydrogen spectroscopy", "Lamb shift", "quantum electrodynamics"],
  },
];
