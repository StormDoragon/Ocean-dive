import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2014.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2014Discoveries: Discovery[] = [
  {
    slug: "juina-diamond-hydrous-ringwoodite-inclusion",
    "datePublished": "2026-11-27",
    title: "A Diamond Preserved Water-Bearing Ringwoodite From Deep in the Mantle",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 2014,
    dateDiscovered: "2014-03-12",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Juína diamond district, Mato Grosso (specimen-region proxy)",
      lat: -11.38,
      lng: -58.74,
      country: "Brazil",
    },
    discoveringOrg: "D. Graham Pearson, Frank E. Brenker, Fabrizio Nestola and colleagues",
    heroImage: "/images/discoveries/2014/juina-diamond-hydrous-ringwoodite-inclusion.webp",
    imageAlt: "Original editorial diagram for A pressure-stable fragment carries a record from depth. About 1.5%: estimated water by weight in the inclusion. Diamond: protected the mineral on its way to the surface.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2014/juina-diamond-hydrous-ringwoodite-inclusion.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A tiny high-pressure mineral inclusion in a Brazilian diamond held about 1.5 percent water by weight within its crystal structure.",
    story: {
      whyThere: "A diamond can preserve a grain of another mineral as it moves from depth to the surface through a volcanic source rock.",
      howFound: "Researchers identified ringwoodite and examined signatures of hydrogen in the crystal. The mineral forms under pressures associated with Earth’s mantle transition zone.",
      whatMakesUnique: "This is direct evidence of a hydrated mineral in one part of the transition zone. It does not establish the amount of water throughout the entire layer.",
    },
    gallery: ["/images/discoveries/2014/juina-diamond-hydrous-ringwoodite-inclusion.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24622201/",
    videoUrls: [],
    relatedSlugs: ["ol-doinyo-lengai-gas-isotopes-carbonatite-origin"],
    tags: ["ringwoodite", "mantle transition zone", "diamond inclusions"],
  },
];
