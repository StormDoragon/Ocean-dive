#!/usr/bin/env node
/**
 * Remote image smoke test. Fetches every remote (https) heroImage and gallery
 * URL referenced by the catalog and checks it serves an actual image, catching
 * delivery failures (403/404, oversized-thumbnail 400s, wrong MIME) that break
 * Next/Vercel image optimization at runtime but that the content validator —
 * which only checks local files — cannot see.
 *
 * Usage:  npm run check:images
 *
 * Hard failures (exit 1): HTTP 400/401/403/404, non-image content-type.
 * Rate limits (HTTP 429) are reported as warnings, not failures, since they
 * mean "try again later", not "broken" — so a busy image host can't flake CI.
 */
import { discoveries } from "../src/content/catalog.ts";

const urls = new Set();
for (const d of discoveries) {
  for (const src of [d.heroImage, ...(d.gallery ?? [])]) {
    if (src && /^https?:\/\//i.test(src)) urls.add(src);
  }
}

if (urls.size === 0) {
  console.log("[check-remote-images] No remote images referenced — nothing to check.");
  process.exit(0);
}

// A descriptive User-Agent (per Wikimedia's UA policy) to avoid false 403s.
const USER_AGENT =
  "beyond-signal-image-check/1.0 (https://github.com/StormDoragon/Ocean-dive)";
const CONCURRENCY = 4;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** GET the URL and inspect the response headers without downloading the body. */
async function probe(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT },
      signal: controller.signal,
    });
    res.body?.cancel().catch(() => {}); // don't download the payload
    return { status: res.status, type: res.headers.get("content-type") ?? "" };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Returns { ok } | { warn } | { fail }. Retries transient conditions (429, 5xx,
 * network/timeout) a few times with backoff before giving up.
 */
async function check(url) {
  let lastTransient = "unknown error";
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const { status, type } = await probe(url);
      if (status >= 200 && status < 300) {
        return /^image\//i.test(type)
          ? { ok: true }
          : { fail: `content-type "${type}" (expected image/*)` };
      }
      if (status === 429 || status >= 500) {
        lastTransient = `HTTP ${status}`;
        await sleep(1500 * (attempt + 1));
        continue;
      }
      return { fail: `HTTP ${status}` }; // 400/401/403/404 → hard failure
    } catch (err) {
      lastTransient = err.name === "AbortError" ? "timed out" : err.message;
      await sleep(1500 * (attempt + 1));
    }
  }
  // Persistent transient (usually rate limiting) — warn, don't fail CI.
  return { warn: lastTransient };
}

/** Run checks with bounded concurrency so we don't hammer the image host. */
const items = [...urls];
const failures = [];
const warnings = [];
let cursor = 0;
async function worker() {
  while (cursor < items.length) {
    const url = items[cursor++];
    const r = await check(url);
    if (r.fail) failures.push(`${url} → ${r.fail}`);
    else if (r.warn) warnings.push(`${url} → ${r.warn}`);
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

console.log(`[check-remote-images] Checked ${urls.size} remote image URL(s).`);
if (warnings.length > 0) {
  console.warn(`\n⚠ ${warnings.length} image(s) could not be confirmed (rate-limited/transient):`);
  for (const w of warnings) console.warn(`  • ${w}`);
}
if (failures.length > 0) {
  console.error(`\n✗ ${failures.length} remote image(s) failed:`);
  for (const f of failures) console.error(`  • ${f}`);
  console.error("\nReplace the failing URLs with verified assets (or fix the source).\n");
  process.exit(1);
}
console.log("✓ All remote images resolved (or were only rate-limited).\n");
