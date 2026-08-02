"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Code2, Smartphone, Brain, Film, Video, Cog, GraduationCap, Lightbulb, Camera,
  ArrowLeft, ArrowRight, Check,
} from "lucide-react";
import ServiceFAQ from "@/components/ServiceFAQ";

const iconMap: Record<string, any> = {
  Code2, Smartphone, Brain, Film, Video, Cog, GraduationCap, Lightbulb, Camera,
};

export default function AnimatedServiceContent({
  service,
  others,
}: {
  service: any;
  others: any[];
}) {
  const Icon = iconMap[service.icon];

  return (
    <div className="max-w-[900px] mx-auto px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Tous les services
        </Link>
      </motion.div>

      {service.image ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-line mb-8"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 900px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/90 via-[#0B1020]/20 to-transparent" />
          <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-black/40 border border-line flex items-center justify-center text-accent2">
            <Icon size={22} />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/25 to-accent2/20 border border-line flex items-center justify-center text-accent2 mb-6"
        >
          <Icon size={26} />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">{service.title}</h1>
        <p className="text-lg text-white/60 max-w-[65ch]">{service.intro}</p>
      </motion.div>

      {/* Grid Avantages & Fonctionnalités avec animation latérale croisée */}
      <div className="grid md:grid-cols-2 gap-6 mt-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass rounded-2xl p-7 md:p-8"
        >
          <h2 className="text-lg font-extrabold mb-5">Avantages</h2>
          <ul className="space-y-3">
            {service.avantages.map((a: string) => (
              <li key={a} className="flex gap-2.5 items-start text-sm text-white/65">
                <Check size={16} className="text-accent2 mt-0.5 shrink-0" /> {a}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="glass rounded-2xl p-7 md:p-8"
        >
          <h2 className="text-lg font-extrabold mb-5">Fonctionnalités</h2>
          <ul className="space-y-3">
            {service.fonctionnalites.map((f: string) => (
              <li key={f} className="flex gap-2.5 items-start text-sm text-white/65">
                <Check size={16} className="text-accent2 mt-0.5 shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* CTA Tarif */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-7 md:p-8 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
      >
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-accent2 mb-1.5">Tarif</div>
          <div className="text-2xl md:text-3xl font-extrabold">
            À partir de {service.priceFrom}
          </div>
        </div>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-sm bg-grad-accent hover:-translate-y-0.5 transition-transform shrink-0 shadow-[0_8px_24px_-6px_rgba(225,29,72,0.55)]"
        >
          Demander un devis <ArrowRight size={16} />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="mt-14"
      >
        <h2 className="text-lg font-extrabold mb-4">Questions fréquentes</h2>
        <ServiceFAQ items={service.faq} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="mt-16 pt-10 border-t border-line"
      >
        <h2 className="text-lg font-extrabold mb-6">Autres services</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {others.map((o, idx) => {
            const OIcon = iconMap[o.icon];
            return (
              <motion.div
                key={o.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <Link
                  href={`/services/${o.slug}`}
                  className="block glass rounded-xl p-5 hover:border-white/20 transition-colors h-full"
                >
                  <OIcon size={18} className="text-accent2 mb-3" />
                  <div className="font-bold text-sm">{o.title}</div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
