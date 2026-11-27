import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2015.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2015Discoveries: Discovery[] = [
  {
    slug: "senekal-spion-kop-pulanesaura-sauropod-anatomy",
    "datePublished": "2026-11-27",
    title: "An Early South African Sauropod Had a Neck Suited to Low Browsing",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2015,
    dateDiscovered: "2015-08-19",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Senekal District, Free State (quarry-area proxy)",
      lat: -28.32,
      lng: 27.62,
      country: "South Africa",
    },
    discoveringOrg: "Blair W. McPhee, Matthew F. Bonnan and colleagues",
    scientificName: "Pulanesaura eocollum",
    heroImage: "/images/discoveries/2015/senekal-spion-kop-pulanesaura-sauropod-anatomy.webp",
    imageAlt: "Original editorial diagram for An early sauropod may have browsed low. Neck vertebrae: show joints that constrained movement. Upper Elliot Formation: preserved several herbivorous dinosaurs.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2015/senekal-spion-kop-pulanesaura-sauropod-anatomy.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Neck and limb bones helped identify Pulanesaura eocollum and led the original study to propose a low-browsing role for this early sauropod.",
    story: {
      whyThere: "The Spion Kop quarry preserved several different long-necked dinosaurs in Early Jurassic deposits.",
      howFound: "Researchers compared vertebrae, teeth and limb bones and recognized a distinct combination of traits. They evaluated how the neck and forelimbs might affect the range of feeding motion.",
      whatMakesUnique: "The low-browsing interpretation offers one explanation for the coexistence of several related plant eaters. The fossil anatomy provides the evidence for that model.",
    },
    gallery: ["/images/discoveries/2015/senekal-spion-kop-pulanesaura-sauropod-anatomy.webp"],
    primarySourceUrl: "https://www.nature.com/articles/srep13224",
    videoUrls: [],
    relatedSlugs: ["fouriesberg-elliot-formation-ngwevu-museum-reclassification"],
    tags: ["Sauropods", "upper Elliot Formation", "feeding mechanics"],
  },
];
