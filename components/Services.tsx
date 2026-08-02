"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2, Smartphone, Brain, Film, Video, Cog, GraduationCap, Lightbulb, Camera, ArrowRight,
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, any> = {
  Code2, Smartphone, Brain, Film, Video, Cog, GraduationCap, Lightbulb, Camera,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mx-auto text-center flex flex-col items-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent2 before:content-[''] before:w-5 before:h-0.5 before:bg-accent2 after:content-[''] after:w-5 after:h-0.5 after:bg-accent2">
            Ce que nous faisons
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Nos services</h2>
          <p className="mt-4 text-white/60 text-base md:text-lg">
            Huit expertises pour couvrir l&apos;ensemble de votre transformation digitale, de
            l&apos;idée au déploiement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl overflow-hidden transition-colors hover:border-white/20 flex flex-col h-full"
              >
                {s.image ? (
                  <div className="relative h-32 w-full shrink-0">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-black/40 border border-line flex items-center justify-center text-accent2">
                      <Icon size={18} />
                    </div>
                  </div>
                ) : null}
                <div className="p-5 md:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {!s.image && (
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/25 to-accent2/20 border border-line flex items-center justify-center text-accent2 mb-4">
                        <Icon size={20} />
                      </div>
                    )}
                    <h3 className="font-bold text-lg mb-2.5">{s.title}</h3>
                    <p className="text-sm text-white/55 mb-4">{s.desc}</p>
                  </div>
                  <a href={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-accent2 mt-auto">
                    En savoir plus <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
