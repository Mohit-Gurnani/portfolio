import React from 'react';
import HeroSection from "@/components/heroSection/HeroSection";
import ProjectsSection from "@/components/projectsSection/ProjectsSection";
import ExperienceSection from "@/components/experienceSection/ExperienceSection";

function HomePage() {
  return (
    <main className={"flex flex-col gap-32 mb-32"}>
      <HeroSection/>
      <ProjectsSection/>
      <ExperienceSection/>
    </main>
  );
}

export default HomePage;