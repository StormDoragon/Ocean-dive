import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 1989.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july1989Discoveries: Discovery[] = [
  {
    slug: "mount-hopkins-crab-nebula-tev-cherenkov-detection",
    "datePublished": "2026-11-27",
    title: "Atmospheric Flashes Revealed Teraelectronvolt Gamma Rays From the Crab Nebula",
    categorySlug: "space",
    subtopic: "Galaxies",
    year: 1989,
    dateDiscovered: "1989-07-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Whipple Observatory, Mount Hopkins (observing-site proxy)",
      lat: 31.681,
      lng: -110.877,
      country: "United States",
    },
    discoveringOrg: "Trevor C. Weekes and the Whipple Observatory team",
    heroImage: "/images/discoveries/1989/mount-hopkins-crab-nebula-tev-cherenkov-detection.webp",
    imageAlt: "Original editorial diagram for Atmospheric flashes trace an astronomical source. Above about 0.7 TeV: threshold of the reported gamma-ray flux. Image shape: helps reject charged cosmic-ray showers.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1989/mount-hopkins-crab-nebula-tev-cherenkov-detection.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The Whipple telescope detected gamma rays above roughly 0.7 teraelectronvolts from the Crab region by imaging brief flashes in Earth’s atmosphere.",
    story: {
      whyThere: "A high-energy photon can start a shower of particles in the atmosphere. Some produce a brief flash of Cherenkov light.",
      howFound: "The researchers used the shape and direction of recorded flashes to reduce the much larger background from charged cosmic rays. A significant excess pointed toward the Crab.",
      whatMakesUnique: "Most of the measured signal did not follow the pulsar’s rapid rhythm. The team judged the extended nebula the more likely source of most of the emission.",
    },
    gallery: ["/images/discoveries/1989/mount-hopkins-crab-nebula-tev-cherenkov-detection.webp"],
    primarySourceUrl: "https://mural.maynoothuniversity.ie/id/eprint/12618/",
    videoUrls: [],
    relatedSlugs: ["tucson-crab-pulsar-optical-flashes"],
    tags: ["gamma-ray astronomy", "Cherenkov imaging", "Crab Nebula"],
  },
];
