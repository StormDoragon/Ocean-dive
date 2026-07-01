import Link from "next/link";
import { categories } from "@/content/categories";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-abyss-950/60">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="grid h-7 w-7 place-items-center rounded-lg border border-signal/40 bg-signal/10 text-signal">
              ◎
            </span>
            {site.name}
          </div>
          <p className="mt-3 max-w-xs text-sm text-slate-400">{site.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="/discoveries" className="hover:text-white">All discoveries</Link></li>
            <li><Link href="/timeline" className="hover:text-white">Timeline</Link></li>
            <li><Link href="/depth" className="hover:text-white">Ocean depth explorer</Link></li>
            <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
            <li><Link href="/map" className="hover:text-white">Discovery map &amp; globe</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Categories</h3>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-400">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/categories/${c.slug}`} className="hover:text-white">
                  {c.emoji} {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">About</h3>
          <p className="mt-3 text-sm text-slate-400">
            A non-commercial educational prototype. Discovery facts are drawn from
            public reporting; images are placeholders.
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. Built for curiosity.
      </div>
    </footer>
  );
}
