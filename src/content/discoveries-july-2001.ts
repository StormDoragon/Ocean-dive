import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2001.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2001Discoveries: Discovery[] = [
  {
    slug: "maunakea-gj-876-two-giants-orbital-resonance",
    "datePublished": "2026-11-27",
    title: "Two Giant Planets Around GJ 876 Follow a Near Two-to-One Rhythm",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2001,
    dateDiscovered: "2001-07-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "W. M. Keck Observatory, Maunakea (one contributing observing site)",
      lat: 19.826,
      lng: -155.474,
      country: "United States",
    },
    discoveringOrg: "Geoffrey W. Marcy, R. Paul Butler and colleagues",
    heroImage: "/images/discoveries/2001/maunakea-gj-876-two-giants-orbital-resonance.webp",
    imageAlt: "Original editorial diagram for Two giants share a near two-to-one rhythm. About 30 days: period of the inner planet in the study. About 61 days: period of the outer planet in the study.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2001/maunakea-gj-876-two-giants-orbital-resonance.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Stellar velocities collected at Keck and Lick revealed an inner giant taking roughly half as long to orbit as its larger neighbour.",
    story: {
      whyThere: "The team measured small shifts in the light spectrum of the red dwarf GJ 876. A model with two planets explained differences that had previously looked like part of one eccentric orbit.",
      howFound: "The inner planet took about 30 days to circle the star, compared with about 61 days for the outer one. Simulations indicated that some orbits consistent with the measurements remained stable.",
      whatMakesUnique: "Gravitational interactions between the planets help explain the orbital pattern. The closely linked periods made it important to model the two worlds together.",
    },
    gallery: ["/images/discoveries/2001/maunakea-gj-876-two-giants-orbital-resonance.webp"],
    primarySourceUrl: "https://doi.org/10.1086/321552",
    supportingSources: [
      {
        title: "A Pair of Resonant Planets Orbiting GJ 876",
        url: "https://scixplorer.org/abs/2001ApJ...556..296M/abstract",
        publisher: "NASA ADS",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["paranal-toi-178-five-planet-resonance-chain"],
    tags: ["orbital resonance", "red dwarfs", "radial velocity"],
  },
];
