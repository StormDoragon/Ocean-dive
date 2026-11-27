import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 1998.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august1998Discoveries: Discovery[] = [
  {
    slug: "kamioka-super-kamiokande-atmospheric-muon-neutrino-oscillation",
    "datePublished": "2026-11-27",
    title: "Atmospheric Muon Neutrinos Went Missing on Longer Paths",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 1998,
    dateDiscovered: "1998-08-24",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Super-Kamiokande detector, Kamioka",
      lat: 36.43,
      lng: 137.31,
      country: "Japan",
    },
    discoveringOrg: "Super-Kamiokande Collaboration",
    heroImage: "/images/discoveries/1998/kamioka-super-kamiokande-atmospheric-muon-neutrino-oscillation.webp",
    imageAlt: "Original editorial diagram for A deficit by direction. 535 days: Observation period. Kamioka: Detector site.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1998/kamioka-super-kamiokande-atmospheric-muon-neutrino-oscillation.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Super-Kamiokande recorded a deficit of atmospheric muon neutrinos that depended on their direction of arrival. Neutrino flavor oscillation explained the zenith-angle pattern.",
    story: {
      whyThere: "Atmospheric collisions create neutrinos above a detector and on the far side of the planet. Particles arriving from those directions travel very different distances before their interactions become visible in the underground detector.",
      howFound: "Across 535 days of data, the team measured fewer muon neutrino events on paths passing through Earth than calculations predicted. The directional variation helped identify a change during flight.",
      whatMakesUnique: "The analysis provided evidence for oscillation and for differences in neutrino masses. The map marks the Japanese detector site.",
    },
    gallery: [
      "/images/discoveries/1998/kamioka-super-kamiokande-atmospheric-muon-neutrino-oscillation.webp",
    ],
    primarySourceUrl: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.81.1562",
    videoUrls: [],
    relatedSlugs: ["sudbury-sno-neutral-current-solar-neutrino-flavor-measurement"],
    tags: [
      "Neutrino oscillation",
      "Atmospheric neutrinos",
      "Super-Kamiokande",
      "particle physics",
    ],
  },
];
