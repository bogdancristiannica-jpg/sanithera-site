import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Rate limiter pentru /api/contact.
 * 5 requests / IP / oră, sliding window.
 *
 * Fail-open: dacă env vars Upstash lipsesc sau Redis e down,
 * funcția `limit()` returnează { success: true } și request-ul
 * trece — preferăm să fie site-ul funcțional decât să blocăm
 * utilizatori reali din cauza unui outage infrastructural.
 */
export const contactRateLimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(5, "1 h"),
        analytics: true,
        prefix: "sanithera:contact",
      })
    : null;

export async function checkContactLimit(ip: string) {
  if (!contactRateLimit) {
    return { success: true, remaining: Infinity, reason: "ratelimit-disabled" };
  }
  try {
    const { success, remaining } = await contactRateLimit.limit(ip);
    return { success, remaining, reason: success ? "ok" : "rate-limited" };
  } catch (err) {
    console.error("[ratelimit] Redis error, failing open:", err);
    return { success: true, remaining: Infinity, reason: "ratelimit-error" };
  }
}
