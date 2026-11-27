import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during May 2007.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const may2007Discoveries: Discovery[] = [
  {
    slug: "cambridge-spitzer-hd-189733b-infrared-longitude-map",
    "datePublished": "2026-11-27",
    title: "Spitzer Mapped the Hot and Cool Longitudes of HD 189733 b",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2007,
    dateDiscovered: "2007-05-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Harvard–Smithsonian Center for Astrophysics, Cambridge (research-team proxy)",
      lat: 42.381,
      lng: -71.126,
      country: "United States",
    },
    discoveringOrg: "Heather A. Knutson and colleagues",
    heroImage: "/images/discoveries/2007/cambridge-spitzer-hd-189733b-infrared-longitude-map.webp",
    imageAlt: "Original editorial diagram for The hottest longitude leads the substellar point. About 30°: eastward offset in the inferred map. Infrared phase curve: light changes as different sides face Spitzer.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2007/cambridge-spitzer-hd-189733b-infrared-longitude-map.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Infrared observations across an orbit revealed a warm region shifted about 30 degrees east of the point directly facing the star.",
    story: {
      whyThere: "The hot Jupiter orbits close enough to its star that it probably presents roughly the same face to it throughout an orbit.",
      howFound: "As Spitzer watched different sides rotate into view, the team used the change in total infrared light to infer a temperature pattern by longitude.",
      whatMakesUnique: "The offset and the relatively warm nightside are evidence for atmospheric heat transport. The map was inferred from light measurements and is not a resolved photograph.",
    },
    gallery: ["/images/discoveries/2007/cambridge-spitzer-hd-189733b-infrared-longitude-map.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17495920/",
    supportingSources: [
      {
        title: "Spitzer observing team’s description of the infrared map",
        url: "https://www.spitzer.caltech.edu/image/ssc2007-09a-first-map-of-an-exoplanet-atmosphere",
        publisher: "NASA/JPL-Caltech",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["baltimore-hd-189733-b-hydrogen-sulfide-spectrum"],
    tags: ["Spitzer", "infrared phase curves", "atmospheric circulation"],
  },
];
