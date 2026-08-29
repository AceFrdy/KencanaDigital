import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "id";

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      experience: "Experience",
      process: "Process",
      contact: "Contact",
      consult: "Consult",
    },
    hero: {
      eyebrow: "Bespoke Digital Atelier",
      desc: "Kencana Digital creates premium websites, enterprise software, and digital experiences designed for brands that value quality, elegance, and long-term growth.",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "View Experience",
      years: "Years",
      projects: "Projects",
      satisfaction: "Satisfaction",
      awardedTitle: "Awarded",
      awardedSubtitle: "Design Excellence, 2025",
    },
    about: {
      eyebrow: "The Atelier",
      mainText:
        "Kencana Digital is a studio of designers, engineers and strategists devoted to a single idea: that software, when made with care, becomes a lasting expression of a brand's character.",
      pillars: [
        {
          t: "Attention to Detail",
          d: "Every pixel, transition, and line of code refined with the patience of a master craftsman.",
        },
        {
          t: "Long-term Partnerships",
          d: "We stay by your side, evolving your product through every chapter of growth.",
        },
        {
          t: "Premium Craftsmanship",
          d: "Bespoke systems built to endure — engineered with restraint and elegance.",
        },
        {
          t: "Reliable Delivery",
          d: "Predictable timelines, transparent communication, uncompromising standards.",
        },
      ],
    },
    services: {
      eyebrow: "Disciplines",
      intro:
        "From first concept to continuous evolution, every discipline required to shape a category-defining digital product lives inside the atelier.",
      items: [
        {
          t: "Premium Website Development",
          d: "Editorial, marketing and commerce sites tailored to your brand voice.",
        },
        {
          t: "Enterprise Applications",
          d: "Robust internal systems that scale with the complexity of your business.",
        },
        {
          t: "Mobile Applications",
          d: "Native-quality iOS and Android products, refined to the last detail.",
        },
        {
          t: "UI/UX Design",
          d: "Interfaces conceived like architecture — considered, generous, humane.",
        },
        {
          t: "Branding & Identity",
          d: "Visual systems that translate strategy into a coherent expression.",
        },
        {
          t: "AI Solutions",
          d: "Intelligent workflows and assistants woven quietly into your product.",
        },
        {
          t: "Cloud Infrastructure",
          d: "Resilient, observable platforms built for continuous evolution.",
        },
        {
          t: "Digital Consulting",
          d: "Strategy engagements that align product, brand and technology.",
        },
      ],
    },
    experience: {
      eyebrow: "Selected Work",
      intro:
        "A curated selection of engagements — each a collaboration with founders and teams who share our devotion to craft.",
      viewCaseStudy: "View case study",
      projects: [
        {
          cat: "Editorial Commerce",
          industry: "Luxury Beauty",
          title: "Maison Célestine",
          tech: "Next.js · Shopify · Sanity",
          overview:
            "A poetic commerce experience for a heritage French skincare house.",
        },
        {
          cat: "Mobile Application",
          industry: "Private Banking",
          title: "Auréum Wealth",
          tech: "React Native · Kotlin · Swift",
          overview:
            "A calm, considered wealth companion for high-net-worth clients.",
        },
        {
          cat: "Enterprise Platform",
          industry: "Hospitality Group",
          title: "Loggia Operations Suite",
          tech: "Next.js · PostgreSQL · AWS",
          overview:
            "An operations backbone connecting twenty-three properties worldwide.",
        },
      ],
    },
    process: {
      eyebrow: "The Method",
      phaseLabel: "Phase",
      steps: [
        "Discovery",
        "Strategy",
        "Design",
        "Development",
        "Quality Assurance",
        "Launch",
        "Continuous Growth",
      ],
    },
    whyUs: {
      eyebrow: "Why Kencana Digital",
      stats: [
        { label: "Projects Delivered" },
        { label: "Client Satisfaction" },
        { label: "Years of Craft" },
        { label: "Technical Support" },
      ],
      trustedEyebrow: "Trusted by discerning brands",
    },
    testimonials: {
      eyebrow: "In Their Words",
      items: [
        {
          q: "They approached our brand as if it were their own — every detail considered, nothing rushed. The result feels timeless.",
          n: "Amara Salim",
          r: "CEO, Maison Céleste",
        },
        {
          q: "The most professional studio we've engaged. Their sense of craft is matched only by the reliability of their delivery.",
          n: "Rendra Wibowo",
          r: "Head of Product, Auréum Wealth",
        },
        {
          q: "Kencana Digital didn't just deliver software — they elevated how our teams work every day.",
          n: "Iselin Marchetti",
          r: "COO, Loggia Group",
        },
      ],
    },
    faq: {
      eyebrow: "Questions",
      faqs: [
        {
          q: "What kinds of engagements do you take on?",
          a: "We partner with a small number of clients each year on bespoke websites, enterprise applications, mobile products, and brand systems — typically starting from strategy and continuing into long-term evolution.",
        },
        {
          q: "How long does a typical project take?",
          a: "Marketing sites range from six to ten weeks. Product and enterprise engagements are typically four to six months for a first release, followed by continuous partnership.",
        },
        {
          q: "Do you work with brands outside Indonesia?",
          a: "Yes. We operate globally and are fluent in remote and in-person collaboration. Our team spans multiple time zones.",
        },
        {
          q: "What does the investment look like?",
          a: "Every engagement is tailored. Following an initial consultation, we prepare a considered proposal with clear scope, timeline, and investment.",
        },
        {
          q: "Will we own the work?",
          a: "Absolutely. Upon completion, all intellectual property, code, and design assets belong to you.",
        },
      ],
    },
    contact: {
      eyebrow: "Begin the Conversation",
      intro:
        "Share a note about your ambitions. We reply personally within one business day.",
      fullName: "Full name",
      fullNamePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@brand.com",
      company: "Company",
      companyPlaceholder: "Brand or organisation",
      budget: "Budget",
      budgetPlaceholder: "Indicative range",
      vision: "Project vision",
      visionPlaceholder: "Tell us about the world you'd like to build...",
      submit: "Request Consultation",
      studio: "Studio",
      correspondence: "Correspondence",
      whatsapp: "WhatsApp",
      hours: "Hours",
      hoursValue: "Mon – Fri · 09:00 – 18:00 WIB",
      quote:
        '"The considered response of a small studio, with the ambition of a global one."',
    },
    footer: {
      desc: "A bespoke digital atelier crafting websites, applications, and brand systems for enterprises and founders who value enduring quality.",
      colStudio: "Studio",
      colDisciplines: "Disciplines",
      colContact: "Contact",
      rights: "All rights reserved.",
      craftedIn: "Crafted with devotion in Jakarta",
    },
    floatingConsult: "Book a Consultation",
  },
  id: {
    nav: {
      about: "About",
      services: "Services",
      experience: "Experience",
      process: "Process",
      contact: "Contact",
      consult: "Konsultasi",
    },
    hero: {
      eyebrow: "Bespoke Digital Atelier",
      desc: "Kencana Digital merancang website premium, perangkat lunak enterprise, dan pengalaman digital berkelas tinggi bagi brand yang mengutamakan kualitas, keanggunan, serta pertumbuhan jangka panjang.",
      ctaPrimary: "Mulai Proyek Anda",
      ctaSecondary: "Lihat Pengalaman",
      years: "Tahun Dedikasi",
      projects: "Proyek Selesai",
      satisfaction: "Kepuasan Klien",
      awardedTitle: "Penghargaan",
      awardedSubtitle: "Keunggulan Desain, 2025",
    },
    about: {
      eyebrow: "The Atelier",
      mainText:
        "Kencana Digital adalah studio para desainer, insinyur perangkat lunak, dan pakar strategi yang berdedikasi pada satu visi: bahwa teknologi dan perangkat lunak, bila dirancang dengan penuh ketelitian, menjadi perwujudan abadi dari karakter sebuah brand ternama.",
      pillars: [
        {
          t: "Attention to Detail",
          d: "Setiap piksel, kehalusan transisi, dan baris kode disempurnakan dengan ketelatenan seorang maestro perajin.",
        },
        {
          t: "Long-term Partnerships",
          d: "Kami mendampingi Anda secara berkelanjutan, mengembangkan produk di setiap fase pertumbuhan bisnis Anda.",
        },
        {
          t: "Premium Craftsmanship",
          d: "Sistem kustom yang dirancang untuk bertahan lama — dibangun dengan presisi, efisiensi tinggi, dan estetika elegan.",
        },
        {
          t: "Reliable Delivery",
          d: "Estimasi waktu terukur, komunikasi transparan, dan komitmen mutu tanpa kompromi.",
        },
      ],
    },
    services: {
      eyebrow: "Disciplines",
      intro:
        "Dari konsep awal hingga evolusi berkelanjutan, setiap disiplin keahlian yang dibutuhkan untuk membangun produk digital berkelas dunia berpusat di dalam atelier kami.",
      items: [
        {
          t: "Premium Website Development",
          d: "Situs editorial, pemasaran, dan e-commerce eksklusif yang diselaraskan secara anggun dengan karakter brand Anda.",
        },
        {
          t: "Enterprise Applications",
          d: "Sistem internal andal berskala besar yang siap bertumbuh seiring kompleksitas bisnis Anda.",
        },
        {
          t: "Mobile Applications",
          d: "Aplikasi iOS dan Android berkualitas native, dirancang dan disempurnakan hingga detail terkecil.",
        },
        {
          t: "UI/UX Design",
          d: "Antarmuka yang dirancang layaknya karya arsitektur — presisi, elegan, dan berorientasi pada kenyamanan pengguna.",
        },
        {
          t: "Branding & Identity",
          d: "Sistem identitas visual terpadu yang menerjemahkan visi strategis menjadi representasi yang kuat dan koheren.",
        },
        {
          t: "AI Solutions",
          d: "Alur kerja cerdas dan asisten berbasis AI yang terintegrasi secara mulus dan elegan ke dalam produk Anda.",
        },
        {
          t: "Cloud Infrastructure",
          d: "Infrastruktur platform cloud yang tangguh, aman, dan mudah dipantau untuk mendukung ekspansi berkesinambungan.",
        },
        {
          t: "Digital Consulting",
          d: "Konsultasi strategis komprehensif yang menyelaraskan arah produk, identitas brand, dan keunggulan teknologi.",
        },
      ],
    },
    experience: {
      eyebrow: "Selected Work",
      intro:
        "Kurasi Experience terpilih — setiap proyek merupakan kolaborasi mendalam dengan para founder dan tim yang menjunjung tinggi standar kualitas prima.",
      viewCaseStudy: "Lihat studi kasus",
      projects: [
        {
          cat: "Editorial Commerce",
          industry: "Luxury Beauty",
          title: "Maison Célestine",
          tech: "Next.js · Shopify · Sanity",
          overview:
            "Pengalaman e-commerce puitis dan mewah untuk brand perawatan kulit warisan Prancis.",
        },
        {
          cat: "Mobile Application",
          industry: "Private Banking",
          title: "Auréum Wealth",
          tech: "React Native · Kotlin · Swift",
          overview:
            "Aplikasi pendamping manajemen kekayaan yang tenang, eksklusif, dan presisi untuk nasabah High-Net-Worth.",
        },
        {
          cat: "Enterprise Platform",
          industry: "Hospitality Group",
          title: "Loggia Operations Suite",
          tech: "Next.js · PostgreSQL · AWS",
          overview:
            "Fondasi operasional terpadu yang menghubungkan dua puluh tiga properti resor mewah di seluruh dunia.",
        },
      ],
    },
    process: {
      eyebrow: "The Method",
      phaseLabel: "Tahap",
      steps: [
        "Discovery",
        "Strategy",
        "Design",
        "Development",
        "Quality Assurance",
        "Launch",
        "Continuous Growth",
      ],
    },
    whyUs: {
      eyebrow: "Why Kencana Digital",
      stats: [
        { label: "Proyek Selesai" },
        { label: "Kepuasan Klien" },
        { label: "Tahun Dedikasi" },
        { label: "Dukungan Teknis" },
      ],
      trustedEyebrow: "Dipercaya oleh brand terkemuka & berkelas",
    },
    testimonials: {
      eyebrow: "In Their Words",
      items: [
        {
          q: "Mereka memperlakukan brand kami layaknya milik mereka sendiri — setiap detail diperhatikan dengan matang, tanpa terburu-buru. Hasil akhirnya terasa abadi dan berkelas.",
          n: "Amara Salim",
          r: "CEO, Maison Céleste",
        },
        {
          q: "Studio paling profesional yang pernah bermitra dengan kami. Cita rasa keahlian mereka diimbangi dengan ketepatan waktu serta keandalan pengiriman proyek yang luar biasa.",
          n: "Rendra Wibowo",
          r: "Head of Product, Auréum Wealth",
        },
        {
          q: "Kencana Digital tidak sekadar membangun perangkat lunak — mereka meningkatkan standar cara kerja tim kami setiap harinya.",
          n: "Iselin Marchetti",
          r: "COO, Loggia Group",
        },
      ],
    },
    faq: {
      eyebrow: "Questions",
      faqs: [
        {
          q: "What kinds of engagements do you take on?",
          a: "Kami bermitra dengan sejumlah klien terpilih setiap tahun untuk membangun website bespoke, aplikasi enterprise, produk mobile, dan sistem identitas brand — umumnya dimulai dari perumusan strategi hingga pengembangan jangka panjang.",
        },
        {
          q: "How long does a typical project take?",
          a: "Website korporat/marketing umumnya berkisar antara 6 hingga 10 minggu. Proyek platform produk dan enterprise biasanya memerlukan 4 hingga 6 bulan untuk rilis tahap pertama, dilanjutkan dengan kemitraan berkelanjutan.",
        },
        {
          q: "Do you work with brands outside Indonesia?",
          a: "Ya. Kami beroperasi secara global dan terbiasa dengan kolaborasi jarak jauh (remote) maupun tatap muka langsung. Tim kami siap berkoordinasi lintas zona waktu.",
        },
        {
          q: "What does the investment look like?",
          a: "Setiap proyek memiliki keunikan tersendiri. Setelah sesi konsultasi awal, kami menyusun proposal terperinci yang memuat cakupan kerja (scope), lini masa, dan nilai investasi yang transparan.",
        },
        {
          q: "Will we own the work?",
          a: "Tentu saja. Setelah proyek selesai, seluruh hak kekayaan intelektual (IP), kode sumber (source code), dan aset desain sepenuhnya menjadi milik Anda.",
        },
      ],
    },
    contact: {
      eyebrow: "Begin the Conversation",
      intro:
        "Sampaikan visi dan aspirasi proyek Anda. Tim kami akan merespons secara personal dalam kurun waktu 1 hari kerja.",
      fullName: "Nama Lengkap",
      fullNamePlaceholder: "Nama Anda",
      email: "Email",
      emailPlaceholder: "anda@perusahaan.com",
      company: "Perusahaan",
      companyPlaceholder: "Nama brand atau organisasi",
      budget: "Estimasi Anggaran",
      budgetPlaceholder: "Kisaran budget yang direncanakan",
      vision: "Visi Proyek",
      visionPlaceholder: "Ceritakan tentang dunia dan produk digital yang ingin Anda bangun...",
      submit: "Minta Konsultasi",
      studio: "Studio",
      correspondence: "Korespondensi",
      whatsapp: "WhatsApp",
      hours: "Jam Operasional",
      hoursValue: "Senin – Jumat · 09:00 – 18:00 WIB",
      quote:
        '"Respons personal dan penuh perhatian dari studio butik, dengan kapabilitas serta visi berskala global."',
    },
    footer: {
      desc: "Atelier digital bespoke yang merancang website, aplikasi, dan sistem brand untuk perusahaan dan founder yang mengutamakan kualitas abadi.",
      colStudio: "Studio",
      colDisciplines: "Disiplin",
      colContact: "Kontak",
      rights: "Hak cipta dilindungi undang-undang.",
      craftedIn: "Dibuat dengan dedikasi di Jakarta",
    },
    floatingConsult: "Konsultasi Sekarang",
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (typeof translations)["en"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("id");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("kd_lang") as Language;
      if (saved === "en" || saved === "id") {
        setLangState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("kd_lang", newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    const next = lang === "en" ? "id" : "en";
    setLang(next);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

