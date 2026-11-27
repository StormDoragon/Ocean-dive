import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2021.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2021Discoveries: Discovery[] = [
  {
    slug: "harlaa-dire-dawa-medieval-workshops-beads-and-trade",
    "datePublished": "2026-11-27",
    title: "A workshop in medieval Harlaa linked beadmaking to long-distance exchange",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2021,
    dateDiscovered: "2021-03-17",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Harlaa, Dire Dawa region (published site coordinates)",
      lat: 9.48617,
      lng: 41.91027,
      country: "Ethiopia",
    },
    discoveringOrg: "Timothy Insoll and the Harlaa excavation team",
    heroImage: "/images/discoveries/2021/harlaa-dire-dawa-medieval-workshops-beads-and-trade.webp",
    imageAlt: "Original editorial diagram for Inside the Harlaa workshop. Agate and shell: evidence for craft work. Glass beads: some had distant sources.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2021/harlaa-dire-dawa-medieval-workshops-beads-and-trade.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Excavations in eastern Ethiopia found local beadworking evidence and imported materials at the medieval trading town of Harlaa.",
    story: {
      whyThere: "Archaeologists recorded a mosque, residential buildings and a workshop complex. Many of the site's beads came from the workshop, alongside evidence for working agate, shell and possibly glass.",
      howFound: "A first chemical analysis of four glass beads pointed to sources that included South or Central Asia and the Middle East. The team described links extending across land and maritime trading networks.",
      whatMakesUnique: "The artifacts show exchange and craft activity in the same town. Direct trade with each place of manufacture remains unproven, and the team described local glass-bead production as a possibility requiring more evidence.",
    },
    gallery: ["/images/discoveries/2021/harlaa-dire-dawa-medieval-workshops-beads-and-trade.webp"],
    primarySourceUrl: "https://doi.org/10.15184/aqy.2020.169",
    supportingSources: [
      {
        title: "Earlier field campaign account",
        url: "https://maxvanberchem.org/en/scientific-activities/projects/archeology/11-archeologie/161-the-origins-of-harar-ethiopia",
        publisher: "Max van Berchem Foundation",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: [
      "peten-ceibal-maya-obsidian-sources-shifting-exchange",
      "sidon-college-site-bronze-age-ritual-vessels-egypt",
    ],
    tags: ["medieval archaeology", "beads", "trade networks"],
  },
];
