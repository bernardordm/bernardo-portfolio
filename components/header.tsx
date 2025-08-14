import { cn } from "@/lib/utils"
import { CodeIcon, UserIcon, LightbulbIcon, BriefcaseIcon, FolderGit2Icon, SparklesIcon, GraduationCapIcon } from "lucide-react"

interface HeaderProps {
  currentSection: string
}

export function Header({ currentSection }: HeaderProps) {
  const sections = [
    { id: "home", name: "Home", icon: CodeIcon },
    { id: "about", name: "Sobre", icon: UserIcon },
    { id: "skills", name: "Habilidades", icon: LightbulbIcon },
    { id: "experience", name: "Experiência", icon: BriefcaseIcon },
    { id: "projects", name: "Projetos", icon: FolderGit2Icon },
    { id: "academic", name: "Acadêmico", icon: GraduationCapIcon },
    { id: "interests", name: "Interesses", icon: SparklesIcon },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-primary/20 p-4 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="text-primary text-2xl font-bold tracking-wider">BERNARDO.DEV</div>
      </div>
      <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 flex items-center gap-2",
              currentSection === section.id
                ? "bg-primary text-primary-foreground shadow-md animate-pulse-glow"
                : "bg-card text-muted-foreground hover:bg-primary/20 hover:text-primary",
            )}
          >
            <section.icon className="w-5 h-5" />
            {section.name}
          </a>
        ))}
      </nav>
    </header>
  )
}
