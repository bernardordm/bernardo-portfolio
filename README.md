# 📚 Portfolio Bernardo de Resende - Engenheiro de Software

Este projeto é um portfolio pessoal moderno e interativo que demonstra as habilidades, experiências e projetos de Bernardo de Resende, desenvolvedor fullstack e estudante de Engenharia de Software. O website apresenta uma interface futurística com animações suaves e design responsivo, proporcionando uma experiência envolvente para mostrar competências técnicas e trajetória profissional.

**🌐 [Acessar Site Hospedado](https://bernardoresende.vercel.app/)**
## 🎨 Design e Prototipação

### Wireframe
O wireframe foi desenvolvido no Figma com foco em média fidelidade, apresentando a estrutura visual e organizacional do portfolio:

![Wireframe do Portfolio](docs/wireframe.png)

**🔗 [Visualizar Wireframe no Figma](https://www.figma.com/design/GtvbLxqT0sGX1DkHYYAfrm/Portf%C3%B3lio-Bernardo-de-Resende?node-id=0-1&t=LpKho8qNMrtreq6j-1)**

### Protótipo Funcional
O protótipo implementado demonstra a versão funcional do design:

![Protótipo do Portfolio](docs/prototype.png)


## 🚀 Funcionalidades

- **Interface Futurística**: Design moderno com tema escuro e elementos neon inspirados em interfaces sci-fi
- **Navegação Fluida**: Header fixo com navegação suave entre seções usando scroll automático
- **Animações Interativas**: Animações de entrada baseadas em scroll usando Intersection Observer
- **Seções Organizadas**: Portfolio dividido em seções claras e bem estruturadas
- **Design Responsivo**: Adaptação perfeita para desktop, tablet e dispositivos móveis
- **Sistema de Temas**: Suporte nativo ao modo escuro com cores personalizadas
- **Componentes Interativos**: Cards, badges e botões com efeitos hover e transições
- **Performance Otimizada**: Carregamento rápido e animações suaves

## 🎯 Seções do Portfolio

1. **Hero/Resume**: Apresentação principal com call-to-actions
2. **Sobre Mim**: História pessoal e trajetória acadêmica/profissional
3. **Skills e Tecnologias**: Habilidades técnicas organizadas por categorias
4. **Experiências**: Histórico profissional e acadêmico
5. **Projetos**: Showcase de projetos desenvolvidos com links para GitHub
6. **Acadêmico**: Pesquisas científicas, publicações e certificações
7. **Interesses**: Hobbies e áreas de interesse pessoal
8. **Contato**: Informações para conexão profissional

## 🛠️ Stack Técnica

- **Framework**: Next.js 15.2.4 (App Router)
- **Biblioteca UI**: React 19
- **Linguagem**: TypeScript 5
- **Estilização**: Tailwind CSS 3.4.17
- **Biblioteca de Componentes**: shadcn/ui components
- **Animações**: Tailwind CSS + CSS custom animations
- **Detecção de Scroll**: react-intersection-observer
- **Ícones**: Lucide React
- **Fontes**: Geist Sans & Geist Mono
- **Ferramentas de Build**: PostCSS, Autoprefixer
- **Validação**: Zod para schemas de dados

## 📁 Estrutura do Projeto

```
bernardo-portfolio/
│
├── 📁 app/                          # Diretório principal do Next.js App Router
│   ├── globals.css                  # Estilos globais e variáveis CSS
│   ├── layout.tsx                   # Layout principal da aplicação
│   └── page.tsx                     # Página principal com todas as seções
│
├── 📁 components/                   # Componentes React reutilizáveis
│   ├── header.tsx                   # Header fixo com navegação
│   ├── theme-provider.tsx          # Provider para gerenciamento de temas
│   │
│   ├── 📁 sections/                # Seções específicas do portfolio
│   │   ├── resume.tsx              # Seção hero/apresentação
│   │   ├── about-me.tsx            # Seção sobre mim
│   │   ├── skills.tsx              # Seção de habilidades técnicas
│   │   ├── experiences.tsx         # Seção de experiências profissionais
│   │   ├── projects.tsx            # Seção de projetos desenvolvidos
│   │   ├── academic.tsx            # Seção acadêmica e pesquisas
│   │   ├── interests.tsx           # Seção de interesses pessoais
│   │   └── contact.tsx             # Seção de contato
│   │
│   └── 📁 ui/                      # Componentes UI base (shadcn/ui)
│       ├── button.tsx              # Componente de botão
│       ├── card.tsx                # Componente de card
│       ├── badge.tsx               # Componente de badge
│       └── sidebar.tsx             # Componente de sidebar
│
├── 📁 hooks/                       # Hooks React personalizados
│   ├── use-mobile.tsx              # Hook para detecção de dispositivos móveis
│   └── use-toast.ts                # Hook para sistema de notificações
│
├── 📁 lib/                         # Utilitários e funções auxiliares
│   └── utils.ts                    # Funções utilitárias (cn, clsx, etc.)
│
├── 📁 public/                      # Arquivos estáticos
│   ├── abstract-grid.png           # Imagem de fundo em grid
│   ├── futuristic-circuit.png      # Textura de circuito futurístico
│   ├── futuristic-grid.png         # Grid futurístico animado
│   └── placeholder-logo.png        # Logo placeholder
│
├── 📁 styles/                      # Estilos adicionais
│
├── 📁 .next/                       # Build files do Next.js (auto-gerado)
│
├── components.json                 # Configuração do shadcn/ui
├── next.config.mjs                 # Configuração do Next.js
├── tailwind.config.ts              # Configuração do Tailwind CSS
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
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
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

## 🎯 Funcionalidades Específicas

### Sistema de Navegação
- Detecção automática da seção ativa usando Intersection Observer
- Scroll suave entre seções
- Header fixo com indicadores visuais

### Animações Inteligentes
- Trigger baseado na visibilidade do elemento
- Delays escalonados para efeito cascata
- Performance otimizada com CSS transforms

## 🌟 Destaques Técnicos

- **Performance**: Otimizado com Next.js App Router
- **SEO**: Meta tags configuradas e estrutura semântica
- **Acessibilidade**: Contrast ratios adequados e navegação por teclado
- **Tipagem**: TypeScript em todo o projeto
- **Manutenibilidade**: Componentes modulares e reutilizáveis

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

---

**🔗 Links**
- [LinkedIn](https://www.linkedin.com/in/bernardo-resende)
- [GitHub](https://github.com/bernardordm)
- [Email](mailto:bernardordm@example.com)

---
