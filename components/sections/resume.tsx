import { Button } from "@/components/ui/button"
import { DownloadIcon, MailIcon, LinkedinIcon, GithubIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ResumeSectionProps {
  inView: boolean
}

export function ResumeSection({ inView }: ResumeSectionProps) {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center text-center p-4 md:p-8 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="w-full h-full bg-[url('/futuristic-grid.png')] bg-repeat animate-background-pan"
          style={{ backgroundSize: "200px 200px" }}
        ></div>
      </div>
      <div className="relative z-10 space-y-8 max-w-4xl">
        {/* Foto de Perfil */}
        <div
          className={cn(
            "flex justify-center mb-8",
            inView ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20">
              <Image
                src="/photo.jpeg"
                alt="Foto de Bernardo de Resende"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            {/* Efeito de brilho */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate-pulse"></div>
          </div>
        </div>

        <h1
          className={cn(
            "text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300 drop-shadow-lg",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          BERNARDO DE RESENDE
        </h1>
        <p
          className={cn(
            "text-xl md:text-2xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-300" : "opacity-0",
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
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/50 transition-all duration-300"
            onClick={() => {
              // Adicione aqui o link para download do currículo
              console.log("Download CV")
            }}
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download CV
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent shadow-lg hover:shadow-primary/50 transition-all duration-300"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <MailIcon className="w-5 h-5 mr-2" />
            Entre em Contato
          </Button>
        </div>
        <div
          className={cn(
            "flex gap-6 justify-center pt-4",
            inView ? "animate-fade-in-up delay-500" : "opacity-0",
          )}
        >
          <Button
            variant="ghost"
            size="lg"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 p-3"
            onClick={() => window.open("https://www.linkedin.com/in/bernardo-resende1167071b9/", "_blank")}
          >
            <LinkedinIcon className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 p-3"
            onClick={() => window.open("https://github.com/bernardordm", "_blank")}
          >
            <GithubIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}