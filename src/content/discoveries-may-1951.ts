import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 1951.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may1951Discoveries: Discovery[] = [
  {
    slug: "cambridge-deutsch-positronium-formation-in-gases",
    "datePublished": "2026-11-27",
    title: "Delayed Annihilation Reveals a Bound Electron and Positron",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1951,
    dateDiscovered: "1951-05-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Massachusetts Institute of Technology, Cambridge (experiment-site proxy)",
      lat: 42.36,
      lng: -71.094,
      country: "United States",
    },
    discoveringOrg: "Martin Deutsch, Massachusetts Institute of Technology",
    heroImage: "/images/discoveries/1951/cambridge-deutsch-positronium-formation-in-gases.webp",
    imageAlt: "Original editorial diagram for An electron and a positron briefly form a pair. Positronium: short-lived matter–antimatter bound state. Delayed annihilation: evidence of an intermediate state.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1951/cambridge-deutsch-positronium-formation-in-gases.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Measurements in gases produced evidence for positronium, a short-lived bound state of an electron and its antiparticle, the positron.",
    story: {
      whyThere: "Deutsch observed positrons interacting with gas before they annihilated. The timing included a delayed component that depended on the gas.",
      howFound: "The pattern supported a step in which an electron and positron first bound to each other. They subsequently annihilated, converting their energy into radiation.",
      whatMakesUnique: "The result gave experimental support to a simple matter–antimatter bound state. A later paper by Deutsch measured its decay into three photons.",
    },
    gallery: ["/images/discoveries/1951/cambridge-deutsch-positronium-formation-in-gases.webp"],
    primarySourceUrl: "https://journals.aps.org/pr/abstract/10.1103/PhysRev.82.455",
    supportingSources: [
      {
        title: "Follow-up measurement of three-photon decay",
        url: "https://journals.aps.org/pr/abstract/10.1103/PhysRev.83.866",
        publisher: "Physical Review",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["cern-alpha-doppler-laser-cooling-antihydrogen"],
    tags: ["positronium", "antimatter", "atomic physics"],
  },
];
