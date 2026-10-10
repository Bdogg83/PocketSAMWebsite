import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

function source(path: string): string {
  return readFileSync(new URL(path, import.meta.url), "utf8");
}

test("primary actions use the waitlist path and label", () => {
  const header = source("../components/Header.tsx");
  assert.match(header, /Join the Waitlist/);
  assert.match(header, /waitlistPath/);
  assert.equal(header.includes("Coming Soon"), false);

  const cards = source("../components/PricingCards.tsx");
  assert.match(cards, /waitlistPath/);
  assert.match(cards, /Join the Waitlist/);

  const stores = source("../components/AppDownload.tsx");
  assert.match(stores, /Coming Soon/);
  assert.match(stores, /disabled/);
  assert.match(stores, /waitlistPath/);
});

test("the giving line does not promise a donation from every purchase", () => {
  const giving = source("../components/GivingMission.tsx").replace(/\s+/g, " ");
  assert.match(
    giving,
    /Giving back is part of our mission\. As PocketSAM grows, we aim to support cancer research\./,
  );
  assert.equal(/portion of every/i.test(giving), false);
});

test("empty blog and tutorials stay out of primary navigation", () => {
  const header = source("../components/Header.tsx");
  const footer = source("../components/Footer.tsx");
  assert.equal(header.includes("/blog"), false);
  assert.equal(header.includes("/tutorials"), false);
  assert.equal(footer.includes("/blog"), false);
  assert.equal(footer.includes("/tutorials"), false);
});
