import type {ContactPayload} from "@/types/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

const ALLOWED_KEYS = new Set(["name", "email", "message"]);

export type ContactValidationResult =
	| {success: true; data: ContactPayload}
	| {success: false; error: string};

function stripControlChars(value: string): string {
	return value.replace(CONTROL_CHARS, "");
}

export function parseContactPayload(input: unknown): ContactValidationResult {
	if (input === null || typeof input !== "object" || Array.isArray(input)) {
		return {success: false, error: "error: invalid request"};
	}

	const record = input as Record<string, unknown>;
	const keys = Object.keys(record);

	if (keys.some((key) => !ALLOWED_KEYS.has(key))) {
		return {success: false, error: "error: invalid request"};
	}

	if (
		typeof record.name !== "string" ||
		typeof record.email !== "string" ||
		typeof record.message !== "string"
	) {
		return {success: false, error: "error: invalid request"};
	}

	const name = stripControlChars(record.name).trim();
	const email = stripControlChars(record.email).trim().toLowerCase();
	const message = stripControlChars(record.message).trim();

	if (name.length < 1 || name.length > 100) {
		return {success: false, error: "error: invalid name"};
	}

	if (email.length < 1 || email.length > 254 || !EMAIL_PATTERN.test(email)) {
		return {success: false, error: "error: invalid email"};
	}

	if (message.length < 1 || message.length > 5000) {
		return {success: false, error: "error: invalid message"};
	}

	return {
		success: true,
		data: {name, email, message},
	};
}
