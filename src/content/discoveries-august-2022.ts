import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2022.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2022Discoveries: Discovery[] = [
  {
    slug: "mbire-zimbabwe-mbiresaurus-raathi-triassic-dinosaur",
    "datePublished": "2026-11-27",
    title: "A Zimbabwean skeleton documented an early African dinosaur",
    categorySlug: "dinosaurs-fossils",
    subtopic: "New dinosaur species",
    year: 2022,
    dateDiscovered: "2022-08-31",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Mbire District, northern Zimbabwe (regional map proxy for the fossil area)",
      lat: -16.1,
      lng: 30.65,
      country: "Zimbabwe",
    },
    discoveringOrg: "Christopher T. Griffin and the Zimbabwe Triassic fossil team",
    scientificName: "Mbiresaurus raathi",
    heroImage: "/images/discoveries/2022/mbire-zimbabwe-mbiresaurus-raathi-triassic-dinosaur.webp",
    imageAlt: "Original editorial diagram for An early dinosaur from Zimbabwe. Late Triassic: age of the fossil-bearing rock. Mbiresaurus: an early sauropodomorph.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2022/mbire-zimbabwe-mbiresaurus-raathi-triassic-dinosaur.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A Late Triassic skeleton from Zimbabwe provided the basis for Mbiresaurus raathi, an early long-necked dinosaur relative.",
    story: {
      whyThere: "Late Triassic strata in northern Zimbabwe preserve vertebrate fossils from near the beginning of dinosaur evolution. A relatively complete skeleton gave researchers more features to compare than isolated bones would provide.",
      howFound: "The team identified Mbiresaurus raathi as an early sauropodomorph, a branch that later included giant long-necked dinosaurs. The Zimbabwean fossils added an African site to comparisons with early dinosaur finds on other parts of ancient Pangaea.",
      whatMakesUnique: "The distribution supports the idea that climatic zones helped shape where early dinosaurs lived. Differences in fossil preservation and sampling also affect the map.",
    },
    gallery: ["/images/discoveries/2022/mbire-zimbabwe-mbiresaurus-raathi-triassic-dinosaur.webp"],
    primarySourceUrl: "https://www.nature.com/articles/s41586-022-05133-x",
    supportingSources: [
      {
        title: "Research funder’s account of the fieldwork",
        url: "https://www.nsf.gov/science-matters/international-team-finds-oldest-known-dinosaur-fossil-africa",
        publisher: "U.S. National Science Foundation",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["fort-mcmurray-borealopelta-armour-pigment-and-pattern"],
    tags: ["sauropodomorphs", "triassic", "Zimbabwe fossils"],
  },
];
