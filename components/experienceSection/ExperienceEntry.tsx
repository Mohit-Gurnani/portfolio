'use client'

import React, {forwardRef, useEffect, useState} from 'react';
import {motion} from 'motion/react';
import {ExperienceEntry as ExperienceEntryType} from '@/data/Experience.data';
import {cn} from '@/lib/utils';

interface ExperienceEntryProps {
	entry: ExperienceEntryType;
	index: number;
	isActive: boolean;
	railReady: boolean;
	reduceMotion: boolean;
}

const ExperienceEntry = forwardRef<HTMLElement, ExperienceEntryProps>(
	function ExperienceEntry(
		{entry, index, isActive, railReady, reduceMotion},
		ref
	) {
		const [hasEntered, setHasEntered] = useState(reduceMotion);
		const [isMobile, setIsMobile] = useState(false);

		useEffect(() => {
			const mq = window.matchMedia('(max-width: 639px)');
			const update = () => setIsMobile(mq.matches);
			update();
			mq.addEventListener('change', update);
			return () => mq.removeEventListener('change', update);
		}, []);

		useEffect(() => {
			if (reduceMotion) {
				setHasEntered(true);
				return;
			}
			if (!railReady || hasEntered) return;
			const timeout = setTimeout(() => setHasEntered(true), index * 120);
			return () => clearTimeout(timeout);
		}, [railReady, hasEntered, index, reduceMotion]);

		const isWork = entry.kind === 'work';
		const dateLabel =
			entry.start === entry.end ? entry.end : `${entry.start} – ${entry.end}`;

		const enterHidden = isMobile
			? {opacity: 0, x: 0, y: 12}
			: {opacity: 0, x: -12, y: 0};
		const enterVisible = {opacity: 1, x: 0, y: 0};

		return (
			<article
				ref={ref}
				className={cn(
					'relative pl-10 transition-colors duration-300',
					isWork ? 'py-8' : 'py-6',
					isActive ? 'opacity-100' : 'opacity-70'
				)}
			>
				{/* Node */}
				<div
					className="absolute left-0 top-[2.15rem] flex items-center justify-center"
					aria-hidden
				>
					{entry.isCurrent && isWork && !reduceMotion ? (
						<motion.span
							className="size-3 rounded-full border-2 border-tertiary bg-tertiary shadow-[0_0_12px_rgba(34,197,94,0.35)]"
							animate={{scale: [1, 1.15, 1], opacity: [1, 0.75, 1]}}
							transition={{duration: 2.5, repeat: Infinity, ease: 'easeInOut'}}
						/>
					) : (
						<span
							className={cn(
								'size-3 rounded-full border-2 transition-colors duration-300',
								isActive || (entry.isCurrent && isWork)
									? 'border-tertiary bg-tertiary shadow-[0_0_12px_rgba(34,197,94,0.35)]'
									: 'border-secondary/40 bg-primary'
							)}
						/>
					)}
				</div>

				<motion.div
					initial={reduceMotion ? false : enterHidden}
					animate={hasEntered ? enterVisible : enterHidden}
					transition={{duration: 0.4, ease: 'easeOut'}}
					className="flex flex-col gap-4"
				>
					<div className="flex flex-col gap-2">
						<div className="flex flex-row flex-wrap items-center gap-2">
							{isWork && entry.isCurrent && (
								<span className="font-primary text-xs text-tertiary tracking-wide">
									HEAD
								</span>
							)}
							{entry.isCurrent && (
								<span className="font-primary text-xs text-tertiary border border-tertiary/40 bg-tertiary/10 rounded-md px-2 py-0.5">
									Present
								</span>
							)}
						</div>

						<h3
							className={cn(
								'font-primary text-2xl font-semibold transition-colors duration-300',
								isActive ? 'text-secondary' : 'text-secondary/50'
							)}
						>
							{entry.title}
						</h3>
						<p className="font-primary text-sm text-tertiary">{entry.subtitle}</p>
						<p className="font-primary text-sm text-secondary/50">
							{dateLabel}
							{entry.meta ? ` · ${entry.meta}` : ''}
						</p>
					</div>

					{entry.bullets && entry.bullets.length > 0 && (
						<ul className="flex flex-col gap-2.5">
							{entry.bullets.map((bullet, bulletIdx) => (
								<motion.li
									key={bulletIdx}
									initial={reduceMotion ? false : {opacity: 0, y: 6}}
									animate={
										hasEntered
											? {opacity: 1, y: 0}
											: {opacity: 0, y: 6}
									}
									transition={{
										duration: 0.3,
										delay: reduceMotion ? 0 : 0.15 + bulletIdx * 0.06,
										ease: 'easeOut',
									}}
									className="font-primary text-base text-secondary/70 flex flex-row gap-2"
								>
									<span
										className="text-tertiary/80 shrink-0 select-none"
										aria-hidden
									>
										▸
									</span>
									<span>{bullet}</span>
								</motion.li>
							))}
						</ul>
					)}

					{entry.tech && entry.tech.length > 0 && (
						<motion.div
							initial={reduceMotion ? false : {opacity: 0}}
							animate={hasEntered ? {opacity: 1} : {opacity: 0}}
							transition={{
								duration: 0.35,
								delay:
									reduceMotion
										? 0
										: 0.15 + (entry.bullets?.length ?? 0) * 0.06,
							}}
							className="flex flex-row flex-wrap gap-2"
						>
							{entry.tech.map((tag) => (
								<span
									key={tag}
									className="font-primary text-xs text-secondary/70 bg-secondary/7.5 border border-secondary/15 rounded-md px-2.5 py-1"
								>
									{tag}
								</span>
							))}
						</motion.div>
					)}
				</motion.div>
			</article>
		);
	}
);

export default ExperienceEntry;
