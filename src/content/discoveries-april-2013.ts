import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during April 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const april2013Discoveries: Discovery[] = [
  {
    slug: "japan-incipient-jomon-pottery-aquatic-food-residues",
    "datePublished": "2026-11-27",
    title: "Early Japanese Pottery Retained Traces of Aquatic Foods",
    categorySlug: "archaeology",
    subtopic: "Artifacts",
    year: 2013,
    dateDiscovered: "2013-04-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Japanese archipelago, central Honshū (multi-site study proxy)",
      lat: 35.7,
      lng: 137.8,
      country: "Japan",
    },
    discoveringOrg: "Oliver E. Craig, Hayley Saul and colleagues",
    heroImage: "/images/discoveries/2013/japan-incipient-jomon-pottery-aquatic-food-residues.webp",
    imageAlt: "Original editorial diagram for Charred deposits reveal what early pots held. Chemical markers: identify fat from aquatic sources. Multiple sites: extend the observation across samples.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/japan-incipient-jomon-pottery-aquatic-food-residues.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Residues from Late Pleistocene pots in Japan indicated that many vessels had been used to heat or process aquatic foods.",
    story: {
      whyThere: "Charred deposits survived on the surfaces of some early pottery. They offered a way to investigate vessel use in addition to vessel age.",
      howFound: "The team combined chemical markers and stable isotope evidence across samples from several sites. Many residues were consistent with aquatic fats.",
      whatMakesUnique: "The traces describe foods that reached the sampled pots. They do not establish the full range of uses for early pottery or the share of aquatic food in the diet.",
    },
    gallery: ["/images/discoveries/2013/japan-incipient-jomon-pottery-aquatic-food-residues.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature12109",
    videoUrls: [],
    relatedSlugs: ["wannian-xianrendong-glacial-age-pottery-sherds"],
    tags: ["Jōmon", "pottery residues", "aquatic foods"],
  },
];
