import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2017.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2017Discoveries: Discovery[] = [
  {
    slug: "southwest-pacific-zealandia-connected-submerged-continent",
    "datePublished": "2026-11-27",
    title: "Geological evidence linked Zealandia’s islands and plateaus into one continent",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2017,
    dateDiscovered: "2017-02-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Southwest Pacific near Aotearoa New Zealand (regional map proxy for Zealandia)",
      lat: -39,
      lng: 176,
      country: "New Zealand",
    },
    discoveringOrg: "Nick Mortimer and the Zealandia geology collaboration",
    heroImage: "/images/discoveries/2017/southwest-pacific-zealandia-connected-submerged-continent.webp",
    imageAlt: "Original editorial diagram for A mainly submerged continent. Rock and geophysical evidence: linked the islands and plateaus. About 94 percent: lies below sea level.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2017/southwest-pacific-zealandia-connected-submerged-continent.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A synthesis of rock and geophysical evidence described a coherent block of continental crust, about 94 percent of it beneath the sea.",
    story: {
      whyThere: "New Zealand and New Caledonia rise above a surrounding network of ridges and plateaus. Researchers studied the crust under those features to determine whether they form a connected geological region.",
      howFound: "Nick Mortimer and colleagues combined rock samples, depth maps and geophysical estimates of crustal structure. They argued that Zealandia is a coherent stretch of continental crust separated from Australia.",
      whatMakesUnique: "The mapped continent is mostly submerged, largely because its crust was thinned during the breakup of Gondwana. Describing its boundaries helps reconstruct the history of the southwest Pacific.",
    },
    gallery: [
      "/images/discoveries/2017/southwest-pacific-zealandia-connected-submerged-continent.webp",
    ],
    primarySourceUrl: "https://www.geosociety.org/gsa-today/march-april-2017/zealandia-earths-hidden-continent",
    supportingSources: [
      {
        title: "Participating research institute’s release",
        url: "https://www.gns.cri.nz/news/new-hidden-continent-mostly-underwater-scientists-say/",
        publisher: "GNS Science",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["arguin-bay-mauritania-buried-saharan-paleoriver"],
    tags: ["Zealandia", "continental crust", "gondwana"],
  },
];
