import { Resend } from "resend";
import {
  classifyProviderError,
  WaitlistProviderError,
  type WaitlistDirectory,
  type WaitlistEntry,
} from "./waitlistSignup";

export function createResendWaitlistDirectory(
  apiKey: string,
  segmentId?: string,
): WaitlistDirectory {
  const resend = new Resend(apiKey);
  const segment = segmentId?.trim();

  return {
    async findByEmail(email) {
      const result = await resend.contacts.get({ email });
      if (result.error) {
        if (classifyProviderError(result.error) === "missing") return null;
        throw new WaitlistProviderError("lookup", result.error);
      }
      if (!result.data?.id) return null;
      return { id: result.data.id };
    },

    async create(entry: WaitlistEntry) {
      const result = await resend.contacts.create({
        email: entry.email,
        firstName: entry.firstName || undefined,
        unsubscribed: false,
        segments: segment ? [{ id: segment }] : undefined,
      });
      if (result.error) {
        if (classifyProviderError(result.error) === "duplicate") return "duplicate";
        throw new WaitlistProviderError("create", result.error);
      }
      return "created";
    },

    async removeByEmail(email) {
      const result = await resend.contacts.remove({ email });
      if (result.error) {
        if (classifyProviderError(result.error) === "missing") return "missing";
        throw new WaitlistProviderError("remove", result.error);
      }
      return "removed";
    },
  };
}
