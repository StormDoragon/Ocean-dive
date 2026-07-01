import type { Discovery } from "@/content/types";

export interface AggregationRow {
  label: string;
  count: number;
}

export interface AskResult {
  /** Echo of the user's question. */
  query: string;
  /** Plain-English restatement of how the query was understood. */
  interpretation: string;
  /** A one-line natural-language answer/summary. */
  answer: string;
  /** Matching discoveries (may be empty). */
  results: Discovery[];
  /** Optional ranking for "which/how many" style questions. */
  aggregation?: {
    title: string;
    rows: AggregationRow[];
  };
  /** Which backend answered — surfaced in the UI for transparency. */
  source: "local" | "claude";
}
