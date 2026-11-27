import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2019.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2019Discoveries: Discovery[] = [
  {
    slug: "lick-hr-5183b-eccentric-wide-orbit-radial-velocity",
    "datePublished": "2026-11-27",
    title: "A Distant Giant Planet Sweeps Close to Its Star on an Elongated Orbit",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2019,
    dateDiscovered: "2019-08-27",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Lick Observatory, Mount Hamilton (one contributing observing site)",
      lat: 37.341,
      lng: -121.643,
      country: "United States",
    },
    discoveringOrg: "Sarah Blunt, Michael Endl and colleagues",
    heroImage: "/images/discoveries/2019/lick-hr-5183b-eccentric-wide-orbit-radial-velocity.webp",
    imageAlt: "Original editorial diagram for Catching the sharpest bend of a long orbit. About 0.84: estimated orbital eccentricity. About 74 years: best-fit period with wide uncertainty.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2019/lick-hr-5183b-eccentric-wide-orbit-radial-velocity.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Two decades of measurements caught HR 5183 b near the fastest part of its orbit, allowing the team to infer a strongly elongated path.",
    story: {
      whyThere: "The researchers tracked tiny changes in the star’s velocity from several observatories. Their observations covered the planet’s close approach, when its gravitational pull changed the measured stellar velocity most sharply.",
      howFound: "The fitted orbit had an eccentricity near 0.84 and a best-fit period around 74 years. The period uncertainty was substantial because the measurements covered only part of the orbit.",
      whatMakesUnique: "The result shows how well-timed measurements can reveal a long orbit. The team discussed possible past gravitational encounters, while the cause of the eccentricity remained open.",
    },
    gallery: ["/images/discoveries/2019/lick-hr-5183b-eccentric-wide-orbit-radial-velocity.webp"],
    primarySourceUrl: "https://www.caltech.edu/about/news/newly-discovered-giant-planet-slingshots-around-its-star",
    supportingSources: [
      {
        title: "Radial Velocity Discovery of an Eccentric Jovian World Orbiting at 18 au",
        url: "https://arxiv.org/abs/1908.09925",
        publisher: "Sarah Blunt and colleagues",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["las-campanas-hd-106906b-planetary-mass-companion"],
    tags: ["eccentric orbits", "radial velocity", "gas giants"],
  },
];
