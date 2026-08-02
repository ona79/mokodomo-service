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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1020]/85 border-b border-line py-3"
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
              <div className="glass rounded-2xl p-2 bg-[#0B1020]/95 shadow-xl">
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
              <div className="glass rounded-2xl p-2 bg-[#0B1020]/95 shadow-xl">
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
            className="hidden sm:inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold bg-grad-accent shadow-[0_8px_24px_-6px_rgba(225,29,72,0.55)] hover:-translate-y-0.5 transition-transform"
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
            className="lg:hidden overflow-hidden bg-[#0B1020]/95 border-t border-line max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              <a
                href="/#accueil"
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-white/80 border-b border-line"
              >
                Accueil
              </a>

              {/* Accordéon Services */}
              <div className="border-b border-line">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-3 text-base font-semibold text-white/80"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-accent2" : "text-white/40"
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden pl-3 pb-2 flex flex-col gap-1"
                    >
                      {services.map((s) => (
                        <a
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm font-semibold text-white/60 hover:text-white transition-colors"
                        >
                          {s.title}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/#formations"
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-white/80 border-b border-line"
              >
                Formations
              </a>

              <a
                href="/#packs"
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-white/80 border-b border-line"
              >
                Packs
              </a>

              {/* Accordéon Réalisations */}
              <div className="border-b border-line">
                <button
                  onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                  className="w-full flex items-center justify-between py-3 text-base font-semibold text-white/80"
                >
                  <span>Réalisations</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobilePortfolioOpen ? "rotate-180 text-accent2" : "text-white/40"
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobilePortfolioOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden pl-3 pb-2 flex flex-col gap-1"
                    >
                      {portfolio.map((p) => (
                        <a
                          key={p.slug}
                          href={`/realisations/${p.slug}`}
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm font-semibold text-white/60 hover:text-white transition-colors"
                        >
                          {p.title}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/#parcours"
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-white/80 border-b border-line"
              >
                À propos
              </a>

              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-white/80 border-b border-line"
              >
                Contact
              </a>

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
