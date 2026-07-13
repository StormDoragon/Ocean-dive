import type { Discovery, SourceTier } from "@/content/types";
import { reviewStatuses, sourceTierLabel } from "@/content/editorial";
import { getAll } from "@/lib/discoveries";

export interface PublicSource {
  title: string;
  url: string;
  publisher: string;
  tier: SourceTier;
  sourceType: "paper" | "institutional" | "reporting" | "reference";
  accessedAt?: string;
}

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "External source";
  }
}

function inferSource(url: string): Pick<PublicSource, "tier" | "sourceType"> {
  const host = hostname(url);
  // Anchor host matches to the end of the (www-stripped) hostname so a lookalike
  // like "nature.com.evil.example" cannot be mistaken for the real publisher.
  if (/(?:doi\.org|arxiv\.org|pubmed\.ncbi\.nlm\.nih\.gov|nature\.com)$/.test(host)) {
    return { tier: "Tier 1", sourceType: "paper" };
  }
  if (/(?:\.gov|\.edu|cern\.ch|noaa\.gov|nasa\.gov|esa\.int|iucnredlist\.org|\.museum)$|museum/.test(host)) {
    return { tier: "Tier 2", sourceType: "institutional" };
  }
  if (/(?:wired\.com|theguardian\.com|bbc\.com|sciencealert\.com|scientificamerican\.com)$/.test(host)) {
    return { tier: "Tier 3", sourceType: "reporting" };
  }
  return { tier: "Tier 4", sourceType: "reference" };
}

export function getDiscoverySources(discovery: Discovery): PublicSource[] {
  const primaryUrl = discovery.primarySourceUrl ?? discovery.paperUrl;
  const primary = primaryUrl
    ? (() => {
        const inferred = inferSource(primaryUrl);
        return {
          title: "Primary or originating source",
          url: primaryUrl,
          publisher: hostname(primaryUrl),
          tier: discovery.sourceTier ?? inferred.tier,
          sourceType: inferred.sourceType,
          accessedAt: discovery.sourceAccessedAt,
        } satisfies PublicSource;
      })()
    : null;
  const supporting = (discovery.supportingSources ?? []).map((source) => {
    const inferred = inferSource(source.url);
    return {
      title: source.title,
      url: source.url,
      publisher: source.publisher,
      tier: source.tier ?? inferred.tier,
      sourceType: source.sourceType ?? inferred.sourceType,
      accessedAt: source.accessedAt,
    } satisfies PublicSource;
  });
  return primary ? [primary, ...supporting] : supporting;
}

export function getReviewPresentation(discovery: Discovery) {
  const sources = getDiscoverySources(discovery);
  // An explicit status always wins. Otherwise derive an honest default: an
  // entry with a traceable primary/institutional source is "source-verified"
  // (its definition), everything else stays "preliminary". This never asserts
  // an editorial review that has not been recorded.
  const status =
    discovery.reviewStatus ?? (sources.length > 0 ? "source-verified" : "preliminary");
  const statusInfo = reviewStatuses[status];
  return {
    label: statusInfo.label,
    description: statusInfo.description,
    sourceLabel: sourceTierLabel(discovery.sourceTier ?? sources[0]?.tier),
    lastReviewed: discovery.dateReviewed,
    reviewedBy: discovery.reviewedBy,
    isEditoriallyReviewed: status === "editor-reviewed" && Boolean(discovery.dateReviewed),
  };
}

export function formatSourceType(sourceType: PublicSource["sourceType"]): string {
  return {
    paper: "Research paper or preprint",
    institutional: "Institutional source",
    reporting: "Science reporting",
    reference: "Reference source",
  }[sourceType];
}

export function getSourceDirectory() {
  const grouped = new Map<string, { publisher: string; count: number; tiers: Set<SourceTier> }>();
  for (const discovery of getAll()) {
    for (const source of getDiscoverySources(discovery)) {
      const entry = grouped.get(source.publisher) ?? { publisher: source.publisher, count: 0, tiers: new Set<SourceTier>() };
      entry.count += 1;
      entry.tiers.add(source.tier);
      grouped.set(source.publisher, entry);
    }
  }
  return [...grouped.values()]
    .map((entry) => ({ ...entry, tiers: [...entry.tiers].sort() }))
    .sort((a, b) => b.count - a.count || a.publisher.localeCompare(b.publisher));
}
