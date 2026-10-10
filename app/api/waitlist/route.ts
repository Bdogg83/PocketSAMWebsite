import { NextResponse } from "next/server";
import { Resend } from "resend";
import { bearerToken, checkAdminToken } from "@/lib/adminAuth";
import { rateLimit } from "@/lib/rateLimit";
import { createResendWaitlistDirectory } from "@/lib/resendWaitlist";
import { isValidEmail, validateSubmission } from "@/lib/siteForms";
import { registerWaitlistSignup, type WaitlistEntry } from "@/lib/waitlistSignup";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTACT_EMAIL = "admin@pocketsam.com";
const FROM_EMAIL = "PocketSAM Website <admin@pocketsam.com>";
const MAX_BODY_CHARS = 8_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const STORAGE_ERROR =
  "We could not save your waitlist signup. Please try again or email admin@pocketsam.com.";

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return (first || "unknown").slice(0, 80);
}

function directoryOrNull() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return createResendWaitlistDirectory(apiKey, process.env.RESEND_WAITLIST_SEGMENT_ID);
}

async function notifyOwner(entry: WaitlistEntry): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;
  const resend = new Resend(apiKey);
  const lines = [
    `Email: ${entry.email}`,
    entry.firstName ? `First name: ${entry.firstName}` : "",
    "Marketing consent: Yes — launch emails requested",
    `Recorded at: ${entry.recordedAt}`,
  ].filter(Boolean);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [CONTACT_EMAIL],
    replyTo: entry.email,
    subject: "PocketSAM website — Waitlist signup",
    text: lines.join("\n"),
  });
  return !error;
}

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > MAX_BODY_CHARS) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const limit = rateLimit(`waitlist:${clientKey(request)}`, MAX_REQUESTS, WINDOW_MS);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  if (body && typeof body === "object") {
    const company = (body as { companyWebsite?: unknown }).companyWebsite;
    if (typeof company === "string" && company.trim()) {
      return NextResponse.json({ success: true, stored: false, duplicate: false });
    }
  }

  const validated = validateSubmission(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: validated.status });
  }
  if (validated.formType !== "waitlist") {
    return NextResponse.json({ error: "Please use the waitlist form." }, { status: 400 });
  }

  const directory = directoryOrNull();
  if (!directory) {
    console.error("RESEND_API_KEY is not set; waitlist storage is unavailable.");
    return NextResponse.json({ error: STORAGE_ERROR }, { status: 503 });
  }

  const firstName = validated.fields.find(([label]) => label === "First name")?.[1];
  const entry: WaitlistEntry = {
    email: validated.email,
    firstName,
    recordedAt: new Date().toISOString(),
  };

  const result = await registerWaitlistSignup(entry, directory, notifyOwner);
  if (!result.ok) {
    console.error(
      "Waitlist storage failed.",
      result.stage,
      result.providerStatus,
      result.providerName,
      result.providerMessage,
    );
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json({
    success: true,
    stored: true,
    duplicate: result.duplicate,
    notified: result.notified,
  });
}

export async function DELETE(request: Request) {
  const auth = checkAdminToken(
    bearerToken(request.headers.get("authorization")),
    process.env.WAITLIST_ADMIN_TOKEN,
  );
  if (auth === "unconfigured") {
    return NextResponse.json(
      { error: "Waitlist removal is not configured." },
      { status: 503 },
    );
  }
  if (auth !== "ok") {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const limit = rateLimit(`waitlist-admin:${clientKey(request)}`, 20, WINDOW_MS);
  if (!limit.ok) {
    return NextResponse.json({ error: "Too many removal requests." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const email =
    body && typeof body === "object"
      ? String((body as { email?: unknown }).email ?? "")
          .trim()
          .toLowerCase()
      : "";
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const directory = directoryOrNull();
  if (!directory) {
    return NextResponse.json({ error: "Waitlist storage is not configured." }, { status: 503 });
  }

  try {
    const removed = await directory.removeByEmail(email);
    return NextResponse.json({ removed: removed === "removed" });
  } catch {
    console.error("Waitlist removal failed.");
    return NextResponse.json({ error: "Unable to remove that waitlist entry." }, { status: 502 });
  }
}
