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

/**
 * CORREÇÃO 3: Repetição excessiva de hooks useInView
 * PROBLEMA: 8 hooks useInView individuais causam overhead desnecessário
 * SOLUÇÃO SUGERIDA: Criar hook customizado único para gerenciar todas seções
 * BENEFÍCIO: Redução significativa de re-renders, código mais limpo
 * 
 * // Hook customizado sugerido:
 * // const useActiveSection = () => {
 * //   const [activeSection, setActiveSection] = useState("resume");
 * //   const sectionsRef = useRef<HTMLElement[]>([]);
 * //   
 * //   useEffect(() => {
 * //     const observer = new IntersectionObserver((entries) => {
 * //       entries.forEach(entry => {
 * //         if (entry.isIntersecting) {
 * //           setActiveSection(entry.target.id);
 * //         }
 * //       });
 * //     }, { threshold: 0.3 });
 * //     
 * //     sectionsRef.current.forEach(section => observer.observe(section));
 * //     return () => observer.disconnect();
 * //   }, []);
 * //   
 * //   return { activeSection, sectionsRef };
 * // };
 */

/**
 * CORREÇÃO 4: useEffect ineficiente para activeSection
 * PROBLEMA: Chain de if/else com 8 dependências causa re-renders excessivos
 * SOLUÇÃO SUGERIDA: Usar useMemo ou lógica baseada em scroll position
 * BENEFÍCIO: Menos ciclos de renderização, melhor performance
 * 
 * // Solução sugerida com useMemo:
 * // const activeSection = useMemo(() => {
 * //   const sections = [
 * //     { name: "resume", inView: resumeInView },
 * //     { name: "about", inView: aboutInView },
 * //     // ... outras seções
 * //   ];
 * //   return sections.find(section => section.inView)?.name || "resume";
 * // }, [resumeInView, aboutInView, ...otherDependencies]);
 */

/**
 * CORREÇÃO 18: Estado local excessivo
 * PROBLEMA: activeSection poderia ser derivado da URL ou scroll position
 * SOLUÇÃO SUGERIDA: Usar URL como source of truth
 * BENEFÍCIO: Single source of truth, menos bugs de sincronização
 *
 * // Solução com URL hash:
 * // const [activeSection, setActiveSection] = useState(() => {
 * //   if (typeof window !== 'undefined') {
 * //     return window.location.hash.slice(1) || 'resume';
 * //   }
 * //   return 'resume';
 * // });
 * // 
 * // useEffect(() => {
 * //   const handleHashChange = () => {
 * //     setActiveSection(window.location.hash.slice(1) || 'resume');
 * //   };
 * //   window.addEventListener('hashchange', handleHashChange);
 * //   return () => window.removeEventListener('hashchange', handleHashChange);
 * // }, []);
 */

/**
 * CORREÇÃO 20: Magic numbers
 * PROBLEMA: threshold: 0.3 hardcoded, sem explicação
 * SOLUÇÃO SUGERIDA: Usar constantes nomeadas
 * BENEFÍCIO: Código mais legível, fácil de ajustar
 * 
 * // Constantes sugeridas:
 * // const INTERSECTION_THRESHOLD = 0.3; // 30% da seção visível para ativar
 * // const INTERSECTION_ROOT_MARGIN = '0px 0px -20% 0px'; // Ativa antes da seção aparecer
 */

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
