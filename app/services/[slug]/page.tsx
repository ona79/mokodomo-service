import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Code2, Smartphone, Brain, Film, Video, Cog, GraduationCap, Lightbulb, Camera,
  ArrowLeft, ArrowRight, Check,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from "@/components/ServiceFAQ";
import { services } from "@/lib/data";

const iconMap: Record<string, any> = {
  Code2, Smartphone, Brain, Film, Video, Cog, GraduationCap, Lightbulb, Camera,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Mokodomo Tech`,
    description: service.desc,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-8">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Tous les services
          </Link>

          {service.image ? (
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-line mb-8">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-bg/70 backdrop-blur border border-line flex items-center justify-center text-accent2">
                <Icon size={22} />
              </div>
            </div>
          ) : (
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/25 to-accent2/20 border border-line flex items-center justify-center text-accent2 mb-6">
              <Icon size={26} />
            </div>
          )}

          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">{service.title}</h1>
          <p className="text-lg text-white/60 max-w-[65ch]">{service.intro}</p>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            <div className="glass rounded-2xl p-7 md:p-8">
              <h2 className="text-lg font-extrabold mb-5">Avantages</h2>
              <ul className="space-y-3">
                {service.avantages.map((a) => (
                  <li key={a} className="flex gap-2.5 items-start text-sm text-white/65">
                    <Check size={16} className="text-accent2 mt-0.5 shrink-0" /> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-7 md:p-8">
              <h2 className="text-lg font-extrabold mb-5">Fonctionnalités</h2>
              <ul className="space-y-3">
                {service.fonctionnalites.map((f) => (
                  <li key={f} className="flex gap-2.5 items-start text-sm text-white/65">
                    <Check size={16} className="text-accent2 mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-7 md:p-8 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-accent2 mb-1.5">Tarif</div>
              <div className="text-2xl md:text-3xl font-extrabold">
                À partir de {service.priceFrom}
              </div>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-sm bg-grad-accent hover:-translate-y-0.5 transition-transform shrink-0"
            >
              Demander un devis <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-14">
            <h2 className="text-lg font-extrabold mb-4">Questions fréquentes</h2>
            <ServiceFAQ items={service.faq} />
          </div>

          <div className="mt-16 pt-10 border-t border-line">
            <h2 className="text-lg font-extrabold mb-6">Autres services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {others.map((o) => {
                const OIcon = iconMap[o.icon];
                return (
                  <Link
                    key={o.slug}
                    href={`/services/${o.slug}`}
                    className="glass rounded-xl p-5 hover:border-white/20 transition-colors"
                  >
                    <OIcon size={18} className="text-accent2 mb-3" />
                    <div className="font-bold text-sm">{o.title}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
