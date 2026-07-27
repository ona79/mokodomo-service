import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — Mokodomo Tech",
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <div className="max-w-[760px] mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-10">Mentions légales</h1>

          <div className="space-y-8 text-white/65 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="text-white font-bold text-lg mb-2">Éditeur du site</h2>
              <p>
                Mokodomo Tech est un studio digital basé à Ziguinchor, Sénégal.
                Contact : mokodomo77@gmail.com — WhatsApp : 78 190 14 24.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-2">Hébergement</h2>
              <p>
                Ce site est hébergé sur une infrastructure tierce. Les coordonnées de
                l&apos;hébergeur seront précisées ici une fois le déploiement final effectué.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-2">Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes, visuels, code) est la
                propriété de Mokodomo Tech, sauf mention contraire, et ne peut être reproduit
                sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-2">Données personnelles</h2>
              <p>
                Les informations transmises via le formulaire de contact sont utilisées
                uniquement pour répondre à votre demande et ne sont ni revendues, ni partagées
                avec des tiers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
