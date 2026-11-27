import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2019.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2019Discoveries: Discovery[] = [
  {
    slug: "cambridge-graphite-second-sound-wave-like-heat-transport",
    "datePublished": "2026-11-27",
    title: "An experiment saw heat propagate in waves through graphite",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2019,
    dateDiscovered: "2019-03-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Massachusetts Institute of Technology, Cambridge (laboratory map proxy)",
      lat: 42.359,
      lng: -71.09,
      country: "United States",
    },
    discoveringOrg: "Samuel Huberman and the graphite heat transport team",
    heroImage: "/images/discoveries/2019/cambridge-graphite-second-sound-wave-like-heat-transport.webp",
    imageAlt: "Original editorial diagram for Tracking a wave-like heat signal. Graphite: tested near 100 kelvin. Second sound: observed in the thermal response.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2019/cambridge-graphite-second-sound-wave-like-heat-transport.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Time-resolved optical measurements found a wave-like mode of thermal transport in graphite around 100 kelvin.",
    story: {
      whyThere: "Heat spreading through a solid often smooths out local temperature differences. The researchers imposed a periodic heating pattern in a graphite sample and watched how the pattern changed.",
      howFound: "Over part of the temperature and distance range, the signature overshot before decaying. That behaviour was consistent with a propagating thermal wave known as second sound.",
      whatMakesUnique: "The observation helps distinguish regimes where lattice vibrations move collectively from those dominated by ordinary diffusion. It was measured in graphite under the experiment's conditions.",
    },
    gallery: [
      "/images/discoveries/2019/cambridge-graphite-second-sound-wave-like-heat-transport.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/30872535/",
    supportingSources: [
      {
        title: "Contemporary report from the research group",
        url: "https://nelson.mit.edu/second-sound-graphite-temperatures-above-100-k/",
        publisher: "Massachusetts Institute of Technology",
        tier: "Tier 2",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["seattle-chromium-triiodide-monolayer-ferromagnetism"],
    tags: ["phonons", "heat transport", "graphite"],
  },
];
