import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileTextIcon, LinkedinIcon, DownloadIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"

interface AcademicSectionProps {
  inView: boolean
}

export function AcademicSection({ inView }: AcademicSectionProps) {
  const { t } = useLanguage()

  const publications = [
    {
      title: t("academic.publication.title"),
      type: t("academic.publication.type"),
      status: t("academic.publication.status"),
      description: t("academic.publication.description"),
      keywords: [
        t("academic.publication.keywords.0"),
        t("academic.publication.keywords.1"),
        t("academic.publication.keywords.2"),
        t("academic.publication.keywords.3"),
        t("academic.publication.keywords.4"),
        t("academic.publication.keywords.5"),
      ],
      objectives: [
        t("academic.publication.objectives.0"),
        t("academic.publication.objectives.1"),
        t("academic.publication.objectives.2"),
        t("academic.publication.objectives.3"),
      ],
      pdf: "/projetoAcademico.pdf",
    }
  ]

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center text-center p-4 md:p-8 bg-background overflow-hidden border-b border-primary/20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="w-full h-full bg-[url('/futuristic-grid.png')] bg-repeat animate-background-pan"
          style={{ backgroundSize: "200px 200px" }}
        ></div>
      </div>
      <div className="relative z-10 space-y-8 max-w-7xl w-full">
        <div className="text-center space-y-4">
          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold text-primary tracking-tight",
              inView ? "animate-fade-in-up" : "opacity-0",
            )}
          >
            {t("academic.title")}
          </h2>
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground leading-relaxed",
              inView ? "animate-fade-in-up delay-200" : "opacity-0",
            )}
          >
            {t("academic.subtitle")}
          </p>
          <div
            className={cn(
              "flex justify-center",
              inView ? "animate-fade-in-up delay-300" : "opacity-0",
            )}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/10 bg-transparent"
              onClick={() => window.open("https://www.linkedin.com/in/bernardo-resende1167071b9/", "_blank")}
            >
              <LinkedinIcon className="w-5 h-5 mr-2" />
              {t("academic.linkedin")}
            </Button>
          </div>
        </div>

        <div className="grid gap-8 py-8">
          <div className="space-y-6">
            <h3
              className={cn(
                "text-2xl md:text-3xl font-bold text-foreground flex items-center justify-center gap-3",
                inView ? "animate-fade-in-up delay-600" : "opacity-0",
              )}
            >
              <FileTextIcon className="w-8 h-8 text-primary" />
              {t("academic.publications")}
            </h3>
            <div className="grid gap-6">
              {publications.map((pub, index) => (
                <Card
                  key={index}
                  className={cn(
                    "border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-primary/5",
                    inView ? "animate-fade-in-up" : "opacity-0",
                  )}
                  style={{ animationDelay: `${700 + index * 200}ms` }}
                >
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-md font-semibold">
                    {t("academic.research")}
                  </div>
                  <CardHeader className="pb-4">
                    <div className="space-y-3">
                      <CardTitle className="text-xl font-bold text-foreground text-left pr-16">{pub.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500">
                          {pub.type}
                        </Badge>
                        <Badge 
                          variant="outline"
                          className="border-yellow-500 text-yellow-600"
                        >
                          {pub.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed text-left">
                      {pub.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2 text-left">{t("academic.keywords")}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {pub.keywords.map((keyword, keywordIndex) => (
                            <Badge
                              key={keywordIndex}
                              variant="outline"
                              className="text-xs px-2 py-0.5 border-green-500 text-green-400 bg-green-500/10"
                            >
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2 text-left">{t("academic.objectives")}</p>
                        <ul className="text-sm text-muted-foreground space-y-1 text-left">
                          {pub.objectives.map((objective, objIndex) => (
                            <li key={objIndex} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="pt-2 flex justify-end">
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        <a href={pub.pdf} target="_blank" rel="noopener noreferrer" download>
                          <DownloadIcon className="w-4 h-4 mr-2" />
                          {t("Download") || "Baixar PDF"}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}