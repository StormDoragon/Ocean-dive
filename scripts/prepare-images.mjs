#!/usr/bin/env node
// Generate local responsive covers at build time. Never fetch remote sources or
// send requests to /_next/image: the original remains available for SEO/credits.
import { createHash } from "node:crypto";
import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const inputRoot = path.join(root, "public/images");
const outputRoot = path.join(inputRoot, "resized");
const manifestFile = path.join(root, "src/generated/image-manifest.json");
const widths = [480, 960];
const assets = {};
let generated = 0;
let originalBytes = 0;
let smallBytes = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const filename = path.join(dir, entry.name);
    if (filename === outputRoot) continue;
    if (entry.isDirectory()) files.push(...await walk(filename));
    else if (/\.(jpe?g|png|webp|avif)$/i.test(entry.name)) files.push(filename);
  }
  return files;
}

await mkdir(outputRoot, { recursive: true });
for (const filename of await walk(inputRoot)) {
  const input = await readFile(filename);
  const metadata = await sharp(input).metadata();
  // Animated images need their original delivery path.
  if (!metadata.width || (metadata.pages ?? 1) > 1) continue;
  const source = "/" + path.relative(path.join(root, "public"), filename).split(path.sep).join("/");
  // Including encoder settings in the hash makes long-lived CDN caching safe.
  const hash = createHash("sha256").update("responsive-webp-v1-q78:").update(input).digest("hex").slice(0, 20);
  const variants = [];
  for (const width of widths.filter(width => width < metadata.width)) {
    const name = hash + "-" + width + ".webp";
    const target = path.join(outputRoot, name);
    let data;
    try { data = await readFile(target); }
    catch (error) {
      if (error.code !== "ENOENT") throw error;
      data = await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
    }
    // Do not ship a re-encode that is larger than the original.
    if (data.length >= input.length) continue;
    await writeFile(target, data);
    variants.push({ width, src: "/images/resized/" + name });
    generated++;
    if (width === widths[0]) smallBytes += data.length;
  }
  variants.push({ width: metadata.width, src: source });
  assets[source] = variants;
  originalBytes += input.length;
  if (!variants.some(variant => variant.width === widths[0])) smallBytes += input.length;
}
await mkdir(path.dirname(manifestFile), { recursive: true });
await writeFile(manifestFile, JSON.stringify(assets) + "\n");
console.log("[prepare-images] " + Object.keys(assets).length + " local sources; " + generated + " variants.");
console.log("[prepare-images] Smallest covers: " + smallBytes + " bytes vs originals " + originalBytes + " bytes (" + (100 * (1 - smallBytes / originalBytes)).toFixed(1) + "% less).");
