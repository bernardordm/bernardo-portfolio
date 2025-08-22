import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseIcon, CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"

interface ExperiencesSectionProps {
  inView: boolean
}

export function ExperiencesSection({ inView }: ExperiencesSectionProps) {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t('experiences.senai.title'),
      company: t('experiences.senai.company'),
      duration: t('experiences.senai.duration'),
      description: t('experiences.senai.description'),
    },
    {
      title: t('experiences.m2c.title'),
      company: t('experiences.m2c.company'),
      duration: t('experiences.m2c.duration'),
      description: t('experiences.m2c.description'),
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
          {t('experiences.title')}
        </h2>
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          {t('experiences.subtitle')}
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