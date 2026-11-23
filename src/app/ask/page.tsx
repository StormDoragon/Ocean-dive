import type { Metadata } from "next";
import { AskConsole } from "@/components/ask/AskConsole";
import { isLlmConfigured } from "@/lib/ask/llm";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ask — natural-language search",
  description:
    "Ask questions about scientific discoveries in plain English: filter by depth, field, and time, or rank countries and organizations.",
  alternates: { canonical: canonicalUrl("/ask") },
};

export default function AskPage() {
  const aiEnabled = isLlmConfigured();

  return (
    <div className="container-page py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white">✨ Ask The Nucleon</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Ask in plain English. The built-in engine understands depth
          (&ldquo;deeper than 3,000 m&rdquo;), fields, time (&ldquo;since
          2019&rdquo;, &ldquo;this year&rdquo;), counts, and rankings
          (&ldquo;which countries discover the most?&rdquo;). Add an Anthropic
          API key to upgrade to full AI answers.
        </p>
      </header>

      <AskConsole aiEnabled={aiEnabled} />
    </div>
  );
}
