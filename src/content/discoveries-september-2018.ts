import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2018.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2018Discoveries: Discovery[] = [
  {
    slug: "peten-guatemala-pacunam-lidar-maya-landscape-61480",
    "datePublished": "2026-11-27",
    title: "A Regional LiDAR Survey Maps More Than 61,000 Maya Structures",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2018,
    dateDiscovered: "2018-09-28",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Petén, northern Guatemala (regional survey proxy)",
      lat: 17.18,
      lng: -89.66,
      country: "Guatemala",
    },
    discoveringOrg: "Marcello A. Canuto, Francisco Estrada-Belli, Thomas G. Garrison and colleagues",
    heroImage: "/images/discoveries/2018/peten-guatemala-pacunam-lidar-maya-landscape-61480.webp",
    imageAlt: "Original editorial diagram for A regional view of the built Maya landscape. 61,480: structures counted in the survey. 2,144 km²: area covered across northern Guatemala.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2018/peten-guatemala-pacunam-lidar-maya-landscape-61480.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Airborne elevation mapping in northern Guatemala documented settlement, farmland and infrastructure across several separate Maya survey areas.",
    story: {
      whyThere: "Laser measurements produced terrain maps even where forest canopy hid the ground. Researchers used those maps with archaeological observations to identify 61,480 structures across the surveyed areas.",
      howFound: "The maps also disclosed features such as agricultural works and roads connecting settlements. Evidence from several survey blocks helped show that the landscape between major centers was extensively used.",
      whatMakesUnique: "The mapped structures are a count of identified features, while population estimates require assumptions about building function, age and occupancy.",
    },
    gallery: ["/images/discoveries/2018/peten-guatemala-pacunam-lidar-maya-landscape-61480.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/30262469/",
    supportingSources: [
      {
        title: "Full survey report",
        url: "https://www.sciencemagazinedigital.org/sciencemagazine/28_september_2018-open/MobilePagedArticle.action?articleId=1428757",
        publisher: "Science",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["supe-valley-caral-radiocarbon-monumental-architecture"],
    tags: ["lidar archaeology", "Maya archaeology", "settlement surveys"],
  },
];
