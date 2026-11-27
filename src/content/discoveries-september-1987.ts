import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 1987.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september1987Discoveries: Discovery[] = [
  {
    slug: "rochester-kodak-organic-thin-film-light-emitting-diode",
    "datePublished": "2026-11-27",
    title: "Stacked Organic Films Make a Bright Light-Emitting Diode",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 1987,
    dateDiscovered: "1987-09-21",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Eastman Kodak Research Laboratories, Rochester (laboratory proxy)",
      lat: 43.21,
      lng: -77.63,
      country: "United States",
    },
    discoveringOrg: "Ching W. Tang and Steven A. Van Slyke",
    heroImage: "/images/discoveries/1987/rochester-kodak-organic-thin-film-light-emitting-diode.webp",
    imageAlt: "Original editorial diagram for Light from an interface between organic layers. Two films: carried different types of charge. About 1%: external quantum efficiency in the report.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1987/rochester-kodak-organic-thin-film-light-emitting-diode.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "An organic diode used two thin layers to bring electrical charges together where light could be emitted.",
    story: {
      whyThere: "Separate organic layers helped transport different types of charge. In the device, these charges met close to the boundary between the two layers and produced light.",
      howFound: "The team measured external quantum efficiency around one percent in the laboratory example. The thin films also allowed the device to operate at a relatively low voltage.",
      whatMakesUnique: "The experiment showed how separating charge transport into layers could improve electrically driven organic light emission. Later work could change those layers for other colors and operating conditions.",
    },
    gallery: ["/images/discoveries/1987/rochester-kodak-organic-thin-film-light-emitting-diode.webp"],
    primarySourceUrl: "https://pubs.aip.org/aip/apl/article/51/12/913/1023099/Organic-electroluminescent-diodes",
    videoUrls: [],
    relatedSlugs: ["anan-nichia-bright-blue-450-nm-led"],
    tags: ["organic light-emitting diodes", "thin films", "optical materials"],
  },
];
