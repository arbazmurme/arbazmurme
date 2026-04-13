import { NextResponse } from "next/server";
import { buildPortfolioPrompt, portfolioContext } from "@/data/portfolioContext";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_MODEL = "llama-3.1-8b-instant";

export async function POST(request) {
  try {
    const groqApiKey = process.env.GROQ_API_KEY;

    if (!groqApiKey) {
      return NextResponse.json(
        {
          error:
            "GROQ_API_KEY is missing. Add it to your .env file to enable the chatbot.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const incomingMessages = Array.isArray(body?.messages) ? body.messages : [];

    if (!incomingMessages.length) {
      return NextResponse.json(
        { error: "Please send at least one message." },
        { status: 400 }
      );
    }

    const messages = incomingMessages
      .filter(
        (message) =>
          message &&
          typeof message.role === "string" &&
          typeof message.content === "string"
      )
      .map((message) => ({
        role: message.role,
        content: message.content.trim(),
      }))
      .filter((message) => message.content);

    const upstreamResponse = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${groqApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        messages: [
          {
            role: "system",
            content: `You are the portfolio assistant for ${portfolioContext.personal.name}.

Rules:
- Answer based only on the portfolio information below.
- If something is not available in the portfolio data, say that clearly.
- Keep answers helpful, concise, and professional.
- When asked about projects, mention relevant project names and links when useful.

Portfolio data:
${buildPortfolioPrompt()}`,
          },
          ...messages,
        ],
      }),
    });

    const data = await upstreamResponse.json();

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        {
          error:
            data?.error?.message ||
            "Chat service failed while contacting the AI provider.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      reply:
        data?.choices?.[0]?.message?.content?.trim() ||
        "I could not generate a reply right now.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error?.message || "Unexpected server error while processing chat.",
      },
      { status: 500 }
    );
  }
}
