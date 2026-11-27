import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2008.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2008Discoveries: Discovery[] = [
  {
    slug: "north-grip-ice-core-moisture-sources-abrupt-switch",
    "datePublished": "2026-11-27",
    title: "Greenland Ice Shows Moisture Sources Shifting Within Years",
    categorySlug: "earth-science",
    subtopic: "Ice cores",
    year: 2008,
    dateDiscovered: "2008-06-19",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "North Greenland Ice Core Project station (core site)",
      lat: 75.1,
      lng: -42.32,
      country: "Greenland",
    },
    discoveringOrg: "Jørgen Peder Steffensen, Katrine K. Andersen and colleagues",
    heroImage: "/images/discoveries/2008/north-grip-ice-core-moisture-sources-abrupt-switch.webp",
    imageAlt: "Original editorial diagram for Two signals in the ice changed at different rates. 1–3 years: moisture-source indicator switched. About 50 years: longer trend in the temperature indicator.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2008/north-grip-ice-core-moisture-sources-abrupt-switch.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A chemical indicator in NorthGRIP ice shifted in one to three years during rapid climate transitions near the end of the last ice age.",
    story: {
      whyThere: "The core preserved variations in water isotopes and deposited dust. Researchers examined thin layers across two warmings and the intervening Younger Dryas cooling.",
      howFound: "One isotope measure, deuterium excess, records influences from the region where the moisture evaporated. It shifted over a few years, while the corresponding local temperature signal changed over a longer period.",
      whatMakesUnique: "The two signals distinguish changes in the source of snowfall from local warming. The proposed atmospheric circulation mechanism was an interpretation of those timing differences.",
    },
    gallery: ["/images/discoveries/2008/north-grip-ice-core-moisture-sources-abrupt-switch.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/18566247/",
    supportingSources: [
      {
        title: "NGRIP drilling site and archived data",
        url: "https://doi.pangaea.de/10.1594/PANGAEA.586886",
        publisher: "North Greenland Ice Core Project",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["dome-c-epica-ice-core-eight-glacial-cycles"],
    tags: ["Greenland ice cores", "water isotopes", "abrupt climate change"],
  },
];
