import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2025.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2025Discoveries: Discovery[] = [
  {
    slug: "janjucetus-dullardi-juvenile-whale-victoria",
    "datePublished": "2026-11-26",
    title: "A Juvenile Whale Skull Reveals the Toothed Janjucetus dullardi",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Ancient mammals",
    year: 2025,
    dateDiscovered: "2025-08-12",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Jan Juc, Victoria (regional fossil-site marker)",
      lat: -38.344,
      lng: 144.304,
      country: "Australia",
    },
    discoveringOrg: "Ruairidh Duncan and colleagues, including Erich Fitzgerald at Museums Victoria",
    scientificName: "Janjucetus dullardi",
    heroImage: "/images/discoveries/2025/janjucetus-dullardi-juvenile-whale-victoria.webp",
    imageAlt: "Original editorial diagram for A young toothed whale. About 25 million years: age of the fossil. Partial skull: with teeth and ear bones.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2025/janjucetus-dullardi-juvenile-whale-victoria.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A partial skull from coastal Victoria became the basis of a newly named fossil whale, Janjucetus dullardi. The roughly 25-million-year-old specimen had teeth and belonged to a juvenile or subadult.",
    story: {
      whyThere: "The Jan Juc Marl preserves remains of several toothed whales from seas off southeastern Australia in the late Oligocene. Ross Dullard recovered the newly described specimen in 2019.",
      howFound: "Researchers compared the surviving teeth, skull fragments and structures around the ear. Measurements and micro-CT data helped distinguish the specimen from previously described mammalodontids.",
      whatMakesUnique: "The new species adds evidence for diversity among small early relatives of baleen whales. The incomplete specimen represents a young individual, so its size gives limited information about adults.",
    },
    gallery: ["/images/discoveries/2025/janjucetus-dullardi-juvenile-whale-victoria.webp"],
    paperUrl: "https://doi.org/10.1093/zoolinnean/zlaf090",
    primarySourceUrl: "https://museumsvictoria.com.au/article/big-eyes-sharp-teeth-baby-whale/",
    videoUrls: [],
    relatedSlugs: ["buchan-victoria-owens-giant-echidna"],
    tags: ["whale evolution", "Oligocene", "mammalodontids"],
  },
];
