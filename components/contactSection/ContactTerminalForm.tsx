'use client'

import React, {useCallback, useEffect, useState} from 'react';
import {TypingAnimation} from '@/components/common/Terminal';
import ContactFieldLine from '@/components/contactSection/ContactFieldLine';
import {
	CONFIRM_PATTERN,
	CONTACT_FIELDS,
	CONTACT_SUCCESS,
	type ContactFieldKey,
	EMAIL_PATTERN,
} from '@/data/Contact.data';

type Step = ContactFieldKey | 'success';

interface FormValues {
	name: string;
	email: string;
	message: string;
	confirm: string;
}

interface ContactTerminalFormProps {
	started: boolean;
	reduceMotion: boolean;
}

const INITIAL_VALUES: FormValues = {
	name: '',
	email: '',
	message: '',
	confirm: '',
};

function ContactTerminalForm({started, reduceMotion}: ContactTerminalFormProps) {
	const [step, setStep] = useState<Step | null>(null);
	const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
	const [errors, setErrors] = useState<Partial<Record<ContactFieldKey, string>>>(
		{}
	);
	const [labelReady, setLabelReady] = useState(false);

	useEffect(() => {
		if (!started || step !== null) return;
		setStep('name');
		setLabelReady(reduceMotion);
	}, [started, step, reduceMotion]);

	const handleLabelComplete = useCallback(() => {
		setLabelReady(true);
	}, []);

	const setValue = (key: ContactFieldKey, value: string) => {
		setValues((prev) => ({...prev, [key]: value}));
		setErrors((prev) => {
			if (!prev[key]) return prev;
			const next = {...prev};
			delete next[key];
			return next;
		});
	};

	const advanceFrom = (key: ContactFieldKey) => {
		const nextMap: Record<ContactFieldKey, Step> = {
			name: 'email',
			email: 'message',
			message: 'confirm',
			confirm: 'success',
		};
		setLabelReady(reduceMotion);
		setStep(nextMap[key]);
	};

	const validateField = (key: ContactFieldKey, raw: string): string | null => {
		const value = raw.trim();
		switch (key) {
			case 'name':
				return value.length >= 1 ? null : 'error: name required';
			case 'email':
				if (!value) return 'error: email required';
				return EMAIL_PATTERN.test(value) ? null : 'error: invalid email';
			case 'message':
				return value.length >= 1 ? null : 'error: message required';
			case 'confirm':
				return CONFIRM_PATTERN.test(value)
					? null
					: 'error: expected Y/Yes or N/No';
			default:
				return null;
		}
	};

	const submitField = (key: ContactFieldKey) => {
		const error = validateField(key, values[key]);
		if (error) {
			setErrors((prev) => ({...prev, [key]: error}));
			return;
		}

		if (key === 'confirm') {
			const normalized = values.confirm.trim().toLowerCase();
			if (normalized === 'n' || normalized === 'no') {
				setValues((prev) => ({...prev, confirm: ''}));
				setErrors({});
				setLabelReady(true);
				setStep('message');
				return;
			}
			setValues((prev) => ({
				...prev,
				name: prev.name.trim(),
				email: prev.email.trim(),
				message: prev.message.trim(),
				confirm: prev.confirm.trim(),
			}));
			setLabelReady(false);
			setStep('success');
			return;
		}

		setValues((prev) => ({...prev, [key]: prev[key].trim()}));
		advanceFrom(key);
	};

	if (!started || step === null) {
		return null;
	}

	const fieldKeys: ContactFieldKey[] = ['name', 'email', 'message', 'confirm'];
	const stepIndex = step === 'success' ? -1 : fieldKeys.indexOf(step);

	return (
		<div className="px-5 py-6 flex flex-col gap-3 font-primary min-w-0 w-full overflow-x-hidden">
			{CONTACT_FIELDS.map((field, index) => {
				const isSuccess = step === 'success';
				const isPast =
					isSuccess || (stepIndex >= 0 && index < stepIndex);
				const isActive = step === field.key;

				if (!isPast && !isActive) return null;

				return (
					<ContactFieldLine
						key={field.key}
						label={field.label}
						value={values[field.key]}
						onChange={(v) => setValue(field.key, v)}
						onSubmit={() => submitField(field.key)}
						error={errors[field.key]}
						errorId={`contact-error-${field.key}`}
						multiline={field.multiline}
						stacked={field.stacked}
						locked={isPast}
						active={isActive}
						labelReady={isPast ? true : labelReady || reduceMotion}
						reduceMotion={reduceMotion}
						onLabelComplete={handleLabelComplete}
						ariaLabel={field.label.replace(/:\s*$/, '')}
						inputType={field.key === 'email' ? 'email' : 'text'}
					/>
				);
			})}

			{step === 'success' && (
				<div className="text-tertiary text-sm min-h-5 pt-1">
					{reduceMotion ? (
						<span>{CONTACT_SUCCESS}</span>
					) : (
						<TypingAnimation
							duration={50}
							startOnView={false}
							className="text-tertiary font-primary text-sm"
						>
							{CONTACT_SUCCESS}
						</TypingAnimation>
					)}
				</div>
			)}
		</div>
	);
}

export default ContactTerminalForm;
