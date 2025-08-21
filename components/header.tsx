import { cn } from "@/lib/utils"
import { CodeIcon, UserIcon, LightbulbIcon, BriefcaseIcon, FolderGit2Icon, SparklesIcon, MailIcon, GraduationCapIcon, MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  currentSection: string
}

export function Header({ currentSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { id: "home", name: "Home", icon: CodeIcon },
    { id: "about", name: "Sobre", icon: UserIcon },
    { id: "skills", name: "Habilidades", icon: LightbulbIcon },
    { id: "experience", name: "Experiência", icon: BriefcaseIcon },
    { id: "projects", name: "Projetos", icon: FolderGit2Icon },
    { id: "academic", name: "Acadêmico", icon: GraduationCapIcon },
    { id: "interests", name: "Interesses", icon: SparklesIcon },
    { id: "contact", name: "Contato", icon: MailIcon },
  ]

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-primary/20 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="text-primary text-xl sm:text-2xl font-bold tracking-wider">
            BERNARDO.DEV
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-wrap justify-center gap-2 xl:gap-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "px-3 xl:px-4 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-300 flex items-center gap-2",
                currentSection === section.id
                  ? "bg-primary text-primary-foreground shadow-md animate-pulse-glow"
                  : "bg-card text-muted-foreground hover:bg-primary/20 hover:text-primary",
              )}
            >
              <section.icon className="w-4 h-4 xl:w-5 xl:h-5" />
              <span className="hidden xl:inline">{section.name}</span>
              <span className="xl:hidden">{section.name.slice(0, 4)}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-primary hover:bg-primary/20 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 border-t border-primary/20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={handleNavClick}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex flex-col items-center gap-1 text-center",
                  currentSection === section.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:bg-primary/20 hover:text-primary",
                )}
              >
                <section.icon className="w-4 h-4" />
                <span className="text-xs">{section.name}</span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}