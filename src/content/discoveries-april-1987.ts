import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 1987.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april1987Discoveries: Discovery[] = [
  {
    slug: "kamioka-kamiokande-ii-eleven-supernova-1987a-neutrinos",
    "datePublished": "2026-11-27",
    title: "Eleven Detector Events Recorded a Neutrino Burst From a Supernova",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 1987,
    dateDiscovered: "1987-04-06",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Kamioka, underground Kamiokande-II detector area",
      lat: 36.43,
      lng: 137.31,
      country: "Japan",
    },
    discoveringOrg: "K. Hirata and the Kamiokande-II neutrino team",
    heroImage: "/images/discoveries/1987/kamioka-kamiokande-ii-eleven-supernova-1987a-neutrinos.webp",
    imageAlt: "Original editorial diagram for A brief signal from a star’s collapse. 11 events: Reported detector signal. 13 s: Signal interval.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1987/kamioka-kamiokande-ii-eleven-supernova-1987a-neutrinos.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Kamiokande-II recorded eleven particle events in thirteen seconds in February 1987. The timing and signal were consistent with a neutrino burst from supernova SN 1987A.",
    story: {
      whyThere: "A massive star exploded in the Large Magellanic Cloud. Underground detectors on Earth recorded events within a narrow time window near the beginning of the astronomical observations.",
      howFound: "Kamiokande-II identified eleven electron events as the signal of neutrino interactions. The earliest events had directions consistent within uncertainty with the Large Magellanic Cloud.",
      whatMakesUnique: "The observations gave direct evidence that this stellar collapse emitted neutrinos. The Earth map identifies the Kamioka detector area in Japan.",
    },
    gallery: ["/images/discoveries/1987/kamioka-kamiokande-ii-eleven-supernova-1987a-neutrinos.webp"],
    primarySourceUrl: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.58.1490",
    videoUrls: [],
    relatedSlugs: ["los-alamos-sgr-1806-20-giant-magnetar-gamma-flare"],
    tags: ["SN 1987A", "Supernova neutrinos", "Kamiokande-II", "Particle detection"],
  },
];
