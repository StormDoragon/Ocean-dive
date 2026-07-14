import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2023.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2023Discoveries: Discovery[] = [
  {
    slug: "enceladus-ocean-phosphates",
    title: "Phosphates Detected in Enceladus's Ocean",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2023,
    dateDiscovered: "2023-06-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-13",
    location: {
      name: "Freie Universität Berlin, planetary sciences analysis",
      lat: 52.45,
      lng: 13.29,
      country: "Germany",
    },
    discoveringOrg: "Cassini Cosmic Dust Analyzer team / Freie Universität Berlin-led collaboration",
    scientificName: "Enceladus",
    classification: "Planetary science · Icy ocean moon geochemistry",
    heroImage: "/images/discoveries/2023/enceladus-ocean-phosphates.webp",
    imageAlt: "Original editorial cutaway illustration of Enceladus showing its icy shell, global ocean, south-polar plume, and phosphate-bearing ice grains sampled by Cassini.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "artist impression",
    imageRelation: "illustration",
    summary: "Reanalysis of ice grains sampled by NASA's Cassini spacecraft detected sodium phosphates originating from the subsurface ocean of Saturn's moon Enceladus. Phosphorus is essential to terrestrial biology, and the inferred ocean concentrations were at least comparable to, and potentially higher than, those in Earth's oceans.",
    story: {
      whyThere: "Enceladus sprays ocean-derived ice and vapour through fractures near its south pole. Cassini repeatedly crossed those plumes and Saturn's E ring, giving scientists preserved samples from an alien ocean without landing or drilling through the moon's ice shell.",
      howFound: "Researchers revisited mass spectra from Cassini's Cosmic Dust Analyzer and identified a phosphate-bearing signature in a small subset of salt-rich ice grains. Laboratory experiments with analogue Enceladus water tested whether the detected compounds could remain dissolved under the moon's alkaline, carbonate-rich conditions.",
      whatMakesUnique: "It was the first direct detection of phosphorus from an ocean beyond Earth. The finding strengthened Enceladus's chemical habitability case, but it did not detect life and does not show that biological processes are occurring there.",
    },
    gallery: ["/images/discoveries/2023/enceladus-ocean-phosphates.webp"],
    paperUrl: "https://www.nature.com/articles/s41586-023-05987-9",
    videoUrls: [],
    relatedSlugs: ["quaoar-ring-outside-roche-limit", "bennu-life-building-blocks"],
    tags: ["enceladus", "phosphates", "cassini", "ocean world", "astrobiology"],
  },
];
