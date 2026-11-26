import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2019.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2019Discoveries: Discovery[] = [
  {
    slug: "aguas-zarcas-carbonaceous-meteorite",
    "datePublished": "2026-11-26",
    title: "Volcano Cameras Record the Aguas Zarcas Meteorite Fall",
    categorySlug: "space",
    subtopic: "Asteroids",
    year: 2019,
    dateDiscovered: "2019-04-23",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Aguas Zarcas, San Carlos (fall-area marker)",
      lat: 10.3914,
      lng: -84.3414,
      country: "Costa Rica",
    },
    discoveringOrg: "University of Costa Rica, national monitoring networks and the Aguas Zarcas classification team",
    heroImage: "/images/discoveries/2019/aguas-zarcas-carbonaceous-meteorite.webp",
    imageAlt: "Original editorial diagram for Aguas Zarcas. CM2: carbonaceous chondrite. Two volcanoes: Poás and Turrialba recorded the event.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2019/aguas-zarcas-carbonaceous-meteorite.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A fireball tracked by Costa Rican volcano cameras dropped fragments of a carbon-rich meteorite near Aguas Zarcas. Researchers classified it as a CM2 carbonaceous chondrite.",
    story: {
      whyThere: "Both Poás and Turrialba monitoring cameras were already watching the sky when the fireball crossed Costa Rica. Witness accounts and recovered fragments put the fall near Aguas Zarcas.",
      howFound: "The cameras recorded the same event from different directions. On the ground, residents and searchers recovered dark stones including pieces that struck a house and a doghouse.",
      whatMakesUnique: "Freshly fallen samples tied to an instrumented fireball give researchers both material for laboratory studies and observations of its entry into Earth’s atmosphere.",
    },
    gallery: ["/images/discoveries/2019/aguas-zarcas-carbonaceous-meteorite.webp"],
    paperUrl: "https://doi.org/10.1111/maps.14337",
    primarySourceUrl: "https://meteorites.asu.edu/news/aguaszarcas",
    videoUrls: [],
    relatedSlugs: ["chelyabinsk-airburst-meteorites", "sutters-mill-weather-radar-meteorite"],
    tags: ["meteorites", "carbonaceous chondrites", "fireballs"],
  },
];
