import {NextResponse} from "next/server";
import {parseContactPayload} from "@/lib/contact/contact.schema";
import {sendContactEmail} from "@/lib/contact/contact.service";
import {consumeRateLimit, getClientIp} from "@/lib/contact/rate-limit";
import type {ContactApiResponse} from "@/types/contact";

export const runtime = "nodejs";

function json(body: ContactApiResponse, status: number, headers?: HeadersInit) {
	return NextResponse.json(body, {status, headers});
}

export async function POST(request: Request) {
	const contentType = request.headers.get("content-type") ?? "";
	if (!contentType.toLowerCase().includes("application/json")) {
		return json({ok: false, error: "error: invalid request"}, 400);
	}

	const ip = getClientIp(request);
	const rate = consumeRateLimit(ip);
	if (!rate.allowed) {
		return json(
			{ok: false, error: "error: too many requests"},
			429,
			{ "Retry-After": String(rate.retryAfterSec) }
		);
	}

	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return json({ok: false, error: "error: invalid request"}, 400);
	}

	const parsed = parseContactPayload(body);
	if (!parsed.success) {
		return json({ok: false, error: parsed.error}, 400);
	}

	const result = await sendContactEmail(parsed.data);
	if (!result.success) {
		return json({ok: false, error: "error: failed to send"}, 500);
	}

	return json({ok: true}, 200);
}

export function GET() {
	return json({ok: false, error: "error: method not allowed"}, 405);
}
