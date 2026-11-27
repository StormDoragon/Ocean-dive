import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2019.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2019Discoveries: Discovery[] = [
  {
    slug: "shatsky-rise-tamu-massif-magnetic-stripes-ridge-volcanism",
    "datePublished": "2026-11-27",
    title: "Magnetic Stripes Reframe How Tamu Massif Formed",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 2019,
    dateDiscovered: "2019-07-08",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Tamu Massif, Shatsky Rise (IODP Site U1347 map proxy)",
      lat: 32.5079,
      lng: 159.23465,
      country: "North Pacific Ocean",
    },
    discoveringOrg: "William W. Sager, Yanming Huang and colleagues",
    heroImage: "/images/discoveries/2019/shatsky-rise-tamu-massif-magnetic-stripes-ridge-volcanism.webp",
    imageAlt: "Original editorial diagram for Magnetic bands indicate how a submarine plateau grew. Linear anomalies: trace blocks of opposing polarity. Ridge volcanism: fits the measured pattern.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2019/shatsky-rise-tamu-massif-magnetic-stripes-ridge-volcanism.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Parallel magnetic anomalies across the submarine massif supported formation by volcanism along spreading ridges.",
    story: {
      whyThere: "A previous analysis had interpreted the massif’s broad shape and subsurface reflectors as the product of a single shield volcano. New mapping examined magnetic patterns across the feature.",
      howFound: "The anomalies formed largely linear bands of opposing magnetic polarity. Such patterns can develop as new rock records changes in Earth’s magnetic field while the seafloor spreads.",
      whatMakesUnique: "The 2019 paper proposed that focused volcanism along ridges built the plateau. The result leaves room for a deep magma source interacting with the ridges.",
    },
    gallery: [
      "/images/discoveries/2019/shatsky-rise-tamu-massif-magnetic-stripes-ridge-volcanism.webp",
    ],
    primarySourceUrl: "https://www.nature.com/articles/s41561-019-0390-y",
    supportingSources: [
      {
        title: "IODP Expedition 324 Site U1347 coordinates and drill reports",
        url: "https://iodp.tamu.edu/scienceops/sitesumm/324/324_drSep09.html",
        publisher: "Integrated Ocean Drilling Program",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["reykjanes-fagradalsfjall-rapid-magma-source-shift"],
    tags: ["marine magnetic anomalies", "seafloor spreading", "oceanic plateaus"],
  },
];
