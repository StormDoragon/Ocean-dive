import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2020.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2020Discoveries: Discovery[] = [
  {
    slug: "nilpena-south-australia-ikaria-wariootia-trackmaker",
    "datePublished": "2026-11-27",
    title: "Small Ediacaran fossils suggested an early maker of burrows",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2020,
    dateDiscovered: "2020-03-23",
    reviewStatus: "preliminary",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Nilpena region, South Australia (regional map proxy for the Ediacara fossil beds)",
      lat: -30.94,
      lng: 138.37,
      country: "Australia",
    },
    discoveringOrg: "Scott D. Evans and the Ikaria study team",
    scientificName: "Ikaria wariootia",
    heroImage: "/images/discoveries/2020/nilpena-south-australia-ikaria-wariootia-trackmaker.webp",
    imageAlt: "Original editorial diagram for An early candidate for a trace-maker. Small body fossils: preserved as impressions. Nearby traces: consistent with a mover of that size.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2020/nilpena-south-australia-ikaria-wariootia-trackmaker.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Small oval fossils from South Australia match the size and shape expected for a possible early bilaterian trackmaker.",
    story: {
      whyThere: "Ediacaran rocks preserve narrow traces left by moving organisms. Identifying the animal that made a trace is difficult when its body is absent.",
      howFound: "The team described small fossils it called Ikaria wariootia. The fossils have distinguishable ends, and their size fits nearby traces thought to have been made by an animal moving through sediment.",
      whatMakesUnique: "The match supports a candidate for an early animal with bilateral organization. The trace-maker association comes from matching observations, and living internal tissues are unavailable for comparison.",
    },
    gallery: ["/images/discoveries/2020/nilpena-south-australia-ikaria-wariootia-trackmaker.webp"],
    paperUrl: "https://doi.org/10.1073/pnas.2001045117",
    primarySourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7149385/",
    supportingSources: [
      {
        title: "Research-program account of the finding",
        url: "https://astrobiology.nasa.gov/news/earths-oldest-bilaterian/",
        publisher: "NASA Astrobiology",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["yangtze-gorges-yilingia-segmented-animal-preserved-trail"],
    tags: ["Ediacaran", "trace fossils", "early animals"],
  },
];
