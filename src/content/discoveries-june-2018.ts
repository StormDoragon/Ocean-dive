import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2018.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2018Discoveries: Discovery[] = [
  {
    slug: "laurel-new-horizons-pluto-sputnik-planitia-methane-dunes",
    "datePublished": "2026-11-27",
    title: "New Horizons found ridges consistent with methane-ice dunes on Pluto",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2018,
    dateDiscovered: "2018-06-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Johns Hopkins Applied Physics Laboratory, Laurel, Maryland (New Horizons mission map proxy)",
      lat: 39.168,
      lng: -76.897,
      country: "United States",
    },
    discoveringOrg: "Matt W. Telfer and the New Horizons dune research team",
    heroImage: "/images/discoveries/2018/laurel-new-horizons-pluto-sputnik-planitia-methane-dunes.webp",
    imageAlt: "Original editorial diagram for Possible dunes on Pluto. Regular ridges: imaged near Sputnik Planitia. Methane ice: proposed grain material.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2018/laurel-new-horizons-pluto-sputnik-planitia-methane-dunes.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Regular ridges near the edge of Sputnik Planitia matched patterns expected from windblown ice grains on Pluto.",
    story: {
      whyThere: "New Horizons images showed parallel ridges near mountains bordering Pluto's bright plain. Their alignment and spacing resembled dunes, and nearby dark streaks supplied clues about the wind direction.",
      howFound: "The team considered whether Pluto's thin atmosphere could move grains. Methane ice particles of a size consistent with the ridge spacing provided a plausible material in their model.",
      whatMakesUnique: "The images constrain the geometry of the features. Their grain sizes and composition were inferred, and the spacecraft did not directly measure dunes moving.",
    },
    gallery: [
      "/images/discoveries/2018/laurel-new-horizons-pluto-sputnik-planitia-methane-dunes.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/29853681/",
    videoUrls: [],
    relatedSlugs: ["pasadena-cassini-titan-north-polar-methane-lake-radar-depth"],
    tags: ["Pluto", "New Horizons", "dunes"],
  },
];
