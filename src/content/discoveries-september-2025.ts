import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2025.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2025Discoveries: Discovery[] = [
  {
    slug: "uruguay-cold-water-coral-reef-mounds",
    title: "Video Surveys Reveal Large Cold-Water Coral Reefs off Uruguay",
    categorySlug: "ocean",
    subtopic: "Coral reefs",
    year: 2025,
    dateDiscovered: "2025-09-29",
    reviewStatus: "source-verified",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Montevideo (shore proxy for offshore survey)",
      lat: -34.9,
      lng: -56.16,
      country: "Uruguay",
    },
    discoveringOrg: "Alvar Carranza and the Uruguay-led Schmidt Ocean Institute expedition team",
    heroImage: "/images/discoveries/2025/uruguay-cold-water-coral-reef-mounds.webp",
    imageAlt: "Original editorial diagram for Cold-water reefs off Uruguay. 1.3 km²: area of one reef complex. 40 metres: height of tallest reported mound.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2025/uruguay-cold-water-coral-reef-mounds.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A deep-sea expedition recorded extensive reefs built by Desmophyllum pertusum. One reef complex mapped and filmed off Uruguay covered about 1.3 square kilometres.",
    story: {
      whyThere: "Currents carrying different water masses meet along Uruguay's continental margin. Earlier mapping had detected reef structures, but images were needed to assess the living habitat.",
      howFound: "SuBastian dives recorded corals and associated animals at sites along submarine canyons. One large reef was about 300 metres down, and the tallest mound measured 40 metres.",
      whatMakesUnique: "The first close views show that these structures provide habitat for many animals and reveal their condition at the time surveyed. The findings support closer evaluation of vulnerable marine areas.",
    },
    gallery: ["/images/discoveries/2025/uruguay-cold-water-coral-reef-mounds.webp"],
    primarySourceUrl: "https://schmidtocean.org/vibrant-coral-reefs-discovered-in-historic-exploration-of-uruguays-deep-sea/",
    videoUrls: [],
    relatedSlugs: ["trinidad-tobago-deep-sea-cold-seeps"],
    tags: ["coral reefs", "Uruguay", "deep sea", "continental margin"],
  },
];
