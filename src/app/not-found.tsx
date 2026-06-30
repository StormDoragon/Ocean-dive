import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="text-6xl">🛰️</p>
        <h1 className="mt-4 text-3xl font-bold text-white">Lost in the deep</h1>
        <p className="mt-2 text-slate-400">
          This discovery hasn&apos;t been catalogued — or the signal was lost.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-abyss-950 hover:bg-signal-400"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
