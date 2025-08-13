import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseIcon, CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExperiencesSectionProps {
  inView: boolean
}

export function ExperiencesSection({ inView }: ExperiencesSectionProps) {
  const experiences = [
    {
      title: "Técnico em Automação Industrial",
      company: "SENAI - Pedro Leopoldo",
      duration: "2021 - 2023",
      description:
        "Formação técnica completa em Automação Industrial, com experiência prática em programação de PLCs, desenvolvimento de sistemas SCADA, e automação de processos industriais. Trabalho com programação de motores, válvulas, sistemas pneumáticos e hidráulicos, além de controle e monitoramento de equipamentos industriais para otimização de processos de produção.",
    },
    {
      title: "Desenvolvedor Fullstack Jr",
      company: "M2C Digital",
      duration: "Jan 2025 - Presente",
      description:
        "Desenvolvimento fullstack em empresa especializada em envio de SMS, atuando no core do sistema e APIs. Utilizo Node.js com TypeScript e framework NestJS no backend, React.js no frontend, e ferramentas como RabbitMQ para administração de filas de envio. Responsável por implementar funcionalidades críticas para comunicação em massa e otimização de performance.",
    },
  ]

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center text-center p-4 md:p-8 bg-secondary overflow-hidden border-b border-primary/20">
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="w-full h-full bg-[url('/futuristic-circuit.png')] bg-cover bg-center"
          style={{ backgroundSize: "cover" }}
        ></div>
      </div>
      <div className="relative z-10 space-y-8 max-w-5xl bg-card/80 backdrop-blur-sm border border-primary/30 p-8 rounded-lg shadow-xl animate-border-pulse">
        <h2
          className={cn(
            "text-4xl md:text-5xl font-bold text-primary tracking-tight",
            inView ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          Experiência Profissional
        </h2>
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          Minha trajetória profissional e acadêmica, registrando cada missão concluída.
        </p>
        <div className="grid gap-8 py-12 sm:grid-cols-1 lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={cn(
                "flex flex-col h-full bg-background border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300",
                inView ? (index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0",
              )}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BriefcaseIcon className="w-7 h-7 text-primary" />
                  <CardTitle className="text-xl font-bold text-foreground">{exp.title}</CardTitle>
                </div>
                <div className="flex items-center text-muted-foreground text-sm gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>
                    {exp.company} | {exp.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}