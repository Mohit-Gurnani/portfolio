import React from 'react';
import {Download} from 'lucide-react';

const Footer = () => {
	return (
		<footer className="py-4 md:py-6 xl:py-8 bg-[#292929]">
			<div
				className="flex tracking-tight flex-col font-primary w-916/1000 xl:w-9/10 mx-auto items-center justify-center gap-2.5">
				<a
					href="/resume/Mohit_Gurnani_Resume.pdf"
					download="Mohit_Gurnani_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center gap-1.5 text-xs text-secondary/70 hover:text-tertiary transition-colors px-3 py-1 rounded-md border border-secondary/15 hover:border-tertiary/40 bg-secondary/5 hover:bg-tertiary/10"
					aria-label="Download Mohit Gurnani's Resume"
				>
					<Download className="size-3.5 text-tertiary transition-transform duration-200 group-hover:-translate-y-0.5" />
					<span>Download Resume (PDF)</span>
				</a>
				<p className="text-base">Crafted with 💜 by Mohit Gurnani</p>
				<p className="text-sm text-secondary/70">{new Date().getFullYear()}; All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
