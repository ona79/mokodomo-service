"use client";

import { motion } from "framer-motion";
import { Rocket, Award, Handshake, Zap, Headphones, Star } from "lucide-react";
import { whyUs } from "@/lib/data";

const iconMap: Record<string, any> = { Rocket, Award, Handshake, Zap, Headphones, Star };

export default function WhyUs() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[60ch] mx-auto text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent2">
            Pourquoi Mokodomo Tech
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Pourquoi nous choisir ?</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((w, i) => {
            const Icon = iconMap[w.icon];
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, filter: "blur(6px)", y: 16 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
                className="glass rounded-2xl p-7"
              >
                <Icon size={26} className="text-accent2 mb-3.5" />
                <h4 className="font-bold text-base mb-2">{w.title}</h4>
                <p className="text-sm text-white/55">{w.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
