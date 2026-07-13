import { NextResponse } from "next/server";
import { runLocalQuery } from "@/lib/ask/engine";
import { answerWithClaude, isLlmConfigured } from "@/lib/ask/llm";

export const runtime = "nodejs";

const MAX_QUERY_LENGTH = 1000;
const RATE_LIMIT = 20; // requests
const RATE_WINDOW_MS = 60_000; // per minute, per IP

// Best-effort in-memory limiter. On serverless this resets per instance, so it
// is a guardrail against a single abusive client, not a global quota.
const hits = new Map<string, number[]>();

function isRateLimited(ip: string, now = Date.now()): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please slow down." },
      { status: 429 },
    );
  }

  let query = "";
  try {
    const body = (await request.json()) as { query?: unknown };
    query = typeof body.query === "string" ? body.query : "";
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!query.trim()) {
    return NextResponse.json({ error: "Empty query." }, { status: 400 });
  }
  if (query.length > MAX_QUERY_LENGTH) {
    return NextResponse.json(
      { error: `Query too long (max ${MAX_QUERY_LENGTH} characters).` },
      { status: 400 },
    );
  }

  // Prefer Claude when an API key is configured; fall back to the local
  // engine on any error so the feature always works.
  if (isLlmConfigured()) {
    try {
      const result = await answerWithClaude(query);
      return NextResponse.json(result);
    } catch (err) {
      console.error("Claude answer failed, falling back to local:", err);
    }
  }

  return NextResponse.json(runLocalQuery(query));
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    mode: isLlmConfigured() ? "claude" : "local",
    hint: "POST { query: string } to ask a question.",
  });
}
