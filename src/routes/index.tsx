import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Smartphone,
  PenTool,
  Palette,
  Cpu,
  Cloud,
  Compass,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Plus,
  Minus,
  Quote,
  Globe,
  Menu,
  X,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/bmjir.png";

import { useLanguage } from "@/lib/language-context";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kencana Digital — Premium Luxury Digital & Tech Studio" },
      {
        name: "description",
        content:
          "Premium digital studio crafting high-end bespoke websites, enterprise software, and elegant mobile apps. Discover how KencanaDigital crafts luxury digital experiences.",
      },
      {
        property: "og:title",
        content: "Kencana Digital — Premium Luxury Digital & Tech Studio",
      },
      {
        property: "og:description",
        content:
          "Transform your brand with bespoke, elite digital experiences crafted with unparalleled design and technical precision.",
      },
      {
        property: "og:url",
        content: "https://kencanadigital.com/",
      },
    ],
  }),
  component: LandingPage,
});

/* ---------- Language Switcher Component ---------- */
function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full p-0.5 border border-warm-border bg-pearl/80 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-label="Switch to English"
        className={`px-2.5 py-1 text-[0.65rem] sm:text-[0.68rem] font-medium tracking-wider uppercase rounded-full transition-all duration-300 ${
          lang === "en"
            ? "bg-rose-gold-deep text-ivory shadow-[0_2px_8px_-2px_rgba(142,92,103,0.5)] font-semibold"
            : "text-charcoal/60 hover:text-charcoal"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("id")}
        aria-label="Ganti ke Bahasa Indonesia"
        className={`px-2.5 py-1 text-[0.65rem] sm:text-[0.68rem] font-medium tracking-wider uppercase rounded-full transition-all duration-300 ${
          lang === "id"
            ? "bg-rose-gold-deep text-ivory shadow-[0_2px_8px_-2px_rgba(142,92,103,0.5)] font-semibold"
            : "text-charcoal/60 hover:text-charcoal"
        }`}
      >
        ID
      </button>
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 py-3 sm:py-4 md:py-6 px-3 sm:px-6 md:px-10 pointer-events-none">
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between pointer-events-auto rounded-full py-2 sm:py-2.5 px-3.5 sm:px-6 transition-all duration-300 ${
          scrolled
            ? "glass-panel bg-ivory/95 sm:bg-pearl/90 shadow-[var(--shadow-soft)] border border-warm-border/80"
            : "bg-ivory/85 sm:bg-pearl/60 backdrop-blur-md border border-warm-border/60 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src="/Logo.png"
            alt="KencanaDigital Logo"
            className="h-7 sm:h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.78rem] uppercase tracking-[0.22em] text-charcoal/75 hover:text-rose-gold transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          <LanguageToggle />
          <a
            href="#contact"
            className="btn-luxury btn-luxury-hover text-[0.65rem] sm:text-[0.7rem] py-1.5 sm:py-2.5 px-3 sm:px-5 shrink-0 hidden xs:inline-flex"
          >
            {t.nav.consult}
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full border border-warm-border bg-pearl/90 text-charcoal hover:text-rose-gold-deep transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mt-2 mx-auto max-w-[1400px] pointer-events-auto rounded-2xl glass-panel bg-ivory/95 backdrop-blur-xl border border-warm-border p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]"
          >
            <div className="flex flex-col space-y-3.5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-[0.16em] uppercase text-charcoal/80 hover:text-rose-gold-deep py-1.5 border-b border-warm-border/40 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-luxury btn-luxury-hover w-full justify-center text-xs py-2.5 text-center"
                >
                  {t.nav.consult}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-28 sm:pt-24 md:pt-28 pb-16 sm:pb-24 md:pb-24">
      <div className="pointer-events-none absolute -top-40 -right-40 w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] rounded-full opacity-40"
           style={{ background: "radial-gradient(closest-side, var(--champagne), transparent 70%)" }} />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full opacity-30"
           style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--rose-gold) 60%, transparent), transparent 70%)" }} />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <motion.div style={{ opacity }} className="lg:col-span-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5 sm:mb-8"
          >
            <span className="rose-divider" />
            <span className="eyebrow">{t.hero.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="text-display text-[2.15rem] xs:text-[2.65rem] sm:text-[3.5rem] lg:text-[4.75rem] leading-[1.08] sm:leading-[1.02] text-charcoal"
          >
            Crafting <em className="text-serif italic text-rose-gold-deep">exceptional</em>
            <br />
            digital experiences.
          </motion.h1>

          <motion.p
            key={t.hero.desc}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-5 sm:mt-8 max-w-xl text-[0.95rem] sm:text-[1.05rem] leading-[1.7] sm:leading-[1.75] text-charcoal/70"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 sm:mt-10 flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 sm:gap-4"
          >
            <a href="#contact" className="btn-luxury btn-luxury-hover justify-center text-center">
              {t.hero.ctaPrimary} <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#experience" className="btn-ghost-luxury justify-center text-center">{t.hero.ctaSecondary}</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="mt-10 sm:mt-16 grid grid-cols-3 gap-2 sm:gap-6 border-t border-warm-border pt-6 sm:pt-8"
          >
            <div className="text-center sm:text-left">
              <div className="text-display text-2xl sm:text-3xl text-charcoal">3<span className="text-rose-gold">+</span></div>
              <div className="text-[0.62rem] sm:text-[0.7rem] uppercase tracking-[0.16em] sm:tracking-[0.24em] text-charcoal/55 mt-1">{t.hero.years}</div>
            </div>
            <div className="text-center sm:text-left border-x border-warm-border px-2 sm:px-6">
              <div className="text-display text-2xl sm:text-3xl text-charcoal">10<span className="text-rose-gold">+</span></div>
              <div className="text-[0.62rem] sm:text-[0.7rem] uppercase tracking-[0.16em] sm:tracking-[0.24em] text-charcoal/55 mt-1">{t.hero.projects}</div>
            </div>
            <div className="text-center sm:text-left pl-2 sm:pl-0">
              <div className="text-display text-2xl sm:text-3xl text-charcoal">98<span className="text-rose-gold">%</span></div>
              <div className="text-[0.62rem] sm:text-[0.7rem] uppercase tracking-[0.16em] sm:tracking-[0.24em] text-charcoal/55 mt-1">{t.hero.satisfaction}</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y }} className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-25px_rgba(142,92,103,0.35)]"
          >
            <img
              src={heroImg}
              alt="Luxury workspace with editorial digital design"
              width={1600}
              height={1200}
              className="w-full h-[320px] xs:h-[400px] sm:h-[500px] md:h-[620px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/10 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Section wrapper ---------- */
function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 md:py-32 scroll-mt-20 sm:scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        {(eyebrow || title) && (
          <div className="max-w-3xl mb-10 sm:mb-16 md:mb-20">
            {eyebrow && (
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="rose-divider" />
                <span className="eyebrow">{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="text-display text-[1.85rem] xs:text-[2.25rem] sm:text-[2.75rem] lg:text-[3.5rem] text-charcoal leading-[1.1] sm:leading-[1.05]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 sm:mt-6 text-[0.95rem] sm:text-[1.02rem] leading-[1.7] sm:leading-[1.8] text-charcoal/70 max-w-2xl">{intro}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------- Reveal (smooth luxury fade) ---------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- About ---------- */
function About() {
  const { t } = useLanguage();

  return (
    <Section
      id="about"
      eyebrow={t.about.eyebrow}
      title={<>An atelier for <em className="text-serif italic text-rose-gold-deep">brands</em> that value quiet excellence.</>}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="rounded-[1.25rem] sm:rounded-[1.75rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(142,92,103,0.25)]">
              <img src={aboutImg} alt="Design studio interior"
                   width={1200} height={1400} loading="lazy"
                   className="w-full h-[300px] xs:h-[380px] sm:h-[460px] md:h-[520px] object-cover" />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="text-serif text-[1.25rem] sm:text-[1.45rem] md:text-[1.6rem] leading-[1.5] sm:leading-[1.55] text-charcoal/85">
              {t.about.mainText}
            </p>
          </Reveal>
          <div className="mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 sm:gap-y-10">
            {t.about.pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.06}>
                <div>
                  <div className="hairline mb-4 sm:mb-5" />
                  <h3 className="text-display text-[1.2rem] sm:text-[1.35rem] text-charcoal mb-2 sm:mb-3">{p.t}</h3>
                  <p className="text-[0.9rem] sm:text-[0.95rem] leading-[1.7] sm:leading-[1.75] text-charcoal/65">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const { t } = useLanguage();

  const serviceIcons = [
    Layers,
    Cpu,
    Smartphone,
    PenTool,
    Palette,
    Sparkles,
    Cloud,
    Compass,
  ];

  const services = t.services.items.map((item, idx) => ({
    icon: serviceIcons[idx],
    t: item.t,
    d: item.d,
  }));

  return (
    <Section
      id="services"
      eyebrow="Disciplines"
      title={<>A complete studio, under <em className="text-serif italic text-rose-gold-deep">one roof</em>.</>}
      intro={t.services.intro}
      className="bg-pearl/60"
    >
      <HoneycombServices services={services} />
    </Section>
  );
}

type Cell = { c: number; r: number; s?: number; deco?: boolean };

function HoneycombCluster({
  services,
  cells,
  className = "",
}: {
  services: { icon: React.ElementType; t: string; d: string }[];
  cells: Cell[];
  className?: string;
}) {
  const W = 100;
  const H = 115.47; // W * 2/sqrt(3)
  const VSTEP = H * 0.75;

  const xs = cells.map((c) => c.c * W);
  const ys = cells.map((c) => c.r * VSTEP);
  const minX = Math.min(...xs) - 4;
  const maxX = Math.max(...xs) + W + 4;
  const minY = Math.min(...ys) - 4;
  const maxY = Math.max(...ys) + H + 4;
  const vbW = maxX - minX;
  const vbH = maxY - minY;

  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: `${vbW} / ${vbH}` }}>
      {cells.map((cell, i) => {
        const x = cell.c * W - minX;
        const y = cell.r * VSTEP - minY;
        const leftPct = (x / vbW) * 100;
        const topPct = (y / vbH) * 100;
        const wPct = (W / vbW) * 100;
        const hPct = (H / vbH) * 100;

        const dealDelay = i * 0.04;

        if (cell.deco) {
          return (
            <motion.div
              key={`d-${i}`}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: dealDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute pointer-events-none"
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                width: `${wPct}%`,
                height: `${hPct}%`,
                transformOrigin: "center",
              }}
            >
              <svg viewBox="0 0 100 115.47" preserveAspectRatio="none" className="w-full h-full">
                <polygon
                  points="50,2 96,28.75 96,86.72 50,113.47 4,86.72 4,28.75"
                  fill="transparent"
                  stroke="var(--rose-gold)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  opacity="0.45"
                />
              </svg>
            </motion.div>
          );
        }

        const s = services[cell.s!];
        const HexIcon = s.icon;
        return (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.55,
              delay: dealDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4, scale: 1.04 }}
            className="absolute cursor-default"
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
              width: `${wPct}%`,
              height: `${hPct}%`,
              transformOrigin: "center",
            }}
          >
            <svg viewBox="0 0 100 115.47" preserveAspectRatio="none" className="absolute inset-0 w-full h-full drop-shadow-sm">
              <polygon
                points="50,2 96,28.75 96,86.72 50,113.47 4,86.72 4,28.75"
                fill="color-mix(in oklab, var(--rose-gold) 55%, white)"
                stroke="var(--rose-gold-deep)"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center p-1 sm:p-2">
              <div className="flex flex-col items-center justify-center gap-0.5 sm:gap-1.5 md:gap-2 w-[82%] sm:w-[80%]">
                <HexIcon className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white shrink-0" />
                <span className="text-[0.42rem] min-[360px]:text-[0.46rem] min-[400px]:text-[0.52rem] sm:text-[0.62rem] md:text-[0.7rem] uppercase tracking-[0.01em] min-[360px]:tracking-[0.03em] sm:tracking-[0.08em] leading-[1.12] sm:leading-[1.15] text-white font-semibold break-words">
                  {s.t}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function HoneycombServices({ services }: { services: { icon: React.ElementType; t: string; d: string }[] }) {
  const desktopCells: Cell[] = [
    { c: 0.5, r: 0, deco: true },
    { c: 1.5, r: 0, deco: true },
    { c: 2.5, r: 0, deco: true },
    { c: 3.5, r: 0, s: 0 },
    { c: 4.5, r: 0, s: 1 },
    { c: 0, r: 1, deco: true },
    { c: 1, r: 1, s: 2 },
    { c: 2, r: 1, s: 3 },
    { c: 3, r: 1, s: 4 },
    { c: 4, r: 1, deco: true },
    { c: 0.5, r: 2, s: 5 },
    { c: 1.5, r: 2, s: 6 },
    { c: 2.5, r: 2, s: 7 },
    { c: 3.5, r: 2, deco: true },
    { c: 4.5, r: 2, deco: true },
    { c: 1, r: 3, deco: true },
    { c: 2, r: 3, deco: true },
    { c: 3, r: 3, deco: true },
    { c: 4, r: 3, deco: true },
  ];

  const mobileCells: Cell[] = [
    { c: 0.5, r: 0, deco: true },
    { c: 1.5, r: 0, s: 0 },
    { c: 2.5, r: 0, deco: true },
    { c: 0, r: 1, s: 1 },
    { c: 1, r: 1, deco: true },
    { c: 2, r: 1, s: 2 },
    { c: 3, r: 1, deco: true },
    { c: 0.5, r: 2, s: 3 },
    { c: 1.5, r: 2, s: 4 },
    { c: 2.5, r: 2, s: 5 },
    { c: 0, r: 3, deco: true },
    { c: 1, r: 3, s: 6 },
    { c: 2, r: 3, deco: true },
    { c: 3, r: 3, s: 7 },
    { c: 1.5, r: 4, deco: true },
    { c: 2.5, r: 4, deco: true },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl">
      <HoneycombCluster
        services={services}
        cells={desktopCells}
        className="hidden md:block mx-auto w-full"
      />
      <HoneycombCluster
        services={services}
        cells={mobileCells}
        className="block md:hidden mx-auto w-full max-w-[380px] xs:max-w-[440px]"
      />
    </div>
  );
}

/* ---------- Portfolio ---------- */
function Experience() {
  const { t } = useLanguage();

  const projects = t.experience.projects.map((p) => ({
    cat: p.cat,
    industry: p.industry,
    title: p.title,
    tech: p.tech,
    overview: p.overview,
  }));


  return (
    <Section
      id="experience"
      eyebrow={t.experience.eyebrow}
      title={<>Objects of <em className="text-serif italic text-rose-gold-deep">quiet</em> distinction.</>}
      intro={t.experience.intro}
    >
      {/* Mobile: swipeable auto-slider */}
      <div className="md:hidden">
        <PortfolioSlider projects={projects} />
      </div>

      {/* Desktop: alternating stacked layout */}
      <div className="hidden md:block space-y-24">
        {projects.map((p, i) => (
          <Reveal key={p.title}>
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}>
              <div className="lg:col-span-7">
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.5 }}
                            className="rounded-[1.5rem] overflow-hidden shadow-[0_30px_70px_-30px_rgba(142,92,103,0.28)] relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[380px] md:h-[500px] object-cover bg-charcoal/10"
                  >
                    <source src="" type="video/mp4" />
                  </video>
                  {/* Placeholder overlay when no video source */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-champagne/40 via-pearl/60 to-ivory/40 backdrop-blur-[2px]">
                    <div className="w-16 h-16 rounded-full border-2 border-rose-gold-deep/50 flex items-center justify-center bg-white/60 shadow-lg">
                      <svg className="w-6 h-6 text-rose-gold-deep ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="eyebrow text-charcoal/50 text-[0.65rem]">Video Coming Soon</span>
                  </div>
                </motion.div>
              </div>
              <div className="lg:col-span-5">
                <div className="eyebrow mb-4">{p.cat} — {p.industry}</div>
                <h3 className="text-display text-[2rem] md:text-[2.5rem] text-charcoal leading-[1.05]">
                  {p.title}
                </h3>
                <div className="hairline my-6" />
                <p className="text-[1.02rem] leading-[1.8] text-charcoal/70">{p.overview}</p>
                <div className="mt-6 text-[0.78rem] tracking-[0.14em] uppercase text-charcoal/55">
                  {p.tech}
                </div>
                <a href="#contact"
                   className="mt-8 inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.22em] text-charcoal gold-underline pb-1 hover:text-rose-gold-deep transition-colors">
                  {t.experience.viewCaseStudy} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

type Project = {
  cat: string;
  industry: string;
  title: string;
  tech: string;
  overview: string;
};


function PortfolioSlider({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = projects.length;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const go = (i: number) => setIndex(((i % count) + count) % count);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 220, damping: 32 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragStart={() => setPaused(true)}
          onDragEnd={(_, info) => {
            const threshold = 50;
            if (info.offset.x < -threshold) go(index + 1);
            else if (info.offset.x > threshold) go(index - 1);
            window.setTimeout(() => setPaused(false), 800);
          }}
        >
          {projects.map((p) => (
            <div key={p.title} className="min-w-full px-0.5">
              <div className="rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(142,92,103,0.25)] relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  draggable={false}
                  className="w-full h-[220px] xs:h-[280px] sm:h-[340px] object-cover select-none pointer-events-none bg-charcoal/10"
                >
                  <source src="" type="video/mp4" />
                </video>
                {/* Placeholder overlay when no video source */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-gradient-to-br from-champagne/40 via-pearl/60 to-ivory/40 backdrop-blur-[2px]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-rose-gold-deep/50 flex items-center justify-center bg-white/60 shadow-lg">
                    <svg className="w-5 h-5 text-rose-gold-deep ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="eyebrow text-charcoal/50 text-[0.6rem]">Video Coming Soon</span>
                </div>
              </div>
              <div className="mt-5 px-1">
                <div className="eyebrow mb-2 sm:mb-3">{p.cat} — {p.industry}</div>
                <h3 className="text-display text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] text-charcoal leading-[1.1]">
                  {p.title}
                </h3>
                <div className="hairline my-4" />
                <p className="text-[0.92rem] sm:text-[0.98rem] leading-[1.7] text-charcoal/70">{p.overview}</p>
                <div className="mt-4 text-[0.7rem] tracking-[0.14em] uppercase text-charcoal/55">
                  {p.tech}
                </div>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-charcoal gold-underline pb-1 hover:text-rose-gold-deep transition-colors"
                >
                  {t.experience.viewCaseStudy} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2.5">
        {projects.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className="group h-2 rounded-full transition-all"
            style={{
              width: i === index ? 28 : 8,
              background:
                i === index
                  ? "var(--rose-gold-deep)"
                  : "color-mix(in oklab, var(--rose-gold) 40%, transparent)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Process ---------- */
function Process() {
  const { t } = useLanguage();

  return (
    <Section
      id="process"
      eyebrow={t.process.eyebrow || "The Method"}
      title={<>A measured process, from <em className="text-serif italic text-rose-gold-deep">first sketch</em> to lasting growth.</>}
      className="bg-pearl/60"
    >
      <div className="relative overflow-hidden md:overflow-visible">
        <div className="flex md:grid md:grid-cols-7 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 gap-6 md:gap-x-6 snap-x snap-mandatory scrollbar-none relative py-4 px-2 md:px-0">
          
          {/* Connecting Line */}
          <div 
            className="absolute top-[48px] sm:top-[54px] h-px pointer-events-none left-[60px] md:left-[50px] md:right-[50px] w-[800px] md:w-[calc(100%-100px)]"
            style={{ background: "linear-gradient(90deg, var(--rose-gold) 20%, var(--gold-soft) 80%)" }} 
          />
          
          {t.process.steps.map((s, i) => (
            <Reveal key={s} delay={i * 0.05} className="snap-center shrink-0 min-w-[120px] xs:min-w-[130px] md:min-w-0 z-10">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] rounded-full grid place-items-center bg-ivory border border-warm-border shadow-sm"
                     style={{ boxShadow: "0 10px 24px -10px rgba(142,92,103,0.25)" }}>
                  <span className="text-serif italic text-rose-gold-deep text-lg sm:text-xl">0{i + 1}</span>
                </div>
                <div className="mt-4 sm:mt-6 text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-charcoal/60">{t.process.phaseLabel}</div>
                <div className="mt-1 text-display text-sm sm:text-lg text-charcoal font-medium">{s}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Counter ---------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 22 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);
  useEffect(() => spring.on("change", (v) => setVal(Math.round(v))), [spring]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function WhyUs() {
  const { t } = useLanguage();

  const stats = [
    { n: 10, suf: "+", label: t.whyUs.stats[0].label },
    { n: 98, suf: "%", label: t.whyUs.stats[1].label },
    { n: 3, suf: "+", label: t.whyUs.stats[2].label },
    { n: 24, suf: "/7", label: t.whyUs.stats[3].label },
  ];

  return (
    <Section
      eyebrow={t.whyUs.eyebrow || "Why Kencana Digital"}
      title={<>Craft, measured in <em className="text-serif italic text-rose-gold-deep">outcomes</em>.</>}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="border-t border-warm-border pt-5 sm:pt-8">
              <div className="text-display text-[2.25rem] xs:text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] leading-none text-charcoal">
                <Counter to={s.n} suffix={s.suf} />
              </div>
              <div className="mt-3 sm:mt-5 text-[0.65rem] sm:text-[0.75rem] uppercase tracking-[0.18em] sm:tracking-[0.24em] text-charcoal/60">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const { t } = useLanguage();
  const faqs = t.faq.faqs;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      eyebrow={t.faq.eyebrow || "Questions"}
      title={<>Considerations, <em className="text-serif italic text-rose-gold-deep">answered</em>.</>}
    >
      <div className="max-w-3xl mx-auto"> 
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-warm-border">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full py-5 sm:py-7 flex items-center justify-between gap-4 sm:gap-6 text-left group"
              >
                <span className="text-display text-base sm:text-lg md:text-[1.35rem] text-charcoal">
                  {f.q}
                </span>
                <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-warm-border grid place-items-center transition-colors group-hover:border-rose-gold">
                  {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-gold-deep" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal/70" />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-5 sm:pb-7 pr-2 sm:pr-16 text-[0.92rem] sm:text-[0.98rem] leading-[1.7] sm:leading-[1.8] text-charcoal/70">{f.a}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const { t } = useLanguage();

  return (
    <Section
      id="contact"
      eyebrow={t.contact.eyebrow || "Begin the Conversation"}
      title={<>Let us craft something <em className="text-serif italic text-rose-gold-deep">enduring</em> together.</>}
      intro={t.contact.intro}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="card-luxury p-5 xs:p-7 sm:p-8 md:p-10 space-y-5 sm:space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Field label={t.contact.fullName} placeholder={t.contact.fullNamePlaceholder} />
              <Field label={t.contact.email} type="email" placeholder={t.contact.emailPlaceholder} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Field label={t.contact.company} placeholder={t.contact.companyPlaceholder} />
              <Field label={t.contact.budget} placeholder={t.contact.budgetPlaceholder} />
            </div>
            <div>
              <label className="eyebrow block mb-2 sm:mb-3">{t.contact.vision}</label>
              <textarea
                rows={4}
                placeholder={t.contact.visionPlaceholder}
                className="w-full bg-transparent border-b border-warm-border py-2.5 sm:py-3 text-[0.95rem] sm:text-[0.98rem] text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-rose-gold-deep transition-colors"
              />
            </div>
            <button type="submit" className="btn-luxury btn-luxury-hover mt-3 sm:mt-4 w-full sm:w-auto justify-center">
              {t.contact.submit} <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <aside className="lg:col-span-5 space-y-6 sm:space-y-8">
          <ContactRow icon={MapPin} label={t.contact.studio} value="Jl. Imogiri Timur, Gng. Tobanan V, dsn. Jati Rt 008, Wonokromo, Pleret, Bantul, D.I. Yogyakarta, Indonesia" />
          <ContactRow icon={MessageCircle} label={t.contact.whatsapp} value="081227283990 " />
          <ContactRow icon={Clock} label={t.contact.hours} value={t.contact.hoursValue} />
          <div className="hairline" />
          <p className="text-serif italic text-charcoal/70 text-base sm:text-lg leading-relaxed">
            {t.contact.quote}
          </p>
        </aside>
      </div>
    </Section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="eyebrow block mb-2 sm:mb-3">{label}</label>
      <input
        {...rest}
        className="w-full bg-transparent border-b border-warm-border py-2 sm:py-3 text-[0.95rem] sm:text-[0.98rem] text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-rose-gold-deep transition-colors"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3.5 sm:gap-5">
      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full grid place-items-center shrink-0"
           style={{ background: "color-mix(in oklab, var(--champagne) 55%, white)" }}>
        <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-rose-gold-deep" />
      </div>
      <div>
        <div className="eyebrow mb-1">{label}</div>
        <div className="text-charcoal text-[0.92rem] sm:text-[1rem] leading-snug">{value}</div>
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-warm-border mt-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-5 py-6 sm:py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="sm:col-span-2 lg:col-span-5">
          <div className="flex items-center gap-2">
            <img
              src="/Logo.png"
              alt="Kencana Digital Logo"
              className="h-22 sm:h-26 w-auto object-contain"
            />
          </div>
          <p className="mt-4 sm:mt-5 text-[0.9rem] sm:text-[0.95rem] leading-[1.7] sm:leading-[1.8] text-charcoal/65 max-w-md">
            {t.footer.desc}
          </p>
        </div>
        <FooterCol title={t.footer.colStudio} items={["About", "Services", "Experience", "Process"]} />
        <FooterCol title={t.footer.colDisciplines} items={["Web", "Mobile", "Enterprise", "Branding"]} />
        <FooterCol title={t.footer.colContact} items={["Consult", "WhatsApp", "Email", "Jakarta HQ"]} />
      </div>
      <div className="border-t border-warm-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-[0.72rem] sm:text-[0.78rem] text-charcoal/55">
          <span>© {new Date().getFullYear()} Kencana Digital. {t.footer.rights}</span>
          <span className="tracking-[0.2em] sm:tracking-[0.22em] uppercase">{t.footer.craftedIn}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="lg:col-span-2">
      <div className="eyebrow mb-3 sm:mb-5">{title}</div>
      <ul className="space-y-2 sm:space-y-3">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-[0.88rem] sm:text-[0.92rem] text-charcoal/75 hover:text-rose-gold-deep transition-colors">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Floating consult ---------- */
function FloatingConsult() {
  const { t } = useLanguage();

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.72rem] uppercase tracking-[0.22em] text-ivory shadow-[0_20px_50px_-15px_rgba(142,92,103,0.55)] transition-transform hover:-translate-y-0.5"
      style={{ background: "linear-gradient(135deg, var(--rose-gold-deep), var(--rose-gold))" }}
    >
      <MessageCircle className="w-4 h-4" />
      {t.floatingConsult}
    </a>
  );
}

/* ---------- Page ---------- */
function LandingPage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Process />
      <WhyUs />
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
      <Footer />
      <FloatingConsult />
    </main>
  );
}

