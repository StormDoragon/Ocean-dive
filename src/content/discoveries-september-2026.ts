import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2026.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2026Discoveries: Discovery[] = [
  {
    slug: "madagascar-livestock-spread-forest-change",
    "datePublished": "2026-11-26",
    title: "Cattle Bones Track Madagascar’s Past Shift Toward Grasslands",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2026,
    dateDiscovered: "2026-09-23",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Antananarivo (island-wide study proxy)",
      lat: -18.8792,
      lng: 47.5079,
      country: "Madagascar",
    },
    discoveringOrg: "Sean Hixon, Leanne Phelps, Ricardo Fernandes and collaborators",
    heroImage: "/images/discoveries/2026/madagascar-livestock-spread-forest-change.webp",
    imageAlt: "Original editorial diagram for Livestock and changing land. About 1,200 years ago: estimated livestock introduction. Bones and pollen: record diet and vegetation changes.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2026/madagascar-livestock-spread-forest-change.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Radiocarbon dates and bone chemistry suggest that introduced livestock spread quickly across Madagascar and increasingly grazed on grasses as the island's forests fragmented.",
    story: {
      whyThere: "Bones of introduced livestock and records of pollen preserve different sides of the island's land-use history. The authors brought these lines of evidence together to investigate changes over roughly the past millennium.",
      howFound: "Radiocarbon dating supplied the timing of the animal remains. Stable isotopes in cattle bone protein tracked shifts in diet, while pollen studies supplied a comparison with vegetation change.",
      whatMakesUnique: "The records link pastoral expansion with more open landscapes and place possible habitat loss in the history of endemic megafauna. Their timing alone cannot determine how much forest change livestock caused.",
    },
    gallery: ["/images/discoveries/2026/madagascar-livestock-spread-forest-change.webp"],
    paperUrl: "https://doi.org/10.1098/rspb.2026.0668",
    primarySourceUrl: "https://www.gea.mpg.de/242422/spread-of-livestock-in-madagascar-deforestation-disappearance-large-herbivores",
    videoUrls: [],
    relatedSlugs: ["yeghegis-copper-age-local-herding", "rodhals-man-isotopes-farming-transition"],
    tags: ["pastoralism", "stable isotopes", "land use"],
  },
];
