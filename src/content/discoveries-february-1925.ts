import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 1925.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february1925Discoveries: Discovery[] = [
  {
    slug: "taung-australopithecus-africanus-juvenile-skull-description",
    "datePublished": "2026-11-27",
    title: "A Juvenile Skull at Taung Gives Australopithecus africanus Its Name",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Evolution timeline",
    year: 1925,
    dateDiscovered: "1925-02-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Taung district, North West Province (quarry-region proxy)",
      lat: -27.55,
      lng: 24.78,
      country: "South Africa",
    },
    discoveringOrg: "Raymond A. Dart, following a find by Taung quarry workers",
    heroImage: "/images/discoveries/1925/taung-australopithecus-africanus-juvenile-skull-description.webp",
    imageAlt: "Original editorial diagram for A young skull preserves an upright clue. 1924: year the fossil was recovered. 1925: date of the species description.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1925/taung-australopithecus-africanus-juvenile-skull-description.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A juvenile skull recovered in 1924 led to the 1925 scientific description of Australopithecus africanus.",
    story: {
      whyThere: "The fossil preserved much of a face and a natural cast of part of the inside of the skull. Dart used the shape of the skull and teeth to assess its relationship to humans and other apes.",
      howFound: "The opening for the spinal cord lies relatively far forward underneath the skull. Its position is consistent with the head being balanced upright on the neck.",
      whatMakesUnique: "One immature specimen could answer only some questions about the species. Later discoveries provided more specimens with which to compare the Taung fossil.",
    },
    gallery: [
      "/images/discoveries/1925/taung-australopithecus-africanus-juvenile-skull-description.webp",
    ],
    primarySourceUrl: "https://www.nature.com/articles/115195a0",
    supportingSources: [
      {
        title: "Taung Child fossil profile and discovery history",
        url: "https://humanorigins.si.edu/evidence/human-fossils/fossils/taung-child",
        publisher: "Smithsonian Human Origins Program",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["ellesmere-tiktaalik-pelvic-girdle-hind-fin"],
    tags: ["Australopithecus", "bipedalism", "fossil skulls"],
  },
];
