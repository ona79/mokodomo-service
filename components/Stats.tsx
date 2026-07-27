"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = Math.max(1, Math.round(target / 40));
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) {
        cur = target;
        clearInterval(timer);
      }
      setVal(cur);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 120, suffix: "+", label: "Projets réalisés" },
  { value: 95, suffix: "%", label: "Clients satisfaits" },
  { value: 20, suffix: "+", label: "Technologies maîtrisées" },
];

export default function Stats() {
  return (
    <section className="py-16 border-y border-line">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="text-3xl md:text-4xl font-extrabold text-gradient">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1.5 text-sm font-semibold text-white/50">{s.label}</div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-3xl md:text-4xl font-extrabold text-gradient">24/7</div>
          <div className="mt-1.5 text-sm font-semibold text-white/50">Support</div>
        </motion.div>
      </div>
    </section>
  );
}
