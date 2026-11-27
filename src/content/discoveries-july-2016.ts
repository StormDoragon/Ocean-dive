import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2016.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2016Discoveries: Discovery[] = [
  {
    slug: "niassa-yao-greater-honeyguide-traditional-call-playback",
    "datePublished": "2026-11-27",
    title: "A Yao Honey-Hunting Call Doubled the Chance a Wild Bird Would Guide",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2016,
    dateDiscovered: "2016-07-22",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Niassa Special Reserve, regional study-area marker",
      lat: -12.1,
      lng: 37.5,
      country: "Mozambique",
    },
    discoveringOrg: "Claire N. Spottiswoode, Keith S. Begg and Colleen M. Begg",
    scientificName: "Indicator indicator",
    heroImage: "/images/discoveries/2016/niassa-yao-greater-honeyguide-traditional-call-playback.webp",
    imageAlt: "Original editorial diagram for A call shared across species. 66%: Guided with the local call. 33%: Guided after comparison sounds.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2016/niassa-yao-greater-honeyguide-traditional-call-playback.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "In northern Mozambique, playback of a traditional Yao honey-hunting call increased the chance of guidance by a greater honeyguide from 33% to 66% in the study.",
    story: {
      whyThere: "Yao honey hunters in Niassa use a distinctive call when seeking a greater honeyguide. A cooperating bird can lead people to a wild bee nest and gain access to wax after the honey harvest.",
      howFound: "Researchers compared the traditional call with other sounds in the field. A bird was roughly twice as likely to guide a hunter during trials using the traditional call.",
      whatMakesUnique: "The result measures a local cooperative tradition. Honey hunters elsewhere can use other signals, and the pin identifies the Niassa study region.",
    },
    gallery: [
      "/images/discoveries/2016/niassa-yao-greater-honeyguide-traditional-call-playback.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/27463674/",
    supportingSources: [
      {
        title: "How humans and wild birds find honey and wax together",
        url: "https://www.cam.ac.uk/research/news/how-humans-and-wild-birds-collaborate-to-get-precious-resources-of-honey-and-wax",
        publisher: "University of Cambridge",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["yamdena-tanimbar-cockatoos-wild-origin-three-tool-types"],
    tags: ["Greater honeyguide", "Yao honey hunters", "Animal communication", "Mutualism"],
  },
];
