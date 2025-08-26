import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GamepadIcon, BookOpenIcon, CpuIcon, SparklesIcon, NetworkIcon, CodeIcon, BrainIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"

interface InterestsSectionProps {
  inView: boolean
}

export function InterestsSection({ inView }: InterestsSectionProps) {
  const { t } = useLanguage()

  const interests = [
    {
      name: t("interests.webdev"),
      icon: <CodeIcon className="w-8 h-8 text-primary" />,
      description: t("interests.webdev_desc"),
    },
    {
      name: t("interests.ml"),
      icon: <BrainIcon className="w-8 h-8 text-primary" />,
      description: t("interests.ml_desc"),
    },
    {
      name: t("interests.techreading"),
      icon: <BookOpenIcon className="w-8 h-8 text-primary" />,
      description: t("interests.techreading_desc"),
    },
    {
      name: t("interests.ai"),
      icon: <CpuIcon className="w-8 h-8 text-primary" />,
      description: t("interests.ai_desc"),
    },
    {
      name: t("interests.gamedev"),
      icon: <GamepadIcon className="w-8 h-8 text-primary" />,
      description: t("interests.gamedev_desc"),
    },
    {
      name: t("interests.quantum"),
      icon: <NetworkIcon className="w-8 h-8 text-primary" />,
      description: t("interests.quantum_desc"),
    },
    {
      name: t("interests.popculture"),
      icon: <SparklesIcon className="w-8 h-8 text-primary" />,
      description: t("interests.popculture_desc"),
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
            "font-jetbrains text-4xl md:text-5xl font-bold text-primary tracking-tight",
            inView ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          {t("interests.title")}
        </h2>
        <p
          className={cn(
            "font-jetbrains text-lg md:text-xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          {t("interests.subtitle")}
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
              <CardHeader className="font-jetbrains flex flex-col items-center space-y-3 pb-2">
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