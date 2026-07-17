"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * next/image that never leaves a dead grey box: if the primary source fails
 * to load (hero images are hotlinked from external hosts), it swaps to the
 * local category artwork instead.
 */
export function ResilientImage({
  fallbackSrc,
  src,
  alt,
  ...rest
}: ImageProps & { fallbackSrc: string }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}
