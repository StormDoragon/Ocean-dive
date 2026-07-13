import Image from "next/image";
import { isPlaceholderImage } from "@/lib/images";

export function Gallery({
  images,
  title,
  /** Descriptive alt for the subject (e.g. the discovery's imageAlt). */
  describedAlt,
}: {
  images: string[];
  title: string;
  describedAlt?: string;
}) {
  if (images.length === 0) return null;
  const base = describedAlt?.trim() || title;
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {images.map((src, i) => {
        // Placeholder textures/category art get honest alt; real images reuse
        // the descriptive subject alt so screen readers never hear "image 1".
        const alt = isPlaceholderImage(src)
          ? `Illustration accompanying ${title} (not a photo of the discovery)`
          : images.length > 1
            ? `${base} (view ${i + 1} of ${images.length})`
            : base;
        return (
          <div key={src + i} className="card relative aspect-[4/3] overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
