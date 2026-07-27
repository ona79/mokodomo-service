"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[60ch] mx-auto text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent2">
            Ils nous font confiance
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Témoignages</h2>
        </motion.div>

        <div className="glass rounded-2xl max-w-[760px] mx-auto text-center p-10 md:p-14 min-h-[260px] flex flex-col justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex justify-center gap-1 text-yellow-400 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg md:text-xl font-semibold leading-relaxed mb-6">
                &ldquo;{testimonials[i].quote}&rdquo;
              </p>
              <div className="font-bold">{testimonials[i].name}</div>
              <div className="text-sm text-white/50">{testimonials[i].role}</div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, d) => (
              <button
                key={d}
                onClick={() => setI(d)}
                aria-label={`Témoignage ${d + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  d === i ? "bg-accent2" : "bg-line"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
