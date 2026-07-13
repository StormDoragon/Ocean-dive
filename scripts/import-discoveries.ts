#!/usr/bin/env node
/**
 * Import an externally prepared discovery batch bundle into the catalog.
 *
 * Usage:
 *   npm run import:discoveries -- imports/discovery-batches/batch-01 --dry-run
 *   npm run import:discoveries -- imports/discovery-batches/batch-01
 *
 * With --dry-run (or no bundle path) nothing is written: the plan and its
 * dry-run report are printed and the process exits non-zero if the batch has
 * any error.  Without --dry-run, the batch is applied ONLY when it is fully
 * valid; a batch with any error is rejected without touching the repository.
 *
 * This tool performs no research and invents no data — it only integrates the
 * records and images the bundle supplies.
 */
import { resolve } from "node:path";
import { buildPlan, applyPlan, renderReport, ROOT } from "./lib/import-batch";

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const bundleArg = args.find((a) => !a.startsWith("--"));

  if (!bundleArg) {
    console.error("\n✗ Provide a bundle path, e.g. imports/discovery-batches/batch-01\n");
    process.exit(1);
  }

  const bundleDir = resolve(ROOT, bundleArg);
  const plan = buildPlan(bundleDir);
  console.log(renderReport(plan));

  const errorCount = plan.issues.filter((i) => i.level === "error").length;

  if (dryRun) {
    console.log(`Dry run — no files written. ${errorCount ? `${errorCount} error(s).` : "Batch is importable."}\n`);
    process.exit(errorCount ? 1 : 0);
  }

  if (!plan.ok) {
    console.error(`✗ Import aborted: ${errorCount} error(s). The repository was not modified.\n`);
    process.exit(1);
  }

  const result = applyPlan(plan);
  console.log("Applied:");
  console.log(`  images copied:   ${result.imagesCopied}`);
  console.log(`  files created:   ${result.filesCreated.join(", ") || "none"}`);
  console.log(`  files appended:  ${result.filesAppended.join(", ") || "none"}`);
  console.log(`  catalog updated: ${result.catalogUpdated ? "yes" : "no"}`);
  console.log("\nNext: npm run validate && npm run build\n");
}

main();
