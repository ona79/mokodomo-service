"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function ServiceFAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {items.map((f, i) => (
        <div key={f.q} className="border-b border-line">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center gap-4 py-5 text-left font-bold text-sm md:text-base"
          >
            {f.q}
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-accent2 shrink-0">
              <Plus size={18} />
            </motion.span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-sm md:text-base text-white/55">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
