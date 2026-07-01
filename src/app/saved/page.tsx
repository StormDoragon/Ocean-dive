import type { Metadata } from "next";
import { SavedView } from "@/components/account/SavedView";

export const metadata: Metadata = {
  title: "Saved & badges",
  description:
    "Your saved discoveries, collections, and the badges you earn by exploring Beyond Signal.",
};

export default function SavedPage() {
  return (
    <div className="container-page py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">⭐ Your collection</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Save discoveries to build your own collection and earn badges as you
          explore. Saves work instantly in your browser, and sync to your
          account when you sign in.
        </p>
      </header>

      <SavedView />
    </div>
  );
}
