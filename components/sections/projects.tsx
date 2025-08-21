import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon, RocketIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProjectsSectionProps {
  inView: boolean
}

export function ProjectsSection({ inView }: ProjectsSectionProps) {
  const projects = [
    {
      title: "Java Parking",
      description:
        "Sistema de controle de estacionamento desenvolvido em Java com foco em Programação Orientada a Objetos. Implementa conceitos fundamentais como polimorfismo, encapsulamento e divisão de responsabilidades, seguindo o padrão MVC com DTOs e interface gráfica em JavaFX.",
      technologies: ["Java", "Spring Boot", "JavaFX", "MVC", "POO", "DTOs"],
      githubLink: "https://github.com/bernardordm/Java-Parking",
      liveLink: "#",
      featured: true,
      image: "/JavaParking.jpeg"
    },
    {
      title: "Gnosi - Plataforma de Cursos",
      description:
        "Plataforma gratuita de cursos online com arquitetura fullstack robusta. Backend desenvolvido em Java Spring Boot e frontend em React.js, aplicando rigorosamente os princípios de POO, padrão MVC e boas práticas de desenvolvimento de software.",
      technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL", "MVC", "POO"],
      githubLink: "#",
      liveLink: "#",
      featured: true,
      image: "/Gnosi.jpeg"
    },
    {
      title: "Fabiana Móveis - Sistema de Gestão",
      description:
        "Sistema completo de gestão desenvolvido para cliente real, incluindo rastreamento de entregas via Google Maps API, geração de relatórios, cadastro de funcionários e controle de entregas. Solução fullstack com backend em Node.js/NestJS e frontend em Next.js.",
      technologies: ["Node.js", "NestJS", "Next.js", "Google Maps API", "PostgreSQL", "TypeScript"],
      githubLink: "#",
      liveLink: "#",
      featured: true,
      image: "/FabianaMoveis.jpeg"
    },
  ]

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
          Projetos que demonstram minha evolução técnica e aplicação prática de conceitos fundamentais da engenharia de software.
        </p>
        <div className="grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={cn(
                "flex flex-col h-full border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 relative overflow-hidden",
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
              
              {/* Imagem do Projeto */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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
          ))}
        </div>
      </div>
    </div>
  )
}