import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCapIcon, FileTextIcon, ExternalLinkIcon, LinkedinIcon, BookOpenIcon, AwardIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AcademicSectionProps {
  inView: boolean
}

export function AcademicSection({ inView }: AcademicSectionProps) {
  const education = [
    {
      degree: "Bacharelado em Sistemas de Informação",
      institution: "Centro Universitário Una",
      duration: "2024 - 2027",
      status: "Em andamento",
      description: "Formação focada em desenvolvimento de software, análise de sistemas, banco de dados, engenharia de software e gestão de projetos de TI.",
      highlights: ["Programação Orientada a Objetos", "Banco de Dados", "Engenharia de Software", "Arquitetura de Sistemas"]
    },
    {
      degree: "Técnico em Automação Industrial",
      institution: "SENAI - Pedro Leopoldo",
      duration: "2021 - 2023",
      status: "Concluído",
      description: "Formação técnica completa em automação de processos industriais, programação de PLCs, sistemas SCADA e controle de equipamentos.",
      highlights: ["Programação de PLCs", "Sistemas SCADA", "Pneumática e Hidráulica", "Controle de Processos"]
    }
  ]

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
            FORMAÇÃO ACADÊMICA
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
              onClick={() => window.open("https://linkedin.com/in/seu-perfil", "_blank")}
            >
              <LinkedinIcon className="w-5 h-5 mr-2" />
              Conecte-se no LinkedIn
            </Button>
          </div>
        </div>

        <div className="grid gap-8 py-8">
          {/* Formação Acadêmica */}
          <div className="space-y-6">
            <h3
              className={cn(
                "text-2xl md:text-3xl font-bold text-foreground flex items-center justify-center gap-3",
                inView ? "animate-fade-in-up delay-400" : "opacity-0",
              )}
            >
              <GraduationCapIcon className="w-8 h-8 text-primary" />
              Educação
            </h3>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={cn(
                    "flex flex-col h-full border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 bg-card",
                    inView ? "animate-fade-in-up" : "opacity-0",
                  )}
                  style={{ animationDelay: `${500 + index * 200}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl font-bold text-foreground text-left">{edu.degree}</CardTitle>
                        <p className="text-primary font-semibold text-left">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{edu.duration}</span>
                          <Badge 
                            variant={edu.status === "Concluído" ? "default" : "secondary"}
                            className={edu.status === "Concluído" ? "bg-green-500/20 text-green-400 border-green-500" : ""}
                          >
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-left">
                      {edu.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground text-left">Principais áreas:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <Badge
                            key={highlightIndex}
                            variant="outline"
                            className="text-xs px-2 py-0.5 border-primary/50 text-primary"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

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

          {/* Certificações */}
          <div className="space-y-6">
            <h3
              className={cn(
                "text-2xl md:text-3xl font-bold text-foreground flex items-center justify-center gap-3",
                inView ? "animate-fade-in-up delay-800" : "opacity-0",
              )}
            >
              <AwardIcon className="w-8 h-8 text-primary" />
              Certificações
            </h3>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className={cn(
                    "border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 bg-card",
                    inView ? "animate-fade-in-up" : "opacity-0",
                  )}
                  style={{ animationDelay: `${900 + index * 100}ms` }}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-bold text-foreground text-left leading-tight">{cert.name}</CardTitle>
                    <p className="text-primary font-semibold text-sm text-left">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "text-xs px-2 py-0.5",
                          cert.type === "Inteligência Artificial" ? "border-purple-500 text-purple-400 bg-purple-500/10" :
                          cert.type === "Desenvolvimento Web" ? "border-blue-500 text-blue-400 bg-blue-500/10" :
                          cert.type === "Frontend" ? "border-green-500 text-green-400 bg-green-500/10" :
                          cert.type === "Backend" ? "border-orange-500 text-orange-400 bg-orange-500/10" :
                          "border-primary/50 text-primary"
                        )}
                      >
                        {cert.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    </div>
                    {cert.credentialId && (
                      <div className="text-xs text-muted-foreground text-left">
                        <span className="font-medium">ID:</span> {cert.credentialId}
                      </div>
                    )}
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