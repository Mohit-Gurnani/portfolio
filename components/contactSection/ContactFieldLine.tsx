'use client'

import React, {useEffect, useRef} from 'react';
import {TypingAnimation} from '@/components/common/Terminal';
import {cn} from '@/lib/utils';

const LABEL_CHAR_MS = 80;

interface ContactFieldLineProps {
	label: string;
	value: string;
	onChange: (value: string) => void;
	onSubmit: () => void;
	error?: string;
	errorId?: string;
	multiline?: boolean;
	stacked?: boolean;
	locked?: boolean;
	active?: boolean;
	labelReady: boolean;
	reduceMotion: boolean;
	onLabelComplete: () => void;
	ariaLabel: string;
	inputType?: 'text' | 'email';
}

function ContactFieldLine({
	                          label,
	                          value,
	                          onChange,
	                          onSubmit,
	                          error,
	                          errorId,
	                          multiline = false,
	                          stacked = false,
	                          locked = false,
	                          active = false,
	                          labelReady,
	                          reduceMotion,
	                          onLabelComplete,
	                          ariaLabel,
	                          inputType = 'text',
                          }: ContactFieldLineProps) {
	const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
	const completedRef = useRef(false);

	const markLabelComplete = () => {
		if (completedRef.current) return;
		completedRef.current = true;
		onLabelComplete();
	};

	useEffect(() => {
		completedRef.current = false;
	}, [label, active]);

	useEffect(() => {
		if (!active || locked) return;

		if (reduceMotion) {
			markLabelComplete();
			return;
		}

		const timeout = setTimeout(
			markLabelComplete,
			label.length * LABEL_CHAR_MS + 100
		);
		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps -- only re-run when step becomes active
	}, [active, locked, reduceMotion, label]);

	useEffect(() => {
		if (!active || locked) return;
		const id = window.requestAnimationFrame(() => {
			inputRef.current?.focus();
		});
		return () => window.cancelAnimationFrame(id);
	}, [active, locked]);

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		if (locked) return;
		if (e.key !== 'Enter') return;
		if (multiline && e.shiftKey) return;
		e.preventDefault();
		onSubmit();
	};

	const showLabelTyping = active && !locked && !reduceMotion && !labelReady;
	const showLabelStatic = locked || reduceMotion || labelReady || !active;

	const sharedInputClass = cn(
		'font-primary text-sm text-secondary bg-transparent border-0 outline-none',
		'focus:outline-none w-full min-w-0 caret-tertiary',
		'placeholder:text-secondary/30 relative z-10',
		locked ? 'cursor-default' : 'cursor-text'
	);

	return (
		<div className="flex flex-col gap-1 w-full min-w-0">
			<div
				className={cn(
					'font-primary text-sm w-full min-w-0',
					multiline || stacked
						? 'flex flex-col gap-1 sm:flex-row sm:items-baseline'
						: 'flex flex-row gap-1'
				)}
			>
				<span
					className={cn(
						'text-tertiary min-h-5 pointer-events-none whitespace-normal wrap-break-word',
						multiline ? 'w-full sm:flex-0' : 'shrink-0'
					)}
				>
					{showLabelTyping ? (
						<TypingAnimation
							duration={LABEL_CHAR_MS}
							startOnView={false}
							className="text-tertiary font-primary text-sm whitespace-normal sm:whitespace-nowrap wrap-break-word"
							onComplete={markLabelComplete}
						>
							{label}
						</TypingAnimation>
					) : showLabelStatic ? (
						<span className="whitespace-normal sm:whitespace-nowrap wrap-break-word">{label}</span>
					) : null}
				</span>

				{multiline ? (
					<textarea
						ref={inputRef as React.RefObject<HTMLTextAreaElement>}
						value={value}
						onChange={(e) => {
							if (locked) return;
							onChange(e.target.value);
						}}
						onKeyDown={handleKeyDown}
						readOnly={locked}
						tabIndex={locked ? -1 : 0}
						aria-label={ariaLabel}
						aria-invalid={!!error}
						aria-describedby={error ? errorId : undefined}
						rows={3}
						className={cn(sharedInputClass, 'resize-none min-h-10 md:min-h-14 xl:min-h-18')}
					/>
				) : (
					<input
						ref={inputRef as React.RefObject<HTMLInputElement>}
						type={inputType}
						value={value}
						onChange={(e) => {
							if (locked) return;
							onChange(e.target.value);
						}}
						onKeyDown={handleKeyDown}
						readOnly={locked}
						tabIndex={locked ? -1 : 0}
						aria-label={ariaLabel}
						aria-invalid={!!error}
						aria-describedby={error ? errorId : undefined}
						autoComplete={inputType === 'email' ? 'email' : 'name'}
						className={cn(sharedInputClass, 'flex-1')}
					/>
				)}
			</div>

			{error && (
				<p
					id={errorId}
					role="alert"
					className="font-primary text-xs text-red-500 mt-0.5"
				>
					{error}
				</p>
			)}
		</div>
	);
}

export default ContactFieldLine;
