import assert from "node:assert/strict";
import test from "node:test";
import { validateSubmission } from "../lib/siteForms.ts";

test("waitlist accepts email and consent without a name", () => {
  const result = validateSubmission({
    formType: "waitlist",
    email: " Care@Example.com ",
    marketingConsent: true,
  });

  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.email, "care@example.com");
  assert.equal(result.dedupeEmail, "care@example.com");
  assert.equal(result.fields.some(([label]) => label === "First name"), false);
});

test("waitlist rejects a missing marketing consent", () => {
  const result = validateSubmission({
    formType: "waitlist",
    email: "care@example.com",
    marketingConsent: false,
  });

  assert.equal(result.ok, false);
});

test("contact still requires a message and a known phone type", () => {
  const missing = validateSubmission({
    formType: "contact",
    name: "Ada",
    email: "ada@example.com",
    phoneType: "Apple / iPhone",
  });
  assert.equal(missing.ok, false);

  const ready = validateSubmission({
    formType: "contact",
    name: "Ada",
    email: "ada@example.com",
    phoneType: "Android",
    message: "When does the beta open?",
  });
  assert.equal(ready.ok, true);
});

test("unknown form types are rejected", () => {
  const result = validateSubmission({
    formType: "billing",
    email: "ada@example.com",
  });
  assert.equal(result.ok, false);
});
