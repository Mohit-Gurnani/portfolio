'use client';

import React, {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {AnimatePresence, motion} from 'framer-motion';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNextButton,
	CarouselPrevButton,
	useCarousel
} from "@/components/common/carousel";
import {cn} from "@/lib/utils";
import {ChevronLeft, ChevronRight, XIcon} from "lucide-react";
import Image from "next/image";

interface ProjectImageCarouselProps {
	images: string[];
}

function CarouselControls() {
	const {selectedIndex, scrollSnapsCount, emblaApi} = useCarousel();

	return (
		<div className="flex flex-row items-center justify-center gap-5 mt-5">
			<CarouselPrevButton
				className="flex items-center justify-center size-8 md:size-10 xl:size-12 rounded-full bg-neutral-900 border border-secondary/20 hover:bg-neutral-800 text-secondary transition-colors cursor-pointer shadow-lg disabled:opacity-40"
			>
				<ChevronLeft className="size-4 md:size-5 xl:size-6"/>
			</CarouselPrevButton>

			<div className="flex flex-row gap-2 items-center">
				{Array.from({length: scrollSnapsCount}).map((_, idx) => (
					<button
						key={idx}
						onClick={() => emblaApi?.scrollTo(idx)}
						className={cn(
							"h-1 transition-all duration-300 rounded-full hover:cursor-pointer",
							idx === selectedIndex ? "w-7 bg-tertiary" : "w-4 bg-secondary/30 hover:bg-secondary/50"
						)}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>

			<CarouselNextButton
				className="flex items-center justify-center size-8 md:size-10 xl:size-12 rounded-full bg-neutral-900 border border-secondary/20 hover:bg-neutral-800 text-secondary transition-colors cursor-pointer shadow-lg disabled:opacity-40"
			>
				<ChevronRight className="size-4 md:size-5 xl:size-6"/>
			</CarouselNextButton>
		</div>
	);
}

export function ProjectImageCarousel({images}: ProjectImageCarouselProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			{mounted && createPortal(
				<AnimatePresence>
					{isExpanded && (
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-5"
							onClick={() => setIsExpanded(false)}
						>
							<motion.div
								className="relative w-[80vw] h-fit flex flex-col items-center justify-center"
								style={{transformStyle: "preserve-3d", perspective: "1000px"}}
								initial={{opacity: 0, scale: 0.6, rotateY: -25}}
								animate={{opacity: 1, scale: 1, rotateY: 0}}
								exit={{opacity: 0, scale: 0.6, rotateY: -25}}
								transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
								onClick={(e) => e.stopPropagation()}
							>
								<Carousel className="w-full h-full flex flex-col justify-between relative">
									{/* macOS terminal style wrapper for the image */}
									<div
										className="relative grow w-full border border-secondary/15 bg-neutral-900/90 rounded-xl overflow-hidden flex flex-col shadow-2xl">
										{/* macOS controls header */}
										<div
											className="flex flex-row items-center justify-between border-b border-secondary/15 p-4 bg-neutral-900 shrink-0">
											<div className="flex flex-row gap-x-2">
												<button
													onClick={() => setIsExpanded(false)}
													className="size-4 text-black rounded-full bg-red-500 flex items-center justify-center group focus:outline-none cursor-pointer"
													aria-label="Close terminal"
												>
													<XIcon size={16}/>
												</button>
												<div className="size-4 rounded-full bg-yellow-500"></div>
												<div className="size-4 rounded-full bg-green-500"></div>
											</div>
											<div className="text-xs text-secondary/40 font-mono select-none">
												image-carousel.sh
											</div>
											<div className="w-10"></div>
										</div>
										{/* Viewport content */}
										<div className="relative grow flex items-center justify-center overflow-hidden bg-black/30">
											<CarouselContent className="h-full">
												{images.map((img, idx) => (
													<CarouselItem key={idx}
													              className="relative h-full max-h-[70vh] flex items-center justify-center">
														<img
															width={10000}
															height={10000}
															src={img}
															alt={`Project screenshot ${idx + 1}`}
															className="max-h-full max-w-full object-contain rounded-md"
														/>
													</CarouselItem>
												))}
											</CarouselContent>
										</div>
									</div>

									{/* Controls (Buttons & Progress Indicators) OUTSIDE the terminal */}
									<motion.div
										initial={{opacity: 0, y: 10}}
										animate={{opacity: 1, y: 0}}
										transition={{delay: 0.4}}
									>
										<CarouselControls/>
									</motion.div>
								</Carousel>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>,
				document.body
			)}

			<div className="w-full h-full flex items-center justify-center relative" style={{perspective: "1000px"}}>
				<motion.div
					className={cn(
						"relative w-full aspect-4/3 xl:aspect-video rounded-xl cursor-pointer overflow-visible"
					)}
					style={{
						transformStyle: "preserve-3d",
						border: "1px solid #22C55E00"
					}}
					initial={{rotateY: -25, scale: 0.95}}
					animate={{rotateY: -25, scale: 0.95}}
					whileHover={{boxShadow: "0 0 40px rgba(34, 197, 94, 0.2)", border: "1px solid #22C55E"}}
					transition={{duration: 0.3, ease: "easeOut"}}
					onClick={() => setIsExpanded(true)}
				>
					<Image
						width={10000}
						height={10000}
						src={images[0]}
						alt="Project Preview"
						className="w-full h-full object-cover rounded-xl"
						style={{transform: "translateZ(0px)"}}
					/>
				</motion.div>
			</div>
		</>
	);
}
