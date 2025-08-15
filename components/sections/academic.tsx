import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCapIcon, FileTextIcon, ExternalLinkIcon, LinkedinIcon, BookOpenIcon, AwardIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AcademicSectionProps {
  inView: boolean
}

export function AcademicSection({ inView }: AcademicSectionProps) {

  const publications = [
    {
      title: "Otimização e Resolução de Integrais: Análise Comparativa de LLMs para Problemas Matemáticos Complexos",
      type: "Artigo Científico",
      status: "Em desenvolvimento",
      description: "Pesquisa sobre a aplicação de diferentes Large Language Models (LLMs) na resolução e otimização de problemas no cálculo de integrais, comparando precisão, metodologia e qualidade das respostas entre modelos como GPT-4, Claude, Gemini e outros.",
      keywords: ["Machine Learning", "LLMs", "Matemática Aplicada", "Otimização",  "Integrais", "IA"],
      objectives: [
        "Avaliar a precisão de diferentes LLMs no cálculo de integrais",
        "Comparar metodologias de resolução entre modelos",
        "Identificar limitações e pontos fortes de cada LLM",
        "Propor formas de avaliação para resolução de problemas matemáticos"
      ]
    }
  ]

  const certifications = [
    {
      name: "Técnico em Automação Industrial",
      issuer: "SENAI",
      year: "2023",
      type: "Certificação Técnica",
      credentialId: null
    },
    {
      name: "AI Basics: Overview of AI",
      issuer: "Huawei",
      year: "2024",
      type: "Inteligência Artificial",
      credentialId: "EBG20240531000166"
    },
    {
      name: "HTTP: Entendendo a web por baixo dos panos",
      issuer: "Alura",
      year: "2021",
      type: "Desenvolvimento Web",
      credentialId: "62cb327f-ba43-4a5c-9da9-277cdc2ca230"
    },
    {
      name: "HTML5 e CSS3 parte 2: posicionamento, listas e navegação",
      issuer: "Alura",
      year: "2020",
      type: "Frontend",
      credentialId: "421fcfb1-c38e-47e8-a14e-ded7c751d2ed"
    },
    {
      name: "HTML5 e CSS3 parte 1: crie uma página da Web",
      issuer: "Alura",
      year: "2020",
      type: "Frontend",
      credentialId: "328c5ca7-2de2-4b49-b978-af51dd308226"
    },
    {
      name: "Python: avançando na orientação a objetos",
      issuer: "Alura",
      year: "2020",
      type: "Backend",
      credentialId: "5e74eb59-11f5-43d8-88a3-c1ddcc1e2452"
    },
    {
      name: "Python: avançando na linguagem",
      issuer: "Alura",
      year: "2020",
      type: "Backend",
      credentialId: "86c3d3ff-f654-4b60-bb79-f3f04006bc3a"
    },
    {
      name: "Python: entendendo a Orientação a Objetos",
      issuer: "Alura",
      year: "2020",
      type: "Backend",
      credentialId: "f392cc56-fc0f-4f6f-a6ae-d5362a9d4a74"
    },
    {
      name: "Python: começando com a linguagem",
      issuer: "Alura",
      year: "2020",
      type: "Backend",
      credentialId: "941ca4c0-7881-4537-99e6-50759abc247a"
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
            ACADÊMICO
          </h2>
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground leading-relaxed",
              inView ? "animate-fade-in-up delay-200" : "opacity-0",
            )}
          >
            Minha jornada acadêmica, pesquisas e contribuições para o desenvolvimento científico e tecnológico.
          </p>
          
          {/* LinkedIn Button */}
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
              Conecte-se no LinkedIn
            </Button>
          </div>
        </div>

        <div className="grid gap-8 py-8">
          {/* Publicações e Pesquisas */}
          <div className="space-y-6">
            <h3
              className={cn(
                "text-2xl md:text-3xl font-bold text-foreground flex items-center justify-center gap-3",
                inView ? "animate-fade-in-up delay-600" : "opacity-0",
              )}
            >
              <FileTextIcon className="w-8 h-8 text-primary" />
              Pesquisas e Publicações
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
                    PESQUISA
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
                        <p className="text-sm font-semibold text-foreground mb-2 text-left">Palavras-chave:</p>
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
                        <p className="text-sm font-semibold text-foreground mb-2 text-left">Objetivos da pesquisa:</p>
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