import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2022.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2022Discoveries: Discovery[] = [
  {
    slug: "vaxholm-archipelago-applet-vasa-sister-ship-identification",
    "datePublished": "2026-11-27",
    title: "Timber and Ship Measurements Identify Vasa’s Sister Ship Äpplet",
    categorySlug: "ocean",
    subtopic: "Shipwrecks",
    year: 2022,
    dateDiscovered: "2022-10-24",
    reviewStatus: "source-verified",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Vaxholm, Stockholm archipelago (regional proxy for wreck identification)",
      lat: 59.402,
      lng: 18.351,
      country: "Sweden",
    },
    discoveringOrg: "Jim Hansson and Vrak – Museum of Wrecks",
    heroImage: "/images/discoveries/2022/vaxholm-archipelago-applet-vasa-sister-ship-identification.webp",
    imageAlt: "Original editorial diagram for Archaeologists identify Vasa’s sister ship. 1627: year the sampled oak was felled. 1629: year Äpplet was launched.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2022/vaxholm-archipelago-applet-vasa-sister-ship-identification.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Archaeologists combined construction details, measurements and dated wood to identify a seventeenth-century wreck as Äpplet.",
    story: {
      whyThere: "A large hull in the Stockholm archipelago had dimensions and construction resembling the preserved ship Vasa. Both ships date to the same era of Swedish shipbuilding.",
      howFound: "Dives in 2022 documented similarities and collected wood. The timber was dated to trees felled in 1627, and the measurements and archives pointed to Äpplet.",
      whatMakesUnique: "The identification gives researchers another large vessel from the same design tradition to compare with Vasa. Äpplet entered service in 1629.",
    },
    gallery: [
      "/images/discoveries/2022/vaxholm-archipelago-applet-vasa-sister-ship-identification.webp",
    ],
    primarySourceUrl: "https://www.vrak.se/en/about-vrak/press-and-media/press-releases/vasas-sister-ship-applet-discovered--world-unique-find",
    videoUrls: [],
    relatedSlugs: ["lubeck-trave-seventeenth-century-lime-cargo-wreck"],
    tags: ["Baltic shipbuilding", "dendrochronology", "wreck identification"],
  },
];
