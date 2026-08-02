"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Éditeur du site",
    text: "Mokodomo Tech est un studio digital basé à Ziguinchor, Sénégal. Contact : mokodomo77@gmail.com — WhatsApp : 78 190 14 24.",
  },
  {
    title: "Hébergement",
    text: "Ce site est hébergé sur une infrastructure tierce. Les coordonnées de l'hébergeur seront précisées ici une fois le déploiement final effectué.",
  },
  {
    title: "Propriété intellectuelle",
    text: "L'ensemble des contenus présents sur ce site (textes, visuels, code) est la propriété de Mokodomo Tech, sauf mention contraire, et ne peut être reproduit sans autorisation préalable.",
  },
  {
    title: "Données personnelles",
    text: "Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre à votre demande et ne sont ni revendues, ni partagées avec des tiers.",
  },
];

export default function AnimatedMentionsLegales() {
  return (
    <div className="max-w-[760px] mx-auto px-6 md:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold mb-10"
      >
        Mentions légales
      </motion.h1>

      <div className="space-y-8 text-white/65 text-sm md:text-base leading-relaxed">
        {sections.map((sec, i) => (
          <motion.section
            key={sec.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <h2 className="text-white font-bold text-lg mb-2">{sec.title}</h2>
            <p>{sec.text}</p>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
