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
       {/* Header com Sprite */}
<div className="flex flex-col items-center gap-4">
  <h2
    className={cn(
      "font-jetbrains text-4xl md:text-5xl font-bold text-primary tracking-tight",
      inView ? "animate-fade-in-up" : "opacity-0",
    )}
  >
    {t('about.title')}
  </h2>
  
  {/* Sprite Container */}
  <div className="relative">
    <div
      className={cn(
        "relative p-4 rounded-xl bg-background/50 border border-primary/30 shadow-lg",
        inView ? "animate-fade-in-up delay-300" : "opacity-0"
      )}
    >
      {/* Efeito de brilho de fundo */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 animate-pulse"></div>
      
      {/* Sprite */}
      <div className="relative">
        <img 
          src="/sprite.png" 
          alt="Bernardo - Pixel Art Avatar"
          className={cn(
            "w-64 h-64 md:w-80 md:h-80 object-contain",
            "hover:scale-110 transition-transform duration-300 ease-out",
          )}
          style={{ 
            imageRendering: 'pixelated',
            imageRendering: '-moz-crisp-edges',
            imageRendering: '-webkit-crisp-edges'
          }}
        />
        
        {/* Partículas decorativas */}
        <div className="absolute top-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute -bottom-1 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
      </div>
    </div>
    
    {/* Shadow/Glow effect */}
    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-lg scale-105 -z-10 animate-pulse"></div>
  </div>
</div>

        {/* Content */}
        <div className="space-y-4">
          <p
            className={cn(
              "text-lg font-jetbrains md:text-xl text-muted-foreground leading-relaxed",
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
        </div>

        {/* Info Cards */}
        <div className="space-y-4">
          <div
            className={cn(
              "flex items-start gap-3 text-left p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-colors",
              inView ? "animate-fade-in-up delay-400" : "opacity-0 translate-x-[-50px]",
            )}
          >
            <GraduationCapIcon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <p className="text-muted-foreground md:text-lg">
              {t('about.education')}
            </p>
          </div>
          
          <div
            className={cn(
              "flex items-start gap-3 text-left p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-colors",
              inView ? "animate-fade-in-up delay-600" : "opacity-0 translate-x-[50px]",
            )}
          >
            <BriefcaseIcon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <p className="text-muted-foreground md:text-lg">
              {t('about.experience')}
            </p>
          </div>
          
          <div
            className={cn(
              "flex items-start gap-3 text-left p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-colors",
              inView ? "animate-fade-in-up delay-800" : "opacity-0 translate-x-[-50px]",
            )}
          >
            <CodeIcon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <p className="text-muted-foreground md:text-lg">
              {t('about.technical')}
            </p>
          </div>
          
          <div
            className={cn(
              "flex items-start gap-3 text-left p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-colors",
              inView ? "animate-fade-in-up delay-1000" : "opacity-0 translate-x-[50px]",
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