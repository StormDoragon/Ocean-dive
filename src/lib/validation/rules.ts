import type { Discovery } from "@/content/types";
import { categories } from "@/content/categories";
import { discoveries as catalog } from "@/content/catalog";
import { reviewStatuses } from "@/content/editorial";
import { slugify } from "@/lib/hubs";
import { isPlaceholderImage } from "@/lib/images";

/**
 * Content-integrity and SEO rules for the discovery catalog.
 *
 * These are pure data checks (no filesystem, no network) so they can run in the
 * release-gate CLI (`npm run validate`) and, if wanted, inside a server page.
 * Filesystem-dependent checks (image files exist, referenced routes exist) live
 * in `scripts/validate-content.ts` where Node's `fs` is available.
 */

export type IssueLevel = "error" | "warn";

export interface ContentIssue {
  level: IssueLevel;
  /** Stable machine code, e.g. "duplicate-slug". */
  code: string;
  /** Slug of the offending discovery, when the issue is entry-scoped. */
  slug?: string;
  message: string;
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** True when `value` is a real calendar date in strict YYYY-MM-DD form. */
function isValidIsoDate(value: string): boolean {
  if (!ISO_DATE.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() + 1 === month &&
    date.getUTCDate() === day
  );
}

function isFuture(value: string, now: Date): boolean {
  return new Date(`${value}T00:00:00Z`).getTime() > now.getTime();
}

function isBlank(value: string | undefined | null): boolean {
  return !value || value.trim().length === 0;
}

export interface ValidateOptions {
  discoveries?: Discovery[];
  now?: Date;
}

/**
 * Run every catalog rule and return a flat list of issues. Errors block a
 * release; warnings are surfaced but do not fail the gate.
 */
export function validateCatalog(options: ValidateOptions = {}): ContentIssue[] {
  const discoveries = options.discoveries ?? catalog;
  const now = options.now ?? new Date();
  const issues: ContentIssue[] = [];

  const categorySlugs = new Set(categories.map((c) => c.slug));
  const subtopicsByCategory = new Map(
    categories.map((c) => [c.slug, new Set(c.subtopics.map((s) => slugify(s)))]),
  );
  const knownSlugs = new Set(discoveries.map((d) => d.slug));

  // WS5 — duplicate slugs. A collision breaks routing and the sitemap.
  const seen = new Map<string, number>();
  for (const d of discoveries) {
    seen.set(d.slug, (seen.get(d.slug) ?? 0) + 1);
  }
  for (const [slug, count] of seen) {
    if (count > 1) {
      issues.push({
        level: "error",
        code: "duplicate-slug",
        slug,
        message: `Slug "${slug}" is used by ${count} entries; slugs must be unique.`,
      });
    }
  }

  // Inbound related-link graph, used for orphan detection (WS3).
  const inbound = new Map<string, number>();
  for (const d of discoveries) {
    for (const related of d.relatedSlugs) {
      inbound.set(related, (inbound.get(related) ?? 0) + 1);
    }
  }

  for (const d of discoveries) {
    const at = (code: string, message: string, level: IssueLevel = "error") =>
      issues.push({ level, code, slug: d.slug, message });

    // Slug shape.
    if (!SLUG_RE.test(d.slug)) {
      at("invalid-slug", `Slug "${d.slug}" is not lowercase kebab-case.`);
    }

    // Required narrative fields (WS5 content integrity).
    if (isBlank(d.title)) at("missing-title", "Missing title.");
    if (isBlank(d.summary)) at("missing-summary", "Missing summary.");
    if (isBlank(d.story?.whyThere) || isBlank(d.story?.howFound) || isBlank(d.story?.whatMakesUnique)) {
      at("incomplete-story", "Story must have whyThere, howFound, and whatMakesUnique.");
    }
    if (!d.tags || d.tags.length === 0) {
      at("missing-tags", "No tags; the entry will not appear on any tag hub.", "warn");
    }

    // Category validity (WS5) — keeps hub routing and the map coherent.
    if (!categorySlugs.has(d.categorySlug)) {
      at("invalid-category", `Unknown categorySlug "${d.categorySlug}".`);
    } else {
      // Subtopic integrity (WS3) — an unlisted subtopic never links to a hub.
      const subtopicSlug = slugify(d.subtopic);
      const known = subtopicsByCategory.get(d.categorySlug);
      if (known && !known.has(subtopicSlug)) {
        at(
          "orphan-subtopic",
          `Subtopic "${d.subtopic}" is not one of the "${d.categorySlug}" category subtopics, so no subtopic hub links here.`,
          "warn",
        );
      }
    }

    // Dates (WS5) — invalid or future dates break archives and "on this day".
    if (!isValidIsoDate(d.dateDiscovered)) {
      at("invalid-date", `dateDiscovered "${d.dateDiscovered}" is not a valid YYYY-MM-DD date.`);
    } else {
      if (isFuture(d.dateDiscovered, now)) {
        at("future-date", `dateDiscovered "${d.dateDiscovered}" is in the future.`, "warn");
      }
      const derivedYear = Number(d.dateDiscovered.slice(0, 4));
      if (d.year !== derivedYear) {
        at("year-mismatch", `year (${d.year}) does not match dateDiscovered year (${derivedYear}).`);
      }
    }
    for (const [field, value] of [
      ["dateUpdated", d.dateUpdated],
      ["dateReviewed", d.dateReviewed],
      ["sourceAccessedAt", d.sourceAccessedAt],
    ] as const) {
      if (value !== undefined && !isValidIsoDate(value)) {
        at("invalid-date", `${field} "${value}" is not a valid YYYY-MM-DD date.`);
      } else if (value !== undefined && isValidIsoDate(value) && isFuture(value, now)) {
        at("future-date", `${field} "${value}" is in the future.`, "warn");
      }
    }

    // Sources (WS5) — every entry must trace to a primary or originating source.
    if (isBlank(d.primarySourceUrl) && isBlank(d.paperUrl)) {
      at("missing-source", "No primarySourceUrl or paperUrl; the entry has no traceable source.");
    }

    // Related relations (WS3) — no self-links, no dangling targets.
    for (const related of d.relatedSlugs) {
      if (related === d.slug) {
        at("self-relation", "relatedSlugs contains the entry itself.", "warn");
      } else if (!knownSlugs.has(related)) {
        at("broken-relation", `relatedSlugs points to "${related}", which does not exist.`);
      }
    }
    // Orphan (WS3) — reachable via lists, but isolated in the related graph.
    if ((inbound.get(d.slug) ?? 0) === 0) {
      at("orphan-related", "No other discovery links here via relatedSlugs.", "warn");
    }

    // Image SEO and rights (WS2).
    issues.push(...imageIssues(d));

    // Editorial-review invariant (WS0) — the core authority guarantee.
    issues.push(...reviewIssues(d, now));
  }

  // Hub slug collisions (WS3) — two names collapsing to one hub route.
  issues.push(...hubCollisionIssues(discoveries));

  return issues;
}

const REAL_IMAGE = /^https?:\/\//i;

function imageIssues(d: Discovery): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const at = (code: string, message: string, level: IssueLevel = "error") =>
    issues.push({ level, code, slug: d.slug, message });

  if (isBlank(d.heroImage)) {
    at("missing-hero-image", "No heroImage set.");
    return issues;
  }

  const isReal = REAL_IMAGE.test(d.heroImage);
  const isPlaceholder = isPlaceholderImage(d.heroImage);

  // Placeholders receive honest, structural alt text and a "placeholder"
  // visual-type label from imagePresentation(), so they satisfy the rule
  // without per-entry data. Every other image must carry its own.
  if (isBlank(d.imageAlt) && !isPlaceholder) {
    at("missing-alt", "heroImage has no imageAlt (accessibility + image SEO).", isReal ? "error" : "warn");
  }
  if (isBlank(d.imageType) && !isPlaceholder) {
    at("missing-image-type", "heroImage has no imageType (photo vs. illustration is unclear).", "warn");
  }

  if (isReal) {
    // A real, credited photo must carry full rights metadata (WS2 DoD:
    // "no public image is uncredited, misleadingly labeled, or missing context").
    if (isBlank(d.imageCredit)) at("missing-image-credit", "Real heroImage is missing imageCredit.");
    if (isBlank(d.imageSourceUrl)) at("missing-image-source", "Real heroImage is missing imageSourceUrl.");
    if (isBlank(d.imageLicense)) at("missing-image-license", "Real heroImage is missing imageLicense.");
  }
  return issues;
}

function reviewIssues(d: Discovery, now: Date): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const at = (code: string, message: string, level: IssueLevel = "error") =>
    issues.push({ level, code, slug: d.slug, message });

  if (d.reviewStatus !== undefined && !(d.reviewStatus in reviewStatuses)) {
    at("invalid-review-status", `Unknown reviewStatus "${d.reviewStatus}".`);
  }
  // The Phase 4 promise: nothing is labeled "editor reviewed" without a dated
  // review and a named reviewer.
  if (d.reviewStatus === "editor-reviewed") {
    if (isBlank(d.dateReviewed)) {
      at("editor-reviewed-without-date", 'reviewStatus is "editor-reviewed" but dateReviewed is missing.');
    }
    if (isBlank(d.reviewedBy)) {
      at("editor-reviewed-without-reviewer", 'reviewStatus is "editor-reviewed" but reviewedBy is missing.');
    }
  }
  // A dated review that predates the discovery is a data-entry error.
  if (d.dateReviewed && d.dateDiscovered && isValidIsoDate(d.dateReviewed) && isValidIsoDate(d.dateDiscovered)) {
    if (d.dateReviewed < d.dateDiscovered) {
      at("review-before-discovery", `dateReviewed (${d.dateReviewed}) is before dateDiscovered (${d.dateDiscovered}).`, "warn");
    }
  }
  // Correction records must be dated and described.
  for (const correction of d.correctionHistory ?? []) {
    if (!isValidIsoDate(correction.date)) {
      at("invalid-correction-date", `Correction date "${correction.date}" is not a valid YYYY-MM-DD date.`);
    } else if (isFuture(correction.date, now)) {
      at("future-correction-date", `Correction date "${correction.date}" is in the future.`, "warn");
    }
    if (isBlank(correction.summary)) {
      at("empty-correction", "A correction record has no summary.");
    }
  }
  return issues;
}

/**
 * Detect two distinct hub names that slugify to the same route (e.g. two orgs
 * whose pages would collide). Each hub type is checked independently.
 */
function hubCollisionIssues(discoveries: Discovery[]): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const check = (kind: string, names: Iterable<string>) => {
    const bySlug = new Map<string, Set<string>>();
    for (const name of names) {
      const slug = slugify(name);
      const set = bySlug.get(slug) ?? new Set<string>();
      set.add(name);
      bySlug.set(slug, set);
    }
    for (const [slug, group] of bySlug) {
      if (group.size > 1) {
        issues.push({
          level: "warn",
          code: `${kind}-slug-collision`,
          message: `${kind} names ${[...group].map((n) => `"${n}"`).join(", ")} all resolve to /${slug}.`,
        });
      }
    }
  };

  check("organization", new Set(discoveries.map((d) => d.discoveringOrg)));
  check("location", new Set(discoveries.map((d) => d.location.name)));
  check("tag", new Set(discoveries.flatMap((d) => d.tags)));
  return issues;
}

export interface ReviewCoverage {
  total: number;
  byStatus: Record<string, number>;
  /** Entries with no explicit reviewStatus (implicitly "preliminary"). */
  unlabeled: number;
  /** Editor-reviewed entries that carry a valid dated reviewer record. */
  editorReviewedComplete: number;
}

/** Summarize honest review coverage across the catalog (WS0 reporting). */
export function reviewCoverage(discoveries: Discovery[] = catalog): ReviewCoverage {
  const byStatus: Record<string, number> = {};
  let unlabeled = 0;
  let editorReviewedComplete = 0;

  for (const d of discoveries) {
    const status = d.reviewStatus ?? "unlabeled";
    byStatus[status] = (byStatus[status] ?? 0) + 1;
    if (d.reviewStatus === undefined) unlabeled += 1;
    if (
      d.reviewStatus === "editor-reviewed" &&
      !isBlank(d.dateReviewed) &&
      !isBlank(d.reviewedBy)
    ) {
      editorReviewedComplete += 1;
    }
  }

  return {
    total: discoveries.length,
    byStatus,
    unlabeled,
    editorReviewedComplete,
  };
}
