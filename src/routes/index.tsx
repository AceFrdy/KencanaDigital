import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
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
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 transition-all duration-500 ${
          scrolled ? "glass-panel rounded-full py-2.5 px-6" : ""
        }`}
      >
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-display text-xl md:text-[1.6rem] text-charcoal">Kencana</span>
          <span className="text-serif italic text-rose-gold text-lg md:text-xl">Digital</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.78rem] uppercase tracking-[0.22em] text-charcoal/75 hover:text-rose-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-luxury btn-luxury-hover text-[0.7rem] py-2.5 px-5">
          Consult
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-40 md:pt-48 pb-24 md:pb-32">
      <div className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-40"
           style={{ background: "radial-gradient(closest-side, var(--champagne), transparent 70%)" }} />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-[420px] h-[420px] rounded-full opacity-30"
           style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--rose-gold) 60%, transparent), transparent 70%)" }} />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div style={{ opacity }} className="lg:col-span-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="rose-divider" />
            <span className="eyebrow">Bespoke Digital Atelier</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            className="text-display text-[2.75rem] sm:text-[3.5rem] lg:text-[4.75rem] leading-[1.02] text-charcoal"
          >
            Crafting <em className="text-serif italic text-rose-gold-deep">exceptional</em>
            <br />
            digital experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 max-w-xl text-[1.05rem] leading-[1.75] text-charcoal/70"
          >
            KencanaDigital creates premium websites, enterprise software, and digital
            experiences designed for brands that value quality, elegance, and long-term
            growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-luxury btn-luxury-hover">
              Start Your Project <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#portfolio" className="btn-ghost-luxury">View Portfolio</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-16 flex items-center gap-8"
          >
            <div>
              <div className="text-display text-3xl text-charcoal">08<span className="text-rose-gold">+</span></div>
              <div className="text-[0.7rem] uppercase tracking-[0.24em] text-charcoal/55 mt-1">Years</div>
            </div>
            <div className="w-px h-10 bg-warm-border" style={{ background: "var(--warm-border)" }} />
            <div>
              <div className="text-display text-3xl text-charcoal">100<span className="text-rose-gold">+</span></div>
              <div className="text-[0.7rem] uppercase tracking-[0.24em] text-charcoal/55 mt-1">Projects</div>
            </div>
            <div className="w-px h-10" style={{ background: "var(--warm-border)" }} />
            <div>
              <div className="text-display text-3xl text-charcoal">98<span className="text-rose-gold">%</span></div>
              <div className="text-[0.7rem] uppercase tracking-[0.24em] text-charcoal/55 mt-1">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y }} className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-30px_rgba(142,92,103,0.35)]"
          >
            <img
              src={heroImg}
              alt="Luxury workspace with editorial digital design"
              width={1600}
              height={1200}
              className="w-full h-[520px] md:h-[620px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/10 via-transparent to-transparent" />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="hidden md:flex absolute -left-6 bottom-10 glass-panel rounded-2xl px-5 py-4 items-center gap-3 shadow-[var(--shadow-lift)]"
          >
            <div className="w-10 h-10 rounded-full grid place-items-center"
                 style={{ background: "linear-gradient(135deg, var(--rose-gold), var(--gold-soft))" }}>
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-charcoal/60">Awarded</div>
              <div className="text-sm text-charcoal">Design Excellence, 2025</div>
            </div>
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
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {(eyebrow || title) && (
          <div className="max-w-3xl mb-16 md:mb-20">
            {eyebrow && (
              <div className="flex items-center gap-3 mb-6">
                <span className="rose-divider" />
                <span className="eyebrow">{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="text-display text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] text-charcoal leading-[1.05]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-6 text-[1.02rem] leading-[1.8] text-charcoal/70 max-w-2xl">{intro}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------- Reveal (solitaire card-deal) ---------- */
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
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -60, x: -40, rotate: -8, scale: 0.9 }}
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }
          : {}
      }
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.5, delay },
      }}
      style={{ transformOrigin: "top left", transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


/* ---------- About ---------- */
function About() {
  const pillars = [
    { t: "Attention to Detail", d: "Every pixel, transition, and line of code refined with the patience of a master craftsman." },
    { t: "Long-term Partnerships", d: "We stay by your side, evolving your product through every chapter of growth." },
    { t: "Premium Craftsmanship", d: "Bespoke systems built to endure — engineered with restraint and elegance." },
    { t: "Reliable Delivery", d: "Predictable timelines, transparent communication, uncompromising standards." },
  ];
  return (
    <Section
      id="about"
      eyebrow="The Atelier"
      title={<>An atelier for <em className="text-serif italic text-rose-gold-deep">brands</em> that value quiet excellence.</>}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="rounded-[1.75rem] overflow-hidden">
              <img src={aboutImg} alt="Design studio interior"
                   width={1200} height={1400} loading="lazy"
                   className="w-full h-[520px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-panel rounded-2xl px-6 py-5 hidden md:block">
              <div className="text-display text-2xl text-charcoal">Est. 2017</div>
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-charcoal/60 mt-1">Jakarta · Global</div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="text-serif text-[1.4rem] md:text-[1.6rem] leading-[1.55] text-charcoal/85">
              KencanaDigital is a studio of designers, engineers and strategists devoted
              to a single idea: that software, when made with care, becomes a lasting
              expression of a brand's character.
            </p>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div>
                  <div className="hairline mb-5" />
                  <h3 className="text-display text-[1.35rem] text-charcoal mb-3">{p.t}</h3>
                  <p className="text-[0.95rem] leading-[1.75] text-charcoal/65">{p.d}</p>
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
  const services = [
    { icon: Layers, t: "Premium Website Development", d: "Editorial, marketing and commerce sites tailored to your brand voice." },
    { icon: Cpu, t: "Enterprise Applications", d: "Robust internal systems that scale with the complexity of your business." },
    { icon: Smartphone, t: "Mobile Applications", d: "Native-quality iOS and Android products, refined to the last detail." },
    { icon: PenTool, t: "UI/UX Design", d: "Interfaces conceived like architecture — considered, generous, humane." },
    { icon: Palette, t: "Branding & Identity", d: "Visual systems that translate strategy into a coherent expression." },
    { icon: Sparkles, t: "AI Solutions", d: "Intelligent workflows and assistants woven quietly into your product." },
    { icon: Cloud, t: "Cloud Infrastructure", d: "Resilient, observable platforms built for continuous evolution." },
    { icon: Compass, t: "Digital Consulting", d: "Strategy engagements that align product, brand and technology." },
  ];
  return (
    <Section
      id="services"
      eyebrow="Disciplines"
      title={<>A complete studio, under <em className="text-serif italic text-rose-gold-deep">one roof</em>.</>}
      intro="From first concept to continuous evolution, every discipline required to shape a category-defining digital product lives inside the atelier."
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

        // Solitaire card-deal: cards fly in from top-left pile with rotation
        const dealDelay = i * 0.07;

        if (cell.deco) {
          return (
            <motion.div
              key={`d-${i}`}
              initial={{ opacity: 0, x: -120, y: -160, rotate: -25, scale: 0.75 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
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
                  opacity="0.5"
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
            initial={{ opacity: 0, x: -140, y: -180, rotate: -30, scale: 0.7 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.75,
              delay: dealDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4, scale: 1.04, rotate: 0 }}
            className="absolute cursor-default"
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
              width: `${wPct}%`,
              height: `${hPct}%`,
              transformOrigin: "center",
            }}
          >
            <svg viewBox="0 0 100 115.47" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              <polygon
                points="50,2 96,28.75 96,86.72 50,113.47 4,86.72 4,28.75"
                fill="color-mix(in oklab, var(--rose-gold) 55%, white)"
                stroke="var(--rose-gold-deep)"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center">
              <div className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2 w-[80%]">
                <HexIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white shrink-0" />
                <span className="text-[0.46rem] sm:text-[0.6rem] md:text-[0.72rem] uppercase tracking-[0.06em] sm:tracking-[0.1em] leading-[1.15] text-white font-semibold break-words hyphens-auto">
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
  // Unified honeycomb matching reference image. Pointy-top with row offset 0.5.
  // Service indices: 0=Website Dev, 1=Enterprise, 2=Mobile, 3=UI/UX, 4=Branding,
  //                  5=AI, 6=Cloud, 7=Digital Consulting
  const cells: Cell[] = [
    // Row 0 — top: 3 outlines on the left, 2 filled on the right
    { c: 0.5, r: 0, deco: true },
    { c: 1.5, r: 0, deco: true },
    { c: 2.5, r: 0, deco: true },
    { c: 3.5, r: 0, s: 0 }, // Website Development
    { c: 4.5, r: 0, s: 1 }, // Enterprise Applications
    // Row 1 — 3 filled center flanked by outlines
    { c: 0, r: 1, deco: true },
    { c: 1, r: 1, s: 2 }, // Mobile Apps
    { c: 2, r: 1, s: 3 }, // UI/UX Design
    { c: 3, r: 1, s: 4 }, // Branding & Identity
    { c: 4, r: 1, deco: true },
    // Row 2 — 3 filled on the left, 2 outlines right
    { c: 0.5, r: 2, s: 5 }, // AI Solutions
    { c: 1.5, r: 2, s: 6 }, // Cloud Infrastructure
    { c: 2.5, r: 2, s: 7 }, // Digital Consulting
    { c: 3.5, r: 2, deco: true },
    { c: 4.5, r: 2, deco: true },
    // Row 3 — bottom decorative row
    { c: 1, r: 3, deco: true },
    { c: 2, r: 3, deco: true },
    { c: 3, r: 3, deco: true },
    { c: 4, r: 3, deco: true },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl">
      <HoneycombCluster services={services} cells={cells} className="mx-auto w-[96%] sm:w-[92%] md:w-full" />
    </div>
  );
}




/* ---------- Portfolio ---------- */
function Portfolio() {
  const projects = [
    {
      img: portfolio1,
      cat: "Editorial Commerce",
      industry: "Luxury Beauty",
      title: "Maison Célestine",
      tech: "Next.js · Shopify · Sanity",
      overview: "A poetic commerce experience for a heritage French skincare house.",
    },
    {
      img: portfolio2,
      cat: "Mobile Application",
      industry: "Private Banking",
      title: "Auréum Wealth",
      tech: "React Native · Kotlin · Swift",
      overview: "A calm, considered wealth companion for high-net-worth clients.",
    },
    {
      img: portfolio3,
      cat: "Enterprise Platform",
      industry: "Hospitality Group",
      title: "Loggia Operations Suite",
      tech: "Next.js · PostgreSQL · AWS",
      overview: "An operations backbone connecting twenty-three properties worldwide.",
    },
  ];
  return (
    <Section
      id="portfolio"
      eyebrow="Selected Work"
      title={<>Objects of <em className="text-serif italic text-rose-gold-deep">quiet</em> distinction.</>}
      intro="A curated selection of engagements — each a collaboration with founders and teams who share our devotion to craft."
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
                            className="rounded-[1.5rem] overflow-hidden shadow-[0_30px_70px_-30px_rgba(142,92,103,0.28)]">
                  <img src={p.img} alt={p.title} width={1200} height={900} loading="lazy"
                       className="w-full h-[380px] md:h-[500px] object-cover" />
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
                  View case study <ArrowUpRight className="w-4 h-4" />
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
  img: string;
  cat: string;
  industry: string;
  title: string;
  tech: string;
  overview: string;
};

function PortfolioSlider({ projects }: { projects: Project[] }) {
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
      <div className="overflow-hidden rounded-[1.5rem]">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 220, damping: 32 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragStart={() => setPaused(true)}
          onDragEnd={(_, info) => {
            const threshold = 60;
            if (info.offset.x < -threshold) go(index + 1);
            else if (info.offset.x > threshold) go(index - 1);
            // brief pause then resume
            window.setTimeout(() => setPaused(false), 800);
          }}
        >
          {projects.map((p) => (
            <div key={p.title} className="min-w-full px-1">
              <div className="rounded-[1.5rem] overflow-hidden shadow-[0_30px_70px_-30px_rgba(142,92,103,0.28)]">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-[280px] sm:h-[340px] object-cover select-none pointer-events-none"
                />
              </div>
              <div className="mt-6 px-1">
                <div className="eyebrow mb-3">{p.cat} — {p.industry}</div>
                <h3 className="text-display text-[1.75rem] sm:text-[2rem] text-charcoal leading-[1.05]">
                  {p.title}
                </h3>
                <div className="hairline my-5" />
                <p className="text-[0.98rem] leading-[1.75] text-charcoal/70">{p.overview}</p>
                <div className="mt-5 text-[0.72rem] tracking-[0.14em] uppercase text-charcoal/55">
                  {p.tech}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-2.5">
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
  const steps = [
    "Discovery", "Strategy", "Design", "Development", "Quality Assurance", "Launch", "Continuous Growth",
  ];
  return (
    <Section
      id="process"
      eyebrow="The Method"
      title={<>A measured process, from <em className="text-serif italic text-rose-gold-deep">first sketch</em> to lasting growth.</>}
      className="bg-pearl/60"
    >
      <div className="relative">
        <div className="hidden md:block absolute left-0 right-0 top-[38px] h-px"
             style={{ background: "linear-gradient(90deg, transparent, var(--rose-gold) 20%, var(--gold-soft) 80%, transparent)" }} />
        <div className="grid grid-cols-2 md:grid-cols-7 gap-y-14 md:gap-x-6">
          {steps.map((s, i) => (
            <Reveal key={s} delay={i * 0.05}>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-[76px] h-[76px] rounded-full grid place-items-center bg-ivory border border-warm-border"
                     style={{ boxShadow: "0 12px 30px -12px rgba(142,92,103,0.25)" }}>
                  <span className="text-serif italic text-rose-gold-deep text-xl">0{i + 1}</span>
                </div>
                <div className="mt-6 text-[0.72rem] uppercase tracking-[0.24em] text-charcoal/60">Phase</div>
                <div className="mt-1 text-display text-lg text-charcoal">{s}</div>
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
  const stats = [
    { n: 100, suf: "+", label: "Projects Delivered" },
    { n: 98, suf: "%", label: "Client Satisfaction" },
    { n: 8, suf: "+", label: "Years of Craft" },
    { n: 24, suf: "/7", label: "Technical Support" },
  ];
  return (
    <Section
      eyebrow="Why KencanaDigital"
      title={<>Craft, measured in <em className="text-serif italic text-rose-gold-deep">outcomes</em>.</>}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="border-t border-warm-border pt-8">
              <div className="text-display text-[3.5rem] md:text-[4.5rem] leading-none text-charcoal">
                <Counter to={s.n} suffix={s.suf} />
              </div>
              <div className="mt-5 text-[0.75rem] uppercase tracking-[0.24em] text-charcoal/60">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Client logos */}
      <div className="mt-24">
        <div className="text-center eyebrow mb-10">Trusted by discerning brands</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-6 opacity-60">
          {["Maison Céleste", "Auréum", "Loggia", "Verdant & Co.", "Noir Atelier", "Solstice"].map((c) => (
            <div key={c} className="text-center text-serif italic text-charcoal/70 text-lg">{c}</div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    {
      q: "They approached our brand as if it were their own — every detail considered, nothing rushed. The result feels timeless.",
      n: "Amara Salim", r: "CEO, Maison Céleste",
    },
    {
      q: "The most professional studio we've engaged. Their sense of craft is matched only by the reliability of their delivery.",
      n: "Rendra Wibowo", r: "Head of Product, Auréum Wealth",
    },
    {
      q: "KencanaDigital didn't just deliver software — they elevated how our teams work every day.",
      n: "Iselin Marchetti", r: "COO, Loggia Group",
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, [items.length]);
  return (
    <Section
      eyebrow="In Their Words"
      title={<>A partnership <em className="text-serif italic text-rose-gold-deep">defined</em> by trust.</>}
      className="bg-pearl/60"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <Quote className="w-14 h-14 text-rose-gold/40 mx-auto mb-8" strokeWidth={1} />
        <motion.blockquote
          key={idx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-serif text-[1.55rem] md:text-[2rem] leading-[1.45] text-charcoal/90 italic"
        >
          "{items[idx].q}"
        </motion.blockquote>
        <div className="mt-10 flex flex-col items-center gap-1">
          <div className="text-display text-lg text-charcoal">{items[idx].n}</div>
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-charcoal/55">{items[idx].r}</div>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-[3px] rounded-full transition-all ${
                i === idx ? "w-10 bg-rose-gold-deep" : "w-5 bg-charcoal/15"
              }`}
              style={{ backgroundColor: i === idx ? "var(--rose-gold-deep)" : undefined }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "What kinds of engagements do you take on?",
      a: "We partner with a small number of clients each year on bespoke websites, enterprise applications, mobile products, and brand systems — typically starting from strategy and continuing into long-term evolution." },
    { q: "How long does a typical project take?",
      a: "Marketing sites range from six to ten weeks. Product and enterprise engagements are typically four to six months for a first release, followed by continuous partnership." },
    { q: "Do you work with brands outside Indonesia?",
      a: "Yes. We operate globally and are fluent in remote and in-person collaboration. Our team spans multiple time zones." },
    { q: "What does the investment look like?",
      a: "Every engagement is tailored. Following an initial consultation, we prepare a considered proposal with clear scope, timeline, and investment." },
    { q: "Will we own the work?",
      a: "Absolutely. Upon completion, all intellectual property, code, and design assets belong to you." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      eyebrow="Questions"
      title={<>Considerations, <em className="text-serif italic text-rose-gold-deep">answered</em>.</>}
    >
      <div className="max-w-3xl mx-auto">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-warm-border">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full py-7 flex items-center justify-between gap-6 text-left group"
              >
                <span className="text-display text-lg md:text-[1.35rem] text-charcoal">
                  {f.q}
                </span>
                <span className="shrink-0 w-9 h-9 rounded-full border border-warm-border grid place-items-center transition-colors group-hover:border-rose-gold">
                  {isOpen ? <Minus className="w-4 h-4 text-rose-gold-deep" /> : <Plus className="w-4 h-4 text-charcoal/70" />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-7 pr-16 text-[0.98rem] leading-[1.8] text-charcoal/70">{f.a}</p>
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
  return (
    <Section
      id="contact"
      eyebrow="Begin the Conversation"
      title={<>Let us craft something <em className="text-serif italic text-rose-gold-deep">enduring</em> together.</>}
      intro="Share a note about your ambitions. We reply personally within one business day."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="card-luxury p-8 md:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@brand.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Company" placeholder="Brand or organisation" />
              <Field label="Budget" placeholder="Indicative range" />
            </div>
            <div>
              <label className="eyebrow block mb-3">Project vision</label>
              <textarea
                rows={5}
                placeholder="Tell us about the world you'd like to build..."
                className="w-full bg-transparent border-b border-warm-border py-3 text-[0.98rem] text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-rose-gold-deep transition-colors"
              />
            </div>
            <button type="submit" className="btn-luxury btn-luxury-hover mt-4">
              Request Consultation <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <aside className="lg:col-span-5 space-y-8">
          <ContactRow icon={MapPin} label="Studio" value="Kencana Tower, 12F · Jakarta, Indonesia" />
          <ContactRow icon={Mail} label="Correspondence" value="atelier@kencanadigital.com" />
          <ContactRow icon={MessageCircle} label="WhatsApp" value="+62 811 2000 210" />
          <ContactRow icon={Clock} label="Hours" value="Mon – Fri · 09:00 – 18:00 WIB" />
          <div className="hairline" />
          <p className="text-serif italic text-charcoal/70 text-lg leading-relaxed">
            "The considered response of a small studio, with the ambition of a global one."
          </p>
        </aside>
      </div>
    </Section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}</label>
      <input
        {...rest}
        className="w-full bg-transparent border-b border-warm-border py-3 text-[0.98rem] text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-rose-gold-deep transition-colors"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-11 h-11 rounded-full grid place-items-center shrink-0"
           style={{ background: "color-mix(in oklab, var(--champagne) 55%, white)" }}>
        <Icon className="w-[18px] h-[18px] text-rose-gold-deep" />
      </div>
      <div>
        <div className="eyebrow mb-1">{label}</div>
        <div className="text-charcoal text-[1rem]">{value}</div>
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-warm-border mt-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="text-display text-2xl text-charcoal">Kencana</span>
            <span className="text-serif italic text-rose-gold text-xl">Digital</span>
          </div>
          <p className="mt-5 text-[0.95rem] leading-[1.8] text-charcoal/65 max-w-md">
            A bespoke digital atelier crafting websites, applications, and brand
            systems for enterprises and founders who value enduring quality.
          </p>
        </div>
        <FooterCol title="Studio" items={["About", "Services", "Portfolio", "Process"]} />
        <FooterCol title="Disciplines" items={["Web", "Mobile", "Enterprise", "Branding"]} />
        <FooterCol title="Contact" items={["Consult", "WhatsApp", "Email", "Jakarta HQ"]} />
      </div>
      <div className="border-t border-warm-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.78rem] text-charcoal/55">
          <span>© {new Date().getFullYear()} KencanaDigital. All rights reserved.</span>
          <span className="tracking-[0.22em] uppercase">Crafted with devotion in Jakarta</span>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="md:col-span-2">
      <div className="eyebrow mb-5">{title}</div>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-[0.92rem] text-charcoal/75 hover:text-rose-gold-deep transition-colors">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Floating consult ---------- */
function FloatingConsult() {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.72rem] uppercase tracking-[0.22em] text-ivory shadow-[0_20px_50px_-15px_rgba(142,92,103,0.55)] transition-transform hover:-translate-y-0.5"
      style={{ background: "linear-gradient(135deg, var(--rose-gold-deep), var(--rose-gold))" }}
    >
      <MessageCircle className="w-4 h-4" />
      Book a Consultation
    </a>
  );
}

/* ---------- Page ---------- */
function LandingPage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingConsult />
    </main>
  );
}
