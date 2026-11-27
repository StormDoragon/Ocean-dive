import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2018.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2018Discoveries: Discovery[] = [
  {
    slug: "ile-ife-igbo-olokun-two-local-glass-compositions",
    "datePublished": "2026-11-27",
    title: "Glass chemistry identified two bead compositions at Ile-Ife",
    categorySlug: "archaeology",
    subtopic: "Artifacts",
    year: 2018,
    dateDiscovered: "2018-01-17",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Ile-Ife, Osun State (city map proxy for Igbo Olokun)",
      lat: 7.48,
      lng: 4.56,
      country: "Nigeria",
    },
    discoveringOrg: "Abidemi B. Babalola and the Igbo Olokun glass study team",
    heroImage: "/images/discoveries/2018/ile-ife-igbo-olokun-two-local-glass-compositions.webp",
    imageAlt: "Original editorial diagram for Glassmaking at Igbo Olokun. 52 beads: sampled for chemical comparison. Two groups: differed in their lime content.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2018/ile-ife-igbo-olokun-two-local-glass-compositions.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "An analysis of 52 excavated beads identified two alumina-rich glass groups and strengthened the case for local glass production.",
    story: {
      whyThere: "A workshop area at Igbo Olokun yielded thousands of beads as well as crucible fragments and glass debris. Researchers investigated how these remains could distinguish local manufacture from work on imported glass.",
      howFound: "The measured beads separated into two groups with high alumina and different lime levels. Crucibles retained evidence that both kinds of glass were worked at the site. The authors considered local production plausible for both groups.",
      whatMakesUnique: "The results point to a substantial West African glass industry with connections to other communities. The measured samples represent part of the excavated assemblage.",
    },
    gallery: ["/images/discoveries/2018/ile-ife-igbo-olokun-two-local-glass-compositions.webp"],
    paperUrl: "https://doi.org/10.1016/j.jas.2017.12.005",
    primarySourceUrl: "https://discovery.ucl.ac.uk/id/eprint/10043216/",
    supportingSources: [
      {
        title: "Related field excavation record by the lead author",
        url: "https://journals.openedition.org/aaa/545?lang=en",
        publisher: "Afrique Archéologie & Arts",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["copan-honduras-maya-lime-plaster-plant-additives"],
    tags: ["glass beads", "Ile-Ife", "West African archaeology"],
  },
];
