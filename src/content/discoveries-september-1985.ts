import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 1985.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september1985Discoveries: Discovery[] = [
  {
    slug: "north-atlantic-titanic-argonaut-debris-field-identification",
    "datePublished": "2026-11-27",
    title: "A Debris Trail Led an Underwater Camera to the Titanic",
    categorySlug: "ocean",
    subtopic: "Shipwrecks",
    year: 1985,
    dateDiscovered: "1985-09-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Northwestern Atlantic (Titanic wreck-area proxy)",
      lat: 41.73,
      lng: -49.95,
      country: "Atlantic Ocean",
    },
    discoveringOrg: "Robert D. Ballard, Jean-Louis Michel and the WHOI–Ifremer expedition",
    heroImage: "/images/discoveries/1985/north-atlantic-titanic-argonaut-debris-field-identification.webp",
    imageAlt: "Original editorial diagram for A remotely observed debris trail leads to the wreck. Deep-towed camera: sent images to the survey ship. Recognizable boiler: helped identify the site.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1985/north-atlantic-titanic-argonaut-debris-field-identification.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A joint French–American expedition identified the wreck by following debris with a deep-towed camera system and recognizing distinctive parts of the ship.",
    story: {
      whyThere: "The team looked for debris scattered as the ship sank. A camera towed above the bottom sent images back to the ship.",
      howFound: "The images revealed objects including a boiler that matched the Titanic’s design. The debris guided further views of the hull and surroundings.",
      whatMakesUnique: "The observation established the wreck’s location and documented the distribution of material. Later dives gave a closer record of the site’s condition.",
    },
    gallery: [
      "/images/discoveries/1985/north-atlantic-titanic-argonaut-debris-field-identification.webp",
    ],
    primarySourceUrl: "https://www.whoi.edu/ocean-learning-hub/ocean-topics/ocean-human-lives/underwater-archaeology/rms-titanic/1985-discovery-of-rms-titanic/",
    videoUrls: [],
    relatedSlugs: ["titanic-wreck-rusticle-halomonas-titanicae-description"],
    tags: ["Titanic wreck", "underwater imaging", "maritime archaeology"],
  },
];
