"use client";

import { motion } from "framer-motion";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section id="parcours" className="py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[60ch] mb-14 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent2 before:content-[''] before:w-5 before:h-0.5 before:bg-accent2">
            Notre parcours
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">D&apos;une formation d&apos;ingénieur à un studio digital</h2>
          <p className="mt-4 text-white/60 text-base md:text-lg">
            Mokodomo Tech n&apos;est pas parti d&apos;un business plan, mais d&apos;une envie de
            construire des choses utiles avec les compétences acquises en génie informatique.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-line -translate-x-1/2" />
          <div className="space-y-10 md:space-y-0">
            {journey.map((step, i) => {
              const fromLeft = i % 2 === 0;
              return (
                <div
                  key={step.title}
                  className="md:grid md:grid-cols-2 md:gap-14 md:items-center relative md:py-8"
                >
                  <motion.div
                    initial={{ opacity: 0, x: fromLeft ? -70 : 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className={`glass rounded-2xl p-7 md:p-8 ${
                      fromLeft ? "md:col-start-1" : "md:col-start-2"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-accent2">
                      {step.year}
                    </span>
                    <h3 className="mt-2 mb-3 text-lg md:text-xl font-extrabold">{step.title}</h3>
                    <p className="text-sm md:text-base text-white/60">{step.text}</p>
                  </motion.div>
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-grad-accent left-1/2 -translate-x-1/2 ring-4 ring-bg`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
