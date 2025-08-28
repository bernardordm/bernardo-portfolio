import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    "nav.about": "Sobre Mim",
    "nav.projects": "Projetos",
    "nav.experiences": "Experiências",
    "nav.contact": "Contato",
    "nav.academic": "Acadêmico",
    "nav.interests": "Interesses",
    "nav.skills": "Habilidades",

    // Resume
    "resume.title": "Bernardo de Resende",
    "resume.subtitle": "Engenheiro de Software | Desenvolvedor Fullstack",
    "resume.description":
      "Transformando ideias complexas em soluções inteligentes.",
    "resume.downloadCV": "Download CV",
    "resume.contact": "Entre em Contato",

    // About
    "about.title": "console.log('Sobre Mim')",
    "about.subtitle":
      "Conheça minha trajetória, valores e o que me motiva no desenvolvimento de software.",
    "about.intro":
      "Olá! Sou Bernardo, um desenvolvedor fullstack e entusiasta de tecnologia, residente da região metropolitana de Belo Horizonte. Desde os 14 anos, quando comecei a explorar o mundo da programação, me apaixonei pelo potencial transformador da tecnologia. Aos 19, continuo dedicado a essa jornada, sempre buscando soluções criativas e inovadoras para os desafios que encontro.",
    "about.education":
      "Concluí um curso técnico profissionalizante de Automação Industrial no SENAI (2021-2022) e, atualmente, estou no 4º semestre de Engenharia de Software na PUC Minas, consolidando uma base sólida em fundamentos da computação e metodologias de desenvolvimento.",
    "about.experience":
      "Há 6 meses, ingressei no mercado de trabalho como desenvolvedor fullstack, onde tenho aplicado conhecimentos práticos em projetos reais. Essa experiência profissional tem sido fundamental para aprimorar minhas habilidades técnicas e compreender as demandas do desenvolvimento de software em ambiente corporativo.",
    "about.technical":
      "Minha experiência profissional tem me permitido trabalhar com padrões de projeto como MVC, Repository Pattern e Dependency Injection, além de práticas de Clean Code e arquiteturas escaláveis. Tenho vivência em metodologias ágeis, versionamento com Git, e integração de APIs REST, sempre priorizando código com facilidade na manutenção e performático.",
    "about.vision":
      "Minha formação técnica, aliada à experiência acadêmica e profissional, me permite abordar problemas complexos com uma visão sistêmica e soluções tecnológicas atualizadas. Sou movido pela vontade constante de aprender, evoluir e contribuir para projetos que façam a diferença.",

    // Skills
    "skills.title": "Habilidades e Tecnologias",
    "skills.subtitle":
      "Minhas principais habilidades técnicas e as tecnologias que domino.",
    "skills.languages": "Linguagens",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.databases": "Banco de Dados",
    "skills.tools": "Ferramentas",
    "skills.learning": "Estudando",
    "skills.languageSkills": "Idiomas",
    "skills.portuguese": "Português (Nativo)",
    "skills.english": "Inglês - Avançado",

    // Projects
    "projects.title": "Projetos Desenvolvidos",
    "projects.subtitle":
      "Projetos que demonstram minha evolução técnica e aplicação prática de conceitos fundamentais da engenharia de software.",
    "projects.highlight": "DESTAQUE",
    "projects.github": "GitHub",
    "projects.live": "Live",
    "projects.private": "Privado",
    "projects.comingSoon": "Em Breve",

    // Individual Projects
    "projects.javaParking.description":
      "Sistema de controle de estacionamento desenvolvido em Java com foco em Programação Orientada a Objetos. Implementa conceitos fundamentais como polimorfismo, encapsulamento e divisão de responsabilidades, seguindo o padrão MVC com DTOs e interface gráfica em JavaFX.",

    "projects.gnosi.title": "Plataforma de Cursos",
    "projects.gnosi.description":
      "Plataforma gratuita de cursos online com arquitetura fullstack robusta. Backend desenvolvido em Java Spring Boot e frontend em React.js, aplicando rigorosamente os princípios de POO, padrão MVC e boas práticas de desenvolvimento de software.",

    "projects.fabianaMoveis.title": "Sistema de Gestão",
    "projects.fabianaMoveis.description":
      "Sistema completo de gestão desenvolvido para cliente real, incluindo rastreamento de entregas via Google Maps API, geração de relatórios, cadastro de funcionários e controle de entregas. Solução fullstack com backend em Node.js/NestJS e frontend em Next.js.",
    "projects.videos": "Vídeos dos Projetos",
    // Experiences
    "experiences.title": "Experiência Profissional",
    "experiences.subtitle":
      "Minha trajetória profissional e acadêmica, registrando cada missão concluída.",

    // SENAI Experience
    "experiences.senai.title": "Técnico em Automação Industrial",
    "experiences.senai.company": "SENAI - Pedro Leopoldo",
    "experiences.senai.duration": "2021 - 2023",
    "experiences.senai.description":
      "Formação técnica completa em Automação Industrial, com experiência prática em programação de PLCs, desenvolvimento de sistemas SCADA, e automação de processos industriais. Trabalho com programação de motores, válvulas, sistemas pneumáticos e hidráulicos, além de controle e monitoramento de equipamentos industriais para otimização de processos de produção.",

    // M2C Experience
    "experiences.m2c.title": "Desenvolvedor Fullstack Jr",
    "experiences.m2c.company": "M2C Digital",
    "experiences.m2c.duration": "Jan 2025 - Presente",
    "experiences.m2c.description":
      "Desenvolvimento fullstack em empresa especializada em envio de SMS, atuando no core do sistema e APIs. Utilizo Node.js com TypeScript e framework NestJS no backend, React.js no frontend, e ferramentas como RabbitMQ para administração de filas de envio. Responsável por implementar funcionalidades críticas para comunicação em massa e otimização de performance.",

    "academic.title": "Acadêmico",
    "academic.subtitle":
      "Minha jornada acadêmica, pesquisas e contribuições para o desenvolvimento científico e tecnológico.",
    "academic.research": "PESQUISA",
    "academic.linkedin": "Conecte-se no LinkedIn",
    "academic.publications": "Pesquisas e Publicações",
    "academic.certifications": "Certificações e Cursos",
    "academic.keywords": "Palavras-chave:",
    "academic.objectives": "Objetivos da pesquisa:",
    // Artigo específico
    "academic.publication.title":
      "Otimização e Resolução de Integrais: Análise Comparativa de LLMs para Problemas Matemáticos Complexos",
    "academic.publication.type": "Artigo Científico",
    "academic.publication.status": "Em desenvolvimento",
    "academic.publication.description":
      "Pesquisa sobre a aplicação de diferentes Large Language Models (LLMs) na resolução e otimização de problemas no cálculo de integrais, comparando precisão, metodologia e qualidade das respostas entre modelos como GPT-4, Claude, Gemini e outros.",
    "academic.publication.keywords.0": "Machine Learning",
    "academic.publication.keywords.1": "LLMs",
    "academic.publication.keywords.2": "Matemática Aplicada",
    "academic.publication.keywords.3": "Otimização",
    "academic.publication.keywords.4": "Integrais",
    "academic.publication.keywords.5": "IA",
    "academic.publication.objectives.0":
      "Avaliar a precisão de diferentes LLMs no cálculo de integrais",
    "academic.publication.objectives.1":
      "Comparar metodologias de resolução entre modelos",
    "academic.publication.objectives.2":
      "Identificar limitações e pontos fortes de cada LLM",
    "academic.publication.objectives.3":
      "Propor formas de avaliação para resolução de problemas matemáticos",

    // Exemplo para pt
    "interests.title": "Interesses Profissionais",
    "interests.subtitle":
      "Além do código, o que alimenta minha curiosidade e me impulsiona a explorar novos domínios.",
    "interests.webdev": "Desenvolvimento Web",
    "interests.webdev_desc":
      "Paixão por criar aplicações web modernas e responsivas, explorando novas tecnologias e frameworks.",
    "interests.ml": "Machine Learning",
    "interests.ml_desc":
      "Fascínio pela inteligência artificial e algoritmos de aprendizado de máquina para resolver problemas complexos.",
    "interests.techreading": "Leitura Técnica",
    "interests.techreading_desc":
      "Manter-me atualizado com as últimas tendências e aprofundar conhecimentos em diversas áreas da tecnologia.",
    "interests.ai": "Inteligência Artificial",
    "interests.ai_desc":
      "Explorar o potencial da IA, redes neurais e suas aplicações práticas em diferentes domínios.",
    "interests.gamedev": "Desenvolvimento de Jogos",
    "interests.gamedev_desc":
      "Interesse em criar experiências interativas e imersivas, combinando programação e criatividade.",
    "interests.quantum": "Computação Quântica",
    "interests.quantum_desc":
      "Curiosidade sobre os avanços e o futuro da computação quântica e suas aplicações revolucionárias.",
    "interests.popculture": "Cultura Pop & Ficção Científica",
    "interests.popculture_desc":
      "Apreciar universos de ficção científica, filmes, séries e jogos que inspiram a criatividade.",
    
    //CONTATOS
      "contact.title": "Contatos",
    "contact.subtitle":
      "Estou sempre aberto a novas oportunidades, novos projetos e conexões profissionais. Entre em contato e vamos construir algo incrível juntos!",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.email_description": "Resposta em até 24h",
    "contact.phone_description": "WhatsApp disponível",
    "contact.social": "Redes Sociais",
    "contact.linkedin": "Conecte-se profissionalmente",
    "contact.github": "Confira meus projetos",
    "contact.instagram": "Acompanhe minha jornada",
    "contact.available": "Disponível para Projetos",
    "contact.available_description": "Respondo em até 24 horas",
    "contact.form.title": "Envie um E-mail!",
    "contact.form.name": "Nome *",
    "contact.form.email": "E-mail *",
    "contact.form.subject": "Assunto *",
    "contact.form.message": "Mensagem *",
    "contact.form.name_placeholder": "Seu nome completo",
    "contact.form.email_placeholder": "seu@email.com",
    "contact.form.subject_placeholder":
      "Sobre o que você gostaria de conversar?",
    "contact.form.message_placeholder":
      "Descreva seu projeto, ideia ou como posso ajudar...",
    "contact.form.send": "Enviar E-mail",
    "contact.form.sending": "Enviando...",
    "contact.form.redirect":
      "Ao enviar, você será redirecionado para seu cliente de e-mail padrão.",
    // Validações
    "contact.form.error.name_required": "Nome é obrigatório",
    "contact.form.error.name_short": "Nome deve ter pelo menos 2 caracteres",
    "contact.form.error.email_required": "E-mail é obrigatório",
    "contact.form.error.email_invalid": "E-mail deve ter um formato válido",
    "contact.form.error.subject_required": "Assunto é obrigatório",
    "contact.form.error.subject_short":
      "Assunto deve ter pelo menos 5 caracteres",
    "contact.form.error.message_required": "Mensagem é obrigatória",
    "contact.form.error.message_short":
      "Mensagem deve ter pelo menos 10 caracteres",
  },
  en: {
    // Header
    "nav.about": "About Me",
    "nav.projects": "Projects",
    "nav.experiences": "Experiences",
    "nav.contact": "Contact",
    "nav.academic": "Academic",
    "nav.interests": "Interests",
    "nav.skills": "Skills",

    // Resume
    "resume.title": "Bernardo de Resende",
    "resume.subtitle": "Software Engineer | Fullstack Developer",
    "resume.description":
      "Transforming complex ideas into smart solutions.",
    "resume.downloadCV": "Download Resume",
    "resume.contact": "Get in Touch",

    // About
    "about.title": "console.log('About me')",
    "about.subtitle":
      "Learn about my journey, values, and what motivates me in software development.",
    "about.intro":
      "Hello! I'm Bernardo, a fullstack developer and technology enthusiast from the metropolitan region of Belo Horizonte. Since I was 14, when I started exploring the world of programming, I fell in love with the transformative potential of technology. At 19, I continue dedicated to this journey, always seeking creative and innovative solutions to the challenges I encounter.",
    "about.education":
      "I completed a technical course in Industrial Automation at SENAI (2021-2022) and am currently in the 4th semester of Software Engineering at PUC Minas, building a solid foundation in computer science fundamentals and development methodologies.",
    "about.experience":
      "6 months ago, I entered the job market as a fullstack developer, where I have been applying practical knowledge to real projects. This professional experience has been fundamental to improving my technical skills and understanding the demands of software development in a corporate environment.",
    "about.technical":
      "My professional experience has allowed me to work with design patterns like MVC, Repository Pattern, and Dependency Injection, as well as Clean Code practices and scalable architectures. I have experience with agile methodologies, Git versioning, and REST API integration, always prioritizing maintainable and performant code.",
    "about.vision":
      "My technical background, combined with academic and professional experience, allows me to approach complex problems with a systemic vision and updated technological solutions. I am driven by the constant desire to learn, evolve, and contribute to projects that make a difference.",

    // Skills
    "skills.title": "Skills and Technologies",
    "skills.subtitle":
      "My main technical skills and the technologies that are my stack.",
    "skills.languages": "Languages",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.databases": "Databases",
    "skills.tools": "Tools",
    "skills.learning": "Studying  ",
    "skills.languageSkills": "Languages",
    "skills.portuguese": "Portuguese (Native)",
    "skills.english": "English - Advanced",

    // Projects
    "projects.title": "Developed Projects",
    "projects.subtitle":
      "Projects that demonstrate my technical evolution and practical application of fundamental software engineering concepts.",
    "projects.highlight": "HIGHLIGHT",
    "projects.github": "GitHub",
    "projects.live": "Live",
    "projects.private": "Private",
    "projects.comingSoon": "Coming Soon",

    // Individual Projects
    "projects.javaParking.description":
      "Parking control system developed in Java focusing on Object-Oriented Programming. Implements fundamental concepts like polymorphism, encapsulation and separation of responsibilities, following the MVC pattern with DTOs and JavaFX graphical interface.",
    "projects.videos": "Projects Videos",
    "projects.gnosi.title": "Course Platform",
    "projects.gnosi.description":
      "Free online course platform with robust fullstack architecture. Backend developed in Java Spring Boot and frontend in React.js, rigorously applying OOP principles, MVC pattern and software development best practices.",

    "projects.fabianaMoveis.title": "Management System",
    "projects.fabianaMoveis.description":
      "Complete management system developed for real client, including delivery tracking via Google Maps API, report generation, employee registration and delivery control. Fullstack solution with Node.js/NestJS backend and Next.js frontend.",

    // Experiences
    "experiences.title": "Professional Experience",
    "experiences.subtitle":
      "My professional and academic journey, recording each completed mission.",

    // SENAI Experience
    "experiences.senai.title": "Industrial Automation Technician",
    "experiences.senai.company": "SENAI - Pedro Leopoldo",
    "experiences.senai.duration": "2021 - 2023",
    "experiences.senai.description":
      "Complete technical training in Industrial Automation, with hands-on experience in PLC programming, SCADA systems development, and industrial process automation. Work with motor programming, valves, pneumatic and hydraulic systems, plus control and monitoring of industrial equipment for production process optimization.",

    // M2C Experience
    "experiences.m2c.title": "Junior Fullstack Developer",
    "experiences.m2c.company": "M2C Digital",
    "experiences.m2c.duration": "Jan 2025 - Present",
    "experiences.m2c.description":
      "Fullstack development at a company specialized in SMS delivery, working on the system core and APIs. I use Node.js with TypeScript and NestJS framework on the backend, React.js on the frontend, and tools like RabbitMQ for managing delivery queues. Responsible for implementing critical features for mass communication and performance optimization.",

    "academic.title": "Academic",
    "academic.subtitle":
      "My academic journey, research and contributions to scientific and technological development.",
    "academic.research": "RESEARCH",
    "academic.linkedin": "Connect on LinkedIn",
    "academic.publications": "Research and Publications",
    "academic.certifications": "Certifications and Courses",
    "academic.keywords": "Keywords:",
    "academic.objectives": "Research objectives:",
    // Article specific
    "academic.publication.title":
      "Optimization and Solving of Integrals: Comparative Analysis of LLMs for Complex Mathematical Problems",
    "academic.publication.type": "Scientific Article",
    "academic.publication.status": "In development",
    "academic.publication.description":
      "Research on the application of different Large Language Models (LLMs) in solving and optimizing problems in integral calculus, comparing accuracy, methodology, and answer quality among models such as GPT-4, Claude, Gemini, and others.",
    "academic.publication.keywords.0": "Machine Learning",
    "academic.publication.keywords.1": "LLMs",
    "academic.publication.keywords.2": "Applied Mathematics",
    "academic.publication.keywords.3": "Optimization",
    "academic.publication.keywords.4": "Integrals",
    "academic.publication.keywords.5": "AI",
    "academic.publication.objectives.0":
      "Evaluate the accuracy of different LLMs in integral calculus",
    "academic.publication.objectives.1":
      "Compare solving methodologies among models",
    "academic.publication.objectives.2":
      "Identify limitations and strengths of each LLM",
    "academic.publication.objectives.3":
      "Propose evaluation methods for solving mathematical problems",

    // Exemplo para en
    "interests.title": "Professional Interests",
    "interests.subtitle":
      "Beyond code, what fuels my curiosity and drives me to explore new domains.",
    "interests.webdev": "Web Development",
    "interests.webdev_desc":
      "Passion for creating modern and responsive web applications, exploring new technologies and frameworks.",
    "interests.ml": "Machine Learning",
    "interests.ml_desc":
      "Fascinated by artificial intelligence and machine learning algorithms to solve complex problems.",
    "interests.techreading": "Technical Reading",
    "interests.techreading_desc":
      "Keeping up to date with the latest trends and deepening knowledge in various areas of technology.",
    "interests.ai": "Artificial Intelligence",
    "interests.ai_desc":
      "Exploring the potential of AI, neural networks, and their practical applications in different domains.",
    "interests.gamedev": "Game Development",
    "interests.gamedev_desc":
      "Interest in creating interactive and immersive experiences, combining programming and creativity.",
    "interests.quantum": "Quantum Computing",
    "interests.quantum_desc":
      "Curiosity about advances and the future of quantum computing and its revolutionary applications.",
    "interests.popculture": "Pop Culture & Science Fiction",
    "interests.popculture_desc":
      "Appreciating science fiction universes, movies, series, and games that inspire creativity.",

    //Contact
    "contact.title": "Contact",
    "contact.subtitle":
      "I am always open to new opportunities, projects, and professional connections. Get in touch and let's build something amazing together!",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.email_description": "Reply within 24h",
    "contact.phone_description": "WhatsApp available",
    "contact.social": "Social Networks",
    "contact.linkedin": "Connect professionally",
    "contact.github": "Check my projects",
    "contact.instagram": "Follow my journey",
    "contact.available": "Available for Projects",
    "contact.available_description": "I reply within 24 hours",
    "contact.form.title": "Send an Email!",
    "contact.form.name": "Name *",
    "contact.form.email": "Email *",
    "contact.form.subject": "Subject *",
    "contact.form.message": "Message *",
    "contact.form.name_placeholder": "Your full name",
    "contact.form.email_placeholder": "your@email.com",
    "contact.form.subject_placeholder": "What would you like to talk about?",
    "contact.form.message_placeholder":
      "Describe your project, idea or how I can help...",
    "contact.form.send": "Send Email",
    "contact.form.sending": "Sending...",
    "contact.form.redirect":
      "By sending, you will be redirected to your default email client.",
    // Validations
    "contact.form.error.name_required": "Name is required",
    "contact.form.error.name_short": "Name must be at least 2 characters",
    "contact.form.error.email_required": "Email is required",
    "contact.form.error.email_invalid": "Email must be valid",
    "contact.form.error.subject_required": "Subject is required",
    "contact.form.error.subject_short": "Subject must be at least 5 characters",
    "contact.form.error.message_required": "Message is required",
    "contact.form.error.message_short":
      "Message must be at least 10 characters",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["pt"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
