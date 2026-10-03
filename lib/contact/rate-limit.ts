type RateLimitEntry = {
	count: number;
	resetAt: number;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, RateLimitEntry>();

export function getClientIp(request: Request): string {
	const forwarded = request.headers.get("x-forwarded-for");
	if (forwarded) {
		const first = forwarded.split(",")[0]?.trim();
		if (first) return first;
	}

	const realIp = request.headers.get("x-real-ip")?.trim();
	if (realIp) return realIp;

	return "unknown";
}

export function consumeRateLimit(key: string): {
	allowed: boolean;
	retryAfterSec: number;
} {
	const now = Date.now();
	const existing = hits.get(key);

	if (!existing || existing.resetAt <= now) {
		hits.set(key, {count: 1, resetAt: now + WINDOW_MS});
		return {allowed: true, retryAfterSec: 0};
	}

	if (existing.count >= MAX_REQUESTS) {
		return {
			allowed: false,
			retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
		};
	}

	existing.count += 1;
	hits.set(key, existing);
	return {allowed: true, retryAfterSec: 0};
}
