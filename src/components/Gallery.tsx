import Image from "next/image";

export function Gallery({ images, title }: { images: string[]; title: string }) {
  if (images.length === 0) return null;
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {images.map((src, i) => (
        <div key={src + i} className="card relative aspect-[4/3] overflow-hidden">
          <Image
            src={src}
            alt={`${title} — image ${i + 1}`}
            fill
            sizes="(max-width: 640px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
