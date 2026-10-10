import assert from "node:assert/strict";
import test from "node:test";
import { rateLimit, resetRateLimits } from "../lib/rateLimit.ts";

test("rate limit blocks the request after the window is full", () => {
  resetRateLimits();
  const now = 1_000_000;
  assert.equal(rateLimit("ip", 2, 60_000, now).ok, true);
  assert.equal(rateLimit("ip", 2, 60_000, now + 1).ok, true);
  const blocked = rateLimit("ip", 2, 60_000, now + 2);
  assert.equal(blocked.ok, false);
  assert.ok(blocked.retryAfterSeconds > 0);
  assert.equal(rateLimit("ip", 2, 60_000, now + 60_001).ok, true);
});
