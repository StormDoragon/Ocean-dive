import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2011.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2011Discoveries: Discovery[] = [
  {
    slug: "tohoku-offshore-seafloor-geodesy-24-metre-displacement",
    "datePublished": "2026-11-27",
    title: "Offshore Measurements Record 24 Metres of Seafloor Motion in the Tōhoku Earthquake",
    categorySlug: "earth-science",
    subtopic: "Earthquakes",
    year: 2011,
    dateDiscovered: "2011-05-19",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Pacific off northeastern Honshu (earthquake source-region proxy)",
      lat: 38.103,
      lng: 142.86,
      country: "Japan",
    },
    discoveringOrg: "Mariko Sato, Tadashi Ishikawa and the Japan Coast Guard team",
    heroImage: "/images/discoveries/2011/tohoku-offshore-seafloor-geodesy-24-metre-displacement.webp",
    imageAlt: "Original editorial diagram for Positioning instruments trace motion offshore. About 24 m: largest reported sideways displacement. Nearly 3 m: uplift at the site.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2011/tohoku-offshore-seafloor-geodesy-24-metre-displacement.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "GPS and acoustic positioning measured exceptionally large sideways displacement near the source of the 2011 megathrust earthquake.",
    story: {
      whyThere: "Land stations sampled only one side of the plate boundary. Offshore measurements used acoustic positioning below the sea surface linked to GPS at the surface.",
      howFound: "The largest measured seafloor shift was about 24 metres toward the east-southeast, with uplift of nearly three metres. Movement measured at some offshore sites exceeded that seen on land.",
      whatMakesUnique: "The result measures displacement of the seabed at these observing points. Slippage across the fault itself is a related quantity that researchers derive from models.",
    },
    gallery: ["/images/discoveries/2011/tohoku-offshore-seafloor-geodesy-24-metre-displacement.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/21596950/",
    supportingSources: [
      {
        title: "Offshore and onshore coseismic deformation and source coordinates",
        url: "https://www.gsi.go.jp/cais/topic110520-index-e.html",
        publisher: "Geospatial Information Authority of Japan",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["central-alaska-denali-earthquake-gps-fault-slip"],
    tags: ["seafloor geodesy", "megathrust earthquakes", "acoustic positioning"],
  },
];
