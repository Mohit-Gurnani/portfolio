import React from 'react';
import HeroSection from "@/components/heroSection/HeroSection";
import ProjectsSection from "@/components/projectsSection/ProjectsSection";
import ExperienceSection from "@/components/experienceSection/ExperienceSection";
import ContactSection from "@/components/contactSection/ContactSection";

function HomePage() {
	return (
		<main className={"flex flex-col gap-32"}>
			<HeroSection/>
			<ProjectsSection/>
			<ExperienceSection/>
			<ContactSection/>
		</main>
	);
}

export default HomePage;