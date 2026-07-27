import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { portfolio } from "@/lib/data";

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Mokodomo Tech`, description: project.desc };
}

export default async function RealisationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = portfolio.filter((p) => p.slug !== project.slug);

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-8">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Toutes les réalisations
          </Link>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8 bg-panel2">
            <Image src={project.image} alt={project.title} fill className="object-cover object-top" sizes="900px" priority />
            <span
              className={`absolute top-4 right-4 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full ${
                project.status === "En ligne" ? "bg-green-500/90 text-white" : "bg-yellow-500/90 text-black"
              }`}
            >
              {project.status}
            </span>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-accent2">{project.category}</span>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold mb-6 leading-tight">{project.title}</h1>
          <p className="text-lg text-white/60 max-w-[65ch]">{project.desc}</p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-accent2"
            >
              Voir le site en ligne <ExternalLink size={15} />
            </a>
          )}

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="glass rounded-2xl p-7 md:p-8">
              <h2 className="text-lg font-extrabold mb-4">Contexte</h2>
              <p className="text-sm text-white/65 leading-relaxed">{project.context}</p>
            </div>
            <div className="glass rounded-2xl p-7 md:p-8">
              <h2 className="text-lg font-extrabold mb-4">Solution</h2>
              <p className="text-sm text-white/65 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-7 md:p-8 mt-6">
            <h2 className="text-lg font-extrabold mb-4">Résultat</h2>
            <p className="text-sm text-white/65 leading-relaxed mb-6">{project.result}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/[0.06] border border-line">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-7 md:p-8 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="text-lg font-bold">Un projet similaire en tête ?</div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold text-sm bg-grad-accent hover:-translate-y-0.5 transition-transform shrink-0"
            >
              Discutons-en <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t border-line">
            <h2 className="text-lg font-extrabold mb-6">Autres réalisations</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/realisations/${o.slug}`}
                  className="glass rounded-xl p-5 flex items-center gap-4 hover:border-white/20 transition-colors"
                >
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-panel2">
                    <Image src={o.image} alt={o.title} fill className="object-cover object-top" sizes="56px" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{o.title}</div>
                    <div className="text-xs text-white/50">{o.category}</div>
                  </div>
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
