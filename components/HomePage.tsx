import React from 'react';
import HeroSection from "@/components/heroSection/HeroSection";
import ProjectsSection from "@/components/projectsSection/ProjectsSection";

function HomePage() {
  return (
    <main className={"flex flex-col gap-32 mb-32"}>
      <HeroSection/>
      <ProjectsSection/>
    </main>
  );
}

export default HomePage;