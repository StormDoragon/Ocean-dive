import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2022.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2022Discoveries: Discovery[] = [
  {
    slug: "south-china-fanjingshania-silurian-scales-fin-spines",
    "datePublished": "2026-11-27",
    title: "Fossil spines added evidence of early jawed vertebrates",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2022,
    dateDiscovered: "2022-09-28",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Shiqian County, Guizhou (regional map proxy for the Shiqian–Tunping fossil beds)",
      lat: 27.5,
      lng: 108.233,
      country: "China",
    },
    discoveringOrg: "Plamen S. Andreev and the early jawed vertebrate study team",
    scientificName: "Fanjingshania renovata",
    heroImage: "/images/discoveries/2022/south-china-fanjingshania-silurian-scales-fin-spines.webp",
    imageAlt: "Original editorial diagram for Early evidence from scales and spines. Early Silurian: age of the source beds. Hard tissues: helped identify the lineage.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2022/south-china-fanjingshania-silurian-scales-fin-spines.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Early Silurian scales and spines from South China were assigned to Fanjingshania, an early relative of cartilaginous fishes.",
    story: {
      whyThere: "Identifying the earliest jawed vertebrates often depends on small hard parts. A bone bed in the Rongxi Formation near Leijiatun yielded many scales, fin spines and bony plates.",
      howFound: "Microscopic structure and the arrangement of hard tissues helped the team recognize a new taxon, Fanjingshania renovata. Its mix of traits put it near the early branch of jawed vertebrates that includes modern sharks and rays.",
      whatMakesUnique: "The fossils extend the physical record of that branch deep into the Silurian. Relationships are inferred from anatomical details preserved in the fragments.",
    },
    gallery: ["/images/discoveries/2022/south-china-fanjingshania-silurian-scales-fin-spines.webp"],
    primarySourceUrl: "https://www.nature.com/articles/s41586-022-05233-8",
    supportingSources: [
      {
        title: "Institutional author manuscript",
        url: "https://research.birmingham.ac.uk/files/177140873/Fanjingshania_2021_08_13985B.pdf",
        publisher: "University of Birmingham",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
      {
        title: "Specimen locality and anatomical interpretation",
        url: "https://english.cas.cn/newsroom/news--archives/2022/research-news/202209/t20220928_1125931.shtml",
        publisher: "Chinese Academy of Sciences",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["mazon-creek-tully-monster-3d-anatomy-vertebrate-debate"],
    tags: ["Silurian", "jawed vertebrates", "fin spines"],
  },
];
