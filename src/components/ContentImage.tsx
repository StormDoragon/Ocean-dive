"use client";

import Image, { type ImageProps } from "next/image";
import manifest from "@/generated/image-manifest.json";
import { sizedImageSource, type ImageVariant } from "@/lib/pre-sized-image";

const assets: Record<string, ImageVariant[]> = manifest;

/**
 * Local covers use files prepared by prepare-images.mjs, so browsing the atlas
 * does not spend an image transformation for every cover and viewport.
 * Remote sources retain their existing Next.js optimization behavior.
 */
export default function ContentImage(props: ImageProps) {
  const source = typeof props.src === "string" ? props.src : undefined;
  const variants = source ? assets[source] : undefined;
  const localRaster = Boolean(source?.startsWith("/") && /\.(jpe?g|png|webp|avif)$/i.test(source));
  if (props.loader || props.unoptimized) return <Image {...props} alt={props.alt} />;
  return (
    <Image
      {...props}
      alt={props.alt}
      loader={variants ? ({ src, width }) => sizedImageSource(src, width, variants) : undefined}
      unoptimized={localRaster && !variants ? true : undefined}
    />
  );
}
