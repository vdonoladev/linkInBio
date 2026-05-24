// Profile: Freelancer / Consultor — Jane Doe, diseñadora y dev
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
  // { type: "section-header", label: "Redes Sociais" } satisfies SectionHeader,

  {
    type: "social-proof",
    proofType: "stats",
    stats: [
      { label: "Seguidores", value: "4K+" },
      { label: "Projetos", value: "50+" },
      { label: "Anos de experiência", value: "11" },
      // { label: "Países", value: "1" },
    ],
    enabled: true,
  } satisfies SocialProofItem,

  {
    type: "social-proof",
    proofType: "testimonial",
    quote:
      "Jane is an exceptional designer who truly understands user needs. She delivered our rebrand in record time and the results exceeded every expectation.",
    author: "Carlos Méndez",
    authorTitle: "CEO, Acme Corp",
    authorAvatar: "https://i.pravatar.cc/64?img=12",
    enabled: false,
  } satisfies SocialProofItem,

  {
    type: "social-proof",
    proofType: "client-logos",
    label: "Trusted by",
    logos: [
      { name: "GitHub", icon: "simple-icons:github", color: "#24292e" },
      { name: "Figma", icon: "simple-icons:figma", color: "#F24E1E" },
      { name: "Notion", icon: "simple-icons:notion", color: "#000000" },
      { name: "Vercel", icon: "simple-icons:vercel", color: "#000000" },
      { name: "Linear", icon: "simple-icons:linear", color: "#5E6AD2" },
    ],
    enabled: false,
  } satisfies SocialProofItem,

  { type: "section-header", label: "Certificações" } satisfies SectionHeader,

  {
    type: "social-proof",
    proofType: "badges",
    // label: "Certificações",
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

  {
    type: "social-proof",
    proofType: "awards",
    label: "Awards",
    awards: [
      { name: "Awwwards Site of the Day", org: "Awwwards", year: "2024" },
      { name: "CSS Design Awards Winner", org: "CSSDA", year: "2023" },
      { name: "Webby Award Honoree", org: "The Webby Awards", year: "2023" },
    ],
    enabled: false,
  } satisfies SocialProofItem,

  { type: "section-header", label: "Text blocks" } satisfies SectionHeader,

  {
    type: "text-block",
    style: "announcement",
    label: "New course dropping soon!",
    content:
      "Enroll before June 30 and get 40% off with code <strong>EARLY40</strong>.",
    enabled: false,
  } satisfies TextBlock,

  {
    type: "text-block",
    style: "bento",
    label: "Currently building",
    content:
      "A design system for Latin American startups. If you're interested in collaborating, <a href='mailto:hello@janedoe.com'>reach out</a>.",
    enabled: false,
  } satisfies TextBlock,

  // { type: "section-header", label: "Projetos" } satisfies SectionHeader,

  {
    type: "rich-media",
    mediaType: "youtube-video",
    label: "Latest tutorial",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "How I design landing pages in 30 minutes",
    enabled: false,
  } satisfies RichMediaItem,

  {
    type: "rich-media",
    mediaType: "image-gallery",
    label: "Portfólio",
    images: [
      { src: "https://picsum.photos/seed/a1/400/400", alt: "Project 1" },
      { src: "https://picsum.photos/seed/b2/400/400", alt: "Project 2" },
      { src: "https://picsum.photos/seed/c3/400/400", alt: "Project 3" },
      { src: "https://picsum.photos/seed/d4/400/400", alt: "Project 4" },
      { src: "https://picsum.photos/seed/e5/400/400", alt: "Project 5" },
      { src: "https://picsum.photos/seed/f6/400/400", alt: "Project 6" },
    ],
    description: "Selected work — 2022–2024",
    enabled: false,
  } satisfies RichMediaItem,

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
        title:
          "Graduando em Análise e Desenvolvimento de Sistemas / Administração",
        description:
          "Formação dupla focada em arquitetura de software, lógica e gestão empresarial.",
        icon: "lucide:school",
      },
      {
        date: "2021 — Presente",
        title: "Desenvolvedor Web",
        description:
          "Focado no desenvolvimento de sitemas web, gestão de infraestrutura e projetos pessoais.",
        icon: "lucide:briefcase",
      },
    ],
    enabled: true,
  } satisfies TimelineItem,

  { type: "section-header", label: "Trabalhe comigo" } satisfies SectionHeader,

  {
    type: "price",
    label: "Strategy Session",
    price: "$150",
    period: "session",
    description: "A 60-minute deep dive into your project or brand strategy.",
    features: ["1:1 Video Call", "Actionable Plan", "Recording included"],
    buttonLabel: "Book Session",
    url: "https://calendly.com/janedoe/strategy",
    enabled: false,
    width: "half",
  } satisfies PriceItem,

  {
    type: "price",
    label: "Monthly Retainer",
    price: "$2k",
    period: "month",
    description: "Ongoing design and development support for your team.",
    features: ["Priority Support", "Weekly Syncs", "Unlimited Edits"],
    buttonLabel: "Inquire Now",
    url: "mailto:hello@janedoe.com",
    enabled: false,
    width: "half",
  } satisfies PriceItem,

  { type: "section-header", label: "Newsletter" } satisfies SectionHeader,

  {
    type: "newsletter-inline",
    label: "Junte-se ao Círculo Íntimo",
    description:
      "Dicas de desenvolvimento e recursos para desenvolvedores — toda Sexta-feira.",
    placeholder: "your@email.com",
    buttonLabel: "Inscreva-se",
    actionUrl: "https://vdonoladev.substack.com/subscribe",
    enabled: false,
  } satisfies NewsletterInlineItem,

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
    url: "https://calendly.com/vdonoladev",
    highlight: true,
    enabled: true,
  } satisfies LinkItem,
  {
    type: "link",
    platform: "email",
    label: "Me envie um e-mail",
    url: "mailto:contato.victordonolaferreira@outlook.com",
    enabled: true,
  } satisfies LinkItem,

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
    utilityType: "coupon",
    label: "Get 20% off",
    description: "Use at checkout on my Gumroad store",
    code: "JANEDOE20",
    enabled: false,
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
    description: "Me adicione aos seus contatos do celular",
    enabled: false,
  } satisfies UtilityItem,
  {
    type: "utility",
    utilityType: "qr-code",
    label: "Escaneie para visitar",
    description: "Compartilhe esta página offline",
    qrData: "https://links.vdonoladev.com.br",
    enabled: true,
  } satisfies UtilityItem,
];
