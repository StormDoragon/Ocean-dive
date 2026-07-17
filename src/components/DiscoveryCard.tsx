import Link from "next/link";
import type { Discovery } from "@/content/types";
import { getCategory } from "@/content/categories";
import { imagePresentation } from "@/lib/images";
import { ResilientImage } from "./ResilientImage";
import { ReviewBadge } from "./ReviewBadge";

export function DiscoveryCard({ discovery }: { discovery: Discovery }) {
  const category = getCategory(discovery.categorySlug);
  const image = imagePresentation(discovery);

  return (
    <Link
      href={`/discoveries/${discovery.slug}`}
      className="card group flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:border-signal/40"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <ResilientImage
          src={image.src}
          fallbackSrc={`/images/categories/${discovery.categorySlug}.svg`}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {image.relation !== "exact" ? (
          <span className="absolute bottom-2 left-2 rounded bg-abyss-950/85 px-1.5 py-0.5 text-[10px] font-medium text-slate-300 ring-1 ring-white/10">
            {image.relation === "contextual" ? "Representative" : "Illustration"}
          </span>
        ) : null}
        <span
          className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium text-white shadow"
          style={{ backgroundColor: (category?.color ?? "#38e1ff") + "cc" }}
        >
          {category?.emoji} {category?.name}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
          <span>{discovery.year}</span>
          <span aria-hidden>·</span>
          <span className="truncate">{discovery.location.name}</span>
          {discovery.reviewStatus ? (
            <>
              <span aria-hidden>·</span>
              <ReviewBadge status={discovery.reviewStatus} />
            </>
          ) : null}
        </div>
        <h3 className="mt-1.5 font-semibold text-white transition-colors group-hover:text-signal">
          {discovery.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-400">
          {discovery.summary}
        </p>
        <span className="mt-3 text-sm font-medium text-signal">Read more →</span>
      </div>
    </Link>
  );
}
