# 📚 Portfolio Bernardo de Resende - Engenheiro de Software

Este projeto é um portfolio pessoal moderno e interativo que demonstra minhas habilidades, experiências e projetos. O website apresenta uma interface futurística com animações suaves, design responsivo e elementos visuais dinâmicos, proporcionando uma experiência envolvente para mostrar competências técnicas e trajetória profissional.

**🌐 [Acessar Site Hospedado](https://bernardoresende.vercel.app/)**

## 🎨 Design e Prototipação

### Wireframe
O wireframe foi desenvolvido no Figma com foco em média fidelidade, apresentando a estrutura visual e organizacional do portfolio:

![Wireframe do Portfolio](docs/wireframe.png)

**🔗 [Visualizar Wireframe e Protótipo no Figma](https://www.figma.com/design/GtvbLxqT0sGX1DkHYYAfrm/Portf%C3%B3lio-Bernardo-de-Resende?node-id=0-1&t=LpKho8qNMrtreq6j-1)**

### Protótipo Funcional
O protótipo implementado demonstra a versão funcional do design:

![Protótipo do Portfolio](docs/prototype.png)

## 🚀 Funcionalidades

- **Interface Futurística**: Design moderno com tema escuro e elementos neon inspirados em interfaces sci-fi
- **Background Animado**: Partículas Matrix-style verdes em movimento contínuo
- **Sistema de Idiomas**: Suporte completo para Português e Inglês com traduções dinâmicas
- **Navegação Fluida**: Header fixo com navegação suave entre seções usando scroll automático
- **Animações Interativas**: Animações de entrada baseadas em scroll usando Intersection Observer
- **Seções Organizadas**: Portfolio dividido em seções claras e bem estruturadas
- **Design Responsivo**: Adaptação perfeita para desktop, tablet e dispositivos móveis
- **Sprite Personalizada**: Avatar pixelado customizado com animações
- **Componentes Interativos**: Cards, badges e botões com efeitos hover e transições
- **Formulário de Contato**: Sistema de validação e envio via mailto
- **Performance Otimizada**: Carregamento rápido e animações suaves

## 🎯 Seções do Portfolio

1. **Hero/Resume**: Apresentação principal com foto e call-to-actions
2. **Sobre Mim**: História pessoal, trajetória acadêmica/profissional com sprite personalizada
3. **Skills e Tecnologias**: Habilidades técnicas organizadas por categorias com indicadores visuais
4. **Experiências**: Histórico profissional e acadêmico com timeline
5. **Projetos**: Showcase de projetos com screenshots, vídeos e links para GitHub
6. **Acadêmico**: Formação, pesquisas científicas, publicações e certificações
7. **Interesses**: Hobbies e áreas de interesse pessoal
8. **Contato**: Formulário funcional, informações de contato e redes sociais

## 🛠️ Stack Técnica

- **Framework**: Next.js 15.2.4 (App Router)
- **Biblioteca UI**: React 19
- **Linguagem**: TypeScript 5
- **Estilização**: Tailwind CSS 3.4.17
- **Biblioteca de Componentes**: shadcn/ui components
- **Animações**: 
  - Tailwind CSS + CSS custom animations
  - Partículas Matrix em Canvas HTML5
- **Detecção de Scroll**: react-intersection-observer
- **Ícones**: Lucide React
- **Fontes**: 
  - Geist Sans & Geist Mono
  - JetBrains Mono
  - VT323 (Pixel font)
- **Internacionalização**: Context API customizado para PT/EN
- **Formulários**: Validação nativa com TypeScript
- **Ferramentas de Build**: PostCSS, Autoprefixer
- **Imagens**: Next.js Image Optimization

## 📁 Estrutura do Projeto

```
bernardo-portfolio/
│
├── 📁 app/                          # Diretório principal do Next.js App Router
│   ├── globals.css                  # Estilos globais, variáveis CSS e tema escuro
│   ├── layout.tsx                   # Layout principal com fontes personalizadas
│   └── page.tsx                     # Página principal com navegação entre seções
│
├── 📁 components/                   # Componentes React reutilizáveis
│   ├── header.tsx                   # Header fixo com navegação e seletor de idioma
│   ├── MatrixParticles.tsx          # Background animado com partículas verdes
│   │
│   ├── 📁 sections/                # Seções específicas do portfolio
│   │   ├── resume.tsx              # Seção hero com foto e apresentação
│   │   ├── about-me.tsx            # Seção sobre mim com sprite personalizada
│   │   ├── skills.tsx              # Seção de habilidades técnicas categorizadas
│   │   ├── experiences.tsx         # Seção de experiências profissionais
│   │   ├── projects.tsx            # Seção de projetos com screenshots e vídeos
│   │   ├── academic.tsx            # Seção acadêmica com pesquisas e certificações
│   │   ├── interests.tsx           # Seção de interesses pessoais
│   │   └── contact.tsx             # Seção de contato com formulário funcional
│   │
│   └── 📁 ui/                      # Componentes UI base (shadcn/ui)
│       ├── button.tsx              # Componente de botão com variantes
│       ├── card.tsx                # Componente de card responsivo
│       ├── badge.tsx               # Componente de badge com cores temáticas
│       ├── input.tsx               # Componente de input com validação
│       ├── textarea.tsx            # Componente de textarea
│       └── [outros componentes UI]
│
├── 📁 hooks/                       # Hooks React personalizados
│   ├── use-language.tsx            # Hook para internacionalização PT/EN
│   ├── use-mobile.tsx              # Hook para detecção de dispositivos móveis
│   └── use-toast.ts                # Hook para sistema de notificações
│
├── 📁 lib/                         # Utilitários e funções auxiliares
│   └── utils.ts                    # Funções utilitárias (cn, clsx, etc.)
│
├── 📁 public/                      # Arquivos estáticos
│   ├── photo.jpeg                  # Foto pessoal para seção hero
│   ├── sprite.png                  # Avatar pixelado personalizado
│   ├── JavaParking.jpeg            # Screenshot projeto Java Parking
│   ├── Gnosi.jpeg                  # Screenshot projeto Gnosi
│   ├── FabianaMoveis.jpeg          # Screenshot projeto Fabiana Móveis
│   ├── projetoAcademico.pdf        # Artigo científico para download
│   ├── futuristic-circuit.png      # Textura de circuito futurístico
│   ├── futuristic-grid.png         # Grid futurístico animado
│   └── abstract-grid.png           # Imagem de fundo em grid
│
├── 📁 styles/                      # Estilos adicionais
│   └── globals.css                 # Estilos globais complementares
│
├── components.json                 # Configuração do shadcn/ui
├── next.config.mjs                 # Configuração do Next.js
├── tailwind.config.ts              # Configuração do Tailwind CSS com animações customizadas
├── tsconfig.json                   # Configuração do TypeScript
├── postcss.config.mjs              # Configuração do PostCSS
├── package.json                    # Dependências e scripts
├── pnpm-lock.yaml                  # Lock file do pnpm
└── README.md                       # Documentação do projeto
```

## 📱 Comportamento Responsivo

O projeto utiliza breakpoints do Tailwind CSS para adaptação responsiva:

```css
/* Mobile-first approach */
sm: 640px   /* Tablets pequenos */
md: 768px   # Tablets
lg: 1024px  # Laptops 
xl: 1280px  # Desktops
2xl: 1400px # Desktops grandes
```

## 🔧 Instalação e Execução

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Passos para executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/bernardordm/bernardo-portfolio.git
   cd bernardo-portfolio
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Execute o projeto em desenvolvimento**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Acesse o projeto**
   ```
   http://localhost:3000
   ```

5. **Build para produção**
   ```bash
   pnpm build
   # ou
   npm run build
   ```

## 🎯 Funcionalidades Específicas

### Sistema de Internacionalização
- Suporte completo para Português e Inglês
- Traduções dinâmicas usando Context API
- Seletor de idioma no header
- Persistência da preferência do usuário

### Animações e Efeitos Visuais
- Background Matrix com partículas verdes animadas
- Sprite personalizada com efeitos hover e partículas
- Animações baseadas em scroll usando Intersection Observer
- Transições suaves entre seções
- Efeitos de glow e pulse em elementos interativos

### Sistema de Navegação
- Detecção automática da seção ativa usando Intersection Observer
- Scroll suave entre seções
- Header fixo com indicadores visuais
- Navegação responsiva para mobile

### Formulário de Contato Avançado
- Validação em tempo real com TypeScript
- Mensagens de erro personalizadas
- Integração com mailto para envio
- Design responsivo e acessível

## 🌟 Destaques Técnicos

- **Performance**: Otimizado com Next.js App Router e Image Optimization
- **SEO**: Meta tags configuradas e estrutura semântica HTML5
- **Acessibilidade**: Contrast ratios adequados, navegação por teclado e ARIA labels
- **Tipagem**: TypeScript rigoroso em todo o projeto
- **Manutenibilidade**: Componentes modulares e hooks reutilizáveis
- **Design System**: Tokens de design consistentes via Tailwind CSS

## 📊 Projetos em Destaque

### 1. Java Parking
Sistema de controle de estacionamento desenvolvido em Java com foco em POO, implementando conceitos como polimorfismo, encapsulamento e padrão MVC com interface JavaFX.

**Tecnologias**: Java, Spring Boot, JavaFX, MVC, POO, DTOs

### 2. Gnosi - Plataforma de Cursos
Plataforma gratuita de cursos online com arquitetura fullstack robusta usando Java Spring Boot no backend e React.js no frontend.

**Tecnologias**: Java, Spring Boot, React.js, PostgreSQL, MVC, POO

### 3. Fabiana Móveis - Sistema de Gestão
Sistema completo desenvolvido para cliente real com rastreamento via Google Maps API, relatórios e controle de entregas.

**Tecnologias**: Node.js, NestJS, Next.js, Google Maps API, PostgreSQL, TypeScript

## 🎓 Seção Acadêmica

- **Formação**: Técnico em Automação Industrial (SENAI) + Bacharelado em Sistemas de Informação (Una)
- **Pesquisa**: Artigo sobre otimização de integrais usando LLMs
- **Certificações**: 9+ certificações em tecnologias web e IA
- **LinkedIn**: Integração com perfil profissional

## 🎮 Elementos de Gamificação

- Sprite personalizada pixelada com animações
- Partículas Matrix-style no background
- Efeitos sonoros visuais (glow, pulse)
- Temas de ficção científica e cyberpunk
- Transições cinematográficas

## 🚀 Deploy e Hospedagem

O projeto está configurado para deploy automático:

- **Plataforma**: Vercel
- **Build**: Next.js static export
- **CDN**: Automaticamente otimizado
- **SSL**: Certificado automático

---

**🔗 Links Importantes**
- [Site ao vivo](https://bernardoresende.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/bernardo-resende1167071b9/)
- [GitHub](https://github.com/bernardordm)
- [Email](mailto:bernardordm@outlook.com)

---

**📈 Estatísticas do Projeto**
- **Linhas de código**: 5000+ linhas TypeScript/TSX
- **Componentes**: 25+ componentes reutilizáveis  
- **Seções**: 8 seções principais
- **Idiomas**: Português e Inglês
- **Responsividade**: 100% responsivo
- **Performance**: 95+ no Lighthouse
