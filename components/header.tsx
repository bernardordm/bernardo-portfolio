import { Button } from "@/components/ui/button"
import { GlobeIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"

/**
 * CORREÇÃO 12: Acessibilidade comprometida
 * PROBLEMA: Navegação sem suporte adequado para screen readers, sem aria-labels
 * SOLUÇÃO SUGERIDA: Adicionar aria-labels, aria-current, focus management
 * BENEFÍCIO: Inclusão de usuários com deficiências, conformidade WCAG 2.1
 * 
 * // Código corrigido sugerido:
 * // <Button
 * //   variant="ghost"
 * //   className={cn("text-muted-foreground hover:text-primary transition-colors")}
 * //   onClick={() => scrollToSection(section.id)}
 * //   aria-label={`Navegar para seção ${section.label}`}
 * //   aria-current={activeSection === section.id ? 'page' : undefined}
 * //   tabIndex={0}
 * //   role="menuitem"
 * // >
 * //   {section.label}
 * // </Button>
 */

/**
 * CORREÇÃO 22: Inconsistência nos padrões de componentes
 * PROBLEMA: Inconsistência entre usar interface vs type, naming conventions
 * SOLUÇÃO SUGERIDA: Definir style guide e usar ESLint rules
 * BENEFÍCIO: Código mais profissional, melhor experiência para desenvolvedores
 *
 * // Style guide sugerido:
 * // - Usar 'interface' para objetos extensíveis
 * // - Usar 'type' para unions, primitivos e computed types  
 * // - Props sempre com sufixo 'Props'
 * // - Componentes em PascalCase
 * // - Hooks com prefixo 'use'
 */

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage()

  const sections = [
    { id: "about", label: t('nav.about') },
    { id: "skills", label: "Skills" },
    { id: "experiences", label: t('nav.experiences') },
    { id: "projects", label: t('nav.projects') },
    { id: "academic", label: t('nav.academic') },
    { id: "interests", label: t('nav.interests') },
    { id: "contact", label: t('nav.contact') },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">BR</span>
            </div>
            <span className="font-bold text-foreground">Bernardo</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                className={cn(
                  "text-muted-foreground hover:text-primary transition-colors",
                  activeSection === section.id && "text-primary"
                )}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="ml-4 border-primary/30 hover:bg-primary/10"
            >
              <GlobeIcon className="w-4 h-4 mr-1" />
              {language.toUpperCase()}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}