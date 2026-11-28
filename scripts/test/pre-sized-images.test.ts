import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import sharp from "sharp";
import { getImageProps } from "next/image";
import { sizedImageSource, type ImageVariant } from "../../src/lib/pre-sized-image";

async function main() {
const assets: Record<string, ImageVariant[]> = JSON.parse(await readFile("src/generated/image-manifest.json", "utf8"));
assert.ok(Object.keys(assets).length > 1000, "Run prepare:images before this test");
const sample = Object.entries(assets).find(([src]) => src.includes("zealand-neolithic"));
assert.ok(sample);
const [source, variants] = sample;
assert.equal(sizedImageSource(source, 320, variants), variants[0].src);
assert.equal(sizedImageSource(source, 5000, variants), source);
assert.equal(sizedImageSource("/images/categories/space.svg", 640), "/images/categories/space.svg");
const remote = "https://upload.wikimedia.org/example.jpg";
assert.equal(sizedImageSource(remote, 640), remote);
const { props } = getImageProps({
  src: source, alt: "Preserved alt text", fill: true, sizes: "(max-width: 768px) 100vw, 33vw",
  loader: ({ src, width }) => sizedImageSource(src, width, variants),
});
assert.equal(props.alt, "Preserved alt text");
assert.ok(props.srcSet?.includes("/images/resized/"));
assert.ok(!props.srcSet?.includes("/_next/image"));
let checked = 0;
for (const [src, items] of Object.entries(assets)) {
  const original = await stat("public" + src);
  assert.equal(items[items.length - 1].src, src);
  for (const item of items) {
    const file = "public" + item.src;
    const metadata = await sharp(file).metadata();
    assert.equal(metadata.width, item.width, item.src);
    if (item.src !== src) {
      assert.ok((await stat(file)).size < original.size, item.src + " should be smaller");
      assert.ok(item.width < items[items.length - 1].width, "Never upscale");
    }
    checked++;
  }
}
console.log("[pre-sized-images] Passed: " + Object.keys(assets).length + " sources, " + checked + " original/variant files; responsive URLs, dimensions, byte savings, and unchanged originals.");

}
main().catch(error => { console.error(error); process.exitCode = 1; });
