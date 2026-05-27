<div align="center">

# 🔗 Link in Bio — vdonoladev

**Minha versão personalizada do [Zutrabio](https://zutra.gumroad.com/l/zutrabio) — Premium Astro Link in Bio Theme**

[![Astro](https://img.shields.io/badge/Astro-6.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deploy-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](./LICENSE)

## 🖼️ Demonstração

![Demo do projeto](./docs/demo.gif)

🌐 **[Ver ao vivo →](https://links.vdonoladev.com.br)**

</div>

---

## 📋 Índice

- [Demonstração](#-demonstração)
- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Temas visuais](#-temas-visuais)
- [Blocos de conteúdo](#-blocos-de-conteúdo)
- [Stack tecnológica](#-stack-tecnológica)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como rodar localmente](#-como-rodar-localmente)
- [Configuração](#-configuração)
- [Perfis disponíveis](#-perfis-disponíveis)
- [Deploy](#-deploy)
- [Licença](#-licença)

---

## 💡 Sobre o projeto

Esta é minha versão personalizada do **Zutrabio**, um tema premium de _Link in Bio_ construído com **Astro** e **Tailwind CSS**. O projeto serve como minha página centralizada de links — redes sociais, projetos, timeline profissional, certificações e formas de contato — tudo em um único lugar, com foco total em **performance** e **SEO**.

> O Zutrabio é um tema open-source criado pela [Zutra Agency](https://zutra.agency). Este repositório contém minha customização pessoal com meus dados, links e configurações.

---

## ✨ Funcionalidades

- 🎨 **3 temas visuais** — Minimal, Modern (glassmorphism) e Neobrutalist
- 🌙 **Dark / Light / System** — alternância de modo de cor sem FOUC
- 🎛️ **Cores de destaque por tema** — defina um hex customizado para cada preset
- 🔄 **Switcher flutuante** — troca de tema e modo de cor em tempo real
- 📱 **100% responsivo** — mobile-first, sem scroll horizontal
- ⚡ **Output 100% estático** — zero JavaScript obrigatório para o conteúdo principal
- 🔍 **SEO completo** — Open Graph, Twitter Cards, Schema.org JSON-LD, sitemap, robots.txt
- 📊 **5 integrações de analytics** — GTM, Cloudflare, Umami, Plausible e Fathom
- 🚀 **Pronto para Cloudflare Pages** — headers de segurança via `wrangler.toml`
- 👤 **6 perfis pré-configurados** — Freelancer, Creator, Musician, Founder, Professional, Local Business
- 🗂️ **Mais de 50 plataformas** catalogadas com ícone e cor oficiais
- 📢 **Banner promocional** — strip dismissível no topo da página
- 💬 **Popup de exit-intent** — exibido quando o cursor sai da janela
- 🃏 **Slide-in card** — toast deslizante com CTA após X segundos
- 🔘 **Botão CTA flutuante** — fixo no canto inferior (WhatsApp, email, etc.)

---

## 🎨 Temas visuais

| #   | Tema             | Descrição                                                                |
| --- | ---------------- | ------------------------------------------------------------------------ |
| 1   | **Minimal**      | Clean, tipografia forte, preto e branco, foco no conteúdo                |
| 2   | **Modern**       | Glassmorphism, roxo vibrante `#6c47ff`, gradiente de fundo, fonte Outfit |
| 3   | **Neobrutalist** | Bordas grossas, sombras fortes, laranja `#ff6b35`, estética ousada       |

O tema padrão e o modo de cor são definidos em `src/site-config.ts`. O visitante pode alterá-los pelo switcher flutuante — ou você pode desativá-lo para "travar" o design.

---

## 🧩 Blocos de conteúdo

O sistema de blocos permite montar a página como se fossem peças de lego:

| Bloco               | Descrição                                                              |
| ------------------- | ---------------------------------------------------------------------- |
| `link`              | Botão de link com ícone de plataforma                                  |
| `section-header`    | Título de seção separador                                              |
| `divider`           | Divisor visual (linha, espaço, etc.)                                   |
| `text-block`        | Bloco de texto (estilo `announcement` ou `bento`)                      |
| `social-proof`      | Stats, depoimentos, logos de clientes, badges, prêmios                 |
| `timeline`          | Linha do tempo com ícones e datas                                      |
| `rich-media`        | Embeds de YouTube, Vimeo, Spotify, SoundCloud, PDF, galeria de imagens |
| `price`             | Card de preço/serviço com features e CTA                               |
| `newsletter-inline` | Formulário de inscrição em newsletter                                  |
| `utility`           | Widgets: relógio local, mapa, QR code, cupom, vCard                    |

---

## 🛠️ Stack tecnológica

| Tecnologia                                                      | Versão | Uso                          |
| --------------------------------------------------------------- | ------ | ---------------------------- |
| [Astro](https://astro.build)                                    | 6.x    | Framework principal          |
| [Tailwind CSS](https://tailwindcss.com)                         | 4.x    | Estilização                  |
| [TypeScript](https://www.typescriptlang.org)                    | 5.x    | Tipagem estática             |
| [astro-icon](https://github.com/natemoo-re/astro-icon)          | 1.x    | Sistema de ícones            |
| [Lucide Icons](https://lucide.dev)                              | —      | Ícones de UI                 |
| [Simple Icons](https://simpleicons.org)                         | —      | Ícones de marcas/plataformas |
| [Cloudflare Pages](https://pages.cloudflare.com)                | —      | Hospedagem e deploy          |
| [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | 3.x    | CLI Cloudflare               |

---

## 📁 Estrutura do projeto

```
linkInBio/
├── public/                  # Arquivos estáticos (favicon, OG image, manifest)
│   └── og/                  # Imagens Open Graph
├── src/
│   ├── components/
│   │   ├── cards/           # Componentes de blocos de conteúdo
│   │   │   ├── LinkCard.astro
│   │   │   ├── TimelineCard.astro
│   │   │   ├── SocialProofCard.astro
│   │   │   ├── RichMediaCard.astro
│   │   │   ├── PriceCard.astro
│   │   │   ├── TextBlock.astro
│   │   │   ├── UtilityCard.astro
│   │   │   ├── NewsletterInline.astro
│   │   │   ├── LeadGenCard.astro
│   │   │   ├── SectionHeader.astro
│   │   │   └── DividerItem.astro
│   │   ├── seo/             # Componentes de SEO e schema
│   │   ├── themes/          # Switcher e script de temas
│   │   │   ├── FloatingThemeSwitcher.astro
│   │   │   ├── ThemeScript.astro
│   │   │   └── ThemeToggle.astro
│   │   └── ui/              # Componentes de layout global
│   │       ├── ProfileHeader.astro
│   │       ├── PageRenderer.astro
│   │       ├── Footer.astro
│   │       ├── TopBanner.astro
│   │       ├── FloatingAction.astro
│   │       ├── SlideInCard.astro
│   │       └── ExitIntentPopup.astro
│   ├── layouts/             # Layouts Astro base
│   ├── pages/               # Rotas da aplicação
│   │   ├── index.astro      # Página principal
│   │   ├── changelog.astro  # Página de changelog
│   │   └── robots.txt.ts    # Geração dinâmica de robots.txt
│   ├── profiles/            # Perfis pré-configurados
│   │   ├── freelancer.ts    # ← Perfil ativo
│   │   ├── creator.ts
│   │   ├── musician.ts
│   │   ├── founder.ts
│   │   ├── professional.ts
│   │   └── localbusiness.ts
│   ├── styles/              # Estilos globais e variáveis CSS
│   ├── types/               # Tipos TypeScript
│   ├── utils/               # Utilitários
│   └── site-config.ts       # ⚙️ Configuração central do site
├── docs/                    # Assets de documentação
├── astro.config.ts          # Configuração do Astro
├── wrangler.toml            # Configuração Cloudflare Pages
├── package.json
└── tsconfig.json
```

---

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org) 18+
- [pnpm](https://pnpm.io) (recomendado) — ou npm/yarn

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/vdonoladev/linkInBio.git
cd linkInBio

# 2. Instale as dependências
pnpm install

# 3. Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse [http://localhost:4321](http://localhost:4321) no navegador.

### Scripts disponíveis

| Comando           | Descrição                                          |
| ----------------- | -------------------------------------------------- |
| `pnpm dev`        | Inicia o servidor de desenvolvimento               |
| `pnpm build`      | Gera o build de produção na pasta `dist/`          |
| `pnpm preview`    | Pré-visualiza o build local                        |
| `pnpm check`      | Verifica erros TypeScript com `astro check`        |
| `pnpm cf:preview` | Pré-visualiza localmente via Wrangler (Cloudflare) |

---

## ⚙️ Configuração

Toda a personalização do site está centralizada no arquivo **`src/site-config.ts`**. Cada seção tem comentários explicativos inline.

### Principais seções

```ts
// src/site-config.ts

export const siteConfig: SiteConfig = {
  identity: {
    name: "Seu Nome",
    handle: "@seuhandle",
    bio: "Sua bio aqui",
    avatar: "https://github.com/seuusuario.png",
    location: "Cidade, Estado 🇧🇷",
  },

  siteUrl: "https://seu-dominio.com",

  theme: {
    default: "modern", // "minimal" | "modern" | "neobrutalist"
    colorMode: "system", // "light" | "dark" | "system"
    showThemeSwitcher: true,
    accentColors: {
      // modern: "#6c47ff",
    },
  },

  // Analytics, SEO, OpenGraph, Twitter, Schema.org...
  // Features, Footer, Promo Banner, Exit Intent, Slide-in Card, Floating CTA...
};
```

### Trocando o perfil ativo

No topo de `src/site-config.ts`, troque o import para o perfil desejado:

```ts
// Opções: freelancer | creator | musician | founder | professional | localbusiness
export { pageItems } from "./profiles/freelancer";
```

---

## 👤 Perfis disponíveis

| Perfil          | Ideal para                                  |
| --------------- | ------------------------------------------- |
| `freelancer`    | Desenvolvedores, designers, consultores     |
| `creator`       | YouTubers, streamers, criadores de conteúdo |
| `musician`      | Músicos, bandas, produtores                 |
| `founder`       | Fundadores, empreendedores, startups        |
| `professional`  | Executivos, especialistas corporativos      |
| `localbusiness` | Restaurantes, lojas, serviços locais        |

Cada perfil já vem com blocos de conteúdo pré-configurados como ponto de partida. Basta editar o arquivo `.ts` correspondente em `src/profiles/`.

---

## ☁️ Deploy

### Cloudflare Pages (recomendado)

O projeto já está configurado para deploy na Cloudflare Pages com headers de segurança definidos no `wrangler.toml`.

**Via CLI:**

```bash
# Build + deploy
pnpm build
wrangler pages deploy ./dist
```

**Via GitHub Actions (CI/CD automático):**

Conecte o repositório ao seu projeto na [Cloudflare Dashboard](https://dash.cloudflare.com) e configure:

| Configuração           | Valor        |
| ---------------------- | ------------ |
| Framework preset       | Astro        |
| Build command          | `pnpm build` |
| Build output directory | `dist`       |
| Node.js version        | `18`         |

### Outras plataformas

O build gera arquivos 100% estáticos na pasta `dist/` — compatível com **Vercel**, **Netlify**, **GitHub Pages** ou qualquer CDN.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

O tema base [Zutrabio](https://zutra.gumroad.com/l/zutrabio) é de autoria da [Zutra Agency](https://zutra.agency).

---

<div align="center">

Feito com ☕ por **[Víctor Donola Ferreira](https://github.com/vdonoladev)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-vdonoladev-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/vdonoladev)
[![GitHub](https://img.shields.io/badge/GitHub-vdonoladev-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/vdonoladev)
[![X](https://img.shields.io/badge/X-@donoladev-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/donoladev)

</div>
