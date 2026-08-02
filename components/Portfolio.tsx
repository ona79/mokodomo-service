"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolio, portfolioFilters } from "@/lib/data";

export default function Portfolio() {
  const [filter, setFilter] = useState("Tous");

  const filtered = useMemo(() => {
    if (filter === "Tous") return portfolio;
    return portfolio.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto text-center flex flex-col items-center mb-8 md:mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent2 before:content-[''] before:w-5 before:h-0.5 before:bg-accent2 after:content-[''] after:w-5 after:h-0.5 after:bg-accent2">
            Nos réalisations
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Portfolio</h2>
          <p className="mt-4 text-white/60 text-base md:text-lg">
            Des projets réels, conçus et développés pour des besoins concrets du marché ouest-africain.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-10 md:mb-12">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors border ${
                filter === f
                  ? "bg-grad-accent border-transparent text-white"
                  : "border-line text-white/55 hover:text-white hover:border-white/25"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden border border-line glass flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] bg-black/20 shrink-0">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className={`absolute top-3 right-3 text-[0.65rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                    p.status === "En ligne" ? "bg-emerald-500/90 text-white" : "bg-amber-500/90 text-black"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <div className="p-5 bg-black/30 flex flex-col justify-between flex-grow">
                <span className="text-[0.7rem] font-bold uppercase tracking-wide text-accent2">{p.category}</span>
                <h4 className="mt-2 mb-2 font-bold text-base">{p.title}</h4>
                <p className="text-sm text-white/55 mb-4">{p.desc}</p>
                <div className="flex items-center gap-4">
                  <a href={`/realisations/${p.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-accent2">
                    Voir le projet <ArrowRight size={14} />
                  </a>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/45 hover:text-white/70 transition-colors"
                    >
                      Site live <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/50 py-10">Aucune réalisation dans cette catégorie pour le moment.</p>
        )}
      </div>
    </section>
  );
}
