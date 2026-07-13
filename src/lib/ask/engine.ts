import { discoveries } from "@/content/catalog";
import { categories } from "@/content/categories";
import type { CategorySlug, Discovery } from "@/content/types";
import type { AggregationRow, AskResult } from "./types";

/**
 * A dependency-free natural-language query engine. It parses a question into
 * structured filters (depth, time, field, keywords) and an intent (list /
 * count / rank), then runs it against the discovery dataset. This is the
 * always-on path; when an API key is configured, llm.ts can answer instead.
 */

interface ParsedQuery {
  intent: "list" | "count" | "rank";
  rankBy?: "country" | "organization";
  depth?: { op: "gt" | "lt"; meters: number };
  requiresDepth?: boolean;
  year?: { op: "eq" | "gte" | "lte"; value: number };
  period?: "this-week" | "this-month" | "this-year";
  categorySlugs: CategorySlug[];
  speciesOnly: boolean;
  keywords: string[];
}

const CATEGORY_KEYWORDS: Record<CategorySlug, string[]> = {
  ocean: ["ocean", "marine", "sea", "deep-sea", "deep sea", "underwater", "reef", "vent", "abyss"],
  space: ["space", "exoplanet", "planet", "black hole", "galaxy", "galaxies", "nebula", "cosmic", "astronom", "asteroid", "star"],
  "dinosaurs-fossils": ["dinosaur", "fossil", "sauropod", "theropod", "titanosaur", "paleo", "prehistoric"],
  biology: ["biolog", "genetic", "microb", "hominin", "human evolution", "millipede", "arthropod"],
  archaeology: ["archaeolog", "archeolog", "ancient", "lost city", "tomb", "artifact", "civilization", "megalith", "temple"],
  "earth-science": ["volcano", "volcanic", "earthquake", "ice core", "climate", "eruption", "glacier", "subglacial"],
  physics: ["physics", "particle", "dark matter", "fusion", "gravitational", "higgs", "boson", "quantum research"],
  technology: ["technology", "robot", "quantum comput", "qubit", "material", "ai ", "artificial intelligence", "machine learning", "protein"],
};

const STOP_WORDS = new Set([
  "show", "me", "every", "all", "the", "a", "an", "of", "in", "on", "at", "to",
  "from", "which", "what", "who", "how", "many", "much", "discovery", "discoveries",
  "find", "found", "list", "give", "and", "or", "with", "that", "this", "these",
  "than", "more", "less", "deeper", "shallower", "below", "above", "greater",
  "count", "number", "most", "top", "rank", "discovered", "made", "were", "was",
  "is", "are", "there", "do", "does", "have", "has", "explain", "tell", "about",
  "since", "before", "after", "during", "between", "meter", "meters", "metre",
  "metres", "m", "km", "year", "years", "month", "week", "day", "days", "science",
]);

function parse(raw: string): ParsedQuery {
  const q = ` ${raw.toLowerCase()} `;
  const now = new Date();

  const parsed: ParsedQuery = {
    intent: "list",
    categorySlugs: [],
    speciesOnly: false,
    keywords: [],
  };

  // Intent: ranking ("which countries/organizations discover the most")
  if (/\b(which|what|who)\b/.test(q) && /\b(most|top|rank|leading|best)\b/.test(q)) {
    parsed.intent = "rank";
    parsed.rankBy = /\b(organi[sz]ation|institution|lab|agency|org)\b/.test(q)
      ? "organization"
      : "country";
  } else if (/\bhow many\b/.test(q) || /\b(count|number of)\b/.test(q)) {
    parsed.intent = "count";
  }

  // Depth: "deeper than 3000 m", "below 1 km", "shallower than 500 metres"
  const depthMatch = q.match(
    /(deeper|below|more than|greater than|over|beyond|>)\s*(?:than\s*)?(\d[\d,]*)\s*(k?m|meters?|metres?|kilometers?|kilometres?)/,
  );
  const shallowMatch = q.match(
    /(shallower|less than|above|under|<)\s*(?:than\s*)?(\d[\d,]*)\s*(k?m|meters?|metres?|kilometers?|kilometres?)/,
  );
  const toMeters = (n: string, unit: string) => {
    const val = Number(n.replace(/,/g, ""));
    return /^k/.test(unit) || /kilo/.test(unit) ? val * 1000 : val;
  };
  if (depthMatch) {
    parsed.depth = { op: "gt", meters: toMeters(depthMatch[2], depthMatch[3]) };
    parsed.requiresDepth = true;
  } else if (shallowMatch) {
    parsed.depth = { op: "lt", meters: toMeters(shallowMatch[2], shallowMatch[3]) };
    parsed.requiresDepth = true;
  } else if (/\b(deepest|depth|abyssal)\b/.test(q) || /\bdeep[- ]sea\b/.test(q)) {
    // Bare "deep" is deliberately excluded — it appears in unrelated phrases
    // like "deep learning" and would wrongly filter to depth-tagged finds.
    parsed.requiresDepth = true;
  }

  // Time periods
  if (/\bthis week\b/.test(q)) parsed.period = "this-week";
  else if (/\bthis month\b/.test(q)) parsed.period = "this-month";
  else if (/\bthis year\b/.test(q)) parsed.period = "this-year";
  else if (/\blast year\b/.test(q))
    parsed.year = { op: "eq", value: now.getFullYear() - 1 };

  // Decade e.g. "2010s"
  const decade = q.match(/\b((?:19|20)\d0)s\b/);
  // Explicit year
  const yearMatch = q.match(/\b(19|20)\d{2}\b/);
  if (!parsed.period && !parsed.year) {
    if (decade) {
      parsed.year = { op: "gte", value: Number(decade[1]) };
      // upper bound handled as decade range in apply()
      parsed.keywords.push(`__decade_${decade[1]}`);
    } else if (yearMatch) {
      const y = Number(yearMatch[0]);
      if (/\b(since|after|from)\b/.test(q)) parsed.year = { op: "gte", value: y };
      else if (/\b(before|until|up to)\b/.test(q)) parsed.year = { op: "lte", value: y };
      else parsed.year = { op: "eq", value: y };
    }
  }

  // Categories
  for (const cat of categories) {
    if (CATEGORY_KEYWORDS[cat.slug].some((kw) => q.includes(kw))) {
      parsed.categorySlugs.push(cat.slug);
    }
  }

  // "species" as a cross-cutting filter
  if (/\bspecies\b/.test(q)) parsed.speciesOnly = true;

  // Leftover keywords for free-text scoring
  parsed.keywords.push(
    ...raw
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP_WORDS.has(w)),
  );

  return parsed;
}

function matchesFilters(d: Discovery, p: ParsedQuery, now: Date): boolean {
  if (p.requiresDepth && d.location.depthMeters == null) return false;
  if (p.depth) {
    const depth = d.location.depthMeters;
    if (depth == null) return false;
    if (p.depth.op === "gt" && !(depth > p.depth.meters)) return false;
    if (p.depth.op === "lt" && !(depth < p.depth.meters)) return false;
  }

  if (p.categorySlugs.length > 0 && !p.categorySlugs.includes(d.categorySlug)) {
    return false;
  }

  if (p.speciesOnly) {
    const isSpecies =
      Boolean(d.scientificName) || /species/i.test(d.subtopic);
    if (!isSpecies) return false;
  }

  const decadeKw = p.keywords.find((k) => k.startsWith("__decade_"));
  if (decadeKw) {
    const start = Number(decadeKw.replace("__decade_", ""));
    if (d.year < start || d.year > start + 9) return false;
  }

  if (p.year) {
    if (p.year.op === "eq" && d.year !== p.year.value) return false;
    if (p.year.op === "gte" && d.year < p.year.value) return false;
    if (p.year.op === "lte" && d.year > p.year.value) return false;
  }

  if (p.period) {
    // Parse the entry date as UTC midnight and compare with UTC getters so the
    // window is consistent regardless of the server/runtime time zone.
    const date = new Date(`${d.dateDiscovered}T00:00:00Z`);
    if (p.period === "this-year" && date.getUTCFullYear() !== now.getUTCFullYear())
      return false;
    if (
      p.period === "this-month" &&
      (date.getUTCFullYear() !== now.getUTCFullYear() ||
        date.getUTCMonth() !== now.getUTCMonth())
    )
      return false;
    if (p.period === "this-week") {
      const weekAgo = new Date(now);
      weekAgo.setUTCDate(weekAgo.getUTCDate() - 7);
      if (date < weekAgo) return false;
    }
  }

  return true;
}

/** Free-text relevance score for ranking list results. */
function keywordScore(d: Discovery, keywords: string[]): number {
  const realKw = keywords.filter((k) => !k.startsWith("__"));
  if (realKw.length === 0) return 0;
  const haystack = [
    d.title,
    d.summary,
    d.subtopic,
    d.scientificName ?? "",
    d.discoveringOrg,
    d.location.name,
    d.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();
  let score = 0;
  for (const kw of realKw) if (haystack.includes(kw)) score += 1;
  return score;
}

function describe(p: ParsedQuery): string {
  const parts: string[] = [];
  if (p.categorySlugs.length > 0) {
    parts.push(
      p.categorySlugs
        .map((s) => categories.find((c) => c.slug === s)?.name ?? s)
        .join(" or "),
    );
  }
  if (p.speciesOnly) parts.push("species");
  if (p.depth) {
    parts.push(
      `${p.depth.op === "gt" ? "deeper than" : "shallower than"} ${p.depth.meters.toLocaleString()} m`,
    );
  } else if (p.requiresDepth) {
    parts.push("with a recorded depth");
  }
  const decadeKw = p.keywords.find((k) => k.startsWith("__decade_"));
  if (decadeKw) parts.push(`in the ${decadeKw.replace("__decade_", "")}s`);
  else if (p.year) {
    const verb = p.year.op === "eq" ? "in" : p.year.op === "gte" ? "since" : "before";
    parts.push(`${verb} ${p.year.value}`);
  }
  if (p.period === "this-week") parts.push("this week");
  if (p.period === "this-month") parts.push("this month");
  if (p.period === "this-year") parts.push("this year");

  const realKw = p.keywords.filter((k) => !k.startsWith("__"));
  const filterText = parts.length > 0 ? parts.join(", ") : "all discoveries";

  if (p.intent === "rank") {
    return `Ranking ${p.rankBy === "organization" ? "organizations" : "countries"} by number of discoveries in this catalog (${filterText}).`;
  }
  if (p.intent === "count") {
    return `Counting discoveries in this catalog: ${filterText}.`;
  }
  if (realKw.length > 0 && parts.length === 0) {
    return `Searching for "${realKw.join(" ")}".`;
  }
  return `Discoveries: ${filterText}.`;
}

export function runLocalQuery(query: string, now: Date = new Date()): AskResult {
  const trimmed = query.trim();
  const p = parse(trimmed);

  let matched = discoveries.filter((d) => matchesFilters(d, p, now));

  // Rank / aggregate
  if (p.intent === "rank") {
    const keyOf = (d: Discovery) =>
      p.rankBy === "organization" ? d.discoveringOrg : d.location.country;
    const counts = new Map<string, number>();
    for (const d of matched) counts.set(keyOf(d), (counts.get(keyOf(d)) ?? 0) + 1);
    const rows: AggregationRow[] = [...counts.entries()]
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count);

    const top = rows[0];
    return {
      query: trimmed,
      interpretation: describe(p),
      answer:
        rows.length === 0
          ? "No discoveries in this catalog matched, so there is nothing to rank."
          : `In this catalog, ${top.label} leads with ${top.count} ${top.count === 1 ? "discovery" : "discoveries"}${rows.length > 1 ? `, ahead of ${rows.length - 1} other${rows.length - 1 === 1 ? "" : "s"}.` : "."}`,
      results: matched,
      aggregation: {
        title:
          p.rankBy === "organization"
            ? "Discoveries by organization"
            : "Discoveries by country",
        rows,
      },
      source: "local",
    };
  }

  // Sort list/count by keyword relevance, then recency
  matched = matched
    .map((d) => ({ d, s: keywordScore(d, p.keywords) }))
    .sort((a, b) => b.s - a.s || b.d.dateDiscovered.localeCompare(a.d.dateDiscovered))
    .map((x) => x.d);

  const n = matched.length;
  const noun = n === 1 ? "discovery" : "discoveries";
  const answer =
    n === 0
      ? "No discoveries in the catalog match that yet — try broadening your question."
      : p.intent === "count"
        ? `${n} ${noun} match${n === 1 ? "es" : ""}.`
        : `Found ${n} matching ${noun}, most recently “${matched[0].title}” (${matched[0].year}).`;

  return {
    query: trimmed,
    interpretation: describe(p),
    answer,
    results: matched,
    source: "local",
  };
}
