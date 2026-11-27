import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2006.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2006Discoveries: Discovery[] = [
  {
    slug: "eaglenest-bugun-liocichla-field-records-and-description",
    "datePublished": "2026-11-27",
    title: "Field Notes, Feathers and Calls Document the Bugun Liocichla",
    categorySlug: "biology",
    subtopic: "New species",
    year: 2006,
    dateDiscovered: "2006-09-08",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Eaglenest Wildlife Sanctuary landscape, Arunachal Pradesh",
      lat: 27.08,
      lng: 92.42,
      country: "India",
    },
    discoveringOrg: "Ramana Athreya and the Eaglenest Biodiversity Project",
    scientificName: "Liocichla bugunorum",
    heroImage: "/images/discoveries/2006/eaglenest-bugun-liocichla-field-records-and-description.webp",
    imageAlt: "Original editorial diagram for Field evidence describes a new songbird. Plumage and calls: Two independent points of comparison. 2006: Year of the formal description.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2006/eaglenest-bugun-liocichla-field-records-and-description.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Ramana Athreya described a distinctive bird in the Eaglenest landscape using plumage, measurements, loose feathers and recordings.",
    story: {
      whyThere: "Athreya noticed an unfamiliar liocichla during fieldwork in the eastern Himalaya. Later encounters allowed him to document the bird’s appearance and how its calls differed from those of its closest-looking relative.",
      howFound: "The description combined photographs and field notes with feathers obtained from captured birds that were released. The paper named the bird for the local Bugun community.",
      whatMakesUnique: "The map shows the landscape of the original study. Its early observations documented a small number of birds and do not establish the size of the whole population.",
    },
    gallery: [
      "/images/discoveries/2006/eaglenest-bugun-liocichla-field-records-and-description.webp",
    ],
    primarySourceUrl: "https://indianbirds.in/pdfs/IB2.4_Athreya_BugunLiocichla.pdf",
    supportingSources: [
      {
        title: "Indian Birds issue and publication date",
        url: "https://indianbirds.in/jul-aug-2006/",
        publisher: "Indian Birds",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["gaoligong-skywalker-hoolock-gibbon-recognition"],
    tags: ["birds", "Eastern Himalaya", "species descriptions"],
  },
];
