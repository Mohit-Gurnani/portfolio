'use client'

import React from 'react';
import {ProjectsData} from "@/data/Projects.data";
import {ChevronLeft, ChevronRight, DotIcon} from "lucide-react";
import {cn, parseNumber} from "@/lib/utils";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNextButton,
	CarouselPrevButton,
	useCarousel
} from "@/components/common/carousel";
import ProjectDetails from "@/components/projectsSection/ProjectDetails";

function ProjectsCarouselHeader() {
	const {selectedIndex, scrollSnapsCount} = useCarousel();

	return (
		<div className="border-b border-secondary/15 py-3 px-5">
			<div className="flex flex-row justify-between items-center">
				<div className="shrink-0 flex flex-row items-center">
					<DotIcon className={"-ms-4.5 text-secondary size-10"}/>
					<p className={"text-xl font-primary text-secondary"}>{parseNumber(selectedIndex + 1)}</p>
				</div>
				<div className="shrink-0 flex flex-row gap-4 items-center">
					<CarouselPrevButton
						className="flex items-center justify-center size-8 rounded-full border border-secondary/15 text-secondary hover:bg-secondary/10 transition-colors disabled:opacity-40 cursor-pointer">
						<ChevronLeft className="size-4.5"/>
					</CarouselPrevButton>

					<p className={"text-base flex flex-row gap-2 font-primary text-secondary"}>
						<span className={"text-tertiary"}>{parseNumber(selectedIndex + 1)}</span>
						<span>/</span>
						<span>{parseNumber(scrollSnapsCount)}</span>
					</p>

					<CarouselNextButton
						className="flex items-center justify-center size-8 rounded-full border border-secondary/15 text-secondary hover:bg-secondary/10 transition-colors disabled:opacity-40 cursor-pointer">
						<ChevronRight className="size-4.5"/>
					</CarouselNextButton>
				</div>
			</div>
		</div>
	);
}

function ProjectsCarouselProgress() {
	const {selectedIndex, scrollSnapsCount, emblaApi} = useCarousel();

	return (
		<div className="flex flex-row gap-2 items-center justify-center py-5 border-t border-secondary/15">
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
	);
}

function ProjectsSection() {
	return (
		<section
			className={"w-9/10 xl:w-85/100 mx-auto flex flex-col gap-5 md:gap-7.5 xl:gap-10"}>
			<div className="flex flex-col gap-3">
				<h2 className={"font-primary text-6xl text-secondary text-center tracking-[-0.4rem]"}>Projects</h2>
				<p className={"font-primary text-center text-base text-secondary/70"}>All the projects I&apos;ve thought of,
					engineered and
					developed</p>
			</div>
			<Carousel className="flex flex-col bg-secondary/3 border border-secondary/15 rounded-xl">
				<ProjectsCarouselHeader/>

				<CarouselContent className="w-full">
					{ProjectsData.map((project, index) => (
						<CarouselItem key={index} className="w-full">
							<ProjectDetails project={project}/>
						</CarouselItem>
					))}
				</CarouselContent>

				<ProjectsCarouselProgress/>
			</Carousel>
		</section>
	);
}

export default ProjectsSection;