import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon, InstagramIcon, SendIcon, UserIcon, ClockIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/hooks/use-language"

interface ContactSectionProps {
  inView: boolean
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactSection({ inView }: ContactSectionProps) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: <MailIcon className="w-6 h-6" />,
      label: t('contact.email'),
      value: "bernardordm@outlook.com",
      href: "mailto:bernardordm@outlook.com",
      description: t('contact.email_description')
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      label: t('contact.phone'),
      value: "+55 (31) 98610-0574",
      href: "tel:+5531986100574",
      description: t('contact.phone_description')
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/bernardo-resende1167071b9/",
      color: "border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/10",
      description: t('contact.linkedin')
    },
    {
      name: "GitHub",
      icon: <GithubIcon className="w-5 h-5" />,
      href: "https://github.com/bernardordm",
      color: "border-gray-400 text-gray-400 hover:bg-gray-400/10",
      description: t('contact.github')
    },
    {
      name: "Instagram",
      icon: <InstagramIcon className="w-5 h-5" />,
      href: "https://instagram.com/bernardoresendem",
      color: "border-pink-500 text-pink-500 hover:bg-pink-500/10",
      description: t('contact.instagram')
    }
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.error.name_required')
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('contact.form.error.name_short')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.error.email_required')
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('contact.form.error.email_invalid')
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.error.subject_required')
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = t('contact.form.error.subject_short')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.error.message_required')
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.error.message_short')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const mailtoLink = `mailto:bernardordm@outlook.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `${t('contact.form.name')}: ${formData.name}\n${t('contact.form.email')}: ${formData.email}\n\n${t('contact.form.message')}:\n${formData.message}`
      )}`
      window.location.href = mailtoLink
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      // erro de envio
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="font-jetbrains relative w-full h-full min-h-screen flex flex-col items-center justify-center text-center p-4 md:p-8 bg-secondary overflow-hidden">
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
              "font-jetbrains text-4xl md:text-5xl font-bold text-primary tracking-tight",
              inView ? "animate-fade-in-up" : "opacity-0",
            )}
          >
            {t('contact.title')}
          </h2>
          <p
            className={cn(
              "font-jetbrains text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto",
              inView ? "animate-fade-in-up delay-200" : "opacity-0",
            )}
          >
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Informações de Contato */}
          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className={cn(
                  "border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 cursor-pointer",
                  inView ? "animate-slide-in-left" : "opacity-0",
                )}
                style={{ animationDelay: `${400 + index * 200}ms` }}
                onClick={() => window.open(contact.href, "_blank")}
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    {contact.icon}
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="font-semibold text-foreground">{contact.label}</h3>
                    <p className="text-primary font-mono">{contact.value}</p>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Redes Sociais */}
            <Card
              className={cn(
                "border border-primary/30 shadow-lg",
                inView ? "animate-slide-in-left delay-800" : "opacity-0",
              )}
            >
              <CardHeader>
                <CardTitle className="text-foreground">{t('contact.social')}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className={cn("flex-1 min-w-32", social.color)}
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    {social.icon}
                    <span className="ml-2">{social.name}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Status Disponibilidade */}
            <Card
              className={cn(
                "border border-green-500/30 bg-green-500/5",
                inView ? "animate-slide-in-left delay-1000" : "opacity-0",
              )}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-green-400">{t('contact.available')}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      {t('contact.available_description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <Card
            className={cn(
              "border border-primary/30 shadow-xl bg-card/80 backdrop-blur-sm",
              inView ? "animate-slide-in-right delay-600" : "opacity-0",
            )}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <SendIcon className="w-5 h-5 text-primary" />
                {t('contact.form.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-1">
                      <UserIcon className="w-3 h-3" />
                      {t('contact.form.name')}
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.name_placeholder')}
                      className={cn(
                        "border-primary/30 focus:border-primary",
                        errors.name && "border-red-500 focus:border-red-500"
                      )}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-1">
                      <MailIcon className="w-3 h-3" />
                      {t('contact.form.email')}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.email_placeholder')}
                      className={cn(
                        "border-primary/30 focus:border-primary",
                        errors.email && "border-red-500 focus:border-red-500"
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t('contact.form.subject')}
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.subject_placeholder')}
                    className={cn(
                      "border-primary/30 focus:border-primary",
                      errors.subject && "border-red-500 focus:border-red-500"
                    )}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs">{errors.subject}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.message_placeholder')}
                    rows={5}
                    className={cn(
                      "border-primary/30 focus:border-primary resize-none",
                      errors.message && "border-red-500 focus:border-red-500"
                    )}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-4 h-4 mr-2" />
                      {t('contact.form.send')}
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  {t('contact.form.redirect')}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}