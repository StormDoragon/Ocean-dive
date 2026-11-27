import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2000.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2000Discoveries: Discovery[] = [
  {
    slug: "los-angeles-galileo-europa-magnetic-induction-subsurface-ocean",
    "datePublished": "2026-11-27",
    title: "A Galileo Flyby Strengthened the Case for an Ocean Under Europa",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2000,
    dateDiscovered: "2000-08-25",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "UCLA, magnetometer study-team location",
      lat: 34.07,
      lng: -118.445,
      country: "United States",
    },
    discoveringOrg: "Margaret G. Kivelson and the Galileo magnetometer team",
    heroImage: "/images/discoveries/2000/los-angeles-galileo-europa-magnetic-induction-subsurface-ocean.webp",
    imageAlt: "Original editorial diagram for An ocean inferred from magnetism. Galileo: Flyby measurements. Induced field: Evidence for a conductor.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2000/los-angeles-galileo-europa-magnetic-induction-subsurface-ocean.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Galileo measured a magnetic response near Europa that changed with Jupiter’s surrounding field. A planet-scale layer of conducting liquid beneath the ice explained the pattern.",
    story: {
      whyThere: "Europa moves through a magnetic field dominated by Jupiter. A conductive layer can respond to changes in the surrounding field by generating a secondary magnetic signal.",
      howFound: "A flyby placed Galileo where competing explanations predicted different measurements. The recorded change strengthened the case for an induced response from near Europa’s surface.",
      whatMakesUnique: "A global subsurface ocean is a plausible conductor. The flyby constrained the field indirectly, leaving details such as ice thickness unresolved. The map marks the lead team’s UCLA location.",
    },
    gallery: [
      "/images/discoveries/2000/los-angeles-galileo-europa-magnetic-induction-subsurface-ocean.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/10958778/",
    supportingSources: [
      {
        title: "Galileo evidence for Europa’s subsurface water",
        url: "https://www.jpl.nasa.gov/news/galileo-evidence-points-to-possible-water-world-under-europas-icy-crust/",
        publisher: "NASA Jet Propulsion Laboratory",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["laurel-messenger-mercury-north-pole-water-ice-neutrons"],
    tags: ["Europa", "Galileo spacecraft", "Subsurface oceans", "Magnetic induction"],
  },
];
