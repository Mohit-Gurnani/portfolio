'use client'

import React from 'react';
import Radar from "@/components/common/Radar";
import {ProjectsData} from "@/data/Projects.data";
import {ArrowUpRightIcon, ChevronLeft, ChevronRight, DotIcon} from "lucide-react";
import {cn, parseNumber} from "@/lib/utils";
import Link from "next/link";
import {GitHubIcon} from "@/public/SVGs/SVGs";
import {ProjectImageCarousel} from "@/components/projectsSection/ProjectImageCarousel";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNextButton,
	CarouselPrevButton,
	useCarousel
} from "@/components/common/carousel";

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
			className={"min-h-screen w-9/10 xl:w-85/100 mx-auto flex flex-col gap-5 md:gap-7.5 xl:gap-10"}>
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
							<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10">
								<div className="border-r border-secondary/15 flex flex-col gap-7.5 justify-between px-5">
									<div className="flex flex-col gap-5">
										<div className="flex flex-col gap-3">
											<h2 className={"text-2xl text-secondary font-primary font-semibold"}>{project.title}</h2>
											<p className={"text-tertiary font-primary text-sm"}>{project.subTitle}</p>
										</div>
										<p className={"text-secondary/70 font-primary text-base"}>{project.description}</p>
									</div>
									<div className="flex flex-row gap-4">
										{project?.liveLink && (
											<Link
												className={"text-tertiary w-full items-center text-sm justify-center focus:outline-0 bg-tertiary/20 rounded-md border border-tertiary transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] shadow gap-2 px-4 py-2 flex flex-row"}
												target="_blank" href={project?.liveLink}
											>
												Live Link
												<ArrowUpRightIcon/>
											</Link>
										)}
										<Link
											className={"text-secondary w-full items-center text-sm justify-center focus:outline-0 bg-secondary/20 rounded-md border border-secondary transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(244,244,245,0.2)] shadow gap-2 px-4 py-2 flex flex-row"}
											target="_blank" href={project.repoLink}
										>
											<GitHubIcon className={"size-5"}/>
											GitLab
											<ArrowUpRightIcon/>
										</Link>
									</div>
								</div>
								<div className="flex flex-col gap-5 items-center justify-center px-5">
									<p className={"text-secondary font-primary text-center text-lg"}>Tech Stack</p>
									<Radar targets={project.techStack} size={335}/>
									<div
										className="flex flex-row flex-wrap items-center justify-center bg-secondary/7.5 rounded-md border border-secondary/15 px-4 py-2">
										{project.techStack.map((stack, idx) => (
											<div key={idx} className={"text-secondary/70 flex flex-row items-center font-primary"}>
												<p className={"text-sm"}>{stack.name}</p>
												<DotIcon
													className={cn("text-secondary size-10 -m-1.5", idx === project.techStack.length - 1 && "hidden")}/>
											</div>
										))}
									</div>
								</div>
								<div className="flex items-center justify-center p-5 xl:p-10 md:col-span-2 xl:col-span-1">
									<ProjectImageCarousel images={project.images}/>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<ProjectsCarouselProgress/>
			</Carousel>
		</section>
	);
}

export default ProjectsSection;