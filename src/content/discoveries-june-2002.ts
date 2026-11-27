import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2002.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2002Discoveries: Discovery[] = [
  {
    slug: "sudbury-sno-neutral-current-solar-neutrino-flavor-measurement",
    "datePublished": "2026-11-27",
    title: "Heavy Water Revealed the Solar Neutrinos That Changed Flavor",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 2002,
    dateDiscovered: "2002-06-13",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Sudbury Neutrino Observatory mine site",
      lat: 46.471,
      lng: -81.187,
      country: "Canada",
    },
    discoveringOrg: "Sudbury Neutrino Observatory Collaboration",
    heroImage: "/images/discoveries/2002/sudbury-sno-neutral-current-solar-neutrino-flavor-measurement.webp",
    imageAlt: "Original editorial diagram for A full solar neutrino count. 5.3 σ: Other active flavors. Boron-8: Solar source.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2002/sudbury-sno-neutral-current-solar-neutrino-flavor-measurement.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The Sudbury Neutrino Observatory measured the electron and total active components of the solar neutrino flux separately. The data revealed a 5.3-standard-deviation contribution from the other active flavors.",
    story: {
      whyThere: "The detector’s heavy water supported different reactions. Some were specific to electron neutrinos, while another was sensitive to all three active flavors.",
      howFound: "The total flux was consistent with the solar model prediction, and the electron component accounted for only part of it. This tied the long-observed solar neutrino deficit to a change in flavor.",
      whatMakesUnique: "The comparison applied to boron-8 solar neutrinos in the energy range of the analysis. The map marks the Sudbury mine site that housed the detector.",
    },
    gallery: [
      "/images/discoveries/2002/sudbury-sno-neutral-current-solar-neutrino-flavor-measurement.webp",
    ],
    primarySourceUrl: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.89.011301",
    videoUrls: [],
    relatedSlugs: ["batavia-fermilab-donut-first-direct-tau-neutrino-interactions"],
    tags: ["solar neutrinos", "Neutrino oscillation", "Heavy water", "particle physics"],
  },
];
