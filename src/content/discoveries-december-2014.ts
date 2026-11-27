import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2014.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2014Discoveries: Discovery[] = [
  {
    slug: "bardarbunga-holuhraun-segmented-magma-intrusion",
    "datePublished": "2026-11-27",
    title: "Earthquakes and Ground Motion Followed a Magma Sheet for 45 Kilometers",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 2014,
    dateDiscovered: "2014-12-15",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Bárðarbunga–Holuhraun volcanic region (intrusion-area proxy)",
      lat: 64.82,
      lng: -16.84,
      country: "Iceland",
    },
    discoveringOrg: "Freysteinn Sigmundsson, Andrew Hooper and colleagues",
    heroImage: "/images/discoveries/2014/bardarbunga-holuhraun-segmented-magma-intrusion.webp",
    imageAlt: "Original editorial diagram for A magma sheet extends in successive segments. About 45 km: estimated horizontal growth. About two weeks: period of the main lateral advance.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2014/bardarbunga-holuhraun-segmented-magma-intrusion.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Satellite radar, positioning instruments and earthquakes traced a sheet of magma that propagated laterally in steps during a 2014 Icelandic rifting event.",
    story: {
      whyThere: "Small earthquakes located the spreading disturbance, while instruments measured how the land surface moved.",
      howFound: "Together these data showed the opening of a magma sheet in successive segments over about two weeks. A fissure eruption later began near the end of the intrusion.",
      whatMakesUnique: "The record reveals the structure of a particular magma pathway. Other intrusions may terminate underground or reach the surface through different routes.",
    },
    gallery: ["/images/discoveries/2014/bardarbunga-holuhraun-segmented-magma-intrusion.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature14111",
    videoUrls: [],
    relatedSlugs: ["kilauea-summit-2018-incremental-caldera-collapse"],
    tags: ["Holuhraun", "magma intrusions", "ground deformation"],
  },
];
