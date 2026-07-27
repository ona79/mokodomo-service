import { Send } from "lucide-react";

const cols = [
  { title: "Entreprise", links: [["À propos", "/#parcours"], ["Réalisations", "/#portfolio"], ["Contact", "/#contact"]] },
  { title: "Services", links: [["Sites web", "/services/sites-web"], ["Applications", "/services/applications"], ["Solutions IA", "/services/ia"], ["Vidéo", "/services/montage-video"]] },
  { title: "Formations", links: [["Développement web", "/#formations"], ["Intelligence Artificielle", "/#formations"], ["Montage vidéo", "/#formations"]] },
  { title: "Liens utiles", links: [["Packs & tarifs", "/#packs"], ["FAQ", "/#faq"], ["Témoignages", "/#temoignages"]] },
];

export default function Footer() {
  return (
    <footer className="border-t border-line pt-16 pb-8">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 font-extrabold text-lg">
              <span className="w-2.5 h-2.5 rounded-[3px] bg-grad-accent" />
              Mokodomo Tech
            </div>
            <p className="mt-3.5 text-sm text-white/50 max-w-[32ch]">
              Studio digital panafricain — sites web, applications, IA, vidéo et formations.
            </p>
            <div className="flex gap-2 mt-4 max-w-xs">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-grow bg-white/[0.04] border border-line rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-accent2"
              />
              <button className="rounded-lg px-4 bg-grad-accent flex items-center justify-center">
                <Send size={15} />
              </button>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h5 className="text-xs font-bold uppercase tracking-wide text-white/50 mb-4">{c.title}</h5>
              <ul className="space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-white/55 hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-line text-sm text-white/45">
          <span>© 2026 Mokodomo Tech. Tous droits réservés.</span>
          <div className="flex gap-5 items-center">
            <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
            <span>Ziguinchor, Sénégal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
