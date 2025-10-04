/**
 * 📋 CODE REVIEW: CONSTANTES E UTILITÁRIOS SUGERIDOS
 * 
 * Este arquivo contém exemplos de como implementar as correções sugeridas
 * através de constantes, tipos e utilitários reutilizáveis.
 */

// 🔧 CORREÇÃO 20: Magic numbers e strings centralizados
export const INTERSECTION_CONFIG = {
  threshold: 0.3, // 30% da seção visível para ativar
  rootMargin: '0px 0px -20% 0px', // Ativa antes da seção aparecer completamente
} as const

export const ANIMATION_DELAYS = {
  HEADER: 0,
  SUBTITLE: 200,
  CONTENT_START: 400,
  ITEM_INTERVAL: 200, // Intervalo entre itens em listas
} as const

export const FORM_VALIDATION = {
  MIN_NAME_LENGTH: 2,
  MIN_SUBJECT_LENGTH: 5,
  MIN_MESSAGE_LENGTH: 10,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const

// 🔧 CORREÇÃO 15: Tipagem forte com Zod (exemplo)
/*
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(FORM_VALIDATION.MIN_NAME_LENGTH, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(FORM_VALIDATION.MIN_SUBJECT_LENGTH, 'Assunto muito curto'),
  message: z.string().min(FORM_VALIDATION.MIN_MESSAGE_LENGTH, 'Mensagem muito curta'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
*/

// 🔧 CORREÇÃO 3: Hook customizado para gerenciar seções
/*
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("resume");
  const sectionsRef = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, INTERSECTION_CONFIG);
    
    sectionsRef.current.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  
  return { activeSection, sectionsRef };
};
*/

// 🔧 CORREÇÃO 8: Componentes reutilizáveis
/*
interface AnimatedCardProps {
  children: React.ReactNode;
  inView: boolean;
  delay?: number;
  className?: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  inView, 
  delay = 0, 
  className 
}) => (
  <Card 
    className={cn(
      "border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300",
      inView ? `animate-fade-in-up` : "opacity-0",
      className
    )}
    style={{ animationDelay: `${delay}ms` }}
  >
    {children}
  </Card>
);
*/

// 🔧 CORREÇÃO 7: Repository pattern para dados
/*
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  featured: boolean;
  image: string;
  video?: string;
}

export class ProjectRepository {
  private static projects: Project[] = [
    // dados dos projetos...
  ];

  static async getAll(): Promise<Project[]> {
    // Simula carregamento assíncrono
    return Promise.resolve(this.projects);
  }

  static async getFeatured(): Promise<Project[]> {
    return this.projects.filter(p => p.featured);
  }

  static async getById(id: string): Promise<Project | undefined> {
    return this.projects.find(p => p.id === id);
  }
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    ProjectRepository.getAll()
      .then(setProjects)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading, error };
};
*/

// 🔧 CORREÇÃO 19: Memoização para traduções
/*
export const useOptimizedTranslations = () => {
  const { language } = useLanguage();
  
  const translationsCache = useMemo(() => {
    // Lazy loading das traduções
    return import(`../locales/${language}.json`);
  }, [language]);
  
  const t = useCallback((key: string): string => {
    return translationsCache[key as keyof typeof translationsCache] || key;
  }, [translationsCache]);
  
  return { t };
};
*/

// 🔧 CORREÇÃO 21: Utilitários expandidos
export const formatters = {
  currency: (value: number, locale = 'pt-BR') => 
    new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }).format(value),
  
  date: (date: Date, locale = 'pt-BR') => 
    new Intl.DateTimeFormat(locale).format(date),
  
  phone: (phone: string) => 
    phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'),
};

export const validators = {
  email: (email: string) => FORM_VALIDATION.EMAIL_REGEX.test(email),
  phone: (phone: string) => /^\+?[\d\s\-\(\)]+$/.test(phone),
  minLength: (text: string, min: number) => text.length >= min,
};

export const animations = {
  getDelay: (index: number) => ANIMATION_DELAYS.CONTENT_START + (index * ANIMATION_DELAYS.ITEM_INTERVAL),
  fadeInUp: (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: delay / 1000, duration: 0.5 }
  }),
};

// 🔧 CORREÇÃO 16: Observabilidade e logging
export const logger = {
  info: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[INFO] ${message}`, data);
    }
  },
  error: (message: string, error?: Error) => {
    console.error(`[ERROR] ${message}`, error);
    // Em produção, enviar para Sentry
    // Sentry.captureException(error);
  },
  performance: (label: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`[PERF] ${label}: ${end - start}ms`);
  },
};

// 🔧 CORREÇÃO 11: Estados de loading consistentes
/*
export const LoadingStates = {
  Skeleton: () => (
    React.createElement('div', { 
      className: 'animate-pulse bg-gray-200 h-4 rounded' 
    })
  ),
  Spinner: () => (
    React.createElement('div', { 
      className: 'animate-spin rounded-full h-6 w-6 border-b-2 border-primary' 
    })
  ),
  Button: ({ children }: { children: React.ReactNode }) => (
    React.createElement('div', { className: 'flex items-center gap-2' }, [
      React.createElement('div', { 
        className: 'w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin' 
      }),
      children
    ])
  ),
};
*/

/**
 * 📊 RESUMO DAS MELHORIAS IMPLEMENTADAS:
 * 
 * ✅ Constantes centralizadas (CORREÇÃO 20)
 * ✅ Tipagem forte sugerida (CORREÇÃO 15)  
 * ✅ Componentes reutilizáveis (CORREÇÃO 8)
 * ✅ Repository pattern (CORREÇÃO 7)
 * ✅ Hooks otimizados (CORREÇÃO 3, 19)
 * ✅ Utilitários expandidos (CORREÇÃO 21)
 * ✅ Sistema de logging (CORREÇÃO 16)
 * ✅ Estados de loading (CORREÇÃO 11)
 * 
 * 🎯 PRÓXIMOS PASSOS:
 * 1. Implementar testes unitários (CORREÇÃO 14)
 * 2. Adicionar headers de segurança (CORREÇÃO 9)
 * 3. Configurar variáveis de ambiente (CORREÇÃO 9)
 * 4. Implementar metadata completo (CORREÇÃO 2)
 * 5. Otimizar bundle size (CORREÇÃO 17)
 */