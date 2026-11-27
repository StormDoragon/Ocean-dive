import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2004.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2004Discoveries: Discovery[] = [
  {
    slug: "manchester-atomically-thin-graphitic-films-electric-field",
    "datePublished": "2026-11-27",
    title: "An Electric Field Switches the Charge Carriers in Atomically Thin Carbon",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2004,
    dateDiscovered: "2004-10-22",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Manchester (research-team proxy)",
      lat: 53.466,
      lng: -2.233,
      country: "United Kingdom",
    },
    discoveringOrg: "Konstantin S. Novoselov, Andre K. Geim and colleagues",
    heroImage: "/images/discoveries/2004/manchester-atomically-thin-graphitic-films-electric-field.webp",
    imageAlt: "Original editorial diagram for An electric field tunes a carbon film. Electron or hole conduction: selected by the gate voltage. Atomically thin layers: stable during the experiments.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2004/manchester-atomically-thin-graphitic-films-electric-field.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Experiments with thin graphitic crystals showed that a gate voltage could shift their electrical response between electron and hole conduction.",
    story: {
      whyThere: "The team isolated graphitic films only a few atomic layers thick and measured how they conducted. The films remained stable under the ambient conditions of the experiment.",
      howFound: "Applying an electric field changed the carrier concentration and the sign of the charge carriers. The team characterized the material as a two-dimensional semimetal.",
      whatMakesUnique: "The measurements established that very thin carbon crystals could be studied as electrical devices. They helped open later work on graphene and other atomically thin materials.",
    },
    gallery: [
      "/images/discoveries/2004/manchester-atomically-thin-graphitic-films-electric-field.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/15499015/",
    videoUrls: [],
    relatedSlugs: ["toronto-perovskite-triple-junction-certified-solar-cell"],
    tags: ["graphene", "two-dimensional materials", "field effect"],
  },
];
