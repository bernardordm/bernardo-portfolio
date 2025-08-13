import { LightbulbIcon, GraduationCapIcon, BriefcaseIcon, CodeIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AboutMeSectionProps {
  inView: boolean
}

export function AboutMeSection({ inView }: AboutMeSectionProps) {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center text-center p-4 md:p-8 bg-secondary overflow-hidden border-b border-primary/20">
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="w-full h-full bg-[url('/futuristic-circuit.png')] bg-cover bg-center"
          style={{ backgroundSize: "cover" }}
        ></div>
      </div>
      <div className="relative z-10 space-y-8 max-w-4xl bg-card/80 backdrop-blur-sm border border-primary/30 p-8 rounded-lg shadow-xl animate-border-pulse">
        <h2
          className={cn(
            "text-4xl md:text-5xl font-bold text-primary tracking-tight",
            inView ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          console.log(" Sobre Mim ");
        </h2>
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          Olá! Sou Bernardo, um desenvolvedor fullstack e entusiasta de tecnologia, residente da região metropolitana de
          Belo Horizonte. Desde os 14 anos, quando comecei a explorar o mundo da programação, me apaixonei pelo
          potencial transformador da tecnologia. Aos 18, continuo dedicado a essa jornada, sempre buscando soluções
          criativas e inovadoras para os desafios que encontro.
        </p>
        <div className="space-y-4">
          <div
            className={cn(
              "flex items-start gap-3 text-left",
              inView ? "animate-slide-in-left delay-400" : "opacity-0 translate-x-[-50px]",
            )}
          >
            <GraduationCapIcon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <p className="text-muted-foreground md:text-lg">
              Concluí um curso técnico profissionalizante de Automação Industrial no SENAI (2021-2022) e, atualmente,
              estou no 4º semestre de Engenharia de Software na PUC Minas, consolidando uma base sólida em fundamentos
              da computação e metodologias de desenvolvimento.
            </p>
          </div>
          <div
            className={cn(
              "flex items-start gap-3 text-left",
              inView ? "animate-slide-in-left delay-600" : "opacity-0 translate-x-[50px]",
            )}
          >
            <BriefcaseIcon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <p className="text-muted-foreground md:text-lg">
              Há 6 meses, ingressei no mercado de trabalho como desenvolvedor fullstack, onde tenho aplicado 
              conhecimentos práticos em projetos reais. Essa experiência profissional tem sido fundamental para 
              aprimorar minhas habilidades técnicas e compreender as demandas do desenvolvimento de software em 
              ambiente corporativo.
            </p>
          </div>
          <div
            className={cn(
              "flex items-start gap-3 text-left",
              inView ? "animate-slide-in-left delay-800" : "opacity-0 translate-x-[-50px]",
            )}
          >
            <CodeIcon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <p className="text-muted-foreground md:text-lg">
              Minha experiência profissional tem me permitido trabalhar com padrões de projeto como MVC, Repository 
              Pattern e Dependency Injection, além de práticas de Clean Code e arquiteturas escaláveis. Tenho vivência 
              em metodologias ágeis, versionamento com Git, e integração de APIs REST, sempre priorizando código 
              com facilidade na manutenção e performático.
            </p>
          </div>
          <div
            className={cn(
              "flex items-start gap-3 text-left",
              inView ? "animate-slide-in-left delay-800" : "opacity-0 translate-x-[50px]",
            )}
          >
            <LightbulbIcon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <p className="text-muted-foreground md:text-lg">
              Minha formação técnica, aliada à experiência acadêmica e profissional, me permite abordar problemas 
              complexos com uma visão sistêmica e soluções tecnológicas atualizadas. Sou movido pela vontade constante 
              de aprender, evoluir e contribuir para projetos que façam a diferença.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}