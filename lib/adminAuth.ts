import { timingSafeEqual } from "node:crypto";

export type AdminTokenResult = "ok" | "unconfigured" | "unauthorized";

export function checkAdminToken(
  provided: string | null,
  expected: string | undefined,
): AdminTokenResult {
  const configured = expected?.trim() ?? "";
  if (!configured) return "unconfigured";

  const givenRaw = provided ?? "";
  if (givenRaw.length === 0 || givenRaw.length > 200) {
    timingSafeEqual(Buffer.from(configured), Buffer.from(configured));
    return "unauthorized";
  }

  const given = Buffer.from(givenRaw);
  const want = Buffer.from(configured);
  if (given.length !== want.length) {
    timingSafeEqual(want, want);
    return "unauthorized";
  }
  if (!timingSafeEqual(given, want)) return "unauthorized";
  return "ok";
}

export function bearerToken(header: string | null): string | null {
  if (!header) return null;
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
}
