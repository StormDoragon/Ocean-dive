import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 1982.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february1982Discoveries: Discovery[] = [
  {
    slug: "arecibo-binary-pulsar-1913-orbital-period-decay",
    "datePublished": "2026-11-27",
    title: "A Binary Pulsar’s Clock Measured an Orbit Shrinking Under Gravitational Radiation",
    categorySlug: "space",
    subtopic: "Galaxies",
    year: 1982,
    dateDiscovered: "1982-02-15",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Arecibo Observatory (timing-site proxy)",
      lat: 18.344,
      lng: -66.753,
      country: "Puerto Rico",
    },
    discoveringOrg: "Joseph H. Taylor Jr. and Joel M. Weisberg",
    heroImage: "/images/discoveries/1982/arecibo-binary-pulsar-1913-orbital-period-decay.webp",
    imageAlt: "Original editorial diagram for Repeated pulse arrivals track a shrinking orbit. Radio pulses: provide a precise clock. Declining orbital period: consistent with losses predicted by relativity.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1982/arecibo-binary-pulsar-1913-orbital-period-decay.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Radio timings showed that PSR B1913+16’s orbit shortened at a rate consistent with general relativity’s prediction for energy lost to gravitational waves.",
    story: {
      whyThere: "A pulsar sends regular pulses that serve as a clock. Its movement in a binary system changes when they reach Earth.",
      howFound: "Timings across several years revealed a decline in the time required for one orbit. The authors compared it with the predicted rate for two dense stars.",
      whatMakesUnique: "The result is an indirect test. It comes from orbital motion, with allowances for other motion along the line of sight.",
    },
    gallery: ["/images/discoveries/1982/arecibo-binary-pulsar-1913-orbital-period-decay.webp"],
    primarySourceUrl: "https://doi.org/10.1086/159690",
    videoUrls: [],
    relatedSlugs: ["arecibo-psr1257-pulsar-timing-planets"],
    tags: ["binary pulsars", "orbital decay", "gravitational waves"],
  },
];
