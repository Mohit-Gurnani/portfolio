'use client'

import React, {useEffect, useState} from 'react';
import {motion, useReducedMotion} from 'motion/react';
import {TypingAnimation} from '@/components/common/Terminal';
import {parseNumber} from '@/lib/utils';

interface ExperienceCommandBarProps {
	roles: number;
	schools: number;
	startTyping: boolean;
	onTypingComplete?: () => void;
}

const COMMAND = '$ git log --decorate --stat';

function ExperienceCommandBar({
	roles,
	schools,
	startTyping,
	onTypingComplete,
}: ExperienceCommandBarProps) {
	const reduceMotion = useReducedMotion();
	const [showMeta, setShowMeta] = useState(!!reduceMotion);
	const [typedDone, setTypedDone] = useState(!!reduceMotion);

	useEffect(() => {
		if (reduceMotion) {
			setTypedDone(true);
			setShowMeta(true);
			onTypingComplete?.();
			return;
		}

		if (!startTyping || typedDone) return;

		const typingMs = COMMAND.length * 80;
		const doneTimeout = setTimeout(() => {
			setTypedDone(true);
			setShowMeta(true);
			onTypingComplete?.();
		}, typingMs + 50);

		return () => clearTimeout(doneTimeout);
	}, [startTyping, typedDone, reduceMotion, onTypingComplete]);

	return (
		<div className="border-b border-secondary/15 py-3 px-5">
			<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
				<div className="font-primary text-sm text-tertiary min-h-[1.25rem]">
					{reduceMotion ? (
						<span>{COMMAND}</span>
					) : startTyping ? (
						<TypingAnimation
							duration={80}
							startOnView={false}
							className="text-tertiary font-primary text-sm"
						>
							{COMMAND}
						</TypingAnimation>
					) : (
						<span className="opacity-0">{COMMAND}</span>
					)}
				</div>

				<motion.p
					initial={reduceMotion ? false : {opacity: 0}}
					animate={{opacity: showMeta ? 1 : 0}}
					transition={{duration: 0.3}}
					className="font-primary text-sm text-secondary/50 shrink-0"
				>
					<span className="text-sky-400">{parseNumber(roles)}</span>
					{' '}role ·{' '}
					<span className="text-sky-400">{parseNumber(schools)}</span>
					{' '}schools
				</motion.p>
			</div>
		</div>
	);
}

export default ExperienceCommandBar;
