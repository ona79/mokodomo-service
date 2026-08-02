"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { packs } from "@/lib/data";

const slideDirs = [-60, 0, 60];

export default function Packs() {
  return (
    <section id="packs" className="py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto text-center flex flex-col items-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent2 before:content-[''] before:w-5 before:h-0.5 before:bg-accent2 after:content-[''] after:w-5 after:h-0.5 after:bg-accent2">
            Tarification
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Nos packs</h2>
          <p className="mt-4 text-white/60 text-base md:text-lg">
            Des formules claires, avec maintenance et support inclus. Un devis personnalisé
            reste toujours possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {packs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: slideDirs[i], y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className={`relative rounded-2xl p-6 md:p-8 glass flex flex-col justify-between h-full ${
                p.featured ? "border-accent2 bg-gradient-to-b from-accent/10 to-white/[0.045]" : ""
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 right-7 bg-grad-accent text-[0.7rem] font-bold uppercase px-3.5 py-1 rounded-full">
                  Le plus choisi
                </span>
              )}
              <div className="text-xl font-extrabold mb-1.5">{p.name}</div>
              <p className="text-sm text-white/55 mb-5">{p.desc}</p>
              <div className="text-3xl font-extrabold mb-1">
                {p.price} <small className="text-sm font-semibold text-white/50">{p.unit}</small>
              </div>
              <div className="text-sm text-white/50 mb-5 pb-5 border-b border-line">{p.meta}</div>
              <ul className="mb-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 items-start text-sm text-white/65">
                    <Check size={16} className="text-accent2 mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center rounded-xl px-6 py-3.5 font-bold text-sm transition-transform hover:-translate-y-0.5 ${
                  p.featured ? "bg-grad-accent" : "glass"
                }`}
              >
                {p.price === "Sur devis" ? "Demander un devis" : "Commander"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
