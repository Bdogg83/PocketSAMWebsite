import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateSubmission } from "@/lib/siteForms";
import { rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTACT_EMAIL = "admin@pocketsam.com";
const FROM_EMAIL = "PocketSAM Website <admin@pocketsam.com>";
const MAX_BODY_CHARS = 20_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const subjects = {
  contact: "PocketSAM website — Get in touch",
  story: "PocketSAM website — Story submission",
} as const;

const GENERIC_ERROR =
  "Unable to send your message. Please try again or email admin@pocketsam.com.";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHtml(subject: string, fields: Array<[string, string]>): string {
  const rows = fields
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:6px 12px;font-weight:bold;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
          <td style="padding:6px 12px">${escapeHtml(value).replace(/\n/g, "<br />")}</td>
        </tr>`,
    )
    .join("");

  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#1f2937">
    <h2 style="margin:0 0 16px">${escapeHtml(subject)}</h2>
    <table style="border-collapse:collapse">${rows}</table>
  </div>`;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return (first || "unknown").slice(0, 80);
}

function success() {
  return NextResponse.json({ success: true });
}

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > MAX_BODY_CHARS) {
    return NextResponse.json(
      { error: "Please shorten your message and try again." },
      { status: 413 },
    );
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const limit = rateLimit(`form:${clientKey(request)}`, MAX_REQUESTS, WINDOW_MS);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  if (body && typeof body === "object") {
    const company = (body as { companyWebsite?: unknown }).companyWebsite;
    if (typeof company === "string" && company.trim()) {
      return success();
    }
  }

  const validated = validateSubmission(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: validated.status });
  }

  if (validated.formType === "waitlist") {
    return NextResponse.json(
      { error: "Use the waitlist page to join. This form does not save waitlist signups." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; cannot send email.");
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }

  const subject = subjects[validated.formType];
  const fields: Array<[string, string]> = [...validated.fields];

  try {
    const resend = new Resend(apiKey);
    const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: validated.email,
      subject,
      text,
      html: renderHtml(subject, fields),
    });

    if (error) {
      console.error("Resend failed to send email.");
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
    }
  } catch {
    console.error("send-email route error");
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }

  return success();
}
