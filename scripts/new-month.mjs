#!/usr/bin/env node
/**
 * Scaffold a new monthly discovery batch (Phase 4, Workstream 1).
 *
 * Creates src/content/discoveries-<month>-<year>.ts from a template and
 * registers it in src/content/catalog.ts, so a new month can be published
 * without editing any route or the sitemap by hand.
 *
 * Usage:
 *   npm run new-month 2026-07
 *   npm run new-month july 2026
 *
 * After running: fill in the entries, then `npm run validate` before release.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const CONTENT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "content");
const CATALOG = join(CONTENT_DIR, "catalog.ts");

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

function parseArgs(argv) {
  const args = argv.slice(2);
  // Form 1: "2026-07"
  const iso = args.find((a) => /^\d{4}-\d{2}$/.test(a));
  if (iso) {
    const [year, month] = iso.split("-").map(Number);
    return { year, monthIndex: month - 1 };
  }
  // Form 2: "july 2026" (any order)
  const monthArg = args.find((a) => MONTHS.includes(a.toLowerCase()));
  const yearArg = args.find((a) => /^\d{4}$/.test(a));
  if (monthArg && yearArg) {
    return { year: Number(yearArg), monthIndex: MONTHS.indexOf(monthArg.toLowerCase()) };
  }
  return null;
}

function fail(message) {
  console.error(`\n✗ ${message}\n`);
  console.error("Usage: npm run new-month 2026-07   (or)   npm run new-month july 2026\n");
  process.exit(1);
}

const parsed = parseArgs(process.argv);
if (!parsed) fail("Could not read a month and year from the arguments.");

const { year, monthIndex } = parsed;
if (monthIndex < 0 || monthIndex > 11) fail("Month is out of range.");

const monthName = MONTHS[monthIndex];
const exportName = `${monthName}${year}Discoveries`;
const fileBase = `discoveries-${monthName}-${year}`;
const filePath = join(CONTENT_DIR, `${fileBase}.ts`);
const titleMonth = monthName[0].toUpperCase() + monthName.slice(1);

if (existsSync(filePath)) fail(`${fileBase}.ts already exists.`);

const template = `import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during ${titleMonth} ${year}.
 * Keep these entries separate from the seed catalog so monthly updates remain
 * easy to review, verify, and extend. Run \`npm run validate\` before release.
 */
export const ${exportName}: Discovery[] = [
  // Example — copy, then replace every field with sourced facts and delete this note.
  // {
  //   slug: "example-${monthName}-${year}-discovery",
  //   title: "Example Discovery",
  //   categorySlug: "ocean",
  //   subtopic: "New species",
  //   year: ${year},
  //   dateDiscovered: "${year}-${String(monthIndex + 1).padStart(2, "0")}-01",
  //   location: { name: "Somewhere", lat: 0, lng: 0, country: "International" },
  //   discoveringOrg: "Research organization",
  //   heroImage: "/images/categories/ocean.svg",
  //   summary: "One or two sentences describing the discovery.",
  //   story: {
  //     whyThere: "Why the discovery happened where it did.",
  //     howFound: "How it was found.",
  //     whatMakesUnique: "What makes it significant.",
  //   },
  //   gallery: ["/images/categories/ocean.svg"],
  //   primarySourceUrl: "https://example.org/source",
  //   sourceAccessedAt: "${year}-${String(monthIndex + 1).padStart(2, "0")}-01",
  //   videoUrls: [],
  //   relatedSlugs: [],
  //   tags: ["new species"],
  // },
];
`;

writeFileSync(filePath, template);

// Register in catalog.ts at the scaffold anchors.
let catalog = readFileSync(CATALOG, "utf8");
const importAnchor = "// scaffold:import";
const spreadAnchor = "// scaffold:spread";
if (!catalog.includes(importAnchor) || !catalog.includes(spreadAnchor)) {
  fail("catalog.ts is missing the scaffold anchors; register the new file manually.");
}
if (catalog.includes(`./${fileBase}`)) {
  console.log(`\n• ${fileBase} is already registered in catalog.ts.`);
} else {
  catalog = catalog
    .replace(importAnchor, `import { ${exportName} } from "./${fileBase}";\n${importAnchor}`)
    .replace(spreadAnchor, `...${exportName},\n  ${spreadAnchor}`);
  writeFileSync(CATALOG, catalog);
}

console.log(`
✓ Created src/content/${fileBase}.ts
✓ Registered ${exportName} in catalog.ts

Next steps (see docs/monthly-ingestion.md):
  1. Add sourced entries to ${fileBase}.ts.
  2. npm run validate   — content + SEO release gate.
  3. npm run build      — routes, archives, and sitemap update automatically.
`);
