import { NextResponse } from "next/server";
import { runLocalQuery } from "@/lib/ask/engine";
import { answerWithClaude, isLlmConfigured } from "@/lib/ask/llm";

export const runtime = "nodejs";

export async function POST(request: Request) {
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
