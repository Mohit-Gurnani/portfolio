"use client";

import {useCallback, useRef, useState} from "react";
import type {
	ContactApiResponse,
	ContactPayload,
} from "@/types/contact";

type SubmitResult = ContactApiResponse;

export function useContactSubmit() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const inFlightRef = useRef(false);

	const submitContact = useCallback(
		async (payload: ContactPayload): Promise<SubmitResult> => {
			if (inFlightRef.current) {
				return {ok: false, error: "error: failed to send"};
			}

			inFlightRef.current = true;
			setIsSubmitting(true);

			try {
				const response = await fetch("/api/contact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: payload.name,
						email: payload.email,
						message: payload.message,
					}),
				});

				let data: unknown = null;
				try {
					data = await response.json();
				} catch {
					return {ok: false, error: "error: failed to send"};
				}

				if (
					data &&
					typeof data === "object" &&
					"ok" in data &&
					(data as ContactApiResponse).ok === true
				) {
					return {ok: true};
				}

				const error =
					data &&
					typeof data === "object" &&
					"error" in data &&
					typeof (data as {error: unknown}).error === "string"
						? (data as {error: string}).error
						: "error: failed to send";

				return {ok: false, error};
			} catch {
				return {ok: false, error: "error: failed to send"};
			} finally {
				inFlightRef.current = false;
				setIsSubmitting(false);
			}
		},
		[]
	);

	return {submitContact, isSubmitting};
}
