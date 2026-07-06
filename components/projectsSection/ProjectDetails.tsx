import React from 'react';
import {Project} from "@/data/Projects.data";
import Link from "next/link";
import {ArrowUpRightIcon, DotIcon} from "lucide-react";
import {GitHubIcon} from "@/public/SVGs/SVGs";
import {ProjectImageCarousel} from "@/components/projectsSection/ProjectImageCarousel";
import Radar from "@/components/common/Radar";
import {cn} from "@/lib/utils";

function ProjectDetails({project}: { project: Project }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 gap-y-7.5 md:gap-y-10">
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
							className={"text-tertiary w-full items-center text-sm justify-center focus:outline-0 bg-tertiary/20 rounded-md border border-tertiary transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] shadow gap-2 px-3 md:px-4 py-2 flex flex-row"}
							target="_blank" href={project?.liveLink}
						>
							Live Link
							<ArrowUpRightIcon/>
						</Link>
					)}
					{project?.repoLink && (
						<Link
							className={"text-secondary w-full items-center text-sm justify-center focus:outline-0 bg-secondary/20 rounded-md border border-secondary transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(244,244,245,0.2)] shadow gap-2 px-3 md:px-4 py-2 flex flex-row"}
							target="_blank" href={project.repoLink}
						>
							<GitHubIcon className={"size-5"}/>
							GitLab
							<ArrowUpRightIcon/>
						</Link>
					)}
				</div>
			</div>
			<div
				className="flex flex-col gap-5 items-center justify-center mx-5 pt-7.5 md:pt-0 border-t border-secondary/15 md:border-t-0">
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
			<div
				className="flex items-center border-t border-secondary/15 xl:border-t-0 justify-center pt-5 pb-0 md:pb-0 md:p-10 md:pt-12.5 lg:pt-20 lg:pb-10 xl:px-0 md:col-span-2 xl:col-span-1 mx-2 xl:ms-0 xl:p-0">
				<ProjectImageCarousel images={project.images}/>
			</div>
		</div>
	)
}

export default ProjectDetails;