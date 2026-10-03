import {Resend} from "resend";
import type {ContactPayload} from "@/types/contact";

function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");
}

function getContactEnv() {
	const apiKey = process.env.NEXT_RESEND_API_KEY?.trim();
	const inbox = process.env.NEXT_INBOX_ADDRESS?.trim();
	const from =
		process.env.NEXT_FROM_EMAIL?.trim() || "onboarding@resend.dev";

	if (!apiKey || !inbox) {
		return null;
	}

	const formattedFrom = from.includes('<') ? from : `Portfolio <${from}>`;
	return {apiKey, inbox, from: formattedFrom};
}

export type SendContactEmailResult =
	| {success: true}
	| {success: false; reason: "config" | "provider"};

export async function sendContactEmail(
	payload: ContactPayload
): Promise<SendContactEmailResult> {
	const env = getContactEnv();
	if (!env) {
		console.error("[contact] missing NEXT_RESEND_API_KEY or NEXT_INBOX_ADDRESS");
		return {success: false, reason: "config"};
	}

	const resend = new Resend(env.apiKey);
	const subject = `Portfolio contact from ${payload.name}`;
	const text = [
		"New portfolio contact message",
		"",
		`Name: ${payload.name}`,
		`Email: ${payload.email}`,
		"",
		"Message:",
		payload.message,
	].join("\n");

	const html = `
		<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; line-height: 1.5;">
			<p><strong>New portfolio contact message</strong></p>
			<p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
			<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
			<p><strong>Message:</strong></p>
			<p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
		</div>
	`.trim();

	const {error} = await resend.emails.send({
		from: env.from,
		to: env.inbox,
		replyTo: payload.email,
		subject,
		text,
		html,
	});

	if (error) {
		console.error("[contact] resend send failed:", error.name, error.message);
		return {success: false, reason: "provider"};
	}

	return {success: true};
}
