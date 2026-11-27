import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2011.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2011Discoveries: Discovery[] = [
  {
    slug: "kamioka-geoneutrinos-uranium-thorium-earth-heat",
    "datePublished": "2026-11-27",
    title: "Geoneutrinos helped estimate how much heat comes from radioactive decay",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 2011,
    dateDiscovered: "2011-07-17",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Kamioka, Gifu (regional map proxy for KamLAND)",
      lat: 36.42,
      lng: 137.31,
      country: "Japan",
    },
    discoveringOrg: "KamLAND Collaboration",
    heroImage: "/images/discoveries/2011/kamioka-geoneutrinos-uranium-thorium-earth-heat.webp",
    imageAlt: "Original editorial diagram for Estimating Earth's radiogenic heat. 20 terawatts: central uranium and thorium estimate. 11.4 to 28.8: approximate uncertainty bounds in TW.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2011/kamioka-geoneutrinos-uranium-thorium-earth-heat.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "KamLAND and Borexino data gave an estimate of around 20 terawatts from uranium and thorium decay in Earth, with substantial uncertainty.",
    story: {
      whyThere: "Decay chains of uranium and thorium emit antineutrinos. Detectors deep underground can pick up some of them, and their signal provides an independent way to constrain sources of Earth's heat.",
      howFound: "The collaboration combined measurements from Kamioka, Japan, and from Borexino in Italy. For uranium-238 and thorium-232 together, the study estimated 20.0 terawatts, with lower and upper uncertainty limits around 11.4 and 28.8 terawatts.",
      whatMakesUnique: "Temperature measurements and geological models address how much heat is escaping and where it comes from. The antineutrino result narrowed one part of that budget. Other sources of planetary heat, including radioactive isotopes outside the measurement range, need separate constraints.",
    },
    gallery: ["/images/discoveries/2011/kamioka-geoneutrinos-uranium-thorium-earth-heat.webp"],
    primarySourceUrl: "https://authors.library.caltech.edu/records/1d7xt-6aa37",
    supportingSources: [
      {
        title: "Publication and context from the study team",
        url: "https://newscenter.lbl.gov/2011/07/17/kamland-geoneutrinos/",
        publisher: "Lawrence Berkeley National Laboratory",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["kaiping-juno-first-reactor-antineutrino-oscillation-results"],
    tags: ["geoneutrinos", "Earth interior", "radiogenic heat"],
  },
];
