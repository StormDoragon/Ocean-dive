import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 1997.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december1997Discoveries: Discovery[] = [
  {
    slug: "innsbruck-photon-polarization-quantum-teleportation",
    "datePublished": "2026-11-27",
    title: "A Photon Experiment Transferred a Polarization State Using Entanglement",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1997,
    dateDiscovered: "1997-12-11",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Innsbruck (research-team proxy)",
      lat: 47.263,
      lng: 11.385,
      country: "Austria",
    },
    discoveringOrg: "Dik Bouwmeester, Jian-Wei Pan, Klaus Mattle and colleagues",
    heroImage: "/images/discoveries/1997/innsbruck-photon-polarization-quantum-teleportation.webp",
    imageAlt: "Original editorial diagram for A joint measurement transfers a polarization state. Entangled photons: provide the shared resource. Selected outcomes: identify when the transfer can be tested.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1997/innsbruck-photon-polarization-quantum-teleportation.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The researchers used entanglement and a joint measurement to transfer the state of a photon’s polarization to another photon in selected detection events.",
    story: {
      whyThere: "The experiment prepared an input photon and an entangled pair. A joint measurement combined information about the input and one member of the pair.",
      howFound: "For the detected events associated with the successful joint outcome, measurements on the other member were consistent with the chosen input polarization.",
      whatMakesUnique: "The experiment transfers information about a quantum state. Interpreting the outcome still depends on conventional information about which joint measurement happened.",
    },
    gallery: ["/images/discoveries/1997/innsbruck-photon-polarization-quantum-teleportation.webp"],
    primarySourceUrl: "https://www.nature.com/articles/37539",
    videoUrls: [],
    relatedSlugs: ["cambridge-shapiro-microwave-voltage-steps"],
    tags: ["quantum teleportation", "Photon polarization", "Entanglement"],
  },
];
