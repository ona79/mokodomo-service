"use client";

import { motion } from "framer-motion";
import { Clock, Award, Code2, Brain, Film } from "lucide-react";
import { formationCategories } from "@/lib/data";

const iconMap: Record<string, any> = { Code2, Brain, Film };

const levelColor: Record<string, string> = {
  "Débutant": "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
  "Intermédiaire": "bg-amber-500/15 text-amber-400 border border-amber-500/25",
  "Avancé": "bg-purple-500/20 text-purple-300 border border-purple-500/30",
};

export default function Formations() {
  return (
    <section id="formations" className="py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto text-center flex flex-col items-center mb-14 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent2 before:content-[''] before:w-5 before:h-0.5 before:bg-accent2 after:content-[''] after:w-5 after:h-0.5 after:bg-accent2">
            Montez en compétence
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Nos formations</h2>
          <p className="mt-4 text-white/60 text-base md:text-lg">
            Des parcours pratiques encadrés par des professionnels, avec certificat à la clé.
          </p>
        </motion.div>

        <div className="space-y-14">
          {formationCategories.map((cat, ci) => {
            const CatIcon = iconMap[cat.icon];
            return (
              <div key={cat.name}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/25 to-accent2/20 border border-line flex items-center justify-center text-accent2">
                    <CatIcon size={18} />
                  </div>
                  <h3 className="text-lg font-extrabold">{cat.name}</h3>
                  <div className="flex-grow h-px bg-line" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.items.map((f, i) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.5, delay: (i % 3) * 0.08 + ci * 0.03, ease: "easeOut" }}
                      whileHover={{ y: -4 }}
                      className="glass rounded-2xl p-5 md:p-6 flex flex-col justify-between h-full"
                    >
                      <span className={`self-start text-[0.7rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-3.5 ${levelColor[f.level]}`}>
                        {f.level}
                      </span>
                      <h4 className="font-bold text-base mb-3">{f.title}</h4>
                      <div className="flex gap-4 text-xs text-white/50 mb-4">
                        <span className="flex items-center gap-1.5"><Clock size={13} /> {f.duration}</span>
                        <span className="flex items-center gap-1.5"><Award size={13} /> Certificat</span>
                      </div>
                      <div className="text-lg font-extrabold mb-4">{f.price}</div>
                      <a
                        href="/#contact"
                        className="mt-auto text-center glass rounded-xl px-5 py-2.5 text-sm font-bold hover:bg-white/[0.08] transition-colors"
                      >
                        S&apos;inscrire
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
