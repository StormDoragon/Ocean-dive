import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2011.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2011Discoveries: Discovery[] = [
  {
    slug: "gothenburg-superconducting-circuit-dynamical-casimir-photons",
    "datePublished": "2026-11-27",
    title: "A fast-changing superconducting circuit produced paired microwaves",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 2011,
    dateDiscovered: "2011-11-16",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Chalmers University of Technology, Gothenburg (campus map proxy)",
      lat: 57.689,
      lng: 11.973,
      country: "Sweden",
    },
    discoveringOrg: "Christopher M. Wilson and the Chalmers-led research team",
    heroImage: "/images/discoveries/2011/gothenburg-superconducting-circuit-dynamical-casimir-photons.webp",
    imageAlt: "Original editorial diagram for A changing boundary generated microwaves. Circuit drive: supplied energy. Photon pairs: correlated microwave signal.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2011/gothenburg-superconducting-circuit-dynamical-casimir-photons.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A circuit whose electrical boundary changed rapidly produced pairs of microwave photons consistent with the dynamical Casimir effect.",
    story: {
      whyThere: "A rapidly moving boundary can transfer energy to a quantum field. The experiment reproduced the effect of changing the boundary in an electrical circuit, without moving a physical mirror.",
      howFound: "The team rapidly varied the circuit's effective electrical length. The applied drive supplied energy and the detector registered correlated microwave photons whose frequencies combined in the way the effect predicts.",
      whatMakesUnique: "The result gave researchers an experimental way to probe how a time-dependent boundary affects a quantum field. The effect was observed in a superconducting microwave device.",
    },
    gallery: [
      "/images/discoveries/2011/gothenburg-superconducting-circuit-dynamical-casimir-photons.webp",
    ],
    primarySourceUrl: "https://www.nature.com/articles/nature10561",
    supportingSources: [
      {
        title: "Institutional account with experiment team",
        url: "https://news.umich.edu/physicists-light-from-darkness-breakthrough-named-a-top-2011-discovery/",
        publisher: "University of Michigan",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["haifa-acoustic-horizon-hawking-temperature-analogue"],
    tags: ["superconducting circuits", "microwaves", "dynamical Casimir effect"],
  },
];
