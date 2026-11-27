import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2001.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2001Discoveries: Discovery[] = [
  {
    slug: "urbana-polymer-microcapsule-autonomous-crack-healing",
    "datePublished": "2026-11-27",
    title: "Embedded Capsules Help a Polymer Repair Small Cracks",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2001,
    dateDiscovered: "2001-02-15",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Illinois Urbana-Champaign (research-team proxy)",
      lat: 40.107,
      lng: -88.228,
      country: "United States",
    },
    discoveringOrg: "Scott R. White, Nancy R. Sottos and colleagues",
    heroImage: "/images/discoveries/2001/urbana-polymer-microcapsule-autonomous-crack-healing.webp",
    imageAlt: "Original editorial diagram for Damage triggers repair inside a composite. Up to 75%: fracture toughness recovered in tests. Embedded capsules: releasing material into the crack.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2001/urbana-polymer-microcapsule-autonomous-crack-healing.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A laboratory composite restored up to about 75 percent of its fracture toughness after a crack released material from capsules embedded inside it.",
    story: {
      whyThere: "A crack passing through the composite can break small capsules in its path. In the reported system, the released liquid flowed into the gap and set when it contacted components in the surrounding material.",
      howFound: "The team compared the force needed to drive fracture before and after a period of healing. The best reported recovery was about three quarters of the original fracture toughness.",
      whatMakesUnique: "The result demonstrated a way to trigger a repair where damage occurred. Its measured recovery applies to the reported material and fracture tests.",
    },
    gallery: ["/images/discoveries/2001/urbana-polymer-microcapsule-autonomous-crack-healing.webp"],
    primarySourceUrl: "https://www.nature.com/articles/35057232",
    videoUrls: [],
    relatedSlugs: ["manchester-atomically-thin-graphitic-films-electric-field"],
    tags: ["self-healing materials", "polymer composites", "fracture toughness"],
  },
];
