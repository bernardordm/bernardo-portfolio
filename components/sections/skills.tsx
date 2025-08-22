import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CodeIcon, DatabaseIcon, CloudIcon, SettingsIcon, PaletteIcon, GitBranchIcon, GlobeIcon, LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"

interface SkillsSectionProps {
  inView: boolean
}

export function SkillsSection({ inView }: SkillsSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center text-center p-4 md:p-8 bg-background overflow-hidden border-b border-primary/20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="w-full h-full bg-[url('/futuristic-grid.png')] bg-repeat animate-background-pan"
          style={{ backgroundSize: "200px 200px" }}
        ></div>
      </div>
      <div className="relative z-10 space-y-8 max-w-7xl">
        <h2
          className={cn(
            "text-4xl md:text-5xl font-bold text-primary tracking-tight",
            inView ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          {t('skills.title')}
        </h2>
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          {t('skills.subtitle')}
        </p>
        
        <div className="grid gap-6 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className={cn(
              "bg-card border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 h-fit",
              inView ? "animate-fade-in-up delay-300" : "opacity-0",
            )}
          >
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <CodeIcon className="w-8 h-8 text-primary" />
              <CardTitle className="text-xl font-bold text-foreground">{t('skills.languages')}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                JavaScript
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                TypeScript
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                Python
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                Java
              </Badge>
            </CardContent>
          </Card>

          <Card
            className={cn(
              "bg-card border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 h-fit",
              inView ? "animate-fade-in-up delay-400" : "opacity-0",
            )}
          >
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <PaletteIcon className="w-8 h-8 text-primary" />
              <CardTitle className="text-xl font-bold text-foreground">{t('skills.frontend')}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                React.js
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                Next.js
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                Tailwind CSS
              </Badge>
            </CardContent>
          </Card>

          <Card
            className={cn(
              "bg-card border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 h-fit",
              inView ? "animate-fade-in-up delay-500" : "opacity-0",
            )}
          >
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <SettingsIcon className="w-8 h-8 text-primary" />
              <CardTitle className="text-xl font-bold text-foreground">{t('skills.backend')}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                Node.js
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                NestJS
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                Spring Boot
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                Flask
              </Badge>
            </CardContent>
          </Card>

          <Card
            className={cn(
              "bg-card border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 h-fit",
              inView ? "animate-fade-in-up delay-600" : "opacity-0",
            )}
          >
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <DatabaseIcon className="w-8 h-8 text-primary" />
              <CardTitle className="text-xl font-bold text-foreground">{t('skills.databases')}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                PostgreSQL
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                MySQL
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                MongoDB
              </Badge>
            </CardContent>
          </Card>

          <Card
            className={cn(
              "bg-card border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 h-fit",
              inView ? "animate-fade-in-up delay-700" : "opacity-0",
            )}
          >
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <GitBranchIcon className="w-8 h-8 text-primary" />
              <CardTitle className="text-xl font-bold text-foreground">{t('skills.tools')}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                Git
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                GitHub
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1 border border-primary">
                Docker
              </Badge>
            </CardContent>
          </Card>

          <Card
            className={cn(
              "bg-card border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 h-fit",
              inView ? "animate-fade-in-up delay-800" : "opacity-0",
            )}
          >
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <div className="relative">
                <CloudIcon className="w-8 h-8 text-primary" />
                <LoaderIcon className="w-4 h-4 text-green-400 animate-spin absolute -top-1 -right-1" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                {t('skills.learning')}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 text-sm px-3 py-1 border border-blue-500 animate-pulse">
                Cloud Computing
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 text-sm px-3 py-1 border border-blue-500 animate-pulse" style={{ animationDelay: "0.5s" }}>
                AWS
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 text-sm px-3 py-1 border border-blue-500 animate-pulse" style={{ animationDelay: "1s" }}>
                Azure
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 text-sm px-3 py-1 border border-blue-500 animate-pulse" style={{ animationDelay: "1.5s" }}>
                DevOps
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-6">
          <Card
            className={cn(
              "bg-card border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 h-fit w-full max-w-md",
              inView ? "animate-fade-in-up delay-900" : "opacity-0",
            )}
          >
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <GlobeIcon className="w-8 h-8 text-primary" />
              <CardTitle className="text-xl font-bold text-foreground">{t('skills.languageSkills')}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 justify-center">
              <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 text-sm px-3 py-1 border border-green-500">
                {t('skills.portuguese')}
              </Badge>
              <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 text-sm px-3 py-1 border border-green-500">
                {t('skills.english')}
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}