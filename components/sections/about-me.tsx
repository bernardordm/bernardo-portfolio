import { Card, CardContent } from "@/components/ui/card"
import { GraduationCapIcon, BriefcaseIcon, CodeIcon, LightbulbIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"

interface AboutMeSectionProps {
  inView: boolean
}

export function AboutMeSection({ inView }: AboutMeSectionProps) {
  const { t } = useLanguage()

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
          {t('about.title')}
        </h2>
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          {t('about.subtitle')}
        </p>
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          {t('about.intro')}
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
              {t('about.education')}
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
              {t('about.experience')}
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
              {t('about.technical')}
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
              {t('about.vision')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}