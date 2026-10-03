export interface ContactPayload {
	name: string;
	email: string;
	message: string;
}

export interface ContactApiSuccess {
	ok: true;
}

export interface ContactApiError {
	ok: false;
	error: string;
}

export type ContactApiResponse = ContactApiSuccess | ContactApiError;
