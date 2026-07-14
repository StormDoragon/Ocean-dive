#!/usr/bin/env node
/**
 * Audit an externally prepared discovery batch bundle WITHOUT importing it.
 *
 * Usage:
 *   npm run audit:discovery-batch -- imports/discovery-batches/batch-01
 *
 * This is a strict read-only check: it never writes to the repository. It runs
 * the exact same validation the importer uses (interface conformance, image
 * decoding + dimensions, duplicate slugs/titles/scientific-names/DOIs/
 * primary-source URLs/image hashes across the batch, catalog, and committed
 * manifests, manifest cross-checks, related-slug resolution, path safety, and
 * the full catalog rules on the merged set) and exits non-zero on any error.
 */
import { resolve } from "node:path";
import { buildPlan, renderReport, ROOT } from "./lib/import-batch";

async function main() {
  const args = process.argv.slice(2);
  const bundleArg = args.find((a) => !a.startsWith("--"));

  if (!bundleArg) {
    console.error("\n✗ Provide a bundle path, e.g. imports/discovery-batches/batch-01\n");
    process.exit(1);
  }

  const plan = await buildPlan(resolve(ROOT, bundleArg));
  console.log(renderReport(plan));

  const errorCount = plan.issues.filter((i) => i.level === "error").length;
  const warnCount = plan.issues.filter((i) => i.level === "warn").length;
  console.log(
    `Audit result: ${errorCount} error(s), ${warnCount} warning(s). Read-only — nothing was written.\n`,
  );
  process.exit(errorCount ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
