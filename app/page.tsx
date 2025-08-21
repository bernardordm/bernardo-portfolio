"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LanguageProvider } from "@/hooks/use-language";
import { Header } from "@/components/header";
import { ResumeSection } from "@/components/sections/resume";
import { AboutMeSection } from "@/components/sections/about-me";
import { SkillsSection } from "@/components/sections/skills";
import { ExperiencesSection } from "@/components/sections/experiences";
import { ProjectsSection } from "@/components/sections/projects";
import { InterestsSection } from "@/components/sections/interests";
import { AcademicSection } from "@/components/sections/academic";
import { ContactSection } from "@/components/sections/contact";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("resume");

  const { ref: resumeRef, inView: resumeInView } = useInView({
    threshold: 0.3,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: experiencesRef, inView: experiencesInView } = useInView({
    threshold: 0.3,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: academicRef, inView: academicInView } = useInView({
    threshold: 0.3,
  });
  const { ref: interestsRef, inView: interestsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (resumeInView) setActiveSection("resume");
    else if (aboutInView) setActiveSection("about");
    else if (skillsInView) setActiveSection("skills");
    else if (experiencesInView) setActiveSection("experiences");
    else if (projectsInView) setActiveSection("projects");
    else if (academicInView) setActiveSection("academic");
    else if (interestsInView) setActiveSection("interests");
    else if (contactInView) setActiveSection("contact");
  }, [
    resumeInView,
    aboutInView,
    skillsInView,
    experiencesInView,
    projectsInView,
    academicInView,
    interestsInView,
    contactInView,
  ]);

  return (
    <LanguageProvider>
      <div className="relative">
        <Header activeSection={activeSection} />
        <main>
          <section id="resume" ref={resumeRef}>
            <ResumeSection inView={resumeInView} />
          </section>
          <section id="about" ref={aboutRef}>
            <AboutMeSection inView={aboutInView} />
          </section>
          <section id="skills" ref={skillsRef}>
            <SkillsSection inView={skillsInView} />
          </section>
          <section id="experiences" ref={experiencesRef}>
            <ExperiencesSection inView={experiencesInView} />
          </section>
          <section id="projects" ref={projectsRef}>
            <ProjectsSection inView={projectsInView} />
          </section>
          <section id="academic" ref={academicRef}>
            <AcademicSection inView={academicInView} />
          </section>
          <section id="interests" ref={interestsRef}>
            <InterestsSection inView={interestsInView} />
          </section>
          <section id="contact" ref={contactRef}>
            <ContactSection inView={contactInView} />
          </section>
        </main>
      </div>
    </LanguageProvider>
  );
}
