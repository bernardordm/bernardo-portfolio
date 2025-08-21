import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon, RocketIcon, CalendarIcon, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

interface ProjectsSectionProps {
  inView: boolean
}

export function ProjectsSection({ inView }: ProjectsSectionProps) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const projects = [
    {
      title: "Java Parking",
      description:
        "Sistema de controle de estacionamento desenvolvido em Java com foco em Programação Orientada a Objetos. Implementa conceitos fundamentais como polimorfismo, encapsulamento e divisão de responsabilidades, seguindo o padrão MVC com DTOs e interface gráfica em JavaFX.",
      technologies: ["Java", "Spring Boot", "JavaFX", "MVC", "POO", "DTOs"],
      githubLink: "https://github.com/bernardordm/Java-Parking",
      liveLink: "#",
      featured: true,
      image: "/JavaParking.jpeg",
      startDate: "2023-08",
      endDate: "2023-12",
      status: "Concluído"
    },
    {
      title: "Gnosi - Plataforma de Cursos",
      description:
        "Plataforma gratuita de cursos online com arquitetura fullstack robusta. Backend desenvolvido em Java Spring Boot e frontend em React.js, aplicando rigorosamente os princípios de POO, padrão MVC e boas práticas de desenvolvimento de software.",
      technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL", "MVC", "POO"],
      githubLink: "#",
      liveLink: "#",
      featured: true,
      image: "/Gnosi.jpeg",
      startDate: "2024-01",
      endDate: "2024-06",
      status: "Concluído"
    },
    {
      title: "Fabiana Móveis - Sistema de Gestão",
      description:
        "Sistema completo de gestão desenvolvido para cliente real, incluindo rastreamento de entregas via Google Maps API, geração de relatórios, cadastro de funcionários e controle de entregas. Solução fullstack com backend em Node.js/NestJS e frontend em Next.js.",
      technologies: ["Node.js", "NestJS", "Next.js", "Google Maps API", "PostgreSQL", "TypeScript"],
      githubLink: "#",
      liveLink: "#",
      featured: true,
      image: "/FabianaMoveis.jpeg",
      startDate: "2024-08",
      endDate: "2024-12",
      status: "Em Desenvolvimento"
    },
  ]

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-')
    const months = [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ]
    return `${months[parseInt(month) - 1]} ${year}`
  }

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center text-center p-4 md:p-8 bg-background overflow-hidden border-b border-primary/20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="w-full h-full bg-[url('/futuristic-grid.png')] bg-repeat animate-background-pan"
          style={{ backgroundSize: "200px 200px" }}
        ></div>
      </div>
      <div className="relative z-10 space-y-8 max-w-6xl">
        <h2
          className={cn(
            "text-4xl md:text-5xl font-bold text-primary tracking-tight",
            inView ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          PROJETOS DESENVOLVIDOS
        </h2>
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          Timeline dos projetos que demonstram minha evolução técnica e aplicação prática de conceitos fundamentais.
        </p>

        {/* Timeline */}
        <div className="relative py-12">
          {/* Linha central da timeline */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary to-primary/30"></div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex items-center",
                  index % 2 === 0 ? "justify-start" : "justify-end"
                )}
              >
                {/* Ponto na timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 shadow-lg shadow-primary/50"></div>
                
                {/* Card do projeto */}
                <div className={cn(
                  "w-5/12",
                  index % 2 === 0 ? "pr-8" : "pl-8"
                )}>
                  <Card
                    className={cn(
                      "border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 relative overflow-hidden",
                      project.featured ? "bg-gradient-to-br from-card to-primary/5" : "bg-card",
                      inView ? "animate-fade-in-up" : "opacity-0",
                    )}
                    style={{ animationDelay: `${400 + index * 200}ms` }}
                  >
                    {project.featured && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-bl-md font-semibold z-10">
                        DESTAQUE
                      </div>
                    )}
                    
                    {/* Timeline Info */}
                    <div className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <CalendarIcon className="w-3 h-3" />
                        <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                      </div>
                      <div className={cn(
                        "text-xs font-semibold",
                        project.status === "Concluído" ? "text-green-400" : "text-blue-400"
                      )}>
                        {project.status}
                      </div>
                    </div>

                    {/* Imagem do Projeto */}
                    <div className="relative w-full h-48 overflow-hidden bg-muted">
                      {!imageErrors[index] ? (
                        <Image
                          src={project.image}
                          alt={`Screenshot do projeto ${project.title}`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          onError={() => handleImageError(index)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                          <div className="text-center">
                            <ImageIcon className="w-12 h-12 text-primary/60 mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">
                              {project.title}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-2">
                        <RocketIcon className="w-6 h-6 text-primary" />
                        <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                      </div>
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between flex-grow">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className={cn(
                              "text-xs px-2 py-0.5 border",
                              tech === "POO" || tech === "MVC" || tech === "DTOs" 
                                ? "bg-green-500/20 text-green-400 border-green-500" 
                                : "bg-primary/20 text-primary border-primary"
                            )}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-auto">
                        {project.githubLink !== "#" ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary/10 bg-transparent flex-1"
                            onClick={() => window.open(project.githubLink, "_blank")}
                          >
                            <GithubIcon className="w-4 h-4 mr-1" /> GitHub
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-500 text-gray-500 cursor-not-allowed flex-1"
                            disabled
                          >
                            <GithubIcon className="w-4 h-4 mr-1" /> Privado
                          </Button>
                        )}
                        {project.liveLink !== "#" ? (
                          <Button 
                            size="sm" 
                            className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
                            onClick={() => window.open(project.liveLink, "_blank")}
                          >
                            <ExternalLinkIcon className="w-4 h-4 mr-1" /> Live
                          </Button>
                        ) : (
                          <Button 
                            size="sm" 
                            className="bg-gray-500 text-gray-100 cursor-not-allowed flex-1"
                            disabled
                          >
                            <ExternalLinkIcon className="w-4 h-4 mr-1" /> Em Breve
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}