export const PHONE_TYPES = ["Apple / iPhone", "Android"] as const;

export const FORM_TYPES = ["contact", "story", "waitlist"] as const;

export type FormType = (typeof FORM_TYPES)[number];

const MAX_NAME = 80;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 4000;
const MAX_STORY = 8000;

export type FormFields = Array<[string, string]>;

export type FormValidation =
  | {
      ok: true;
      formType: FormType;
      email: string;
      fields: FormFields;
      dedupeEmail?: string;
    }
  | { ok: false; status: number; error: string };

function cleanText(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim();
}

export function isFormType(value: unknown): value is FormType {
  return typeof value === "string" && (FORM_TYPES as readonly string[]).includes(value);
}

export function isValidEmail(email: string): boolean {
  if (!email || email.length > MAX_EMAIL) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function tooLong(value: string, max: number, label: string): FormValidation | null {
  if (value.length > max) {
    return {
      ok: false,
      status: 400,
      error: `${label} must be ${max} characters or fewer.`,
    };
  }
  return null;
}

export function validateSubmission(body: unknown): FormValidation {
  if (!body || typeof body !== "object") {
    return { ok: false, status: 400, error: "Please check the form and try again." };
  }

  const record = body as Record<string, unknown>;
  const formType = record.formType;

  if (!isFormType(formType)) {
    return { ok: false, status: 400, error: "Please check the form and try again." };
  }

  const email = cleanText(record.email).toLowerCase();
  if (!isValidEmail(email)) {
    return { ok: false, status: 400, error: "Please enter a valid email address." };
  }

  if (formType === "waitlist") {
    const firstName = cleanText(record.firstName || record.name);
    const nameError = tooLong(firstName, MAX_NAME, "First name");
    if (nameError) return nameError;
    if (record.marketingConsent !== true) {
      return {
        ok: false,
        status: 400,
        error: "Please confirm that PocketSAM may email you about the launch.",
      };
    }

    const fields: FormFields = [["Email", email]];
    if (firstName) fields.push(["First name", firstName]);
    fields.push(["Marketing consent", "Yes — launch emails requested"]);

    return {
      ok: true,
      formType,
      email,
      fields,
      dedupeEmail: email,
    };
  }

  const name = cleanText(record.name);
  if (!name) {
    return { ok: false, status: 400, error: "Name and email are required." };
  }
  const nameError = tooLong(name, MAX_NAME, "Name");
  if (nameError) return nameError;

  const fields: FormFields = [
    ["Name", name],
    ["Email", email],
  ];

  if (formType === "contact") {
    const phoneType = cleanText(record.phoneType);
    const message = cleanText(record.message);
    if (!PHONE_TYPES.includes(phoneType as (typeof PHONE_TYPES)[number]) || !message) {
      return { ok: false, status: 400, error: "Please fill in all fields." };
    }
    const messageError = tooLong(message, MAX_MESSAGE, "Message");
    if (messageError) return messageError;
    fields.push(["Phone type", phoneType], ["Message", message]);
  }

  if (formType === "story") {
    const role = cleanText(record.role);
    const story = cleanText(record.story);
    if (!role || !story) {
      return { ok: false, status: 400, error: "Please fill in all required fields." };
    }
    const roleError = tooLong(role, MAX_NAME, "Role");
    if (roleError) return roleError;
    const storyError = tooLong(story, MAX_STORY, "Story");
    if (storyError) return storyError;
    fields.push(["Role", role], ["Story", story]);
    fields.push(["Can feature", record.canFeature === true ? "Yes" : "No"]);
  }

  return { ok: true, formType, email, fields };
}
