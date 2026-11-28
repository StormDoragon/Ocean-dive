export type ImageVariant = { width: number; src: string };

/** Pick the smallest adequate static file; retain the original at full size. */
export function sizedImageSource(src: string, width: number, variants?: ImageVariant[]): string {
  if (!variants?.length) return src;
  return (variants.find(variant => variant.width >= width) ?? variants[variants.length - 1]).src;
}
