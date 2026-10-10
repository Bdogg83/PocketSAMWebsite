export type WaitlistEntry = {
  email: string;
  firstName?: string;
  recordedAt: string;
};

export type StoredContact = { id: string };

export interface WaitlistDirectory {
  findByEmail(email: string): Promise<StoredContact | null>;
  create(entry: WaitlistEntry): Promise<"created" | "duplicate">;
  removeByEmail(email: string): Promise<"removed" | "missing">;
}

export type WaitlistRegistration =
  | { ok: true; stored: true; duplicate: boolean; notified: boolean }
  | {
      ok: false;
      status: number;
      error: string;
      stage: "lookup" | "create";
      providerStatus: number | null;
      providerName: string;
      providerMessage: string;
    };

const STORAGE_ERROR =
  "We could not save your waitlist signup. Please try again or email admin@pocketsam.com.";

function providerFailure(
  stage: "lookup" | "create",
  error: unknown,
): Extract<WaitlistRegistration, { ok: false }> {
  const provider = error instanceof WaitlistProviderError ? error : null;
  return {
    ok: false,
    status: 503,
    error: STORAGE_ERROR,
    stage: provider?.stage === "create" ? "create" : stage,
    providerStatus: provider?.statusCode ?? null,
    providerName: provider?.providerName ?? "",
    providerMessage: provider?.safeMessage ?? "",
  };
}

export class WaitlistProviderError extends Error {
  stage: "lookup" | "create" | "remove";
  statusCode: number | null;
  providerName: string;
  safeMessage: string;

  constructor(stage: "lookup" | "create" | "remove", error: ProviderError) {
    super(`waitlist ${stage} failed`);
    this.name = "WaitlistProviderError";
    this.stage = stage;
    this.statusCode = typeof error.statusCode === "number" ? error.statusCode : null;
    this.providerName = error.name ?? "";
    this.safeMessage = (error.message ?? "")
      .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[email]")
      .replace(/\bre_[A-Za-z0-9_]+\b/g, "[key]")
      .slice(0, 180);
  }
}

export async function registerWaitlistSignup(
  entry: WaitlistEntry,
  directory: WaitlistDirectory,
  notify: (entry: WaitlistEntry) => Promise<boolean>,
): Promise<WaitlistRegistration> {
  let existing: StoredContact | null;
  try {
    existing = await directory.findByEmail(entry.email);
  } catch (error) {
    return providerFailure("lookup", error);
  }

  if (existing) {
    return { ok: true, stored: true, duplicate: true, notified: false };
  }

  let created: "created" | "duplicate";
  try {
    created = await directory.create(entry);
  } catch (error) {
    return providerFailure("create", error);
  }

  if (created === "duplicate") {
    return { ok: true, stored: true, duplicate: true, notified: false };
  }

  let notified = false;
  try {
    notified = await notify(entry);
  } catch {
    notified = false;
  }

  return { ok: true, stored: true, duplicate: false, notified };
}

export type ProviderError = {
  statusCode?: number | null;
  message?: string;
  name?: string;
};

export function classifyProviderError(error: ProviderError): "missing" | "duplicate" | "failed" {
  const message = error.message ?? "";
  const name = error.name ?? "";
  if (error.statusCode === 404 || name === "not_found" || /not found/i.test(message)) {
    return "missing";
  }
  if (error.statusCode === 409 || /already exists/i.test(message)) {
    return "duplicate";
  }
  return "failed";
}
