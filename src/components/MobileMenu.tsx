"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/site";

/** Hamburger navigation for viewports below lg, where the inline nav is hidden. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-slate-200 transition-colors hover:border-signal/40"
      >
        <span aria-hidden className="text-lg leading-none">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open ? (
        <>
          {/* Click-away backdrop */}
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[999] cursor-default bg-abyss-950/60"
          />
          <nav className="absolute left-0 right-0 top-16 z-[1001] border-b border-white/10 bg-abyss-900/95 backdrop-blur-md">
            <ul className="container-page grid gap-1 py-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/saved"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-signal transition-colors hover:bg-signal/10"
                >
                  ★ Saved &amp; badges
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </div>
  );
}
