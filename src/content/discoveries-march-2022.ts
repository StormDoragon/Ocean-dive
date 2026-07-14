import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2022.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2022Discoveries: Discovery[] = [
  {
    slug: "endurance-shipwreck-found",
    title: "Shackleton's Endurance Found in the Weddell Sea",
    categorySlug: "ocean",
    subtopic: "Shipwrecks",
    year: 2022,
    dateDiscovered: "2022-03-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-13",
    location: {
      name: "Weddell Sea, Antarctica",
      lat: -68.739167,
      lng: -52.329722,
      country: "International",
      depthMeters: 3008,
    },
    discoveringOrg: "Falklands Maritime Heritage Trust / Endurance22 Expedition",
    classification: "Maritime archaeology · Historic wooden shipwreck",
    conservationStatus: "Protected Historic Site and Monument under the Antarctic Treaty",
    heroImage: "/images/discoveries/2022/endurance-shipwreck-found.webp",
    imageAlt: "Original editorial illustration of Shackleton's Endurance resting upright on the Weddell Sea floor beneath Antarctic ice, with a depth marker of 3,008 metres.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary: "The Endurance22 expedition located Sir Ernest Shackleton's ship Endurance upright on the Weddell Sea floor at 3,008 metres, roughly four miles south of Captain Frank Worsley's recorded sinking position. The unusually intact wooden wreck was documented without being touched under Antarctic Treaty protection.",
    story: {
      whyThere: "The expedition targeted one of maritime archaeology's most difficult search zones: a remote, ice-covered sector of the Weddell Sea where Endurance was crushed and sank in 1915. Captain Worsley's navigation records defined the historical search area, while modern sea-ice and weather studies supported safe operations.",
      howFound: "Researchers deployed Saab Sabertooth hybrid underwater vehicles from the South African vessel S.A. Agulhas II. The vehicles searched beneath shifting pack ice, mapped the seabed, and transmitted imagery that revealed the ship's name, wheel, timbers, and other identifying features.",
      whatMakesUnique: "Cold, dark Antarctic water and the absence of wood-boring organisms helped preserve the wreck in exceptional condition. Its discovery closed a century-old historical search while creating a protected archaeological record rather than a salvage site.",
    },
    gallery: ["/images/discoveries/2022/endurance-shipwreck-found.webp"],
    primarySourceUrl: "https://endurance22.org/endurance-is-found/",
    supportingSources: [
      {
        title: "Endurance wreck found in Antarctic waters",
        url: "https://www.theguardian.com/world/2022/mar/09/ernest-shackleton-wrecked-ship-endurance-antarctic",
        publisher: "The Guardian",
        tier: "Tier 3",
        sourceType: "reporting",
        accessedAt: "2026-07-13",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["alaska-golden-orb-discovery", "beyond-epica-oldest-ice-core"],
    tags: ["shipwreck", "endurance", "antarctica", "weddell sea", "marine archaeology"],
  },
];
