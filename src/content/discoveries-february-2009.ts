import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2009.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2009Discoveries: Discovery[] = [
  {
    slug: "cerrejon-colombia-titanoboa-giant-paleocene-snake-vertebrae",
    "datePublished": "2026-11-27",
    title: "Colombian Vertebrae Revealed a Paleocene Snake Estimated at About 13 Meters",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2009,
    dateDiscovered: "2009-02-05",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Cerrejón Formation, mine area in La Guajira",
      lat: 11.06,
      lng: -72.66,
      country: "Colombia",
    },
    discoveringOrg: "Jason J. Head and the Cerrejón snake research team",
    scientificName: "Titanoboa cerrejonensis",
    heroImage: "/images/discoveries/2009/cerrejon-colombia-titanoboa-giant-paleocene-snake-vertebrae.webp",
    imageAlt: "Original editorial diagram for A giant snake estimated from bone. ~13 m: Modeled body length. Paleocene: Age of the fossil beds.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2009/cerrejon-colombia-titanoboa-giant-paleocene-snake-vertebrae.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Large vertebrae from the Cerrejón Formation supported the description of Titanoboa cerrejonensis and a body length estimate of about 13 meters.",
    story: {
      whyThere: "Fossil collecting in an open-pit coal mine recovered snake bones from sediment deposited in a Paleocene tropical environment. Their shape placed the animal among relatives of boas.",
      howFound: "The team estimated body length by comparing vertebrae with those of living snakes. The result showed that snakes reached exceptional sizes in the aftermath of the end-Cretaceous extinction.",
      whatMakesUnique: "The length is inferred from comparative anatomy. The map represents the Cerrejón mining and fossil region in northern Colombia.",
    },
    gallery: [
      "/images/discoveries/2009/cerrejon-colombia-titanoboa-giant-paleocene-snake-vertebrae.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/19194448/",
    supportingSources: [
      {
        title: "Smithsonian account of the Cerrejón discovery",
        url: "https://www.si.edu/newsdesk/releases/world-s-largest-snake-discovered-fossilized-rainforest",
        publisher: "Smithsonian Institution",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["miguasha-quebec-elpistostege-finger-like-bones-inside-fin"],
    tags: ["Titanoboa", "Paleocene", "Giant snakes", "Cerrejón Formation"],
  },
];
