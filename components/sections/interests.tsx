import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GamepadIcon, BookOpenIcon, CpuIcon, SparklesIcon, NetworkIcon, CodeIcon, BrainIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface InterestsSectionProps {
  inView: boolean
}

export function InterestsSection({ inView }: InterestsSectionProps) {
  const interests = [
    {
      name: "Desenvolvimento Web",
      icon: <CodeIcon className="w-8 h-8 text-primary" />,
      description:
        "Paixão por criar aplicações web modernas e responsivas, explorando novas tecnologias e frameworks.",
    },
    {
      name: "Machine Learning",
      icon: <BrainIcon className="w-8 h-8 text-primary" />,
      description: "Fascínio pela inteligência artificial e algoritmos de aprendizado de máquina para resolver problemas complexos.",
    },
    {
      name: "Leitura Técnica",
      icon: <BookOpenIcon className="w-8 h-8 text-primary" />,
      description:
        "Manter-me atualizado com as últimas tendências e aprofundar conhecimentos em diversas áreas da tecnologia.",
    },
    {
      name: "Inteligência Artificial",
      icon: <CpuIcon className="w-8 h-8 text-primary" />,
      description:
        "Explorar o potencial da IA, redes neurais e suas aplicações práticas em diferentes domínios.",
    },
    {
      name: "Desenvolvimento de Jogos",
      icon: <GamepadIcon className="w-8 h-8 text-primary" />,
      description: "Interesse em criar experiências interativas e imersivas, combinando programação e criatividade.",
    },
    {
      name: "Computação Quântica",
      icon: <NetworkIcon className="w-8 h-8 text-primary" />,
      description: "Curiosidade sobre os avanços e o futuro da computação quântica e suas aplicações revolucionárias.",
    },
    {
      name: "Cultura Pop & Ficção Científica",
      icon: <SparklesIcon className="w-8 h-8 text-primary" />,
      description: "Apreciar universos de ficção científica, filmes, séries e jogos que inspiram a criatividade.",
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
      <div className="relative z-10 space-y-8 max-w-6xl bg-card/80 backdrop-blur-sm border border-primary/30 p-8 rounded-lg shadow-xl animate-border-pulse">
        <h2
          className={cn(
            "text-4xl md:text-5xl font-bold text-primary tracking-tight",
            inView ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          INTERESSES PROFISSIONAIS
        </h2>
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          Além do código, o que alimenta minha curiosidade e me impulsiona a explorar novos domínios.
        </p>

        {/* Grid de Interesses */}
        <div className="mx-auto grid max-w-6xl items-start gap-6 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {interests.map((interest, index) => (
            <Card
              key={index}
              className={cn(
                "flex flex-col h-full bg-background border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 text-center p-4",
                inView ? "animate-fade-in-up" : "opacity-0",
              )}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <CardHeader className="flex flex-col items-center space-y-3 pb-2">
                {interest.icon}
                <CardTitle className="text-lg font-bold text-foreground">{interest.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}