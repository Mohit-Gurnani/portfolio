'use client'

import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'motion/react';
import {ExperienceData, ExperienceEntry as ExperienceEntryType} from '@/data/Experience.data';
import ExperienceEntry from '@/components/experienceSection/ExperienceEntry';

interface ExperienceTimelineProps {
	entries: ExperienceEntryType[];
	railReady: boolean;
	reduceMotion: boolean;
}

/** Viewport Y of the activation line: 15% up from the bottom. */
const BOTTOM_THRESHOLD_RATIO = 0.25;

function ExperienceTimeline({entries, railReady, reduceMotion}: ExperienceTimelineProps) {
	const [activeId, setActiveId] = useState(entries[0]?.id ?? '');
	const articleRefs = useRef<(HTMLElement | null)[]>([]);

	useEffect(() => {
		articleRefs.current = articleRefs.current.slice(0, entries.length);
	}, [entries.length]);

	useEffect(() => {
		const updateActive = () => {
			const thresholdY = window.innerHeight * (1 - BOTTOM_THRESHOLD_RATIO);
			const refs = articleRefs.current;

			// Last article whose top has crossed at/above the threshold
			// (scrolling down activates it; scrolling up past threshold reverts to previous).
			let nextActiveIndex = 0;
			for (let i = 0; i < refs.length; i++) {
				const el = refs[i];
				if (!el) continue;
				const top = el.getBoundingClientRect().top;
				if (top <= thresholdY) {
					nextActiveIndex = i;
				} else {
					// Later articles are further down; stop once we hit one still below the line
					break;
				}
			}

			const nextId = entries[nextActiveIndex]?.id;
			if (nextId) {
				setActiveId((prev) => (prev === nextId ? prev : nextId));
			}
		};

		updateActive();
		window.addEventListener('scroll', updateActive, {passive: true});
		window.addEventListener('resize', updateActive);
		return () => {
			window.removeEventListener('scroll', updateActive);
			window.removeEventListener('resize', updateActive);
		};
	}, [entries]);

	return (
		<div className="relative px-5">
			{/* Decorative timeline rail */}
			<motion.div
				aria-hidden
				className="absolute left-6.5 top-8.5 bottom-8 w-px -translate-x-1/2 origin-top h-[calc(100%-137px)] bg-secondary/15"
				initial={reduceMotion ? {scaleY: 1} : {scaleY: 0}}
				animate={{scaleY: railReady || reduceMotion ? 1 : 0}}
				transition={{duration: reduceMotion ? 0 : 0.8, ease: 'easeOut'}}
			/>

			<div className="relative flex flex-col">
				{entries.map((entry, index) => (
					<ExperienceEntry
						key={entry.id}
						ref={(el) => {
							articleRefs.current[index] = el;
						}}
						entry={entry}
						index={index}
						isActive={activeId === entry.id}
						railReady={railReady}
						reduceMotion={reduceMotion}
					/>
				))}
			</div>
		</div>
	);
}

export default ExperienceTimeline;

// Re-export count helpers for command bar consumers
export function getExperienceCounts(data: ExperienceEntryType[] = ExperienceData) {
	const roles = data.filter((e) => e.kind === 'work').length;
	const schools = data.filter((e) => e.kind === 'education').length;
	return {roles, schools};
}
