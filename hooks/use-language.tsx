import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Header
    'nav.about': 'Sobre Mim',
    'nav.projects': 'Projetos',
    'nav.experiences': 'Experiências',
    'nav.contact': 'Contato',
    
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
  },
  en: {
    // Header
    'nav.about': 'About Me',
    'nav.projects': 'Projects',
    'nav.experiences': 'Experiences',
    'nav.contact': 'Contact',
    
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