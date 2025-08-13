import { Button } from "@/components/ui/button"
import { ArrowDownIcon, TerminalIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ResumeSectionProps {
  inView: boolean
}

export function ResumeSection({ inView }: ResumeSectionProps) {

    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center text-center p-4 md:p-8 bg-gradient-to-br from-gray-950 to-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="w-full h-full bg-[url('/futuristic-grid.png')] bg-repeat animate-background-pan"
          style={{ backgroundSize: "200px 200px" }}
        ></div>
      </div>
      <div className="relative z-10 space-y-6 max-w-4xl">
        <h1
          className={cn(
            "text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300 drop-shadow-lg",
            inView ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          BERNARDO DE RESENDE
        </h1>
        <p
          className={cn(
            "text-xl md:text-2xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          Engenheiro de Software | Desenvolvedor Fullstack
          <br />
          Transformando ideias complexas em soluções tecnológicas escaláveis.
        </p>
<div
          className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center",
            inView ? "animate-fade-in-up delay-400" : "opacity-0",
          )}
        >
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/50"
            size="lg"
            onClick={() => scrollToSection('projects')}
          >
            <TerminalIcon className="w-5 h-5" /> Ver Projetos
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 transition-colors shadow-lg hover:shadow-primary/50 bg-transparent"
            size="lg"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDownIcon className="w-5 h-5" /> Saiba Mais
          </Button>
        </div>
      </div>
    </div>
  )
}
