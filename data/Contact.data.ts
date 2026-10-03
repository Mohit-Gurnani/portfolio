export const CONTACT_EMAIL = "mohitgurnani354@gmail.com";

export const CONTACT_SUCCESS =
	"✓ message queued. thanks — I'll reply soon.";

export type ContactFieldKey = "name" | "email" | "message" | "confirm";

export interface ContactFieldConfig {
	key: ContactFieldKey;
	label: string;
	multiline?: boolean;
	/** Put label on its own line so long prompts can wrap. */
	stacked?: boolean;
}

export const CONTACT_FIELDS: ContactFieldConfig[] = [
	{key: "name", label: "name: "},
	{key: "email", label: "email: "},
	{key: "message", label: "message: ", multiline: true},
	{
		key: "confirm",
		label: "Are you sure you want to submit? (Y/N): ",
		stacked: true,
	},
];

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const CONFIRM_PATTERN = /^(y|yes|n|no)$/i;
