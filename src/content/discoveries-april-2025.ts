import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2025.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2025Discoveries: Discovery[] = [
  {
    slug: "bd05-4868-disintegrating-rocky-planet",
    title: "Changing Transits Reveal a Rocky Planet with a Long Dust Tail",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2025,
    dateDiscovered: "2025-04-22",
    reviewStatus: "source-verified",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "MIT Kavli Institute, Cambridge (TESS science team proxy)",
      lat: 42.359,
      lng: -71.092,
      country: "United States",
    },
    discoveringOrg: "Marc Hon and the MIT-led TESS research team",
    heroImage: "/images/discoveries/2025/bd05-4868-disintegrating-rocky-planet.webp",
    imageAlt: "Original editorial diagram for BD+05 4868 Ab. 30.5 hours: time for one orbit. Up to 9 million km: modelled extent of the dust tail.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2025/bd05-4868-disintegrating-rocky-planet.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The planet BD+05 4868 Ab periodically dims its star, but the dips vary and extend in time. The pattern points to dust released from a rocky planet in a very close orbit.",
    story: {
      whyThere: "TESS detected a recurring change in the light from a star in Pegasus. The dip arrived regularly, but its shape was unlike that of a solid planet simply crossing the stellar disc.",
      howFound: "The team studied the dimming profiles to infer how dust is spread along the orbit. They estimated that the trailing material could extend millions of kilometres.",
      whatMakesUnique: "Dust leaving the planet gives astronomers a way to examine material that would ordinarily remain inaccessible. The tail length comes from modelling the light curves.",
    },
    gallery: ["/images/discoveries/2025/bd05-4868-disintegrating-rocky-planet.webp"],
    primarySourceUrl: "https://news.mit.edu/2025/astronomers-discover-planet-thats-rapidly-disintegrating-producing-comet-tail-0422",
    videoUrls: [],
    relatedSlugs: ["toi-2431-ultrashort-rocky-orbit"],
    tags: ["exoplanets", "TESS", "planetary dust"],
  },
];
