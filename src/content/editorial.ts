export const editorialTeam = {
  name: "Beyond Signal Editorial Team",
  slug: "beyond-signal-editorial-team",
  description:
    "The Beyond Signal Editorial Team organizes scientific discoveries into source-linked entries. The team separates reported facts, scientific interpretation, and editorial explanation so readers can see what is known and how it is supported.",
  url: "/authors/beyond-signal-editorial-team",
} as const;

export const sourceHierarchy = [
  {
    tier: "Tier 1",
    name: "Primary scientific evidence",
    description: "Peer-reviewed papers, preprints clearly labeled as such, official datasets, and direct research records.",
    examples: "Journal article, DOI record, arXiv preprint, specimen record, or observatory data release.",
  },
  {
    tier: "Tier 2",
    name: "Institutional sources",
    description: "Official pages from universities, observatories, museums, government agencies, missions, laboratories, and scientific collaborations.",
    examples: "NASA, NOAA, CERN, a university research page, a museum collection, or an expedition report.",
  },
  {
    tier: "Tier 3",
    name: "Established scientific reporting",
    description: "Reputable science journalism used for discovery context, plain-language explanation, and links to the underlying evidence.",
    examples: "A named science publication or broadcaster that identifies its sources and methods.",
  },
  {
    tier: "Tier 4",
    name: "Contextual references",
    description: "Educational references that help explain terminology or background but do not establish a new discovery by themselves.",
    examples: "Reference encyclopedias, educational institutions, and carefully documented explanatory pages.",
  },
  {
    tier: "Tier 5",
    name: "Unverified or promotional material",
    description: "Anonymous, unsourced, promotional, or materially unclear pages are not treated as sufficient evidence for a discovery claim.",
    examples: "Unattributed social posts, copied summaries, marketing pages, or sources with no traceable evidence.",
  },
] as const;

export const reviewStatuses = {
  "editor-reviewed": {
    label: "Editor reviewed",
    description: "A member of the editorial team checked the entry against its recorded sources and documented the review date.",
  },
  "source-verified": {
    label: "Source verified",
    description: "The entry has a traceable primary or institutional source, but a full editorial review has not been recorded.",
  },
  preliminary: {
    label: "Preliminary",
    description: "The entry is published for discovery and source development, but should not be read as independently reviewed by the editorial team.",
  },
} as const;

export const correctionPolicy = {
  title: "Corrections and updates",
  paragraphs: [
    "Science changes as new evidence appears. Beyond Signal records substantive updates instead of silently rewriting an entry, and it distinguishes a correction of an error from an ordinary change in interpretation or source availability.",
    "If you identify an inaccurate date, name, location, attribution, image credit, or source link, send the page URL and the supporting evidence through the correction channel. The editorial team will compare the claim with the source record, update the entry when warranted, and record the change in the page history when a correction is made.",
    "A correction request is not itself evidence that a claim is wrong. Until reviewed, the existing status remains visible and readers should consult the linked primary or institutional source.",
  ],
} as const;

export const methodology = {
  title: "How Beyond Signal builds discovery pages",
  paragraphs: [
    "Each entry starts with a specific discovery claim: an organism, object, event, structure, measurement, or method that can be connected to a date and a research setting. The catalogue stores the claim as structured data so it can be searched, grouped by topic, mapped, and linked to related findings.",
    "Editors prefer primary scientific evidence and official institutional records. Established reporting can provide useful context, but a headline or secondary summary is not treated as a substitute for the underlying evidence when the claim depends on a paper, dataset, specimen, or mission record.",
    "The page separates what was observed, how it was identified, and why it matters. Editorial explanation is labeled as context; it is not presented as part of a paper's findings or as a new scientific claim. Unresolved uncertainty, disputed interpretations, and preliminary status remain visible.",
  ],
  steps: [
    "Identify the discovery and the date attached to the original announcement or publication.",
    "Link the strongest available primary or institutional source.",
    "Record the location, discovering organisation, method, and scientific significance.",
    "Check names, dates, links, and image credits before assigning a review status.",
    "Publish the entry with its status visible and update the record when the evidence changes.",
  ],
} as const;

export function sourceTierLabel(tier?: string): string {
  return sourceHierarchy.find((entry) => entry.tier === tier)?.name ?? "Source tier pending";
}
