import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2006.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2006Discoveries: Discovery[] = [
  {
    slug: "la-silla-ogle-2005-blg-390lb-microlensing-planet",
    "datePublished": "2026-11-27",
    title: "A Brief Microlensing Spike Revealed a Cool Planet About Five Times Earth’s Mass",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2006,
    dateDiscovered: "2006-01-26",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "ESO La Silla Observatory (participating observing-site proxy)",
      lat: -29.2567,
      lng: -70.7346,
      country: "Chile",
    },
    discoveringOrg: "Jean-Philippe Beaulieu, David P. Bennett and the PLANET, RoboNet, OGLE and MOA teams",
    heroImage: "/images/discoveries/2006/la-silla-ogle-2005-blg-390lb-microlensing-planet.webp",
    imageAlt: "Original editorial diagram for A short anomaly reveals a smaller lens. About 5.5 Earth masses: best-fit planetary mass in the original report. Microlensing: the event briefly magnifies a background star.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2006/la-silla-ogle-2005-blg-390lb-microlensing-planet.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Observatories tracking a temporary stellar brightening detected a short extra signal consistent with an unseen planet. The best-fit mass was about 5.5 Earth masses.",
    story: {
      whyThere: "A foreground star can magnify a more distant star when the two almost line up from Earth. A planet near the foreground star can briefly change that pattern.",
      howFound: "A network of telescopes followed the event as Earth turned. A small departure from the otherwise smooth brightening let the team constrain the ratio of the planet’s mass to its star’s.",
      whatMakesUnique: "The inferred planet was cool for its size because it orbited far from a faint star. The quoted mass and temperature depend on the estimated properties of that system.",
    },
    gallery: ["/images/discoveries/2006/la-silla-ogle-2005-blg-390lb-microlensing-planet.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/16437108/",
    supportingSources: [
      {
        title: "ESO’s report on the observing network and discovery",
        url: "https://www.eso.org/public/ireland/news/eso0603/",
        publisher: "European Southern Observatory",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["la-silla-harps-ross-128b-radial-velocity"],
    tags: ["gravitational microlensing", "OGLE", "exoplanet detection"],
  },
];
