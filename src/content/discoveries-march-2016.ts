import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2016.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2016Discoveries: Discovery[] = [
  {
    slug: "stockholm-transparent-wood-cellulose-polymer-light-transmission",
    "datePublished": "2026-11-27",
    title: "A wood-based composite could transmit visible light",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2016,
    dateDiscovered: "2016-03-04",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "KTH Royal Institute of Technology, Stockholm (research laboratory map proxy)",
      lat: 59.349,
      lng: 18.073,
      country: "Sweden",
    },
    discoveringOrg: "Yuanyuan Li, Lars Berglund and the wood composite research team",
    heroImage: "/images/discoveries/2016/stockholm-transparent-wood-cellulose-polymer-light-transmission.webp",
    imageAlt: "Original editorial diagram for Using wood as a light-transmitting framework. Porous wood: provides the internal structure. Clear polymer: fills space within that structure.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2016/stockholm-transparent-wood-cellulose-polymer-light-transmission.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A laboratory process used the porous structure of wood to make a load-bearing composite that transmitted and scattered visible light.",
    story: {
      whyThere: "Wood's cellular structure can be a useful framework for a composite. The researchers removed much of the light-absorbing material in the cell walls and filled the remaining pores with a clear polymer.",
      howFound: "The resulting samples let a substantial portion of visible light through while scattering it. The team measured both optical and mechanical performance.",
      whatMakesUnique: "The work demonstrated a light-transmitting structural material in small samples. Transparency, haze and strength depend on thickness, wood structure and the filler.",
    },
    gallery: [
      "/images/discoveries/2016/stockholm-transparent-wood-cellulose-polymer-light-transmission.webp",
    ],
    primarySourceUrl: "https://doi.org/10.1021/acs.biomac.6b00145",
    videoUrls: [],
    relatedSlugs: ["cambridge-achromatic-metalens-visible-spectrum-common-focus"],
    tags: ["wood composites", "visible light", "polymers"],
  },
];
