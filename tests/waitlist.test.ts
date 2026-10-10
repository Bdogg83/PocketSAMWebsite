import assert from "node:assert/strict";
import test from "node:test";
import { checkAdminToken } from "../lib/adminAuth.ts";
import {
  classifyProviderError,
  registerWaitlistSignup,
  type WaitlistDirectory,
  type WaitlistEntry,
} from "../lib/waitlistSignup.ts";

function memoryDirectory(): WaitlistDirectory & { emails: Map<string, string> } {
  const emails = new Map<string, string>();
  return {
    emails,
    async findByEmail(email) {
      const id = emails.get(email);
      return id ? { id } : null;
    },
    async create(entry) {
      if (emails.has(entry.email)) return "duplicate";
      emails.set(entry.email, `id-${emails.size + 1}`);
      return "created";
    },
    async removeByEmail(email) {
      return emails.delete(email) ? "removed" : "missing";
    },
  };
}

const entry: WaitlistEntry = {
  email: "launch-test@example.com",
  firstName: "Launch",
  recordedAt: "2026-10-10T00:00:00.000Z",
};

test("a saved signup stays saved when the notification fails", async () => {
  const directory = memoryDirectory();
  const result = await registerWaitlistSignup(entry, directory, async () => false);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.stored, true);
  assert.equal(result.duplicate, false);
  assert.equal(result.notified, false);
  assert.equal(directory.emails.has(entry.email), true);
});

test("a second signup for the same email is a duplicate and is not stored twice", async () => {
  const directory = memoryDirectory();
  await registerWaitlistSignup(entry, directory, async () => true);
  const again = await registerWaitlistSignup(entry, directory, async () => true);
  assert.equal(again.ok, true);
  if (!again.ok) return;
  assert.equal(again.duplicate, true);
  assert.equal(directory.emails.size, 1);
});

test("storage failure is not reported as success", async () => {
  const directory: WaitlistDirectory = {
    async findByEmail() {
      throw new Error("down");
    },
    async create() {
      return "created";
    },
    async removeByEmail() {
      return "removed";
    },
  };
  const result = await registerWaitlistSignup(entry, directory, async () => true);
  assert.equal(result.ok, false);
});

test("provider errors distinguish a missing contact from a duplicate", () => {
  assert.equal(classifyProviderError({ statusCode: 404, message: "Not found" }), "missing");
  assert.equal(
    classifyProviderError({ statusCode: 409, message: "Contact already exists" }),
    "duplicate",
  );
  assert.equal(classifyProviderError({ statusCode: 500, message: "unavailable" }), "failed");
});

test("admin removal requires the configured token", () => {
  assert.equal(checkAdminToken("secret-token", undefined), "unconfigured");
  assert.equal(checkAdminToken("secret-token", "secret-token"), "ok");
  assert.equal(checkAdminToken("other-token", "secret-token"), "unauthorized");
  assert.equal(checkAdminToken(null, "secret-token"), "unauthorized");
});
