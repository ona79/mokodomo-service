"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Compass, ArrowRight, Home } from "lucide-react";

export default function AnimatedNotFound({ suggestions }: { suggestions: any[] }) {
  return (
    <div className="max-w-[900px] mx-auto px-6 md:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/25 to-accent2/20 border border-line flex items-center justify-center text-accent2 mb-6"
      >
        <Compass size={28} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="text-sm font-bold tracking-widest uppercase text-accent2 mb-3">Erreur 404</div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
          Cette page a pris un autre chemin
        </h1>
        <p className="text-lg text-white/60 max-w-[55ch] mx-auto">
          L&apos;adresse demandée n&apos;existe pas, ou a été déplacée. Revenez à l&apos;accueil
          ou jetez un oeil à nos services ci-dessous.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-sm bg-grad-accent hover:-translate-y-0.5 transition-transform shadow-[0_8px_24px_-6px_rgba(225,29,72,0.55)]"
        >
          <Home size={16} /> Retour à l&apos;accueil
        </Link>
        <Link
          href="/#portfolio"
          className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-sm glass hover:border-white/20 transition-colors"
        >
          Voir nos réalisations <ArrowRight size={16} />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="mt-16 pt-10 border-t border-line text-left"
      >
        <h2 className="text-lg font-extrabold mb-6 text-center">Nos services les plus demandés</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {suggestions.map((s, idx) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="block glass rounded-xl p-5 hover:border-white/20 transition-colors h-full"
              >
                <div className="font-bold text-sm mb-1.5">{s.title}</div>
                <div className="text-xs text-white/50">{s.desc}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
