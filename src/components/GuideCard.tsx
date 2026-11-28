import Image from "@/components/ContentImage";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { getCategory } from "@/content/categories";

/**
 * Card for an SEO guide, showing its featured image and title. Used on the
 * homepage "latest guides" strip and on each category's article section.
 * Falls back to an emoji tile when a post has no (real) hero image.
 */
export function GuideCard({ post }: { post: BlogPost }) {
  const category = post.category ? getCategory(post.category) : undefined;
  const image = post.heroImage;
  const hasPhoto = Boolean(image && !image.placeholder);

  return (
    <Link
      href={`/discovery/${post.slug}`}
      className="card group flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:border-signal/40"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        {hasPhoto && image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-abyss-800 to-abyss-950 text-4xl">
            <span aria-hidden>{post.emoji ?? "📄"}</span>
          </div>
        )}
        {category ? (
          <span
            className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium text-white shadow"
            style={{ backgroundColor: (category.color ?? "#38e1ff") + "cc" }}
          >
            {category.emoji} {category.name}
          </span>
        ) : (
          <span className="absolute left-3 top-3 rounded-full bg-signal/80 px-2.5 py-1 text-xs font-medium text-abyss-950 shadow">
            Guide
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="text-xs text-slate-400">
          {new Date(post.datePublished).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
          })}
        </div>
        <h3 className="mt-1 line-clamp-2 font-semibold text-white transition-colors group-hover:text-signal">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-400">{post.description}</p>
        <span className="mt-3 text-sm font-medium text-signal">Read guide →</span>
      </div>
    </Link>
  );
}
