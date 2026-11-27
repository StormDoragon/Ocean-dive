import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 1977.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may1977Discoveries: Discovery[] = [
  {
    slug: "ithaca-kuiper-airborne-uranus-first-five-rings",
    "datePublished": "2026-11-27",
    title: "Ten dips in starlight revealed rings around Uranus",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 1977,
    dateDiscovered: "1977-05-26",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Cornell University, Ithaca (research-team proxy)",
      lat: 42.453,
      lng: -76.473,
      country: "United States",
    },
    discoveringOrg: "James L. Elliot, Edward Dunham and Douglas Mink",
    heroImage: "/images/discoveries/1977/ithaca-kuiper-airborne-uranus-first-five-rings.webp",
    imageAlt: "Original editorial diagram for Rings traced in a star's fading light. Five pairs: brief dips around the main event. 10 March 1977: date of observation.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1977/ithaca-kuiper-airborne-uranus-first-five-rings.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "An airborne telescope recorded five brief dips before Uranus blocked a star and five more after it emerged.",
    story: {
      whyThere: "On March 10, 1977, astronomers tracked the star SAO 158687 aboard the Kuiper Airborne Observatory. They expected one extended dimming as Uranus passed across the star.",
      howFound: "Short dips on both sides of the main event showed that narrow bands of material also crossed the line of sight. The paired pattern let the team infer at least five rings in the original report.",
      whatMakesUnique: "The method is called a stellar occultation. Measuring when a star fades can reveal structure that is hard to see directly, including the rings' positions relative to the planet.",
    },
    gallery: ["/images/discoveries/1977/ithaca-kuiper-airborne-uranus-first-five-rings.webp"],
    primarySourceUrl: "https://www.nature.com/articles/267328a0",
    supportingSources: [
      {
        title: "Uranus occultation observing data",
        url: "https://pds.nasa.gov/ds-view/pds/viewCollection.jsp?identifier=urn%3Anasa%3Apds%3Auranus_occ_u0_kao_91cm%3Adata&version=1.0",
        publisher: "NASA Planetary Data System",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["boston-moon-extended-sodium-tail-leonids"],
    tags: ["uranus", "stellar occultation", "planetary rings"],
  },
];
