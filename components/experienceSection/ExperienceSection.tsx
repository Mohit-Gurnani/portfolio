'use client'

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {motion, useInView, useReducedMotion} from 'motion/react';
import {ExperienceData} from '@/data/Experience.data';
import ExperienceCommandBar from '@/components/experienceSection/ExperienceCommandBar';
import ExperienceTimeline, {getExperienceCounts} from '@/components/experienceSection/ExperienceTimeline';

function ExperienceSection() {
	const reduceMotion = useReducedMotion() ?? false;
	const sectionRef = useRef<HTMLElement | null>(null);
	const panelRef = useRef<HTMLDivElement | null>(null);
	const titleInView = useInView(sectionRef, {amount: 0.2, once: true});
	const panelInView = useInView(panelRef, {amount: 0.15, once: true});

	const [startTyping, setStartTyping] = useState(reduceMotion);
	const [railReady, setRailReady] = useState(reduceMotion);

	const {roles, schools} = getExperienceCounts(ExperienceData);

	useEffect(() => {
		if (reduceMotion) {
			setStartTyping(true);
			setRailReady(true);
			return;
		}
		if (!titleInView) return;
		const timeout = setTimeout(() => setStartTyping(true), 450);
		return () => clearTimeout(timeout);
	}, [titleInView, reduceMotion]);

	useEffect(() => {
		if (reduceMotion) {
			setRailReady(true);
			return;
		}
		if (!panelInView) return;
		// Start rail shortly after panel enters; typing may still be running
		const timeout = setTimeout(() => setRailReady(true), 200);
		return () => clearTimeout(timeout);
	}, [panelInView, reduceMotion]);

	const handleTypingComplete = useCallback(() => {
		if (!reduceMotion) {
			setRailReady(true);
		}
	}, [reduceMotion]);

	return (
		<section
			id="experience"
			ref={sectionRef}
			className="w-9/10 xl:w-85/100 mx-auto flex flex-col gap-5 md:gap-7.5 xl:gap-10"
		>
			<div className="flex flex-col gap-3">
				<motion.h2
					initial={reduceMotion ? false : {opacity: 0, y: 16}}
					animate={titleInView || reduceMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 16}}
					transition={{duration: 0.45, ease: 'easeOut'}}
					className="font-primary text-6xl text-secondary text-center tracking-[-0.4rem]"
				>
					Education &amp; Experience
				</motion.h2>
				<motion.p
					initial={reduceMotion ? false : {opacity: 0, y: 16}}
					animate={titleInView || reduceMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 16}}
					transition={{duration: 0.45, delay: reduceMotion ? 0 : 0.1, ease: 'easeOut'}}
					className="font-primary text-center text-base text-secondary/70"
				>
					Roles, education, and the path that got me here
				</motion.p>
			</div>

			<div
				ref={panelRef}
				className="flex flex-col bg-secondary/3 border border-secondary/15 rounded-xl overflow-hidden"
			>
				<ExperienceCommandBar
					roles={roles}
					schools={schools}
					startTyping={startTyping}
					onTypingComplete={handleTypingComplete}
				/>
				<ExperienceTimeline
					entries={ExperienceData}
					railReady={railReady}
					reduceMotion={reduceMotion}
				/>
			</div>
		</section>
	);
}

export default ExperienceSection;
