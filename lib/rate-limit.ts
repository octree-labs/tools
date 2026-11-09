/**
 * In-memory limiters, per server instance (same pattern as the app's
 * lib/import/rate-limit.ts in octree-labs/octree). On Vercel Fluid Compute
 * one instance serves many requests, so this throttles a single abusive
 * client; a burst spread across instances or a cold start resets the count.
 */

export interface RateLimitDecision {
  allowed: boolean;
  /** Seconds until the oldest hit in the window falls out (0 when allowed). */
  retryAfterSeconds: number;
  remaining: number;
}

export interface RateLimiter {
  check(key: string, now?: number): RateLimitDecision;
  /** Number of keys currently tracked (for tests). */
  size(): number;
}

export interface RateLimiterOptions {
  limit: number;
  windowMs: number;
  /** Oldest keys are dropped past this many entries so the map cannot grow unbounded. */
  maxKeys?: number;
}

/** Sliding-window limiter keyed by e.g. client IP. */
export function createRateLimiter({ limit, windowMs, maxKeys = 10_000 }: RateLimiterOptions): RateLimiter {
  const hits = new Map<string, number[]>();

  function prune(key: string, now: number): number[] {
    const cutoff = now - windowMs;
    const kept = (hits.get(key) ?? []).filter((t) => t > cutoff);
    if (kept.length === 0) hits.delete(key);
    else hits.set(key, kept);
    return kept;
  }

  return {
    check(key, now = Date.now()) {
      const recent = prune(key, now);
      if (recent.length >= limit) {
        const retryAfterMs = recent[0] + windowMs - now;
        return {
          allowed: false,
          retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)),
          remaining: 0,
        };
      }
      // Re-insert so Map insertion order tracks recency (first key = least recent).
      hits.delete(key);
      hits.set(key, [...recent, now]);
      while (hits.size > maxKeys) {
        const oldest = hits.keys().next().value;
        if (oldest === undefined) break;
        hits.delete(oldest);
      }
      return { allowed: true, retryAfterSeconds: 0, remaining: limit - recent.length - 1 };
    },
    size() {
      return hits.size;
    },
  };
}

/**
 * Spaces calls to an upstream service at most one per `intervalMs` (a token
 * bucket of size one). `acquire` waits for the next free slot and returns
 * false without reserving one when that slot is more than `maxWaitMs` away.
 */
export function createUpstreamThrottle({ intervalMs, maxWaitMs }: { intervalMs: number; maxWaitMs: number }) {
  let nextSlot = 0;
  return {
    /** Milliseconds the caller must wait, or -1 when the queue is too long. Reserves the slot. */
    reserve(now = Date.now()): number {
      const slot = Math.max(now, nextSlot);
      if (slot - now > maxWaitMs) return -1;
      nextSlot = slot + intervalMs;
      return slot - now;
    },
    async acquire(): Promise<boolean> {
      const wait = this.reserve();
      if (wait < 0) return false;
      if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
      return true;
    },
  };
}

/** First hop of `x-forwarded-for` (set by Vercel), else `x-real-ip`, else a shared bucket. */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  const first = forwarded?.split(',')[0]?.trim();
  if (first) return first;
  return headers.get('x-real-ip')?.trim() || 'unknown';
}
