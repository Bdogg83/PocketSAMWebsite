import { NextResponse } from "next/server";

const CONTACT_EMAIL = "info@pocketsam.com";

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

    const payload: Record<string, string> = {
      name,
      email,
      _replyto: email,
      _subject: subjects[formType] || subjects.contact,
      _template: "table",
      form: formType,
    };

    if (formType === "contact") {
      const message = body.message?.trim() || "";
      if (!message) {
        return NextResponse.json(
          { error: "Please fill in all fields." },
          { status: 400 }
        );
      }
      payload.message = message;
    }

    if (formType === "story") {
      const role = body.role?.trim() || "";
      const story = body.story?.trim() || "";
      if (!role || !story) {
        return NextResponse.json(
          { error: "Please fill in all required fields." },
          { status: 400 }
        );
      }
      payload.role = role;
      payload.story = story;
      payload.can_feature = body.canFeature ? "Yes" : "No";
    }

    if (formType === "waitlist") {
      payload.message = "Please add me to the PocketSAM waitlist.";
    }

    const response = await fetch(
      `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            typeof result.message === "string"
              ? result.message
              : "Unable to send your message. Please try again or email info@pocketsam.com.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to send your message. Please try again or email info@pocketsam.com.",
      },
      { status: 500 }
    );
  }
}
