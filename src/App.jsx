import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Database,
  Headset,
  ArrowUpRight,
  Building2,
  House,
  Target,
  BellRing,
  Workflow,
  CodeXml,
  Menu,
  X,
  Upload,
  ChevronLeft,
  ChevronRight,
  Search,
  Timer,
  TrendingUp,
  Lightbulb,
  FileText,
  Landmark,
  Map as MapIcon,
  Users,
  Network,
  Contact,
  Newspaper,
  History,
  Gauge,
  Handshake,
  Megaphone,
  Calculator,
  Scale,
  KeyRound,
  Truck,
  Briefcase,
  LayoutDashboard,
  Star,
  Hammer,
  Coffee,
  Cpu,
  Waves,
  Sprout,
  Anchor,
  Quote,
  Play,
  CalendarDays,
  Video,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Constants / Content
---------------------------------------------------------------- */
const PHONE = '+45 70 25 50 65'
const PHONE_HREF = 'tel:+4570255065'
const EMAIL = 'info@biq.dk'
const ADDRESS = 'Borgergade 24B, 4. sal, 1300 København K'

const NAV_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'Løsninger', href: '#loesninger' },
  { label: 'Moduler', href: '#moduler' },
  { label: 'Kunder', href: '#kunder' },
  { label: 'Webinarer', href: '#webinarer' },
  { label: 'Kontakt', href: '#kontakt' },
]

const MODULES = [
  {
    icon: Building2,
    title: 'Virksomheder',
    text: 'Regnskaber, nøgletal, ledelse og koncernstruktur for alle danske virksomheder — opdateret dagligt fra CVR.',
  },
  {
    icon: House,
    title: 'Ejendomme',
    text: 'BBR, tinglysning, vurderinger og handler. Se hvem der ejer hvad — og hvornår det sidst skiftede hænder.',
  },
  {
    icon: Target,
    title: 'Leads',
    text: 'Byg præcise målgrupper med over 100 filtre, og eksportér lister med beriget kontaktdata på få sekunder.',
  },
  {
    icon: BellRing,
    title: 'Følg',
    text: 'Følg kunder, konkurrenter og leads. Få besked ved ejerskifte, ny ledelse, nyt regnskab eller konkurs.',
  },
  {
    icon: Workflow,
    title: 'Integrationer',
    text: 'Synkronisér med HubSpot, Salesforce, Pipedrive og Dynamics — uden manuelt tastearbejde.',
  },
  {
    icon: CodeXml,
    title: 'API & dataudtræk',
    text: 'Byg BiQ ind i jeres egne systemer med et veldokumenteret REST-API og fleksible dataudtræk.',
  },
]

/* ----------------------------------------------------------------
   Navbar — full-width, white, Resights-style
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-divider shadow-sm shadow-primary/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-6">
          <a href="#top" className="shrink-0" aria-label="BiQ forside">
            <img src="/logo.png" alt="BiQ" className="h-8 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-ink/80 hover:text-ink transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <a href="#kontakt" className="btn-primary !py-2 !px-4">
              Prøv gratis
            </a>
            <a href="#kontakt" className="btn-muted">
              Log ind
            </a>
          </div>

          <button onClick={() => setOpen(true)} className="lg:hidden p-2 -mr-2 rounded-lg text-ink" aria-label="Åbn menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 inset-x-0 bg-white rounded-b-3xl px-5 pt-5 pb-8 shadow-xl transition-transform duration-300 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <img src="/logo.png" alt="BiQ" className="h-8 w-auto" />
            <button onClick={() => setOpen(false)} className="p-2 rounded-lg bg-background" aria-label="Luk menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-xl font-semibold text-ink py-4 border-b border-divider"
              >
                {link.label}
                <ChevronRight className="h-5 w-5 text-accent-dark" />
              </a>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href="#kontakt" onClick={() => setOpen(false)} className="btn-primary">
              Prøv gratis
            </a>
            <a href="#kontakt" onClick={() => setOpen(false)} className="btn-muted !py-3">
              Log ind
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero visual — isometric city block with growing buildings
---------------------------------------------------------------- */
const BLOCKS = [
  { x: 60, y: 60, w: 70, d: 90, h: 70 },
  { x: 150, y: 60, w: 60, d: 60, h: 120 },
  { x: 150, y: 140, w: 60, d: 50, h: 50 },
  { x: 300, y: 50, w: 90, d: 60, h: 90 },
  { x: 410, y: 50, w: 60, d: 60, h: 150 },
  { x: 300, y: 135, w: 70, d: 70, h: 60 },
  { x: 60, y: 290, w: 80, d: 70, h: 55 },
  { x: 160, y: 290, w: 50, d: 90, h: 100 },
  { x: 300, y: 300, w: 100, d: 80, h: 135, hl: true },
  { x: 420, y: 300, w: 50, d: 50, h: 70 },
  { x: 420, y: 370, w: 50, d: 60, h: 45 },
  { x: 60, y: 400, w: 150, d: 60, h: 40 },
]
const TREES = [
  [245, 80], [245, 150], [245, 220], [100, 210], [170, 230], [345, 230], [440, 230], [270, 430], [480, 470], [120, 490],
]

function Block({ x, y, w, d, h, hl }) {
  const top = hl ? '#8BB9C8' : '#FFFFFF'
  const south = hl ? '#6FA3B6' : '#E6EDF1'
  const west = hl ? '#4E86A0' : '#CBD7DE'
  const floors = (deg, base, line) => `repeating-linear-gradient(${deg}, ${base} 0 13px, ${line} 13px 15px)`
  return (
    <div className="hero-block absolute" data-h={h} style={{ left: x, top: y, width: w, height: d, transformStyle: 'preserve-3d', '--h': h }}>
      <div className="absolute inset-0 rounded-sm" style={{ background: 'rgba(18,52,72,0.10)', transform: 'translate(-10px, 10px)', filter: 'blur(6px)' }} />
      {/* south face */}
      <div
        className="absolute left-0"
        style={{
          top: d,
          width: w,
          height: 'calc(var(--h) * 1px)',
          background: floors('0deg', south, hl ? 'rgba(255,255,255,0.2)' : 'rgba(18,52,72,0.04)'),
          transformOrigin: 'top',
          transform: 'rotateX(90deg)',
        }}
      />
      {/* west face */}
      <div
        className="absolute top-0"
        style={{
          left: 'calc(var(--h) * -1px)',
          width: 'calc(var(--h) * 1px)',
          height: d,
          background: floors('90deg', west, hl ? 'rgba(255,255,255,0.15)' : 'rgba(18,52,72,0.05)'),
          transformOrigin: 'right',
          transform: 'rotateY(90deg)',
        }}
      />
      {/* roof */}
      <div
        className="absolute inset-0"
        style={{
          background: top,
          transform: 'translateZ(calc(var(--h) * 1px))',
          boxShadow: hl ? 'inset 0 0 0 2px rgba(255,255,255,0.6)' : 'inset 0 0 0 1px rgba(18,52,72,0.08)',
        }}
      />
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full select-none" aria-hidden="true">
      {/* 3D plane */}
      <div className="absolute left-1/2 top-1/2 scale-[0.58] sm:scale-[0.8] lg:scale-100" style={{ perspective: '2400px' }}>
        <div
          className="relative -ml-[270px] -mt-[270px] h-[540px] w-[540px] rounded-[48px] bg-white"
          style={{
            transform: 'rotateX(57deg) rotateZ(-40deg)',
            transformStyle: 'preserve-3d',
            boxShadow: '0 40px 80px -20px rgba(18,52,72,0.25)',
          }}
        >
          <svg className="absolute inset-0" viewBox="0 0 540 540">
            <rect x="0" y="0" width="540" height="540" rx="48" fill="#FBFCFD" />
            <path d="M 0 250 H 540 M 255 0 V 540" stroke="#E3E9ED" strokeWidth="34" />
            <path d="M 0 250 H 540 M 255 0 V 540" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="10 12" />
            <path d="M 40 30 h 190 v 195 h -190 z M 285 30 h 215 v 195 h -215 z M 40 275 h 190 v 235 h -190 z M 285 275 h 215 v 235 h -215 z" fill="#F1F5F7" />
          </svg>
          {TREES.map(([tx, ty], i) => (
            <div key={i} className="absolute" style={{ left: tx, top: ty, transformStyle: 'preserve-3d' }}>
              <div className="h-4 w-4 rounded-full" style={{ background: 'rgba(18,52,72,0.10)', filter: 'blur(2px)' }} />
              <div className="absolute inset-0 h-4 w-4 rounded-full bg-[#A9CDB5]" style={{ transform: 'translateZ(16px)', boxShadow: 'inset -2px -2px 0 rgba(0,0,0,0.08)' }} />
            </div>
          ))}
          {BLOCKS.map((b, i) => (
            <Block key={i} {...b} />
          ))}
        </div>
      </div>

      {/* Pin over highlighted building */}
      <div className="hero-pin absolute left-[64%] top-[27%] -translate-x-1/2">
        <div className="relative flex flex-col items-center animate-float">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30 ring-4 ring-white">
            <Building2 className="h-4 w-4 text-white" />
          </span>
          <span className="h-3 w-0.5 bg-primary" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      </div>

      {/* Floating company card */}
      <div className="hero-card absolute left-0 sm:left-2 top-0 sm:top-4 w-[230px] sm:w-[260px] rounded-xl bg-white shadow-2xl shadow-primary/15 border border-divider overflow-hidden">
        <div className="flex items-center gap-3 p-3.5 border-b border-divider">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Building2 className="h-4 w-4 text-white" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink truncate">Nordlys Byg ApS</p>
            <p className="text-[11px] text-muted">CVR 12 34 56 78 · Valby</p>
          </div>
        </div>
        {[
          { k: 'Branche', v: 'Tømrer & snedker', I: Briefcase },
          { k: 'Ansatte', v: '24 (+4 i år)', I: Users },
          { k: 'Bruttofortjeneste', v: '14,8 mio. kr.', I: TrendingUp },
          { k: 'Ejendomme', v: '3 matrikler', I: House },
        ].map(({ k, v, I }) => (
          <div key={k} className="flex items-center justify-between gap-3 px-3.5 py-2.5 border-b border-divider last:border-0">
            <span className="flex items-center gap-2 text-[11px] font-medium text-muted">
              <I className="h-3.5 w-3.5 text-accent-dark" />
              {k}
            </span>
            <span className="text-[11px] font-semibold text-ink">{v}</span>
          </div>
        ))}
      </div>

      {/* Event toast */}
      <div className="hero-toast absolute right-0 sm:right-2 bottom-6 sm:bottom-14 flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur px-4 py-3 shadow-xl shadow-primary/10 border border-divider">
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-accent-light">
          <BellRing className="h-4 w-4 text-primary" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-white" />
        </span>
        <div>
          <p className="text-xs font-semibold text-ink">Ejerskifte registreret</p>
          <p className="text-[11px] text-muted">Nordlys Byg ApS · for 2 min. siden</p>
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 28, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1, delay: 0.15 })
      gsap.utils.toArray('.hero-block').forEach((el, i) => {
        gsap.fromTo(el, { '--h': 0 }, { '--h': Number(el.dataset.h), duration: 1.4, ease: 'power3.out', delay: 0.3 + i * 0.06 })
      })
      gsap.from('.hero-pin', { y: -30, opacity: 0, duration: 0.8, ease: 'back.out(2)', delay: 1.3 })
      gsap.from('.hero-card', { x: -30, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.9 })
      gsap.from('.hero-toast', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 1.6 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-[#DDEAF0] via-[#EAF2F6] to-[#F5F7F9]">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 lg:pt-24 pb-10 lg:pb-0 grid lg:grid-cols-[1fr_1.1fr] items-center gap-6 lg:min-h-[760px]">
        <div className="hero-copy max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white px-3 py-1 text-xs font-semibold text-primary-light">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Better Data &amp; Decision Quality
          </span>
          <h1 className="mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl font-semibold tracking-tight text-ink">
            Bedre data.
            <br />
            Bedre beslutninger.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-lg">
            BiQ samler data om danske virksomheder, ejendomme og ejere på én platform — så du finder de rigtige kunder og
            træffer beslutninger på et solidt grundlag.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#kontakt" className="btn-primary">
              Prøv gratis
            </a>
            <a href="#kontakt" className="btn-secondary">
              Book demo
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            <a href="#loesninger" className="group text-sm text-muted leading-snug">
              For dig, der arbejder
              <br />
              med <span className="font-semibold text-ink">salg</span>{' '}
              <ArrowRight className="inline h-4 w-4 text-ink transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#loesninger" className="group text-sm text-muted leading-snug">
              For dig, der arbejder
              <br />
              med <span className="font-semibold text-ink">finans & rådgivning</span>{' '}
              <ArrowRight className="inline h-4 w-4 text-ink transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>

      {/* Source strip */}
      <div className="relative border-t border-white/70 bg-white/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-xs font-medium text-muted">Data fra officielle kilder</span>
          {['CVR', 'BBR', 'Tinglysningen', 'Matriklen', 'Vurderingsstyrelsen', 'Danmarks Statistik'].map((s) => (
            <span key={s} className="text-sm font-semibold text-primary/60">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Data sources diagram — signature animation (data flowing into BiQ)
---------------------------------------------------------------- */
const PUBLIC_SOURCES = [
  { label: 'CVR', I: Building2 },
  { label: 'Regnskaber', I: FileText },
  { label: 'Tinglysning', I: Landmark },
  { label: 'BBR', I: House },
  { label: 'Matrikel', I: MapIcon },
  { label: 'Vurderinger', I: Gauge },
]
const BIQ_SOURCES = [
  { label: 'Kontaktdata', I: Contact },
  { label: 'Nøglepersoner', I: Users },
  { label: 'Koncerner', I: Network },
  { label: 'Leadscore', I: Star },
  { label: 'Nyheder', I: Newspaper },
  { label: 'Historik', I: History },
]

function SourceNode({ cx, cy, label, I }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="27" fill="#FFFFFF" stroke="#E3E8EC" style={{ filter: 'drop-shadow(0 4px 10px rgba(18,52,72,0.10))' }} />
      <I x={cx - 10} y={cy - 10} width={20} height={20} color="#123448" strokeWidth={1.8} />
      <text x={cx} y={cy + 48} textAnchor="middle" fontSize="13" fontWeight="500" fill="#123448" fontFamily="Inter, sans-serif">
        {label}
      </text>
    </g>
  )
}

function DataSources() {
  const xsL = [90, 205, 320]
  const xsR = [780, 895, 1010]
  const ys = [80, 210]
  const hub = { x: 550, y: 250 }
  const pathsL = ys.map((y) => `M ${xsL[0]} ${y} H 400 C 470 ${y}, 470 ${hub.y}, ${hub.x - 50} ${hub.y}`)
  const pathsR = ys.map((y) => `M ${xsR[2]} ${y} H 700 C 630 ${y}, 630 ${hub.y}, ${hub.x + 50} ${hub.y}`)
  const allPaths = [...pathsL, ...pathsR]

  return (
    <section id="platform" className="relative py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            Offentlige registre og egne data — koblet sammen ét sted
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            BiQ henter data fra de officielle danske registre hver dag og beriger dem med kontaktdata, nøglepersoner og
            koncernforhold. Resultatet er ét samlet billede af hver virksomhed og ejendom.
          </p>
        </div>

        {/* Desktop diagram */}
        <div className="reveal hidden md:block mt-16">
          <svg viewBox="0 0 1100 420" className="w-full h-auto overflow-visible">
            <text x="205" y="20" textAnchor="middle" fontSize="14" fontWeight="600" fill="#123448" fontFamily="Inter, sans-serif">
              <tspan fill="#5F97AB">Offentlige</tspan> datakilder
            </text>
            <text x="895" y="20" textAnchor="middle" fontSize="14" fontWeight="600" fill="#123448" fontFamily="Inter, sans-serif">
              <tspan fill="#5F97AB">BiQ</tspan>-berigelse
            </text>

            {allPaths.map((d, i) => (
              <path key={`b${i}`} d={d} fill="none" stroke="#D3DEE4" strokeWidth="2" />
            ))}
            {allPaths.map((d, i) => (
              <path
                key={`f${i}`}
                d={d}
                fill="none"
                stroke="#8BB9C8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="4 16"
                style={{ animation: 'flow-dash 1.6s linear infinite', animationDelay: `${i * 0.2}s` }}
              />
            ))}
            {allPaths.map((d, i) => (
              <circle key={`p${i}`} r="4.5" fill="#123448" opacity="0">
                <animateMotion dur="3.2s" begin={`${i * 0.7}s`} repeatCount="indefinite" path={d} />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="3.2s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
              </circle>
            ))}

            <path d={`M ${hub.x} ${hub.y + 50} V 420`} stroke="#D3DEE4" strokeWidth="2" />
            <path
              d={`M ${hub.x} ${hub.y + 50} V 420`}
              stroke="#8BB9C8"
              strokeWidth="2.5"
              strokeDasharray="4 16"
              strokeLinecap="round"
              style={{ animation: 'flow-dash 1.6s linear infinite' }}
            />

            {ys.map((y, r) => xsL.map((x, c) => <SourceNode key={`l${r}${c}`} cx={x} cy={y} {...PUBLIC_SOURCES[r * 3 + c]} />))}
            {ys.map((y, r) => xsR.map((x, c) => <SourceNode key={`r${r}${c}`} cx={x} cy={y} {...BIQ_SOURCES[r * 3 + c]} />))}

            <circle cx={hub.x} cy={hub.y} r="70" fill="#8BB9C8" opacity="0.15">
              <animate attributeName="r" values="52;78;52" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0;0.35" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={hub.x} cy={hub.y} r="50" fill="#FFFFFF" stroke="#8BB9C8" strokeWidth="2" style={{ filter: 'drop-shadow(0 8px 20px rgba(18,52,72,0.15))' }} />
            <image href="/logo.png" x={hub.x - 30} y={hub.y - 14} width="60" height="27" />
          </svg>
        </div>

        {/* Mobile version */}
        <div className="reveal md:hidden mt-12 space-y-6">
          {[
            { title: 'Offentlige datakilder', items: PUBLIC_SOURCES },
            { title: 'BiQ-berigelse', items: BIQ_SOURCES },
          ].map((g) => (
            <div key={g.title}>
              <p className="text-sm font-semibold text-ink mb-3">{g.title}</p>
              <div className="grid grid-cols-3 gap-2">
                {g.items.map(({ label, I }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl bg-white border border-divider py-3">
                    <I className="h-5 w-5 text-primary" strokeWidth={1.8} />
                    <span className="text-[11px] font-medium text-ink">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <DashboardMock />
        <Benefits />
      </div>

      <style>{`
        @keyframes flow-dash { to { stroke-dashoffset: -40; } }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Dashboard mock (built in HTML)
---------------------------------------------------------------- */
function DashboardMock() {
  const bars = [38, 46, 41, 55, 62, 58, 71, 76, 83, 92]
  return (
    <div className="reveal relative mx-auto mt-10 md:mt-0 max-w-4xl rounded-2xl border-[6px] border-primary bg-primary shadow-2xl shadow-primary/20 overflow-hidden">
      <div className="flex bg-white">
        <div className="hidden sm:flex flex-col items-center gap-4 w-14 border-r border-divider py-4">
          <img src="/favicon.svg" alt="" className="h-7 w-7" />
          {[LayoutDashboard, Search, Building2, House, Target, BellRing].map((I, i) => (
            <span key={i} className={`flex h-8 w-8 items-center justify-center rounded-lg ${i === 2 ? 'bg-accent-light text-primary' : 'text-muted'}`}>
              <I className="h-4 w-4" />
            </span>
          ))}
        </div>
        <div className="flex-1 min-w-0 p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0 flex items-center gap-2 rounded-lg border border-divider bg-background px-3 py-2">
              <Search className="h-3.5 w-3.5 shrink-0 text-muted" />
              <span className="text-[11px] sm:text-xs text-muted truncate">Søg virksomhed, CVR-nr., person eller adresse…</span>
            </div>
            <span className="hidden sm:inline-flex rounded-lg bg-primary px-3 py-2 text-[11px] font-semibold text-white">Eksportér</span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm sm:text-base font-semibold text-ink truncate">Havnens Kaffebrænderi A/S</p>
              <p className="text-[11px] text-muted truncate">CVR 87 65 43 21 · Engroshandel med kaffe · Aarhus C</p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-accent-light px-2.5 py-1 text-[10px] font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-dark" /> Aktiv
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {[
              ['Bruttofortjeneste', '48,2 mio.', '+9%'],
              ['Ansatte', '61', '+6'],
              ['Egenkapital', '12,4 mio.', '+14%'],
              ['Ejendomme', '3', 'BBR'],
            ].map(([k, v, d]) => (
              <div key={k} className="rounded-xl border border-divider p-3">
                <p className="text-[10px] text-muted">{k}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{v}</p>
                <p className="text-[10px] font-medium text-accent-dark">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-2.5 grid sm:grid-cols-5 gap-2.5">
            <div className="sm:col-span-3 rounded-xl border border-divider p-3">
              <p className="text-[10px] text-muted mb-2">Bruttofortjeneste · 10 år</p>
              <div className="flex items-end gap-1.5 h-20">
                {bars.map((b, i) => (
                  <div key={i} className="dash-bar flex-1 rounded-t bg-accent" style={{ height: `${b}%`, opacity: 0.45 + i * 0.055, transformOrigin: 'bottom' }} />
                ))}
              </div>
            </div>
            <div className="sm:col-span-2 rounded-xl border border-divider p-3">
              <p className="text-[10px] text-muted mb-2">Nøglepersoner</p>
              {[
                ['Mette Holm', 'Adm. direktør'],
                ['Jonas Lund', 'Bestyrelsesformand'],
                ['Sara Friis', 'Ejer · 62%'],
              ].map(([n, r]) => (
                <div key={n} className="flex items-center gap-2 py-1">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-light text-[9px] font-semibold text-primary">{n[0]}</span>
                  <span className="text-[11px] font-medium text-ink">{n}</span>
                  <span className="ml-auto text-[10px] text-muted">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Benefits — three cards branching from the dashboard
---------------------------------------------------------------- */
function Benefits() {
  const items = [
    { I: Timer, lead: 'Spar tid', text: 'al data om virksomheder, ejere og ejendomme samlet ét sted.' },
    { I: TrendingUp, lead: 'Find nye kunder', text: 'byg lister ud fra præcis de kriterier, der passer jer.' },
    { I: Lightbulb, lead: 'Træf bedre beslutninger', text: 'se risici og muligheder, før de andre gør.' },
  ]
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="hidden sm:block relative h-16">
        <div className="absolute left-1/2 top-0 h-8 w-px bg-[#D3DEE4]" />
        <div className="absolute left-[16.66%] right-[16.66%] top-8 h-8 border-t border-x border-[#D3DEE4] rounded-t-2xl" />
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-8 sm:mt-0">
        {items.map(({ I, lead, text }) => (
          <div key={lead} className="reveal rounded-2xl bg-white border border-divider p-6 text-center shadow-sm">
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <I className="h-5 w-5 text-white" />
            </span>
            <p className="mt-4 text-[15px] text-muted leading-relaxed">
              <span className="font-semibold text-ink">{lead}</span> – {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   CTA band — glass card over Copenhagen
---------------------------------------------------------------- */
function CtaBand() {
  return (
    <section className="px-5 sm:px-8">
      <div className="reveal relative max-w-7xl mx-auto overflow-hidden rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=2400&q=80"
          alt="Nyhavn i København"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/25" />
        <div className="relative flex items-center justify-center px-5 py-20 sm:py-28">
          <div className="glass max-w-lg rounded-2xl px-6 sm:px-12 py-10 text-center shadow-2xl shadow-primary/20">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">Prøv BiQ gratis</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Opret en gratis prøveadgang og se, hvad BiQ kan gøre for jer — helt uden binding.
            </p>
            <a href="#kontakt" className="btn-primary mt-7">
              Prøv gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Mini widgets — Find / Forstå / Følg
---------------------------------------------------------------- */
function SegmentBuilder() {
  const regions = [
    { code: 'KBH', n: '4,2k' },
    { code: 'SJÆ', n: '1,9k' },
    { code: 'FYN', n: '1,1k' },
    { code: 'SYD', n: '1,6k' },
    { code: 'MID', n: '2,8k' },
    { code: 'NOR', n: '1,3k' },
    { code: 'BOR', n: '0,2k' },
  ]
  const activeIdx = 4
  const [step, setStep] = useState(0)
  const chipRefs = useRef([])
  const btnRef = useRef(null)
  const [pts, setPts] = useState({ chip: { x: 120, y: 60 }, btn: { x: 130, y: 130 } })

  useLayoutEffect(() => {
    const measure = () => {
      const chip = chipRefs.current[activeIdx]
      const btn = btnRef.current
      if (!chip || !btn) return
      setPts({
        chip: { x: chip.offsetLeft + chip.offsetWidth / 2 - 4, y: chip.offsetTop + chip.offsetHeight / 2 - 2 },
        btn: { x: btn.offsetLeft + btn.offsetWidth / 2 + 20, y: btn.offsetTop + btn.offsetHeight / 2 - 2 },
      })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setStep((prev) => (prev + 1) % 5), 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 1:
        return { x: 40, y: 60, opacity: 1 }
      case 2:
      case 3:
        return { ...pts.chip, opacity: 1 }
      case 4:
        return { ...pts.btn, opacity: 1 }
      default:
        return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-white border border-divider rounded-2xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-medium text-muted">Segment · Tømrere</span>
        <span className="text-[10px] font-semibold text-primary bg-accent-light px-2 py-0.5 rounded-full">Leadliste</span>
      </div>

      <div className="grid grid-cols-7 gap-1.5 sm:gap-2 mb-4">
        {regions.map((r, idx) => {
          const on = step >= 3 && idx === activeIdx
          return (
            <div
              key={r.code}
              ref={(el) => (chipRefs.current[idx] = el)}
              className={`flex flex-col items-center justify-center h-9 rounded-lg transition-all duration-300 ${
                on ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30' : 'bg-background text-ink'
              }`}
            >
              <span className={`text-[8px] font-medium ${on ? 'text-white/70' : 'text-muted'}`}>{r.code}</span>
              <span className="font-semibold text-[11px] leading-tight">{r.n}</span>
            </div>
          )
        })}
      </div>

      <button
        ref={btnRef}
        tabIndex={-1}
        className={`w-full py-2.5 rounded-lg font-medium text-xs transition-all duration-300 ${
          step === 4 ? 'bg-accent text-primary scale-[1.02] shadow-md shadow-accent/40' : 'bg-background text-muted'
        }`}
      >
        {step >= 3 ? '✓ 2.812 leads klar · Send til CRM' : 'Vælg en region'}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: cursorPos.opacity,
          transform: step === 3 ? 'scale(0.85)' : 'scale(1)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#123448" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function CompanyShuffler() {
  const items = [
    { tag: 'ApS', label: 'Nordlys Byg ApS', meta: 'Tømrer · 24 ansatte', delta: '+18%' },
    { tag: 'A/S', label: 'Havnens Kaffebrænderi A/S', meta: 'Fødevarer · 61 ansatte', delta: '+9%' },
    { tag: 'ApS', label: 'Fjordtech ApS', meta: 'Software · 12 ansatte', delta: '+42%' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, offset) => (
        <div
          key={item.label}
          style={{
            transform: `translate(${offset * 12}px, ${offset * 12}px) scale(${1 - offset * 0.05})`,
            zIndex: stack.length - offset,
            opacity: 1 - offset * 0.25,
            transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
          }}
          className="absolute inset-0 bg-white border border-divider rounded-2xl p-5 shadow-md shadow-primary/5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-primary bg-accent-light px-2 py-1 rounded-full">{item.tag}</span>
            <span className="text-xs font-semibold text-accent-dark">Vækst {item.delta}</span>
          </div>
          <div className="mt-4 text-lg font-semibold text-ink leading-tight truncate">{item.label}</div>
          <div className="text-xs text-muted mt-1">{item.meta}</div>
          <div className="mt-3 flex items-center gap-1.5">
            {Array.from({ length: 24 }).map((_, idx) => (
              <span key={idx} className="h-1 w-1 rounded-full" style={{ background: idx < 24 - offset * 6 ? '#8BB9C8' : '#E3E8EC' }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function DataStream() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(37)

  const statuses = [
    { text: 'Følger 2.418 virksomheder', label: 'Live', tone: 'primary' },
    { text: 'Ejerskifte · Nordlys Byg ApS', label: 'Ny hændelse', tone: 'alert' },
    { text: 'Beriger lead · tlf. + e-mail', label: 'Beriger', tone: 'primary' },
    { text: 'Sendt til dit CRM · 2 sek.', label: 'Leveret', tone: 'accent' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === 'Leveret') setCount((c) => c + 1)
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const nodes = [
    { left: '15%', delay: '0.0s', dur: '2.6s', size: 16, kind: 'hex' },
    { left: '25%', delay: '1.3s', dur: '3.0s', size: 14, kind: 'code' },
    { left: '38%', delay: '0.6s', dur: '2.8s', size: 18, kind: 'hex' },
    { left: '50%', delay: '1.8s', dur: '2.4s', size: 14, kind: 'hex' },
    { left: '62%', delay: '0.9s', dur: '3.1s', size: 16, kind: 'code' },
    { left: '74%', delay: '2.0s', dur: '2.7s', size: 13, kind: 'hex' },
    { left: '85%', delay: '0.4s', dur: '2.9s', size: 16, kind: 'hex' },
  ]
  const sweeps = [
    { left: '22%', delay: '0.2s' },
    { left: '48%', delay: '1.0s' },
    { left: '76%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText = status.tone === 'accent' ? 'text-accent-dark' : status.tone === 'alert' ? 'text-amber-600' : 'text-primary'
  const toneDot = status.tone === 'accent' ? 'bg-accent' : status.tone === 'alert' ? 'bg-amber-500' : 'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-2xl overflow-hidden border border-accent/30"
      style={{ background: 'linear-gradient(180deg, #F4F8FA 0%, #E1EDF1 70%, #CFE2E9 100%)' }}
    >
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <BellRing className="h-3.5 w-3.5 text-primary" strokeWidth={2.2} />
          <span className="text-[11px] font-semibold text-primary">Live overvågning</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-bold text-sm text-ink tabular-nums">{count}</span>
          <span className="text-[10px] text-muted">i dag</span>
        </div>
      </div>

      {/* server rack */}
      <svg className="absolute left-3 top-9 h-5 w-[calc(100%-1.5rem)]" viewBox="0 0 400 20" preserveAspectRatio="none">
        <rect x="0" y="3" width="400" height="14" rx="4" fill="#123448" fillOpacity="0.08" />
        <rect x="0" y="3" width="400" height="14" rx="4" fill="none" stroke="#123448" strokeOpacity="0.25" />
        {[16, 112, 208, 304].map((x) => (
          <g key={x}>
            <rect x={x} y="7.5" width="64" height="2" rx="1" fill="#123448" fillOpacity="0.3" />
            <rect x={x} y="11" width="44" height="2" rx="1" fill="#123448" fillOpacity="0.15" />
          </g>
        ))}
        {[92, 188, 284, 380].map((x, i) => (
          <circle key={x} cx={x} cy="10" r="2.2" fill="#5F97AB">
            <animate attributeName="opacity" values="1;0.25;1" dur={`${1.2 + i * 0.35}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>

      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {nodes.map((d, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: d.left,
              width: `${d.size}px`,
              height: `${Math.round(d.size * 1.5)}px`,
              animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
              filter: 'drop-shadow(0 1px 2px rgba(18,52,72,0.25))',
              transform: 'translateX(-50%)',
            }}
            viewBox="0 0 24 36"
          >
            <defs>
              <linearGradient id={`node-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8BB9C8" />
                <stop offset="55%" stopColor="#4E6776" />
                <stop offset="100%" stopColor="#123448" />
              </linearGradient>
            </defs>
            {d.kind === 'hex' ? (
              <>
                <polygon points="12,10 20.5,15 20.5,25 12,30 3.5,25 3.5,15" fill={`url(#node-${i})`} />
                <circle cx="12" cy="20" r="2.6" fill="#8BB9C8" />
              </>
            ) : (
              <path
                d="M8 13 L3 20 L8 27 M16 13 L21 20 L16 27 M14 11 L10 29"
                fill="none"
                stroke={`url(#node-${i})`}
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        ))}
      </div>

      <svg className="absolute bottom-9 left-3 h-3 w-[calc(100%-1.5rem)]" viewBox="0 0 200 12" preserveAspectRatio="none">
        <line x1="0" y1="6" x2="200" y2="6" stroke="#123448" strokeOpacity="0.35" strokeWidth="1.2" />
        <line x1="0" y1="9" x2="200" y2="9" stroke="#4E6776" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 4" />
      </svg>
      <span className="absolute bottom-[38px] left-3 h-2.5 w-1.5 bg-primary/60 animate-blink" />

      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {sweeps.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full bg-accent-dark/70"
            style={{ left: r.left, width: '8px', height: '2px', animation: `rain-ripple 2.4s ease-out ${r.delay} infinite` }}
          />
        ))}
      </div>

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 z-20">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className={`relative h-2 w-2 shrink-0 rounded-full ${toneDot}`}>
            {status.tone === 'alert' && <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />}
          </span>
          <span key={status.text} className={`text-[11px] font-medium truncate ${toneText}`} style={{ animation: 'rain-fadein 0.35s ease-out' }}>
            {status.text}
          </span>
        </div>
        <span className={`text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap ${toneText}`}>{status.label}</span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px) rotate(0deg); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px) rotate(30deg); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

function FindUnderstandFollow() {
  const cols = [
    { title: 'Find', text: 'Søg og filtrér i hele det danske erhvervsliv på branche, størrelse, geografi og ejerforhold.', C: SegmentBuilder },
    { title: 'Forstå', text: 'Regnskaber, nøglepersoner, koncerner og ejendomme samlet på én side — klar før første opkald.', C: CompanyShuffler },
    { title: 'Følg', text: 'Få besked i realtid, når noget ændrer sig. Leads lander direkte i jeres CRM.', C: DataStream },
  ]
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            Find de rigtige, forstå dem, og vær først, når noget sker
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            BiQ følger dig hele vejen fra første søgning til underskrevet aftale — på én platform.
          </p>
        </div>
        <div className="mt-14 rounded-3xl bg-white border border-divider p-5 sm:p-8 grid md:grid-cols-3 gap-10 md:gap-6">
          {cols.map(({ title, text, C }, i) => (
            <div key={title} className="reveal">
              <div className="text-center mb-6">
                <span className="text-xs font-semibold text-accent-dark">0{i + 1}</span>
                <h3 className="text-2xl font-semibold text-ink mt-1">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed max-w-xs mx-auto">{text}</p>
              </div>
              <C />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Segment cards — Salg / Finans & rådgivning
---------------------------------------------------------------- */
function Segments() {
  const cards = [
    {
      title: 'Salg & marketing',
      sub: 'For dig, der skal finde',
      strong: 'nye kunder',
      img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
      alt: 'Salgsteam i møde',
    },
    {
      title: 'Finans & rådgivning',
      sub: 'For dig, der vurderer',
      strong: 'risiko og muligheder',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      alt: 'Kontorbygninger i glas',
    },
  ]
  return (
    <section id="loesninger" className="pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-6">
        {cards.map((c) => (
          <a key={c.title} href="#kontakt" className="reveal group relative block h-[420px] sm:h-[520px] overflow-hidden rounded-3xl bg-primary">
            <img
              src={c.img}
              alt={c.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#E1EDF1]/95 via-[#E1EDF1]/40 to-primary/20" />
            <div className="relative p-8 sm:p-10">
              <h3 className="text-3xl font-semibold tracking-tight text-ink">{c.title}</h3>
              <p className="mt-3 text-sm text-ink/80 leading-snug">
                {c.sub}
                <br />
                <span className="font-semibold text-ink">{c.strong}</span>{' '}
                <ArrowRight className="inline h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800, format = false }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const progress = Math.min((now - startTime) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) requestAnimationFrame(animate)
              else setCount(target)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{format ? count.toLocaleString('da-DK') : count}</span>
}

/* ----------------------------------------------------------------
   Stats + trust card
---------------------------------------------------------------- */
function Stats() {
  const stats = [
    { target: 800, suffix: 'K+', label: 'danske virksomheder' },
    { target: 2, suffix: ' mio.', label: 'ejendomme kortlagt' },
    { target: 15, suffix: ' min.', label: 'fra registrering til besked' },
  ]
  const trust = [
    { I: ShieldCheck, t: 'GDPR & EU-hosting' },
    { I: Database, t: 'Officielle kilder' },
    { I: Headset, t: 'Dansk support' },
  ]
  return (
    <section id="om" className="pb-24 sm:pb-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="reveal rounded-3xl bg-white border border-divider shadow-sm p-7 sm:p-12 grid lg:grid-cols-[1fr_1.3fr] gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink leading-snug">
              Hele det danske erhvervsliv. <span className="text-accent-dark">Opdateret hver dag.</span>
            </h2>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Data organiseret og analyseret, så du hurtigt får det fulde overblik — og kan stole på det.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {trust.map(({ I, t }) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft border border-accent-light px-3 py-1.5 text-xs font-medium text-ink">
                  <I className="h-3.5 w-3.5 text-accent-dark" />
                  {t}
                </span>
              ))}
            </div>
            <a href="#kontakt" className="btn-primary mt-7">
              Prøv gratis
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-divider rounded-2xl overflow-hidden border border-divider">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-6">
                <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink tabular-nums whitespace-nowrap">
                  <CountUp target={s.target} />
                  <span className="text-accent-dark text-2xl sm:text-3xl">{s.suffix}</span>
                </p>
                <p className="mt-2 text-xs font-medium text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Persona carousel
---------------------------------------------------------------- */
const PERSONAS = [
  { I: Handshake, t: 'Sælger', d: 'Find de rigtige kunder, og ring med indsigt fra første sekund.' },
  { I: TrendingUp, t: 'Salgschef', d: 'Giv teamet de bedste leads, og følg hele markedet.' },
  { I: Megaphone, t: 'Marketing', d: 'Byg målgrupper til kampagner ud fra branche, størrelse og vækst.' },
  { I: Calculator, t: 'Revisor', d: 'Overblik over klienter, koncerner og regnskaber ét sted.' },
  { I: Scale, t: 'Advokat', d: 'Spar tid på ejerforhold, tinglysning og due diligence.' },
  { I: Landmark, t: 'Bank & kredit', d: 'Vurdér risiko hurtigere med regnskaber og advarselssignaler.' },
  { I: Building2, t: 'Ejendomsinvestor', d: 'Find off-market muligheder og ejere med den rette profil.' },
  { I: KeyRound, t: 'Ejendomsmægler', d: 'Opsøg nye salg, og forstå lokalområdet til bunds.' },
  { I: Truck, t: 'Leverandør', d: 'Find virksomheder i vækst, der har brug for netop jer.' },
]

function Personas() {
  const scroller = useRef(null)
  const [progress, setProgress] = useState({ width: 30, left: 0 })

  const update = () => {
    const el = scroller.current
    if (!el) return
    const visible = el.clientWidth / el.scrollWidth
    const max = el.scrollWidth - el.clientWidth
    const p = max > 0 ? el.scrollLeft / max : 0
    setProgress({ width: visible * 100, left: p * (100 - visible * 100) })
  }

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const scrollByCards = (dir) => {
    const el = scroller.current
    const card = el?.querySelector('[data-card]')
    if (!el || !card) return
    el.scrollBy({ left: dir * (card.offsetWidth + 16) * 2, behavior: 'smooth' })
  }

  return (
    <section className="pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">For dig, der sælger, rådgiver eller investerer</h2>
          <p className="mt-4 text-muted">Uanset rolle giver BiQ dig det samme stærke beslutningsgrundlag.</p>
        </div>

        <div
          ref={scroller}
          onScroll={update}
          className="reveal scrollbar-hide mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 px-5 sm:mx-0 sm:px-0"
        >
          {PERSONAS.map(({ I, t, d }) => (
            <div
              key={t}
              data-card
              className="snap-start shrink-0 w-[200px] sm:w-[220px] rounded-2xl bg-white border border-divider p-5 hover:border-accent hover:shadow-lg hover:shadow-primary/5 transition"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <I className="h-5 w-5 text-white" />
              </span>
              <h3 className="mt-6 font-semibold text-ink">{t}</h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-6">
          <div className="relative h-1 flex-1 rounded-full bg-accent-light overflow-hidden">
            <div className="absolute top-0 h-full rounded-full bg-primary transition-all duration-200" style={{ width: `${progress.width}%`, left: `${progress.left}%` }} />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollByCards(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-white border border-divider text-ink hover:border-accent transition"
              aria-label="Forrige"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollByCards(1)}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-dark transition"
              aria-label="Næste"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Modules grid
---------------------------------------------------------------- */
function Modules() {
  return (
    <section id="moduler" className="py-24 sm:py-32 bg-white border-y border-divider">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="reveal max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">Dit digitale værktøj til det danske erhvervsliv</h2>
          <p className="mt-5 text-muted">Alt virksomheds- og ejendomsdata samlet, analyseret og struktureret i seks moduler.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map(({ icon: I, title, text }) => (
            <div
              key={title}
              className="reveal group rounded-2xl border border-divider bg-background/60 p-7 hover:bg-white hover:border-accent hover:shadow-xl hover:shadow-primary/5 transition"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary group-hover:bg-accent transition">
                  <I className="h-4 w-4 text-white group-hover:text-primary transition" />
                </span>
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
              </div>
              <p className="mt-4 text-sm text-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Social proof — logo marquee + testimonials
   Kunder og citater er hentet fra biq.dk.
---------------------------------------------------------------- */
const CUSTOMER_LOGOS = [
  'Alm. Brand',
  'Norlys',
  'Q8 Danmark',
  'Stark',
  'Kræftens Bekæmpelse',
  'Sygeforsikringen Danmark',
  'Ældre Sagen',
  'DLA Piper Denmark',
  'Gribskov Kommune',
  'Nellemann Leasing',
  'Hillerød Forsyning',
  'EnergiFyn',
].map((name) => ({ name, I: Building2 }))

const TESTIMONIALS = [
  {
    quote:
      'Deres system har markant styrket vores evne til at vurdere kunders risikoprofil, hvilket er afgørende for vores daglige opgaver. Vi sparer betydelig tid, da søgeværktøjerne er tilpasset præcis til vores behov.',
    company: 'Nellemann Leasing A/S',
    product: 'BiQ Risk',
  },
  {
    quote:
      'Vi bruger både BiQ Insight, BiQ Search og BiQ Compliance. Disse systemer er en stor del af vores proces i forbindelse med vurdering af nye og eksisterende kunder, både privat og erhverv.',
    company: 'Q8 Danmark A/S',
    product: 'BiQ Insight · Search · Compliance',
  },
  {
    quote:
      'BiQ er en uundværlig ressource i vores daglige arbejde. Den omfattende dataadgang og det brugervenlige overblik gør det let at få de nødvendige oplysninger hurtigt og præcist.',
    company: 'DreistStorgaard Advokater A/S',
    product: 'BiQ Insight',
  },
]

function Initials({ name, dark }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
        dark ? 'bg-accent text-primary' : 'bg-accent-light text-primary'
      }`}
    >
      {initials}
    </span>
  )
}

function SocialProof() {
  const [featured, ...rest] = TESTIMONIALS
  return (
    <section id="kunder" className="pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink max-w-2xl">
            Mere end <CountUp target={1200} format /> virksomheder træffer bedre beslutninger med BiQ
          </h2>
          <p className="text-muted max-w-sm lg:text-right">
            Fra lokale håndværkere til banker og revisionshuse — over hele landet.
          </p>
        </div>

        {/* Logo marquee */}
        <div className="reveal relative mt-12 overflow-hidden rounded-2xl border border-divider bg-white py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS].map(({ name, I }, i) => (
              <span
                key={i}
                aria-hidden={i >= CUSTOMER_LOGOS.length}
                className="mx-8 sm:mx-10 flex items-center gap-2 text-primary/45 hover:text-primary transition-colors"
              >
                <I className="h-5 w-5" strokeWidth={2.2} />
                <span className="text-lg font-semibold tracking-tight whitespace-nowrap">{name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-6 grid lg:grid-cols-[1.25fr_1fr] gap-6">
          <figure className="reveal relative overflow-hidden rounded-3xl bg-primary p-8 sm:p-12 text-white flex flex-col justify-between min-h-[380px]">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <Quote className="relative h-10 w-10 text-accent" strokeWidth={1.5} />
            <blockquote className="relative mt-6 text-xl sm:text-2xl font-medium leading-snug tracking-tight">
              “{featured.quote}”
            </blockquote>
            <div className="relative mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <figcaption className="flex items-center gap-3">
                <Initials name={featured.company} dark />
                <span>
                  <span className="block font-semibold">{featured.company}</span>
                  <span className="block text-sm text-white/60">{featured.product}</span>
                </span>
              </figcaption>
            </div>
          </figure>

          <div className="grid gap-6">
            {rest.map((t) => (
              <figure key={t.company} className="reveal rounded-3xl bg-white border border-divider p-7 sm:p-8 flex flex-col justify-between">
                <blockquote className="text-[15px] text-ink leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Initials name={t.company} />
                  <span>
                    <span className="block text-sm font-semibold text-ink">{t.company}</span>
                    <span className="block text-xs text-muted">{t.product}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Webinars — upcoming with countdown. Data fra biq.dk/biqs-loesninger/webinarer/
   Tilmelding sker på biq.dk's eventsider.
---------------------------------------------------------------- */
const WEBINARS_URL = 'https://biq.dk/biqs-loesninger/webinarer/'

const WEBINARS = [
  {
    id: 'w1',
    start: '2026-10-22T10:00:00+02:00',
    dur: '45 min.',
    title: 'Effektiv risikovurdering med BiQ Risk – spar tid og minimér tab',
    desc: 'Se hvordan BiQ Risk afdækker risikoadfærd hos nye og eksisterende kunder ud fra mere end 80 opmærksomhedspunkter — og hvordan du automatiserer vurderingen.',
    speaker: 'Martin Willadsen',
    speakerRole: 'BiQ A/S',
    tag: 'BiQ Risk',
    url: 'https://biq.dk/events/biq-risk-22-oktober-2/',
  },
  {
    id: 'w2',
    start: '2026-11-12T10:00:00+01:00',
    dur: '1 t. 15 min.',
    title: 'BiQ Insight online demo – få fuld kontrol over dine forretningsdata',
    desc: 'En komplet gennemgang af BiQ Insight: søg på tværs af virksomheder, personer og ejendomme, og se netværk, ejerstrukturer og nøgletal. Til KYC, AML, kreditvurdering og efterforskning.',
    speaker: 'Steen Hansen',
    speakerRole: 'Product Owner, BiQ Insight & Compliance',
    tag: 'BiQ Insight',
    url: 'https://biq.dk/events/biq-insight-online-demo-12-november/',
  },
  {
    id: 'w3',
    start: '2026-12-03T10:00:00+01:00',
    dur: '30 min.',
    title: 'BiQ Compliance online demo – markedets bedste PEP- og RCA-tjek',
    desc: 'Sådan lever du op til hvidvaskloven med PEP- og RCA-tjek, sanktionslister og effektiv KYC — med adgang til over 12.000 RCA-registreringer.',
    speaker: 'Steen Hansen',
    speakerRole: 'Product Owner, BiQ Insight & Compliance',
    tag: 'BiQ Compliance',
    url: 'https://biq.dk/events/biq-compliance-online-demo-3-december/',
  },
  {
    id: 'w4',
    start: '2026-12-09T10:00:00+01:00',
    dur: '45 min.',
    title: 'Effektiv risikovurdering med BiQ Risk – spar tid og minimér tab',
    desc: 'Se hvordan BiQ Risk afdækker risikoadfærd hos nye og eksisterende kunder ud fra mere end 80 opmærksomhedspunkter — og hvordan du automatiserer vurderingen.',
    speaker: 'Martin Willadsen',
    speakerRole: 'BiQ A/S',
    tag: 'BiQ Risk',
    url: 'https://biq.dk/events/biq-risk-9-december/',
  },
  {
    id: 'w5',
    start: '2026-12-17T10:00:00+01:00',
    dur: '1 t. 15 min.',
    title: 'BiQ Insight online demo – få fuld kontrol over dine forretningsdata',
    desc: 'En komplet gennemgang af BiQ Insight: søg på tværs af virksomheder, personer og ejendomme, og se netværk, ejerstrukturer og nøgletal. Til KYC, AML, kreditvurdering og efterforskning.',
    speaker: 'Steen Hansen',
    speakerRole: 'Product Owner, BiQ Insight & Compliance',
    tag: 'BiQ Insight',
    url: 'https://biq.dk/events/biq-insight-online-demo-17-december/',
  },
]

const fmtDay = new Intl.DateTimeFormat('da-DK', { day: 'numeric', timeZone: 'Europe/Copenhagen' })
const fmtMonth = new Intl.DateTimeFormat('da-DK', { month: 'short', timeZone: 'Europe/Copenhagen' })
const fmtLong = new Intl.DateTimeFormat('da-DK', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Europe/Copenhagen' })
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
const fmtTime = new Intl.DateTimeFormat('da-DK', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Copenhagen' })

function useNow(interval = 1000) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), interval)
    return () => clearInterval(t)
  }, [interval])
  return now
}

function Countdown({ to }) {
  const now = useNow()
  const diff = Math.max(0, new Date(to).getTime() - now)
  const parts = [
    ['dage', Math.floor(diff / 86400000)],
    ['timer', Math.floor(diff / 3600000) % 24],
    ['min.', Math.floor(diff / 60000) % 60],
    ['sek.', Math.floor(diff / 1000) % 60],
  ]
  return (
    <div className="grid grid-cols-4 gap-2">
      {parts.map(([label, v]) => (
        <div key={label} className="rounded-xl bg-white/10 border border-white/10 py-3 text-center">
          <p className="text-2xl sm:text-3xl font-semibold tabular-nums">{String(v).padStart(2, '0')}</p>
          <p className="text-[10px] uppercase tracking-wider text-white/50 mt-0.5">{label}</p>
        </div>
      ))}
    </div>
  )
}

function SignupLink({ url, dark }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={dark ? 'btn-primary !bg-accent !text-primary hover:!bg-white' : 'btn-primary !py-2.5'}
    >
      Tilmeld dig gratis <ArrowUpRight className="h-4 w-4" />
    </a>
  )
}

function Webinars() {
  const now = useNow(60000)
  const upcoming = WEBINARS.filter((w) => new Date(w.start).getTime() > now)
  const [next, ...later] = upcoming

  return (
    <section id="webinarer" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">Webinarer</h2>
            <p className="mt-4 text-muted">
              Gratis online sessioner, hvor vi viser, hvordan du får mest ud af data — live eller når det passer dig.
            </p>
          </div>
          <a href={WEBINARS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 self-start md:self-auto text-sm font-semibold text-ink hover:text-accent-dark transition">
            Alle webinarer på biq.dk <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {upcoming.length === 0 ? (
            <p className="mt-12 text-muted">
              Der er ingen planlagte webinarer lige nu — se{' '}
              <a href={WEBINARS_URL} className="font-semibold text-ink underline">biq.dk</a> for nye datoer.
            </p>
          ) : (
            <div key="upcoming" className="mt-12 grid lg:grid-cols-[1fr_1.35fr] gap-6" style={{ animation: 'fade-up 0.4s ease-out' }}>
              {/* Next webinar — featured */}
              <article className="relative overflow-hidden rounded-3xl bg-primary p-7 sm:p-10 text-white flex flex-col">
                <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
                <div className="relative flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
                    <span className="relative h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Næste webinar</span>
                  <span className="ml-auto rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium">{next.tag}</span>
                </div>
                <h3 className="relative mt-6 text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">{next.title}</h3>
                <p className="relative mt-3 text-sm text-white/65 leading-relaxed">{next.desc}</p>
                <div className="relative mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-accent" /> {capitalize(fmtLong.format(new Date(next.start)))}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-accent" /> kl. {fmtTime.format(new Date(next.start))} · {next.dur}
                  </span>
                </div>
                <div className="relative mt-8">
                  <Countdown to={next.start} />
                </div>
                <ul className="relative mt-6 grid sm:grid-cols-3 gap-2 text-xs text-white/75">
                  {['Live demo & Q&A', 'Online', '100 % uforpligtende'].map((b) => (
                    <li key={b} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 mt-auto">
                  <span className="flex items-center gap-3">
                    <Initials name={next.speaker} dark />
                    <span>
                      <span className="block text-sm font-semibold">{next.speaker}</span>
                      <span className="block text-xs text-white/55">{next.speakerRole}</span>
                    </span>
                  </span>
                  <SignupLink url={next.url} dark />
                </div>
              </article>

              {/* Later webinars */}
              <div className="rounded-3xl bg-white border border-divider divide-y divide-divider">
                {later.map((w) => {
                  const d = new Date(w.start)
                  return (
                    <article key={w.id} className="p-6 sm:p-7 flex flex-col sm:flex-row gap-5">
                      <div className="flex sm:flex-col items-center sm:justify-center gap-2 sm:gap-0 shrink-0 sm:w-16 sm:h-16 rounded-xl sm:bg-accent-soft sm:border sm:border-accent-light">
                        <span className="text-2xl font-semibold text-ink leading-none tabular-nums">{fmtDay.format(d).replace('.', '')}</span>
                        <span className="text-xs font-semibold uppercase text-accent-dark sm:mt-1">{fmtMonth.format(d).replace('.', '')}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-[11px] font-semibold text-primary">{w.tag}</span>
                          <span className="text-xs text-muted">
                            kl. {fmtTime.format(d)} · {w.dur}
                          </span>
                        </div>
                        <h3 className="mt-2 font-semibold text-ink leading-snug">{w.title}</h3>
                        <p className="mt-1 text-sm text-muted">
                          {w.speaker} · {w.speakerRole}
                        </p>
                        <div className="mt-4">
                          <SignupLink url={w.url} />
                        </div>
                      </div>
                    </article>
                  )
                })}
                <div className="p-6 sm:p-7 flex items-center justify-between gap-4 bg-accent-soft/60 rounded-b-3xl">
                  <span className="flex items-center gap-2 text-sm text-muted">
                    <Video className="h-4 w-4 text-accent-dark" /> Alle webinarer afholdes online og er gratis og 100 % uforpligtende.
                  </span>
                </div>
              </div>
            </div>
          )}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact Form
---------------------------------------------------------------- */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const dropRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Simulated submission
    setTimeout(() => setStatus('sent'), 1200)
  }

  const handleFiles = (newFiles) => {
    setFiles((prev) => [...prev, ...Array.from(newFiles)].slice(0, 5))
  }

  const contactRows = [
    { Icon: Phone, label: 'Ring direkte', value: PHONE, href: PHONE_HREF },
    { Icon: Mail, label: 'Skriv til', value: EMAIL, href: `mailto:${EMAIL}` },
    { Icon: MapPin, label: 'Hovedkontor', value: ADDRESS },
    { Icon: Clock, label: 'Support', value: 'Hverdage 8–17' },
  ]

  return (
    <section id="kontakt" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="reveal lg:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">Book en demo, eller prøv BiQ gratis</h2>
          <p className="text-muted text-lg mt-5 leading-relaxed max-w-md">
            På 20 minutter viser vi, hvordan BiQ passer til jeres branche — og hvor jeres næste kunder er.
          </p>

          <div className="mt-10 space-y-4">
            {contactRows.map(({ Icon, label, value, href }) => {
              const Tag = href ? 'a' : 'div'
              return (
                <Tag key={label} {...(href ? { href } : {})} className={`flex items-center gap-4 group ${href ? 'lift-on-hover' : ''}`}>
                  <span className={`h-11 w-11 rounded-lg bg-accent-light flex items-center justify-center transition ${href ? 'group-hover:bg-primary' : ''}`}>
                    <Icon className={`h-5 w-5 text-primary ${href ? 'group-hover:text-white' : ''}`} />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="font-semibold text-ink">{value}</span>
                  </span>
                </Tag>
              )
            })}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-accent-soft border border-accent-light">
            <p className="text-xs font-semibold text-primary mb-1.5 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-accent-dark" /> Datasikkerhed
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Vi bruger kun dine oplysninger til at kontakte dig om din forespørgsel. Uploadede filer slettes efter demoen, og vi
              deler aldrig data med tredjepart.
            </p>
          </div>
        </div>

        <div className="reveal lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-white border border-divider rounded-3xl p-6 sm:p-10 shadow-xl shadow-primary/5">
            {status !== 'sent' ? (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Navn" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label="Arbejdsmail" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                  <Field label="Telefonnummer" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                  <Field label="Virksomhed" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                </div>

                <div className="mt-5">
                  <label className="text-sm font-medium text-ink mb-2 block">Hvad vil du gerne opnå? *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Fx: Vi vil finde flere kunder i byggebranchen i Jylland..."
                    className="w-full bg-background border border-divider rounded-lg px-4 py-3 text-ink placeholder-muted/60 focus:border-accent-dark focus:ring-4 focus:ring-accent/25 outline-none transition resize-none"
                  />
                </div>

                <div
                  ref={dropRef}
                  onDragOver={(e) => {
                    e.preventDefault()
                    dropRef.current?.classList.add('!border-accent-dark', '!bg-accent-soft')
                  }}
                  onDragLeave={() => dropRef.current?.classList.remove('!border-accent-dark', '!bg-accent-soft')}
                  onDrop={(e) => {
                    e.preventDefault()
                    dropRef.current?.classList.remove('!border-accent-dark', '!bg-accent-soft')
                    handleFiles(e.dataTransfer.files)
                  }}
                  className="mt-5 border-2 border-dashed border-divider rounded-2xl p-6 text-center hover:border-accent transition-colors cursor-pointer"
                >
                  <input type="file" multiple id="file-up" className="hidden" onChange={(e) => handleFiles(e.target.files)} accept=".csv,.xlsx,.xls" />
                  <label htmlFor="file-up" className="cursor-pointer block">
                    <Upload className="h-6 w-6 mx-auto text-accent-dark mb-2" />
                    <p className="font-semibold text-ink text-sm">Vedhæft en kundeliste (valgfrit)</p>
                    <p className="text-xs text-muted mt-1">Vi viser, hvordan BiQ beriger den — CSV eller Excel, max 5 filer</p>
                    {files.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {files.map((f, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 bg-accent-light text-primary text-xs px-3 py-1.5 rounded-full">
                            <CheckCircle2 className="h-3 w-3" />
                            {f.name.length > 22 ? f.name.slice(0, 22) + '…' : f.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </label>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs text-muted">Vi vender tilbage inden for én hverdag. Felter med * er påkrævede.</p>
                  <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-50">
                    {status === 'sending' ? 'Sender...' : 'Book demo'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="h-16 w-16 mx-auto rounded-full bg-accent-light flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-2xl text-ink mb-3">Tak — vi glæder os!</h3>
                <p className="text-muted max-w-md mx-auto">
                  En af vores rådgivere kontakter dig inden for én hverdag for at finde et tidspunkt til din demo.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', required, value, onChange }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-divider rounded-lg px-4 py-3 text-ink placeholder-muted/60 focus:border-accent-dark focus:ring-4 focus:ring-accent/25 outline-none transition"
      />
    </div>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <img src="/logo-full-white.png" alt="BiQ — Better Data & Decision Quality" className="h-16 w-auto" />
            <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-xs">
              Dansk erhvervs- og ejendomsdata samlet på én platform — så du kan træffe bedre beslutninger.
            </p>
            <p className="text-xs text-white/35 mt-6">BiQ A/S · CVR: 25 72 90 13</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Moduler</p>
            <ul className="space-y-2.5">
              {MODULES.slice(0, 4).map((s) => (
                <li key={s.title}>
                  <a href="#moduler" className="text-white/70 hover:text-white transition text-sm">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">BiQ</p>
            <ul className="space-y-2.5">
              <li><a href="#platform" className="text-white/70 hover:text-white transition text-sm">Platform</a></li>
              <li><a href="#loesninger" className="text-white/70 hover:text-white transition text-sm">Løsninger</a></li>
              <li><a href="#kunder" className="text-white/70 hover:text-white transition text-sm">Kunder</a></li>
              <li><a href="#webinarer" className="text-white/70 hover:text-white transition text-sm">Webinarer</a></li>
              <li><a href="#om" className="text-white/70 hover:text-white transition text-sm">Om BiQ</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Kontakt</p>
            <ul className="space-y-2.5">
              <li><a href={PHONE_HREF} className="text-white/70 hover:text-white transition text-sm">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="text-white/70 hover:text-white transition text-sm">{EMAIL}</a></li>
              <li className="text-white/70 text-sm">{ADDRESS}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs text-white/60">Alle systemer kører · Data opdateret i dag</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-xs">
            <Link to="/privacy" className="hover:text-white transition">Privatlivspolitik</Link>
            <Link to="/terms" className="hover:text-white transition">Vilkår</Link>
            <span>© 2026 BiQ</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.reveal', {
        start: 'top 88%',
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, overwrite: true }),
      })
      gsap.from('.dash-bar', {
        scaleY: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: { trigger: '.dash-bar', start: 'top 90%', once: true },
      })
    })
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 300)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1200)
    return () => {
      ctx.revert()
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <DataSources />
        <CtaBand />
        <FindUnderstandFollow />
        <Segments />
        <SocialProof />
        <Stats />
        <Personas />
        <Modules />
        <Webinars />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
