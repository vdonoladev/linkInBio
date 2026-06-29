// Profile: Víctor Donola — Desenvolvedor Web & Instrutor de TI
import type {
  PageItem,
  LinkItem,
  SectionHeader,
  Divider,
  TextBlock,
  RichMediaItem,
  SocialProofItem,
  UtilityItem,
  TimelineItem,
  NewsletterInlineItem,
  PriceItem,
} from "@/types/config";

export const pageItems: PageItem[] = [

  // ── Stats ────────────────────────────────────────────────────────────────

  {
    type: "social-proof",
    proofType: "stats",
    stats: [
      { label: "Seguidores", value: "4K+" },
      { label: "Projetos", value: "50+" },
      { label: "Anos de experiência", value: "5+" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  // ── Jornada ──────────────────────────────────────────────────────────────

  { type: "section-header", label: "Minha Jornada" } satisfies SectionHeader,

  {
    type: "timeline",
    label: "Experiências",
    items: [
      {
        date: "2025 — 2026",
        title: "Instrutor de Tecnologia",
        description:
          "Criação de materiais institucionais, workshops de IA e desenvolvimento de sistemas integrados.",
        icon: "lucide:code",
      },
      {
        date: "2024 — Presente",
        title: "Graduando em ADS & Administração",
        description:
          "Formação dupla focada em arquitetura de software, lógica de programação e gestão empresarial.",
        icon: "lucide:school",
      },
      {
        date: "2021 — Presente",
        title: "Desenvolvedor Web Freelancer",
        description:
          "Desenvolvimento de sistemas web, gestão de infraestrutura e projetos pessoais com foco em performance e usabilidade.",
        icon: "lucide:briefcase",
      },
    ],
    enabled: true,
  } satisfies TimelineItem,

  // ── Certificações ─────────────────────────────────────────────────────────

  { type: "section-header", label: "Certificações" } satisfies SectionHeader,

  {
    type: "social-proof",
    proofType: "badges",
    badges: [
      {
        name: "Project Management",
        icon: "simple-icons:google",
        color: "#4285F4",
        url: "https://grow.google/certificates/project-management/",
      },
      {
        name: "AWS Solutions Architect",
        icon: "simple-icons:amazonwebservices",
        color: "#FF9900",
        url: "https://aws.amazon.com/certification/",
      },
      {
        name: "IT Support",
        icon: "simple-icons:google",
        color: "#4285F4",
        url: "https://grow.google/certificates/it-support/",
      },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  // ── Meus Sites ────────────────────────────────────────────────────────────
  // Posição estratégica: depois de "quem sou" → antes de "me siga"
  // Quem chegou até aqui já está interessado — hora de mandar pro trabalho real.

  { type: "section-header", label: "Meus Sites" } satisfies SectionHeader,

  {
    type: "link",
    platform: "website",
    label: "Portfólio",
    url: "https://vdonoladev.com.br",
    highlight: true,
    enabled: true,
    width: "half",
  } satisfies LinkItem,
  {
    type: "link",
    platform: "website",
    label: "Site Pessoal",
    url: "https://me.vdonoladev.com.br",
    enabled: true,
    width: "half",
  } satisfies LinkItem,

  // ── Redes Sociais ─────────────────────────────────────────────────────────

  { type: "section-header", label: "Redes Sociais" } satisfies SectionHeader,

  {
    type: "link",
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/vdonoladev",
    enabled: true,
    width: "half",
  } satisfies LinkItem,
  {
    type: "link",
    platform: "instagram",
    label: "Instagram",
    url: "https://instagram.com/vdonoladev",
    enabled: true,
    width: "half",
  } satisfies LinkItem,
  {
    type: "link",
    platform: "github",
    label: "GitHub",
    url: "https://github.com/vdonoladev",
    enabled: true,
    width: "half",
  } satisfies LinkItem,
  {
    type: "link",
    platform: "x",
    label: "X (Twitter)",
    url: "https://x.com/donoladev",
    enabled: true,
    width: "half",
  } satisfies LinkItem,
  {
    type: "link",
    platform: "reddit",
    label: "Reddit",
    url: "https://www.reddit.com/user/donoladev/",
    enabled: true,
    width: "half",
  } satisfies LinkItem,
  {
    type: "link",
    platform: "telegram",
    label: "Telegram",
    url: "https://t.me/vdonoladev",
    enabled: true,
    width: "half",
  } satisfies LinkItem,
  {
    type: "link",
    platform: "tiktok",
    label: "TikTok",
    url: "https://tiktok.com/@vdonola.dev",
    enabled: true,
    width: "half",
  } satisfies LinkItem,
  {
    type: "link",
    platform: "threads",
    label: "Threads",
    url: "https://threads.net/@vdonoladev",
    enabled: true,
    width: "half",
  } satisfies LinkItem,
  {
    type: "link",
    platform: "twitch",
    label: "Twitch",
    url: "https://twitch.tv/vdonoladev",
    enabled: true,
  } satisfies LinkItem,

  { type: "divider", style: "line" } satisfies Divider,

  {
    type: "link",
    platform: "kofi",
    label: "Buy me a Coffee ☕",
    url: "https://ko-fi.com/vdonoladev",
    highlight: true,
    enabled: true,
  } satisfies LinkItem,
  {
    type: "link",
    platform: "calendly",
    label: "Agende uma chamada",
    url: "https://calendly.com/vdonoladev/30min",
    highlight: true,
    enabled: true,
  } satisfies LinkItem,
  {
    type: "link",
    platform: "email",
    label: "Manda um e-mail",
    url: "mailto:contato@vdonoladev.com.br",
    enabled: true,
  } satisfies LinkItem,

  // ── Trabalhe comigo ───────────────────────────────────────────────────────

  { type: "section-header", label: "Trabalhe comigo" } satisfies SectionHeader,

  {
    type: "text-block",
    style: "bento",
    label: "Aberto a projetos",
    content:
      "Tenho disponibilidade para novos projetos. Se precisar de um dev web ou quer bater um papo sobre tecnologia, é só falar.",
    enabled: true,
  } satisfies TextBlock,

  {
    type: "price",
    label: "Consultoria Rápida",
    price: "R$150",
    period: "sessão",
    description: "60 minutos focados no seu projeto, dúvida técnica ou stack.",
    features: ["Chamada 1:1", "Plano de ação prático", "Gravação inclusa"],
    buttonLabel: "Agendar sessão",
    url: "https://calendly.com/vdonoladev/30min",
    enabled: false,
    width: "half",
  } satisfies PriceItem,

  {
    type: "price",
    label: "Suporte Mensal",
    price: "R$800",
    period: "mês",
    description: "Suporte técnico contínuo para o seu produto ou equipe.",
    features: ["Prioridade no atendimento", "Sincronizações semanais", "Revisões ilimitadas"],
    buttonLabel: "Falar comigo",
    url: "mailto:contato@vdonoladev.com.br",
    enabled: false,
    width: "half",
  } satisfies PriceItem,

  // ── Depoimento (ativar quando tiver real) ─────────────────────────────────

  {
    type: "social-proof",
    proofType: "testimonial",
    quote:
      "Víctor entregou o projeto dentro do prazo, com código limpo e comunicação direta do começo ao fim.",
    author: "Nome do Cliente",
    authorTitle: "Cargo, Empresa",
    authorAvatar: "https://i.pravatar.cc/64?img=12",
    enabled: false,
  } satisfies SocialProofItem,

  // ── Client logos (ativar quando tiver logos reais) ────────────────────────

  {
    type: "social-proof",
    proofType: "client-logos",
    label: "Já trabalhei com",
    logos: [
      { name: "GitHub", icon: "simple-icons:github", color: "#24292e" },
      { name: "Figma", icon: "simple-icons:figma", color: "#F24E1E" },
      { name: "Notion", icon: "simple-icons:notion", color: "#000000" },
      { name: "Vercel", icon: "simple-icons:vercel", color: "#000000" },
      { name: "Linear", icon: "simple-icons:linear", color: "#5E6AD2" },
    ],
    enabled: false,
  } satisfies SocialProofItem,

  // ── Awards (ativar quando tiver prêmios reais) ────────────────────────────

  {
    type: "social-proof",
    proofType: "awards",
    label: "Prêmios",
    awards: [
      { name: "Awwwards Site of the Day", org: "Awwwards", year: "2024" },
      { name: "CSS Design Awards Winner", org: "CSSDA", year: "2023" },
      { name: "Webby Award Honoree", org: "The Webby Awards", year: "2023" },
    ],
    enabled: false,
  } satisfies SocialProofItem,

  // ── Indicações ────────────────────────────────────────────────────────────

  { type: "section-header", label: "Indicações" } satisfies SectionHeader,

  {
    type: "link",
    platform: "youtube",
    label: "Playlists do YouTube",
    url: "https://www.youtube.com/@vdonoladev/playlists",
    enabled: true,
  } satisfies LinkItem,

  {
    type: "link",
    platform: "spotify",
    label: "Playlists do Spotify",
    url: "https://open.spotify.com/user/31ij337hse5e7wi5omfqslrd6j7e/playlists",
    enabled: true,
  } satisfies LinkItem,

  // ── Newsletter (desativada — ativar junto com o header abaixo) ────────────

  { type: "section-header", label: "Newsletter" } satisfies SectionHeader,

  {
    type: "newsletter-inline",
    label: "Receba conteúdo direto ao ponto",
    description:
      "Dicas de desenvolvimento, ferramentas e recursos que uso no dia a dia — toda Sexta-feira.",
    placeholder: "seu@email.com",
    buttonLabel: "Inscrever",
    actionUrl: "https://vdonoladev.substack.com/subscribe",
    enabled: false,
  } satisfies NewsletterInlineItem,

  // ── Utilidades ────────────────────────────────────────────────────────────

  { type: "section-header", label: "Utilidades" } satisfies SectionHeader,

  {
    type: "utility",
    utilityType: "clock",
    label: "Meu horário local",
    timezone: "America/Sao_Paulo",
    enabled: true,
  } satisfies UtilityItem,
  {
    type: "utility",
    utilityType: "map",
    label: "Me encontre aqui",
    address: "Petrópolis, Brazil",
    mapUrl: "https://maps.google.com/?q=Petrópolis,Brazil",
    enabled: true,
  } satisfies UtilityItem,
  {
    type: "utility",
    utilityType: "vcard",
    label: "Salvar meu contato",
    description: "Me adicione nos contatos do celular",
    enabled: true,
  } satisfies UtilityItem,
  {
    type: "utility",
    utilityType: "qr-code",
    label: "Escaneie para visitar",
    description: "Compartilhe esta página offline",
    qrData: "https://links.vdonoladev.com.br",
    enabled: true,
  } satisfies UtilityItem,
  {
    type: "utility",
    utilityType: "coupon",
    label: "Desconto exclusivo",
    description: "Use no checkout",
    code: "VDONOLA20",
    enabled: false,
  } satisfies UtilityItem,
];