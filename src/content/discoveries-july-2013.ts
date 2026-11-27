import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2013Discoveries: Discovery[] = [
  {
    slug: "st-andrews-moray-firth-dolphin-signature-whistle-playback",
    "datePublished": "2026-11-27",
    title: "Wild dolphins answered copies of their own signature whistles",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2013,
    dateDiscovered: "2013-07-22",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "St Andrews Bay, eastern Scotland (regional map proxy for one playback area)",
      lat: 56.396,
      lng: -2.715,
      country: "United Kingdom",
    },
    discoveringOrg: "Stephanie L. King and Vincent M. Janik",
    scientificName: "Tursiops truncatus",
    heroImage: "/images/discoveries/2013/st-andrews-moray-firth-dolphin-signature-whistle-playback.webp",
    imageAlt: "Original editorial diagram for Signature-whistle recognition in dolphins. Synthetic copies: preserved the contour. Preferential replies: to copies of their own whistle.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/st-andrews-moray-firth-dolphin-signature-whistle-playback.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Boat-based playback experiments showed wild bottlenose dolphins replied preferentially on hearing a synthetic version of their own distinctive whistle.",
    story: {
      whyThere: "Individual bottlenose dolphins learn distinctive whistle contours. Researchers off eastern Scotland recorded whistles and replayed synthetic copies that retained the shape of a whistle while removing other voice characteristics.",
      howFound: "A dolphin was more likely to reply to a familiar playback specifically when the playback copied its own signature. Control playbacks helped separate this response from simply hearing a familiar dolphin.",
      whatMakesUnique: "The experiment supports the idea that dolphins can use whistle contours to address particular individuals. It tested a specific form of vocal recognition in the studied groups.",
    },
    gallery: [
      "/images/discoveries/2013/st-andrews-moray-firth-dolphin-signature-whistle-playback.webp",
    ],
    primarySourceUrl: "https://doi.org/10.1073/pnas.1304459110",
    videoUrls: [],
    relatedSlugs: ["yunnan-honey-bees-young-waggle-dance-social-learning"],
    tags: ["bottlenose dolphins", "animal behavior", "acoustic communication"],
  },
];
