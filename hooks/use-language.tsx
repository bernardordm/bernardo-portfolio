import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    'nav.about': 'Sobre Mim',
    'nav.projects': 'Projetos',
    'nav.experiences': 'Experiências',
    'nav.contact': 'Contato',
    'nav.academic': 'Acadêmico',
    'nav.interests': 'Interesses',
    'nav.skills': 'Habilidades',
    
    // Resume
    'resume.title': 'BERNARDO DE RESENDE',
    'resume.subtitle': 'Engenheiro de Software | Desenvolvedor Fullstack',
    'resume.description': 'Transformando ideias complexas em soluções tecnológicas escaláveis.',
    'resume.downloadCV': 'Download CV',
    'resume.contact': 'Entre em Contato',
    
    // About
    'about.title': 'SOBRE MIM',
    'about.subtitle': 'Conheça minha trajetória, valores e o que me motiva no desenvolvimento de software.',
    'about.intro': 'Olá! Sou Bernardo, um desenvolvedor fullstack e entusiasta de tecnologia, residente da região metropolitana de Belo Horizonte. Desde os 14 anos, quando comecei a explorar o mundo da programação, me apaixonei pelo potencial transformador da tecnologia. Aos 19, continuo dedicado a essa jornada, sempre buscando soluções criativas e inovadoras para os desafios que encontro.',
    'about.education': 'Concluí um curso técnico profissionalizante de Automação Industrial no SENAI (2021-2022) e, atualmente, estou no 4º semestre de Engenharia de Software na PUC Minas, consolidando uma base sólida em fundamentos da computação e metodologias de desenvolvimento.',
    'about.experience': 'Há 6 meses, ingressei no mercado de trabalho como desenvolvedor fullstack, onde tenho aplicado conhecimentos práticos em projetos reais. Essa experiência profissional tem sido fundamental para aprimorar minhas habilidades técnicas e compreender as demandas do desenvolvimento de software em ambiente corporativo.',
    'about.technical': 'Minha experiência profissional tem me permitido trabalhar com padrões de projeto como MVC, Repository Pattern e Dependency Injection, além de práticas de Clean Code e arquiteturas escaláveis. Tenho vivência em metodologias ágeis, versionamento com Git, e integração de APIs REST, sempre priorizando código com facilidade na manutenção e performático.',
    'about.vision': 'Minha formação técnica, aliada à experiência acadêmica e profissional, me permite abordar problemas complexos com uma visão sistêmica e soluções tecnológicas atualizadas. Sou movido pela vontade constante de aprender, evoluir e contribuir para projetos que façam a diferença.',

    // Skills
    'skills.title': 'HABILIDADES E TECNOLOGIAS',
    'skills.subtitle': 'Minhas principais habilidades técnicas e as tecnologias que domino.',
    'skills.languages': 'Linguagens',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Banco de Dados',
    'skills.tools': 'Ferramentas',
    'skills.learning': 'Estudando',
    'skills.languageSkills': 'Idiomas',
    'skills.portuguese': 'Português (Nativo)',
    'skills.english': 'Inglês - Avançado',

    // Projects
    'projects.title': 'PROJETOS DESENVOLVIDOS',
    'projects.subtitle': 'Projetos que demonstram minha evolução técnica e aplicação prática de conceitos fundamentais da engenharia de software.',
    'projects.highlight': 'DESTAQUE',
    'projects.github': 'GitHub',
    'projects.live': 'Live',
    'projects.private': 'Privado',
    'projects.comingSoon': 'Em Breve',

    // Individual Projects
    'projects.javaParking.description': 'Sistema de controle de estacionamento desenvolvido em Java com foco em Programação Orientada a Objetos. Implementa conceitos fundamentais como polimorfismo, encapsulamento e divisão de responsabilidades, seguindo o padrão MVC com DTOs e interface gráfica em JavaFX.',
    
    'projects.gnosi.title': 'Plataforma de Cursos',
    'projects.gnosi.description': 'Plataforma gratuita de cursos online com arquitetura fullstack robusta. Backend desenvolvido em Java Spring Boot e frontend em React.js, aplicando rigorosamente os princípios de POO, padrão MVC e boas práticas de desenvolvimento de software.',
    
    'projects.fabianaMoveis.title': 'Sistema de Gestão',
    'projects.fabianaMoveis.description': 'Sistema completo de gestão desenvolvido para cliente real, incluindo rastreamento de entregas via Google Maps API, geração de relatórios, cadastro de funcionários e controle de entregas. Solução fullstack com backend em Node.js/NestJS e frontend em Next.js.',


        // Experiences
    'experiences.title': 'EXPERIÊNCIA PROFISSIONAL',
    'experiences.subtitle': 'Minha trajetória profissional e acadêmica, registrando cada missão concluída.',
    
    // SENAI Experience
    'experiences.senai.title': 'Técnico em Automação Industrial',
    'experiences.senai.company': 'SENAI - Pedro Leopoldo',
    'experiences.senai.duration': '2021 - 2023',
    'experiences.senai.description': 'Formação técnica completa em Automação Industrial, com experiência prática em programação de PLCs, desenvolvimento de sistemas SCADA, e automação de processos industriais. Trabalho com programação de motores, válvulas, sistemas pneumáticos e hidráulicos, além de controle e monitoramento de equipamentos industriais para otimização de processos de produção.',
    
    // M2C Experience
    'experiences.m2c.title': 'Desenvolvedor Fullstack Jr',
    'experiences.m2c.company': 'M2C Digital',
    'experiences.m2c.duration': 'Jan 2025 - Presente',
    'experiences.m2c.description': 'Desenvolvimento fullstack em empresa especializada em envio de SMS, atuando no core do sistema e APIs. Utilizo Node.js com TypeScript e framework NestJS no backend, React.js no frontend, e ferramentas como RabbitMQ para administração de filas de envio. Responsável por implementar funcionalidades críticas para comunicação em massa e otimização de performance.',

    // Academic
    'academic.title': 'ACADÊMICO',
    'academic.subtitle': 'Minha jornada acadêmica, pesquisas e contribuições para o desenvolvimento científico e tecnológico.',
    'academic.research': 'PESQUISA',
    'academic.linkedin': 'Conecte-se no LinkedIn',
    'academic.publications': 'Pesquisas e Publicações',
    'academic.certifications': 'Certificações e Cursos',
    'academic.keywords': 'Palavras-chave:',
    'academic.objectives': 'Objetivos da pesquisa:',

    // Interests
    'interests.title': 'INTERESSES PROFISSIONAIS',
    'interests.subtitle': 'Além do código, o que alimenta minha curiosidade e me impulsiona a explorar novos domínios.',

    // Contact
    'contact.title': 'VAMOS CONVERSAR?',
    'contact.subtitle': 'Estou sempre aberto a novas oportunidades, novos projetos e conexões profissionais. Entre em contato e vamos construir algo incrível juntos!',
    'contact.available': 'Disponível para Projetos',
    'contact.response': 'Respondo em até 24 horas',
    'contact.socials': 'Redes Sociais',
    'contact.sendEmail': 'Envie um E-mail!',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.subject': 'Assunto',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar E-mail',
    'contact.sending': 'Enviando...',
    'contact.disclaimer': 'Ao enviar, você será redirecionado para seu cliente de e-mail padrão.',
    'contact.nameRequired': 'Nome é obrigatório',
    'contact.nameMin': 'Nome deve ter pelo menos 2 caracteres',
    'contact.emailRequired': 'E-mail é obrigatório',
    'contact.emailInvalid': 'E-mail deve ter um formato válido',
    'contact.subjectRequired': 'Assunto é obrigatório',
    'contact.subjectMin': 'Assunto deve ter pelo menos 5 caracteres',
    'contact.messageRequired': 'Mensagem é obrigatória',
    'contact.messageMin': 'Mensagem deve ter pelo menos 10 caracteres',
  },
  en: {
    // Header
    'nav.about': 'About Me',
    'nav.projects': 'Projects',
    'nav.experiences': 'Experiences',
    'nav.contact': 'Contact',
    'nav.academic': 'Academic',
    'nav.interests': 'Interests',
    'nav.skills': 'Skills',

    // Resume
    'resume.title': 'BERNARDO DE RESENDE',
    'resume.subtitle': 'Software Engineer | Fullstack Developer',
    'resume.description': 'Transforming complex ideas into scalable technological solutions.',
    'resume.downloadCV': 'Download Resume',
    'resume.contact': 'Get in Touch',

    // About
    'about.title': 'ABOUT ME',
    'about.subtitle': 'Learn about my journey, values, and what motivates me in software development.',
    'about.intro': 'Hello! I\'m Bernardo, a fullstack developer and technology enthusiast from the metropolitan region of Belo Horizonte. Since I was 14, when I started exploring the world of programming, I fell in love with the transformative potential of technology. At 19, I continue dedicated to this journey, always seeking creative and innovative solutions to the challenges I encounter.',
    'about.education': 'I completed a technical course in Industrial Automation at SENAI (2021-2022) and am currently in the 4th semester of Software Engineering at PUC Minas, building a solid foundation in computer science fundamentals and development methodologies.',
    'about.experience': '6 months ago, I entered the job market as a fullstack developer, where I have been applying practical knowledge to real projects. This professional experience has been fundamental to improving my technical skills and understanding the demands of software development in a corporate environment.',
    'about.technical': 'My professional experience has allowed me to work with design patterns like MVC, Repository Pattern, and Dependency Injection, as well as Clean Code practices and scalable architectures. I have experience with agile methodologies, Git versioning, and REST API integration, always prioritizing maintainable and performant code.',
    'about.vision': 'My technical background, combined with academic and professional experience, allows me to approach complex problems with a systemic vision and updated technological solutions. I am driven by the constant desire to learn, evolve, and contribute to projects that make a difference.',

    // Skills
    'skills.title': 'SKILLS AND TECHNOLOGIES',
    'skills.subtitle': 'My main technical skills and the technologies I know.',
    'skills.languages': 'Languages',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Databases',
    'skills.tools': 'Tools',
    'skills.learning': 'Studying  ',
    'skills.languageSkills': 'Languages',
    'skills.portuguese': 'Portuguese (Native)',
    'skills.english': 'English - Advanced',

    // Projects
    'projects.title': 'DEVELOPED PROJECTS',
    'projects.subtitle': 'Projects that demonstrate my technical evolution and practical application of fundamental software engineering concepts.',
    'projects.highlight': 'HIGHLIGHT',
    'projects.github': 'GitHub',
    'projects.live': 'Live',
    'projects.private': 'Private',
    'projects.comingSoon': 'Coming Soon',

    // Individual Projects
    'projects.javaParking.description': 'Parking control system developed in Java focusing on Object-Oriented Programming. Implements fundamental concepts like polymorphism, encapsulation and separation of responsibilities, following the MVC pattern with DTOs and JavaFX graphical interface.',
    
    'projects.gnosi.title': 'Course Platform',
    'projects.gnosi.description': 'Free online course platform with robust fullstack architecture. Backend developed in Java Spring Boot and frontend in React.js, rigorously applying OOP principles, MVC pattern and software development best practices.',
    
    'projects.fabianaMoveis.title': 'Management System',
    'projects.fabianaMoveis.description': 'Complete management system developed for real client, including delivery tracking via Google Maps API, report generation, employee registration and delivery control. Fullstack solution with Node.js/NestJS backend and Next.js frontend.',


        // Experiences
    'experiences.title': 'PROFESSIONAL EXPERIENCE',
    'experiences.subtitle': 'My professional and academic journey, recording each completed mission.',
    
    // SENAI Experience
    'experiences.senai.title': 'Industrial Automation Technician',
    'experiences.senai.company': 'SENAI - Pedro Leopoldo',
    'experiences.senai.duration': '2021 - 2023',
    'experiences.senai.description': 'Complete technical training in Industrial Automation, with hands-on experience in PLC programming, SCADA systems development, and industrial process automation. Work with motor programming, valves, pneumatic and hydraulic systems, plus control and monitoring of industrial equipment for production process optimization.',
    
    // M2C Experience
    'experiences.m2c.title': 'Junior Fullstack Developer',
    'experiences.m2c.company': 'M2C Digital',
    'experiences.m2c.duration': 'Jan 2025 - Present',
    'experiences.m2c.description': 'Fullstack development at a company specialized in SMS delivery, working on the system core and APIs. I use Node.js with TypeScript and NestJS framework on the backend, React.js on the frontend, and tools like RabbitMQ for managing delivery queues. Responsible for implementing critical features for mass communication and performance optimization.',

    // Academic
    'academic.title': 'ACADEMIC',
    'academic.subtitle': 'My academic journey, research and contributions to scientific and technological development.',
    'academic.research': 'RESEARCH',
    'academic.linkedin': 'Connect on LinkedIn',
    'academic.publications': 'Research and Publications',
    'academic.certifications': 'Certifications and Courses',
    'academic.keywords': 'Keywords:',
    'academic.objectives': 'Research objectives:',

    // Interests
    'interests.title': 'PROFESSIONAL INTERESTS',
    'interests.subtitle': 'Beyond code, what feeds my curiosity and drives me to explore new domains.',

    // Contact
    'contact.title': 'LET\'S TALK?',
    'contact.subtitle': 'I\'m always open to new opportunities, new projects and professional connections. Get in touch and let\'s build something amazing together!',
    'contact.available': 'Available for Projects',
    'contact.response': 'Response within 24 hours',
    'contact.socials': 'Social Networks',
    'contact.sendEmail': 'Send an Email!',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Email',
    'contact.sending': 'Sending...',
    'contact.disclaimer': 'By sending, you will be redirected to your default email client.',
    'contact.nameRequired': 'Name is required',
    'contact.nameMin': 'Name must have at least 2 characters',
    'contact.emailRequired': 'Email is required',
    'contact.emailInvalid': 'Email must have a valid format',
    'contact.subjectRequired': 'Subject is required',
    'contact.subjectMin': 'Subject must have at least 5 characters',
    'contact.messageRequired': 'Message is required',
    'contact.messageMin': 'Message must have at least 10 characters',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}