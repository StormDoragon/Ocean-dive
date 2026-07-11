#!/usr/bin/env node
/**
 * Beyond Signal release gate (Phase 4, Workstream 5).
 *
 * Runs the pure catalog rules from src/lib/validation/rules.ts and adds the
 * checks that need the filesystem or the full route graph:
 *   - every local image referenced by a discovery exists in public/
 *   - every static internal link in the app resolves to a real route
 *   - every discovery appears in the generated sitemap (no omissions)
 *
 * Exit code is non-zero when any error-level issue is found, so it can guard
 * the build:  "prebuild": "npm run validate".  Warnings are printed but do not
 * fail the gate.  Pass --strict to also fail on warnings.
 *
 * Run it with:  npm run validate
 */
import { readdirSync, existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";

import { validateCatalog, reviewCoverage, type ContentIssue } from "@/lib/validation/rules";
import { discoveries } from "@/content/catalog";
import { categories } from "@/content/categories";
import { getAll, getAvailableMonths } from "@/lib/discoveries";
import { getSubtopics, getOrganizations, getLocations, getTags, getYears } from "@/lib/hubs";
import { monthSlug } from "@/lib/seo";
import sitemap from "@/app/sitemap";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const APP_DIR = join(ROOT, "src", "app");
const PUBLIC_DIR = join(ROOT, "public");
const STRICT = process.argv.includes("--strict");

/* ------------------------------------------------------------------ *
 * The authoritative set of URLs the site actually serves.
 * ------------------------------------------------------------------ */

/** Static page routes: an app directory with a page file and no dynamic or
 * route-group segment (dynamic routes are covered by the data enumeration). */
function staticPageRoutes(): Set<string> {
  const routes = new Set<string>(["/"]);
  const walk = (dir: string, segments: string[]) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;
      if (name.startsWith("[")) continue; // dynamic — enumerated from data
      const nextSegments = name.startsWith("(") && name.endsWith(")") ? segments : [...segments, name];
      const childDir = join(dir, name);
      if (["page.tsx", "page.ts", "page.jsx", "page.js"].some((f) => existsSync(join(childDir, f)))) {
        routes.add("/" + nextSegments.join("/"));
      }
      walk(childDir, nextSegments);
    }
  };
  walk(APP_DIR, []);
  return routes;
}

/** Every data-driven URL, mirroring generateStaticParams across the app. */
function dataRoutes(): Set<string> {
  const routes = new Set<string>();
  for (const d of getAll()) routes.add(`/discoveries/${d.slug}`);
  for (const c of categories) routes.add(`/categories/${c.slug}`);
  for (const { year, month } of getAvailableMonths()) routes.add(`/discoveries/${year}/${monthSlug(month)}`);
  for (const org of getOrganizations()) routes.add(`/organizations/${org.slug}`);
  for (const loc of getLocations()) routes.add(`/locations/${loc.slug}`);
  for (const tag of getTags()) routes.add(`/tags/${tag.slug}`);
  for (const category of categories) {
    for (const subtopic of getSubtopics(category.slug)) routes.add(`/${category.slug}/${subtopic.slug}`);
  }
  // Top-level annual hubs served by app/[slug] (mirror its annualHubs()).
  for (const year of getYears()) {
    routes.add(`/scientific-discoveries-${year}`);
    routes.add(`/new-species-discovered-${year}`);
    for (const category of categories) routes.add(`/${category.slug}-discoveries-${year}`);
  }
  return routes;
}

/* ------------------------------------------------------------------ *
 * Filesystem checks.
 * ------------------------------------------------------------------ */

function imageFileIssues(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  for (const d of discoveries) {
    const local = [d.heroImage, ...(d.gallery ?? [])].filter(
      (src) => src && !/^https?:\/\//i.test(src),
    );
    for (const src of local) {
      const rel = src.replace(/^\//, "");
      if (!existsSync(join(PUBLIC_DIR, rel))) {
        issues.push({
          level: "error",
          code: "missing-image-file",
          slug: d.slug,
          message: `Image "${src}" is not present in public/.`,
        });
      }
    }
  }
  return issues;
}

/** Collect fully-static internal href literals from every .ts/.tsx source. */
function collectStaticLinks(): Array<{ href: string; file: string }> {
  const links: Array<{ href: string; file: string }> = [];
  const hrefLiteral = /href=(?:"([^"${}]*)"|\{"([^"${}]*)"\})/g;
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name === ".next") continue;
        walk(full);
      } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
        const text = readFileSync(full, "utf8");
        let match: RegExpExecArray | null;
        while ((match = hrefLiteral.exec(text)) !== null) {
          const href = match[1] ?? match[2];
          if (href) links.push({ href, file: relative(ROOT, full) });
        }
      }
    }
  };
  walk(join(ROOT, "src"));
  return links;
}

function internalLinkIssues(valid: Set<string>): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const seen = new Set<string>();
  for (const { href, file } of collectStaticLinks()) {
    // Only fully-internal, path-only links (skip external, anchors, mailto).
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const path = href.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
    if (valid.has(path)) continue;
    const key = `${path}@${file}`;
    if (seen.has(key)) continue;
    seen.add(key);
    issues.push({
      level: "error",
      code: "broken-internal-link",
      message: `${file} links to "${path}", which is not a route the site serves.`,
    });
  }
  return issues;
}

function sitemapCoverageIssues(): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const entries = sitemap();
  const urls = new Set(entries.map((e) => new URL(e.url).pathname.replace(/\/+$/, "") || "/"));
  for (const d of discoveries) {
    if (!urls.has(`/discoveries/${d.slug}`)) {
      issues.push({
        level: "error",
        code: "sitemap-omission",
        slug: d.slug,
        message: `Discovery "${d.slug}" is missing from the generated sitemap.`,
      });
    }
  }
  return issues;
}

/* ------------------------------------------------------------------ *
 * Report.
 * ------------------------------------------------------------------ */

function main() {
  const validRoutes = new Set<string>([...staticPageRoutes(), ...dataRoutes()]);

  const issues: ContentIssue[] = [
    ...validateCatalog({ discoveries }),
    ...imageFileIssues(),
    ...internalLinkIssues(validRoutes),
    ...sitemapCoverageIssues(),
  ];

  const errors = issues.filter((i) => i.level === "error");
  const warnings = issues.filter((i) => i.level === "warn");

  const print = (list: ContentIssue[]) => {
    for (const i of list) {
      const where = i.slug ? ` [${i.slug}]` : "";
      console.log(`  ${i.level === "error" ? "✗" : "•"} ${i.code}${where}: ${i.message}`);
    }
  };

  console.log(`\nBeyond Signal content validation — ${discoveries.length} discoveries\n`);

  // Review coverage (WS0): an honest snapshot of editorial status.
  const coverage = reviewCoverage(discoveries);
  console.log("Editorial review coverage:");
  for (const [status, count] of Object.entries(coverage.byStatus).sort()) {
    console.log(`  ${status.padEnd(18)} ${count}`);
  }
  console.log(
    `  editor-reviewed with a complete dated reviewer record: ${coverage.editorReviewedComplete}\n`,
  );

  if (errors.length) {
    console.log(`Errors (${errors.length}) — these block a release:`);
    print(errors);
    console.log("");
  }
  if (warnings.length) {
    console.log(`Warnings (${warnings.length})${STRICT ? " — blocking (--strict)" : ""}:`);
    print(warnings);
    console.log("");
  }

  if (!errors.length && !warnings.length) {
    console.log("All content-integrity and SEO checks passed.\n");
  }

  const failed = errors.length > 0 || (STRICT && warnings.length > 0);
  if (failed) {
    console.error(
      `Validation failed: ${errors.length} error(s)${STRICT ? `, ${warnings.length} warning(s)` : ""}.\n`,
    );
    process.exit(1);
  }
  console.log("Validation passed.\n");
}

main();
