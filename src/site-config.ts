import type { SiteConfig } from "./types/config";

// ─────────────────────────────────────────────────────────────────────────────
// PROFILE — change the active profile here
// Options: freelancer | creator | musician | founder | professional | localbusiness
// ─────────────────────────────────────────────────────────────────────────────
export { pageItems } from "./profiles/freelancer";

// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const siteConfig: SiteConfig = {
  // ── Identity ────────────────────────────────────────────────────────────────
  identity: {
    type: "person",
    name: "Víctor Donola Ferreira",
    handle: "@vdonoladev",
    bio: "Dev full-stack e instrutor de TI. Petrópolis, RJ.",
    bioExtended: "",
    avatar: "https://github.com/vdonoladev.png",
    avatarAlt: "Foto de Víctor",
    banner:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    location: "Petrópolis, RJ 🇧🇷",
    pronouns: "he/him",
    timezone: "America/Sao_Paulo",
    verificationLinks: [],
  },

  // ── Site URL ─────────────────────────────────────────────────────────────────
  siteUrl: "https://links.vdonoladev.com.br",

  // ── Promo Banner ─────────────────────────────────────────────────────────────
  promo: {
    enabled: false,
    message: "✨ Built with Zutrabio — the link-in-bio Astro theme.",
    cta: {
      label: "Get it free →",
      url: "https://zutra.gumroad.com/l/zutrabio",
    },
    dismissible: true,
  },

  // ── Theme ────────────────────────────────────────────────────────────────────
  theme: {
    default: "modern",
    colorMode: "system",
    accentColors: {
      // minimal:      "#18181b",
      // modern:       "#6c47ff",
      // neobrutalist: "#ff6b35",
    },
    showThemeSwitcher: true,
  },

  // ── Analytics ────────────────────────────────────────────────────────────────
  analytics: {
    gtmId: "",
    cloudflareBeacon: "",
    umamiWebsiteId: "",
    umamiSrc: "https://analytics.umami.is/script.js",
    plausibleDomain: "",
    plausibleSrc: "https://plausible.io/js/script.js",
    fathomSiteId: "",
  },

  // ── SEO ──────────────────────────────────────────────────────────────────────
  seo: {
    title: "Víctor — Desenvolvedor",
    titleTemplate: "%s | Víctor",
    description:
      "Dev full-stack, instrutor de TI e estudante de ADS & Administração. Baseado em Petrópolis, RJ.",
    keywords: [
      "desenvolvedor web",
      "full-stack",
      "instrutor de TI",
      "freelancer",
      "Petrópolis",
      "vdonoladev",
      "JavaScript",
      "Node.js",
      "PHP",
    ],
    canonical: "",
    robots: "index, follow",
    excludeFromSitemap: [],
    alternateLanguages: [],
  },

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    image: "/og/og-default.svg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Víctor Donola — Desenvolvedor",
    locale: "pt_BR",
    type: "profile",
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    creator: "@donoladev",
    site: "@donoladev",
  },

  // ── Schema.org ───────────────────────────────────────────────────────────────
  schema: {
    enabled: true,
    person: {
      name: "Víctor Donola Ferreira",
      jobTitle: "Desenvolvedor Web & Instrutor de TI",
      worksFor: "",
      knowsAbout: [
        "Desenvolvimento Web",
        "Front-end",
        "Back-end",
        "JavaScript",
        "Node.js",
        "PHP",
        "Suporte de TI",
      ],
      alumniOf: "Estácio de Sá, Gran Faculdade",
      award: "",
      sameAs: [
        "https://twitter.com/donoladev",
        "https://github.com/vdonoladev",
        "https://linkedin.com/in/vdonoladev",
      ],
    },
    organization: {
      legalName: "",
      foundingDate: "",
      numberOfEmployees: 0,
      logo: "",
      sameAs: [],
    },
  },

  // ── Geo Meta ─────────────────────────────────────────────────────────────────
  geo: {
    enabled: false, // ativar se quiser meta tags de localização
    region: "BR-RJ",
    placename: "Petrópolis, Rio de Janeiro",
    latitude: -22.5057,
    longitude: -43.1791,
    icbm: "-22.5057, -43.1791",
  },

  // ── Features ─────────────────────────────────────────────────────────────────
  features: {
    showPoweredBy: false,
    showLastUpdated: false,
    showLinkCount: false,
    animateCards: true,
    avatarRing: true,
    skeletonLoading: true,
    showCopyLink: false,
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    copyright: "© 2026 Víctor Donola Ferreira. Todos os direitos reservados.",
    links: [],
  },

  // ── Exit-Intent Popup ────────────────────────────────────────────────────────
  exitIntent: {
    enabled: false,
    armDelay: 3000,
    bgImage:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f664?w=1200&q=80",
    title: "Before you go…",
    subtitle:
      "Zutrabio is free and open-source. If you like it, check out our other Astro themes and free resources for creators.",
    cta: {
      label: "Browse Free Resources →",
      url: "https://zutra.agency/recursos",
    },
    secondaryCta: {
      label: "More Astro Themes",
      url: "https://astro.build/themes/author/2995",
    },
  },

  // ── Slide-In Card ─────────────────────────────────────────────────────────────
  slideInCard: {
    enabled: true,
    delay: 7000,
    side: "right",
    message:
      "Gostou do que viu? Tenho outros projetos que você pode adorar. ✨",
    cta: {
      label: "Veja-os aqui",
      url: "https://github.com/vdonoladev/",
    },
  },

  // ── Floating CTA Button ───────────────────────────────────────────────────────
  floatingCta: {
    enabled: true,
    label: "Vamos conversar",
    icon: "lucide:message-circle",
    href: "mailto:contato@vdonoladev.com.br",
  },
};