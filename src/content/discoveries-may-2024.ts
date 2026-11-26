import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2024.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2024Discoveries: Discovery[] = [
  {
    slug: "namibe-basin-south-atlantic-opening",
    "datePublished": "2026-11-26",
    title: "Volcanic Rocks and Fossils Trace the Opening of the South Atlantic",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 2024,
    dateDiscovered: "2024-05-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Namibe Basin, southwestern Angola (regional field marker)",
      lat: -15.19,
      lng: 12.17,
      country: "Angola",
    },
    discoveringOrg: "Louis L. Jacobs and the Projecto PaleoAngola research team",
    heroImage: "/images/discoveries/2024/namibe-basin-south-atlantic-opening.webp",
    imageAlt: "Original editorial diagram for Namibe Basin. About 130 million years: older end of the regional record. About 71 million years: younger marine rocks and fossils.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2024/namibe-basin-south-atlantic-opening.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A study of coastal Angola connected rocks and marine fossils to successive stages of the South Atlantic opening. The onshore exposures record rifting, volcanism and a widening sea.",
    story: {
      whyThere: "Southwestern Angola lay beside South America before the two continents separated. The Namibe Basin exposes strata from several stages of the separation in one coastal region.",
      howFound: "The team compared volcanic deposits, faults and sediments with fossils from later marine settings. The integrated record spans roughly 130 to 71 million years ago.",
      whatMakesUnique: "The study shows how the regional record links changes in the shape of the basin to the animals that subsequently lived in its waters.",
    },
    gallery: ["/images/discoveries/2024/namibe-basin-south-atlantic-opening.webp"],
    primarySourceUrl: "https://www.smu.edu/news/research/angola-geology-reveals-ancient-africa-south-america-split",
    videoUrls: [],
    relatedSlugs: ["romanche-sunken-fossil-coral-atoll"],
    tags: ["plate tectonics", "south atlantic", "sedimentary basins"],
  },
];
