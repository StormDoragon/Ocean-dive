import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 1995.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april1995Discoveries: Discovery[] = [
  {
    slug: "batavia-cdf-top-quark-collision-production",
    "datePublished": "2026-11-27",
    title: "Tevatron Collision Patterns Established Production of the Top Quark",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 1995,
    dateDiscovered: "1995-04-03",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Fermilab, Batavia (experiment-site proxy)",
      lat: 41.844,
      lng: -88.253,
      country: "United States",
    },
    discoveringOrg: "CDF and DØ collaborations",
    heroImage: "/images/discoveries/1995/batavia-cdf-top-quark-collision-production.webp",
    imageAlt: "Original editorial diagram for Decay products reveal production of a heavy quark. Several event signatures: help separate signal from background. Two collaborations: reported independent observations.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1995/batavia-cdf-top-quark-collision-production.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The Collider Detector at Fermilab reported an excess of events with the signatures expected from top-quark pairs. A companion result from DØ provided an independent observation.",
    story: {
      whyThere: "A top quark decays too quickly for a detector to see it directly. The experiments searched for combinations of particles left by its decays.",
      howFound: "Teams compared the observed events with known backgrounds and predictions for a heavy top quark. They also used the patterns to estimate its mass.",
      whatMakesUnique: "The two reports established production of the heaviest known quark. Later measurements refined the mass and compared its properties with theoretical predictions.",
    },
    gallery: ["/images/discoveries/1995/batavia-cdf-top-quark-collision-production.webp"],
    primarySourceUrl: "https://doi.org/10.1103/PhysRevLett.74.2626",
    videoUrls: [],
    relatedSlugs: ["menlo-park-slac-anomalous-lepton-pairs-tau"],
    tags: ["top quark", "Tevatron", "CDF"],
  },
];
