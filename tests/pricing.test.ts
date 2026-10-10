import assert from "node:assert/strict";
import test from "node:test";
import {
  ASSISTANT_MONTHLY_PRICE,
  TOGETHER_MONTHLY_PRICE,
  comparisonGroups,
  pricingPlans,
} from "../components/pricingData.ts";

test("published plans keep the approved prices and entitlements", () => {
  assert.deepEqual(
    pricingPlans.map((plan) => plan.key),
    ["personal", "together", "assistant"],
  );

  const personal = pricingPlans[0];
  const together = pricingPlans[1];
  const assistant = pricingPlans[2];

  assert.equal(personal.price, "Free");
  assert.equal(personal.schemaPrice, "0");
  assert.equal(personal.caregiverLimit, "No additional caregivers");
  assert.equal(personal.aiAvailability, "AI not included");

  assert.equal(together.price, "$9.99");
  assert.equal(together.schemaPrice, "9.99");
  assert.equal(TOGETHER_MONTHLY_PRICE, "$9.99/month");
  assert.equal(together.caregiverLimit, "Up to 5 additional caregivers");
  assert.equal(together.aiAvailability, "AI not included");

  assert.equal(assistant.price, "$14.99");
  assert.equal(assistant.schemaPrice, "14.99");
  assert.equal(ASSISTANT_MONTHLY_PRICE, "$14.99/month");
  assert.equal(assistant.caregiverLimit, "Unlimited additional caregivers");
  assert.equal(assistant.aiAvailability, "AI included");
  assert.match(assistant.schemaDescription, /Inviting caregivers is optional/);
  assert.match(assistant.supporting, /usage and rate limits/);
});

test("comparison rows do not give AI or collaboration to Personal", () => {
  const rows = comparisonGroups.flatMap((group) => group.rows);
  const caregivers = rows.find((row) => row.feature === "Additional caregivers");
  const collaboration = rows.find((row) => row.feature === "Caregiver collaboration");
  const voice = rows.find((row) => row.feature === "AI-powered voice and text entry");

  assert.equal(caregivers?.values.personal.type === "text" && caregivers.values.personal.text, "0");
  assert.equal(caregivers?.values.together.type === "text" && caregivers.values.together.text, "Up to 5");
  assert.equal(
    caregivers?.values.assistant.type === "text" && caregivers.values.assistant.text,
    "Unlimited",
  );
  assert.equal(collaboration?.values.personal.type, "excluded");
  assert.equal(collaboration?.values.together.type, "included");
  assert.equal(voice?.values.personal.type, "excluded");
  assert.equal(voice?.values.together.type, "excluded");
  assert.equal(voice?.values.assistant.type, "included");
});

test("public copy does not promise a trial, unlimited AI, or a most popular badge", () => {
  const blob = JSON.stringify(pricingPlans);
  assert.equal(blob.includes("free trial"), false);
  assert.equal(blob.includes("Most Popular"), false);
  assert.equal(blob.includes("unlimited AI"), false);
});
