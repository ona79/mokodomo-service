"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { services, portfolio } from "@/lib/data";

const links = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#formations", label: "Formations" },
  { href: "/#packs", label: "Packs" },
  { href: "/#parcours", label: "À propos" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-bg/75 backdrop-blur-xl border-b border-line py-3"
          : "py-5 border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1240px] mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="/#accueil" className="flex items-center gap-2.5 font-extrabold text-lg">
          <span className="w-2.5 h-2.5 rounded-[3px] bg-grad-accent" />
          Mokodomo Tech
        </a>

        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white/60">
          {/* Services : menu déroulant */}
          <div className="group relative py-2 -my-2">
            <a href="/#services" className="flex items-center gap-1.5 hover:text-white transition-colors">
              Services <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="glass rounded-2xl p-2 bg-bg/95 shadow-xl">
                {services.map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/#formations" className="hover:text-white transition-colors">Formations</a>
          <a href="/#packs" className="hover:text-white transition-colors">Packs</a>

          {/* Réalisations : menu déroulant */}
          <div className="group relative py-2 -my-2">
            <a href="/#portfolio" className="flex items-center gap-1.5 hover:text-white transition-colors">
              Réalisations <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="glass rounded-2xl p-2 bg-bg/95 shadow-xl">
                {portfolio.map((p) => (
                  <a
                    key={p.slug}
                    href={`/realisations/${p.slug}`}
                    className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
                  >
                    {p.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/#parcours" className="hover:text-white transition-colors">À propos</a>
          <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold bg-grad-accent shadow-[0_8px_24px_-6px_rgba(37,99,235,0.55)] hover:-translate-y-0.5 transition-transform"
          >
            Demander un devis
          </a>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-bg/95 backdrop-blur-xl border-t border-line max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-semibold text-white/80 border-b border-line"
                >
                  {l.label}
                </a>
              ))}

              <div className="pt-2 pb-1 text-xs font-bold uppercase tracking-wide text-white/40">Services</div>
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="py-2.5 pl-3 text-sm font-semibold text-white/60 border-b border-line"
                >
                  {s.title}
                </a>
              ))}

              <div className="pt-3 pb-1 text-xs font-bold uppercase tracking-wide text-white/40">Réalisations</div>
              {portfolio.map((p, i) => (
                <a
                  key={p.slug}
                  href={`/realisations/${p.slug}`}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 pl-3 text-sm font-semibold text-white/60 ${i < portfolio.length - 1 ? "border-b border-line" : ""}`}
                >
                  {p.title}
                </a>
              ))}

              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-4 text-center rounded-xl px-5 py-3 text-sm font-bold bg-grad-accent"
              >
                Demander un devis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
