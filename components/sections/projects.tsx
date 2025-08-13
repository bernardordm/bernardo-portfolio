import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon, RocketIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectsSectionProps {
  inView: boolean
}

export function ProjectsSection({ inView }: ProjectsSectionProps) {
  const projects = [
    {
      title: "Sistema de Gestão de Tarefas",
      description:
        "Uma aplicação fullstack para gerenciamento de tarefas, com autenticação de usuários, CRUD completo e interface intuitiva.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "#", // Substitua pelo link real do GitHub
      liveLink: "#", // Substitua pelo link real do projeto ao vivo
    },
    {
      title: "E-commerce de Produtos Digitais",
      description:
        "Plataforma de e-commerce com carrinho de compras, sistema de pagamento integrado e painel administrativo para gestão de produtos.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "API de Previsão do Tempo",
      description:
        "Uma API RESTful que fornece dados de previsão do tempo em tempo real, consumindo dados de serviços externos e otimizando respostas.",
      technologies: ["Python", "FastAPI", "Docker"],
      githubLink: "#",
      liveLink: "#",
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
      <div className="relative z-10 space-y-8 max-w-5xl">
        <h2
          className={cn(
            "text-4xl md:text-5xl font-bold text-primary tracking-tight",
            inView ? "animate-fade-in-up" : "opacity-0",
          )}
        >
          DEPLOYED CONSTRUCTS
        </h2>
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            inView ? "animate-fade-in-up delay-200" : "opacity-0",
          )}
        >
          Projetos desenvolvidos, prontos para demonstração e análise.
        </p>
        <div className="grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={cn(
                "flex flex-col h-full bg-card border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300",
                inView ? "animate-fade-in-up" : "opacity-0",
              )}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <RocketIcon className="w-6 h-6 text-primary" />
                  <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/20 text-primary text-sm px-2 py-0.5 border border-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <GithubIcon className="w-4 h-4" /> GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLinkIcon className="w-4 h-4" /> Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
