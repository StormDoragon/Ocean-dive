import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2005.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2005Discoveries: Discovery[] = [
  {
    slug: "los-alamos-sgr-1806-20-giant-magnetar-gamma-flare",
    "datePublished": "2026-11-27",
    title: "A Magnetar Produced an Exceptionally Energetic Gamma-Ray Flare",
    categorySlug: "space",
    subtopic: "Galaxies",
    year: 2005,
    dateDiscovered: "2005-04-28",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Los Alamos, lead study-team location",
      lat: 35.879,
      lng: -106.303,
      country: "United States",
    },
    discoveringOrg: "David M. Palmer and the SGR 1806−20 flare collaboration",
    heroImage: "/images/discoveries/2005/los-alamos-sgr-1806-20-giant-magnetar-gamma-flare.webp",
    imageAlt: "Original editorial diagram for A giant magnetar flare. 0.2 s: Approximate initial spike. 2 × 10⁴⁶ erg: Isotropic energy estimate.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2005/los-alamos-sgr-1806-20-giant-magnetar-gamma-flare.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "SGR 1806−20 produced a brief giant flare on December 27, 2004. Under the study’s distance and isotropic emission assumptions, the estimated energy was around 2 × 10⁴⁶ ergs.",
    story: {
      whyThere: "Spacecraft detected a sharp burst from a known soft gamma repeater, a type of magnetar. The brief initial spike was followed by a fading signal modulated by the star’s rotation.",
      howFound: "The team estimated an energy much larger than in the two earlier giant flares it compared. The conversion from observed radiation to emitted energy depended on distance and how the radiation spread.",
      whatMakesUnique: "A large rearrangement of the magnetar’s magnetic field was proposed as an explanation. The map identifies the lead team’s Los Alamos location.",
    },
    gallery: ["/images/discoveries/2005/los-alamos-sgr-1806-20-giant-magnetar-gamma-flare.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/15858567/",
    videoUrls: [],
    relatedSlugs: ["baltimore-hubble-ogle-2011-blg-0462-isolated-black-hole-confirmation"],
    tags: ["Magnetars", "SGR 1806−20", "Gamma-ray flares", "Neutron stars"],
  },
];
