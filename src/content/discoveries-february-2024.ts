import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2024.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2024Discoveries: Discovery[] = [
  {
    slug: "mcmurdo-colossendeis-megalonyx-attached-egg-patches",
    "datePublished": "2026-11-27",
    title: "Giant Antarctic sea spiders left their eggs on the bottom",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2024,
    dateDiscovered: "2024-02-11",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "McMurdo Sound, Antarctica (regional map proxy for field collection)",
      lat: -77.78,
      lng: 166.2,
      country: "Antarctica",
    },
    discoveringOrg: "Amy L. Moran and the Antarctic sea-spider research team",
    scientificName: "Colossendeis megalonyx",
    heroImage: "/images/discoveries/2024/mcmurdo-colossendeis-megalonyx-attached-egg-patches.webp",
    imageAlt: "Original editorial diagram for Egg patches on the seabed. Giant Antarctic sea spider: observed after collection under ice. Attached eggs: developed on the substrate.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2024/mcmurdo-colossendeis-megalonyx-attached-egg-patches.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Observations of animals collected under Antarctic ice showed that the eggs develop on the seabed, with a parent attaching them to the substrate.",
    story: {
      whyThere: "Sea spiders are marine arthropods. In many species a male carries developing eggs, but researchers had not seen what giant Antarctic sea spiders do with their eggs.",
      howFound: "Amy Moran and colleagues watched groups of Colossendeis megalonyx collected during fieldwork in Antarctica. In tanks, a parent attached many small eggs to the bottom, where they developed into larvae over several months.",
      whatMakesUnique: "The team could only infer which parent deposited the eggs. The egg patches soon became difficult to see, suggesting why field observations have been scarce.",
    },
    gallery: ["/images/discoveries/2024/mcmurdo-colossendeis-megalonyx-attached-egg-patches.webp"],
    paperUrl: "https://doi.org/10.1002/ecy.4258",
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/38343147/",
    supportingSources: [
      {
        title: "Research-team account of the observations",
        url: "https://www.hawaii.edu/news/2024/02/18/giant-antarctic-sea-spiders/",
        publisher: "University of Hawaiʻi",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: [
      "chilean-margin-amphipods-attached-deep-sea-spiders",
      "dorado-outcrop-costa-rica-deep-sea-octopus-eggs-hatched",
    ],
    tags: ["sea spiders", "animal development", "antarctica"],
  },
];
