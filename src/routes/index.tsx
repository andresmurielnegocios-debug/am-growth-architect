import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Megaphone, Filter, LayoutTemplate, Workflow, FileText, TrendingUp,
  Check, X, Plus, Minus, MessageCircle, ArrowRight, Calendar, Video,
  Edit3, Film, Bot, Sparkles,
} from "lucide-react";
import andresAsset from "@/assets/andres-muriel.png.asset.json";
import logoAsset from "@/assets/am-logo-v2.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andrés Muriel — Estratega Digital & Growth Partner" },
      { name: "description", content: "No ayudo a negocios a conseguir likes. Ayudo a negocios a conseguir clientes. Sistemas de crecimiento con publicidad, embudos y automatización." },
      { property: "og:title", content: "Andrés Muriel — Estratega Digital" },
      { property: "og:description", content: "Sistemas de crecimiento digital para generar clientes de forma constante." },
      { property: "og:image", content: andresAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Page,
});

const WA = "https://wa.me/573244482657";

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <About />
      <Plans />
      <Services />
      <IdealClient />
      <FAQ />
      <NotDo />
      <FinalCTA />
      <Footer />
      <FloatingWA />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h(); window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-wide">ANDRÉS MURIEL</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#inicio" className="hover:text-foreground transition">Inicio</a>
          <a href="#planes" className="hover:text-foreground transition">Planes</a>
          <a href="#servicios" className="hover:text-foreground transition">Servicios</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </div>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">
          Hablar ahora
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1 text-xs text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            Estratega Digital & Growth Partner
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Andrés <span className="text-gold">Muriel</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-foreground/90 leading-snug font-medium max-w-xl">
            No ayudo a negocios a conseguir likes. Ayudo a negocios a conseguir <span className="text-gold">clientes</span>.
          </p>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Construyo sistemas de crecimiento mediante publicidad digital, embudos de venta, automatización y contenido estratégico para generar oportunidades de negocio de forma constante.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3.5 rounded-lg font-semibold hover:opacity-90 transition">
              Quiero más clientes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#planes" className="inline-flex items-center gap-2 border border-gold text-foreground px-6 py-3.5 rounded-lg font-semibold hover:bg-gold/10 transition">
              Ver planes
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 hero-glow scale-125"></div>
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold/20 to-transparent blur-3xl"></div>
            <img
              src={andresAsset.url}
              alt="Andrés Muriel, Estratega Digital"
              className="relative w-full h-full object-cover rounded-2xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const lines = [
    "Muchos negocios tienen un excelente producto o servicio.",
    "Pero no tienen un sistema para atraer clientes de forma constante.",
    "Publican contenido sin estrategia.",
    "Invierten en publicidad sin resultados claros.",
    "Dependen únicamente de recomendaciones.",
    "Y terminan perdiendo oportunidades de venta cada semana.",
  ];
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-gold mb-8">El problema</p>
        <div className="space-y-5">
          {lines.map((l, i) => (
            <p key={i} className="text-2xl md:text-3xl font-semibold leading-snug text-foreground/85">
              {l}
            </p>
          ))}
        </div>
        <p className="mt-14 text-2xl md:text-3xl font-bold leading-snug">
          El problema no es tu producto. <span className="text-gold">El problema es la falta de un sistema de crecimiento.</span>
        </p>
      </div>
    </section>
  );
}

function Solution() {
  const items = [
    { icon: Megaphone, label: "Publicidad Digital" },
    { icon: Filter, label: "Embudos de Venta" },
    { icon: LayoutTemplate, label: "Landing Pages" },
    { icon: Workflow, label: "Automatización" },
    { icon: FileText, label: "Contenido Estratégico" },
    { icon: TrendingUp, label: "Optimización de Conversión" },
  ];
  return (
    <section className="py-32 px-6 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Mi solución</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ayudo a negocios a construir <span className="text-gold">sistemas de crecimiento</span> reales.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-background p-8 flex items-start gap-4 hover:bg-card transition">
              <Icon className="w-6 h-6 text-gold shrink-0 mt-1 stroke-[1.5]" />
              <span className="text-lg font-medium">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-16 text-xl md:text-2xl font-medium text-foreground/85 max-w-3xl">
          No vendo anuncios. No vendo seguidores. No vendo humo. <span className="text-gold">Construyo sistemas para generar oportunidades de negocio.</span>
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = ["Anuncio", "Contenido", "Landing / WhatsApp", "Captura", "Seguimiento", "Agendamiento", "Venta", "Fidelización"];
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4">El sistema</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Cómo funciona el sistema</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s} className="relative border border-border rounded-xl p-5 bg-card">
              <div className="text-xs text-gold font-mono mb-2">{String(i + 1).padStart(2, "0")}</div>
              <div className="text-base font-semibold">{s}</div>
            </div>
          ))}
        </div>
        <p className="mt-16 text-xl md:text-2xl font-medium text-center text-foreground/85">
          Cada paso tiene un único objetivo: <span className="text-gold">convertir atención en clientes.</span>
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-32 px-6 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="relative aspect-square max-w-sm">
            <div className="absolute inset-0 hero-glow"></div>
            <img src={andresAsset.url} alt="Andrés Muriel" className="relative w-full h-full object-cover rounded-2xl border border-border" />
          </div>
        </div>
        <div className="lg:col-span-3 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Sobre mí</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Estrategia, no suerte.</h2>
          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>Soy Andrés Muriel, Estratega Digital & Growth Partner. Mi misión es ayudar a negocios, emprendedores y empresas a construir sistemas de crecimiento que les permitan atraer más clientes, aumentar oportunidades de venta y escalar de manera estratégica.</p>
            <p>A través de publicidad digital, embudos de venta, automatización, contenido estratégico y optimización de conversiones, diseño procesos que convierten la atención en resultados.</p>
            <p>Creo que el crecimiento de un negocio no debe depender de la suerte ni de publicaciones ocasionales. Debe apoyarse en una estrategia clara, medible y enfocada en generar oportunidades reales.</p>
            <p className="text-foreground font-medium">Por eso no me enfoco únicamente en gestionar campañas. Me enfoco en construir sistemas que impulsen el crecimiento.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    badge: "Bronze",
    name: "Bronze Growth",
    cop: "$900.000",
    usd: "USD $265",
    target: "Ticket promedio entre $30.000 y $150.000",
    features: [
      "1 video UGC estratégico (grabación y edición profesional)",
      "1 video directo con embudo de ventas",
      "1 carrusel de alto impacto con estructura de ventas",
      "2 imágenes estratégicas orientadas a ventas",
      "Configuración y optimización de campañas Meta Ads",
      "Seguimiento vía WhatsApp durante todo el mes",
      "1 reporte mensual",
      "1 reunión estratégica mensual (30–45 min)",
    ],
    ideal: ["Barberías", "Cafeterías", "Restaurantes", "Florerías", "Salones de belleza", "Heladerías"],
  },
  {
    badge: "Silver",
    name: "Silver Growth",
    cop: "$1.400.000",
    usd: "USD $412",
    target: "Ticket promedio entre $150.000 y $300.000",
    features: [
      "2 videos UGC estratégicos",
      "2 videos directos con embudo de ventas",
      "3 carruseles de alto impacto",
      "2 imágenes estratégicas de ventas",
      "Configuración y optimización de campañas Meta Ads",
      "Seguimiento vía WhatsApp durante todo el mes",
      "2 reportes quincenales",
      "1 reunión estratégica mensual (30–45 min)",
    ],
    ideal: ["Odontólogos", "Gimnasios", "Academias", "Inmobiliarias", "Clínicas estéticas", "Abogados"],
  },
  {
    badge: "Gold",
    name: "Gold Growth",
    cop: "$2.300.000",
    usd: "USD $676",
    target: "Ticket promedio entre $300.000 y $600.000",
    featured: true,
    features: [
      "3 videos UGC estratégicos",
      "2 videos directos con embudo de ventas",
      "1 Reel con música viral",
      "3 carruseles de alto impacto",
      "2 imágenes estratégicas de ventas",
      "1 imagen Bold Offer de alta conversión",
      "Meta Ads + Estrategia de remarketing",
      "Seguimiento vía WhatsApp todo el mes",
      "2 reportes quincenales",
      "1 reunión estratégica mensual",
    ],
    ideal: ["Constructoras", "Clínicas especializadas", "Marcas personales", "Empresas B2B", "Concesionarios"],
  },
  {
    badge: "Black",
    name: "Black Growth Partner",
    cop: "$4.500.000",
    usd: "USD $1.324",
    target: "Ticket promedio superior a $600.000",
    intro: "Incluye todo lo del plan Gold más:",
    features: [
      "2 videos orgánicos estratégicos por semana",
      "Estrategia para historias diarias",
      "Gestión estratégica de contenido orgánico",
      "Landing Page profesional de conversión",
      "Automatización de WhatsApp Business",
      "Flujo de seguimiento para acelerar cierres",
      "Dashboard de métricas y rendimiento",
      "Auditoría mensual de resultados",
      "Optimización continua del embudo",
    ],
    ideal: ["Clínicas premium", "Franquicias", "Constructoras grandes", "Marcas consolidadas", "Servicios de alto valor"],
  },
];

function Plans() {
  return (
    <section id="planes" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Planes</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Planes de <span className="text-gold">crecimiento digital</span></h2>
          <p className="mt-4 text-muted-foreground text-lg">Elige el plan según el ticket promedio y la etapa de tu negocio.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-7 border transition ${
                p.featured
                  ? "border-gold bg-card gold-glow"
                  : "border-border bg-card hover:border-gold/40"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-7 text-[10px] tracking-[0.2em] uppercase bg-gold text-primary-foreground px-2.5 py-1 rounded-full font-bold">
                  Recomendado
                </div>
              )}
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{p.badge}</div>
              <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground mb-6 min-h-[32px]">{p.target}</p>

              <div className="mb-6">
                <div className="text-3xl font-extrabold text-gold">{p.cop}<span className="text-sm text-muted-foreground font-medium"> COP / mes</span></div>
                <div className="text-xs text-muted-foreground mt-1">{p.usd}</div>
              </div>

              {p.intro && <p className="text-sm text-foreground/80 mb-3 font-medium">{p.intro}</p>}

              <ul className="space-y-3 mb-6 text-sm text-muted-foreground flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="text-xs text-muted-foreground border-t border-border pt-4 mb-5">
                <div className="font-semibold text-foreground/80 mb-1.5">Ideal para:</div>
                <div>{p.ideal.join(" · ")}</div>
              </div>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold transition ${
                  p.featured
                    ? "bg-gold text-primary-foreground hover:opacity-90"
                    : "border border-gold text-foreground hover:bg-gold/10"
                }`}
              >
                Quiero este plan
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground max-w-3xl">
          <span className="text-gold font-semibold">Fondo de Optimización Creativa:</span> $100.000 COP (USD $29). Reserva opcional para refrescar creativos cuando la estrategia lo requiere — incluye jornada adicional de grabación y edición profesional.
        </p>
      </div>
    </section>
  );
}

const services = [
  { icon: Calendar, name: "Booking Pro™", sub: "Sistema profesional de agendamiento", price: "$600.000 COP", priceUsd: "USD $176", note: "Mantenimiento: $65.000 COP / mes", features: ["Reservas online", "Confirmaciones automáticas", "Gestión de horarios", "Optimizado para móviles"] },
  { icon: LayoutTemplate, name: "Landing Page", sub: "Página profesional de conversión", price: "$550.000 COP", priceUsd: "USD $162", features: ["Diseño profesional", "Copywriting persuasivo", "Integración con WhatsApp", "Optimizada para conversión"] },
  { icon: Video, name: "Authority Video™", sub: "Video estratégico de autoridad", price: "$430.000 COP", priceUsd: "USD $126", features: ["Guion estratégico", "Estructura de embudo", "Grabación y edición profesional", "Copy persuasivo"] },
  { icon: Edit3, name: "Social Edit™", sub: "Edición profesional para redes", price: "$150.000 COP", priceUsd: "USD $44", features: ["Audio + música libre", "Subtítulos", "Cortes dinámicos", "Adaptación a redes"] },
  { icon: Sparkles, name: "Creator Elite™", sub: "Edición premium de alto impacto", price: "$250.000 COP", priceUsd: "USD $74", features: ["Diseño sonoro", "Subtítulos dinámicos", "B-Rolls + efectos", "Optimización de retención"] },
  { icon: Film, name: "Creator Elite™ Long Form", sub: "Videos de más de 4 minutos", price: "$320.000 COP", priceUsd: "USD $94", features: ["Todo lo de Creator Elite", "Edición avanzada", "Optimización narrativa", "Retención para video largo"] },
  { icon: Bot, name: "WhatsApp Sales System™", sub: "Automatización estratégica de ventas", price: "Según alcance", priceUsd: "", features: ["Automatización de respuestas", "Captación de prospectos", "Flujos de seguimiento", "Integración con campañas"] },
];

function Services() {
  return (
    <section id="servicios" className="py-32 px-6 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Servicios premium</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Servicios individuales</h2>
          <p className="mt-4 text-muted-foreground text-lg">¿No necesitas un plan completo? Contrata únicamente lo que tu negocio requiere.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, ...s }) => (
            <div key={s.name} className="rounded-2xl border border-border bg-background p-7 hover:border-gold/40 transition flex flex-col">
              <Icon className="w-6 h-6 text-gold stroke-[1.5] mb-5" />
              <h3 className="text-xl font-bold">{s.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">{s.sub}</p>
              <div className="mb-5">
                <div className="text-2xl font-extrabold text-gold">{s.price}</div>
                {s.priceUsd && <div className="text-xs text-muted-foreground mt-0.5">{s.priceUsd}</div>}
                {s.note && <div className="text-xs text-muted-foreground mt-1.5">{s.note}</div>}
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5 stroke-[2.5]" /><span>{f}</span></li>
                ))}
              </ul>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all">
                Cotizar este servicio <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IdealClient() {
  const items = [
    "Tienes un producto o servicio validado.",
    "Puedes atender nuevos clientes.",
    "Respondes mensajes rápidamente.",
    "Quieres crecer de forma profesional.",
    "Estás dispuesto a invertir en marketing.",
    "Buscas resultados a largo plazo.",
  ];
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Cliente ideal</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">¿Eres un cliente ideal?</h2>
        <ul className="space-y-5">
          {items.map((i) => (
            <li key={i} className="flex items-center gap-4 text-lg md:text-xl text-foreground/90 border-b border-border pb-5">
              <Check className="w-5 h-5 text-gold shrink-0 stroke-[2.5]" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const faqs = [
  { q: "¿La inversión publicitaria está incluida?", a: "Sí. Cada plan contempla la ejecución de la estrategia publicitaria necesaria para alcanzar los objetivos definidos." },
  { q: "¿Cuánto tiempo tarda en verse resultados?", a: "Depende del mercado, la oferta y la competencia. Normalmente comenzamos a recopilar datos y optimizar campañas durante las primeras semanas." },
  { q: "¿Garantizas ventas?", a: "No. Nadie puede garantizar ventas específicas. Lo que sí garantizo es la implementación profesional de una estrategia enfocada en generar oportunidades de negocio y maximizar las probabilidades de éxito." },
  { q: "¿Trabajas con cualquier negocio?", a: "No. Trabajo principalmente con negocios que tienen capacidad de atender nuevos clientes y que desean crecer de manera profesional." },
  { q: "¿Necesito una Landing Page?", a: "No siempre. Sin embargo, en muchos casos una Landing Page permite aumentar la conversión y mejorar la calidad de los prospectos." },
  { q: "¿La Landing Page está incluida?", a: "Únicamente en el plan Black Growth Partner. También puede contratarse como servicio independiente." },
  { q: "¿Puedo contratar solo un servicio?", a: "Sí. Puedes contratar únicamente una Landing Page, un Video Estratégico, una Automatización o cualquiera de los servicios premium." },
  { q: "¿Qué es el Fondo de Optimización Creativa?", a: "Es una reserva destinada a la creación de nuevos creativos cuando la estrategia requiere refrescar anuncios para mantener o mejorar el rendimiento." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-32 px-6 border-t border-border bg-surface">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">Preguntas frecuentes</h2>
        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="text-base md:text-lg font-semibold group-hover:text-gold transition">{f.q}</span>
                  {isOpen ? <Minus className="w-5 h-5 text-gold shrink-0" /> : <Plus className="w-5 h-5 text-muted-foreground shrink-0" />}
                </button>
                {isOpen && (
                  <p className="pb-6 text-muted-foreground leading-relaxed text-base max-w-2xl fade-up">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NotDo() {
  const items = [
    "No vendo seguidores.",
    "No utilizo estrategias engañosas.",
    "No prometo resultados irreales.",
    "No hago publicaciones diarias como Community Manager.",
    "No trabajo con negocios que no puedan atender nuevos clientes.",
  ];
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Lo que no hago</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">Claridad antes que promesas.</h2>
        <ul className="space-y-4">
          {items.map((i) => (
            <li key={i} className="flex items-center gap-4 text-lg text-muted-foreground">
              <X className="w-5 h-5 text-foreground/40 shrink-0 stroke-[2]" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 px-6 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background"></div>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 hero-glow opacity-60"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
          Tu negocio no necesita más publicaciones.
        </h2>
        <p className="mt-6 text-2xl md:text-3xl font-bold text-gold leading-snug">
          Necesita un sistema que genere oportunidades de venta.
        </p>
        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Si quieres atraer más clientes, mejorar tus resultados y construir un proceso de crecimiento sostenible, conversemos. Analizaré tu negocio y te recomendaré la estrategia más adecuada según tus objetivos.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
        >
          Quiero una estrategia para mi negocio
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="font-bold text-lg">Andrés Muriel</div>
          <div className="text-sm text-muted-foreground">Estratega Digital & Growth Partner</div>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-muted-foreground">Publicidad Digital · Embudos · Automatización · Landing Pages</p>
          <p className="mt-3 text-sm italic text-foreground/70 max-w-md md:ml-auto">"No ayudo a negocios a conseguir likes. Ayudo a negocios a conseguir clientes."</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} Andrés Muriel.</span>
        <span>Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-gold text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)] hover:scale-105 transition"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
    </a>
  );
}
