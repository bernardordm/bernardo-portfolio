"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Header } from "@/components/header";
import { ResumeSection } from "@/components/sections/resume";
import { AboutMeSection } from "@/components/sections/about-me";
import { SkillsSection } from "@/components/sections/skills";
import { ExperiencesSection } from "@/components/sections/experiences";
import { ProjectsSection } from "@/components/sections/projects";
import { InterestsSection } from "@/components/sections/interests";
import { AcademicSection } from "@/components/sections/academic";

export default function PortfolioPage() {
  const [currentSection, setCurrentSection] = useState("hero");

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.5,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.5,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.5,
  });
  const { ref: interestsRef, inView: interestsInView } = useInView({
    threshold: 0.5,
  });
  const { ref: academicRef, inView: academicInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (heroInView) setCurrentSection("hero");
    else if (aboutInView) setCurrentSection("about");
    else if (skillsInView) setCurrentSection("skills");
    else if (experienceInView) setCurrentSection("experience");
    else if (projectsInView) setCurrentSection("projects");
    else if (academicInView) setCurrentSection("academic");
    else if (interestsInView) setCurrentSection("interests");
  }, [
    heroInView,
    aboutInView,
    skillsInView,
    experienceInView,
    projectsInView,
    interestsInView,
    academicInView,
  ]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Header currentSection={currentSection} />

      <main className="relative z-10">
        <section
          id="home"
          ref={heroRef}
          className="min-h-screen flex items-center justify-center"
        >
          <ResumeSection inView={heroInView} />
        </section>
        <section
          id="about"
          ref={aboutRef}
          className="min-h-screen flex items-center justify-center"
        >
          <AboutMeSection inView={aboutInView} />
        </section>
        <section
          id="skills"
          ref={skillsRef}
          className="min-h-screen flex items-center justify-center"
        >
          <SkillsSection inView={skillsInView} />
        </section>
        <section
          id="experience"
          ref={experienceRef}
          className="min-h-screen flex items-center justify-center"
        >
          <ExperiencesSection inView={experienceInView} />
        </section>
        <section
          id="projects"
          ref={projectsRef}
          className="min-h-screen flex items-center justify-center"
        >
          <ProjectsSection inView={projectsInView} />
        </section>
        <section
          id="academic"
          ref={academicRef}
          className="min-h-screen flex items-center justify-center"
        >
          <AcademicSection inView={academicInView} />
        </section>
        <section
          id="interests"
          ref={interestsRef}
          className="min-h-screen flex items-center justify-center"
        >
          <InterestsSection inView={interestsInView} />
        </section>
      </main>

      <footer className="bg-card p-6 text-center border-t border-primary/30">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bernardo de Resende Marcelino.
        </p>
      </footer>
    </div>
  );
}
