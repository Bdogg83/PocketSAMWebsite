type Bucket = number[];

const buckets = new Map<string, Bucket>();

export function resetRateLimits(): void {
  buckets.clear();
}

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
  now = Date.now(),
): { ok: boolean; retryAfterSeconds: number } {
  const windowStart = now - windowMs;
  const recent = (buckets.get(key) ?? []).filter((timestamp) => timestamp > windowStart);

  if (recent.length >= limit) {
    const oldest = recent[0] ?? now;
    const retryAfterSeconds = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
    buckets.set(key, recent);
    return { ok: false, retryAfterSeconds };
  }

  recent.push(now);
  buckets.set(key, recent);
  return { ok: true, retryAfterSeconds: 0 };
}
