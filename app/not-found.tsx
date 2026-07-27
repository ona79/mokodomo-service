import Link from "next/link";
import { Compass, ArrowRight, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/lib/data";

export const metadata = {
  title: "Page introuvable — Mokodomo Tech",
  description: "Cette page n'existe pas ou plus.",
};

export default function NotFound() {
  const suggestions = services.slice(0, 4);

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <div className="max-w-[900px] mx-auto px-6 md:px-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/25 to-accent2/20 border border-line flex items-center justify-center text-accent2 mb-6">
            <Compass size={28} />
          </div>

          <div className="text-sm font-bold tracking-widest uppercase text-accent2 mb-3">Erreur 404</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
            Cette page a pris un autre chemin
          </h1>
          <p className="text-lg text-white/60 max-w-[55ch] mx-auto">
            L&apos;adresse demandée n&apos;existe pas, ou a été déplacée. Revenez à l&apos;accueil
            ou jetez un oeil à nos services ci-dessous.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-sm bg-grad-accent hover:-translate-y-0.5 transition-transform"
            >
              <Home size={16} /> Retour à l&apos;accueil
            </Link>
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-sm glass hover:border-white/20 transition-colors"
            >
              Voir nos réalisations <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t border-line text-left">
            <h2 className="text-lg font-extrabold mb-6 text-center">Nos services les plus demandés</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {suggestions.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="glass rounded-xl p-5 hover:border-white/20 transition-colors"
                >
                  <div className="font-bold text-sm mb-1.5">{s.title}</div>
                  <div className="text-xs text-white/50">{s.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
