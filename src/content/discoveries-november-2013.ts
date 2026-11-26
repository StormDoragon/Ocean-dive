import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2013Discoveries: Discovery[] = [
  {
    slug: "icecube-first-high-energy-astrophysical-neutrinos",
    title: "IceCube Finds Evidence for High-Energy Neutrinos from Beyond Earth",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 2013,
    dateDiscovered: "2013-11-22",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "IceCube Neutrino Observatory, South Pole (detector location)",
      lat: -89.99,
      lng: -63.45,
      country: "Antarctica",
    },
    discoveringOrg: "IceCube Collaboration",
    heroImage: "/images/discoveries/2013/icecube-first-high-energy-astrophysical-neutrinos.webp",
    imageAlt: "Original editorial diagram for IceCube’s high-energy sample. 28 events: selected in two years of detector data. South Pole ice: instrumented to record faint particle flashes.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/icecube-first-high-energy-astrophysical-neutrinos.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "IceCube reported 28 high-energy events in two years of data. The number and energies exceeded expectations from known atmospheric backgrounds and supported an astrophysical neutrino population.",
    story: {
      whyThere: "The observatory uses instruments embedded in Antarctic ice to record faint flashes produced after particle interactions. The surrounding ice gives the detector a large volume for finding rare events.",
      howFound: "The team selected events that originated within the instrumented volume and compared the observed sample with predictions for atmospheric backgrounds.",
      whatMakesUnique: "The work opened a way to study energetic processes in the universe through neutrinos. This sample established evidence for a population, while identifying individual sources required later observations.",
    },
    gallery: ["/images/discoveries/2013/icecube-first-high-energy-astrophysical-neutrinos.webp"],
    paperUrl: "https://doi.org/10.1126/science.1242856",
    primarySourceUrl: "https://icecube.wisc.edu/news/press-releases/2013/11/icecube-pushes-neutrinos-to-forefront-of-astronomy/",
    supportingSources: [
      {
        title: "Collaboration public data release",
        url: "https://icecube.wisc.edu/data-releases/2013/11/search-for-contained-neutrino-events-at-energies-above-30-tev-in-2-years-of-data/",
        publisher: "IceCube Collaboration",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-26",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["lhcb-baryon-cp-violation"],
    tags: ["neutrinos", "particle astrophysics", "South Pole"],
  },
];
