import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[1000] border-b border-white/10 bg-abyss-950/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-signal/40 bg-signal/10 text-signal">
            ◎
          </span>
          <span className="text-lg text-white">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/discoveries"
          className="rounded-full border border-signal/40 bg-signal/10 px-4 py-1.5 text-sm font-medium text-signal transition-colors hover:bg-signal/20"
        >
          Search
        </Link>
      </div>
    </header>
  );
}
