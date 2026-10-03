'use client'

import React, {useEffect, useRef, useState} from 'react';
import {motion, useInView, useReducedMotion} from 'motion/react';
import ContactTerminalForm from '@/components/contactSection/ContactTerminalForm';
import {CONTACT_EMAIL} from '@/data/Contact.data';

function getViewportHeight() {
	return window.visualViewport?.height ?? window.innerHeight;
}

function ContactSection() {
	const reduceMotion = useReducedMotion() ?? false;
	const sectionRef = useRef<HTMLElement | null>(null);
	const panelRef = useRef<HTMLDivElement | null>(null);
	const titleInView = useInView(sectionRef, {amount: 0.2, once: true});
	const [started, setStarted] = useState(reduceMotion);

	useEffect(() => {
		if (reduceMotion) {
			setStarted(true);
			return;
		}

		const check = () => {
			const el = panelRef.current;
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const vh = getViewportHeight();

			// Primary: panel bottom has reached/passed the viewport bottom
			// Fallback: panel is meaningfully on-screen (mobile chrome / short pages
			// often never pin the padded section bottom exactly to the viewport)
			const bottomReached = rect.bottom <= vh + 4;
			const onScreen =
				rect.top < vh * 0.85 && rect.bottom > Math.min(80, vh * 0.1);

			if (bottomReached || onScreen) {
				setStarted(true);
			}
		};

		check();
		window.addEventListener('scroll', check, {passive: true});
		window.addEventListener('resize', check);
		window.visualViewport?.addEventListener('resize', check);
		window.visualViewport?.addEventListener('scroll', check);

		return () => {
			window.removeEventListener('scroll', check);
			window.removeEventListener('resize', check);
			window.visualViewport?.removeEventListener('resize', check);
			window.visualViewport?.removeEventListener('scroll', check);
		};
	}, [reduceMotion]);

	return (
		<section
			id="contact"
			ref={sectionRef}
			className="w-9/10 xl:w-85/100 mx-auto flex flex-col gap-5 md:gap-7.5 xl:gap-10 pb-32"
		>
			<div className="flex flex-col gap-3">
				<motion.h2
					initial={reduceMotion ? false : {opacity: 0, y: 16}}
					animate={
						titleInView || reduceMotion
							? {opacity: 1, y: 0}
							: {opacity: 0, y: 16}
					}
					transition={{duration: 0.45, ease: 'easeOut'}}
					className="font-primary text-6xl text-secondary text-center tracking-[-0.4rem]"
				>
					Contact
				</motion.h2>
				<motion.p
					initial={reduceMotion ? false : {opacity: 0, y: 16}}
					animate={
						titleInView || reduceMotion
							? {opacity: 1, y: 0}
							: {opacity: 0, y: 16}
					}
					transition={{
						duration: 0.45,
						delay: reduceMotion ? 0 : 0.1,
						ease: 'easeOut',
					}}
					className="font-primary text-center text-base text-secondary/70"
				>
					Drop a message — I&apos;ll get back ASAP
				</motion.p>
			</div>

			<div
				ref={panelRef}
				className="flex flex-col bg-secondary/3 border border-secondary/15 rounded-xl overflow-hidden min-h-105 sm:min-h-72 xl:min-h-75"
			>
				<div
					className="border-b border-secondary/15 py-3 px-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
					<span className="font-primary text-sm text-tertiary">
						$ contact --interactive
					</span>
					<a
						href={`mailto:${CONTACT_EMAIL}`}
						className="font-primary text-sm text-secondary/50 hover:text-secondary/80 transition-colors break-all"
					>
						{CONTACT_EMAIL}
					</a>
				</div>

				<ContactTerminalForm started={started} reduceMotion={reduceMotion}/>
			</div>
		</section>
	);
}

export default ContactSection;
