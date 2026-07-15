import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const CONTACT_EMAIL = "admin@pocketsam.com";
// pocketsam.com is verified in Resend, so we can send from the domain.
const FROM_EMAIL = "PocketSAM Website <admin@pocketsam.com>";

type FormPayload = {
  formType?: string;
  name?: string;
  email?: string;
  message?: string;
  role?: string;
  story?: string;
  canFeature?: boolean;
};

const subjects: Record<string, string> = {
  contact: "PocketSAM website — Get in touch",
  story: "PocketSAM website — Story submission",
  waitlist: "PocketSAM website — Waitlist signup",
};

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
          <td style="padding:6px 12px;font-weight:bold;vertical-align:top;white-space:nowrap">${escapeHtml(
            label
          )}</td>
          <td style="padding:6px 12px">${escapeHtml(value).replace(/\n/g, "<br />")}</td>
        </tr>`
    )
    .join("");

  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#1f2937">
    <h2 style="margin:0 0 16px">${escapeHtml(subject)}</h2>
    <table style="border-collapse:collapse">${rows}</table>
  </div>`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FormPayload;
    const formType = body.formType || "contact";
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const fields: Array<[string, string]> = [
      ["Name", name],
      ["Email", email],
    ];

    if (formType === "contact") {
      const message = body.message?.trim() || "";
      if (!message) {
        return NextResponse.json(
          { error: "Please fill in all fields." },
          { status: 400 }
        );
      }
      fields.push(["Message", message]);
    } else if (formType === "story") {
      const role = body.role?.trim() || "";
      const story = body.story?.trim() || "";
      if (!role || !story) {
        return NextResponse.json(
          { error: "Please fill in all required fields." },
          { status: 400 }
        );
      }
      fields.push(["Role", role]);
      fields.push(["Story", story]);
      fields.push(["Can feature", body.canFeature ? "Yes" : "No"]);
    } else if (formType === "waitlist") {
      fields.push(["Message", "Please add me to the PocketSAM waitlist."]);
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set; cannot send email.");
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const subject = subjects[formType] || subjects.contact;
    const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject,
      text,
      html: renderHtml(subject, fields),
    });

    if (error) {
      console.error("Resend failed to send email:", error);
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id ?? null });
  } catch (err) {
    console.error("send-email route error:", err);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}
