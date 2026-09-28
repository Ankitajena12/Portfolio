"use client";

import { AnimatePresence, motion, MotionConfig, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ComponentType } from "react";
import { ArrowUpRight, ChevronDown, Download, Globe, Mail, Palette, Terminal } from "lucide-react";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiPython, SiPytorch, SiScikitlearn, SiNodedotjs, SiExpress, SiFastapi, SiFlask,
  SiMongodb, SiSupabase, SiPostgresql, SiGit, SiDocker, SiVercel,
} from "react-icons/si";

// ---- edit your content here ------------------------------------
const GITHUB = "https://github.com/Ankitajena12";
const EMAIL = "ankitajena0975@gmail.com";
const CV_URL = "/Ankita_Jena_CV.pdf"; // file lives in the /public folder
const projects =
  [{
    title: "GLOW Ai",
    desc: "GlowAI is an AI-powered skincare assistant that combines semantic RAG search, live Reddit skincare discussions, and Groq LLaMA3 to provide personalized skincare advice. Built with Flask, sentence-transformers, and a curated skincare knowledge base, it supports voice input, skin image analysis, emergency dermatologist assistance, and India-focused",
    tags: ["Python", "LangChain", "LLAMA3", "Flask", "RAG"],
    github: "https://github.com/Ankitajena12/GlowAI",
    
  }, {
    title: "SAFAR",
    desc: "Safar is an AI-powered travel assistant that helps users plan trips by answering questions related to destinations, budget, best time to visit, accommodation options, and travel safety.",
    tags: ["Python", "Supabase", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ankitajena12/SAFAR",
    
    },
    {
    title: "SANKET",
    desc: "An AI-driven safety intelligence system that transforms free-text, voice, and photo reports into actionable risk insights using NLP, computer vision, and structured hazard analysis.",
    tags: ["Python", "FastAPI", "React", "LLMs", "Computer Vision", "NLP", "Supabase"],
    github: "https://github.com/Ankitajena12/SANKET",
    demo: "https://sanket-frontend.onrender.com/"
    },
];

type Icon = ComponentType<{ size?: number; color?: string }>;
const t = (name: string, icon: Icon, color = "#e6e9f2") => ({ name, icon, color });

const tools = [
  { group: "Frontend", items: [
    t("HTML", Globe, "#ff6a3d"), t("CSS", Palette, "#3d8bff"), t("JavaScript", SiJavascript, "#f7df1e"),
    t("TypeScript", SiTypescript, "#3178c6"), t("React", SiReact, "#61dafb"), t("Next.js", SiNextdotjs),
    t("Tailwind CSS", SiTailwindcss, "#38bdf8"), t("Framer Motion", SiFramer, "#c26bff"),
  ]},
  { group: "AI / ML", items: [
    t("Python", SiPython, "#4b8bbe"), t("PyTorch", SiPytorch, "#ee4c2c"), t("scikit-learn", SiScikitlearn, "#f89939"),
  ]},
  { group: "Backend", items: [
    t("Node.js", SiNodedotjs, "#5fa04e"), t("Express.js", SiExpress), t("FastAPI", SiFastapi, "#05998b"), t("Flask", SiFlask),
  ]},
  { group: "Database", items: [
    t("MongoDB", SiMongodb, "#47a248"), t("Supabase", SiSupabase, "#3ecf8e"), t("PostgreSQL", SiPostgresql, "#4f8ac9"),
  ]},
  { group: "Tools", items: [
    t("Git", SiGit, "#f05032"), t("Docker", SiDocker, "#2496ed"), t("Vercel", SiVercel),
  ]},
];

const terminalLines = [
  ["$ whoami", "p. ankita jena, ai/ml engineer"],
  ["$ ls stack/", "python  pytorch  rag  next.js"],
  ["$ status", "open to internships ●"],
];
// ----------------------------------------------------------------

const list: Variants = { show: { transition: { staggerChildren: 0.45, delayChildren: 0.5 } } };
const line: Variants = { hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } };

function TerminalCard() {
  return (
    <div className="glass font-code w-full max-w-md p-5 text-sm">
      <div className="mb-4 flex items-center gap-2 text-zinc-500">
        <Terminal size={14} /> ~/portfolio
      </div>
      <motion.div variants={list} initial="hidden" animate="show" className="space-y-3">
        {terminalLines.map(([cmd, out]) => (
          <motion.div key={cmd} variants={line}>
            <div className="text-[var(--cyan)]">{cmd}</div>
            <div className="text-zinc-300">{out}</div>
          </motion.div>
        ))}
        <motion.div variants={line} className="text-[var(--cyan)]">
          $ <span className="blink">▍</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

function HireMe() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const item = "flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition hover:bg-white/5";

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 rounded-lg bg-[var(--blue)] px-6 py-3 text-sm font-medium text-white shadow-[0_0_28px_-4px_var(--blue)] transition hover:brightness-110"
      >
        Hire me
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 z-10 mt-3 w-72 rounded-xl border border-[var(--cyan)]/25 bg-[#0a0d16]/95 p-2 shadow-[0_0_32px_-6px_rgba(47,107,255,0.6)] backdrop-blur"
          >
            <a role="menuitem" href={`mailto:${EMAIL}`} className={item}>
              <Mail size={18} className="text-[var(--cyan)]" />
              <span>
                <span className="block">Email me</span>
                <span className="font-code block text-xs text-zinc-500">{EMAIL}</span>
              </span>
            </a>
            <a role="menuitem" href={CV_URL} download="Ankita_Jena_CV.pdf" className={item}>
              <Download size={18} className="text-[var(--cyan)]" />
              <span>
                <span className="block">Download CV</span>
                <span className="font-code block text-xs text-zinc-500">PDF</span>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden">
        {/* nav */}
        <header className="fixed inset-x-0 top-0 z-20 border-b border-white/5 bg-black/40 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="font-code text-sm tracking-tight">portfolio</span>
            <div className="flex gap-4 text-sm text-zinc-400 sm:gap-6">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#tools" className="hover:text-white">Tools</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#contact" className="hover:text-white">Resume</a>
            </div>
          </nav>
        </header>

        {/* hero */}
        <section className="relative flex min-h-screen items-center">
          <div className="grid-bg" />
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--blue)] opacity-20 blur-[140px]" />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pt-24 md:grid-cols-2">
            <div>
              <p className="font-code mb-4 text-sm text-[var(--cyan)]">AI / ML engineer</p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                P. Ankita Jena
              </h1>
              <p className="mt-4 text-xl text-zinc-300">
                Building things that shouldn&apos;t exist yet.
              </p>
              <p className="mt-4 max-w-md text-zinc-400">
                I build machine learning systems and the web apps around them, from model to
                deployed demo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-lg bg-[var(--blue)] px-5 py-3 text-sm font-medium text-white shadow-[0_0_28px_-4px_var(--blue)] transition hover:brightness-110"
                >
                  View projects
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex items-center gap-1 px-5 py-3 text-sm"
                >
                  GitHub <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <div className="md:justify-self-end">
              <TerminalCard />
            </div>
          </div>
        </section>

        {/* about */}
        <section id="about" className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight">About me</h2>
          <div className="glass mb-10 divide-y divide-white/5 px-6">
            {[
              ["Based in", "Bhubaneswar, India"],
              ["Studying", "B.Tech CS (AI/ML)"],
              ["Available", "Remote internships"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-4 text-sm">
                <span className="text-zinc-500">{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed text-zinc-300">
            I&apos;m a developer who likes turning ideas into working products. I&apos;m studying
            Computer Science with a focus on AI/ML, and I build full-stack apps that combine clean
            design, solid engineering, and intelligent features.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-500">
            Lately I&apos;ve been experimenting with LLMs and RAG to make apps that are not just
            functional but genuinely smart. Always learning, always building.
          </p>
          <span className="mt-8 inline-flex items-center gap-2 rounded-md border border-[var(--blue)]/40 bg-[var(--blue)]/10 px-4 py-2 text-sm text-[var(--cyan)]">
            <span className="blink h-2 w-2 rounded-full bg-[var(--cyan)]" />
            Open to remote internships
          </span>
        </section>

        {/* tools */}
        <section id="tools" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight">Tools I build with</h2>
          {tools.map(({ group, items }) => (
            <div key={group} className="border-t border-white/5 py-8">
              <h3 className="mb-5 text-2xl font-semibold text-zinc-600">{group}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map(({ name, icon: Icon, color }) => (
                  <div key={name} className="glass flex items-center gap-3 px-4 py-3 text-sm">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5">
                      <Icon size={20} color={color} />
                    </span>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* projects */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-10 text-3xl font-semibold tracking-tight">Projects</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <motion.article key={p.title} whileHover={{ y: -4 }} className="glass flex flex-col p-6">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-zinc-400">{p.desc}</p>
                <div className="font-code mt-4 flex flex-wrap gap-2 text-xs text-[var(--cyan)]">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-[var(--cyan)]/20 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4 text-sm">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-white text-zinc-300"
                  >
                    Code <ArrowUpRight size={14} />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:text-white text-zinc-300"
                    >
                      Live demo <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* resume */}
        <section id="contact" className="mx-auto max-w-3xl px-6 pb-48 pt-24">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight">Resume</h2>
          <div className="glass mb-10 divide-y divide-white/5 px-6">
            {[
              ["Education", "Sri Sri University · B.Tech CSE (AI/ML) · CGPA 8.95"],
              ["Certification", "AI for Entrepreneurship · Intel & NITI Aayog"],
              ["Highlight", "Presented Aarogya Saathi at Sri Sri University Ideathon 2026"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 py-4 text-sm sm:flex-row sm:justify-between sm:gap-6">
                <span className="shrink-0 text-zinc-500">{k}</span>
                <span className="sm:text-right">{v}</span>
              </div>
            ))}
          </div>
          <p className="mb-6 max-w-md text-zinc-400">
            Open to remote internships and collaborations. Get in touch by email or grab my CV.
          </p>
          <HireMe />
        </section>
      </main>
    </MotionConfig>
  );
}