import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  LinkedinIcon, 
  GithubIcon, 
  InstagramIcon,
  SendIcon,
  MessageCircleIcon,
  ClockIcon,
  UserIcon
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface ContactSectionProps {
  inView: boolean
}

export function ContactSection({ inView }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const contactInfo = [
    {
      icon: <MailIcon className="w-6 h-6" />,
      label: "E-mail",
      value: "bresende66@gmail.com",
      href: "mailto:bernardordm@gmail.com",
      description: "Resposta em até 24h"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      label: "Telefone",
      value: "+55 (31) 98610-0574",
      href: "tel:+5531986100574",
      description: "WhatsApp disponível"
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/bernardo-resende1167071b9/",
      color: "border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/10",
      description: "Conecte-se profissionalmente"
    },
    {
      name: "GitHub",
      icon: <GithubIcon className="w-5 h-5" />,
      href: "https://github.com/bernardordm",
      color: "border-gray-400 text-gray-400 hover:bg-gray-400/10",
      description: "Confira meus projetos"
    },
    {
      name: "Instagram",
      icon: <InstagramIcon className="w-5 h-5" />,
      href: "https://instagram.com/bernardoresendem",
      color: "border-pink-500 text-pink-500 hover:bg-pink-500/10",
      description: "Acompanhe minha jornada"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:bernardordm@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center text-center p-4 md:p-8 bg-secondary overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="w-full h-full bg-[url('/futuristic-circuit.png')] bg-cover bg-center"
          style={{ backgroundSize: "cover" }}
        ></div>
      </div>
      
      <div className="relative z-10 space-y-8 max-w-7xl w-full">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold text-primary tracking-tight",
              inView ? "animate-fade-in-up" : "opacity-0",
            )}
          >
            CONTATOS
          </h2>
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto",
              inView ? "animate-fade-in-up delay-200" : "opacity-0",
            )}
          >
            Estou sempre aberto a novas oportunidades, novos projetos e conexões profissionais. 
            Entre em contato e vamos construir algo incrível juntos!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className={cn(
                    "border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 bg-card/80 backdrop-blur-sm",
                    inView ? "animate-slide-in-left" : "opacity-0",
                  )}
                  style={{ animationDelay: `${400 + index * 200}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {contact.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-foreground">{contact.label}</h3>
                        <p className="text-muted-foreground text-sm">{contact.description}</p>
                        {contact.href !== "#" ? (
                          <a 
                            href={contact.href}
                            className="text-primary hover:underline font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-primary font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card
              className={cn(
                "border border-primary/30 shadow-lg bg-card/80 backdrop-blur-sm",
                inView ? "animate-slide-in-left delay-1000" : "opacity-0",
              )}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MessageCircleIcon className="w-5 h-5 text-primary" />
                  Redes Sociais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className={cn("w-full justify-start gap-3", social.color)}
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    {social.icon}
                    <div className="text-left flex-1">
                      <div className="font-medium">{social.name}</div>
                      <div className="text-xs opacity-70">{social.description}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card
              className={cn(
                "border border-green-500/30 shadow-lg bg-gradient-to-br from-card to-green-500/5",
                inView ? "animate-slide-in-left delay-1200" : "opacity-0",
              )}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-green-400">Disponível para Projetos</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      Respondo em até 24 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card
            className={cn(
              "border border-primary/30 shadow-xl bg-card/80 backdrop-blur-sm",
              inView ? "animate-slide-in-right delay-600" : "opacity-0",
            )}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <SendIcon className="w-5 h-5 text-primary" />
                Envie um E-mail !
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-1">
                      <UserIcon className="w-3 h-3" />
                      Nome *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-1">
                      <MailIcon className="w-3 h-3" />
                      E-mail *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Assunto *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sobre o que você gostaria de conversar?"
                    required
                    className="border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Mensagem *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto, ideia ou como posso ajudar..."
                    rows={5}
                    required
                    className="border-primary/30 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <SendIcon className="w-4 h-4 mr-2" />
                  Enviar E-mail
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você será redirecionado para seu cliente de e-mail padrão.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}