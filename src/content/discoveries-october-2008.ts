import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2008.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2008Discoveries: Discovery[] = [
  {
    slug: "almahata-sitta-predicted-asteroid-fall",
    title: "An Asteroid Spotted in Space Leaves Meteorites in Sudan",
    categorySlug: "space",
    subtopic: "Planetary defense",
    year: 2008,
    dateDiscovered: "2008-10-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Almahata Sitta, Nubian Desert (strewn-field center)",
      lat: 20.7173,
      lng: 32.5097,
      country: "Sudan",
    },
    discoveringOrg: "Catalina Sky Survey, University of Khartoum, and the Almahata Sitta recovery team",
    heroImage: "/images/discoveries/2008/almahata-sitta-predicted-asteroid-fall.webp",
    imageAlt: "Original editorial diagram for Asteroid 2008 TC3. 6 October: observed before atmospheric entry. 47 fragments: reported in the first recovery paper.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2008/almahata-sitta-predicted-asteroid-fall.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Astronomers tracked small asteroid 2008 TC3 before it reached Earth. A search in Sudan recovered meteorites, linking fragments in the laboratory to a body observed in space.",
    story: {
      whyThere: "The Catalina Sky Survey spotted the asteroid on October 6, 2008. Follow-up observations put the entry track over the Nubian Desert in Sudan, giving searchers a region to investigate.",
      howFound: "Recovery teams searched near a rail station after the predicted airburst. The initial published analysis described 47 fragments and compared them with the asteroid’s telescopic observations.",
      whatMakesUnique: "The recovered material was unusually varied, with ureilitic pieces among the fragments. The event directly connected tracking a small asteroid with sampling material from its fall.",
    },
    gallery: ["/images/discoveries/2008/almahata-sitta-predicted-asteroid-fall.webp"],
    paperUrl: "https://doi.org/10.1038/nature07920",
    primarySourceUrl: "https://www.lpi.usra.edu/meteor/?code=48915",
    videoUrls: [],
    relatedSlugs: ["chelyabinsk-airburst-meteorites", "sutters-mill-weather-radar-meteorite"],
    tags: ["meteorites", "ureilites", "planetary defense"],
  },
];
