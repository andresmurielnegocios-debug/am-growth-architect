import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react";
import {
  Megaphone, Filter, LayoutTemplate, Workflow, FileText, TrendingUp,
  Check, X, Plus, Minus, MessageCircle, ArrowRight, ArrowUpRight, Calendar, Video,
  Edit3, Film, Bot, Sparkles, Search, Play, ChevronLeft, ChevronRight, Instagram, Zap,
} from "lucide-react";
import andresAsset from "@/assets/andres-muriel.png.asset.json";

/* WhatsApp glyph (official-style) */
function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.89.5 3.74 1.45 5.36L5 27l5.78-1.51a10.66 10.66 0 0 0 5.24 1.37h.01c5.89 0 10.7-4.8 10.7-10.7s-4.81-10.83-10.71-10.83zm6.27 16.97a8.84 8.84 0 0 1-6.27 2.59h-.01a8.86 8.86 0 0 1-4.5-1.23l-.32-.19-3.34.87.89-3.25-.21-.33A8.85 8.85 0 0 1 7.18 16.03c0-4.88 3.97-8.85 8.85-8.85a8.86 8.86 0 0 1 8.85 8.85c0 4.88-3.97 8.85-8.85 8.85h.26z"/>
    </svg>
  );
}

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const, delay: i * 0.08 } }),
};

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Plans />
      <Possibilities />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWA />
    </div>
  );
}

/* ───────────────── NAV ───────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h(); window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-xl border-b border-black/5" : "bg-cream"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <a href="#inicio" className="flex items-center gap-2 text-ink">
          <span className="font-display font-extrabold text-xl tracking-tightest">muriel<span className="text-gold">.</span></span>
        </a>
        <div className="hidden md:flex items-center justify-center gap-9 text-[13px] text-ink font-semibold">
          {[
            ["Inicio", "#inicio"],
            ["Sobre mí", "#sobre-mi"],
            ["Servicios", "#servicios"],
            ["Planes", "#planes"],
            ["Contacto", "#contacto"],
          ].map(([l, h]) => (
            <a key={l} href={h} className="hover:text-gold transition-colors relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gold transition-all duration-300" />
            </a>
          ))}
        </div>
        <a href={WA} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 bg-ink text-cream rounded-full px-4 py-2 text-xs font-semibold hover:bg-ink/90 transition">
          Hablar conmigo <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.nav>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section id="inicio" ref={ref} className="relative pt-16 bg-cream text-ink overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-0">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 items-start">
          {/* Left content */}
          <div className="relative pt-6 lg:pt-10">
            <motion.div
              initial="hidden" animate="show" custom={0} variants={fadeUp}
              className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-ink/60 mb-8"
            >
              <span className="font-mono">01</span>
              <span className="w-8 h-px bg-ink/30" />
              <span>Estratega · Growth Partner</span>
            </motion.div>

            <motion.h1
              initial="hidden" animate="show" custom={1} variants={fadeUp}
              className="font-display font-extrabold tracking-tightest leading-[0.88] text-[64px] sm:text-[88px] lg:text-[124px]"
            >
              <span className="relative inline-block">
                ANDRÉS
                <svg
                  aria-hidden viewBox="0 0 220 60"
                  className="absolute -right-2 -top-3 w-[55%] text-gold pointer-events-none"
                >
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1.4, ease: "easeInOut" }}
                    d="M5 35 C 55 5, 130 5, 200 30 C 175 40, 110 50, 50 45"
                    fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />MURIEL
            </motion.h1>

            <motion.div
              initial="hidden" animate="show" custom={2} variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a href={WA} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 bg-ink text-cream px-5 py-3 rounded-full text-sm font-semibold hover:bg-ink/90 transition">
                Quiero más clientes
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
              <a href="#planes" className="inline-flex items-center gap-2 border border-ink/20 text-ink px-5 py-3 rounded-full text-sm font-semibold hover:bg-white/60 transition">
                Ver planes
              </a>
            </motion.div>

          </div>


          {/* Right image with cream stat */}
          <div className="relative lg:-mr-6">
            <motion.div
              style={{ scale }}
              className="relative aspect-[3/4] w-full max-w-[520px] ml-auto rounded-t-[180px] overflow-hidden bg-ink/5"
            >
              <motion.img
                style={{ y }}
                src={andresAsset.url}
                alt="Andrés Muriel"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </motion.div>




            {/* Round badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute top-8 left-2 lg:-left-4"
            >
              <div className="relative w-24 h-24 rounded-full bg-cream border border-ink/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-gold" />
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]">
                  <defs>
                    <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="fill-ink/70" fontSize="8.5" letterSpacing="2">
                    <textPath href="#circle">GROWTH · STRATEGY · GROWTH · SYSTEM ·</textPath>
                  </text>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip: search-like value prop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="relative mt-10 lg:-mt-24 lg:mb-16 max-w-md"
        >
          <div className="bg-cream-soft border border-ink/10 rounded-2xl p-5">
            <p className="text-[13px] leading-relaxed text-ink/75">
              No ayudo a negocios a conseguir <em className="text-ink/40 not-italic line-through">likes</em>.
              Ayudo a negocios a conseguir <span className="font-semibold text-ink">clientes</span> mediante publicidad,
              embudos y automatización.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────── MARQUEE ───────────────── */
function Marquee() {
  const items = ["BARBERÍAS", "ODONTOLOGÍA", "INMOBILIARIA", "CLÍNICAS", "ABOGADOS", "CONSTRUCTORAS", "RESTAURANTES", "MARCAS PERSONALES"];
  const row = [...items, ...items];
  return (
    <section className="bg-cream border-t border-ink/10 py-6 overflow-hidden">
      <div className="flex marquee gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-ink font-display font-extrabold tracking-tightest text-2xl">
            <span>{t}</span>
            <span className="text-gold">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── ABOUT (dark) ───────────────── */
function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="sobre-mi" ref={ref} className="relative py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
        <div className="relative">
          <div className="absolute inset-0 hero-glow scale-110" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" as const }}
            className="relative aspect-[4/5] max-w-md mx-auto rounded-[40px] overflow-hidden border border-white/5"
          >
            <img src={andresAsset.url} alt="Andrés Muriel" className="w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5"
          >
            — Sobre mí
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold tracking-tightest leading-[0.9] text-5xl md:text-6xl lg:text-7xl"
          >
            ESTRATEGIA,<br />NO SUERTE.
          </motion.h2>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Estrategia", "Growth", "Sistemas"].map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="px-3 py-1 rounded-full border border-white/10 text-xs text-foreground/80"
              >
                {t}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            Soy Andrés Muriel, Estratega Digital & Growth Partner. Construyo sistemas de crecimiento
            con publicidad digital, embudos de venta, automatización y contenido estratégico para
            generar oportunidades de negocio de forma constante. No vendo anuncios, vendo procesos
            que convierten atención en clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex gap-3"
          >
            <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Hablar conmigo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── SERVICES ───────────────── */
const services = [
  { icon: Calendar, name: "Booking Pro™", sub: "Sistema profesional de agendamiento", price: "$600.000 COP", priceUsd: "USD $176", note: "Mantenimiento: $65.000/mes", features: ["Reservas online", "Confirmaciones automáticas", "Gestión de horarios", "Optimizado móviles"] },
  { icon: LayoutTemplate, name: "Landing Page", sub: "Página profesional de conversión", price: "$550.000 COP", priceUsd: "USD $162", features: ["Diseño profesional", "Copywriting persuasivo", "Integración WhatsApp", "Optimizada para conversión"] },
  { icon: Video, name: "Authority Video™", sub: "Video estratégico de autoridad", price: "$430.000 COP", priceUsd: "USD $126", features: ["Guion estratégico", "Estructura de embudo", "Grabación & edición pro", "Copy persuasivo"] },
  { icon: Edit3, name: "Social Edit™", sub: "Edición profesional para redes", price: "$150.000 COP", priceUsd: "USD $44", features: ["Audio + música libre", "Subtítulos", "Cortes dinámicos", "Formato adaptable"] },
  { icon: Sparkles, name: "Creator Elite™", sub: "Edición premium de alto impacto", price: "$250.000 COP", priceUsd: "USD $74", features: ["Diseño sonoro", "Subtítulos dinámicos", "B-Rolls + efectos", "Retención optimizada"] },
  { icon: Film, name: "Creator Elite™ Long", sub: "Videos de más de 4 min", price: "$320.000 COP", priceUsd: "USD $94", features: ["Edición avanzada", "Narrativa optimizada", "Diseño sonoro", "Retención sostenida"] },
  { icon: Bot, name: "WhatsApp Sales™", sub: "Automatización estratégica", price: "Según alcance", priceUsd: "", features: ["Automatización respuestas", "Captación prospectos", "Flujos seguimiento", "Integración campañas"] },
];

function Services() {
  const [index, setIndex] = useState(0);
  const perView = 3;
  const max = Math.max(0, services.length - perView);
  const go = (d: number) => setIndex((v) => Math.min(max, Math.max(0, v + d)));

  return (
    <section id="servicios" className="py-32 px-6 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">— Mis servicios</div>
            <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-5xl md:text-6xl">
              SERVICIOS<br />PREMIUM.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground select-none">Deslizar →</span>
            <button onClick={() => go(-1)} disabled={index === 0} aria-label="Anterior" className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 hover:border-gold/50 disabled:opacity-30 transition">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => go(1)} disabled={index >= max} aria-label="Siguiente" className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 hover:border-gold/50 disabled:opacity-30 transition">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `calc(${-index} * (100% / 3) - ${index} * 1.25rem)` }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            className="flex gap-5"
          >
            {services.map(({ icon: Icon, ...s }, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="shrink-0 w-full md:w-[calc((100%-2.5rem)/3)] rounded-3xl bg-card border border-white/5 p-7 flex flex-col group hover:border-gold/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition">
                  <Icon className="w-5 h-5 text-gold stroke-[1.5]" />
                </div>
                <h3 className="font-display font-extrabold text-2xl tracking-tightest mb-1">{s.name}</h3>
                <p className="text-sm text-muted-foreground mb-5">{s.sub}</p>
                <div className="mb-5">
                  <div className="text-2xl font-display font-extrabold text-gold tracking-tightest">{s.price}</div>
                  {s.priceUsd && <div className="text-xs text-muted-foreground mt-0.5">{s.priceUsd}</div>}
                  {s.note && <div className="text-xs text-muted-foreground mt-1.5">{s.note}</div>}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5 stroke-[2.5]" /><span>{f}</span></li>
                  ))}
                </ul>
                <a href={WA} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold group/link">
                  Cotizar <ArrowUpRight className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── PLANS ───────────────── */
const plans = [
  { badge: "Bronze", name: "Bronze Growth", cop: "$900.000", usd: "USD $265", target: "Recomendado para negocios con ventas entre $30.000 y $150.000 COP",
    features: ["1 video UGC estratégico", "1 video directo con embudo", "1 carrusel de alto impacto", "2 imágenes estratégicas", "Meta Ads", "Seguimiento WhatsApp", "1 reporte mensual", "1 reunión estratégica"],
    ideal: "Barberías · Cafeterías · Florerías · Salones" },
  { badge: "Silver", name: "Silver Growth", cop: "$1.400.000", usd: "USD $412", target: "Recomendado para negocios con ventas entre $150.000 y $300.000 COP",
    features: ["2 videos UGC estratégicos", "2 videos directos con embudo", "3 carruseles de alto impacto", "2 imágenes estratégicas", "Meta Ads", "Seguimiento WhatsApp", "2 reportes quincenales", "1 reunión estratégica"],
    ideal: "Odontólogos · Gimnasios · Clínicas · Abogados" },
  { badge: "Gold", name: "Gold Growth", cop: "$2.300.000", usd: "USD $676", target: "Recomendado para negocios con ventas entre $300.000 y $600.000 COP", featured: true,
    features: ["3 videos UGC + 2 directos", "1 Reel con música viral", "3 carruseles de alto impacto", "Bold Offer de alta conversión", "Meta Ads + remarketing", "Seguimiento WhatsApp", "2 reportes quincenales", "1 reunión estratégica"],
    ideal: "Constructoras · Clínicas · Marcas personales" },
  { badge: "Black", name: "Black Growth Partner", cop: "$4.500.000", usd: "USD $1.324", target: "Recomendado para negocios con ventas superiores a $600.000 COP", intro: "Todo lo del Gold más:",
    features: ["Contenido orgánico semanal", "Estrategia de historias", "Landing Page profesional", "Automatización WhatsApp", "Dashboard de métricas", "Auditoría mensual", "Optimización continua"],
    ideal: "Clínicas premium · Franquicias · Alto valor" },
];

function Plans() {
  return (
    <section id="planes" className="py-32 px-6 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">— Planes de crecimiento</div>
          <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-5xl md:text-6xl lg:text-7xl">
            ELIGE TU RITMO<br />DE CRECIMIENTO.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col rounded-3xl p-7 border transition-colors ${
                p.featured ? "border-gold bg-card gold-glow" : "border-white/8 bg-card hover:border-gold/40"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-7 text-[10px] tracking-[0.2em] uppercase bg-gold text-primary-foreground px-2.5 py-1 rounded-full font-bold">
                  Recomendado
                </div>
              )}
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{p.badge}</div>
              <h3 className="font-display font-extrabold text-2xl tracking-tightest mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6 min-h-[56px]">{p.target}</p>

              <div className="mb-6">
                <div className="text-3xl font-display font-extrabold text-gold tracking-tightest">{p.cop}<span className="text-xs text-muted-foreground font-medium"> COP / mes</span></div>
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

              <div className="rounded-2xl border border-gold/30 bg-gold/5 p-4 mb-5">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-1.5">
                  <Zap className="w-3.5 h-3.5" /> Fondo de Optimización Creativa
                </div>
                <div className="text-sm text-foreground/90 font-semibold">+ $100.000 COP <span className="text-xs text-muted-foreground font-normal">(USD $29) · opcional</span></div>
                <p className="text-[11px] text-muted-foreground leading-snug mt-1">
                  Reserva mensual para refrescar creativos cuando la estrategia lo requiere.
                </p>
              </div>

              <div className="text-xs text-muted-foreground border-t border-white/5 pt-4 mb-5">
                <div className="font-semibold text-foreground/80 mb-1.5">Ideal para:</div>
                <div>{p.ideal}</div>
              </div>

              <a href={WA} target="_blank" rel="noreferrer"
                className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition ${
                  p.featured ? "bg-gold text-primary-foreground hover:opacity-90" : "border border-gold/60 text-foreground hover:bg-gold/10"
                }`}>
                Quiero este plan <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── POSSIBILITIES (split image + tags) ───────────────── */
function Possibilities() {
  const tags = ["Publicidad", "Embudos", "Automatización", "Landing", "Contenido", "CRO"];
  const [active, setActive] = useState(0);
  return (
    <section className="py-32 px-6 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-extrabold tracking-tightest leading-[0.9] text-5xl md:text-6xl lg:text-7xl max-w-4xl mb-16"
        >
          POSIBILIDADES<br />ILIMITADAS CON<br /><span className="text-gold">UN SISTEMA REAL.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-[180px_1fr_1fr] gap-8 items-center">
          <div className="flex lg:flex-col gap-2 flex-wrap">
            {tags.map((t, i) => (
              <button
                key={t}
                onClick={() => setActive(i)}
                className={`text-left text-sm px-4 py-2 rounded-full border transition ${
                  active === i ? "bg-gold text-primary-foreground border-gold" : "border-white/10 text-muted-foreground hover:text-foreground hover:border-white/30"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/5"
          >
            <img src={andresAsset.url} alt="Sistema" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
          </motion.div>

          <div>
            <h3 className="font-display font-extrabold text-3xl tracking-tightest mb-4">
              Cómo el <span className="text-gold">sistema</span> transforma tu negocio.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cada componente — anuncio, contenido, landing, captura, seguimiento, agendamiento, venta y fidelización —
              está diseñado para convertir atención en oportunidades reales de negocio. Sin suerte, sin improvisación.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["Anuncio", "Contenido", "Landing", "Captura", "Seguimiento", "Agenda", "Venta", "Fidelización"].map((s, i) => (
                <div key={s} className="flex items-center gap-3 text-sm text-foreground/80 border border-white/8 rounded-xl px-3 py-2.5">
                  <span className="font-mono text-[10px] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a href={WA} target="_blank" rel="noreferrer" className="text-sm font-semibold text-gold inline-flex items-center gap-2 group">
                Conoce más <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
              </a>
              <span className="text-xs text-muted-foreground">— Andrés Muriel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TESTIMONIALS ───────────────── */
const voices = [
  { q: "El sistema cambió por completo nuestra forma de captar pacientes. Ahora tenemos agenda llena.", n: "Dr. Camilo R.", r: "Clínica odontológica" },
  { q: "Pasamos de depender del voz a voz a tener un flujo constante de oportunidades calificadas.", n: "María Restrepo", r: "Constructora" },
  { q: "Andrés no vende humo. Vende estructura, claridad y resultados medibles cada semana.", n: "Sebastián O.", r: "Marca personal" },
];

function Testimonials() {
  return (
    <section className="py-32 px-6 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">— Voces del crecimiento</div>
          <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-5xl md:text-6xl">
            LO QUE DICEN<br />LOS NEGOCIOS.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Resultados reales de quienes confiaron en el sistema. Estrategia, ejecución y mejora continua.
          </p>
          <svg viewBox="0 0 400 60" className="mt-10 w-full max-w-md text-gold/40">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              d="M0 30 Q 100 0, 200 30 T 400 30"
              fill="none" stroke="currentColor" strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="space-y-4">
          {voices.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-white/8 rounded-2xl p-6 flex gap-5 items-start hover:border-gold/40 transition-colors"
            >
              <div className="flex-1">
                <p className="text-foreground/90 leading-relaxed">"{v.q}"</p>
                <div className="mt-4">
                  <div className="font-semibold text-sm">{v.n}</div>
                  <div className="text-xs text-muted-foreground">{v.r}</div>
                </div>
              </div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/40 to-gold/10 border border-white/10 shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FAQ ───────────────── */
const faqs = [
  { q: "¿La inversión publicitaria está incluida?", a: "Sí. Cada plan contempla la ejecución de la estrategia publicitaria necesaria para alcanzar los objetivos definidos." },
  { q: "¿Cuánto tiempo tarda en verse resultados?", a: "Depende del mercado, la oferta y la competencia. Las primeras semanas se recopilan datos y se optimizan campañas." },
  { q: "¿Garantizas ventas?", a: "No. Lo que sí garantizo es la implementación profesional de una estrategia enfocada en generar oportunidades reales." },
  { q: "¿Trabajas con cualquier negocio?", a: "No. Trabajo con negocios que tienen capacidad de atender nuevos clientes y desean crecer de manera profesional." },
  { q: "¿Puedo contratar solo un servicio?", a: "Sí. Puedes contratar Landing, Video Estratégico, Automatización o cualquiera de los servicios premium individualmente." },
  { q: "¿Qué es el Fondo de Optimización Creativa?", a: "Es una reserva para crear nuevos creativos cuando la estrategia requiere refrescar anuncios y mantener el rendimiento." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-32 px-6 bg-background border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">— FAQ</div>
        <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-5xl md:text-6xl mb-14">
          PREGUNTAS<br />FRECUENTES.
        </h2>
        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-white/8">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="text-base md:text-lg font-semibold group-hover:text-gold transition">{f.q}</span>
                  <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-gold" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" as const }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-muted-foreground leading-relaxed text-base max-w-2xl">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FINAL CTA ───────────────── */
function FinalCTA() {
  return (
    <section id="contacto" className="py-20 px-6 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] overflow-hidden min-h-[460px] grid lg:grid-cols-2"
        >
          <div className="relative">
            <img src={andresAsset.url} alt="Andrés Muriel" className="absolute inset-0 w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            <button className="absolute left-8 bottom-8 w-14 h-14 rounded-full bg-cream/95 text-ink flex items-center justify-center hover:scale-110 transition">
              <Play className="w-5 h-5 fill-current" />
            </button>
          </div>
          <div className="relative bg-card p-10 lg:p-14 flex flex-col justify-center">
            <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-5xl md:text-6xl">
              ENTRA AL<br /><span className="text-gold">SISTEMA.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
              Si quieres atraer más clientes y construir un proceso de crecimiento sostenible, conversemos.
              Analizo tu negocio y te recomiendo la estrategia más adecuada según tus objetivos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:opacity-90 transition">
                Quiero una estrategia <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#planes" className="inline-flex items-center gap-2 border border-white/15 text-foreground px-6 py-3.5 rounded-full font-semibold hover:bg-white/5 transition">
                Ver planes
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────── FOOTER ───────────────── */
function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-14 border-b border-white/8">
          <div>
            <div className="font-display font-extrabold text-2xl tracking-tightest">muriel<span className="text-gold">.</span></div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Estratega Digital & Growth Partner. Sistemas de crecimiento para negocios que quieren resultados reales.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/60 mb-4">Contacto</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={WA} className="hover:text-gold">+57 324 448 2657</a></li>
              <li>WhatsApp directo</li>
              <li>Cali · Colombia</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/60 mb-4">Explora</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#sobre-mi" className="hover:text-gold">Sobre mí</a></li>
              <li><a href="#servicios" className="hover:text-gold">Servicios</a></li>
              <li><a href="#planes" className="hover:text-gold">Planes</a></li>
              <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/60 mb-4">Servicios</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Publicidad Digital</li>
              <li>Embudos de venta</li>
              <li>Automatización</li>
              <li>Landing Pages</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="font-display font-extrabold tracking-tightest text-4xl md:text-6xl text-foreground/90">
            "Likes <span className="text-foreground/30 line-through">no pagan</span>. Clientes <span className="text-gold">sí</span>."
          </p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 transition">
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-white/8 flex flex-wrap justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Andrés Muriel — Estratega Digital.</span>
          <span>Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────── FLOATING WA ───────────────── */
function FloatingWA() {
  return (
    <motion.a
      href={WA} target="_blank" rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 bg-gold text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)]"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
    </motion.a>
  );
}
