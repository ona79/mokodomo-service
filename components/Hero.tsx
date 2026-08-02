"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Clapperboard, Camera } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cards = [
  { icon: Clapperboard, title: "Montage vidéo", sub: "Reels, pub, événementiel", pos: "top-4 left-2 w-[52%] max-w-[260px]", delay: 0 },
  { icon: Camera, title: "Photographie", sub: "Produits, portraits, événements", pos: "top-[24%] right-2 w-[46%] max-w-[240px]", delay: 0.5 },
  { icon: Brain, title: "Sites & apps IA", sub: "Développement accéléré", pos: "bottom-6 left-[8%] w-[48%] max-w-[250px]", delay: 1 },
];

export default function Hero() {
  return (
    <section id="accueil" className="pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 text-xs md:text-[0.78rem] font-bold tracking-widest uppercase text-accent2 before:content-[''] before:w-5 before:h-0.5 before:bg-accent2"
          >
            Studio digital panafricain
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
          >
            Construisons votre <span className="text-gradient">avenir numérique.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-white/60 text-base md:text-lg max-w-[52ch]">
            Nous accompagnons les particuliers, les entreprises et les organisations grâce à
            la création de sites web et d&apos;applications développés avec l&apos;aide de l&apos;IA,
            au montage vidéo, à la photographie et à des formations professionnelles.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-bold text-sm bg-grad-accent shadow-[0_8px_24px_-6px_rgba(225,29,72,0.55)] hover:-translate-y-0.5 transition-transform"
            >
              Commencer un projet <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-bold text-sm glass hover:bg-white/[0.08] transition-colors"
            >
              Voir nos services
            </a>
          </motion.div>
        </motion.div>

        {/* Mobile / tablette : liste simple, pas de chevauchement */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:hidden"
        >
          {cards.map((c, i) => (
            <motion.div key={i} variants={item} className="glass rounded-2xl p-5 flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-accent/25 to-accent2/20 border border-line flex items-center justify-center text-accent2 sm:mb-3.5">
                <c.icon size={20} />
              </div>
              <div>
                <div className="font-bold text-sm mb-1">{c.title}</div>
                <div className="text-xs text-white/50">{c.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop : composition flottante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="hidden md:block relative aspect-square"
        >
          <div className="absolute -inset-14 bg-[radial-gradient(circle,rgba(225,29,72,0.18),transparent_65%)] blur-md" />
          {cards.map((c, i) => (
            <motion.div
              key={i}
              className={`glass absolute rounded-2xl p-5 ${c.pos}`}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/25 to-accent2/20 border border-line flex items-center justify-center text-accent2 mb-3.5">
                <c.icon size={20} />
              </div>
              <div className="font-bold text-sm mb-1">{c.title}</div>
              <div className="text-xs text-white/50">{c.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
