import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 1975.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december1975Discoveries: Discovery[] = [
  {
    slug: "menlo-park-slac-anomalous-lepton-pairs-tau",
    "datePublished": "2026-11-27",
    title: "Unusual Electron–Muon Pairs Revealed Evidence for a New Heavy Lepton",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 1975,
    dateDiscovered: "1975-12-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "SLAC, Menlo Park (experiment-site proxy)",
      lat: 37.416,
      lng: -122.205,
      country: "United States",
    },
    discoveringOrg: "Martin L. Perl and colleagues",
    heroImage: "/images/discoveries/1975/menlo-park-slac-anomalous-lepton-pairs-tau.webp",
    imageAlt: "Original editorial diagram for An unusual pattern points to a new particle. Electron and muon: seen together in selected events. Missing energy: consistent with unobserved decay particles.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1975/menlo-park-slac-anomalous-lepton-pairs-tau.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Electron–positron collisions produced events with an electron, a muon and unobserved energy, evidence that helped establish the tau lepton.",
    story: {
      whyThere: "The detector measured the visible particles produced when electrons and positrons collided.",
      howFound: "Some events had a combination of particle types and missing energy that known processes did not easily account for. Production and decay of a heavier lepton offered a consistent explanation.",
      whatMakesUnique: "The original result was evidence for a new particle. Later observations confirmed and measured the lepton in more detail.",
    },
    gallery: ["/images/discoveries/1975/menlo-park-slac-anomalous-lepton-pairs-tau.webp"],
    primarySourceUrl: "https://doi.org/10.1103/PhysRevLett.35.1489",
    videoUrls: [],
    relatedSlugs: ["batavia-cdf-top-quark-collision-production"],
    tags: ["tau lepton", "electron–positron collisions", "particle discoveries"],
  },
];
