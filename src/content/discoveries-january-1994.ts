import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 1994.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january1994Discoveries: Discovery[] = [
  {
    slug: "goddard-cobe-firas-microwave-background-blackbody",
    "datePublished": "2026-11-27",
    title: "COBE Measures a Near-Perfect Blackbody Spectrum Across the Sky",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 1994,
    dateDiscovered: "1994-01-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "NASA Goddard Space Flight Center, Greenbelt (mission-team proxy)",
      lat: 39,
      lng: -76.846,
      country: "United States",
    },
    discoveringOrg: "John C. Mather, E. S. Cheng and the COBE FIRAS team",
    heroImage: "/images/discoveries/1994/goddard-cobe-firas-microwave-background-blackbody.webp",
    imageAlt: "Original editorial diagram for A spectrum close to thermal equilibrium. 2.726 K: temperature from the 1994 analysis. 0.01%: root-mean-square deviation relative to peak.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1994/goddard-cobe-firas-microwave-background-blackbody.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Measurements from the COBE satellite showed that the microwave background closely followed a thermal spectrum. This analysis put its temperature around 2.726 kelvin.",
    story: {
      whyThere: "A blackbody has a characteristic spectrum set by its temperature. FIRAS compared the spectrum of the microwave sky with a calibrated reference to look for deviations.",
      howFound: "In the published range, the root-mean-square deviation was about one hundredth of a percent of the peak brightness. The calibration uncertainty on the reported temperature was about 0.010 kelvin at 95 percent confidence.",
      whatMakesUnique: "The small remaining deviations limited how much energy could have been added in some periods of the early universe. This was a constraint on models of departures from a thermal spectrum.",
    },
    gallery: ["/images/discoveries/1994/goddard-cobe-firas-microwave-background-blackbody.webp"],
    primarySourceUrl: "https://ntrs.nasa.gov/citations/19950040015",
    videoUrls: [],
    relatedSlugs: ["mcmurdo-boomerang-cmb-first-acoustic-peak"],
    tags: ["cosmic microwave background", "blackbody radiation", "space observatories"],
  },
];
