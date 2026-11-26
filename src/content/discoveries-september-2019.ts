import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2019.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2019Discoveries: Discovery[] = [
  {
    slug: "flensburg-early-asteroid-carbonates",
    title: "A Meteorite Found in Flensburg Preserves Early Asteroid Carbonates",
    categorySlug: "space",
    subtopic: "Asteroids",
    year: 2019,
    dateDiscovered: "2019-09-13",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Flensburg (documented recovery area)",
      lat: 54.7615,
      lng: 9.3789,
      country: "Germany",
    },
    discoveringOrg: "Addi Bischoff and the University of Münster classification team",
    heroImage: "/images/discoveries/2019/flensburg-early-asteroid-carbonates.webp",
    imageAlt: "Original editorial diagram for Flensburg meteorite. 24.5 grams: mass of the recovered stone. Carbonates: record of water–rock reactions.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2019/flensburg-early-asteroid-carbonates.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A 24.5-gram meteorite recovered the day after a fireball over northern Europe contained carbonate minerals that formed very early in Solar System history.",
    story: {
      whyThere: "Observers saw the fireball in several countries on September 12, 2019. A stone was recovered in Flensburg the next day and identified as a carbonaceous chondrite.",
      howFound: "Mineral and isotope analyses showed that water had reacted with material on the meteorite’s parent body. Carbonates and water-bearing silicates preserve traces of those reactions.",
      whatMakesUnique: "Flensburg belongs to an unusual ungrouped type. The findings show how even a small recovered specimen can preserve a record of liquid water acting inside an early asteroid.",
    },
    gallery: ["/images/discoveries/2019/flensburg-early-asteroid-carbonates.webp"],
    paperUrl: "https://doi.org/10.1016/j.gca.2020.10.014",
    primarySourceUrl: "https://www.uni-muenster.de/news/view.php?cmdid=11499",
    supportingSources: [
      {
        title: "Official classification and recovery account",
        url: "https://www.lpi.usra.edu/meteor/metbull.cfm?code=71098",
        publisher: "The Meteoritical Society",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-26",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["tagish-lake-frozen-lake-meteorite", "hillsborough-asteroid-brines"],
    tags: ["meteorites", "carbonaceous chondrites", "carbonates"],
  },
];
