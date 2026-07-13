#!/usr/bin/env node
/**
 * Remote image smoke test. Fetches every remote (https) heroImage and gallery
 * URL referenced by the catalog and asserts it returns HTTP 200 with an
 * `image/*` content-type. Catches delivery failures (403/404, hotlink blocks,
 * wrong MIME) that break Next/Vercel image optimization at runtime but that the
 * content validator — which only checks local files — cannot see.
 *
 * Usage:  npm run check:images
 * Exit code is non-zero if any remote image fails, so CI can gate on it.
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

/** Fetch with a timeout so a hanging host can't stall CI. */
async function probe(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    // Some hosts reject HEAD; use a ranged GET and read nothing.
    const res = await fetch(url, {
      method: "GET",
      headers: { Range: "bytes=0-0", "User-Agent": USER_AGENT },
      signal: controller.signal,
    });
    return { ok: res.ok, status: res.status, type: res.headers.get("content-type") ?? "" };
  } finally {
    clearTimeout(timer);
  }
}

/** One retry with a short backoff, so a transient blip isn't a hard failure. */
async function check(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const { ok, status, type } = await probe(url);
      if (ok && /^image\//i.test(type)) return null;
      if (ok) return `content-type "${type}" (expected image/*)`;
      if (attempt === 0) { await new Promise((r) => setTimeout(r, 1000)); continue; }
      return `HTTP ${status}`;
    } catch (err) {
      if (attempt === 0) { await new Promise((r) => setTimeout(r, 1000)); continue; }
      return err.name === "AbortError" ? "timed out" : err.message;
    }
  }
  return "unknown failure";
}

const failures = [];
await Promise.all(
  [...urls].map(async (url) => {
    const problem = await check(url);
    if (problem) failures.push(`${url} → ${problem}`);
  }),
);

console.log(`[check-remote-images] Checked ${urls.size} remote image URL(s).`);
if (failures.length > 0) {
  console.error(`\n✗ ${failures.length} remote image(s) failed:`);
  for (const f of failures) console.error(`  • ${f}`);
  console.error("\nReplace the failing URLs with verified local assets (or fix the source).\n");
  process.exit(1);
}
console.log("✓ All remote images return image/* with HTTP 200.\n");
