"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function AnimatedRealisationContent({
  project,
  others,
}: {
  project: any;
  others: any[];
}) {
  return (
    <div className="max-w-[900px] mx-auto px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Toutes les réalisations
        </Link>
      </motion.div>

      {/* Image de couverture avec Zoom Doux */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8 bg-black/20 border border-line"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="900px"
          priority
        />
        <span
          className={`absolute top-4 right-4 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full ${
            project.status === "En ligne"
              ? "bg-emerald-500/90 text-white"
              : "bg-amber-500/90 text-black"
          }`}
        >
          {project.status}
        </span>
      </motion.div>

      {/* Titre et description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-accent2">{project.category}</span>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold mb-6 leading-tight">{project.title}</h1>
        <p className="text-lg text-white/60 max-w-[65ch]">{project.desc}</p>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-accent2 hover:underline"
          >
            Voir le site en ligne <ExternalLink size={15} />
          </a>
        )}
      </motion.div>

      {/* Grille Contexte & Solution avec slide-in latéral croisé */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass rounded-2xl p-7 md:p-8"
        >
          <h2 className="text-lg font-extrabold mb-4">Contexte</h2>
          <p className="text-sm text-white/65 leading-relaxed">{project.context}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="glass rounded-2xl p-7 md:p-8"
        >
          <h2 className="text-lg font-extrabold mb-4">Solution</h2>
          <p className="text-sm text-white/65 leading-relaxed">{project.solution}</p>
        </motion.div>
      </div>

      {/* Résultat et stack technique avec stagger des badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-7 md:p-8 mt-6"
      >
        <h2 className="text-lg font-extrabold mb-4">Résultat</h2>
        <p className="text-sm text-white/65 leading-relaxed mb-6">{project.result}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((s: string, idx: number) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/[0.06] border border-line"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* CTA Projet similaire */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-7 md:p-8 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
      >
        <div className="text-lg font-bold">Un projet similaire en tête ?</div>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-sm bg-grad-accent hover:-translate-y-0.5 transition-transform shrink-0 shadow-[0_8px_24px_-6px_rgba(225,29,72,0.55)]"
        >
          Discutons-en <ArrowRight size={16} />
        </Link>
      </motion.div>

      {/* Autres réalisations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="mt-16 pt-10 border-t border-line"
      >
        <h2 className="text-lg font-extrabold mb-6">Autres réalisations</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {others.map((o: any, idx: number) => (
            <motion.div
              key={o.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <Link
                href={`/realisations/${o.slug}`}
                className="glass rounded-xl p-5 flex items-center gap-4 hover:border-white/20 transition-colors h-full"
              >
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-black/20 border border-line">
                  <Image src={o.image} alt={o.title} fill className="object-cover object-top" sizes="56px" />
                </div>
                <div>
                  <div className="font-bold text-sm">{o.title}</div>
                  <div className="text-xs text-white/50">{o.category}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
