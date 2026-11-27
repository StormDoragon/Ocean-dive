import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2006.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2006Discoveries: Discovery[] = [
  {
    slug: "daohugou-volaticotherium-gliding-membrane",
    "datePublished": "2026-11-27",
    title: "A Mammal Fossil From Daohugou Preserved Its Gliding Membrane",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2006,
    dateDiscovered: "2006-12-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Daohugou, Inner Mongolia (fossil-region proxy)",
      lat: 41.3,
      lng: 119.2,
      country: "China",
    },
    discoveringOrg: "Jin Meng, Yaoming Hu, Yuanqing Wang and colleagues",
    scientificName: "Volaticotherium antiquum",
    heroImage: "/images/discoveries/2006/daohugou-volaticotherium-gliding-membrane.webp",
    imageAlt: "Original editorial diagram for A preserved membrane supports a gliding interpretation. Furry membrane: leaves an outline in the rock. Expanded surface: would help the animal glide.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2006/daohugou-volaticotherium-gliding-membrane.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A fossil of Volaticotherium antiquum retained the outline of a furry membrane between parts of the body and limbs, providing evidence for gliding in a Mesozoic mammal.",
    story: {
      whyThere: "Fine sediment preserved more than the skeleton. It left an impression of a broad structure that extended from the body.",
      howFound: "The researchers compared the membrane and anatomy with adaptations seen in other gliding animals. The broad surface would increase the ability to slow a fall and move through the air.",
      whatMakesUnique: "The fossil supports gliding. It does not show powered flight or establish the precise way the animal controlled its movements.",
    },
    gallery: ["/images/discoveries/2006/daohugou-volaticotherium-gliding-membrane.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature05234",
    supportingSources: [
      {
        title: "Publisher correction to the original description",
        url: "https://www.nature.com/articles/nature05639",
        publisher: "Nature",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["las-hoyas-spinolestes-early-mammal-hair-and-spines"],
    tags: ["gliding mammals", "flight membranes", "Mesozoic fossils"],
  },
];
