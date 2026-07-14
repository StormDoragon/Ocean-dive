import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2023.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2023Discoveries: Discovery[] = [
  {
    slug: "quaoar-ring-outside-roche-limit",
    title: "Quaoar's Ring Beyond the Roche Limit",
    categorySlug: "space",
    subtopic: "Asteroids",
    year: 2023,
    dateDiscovered: "2023-02-08",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-13",
    location: {
      name: "University of Bern, CHEOPS analysis centre",
      lat: 46.95,
      lng: 7.44,
      country: "Switzerland",
    },
    discoveringOrg: "CHEOPS consortium and international stellar-occultation teams",
    scientificName: "(50000) Quaoar",
    classification: "Astronomy · Trans-Neptunian dwarf planet ring system",
    heroImage: "/images/discoveries/2023/quaoar-ring-outside-roche-limit.webp",
    imageAlt: "Original editorial astronomical diagram of Quaoar and its distant ring, with the classical Roche-limit boundary marked inside the observed ring.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Observations of the dwarf planet Quaoar revealed a dense ring far beyond the classical Roche limit, the distance inside which tidal forces are expected to prevent ring material from assembling into a moon. The ring challenges a simple rule used to explain why planetary rings persist.",
    story: {
      whyThere: "Astronomers monitored Quaoar as it passed in front of distant stars. Such stellar occultations can measure an object's size and reveal faint surrounding material through brief extra dips in starlight that ordinary imaging cannot resolve.",
      howFound: "Ground-based telescopes and ESA's CHEOPS satellite recorded repeated secondary dimmings before and after Quaoar blocked the star. Combining events from multiple dates established that the material formed a ring at roughly 4,100 kilometres from Quaoar's centre.",
      whatMakesUnique: "The ring orbits at about 7.4 Quaoar radii, more than twice the conventional Roche-limit estimate. Its survival suggests that resonances, unusual particle collisions, or other dynamics can keep material dispersed where standard models would predict moon formation.",
    },
    gallery: ["/images/discoveries/2023/quaoar-ring-outside-roche-limit.webp"],
    paperUrl: "https://www.nature.com/articles/s41586-022-05629-6",
    videoUrls: [],
    relatedSlugs: ["enceladus-ocean-phosphates", "twa-7-b-direct-imaging"],
    tags: ["quaoar", "planetary rings", "kuiper belt", "stellar occultation", "cheops"],
  },
];
