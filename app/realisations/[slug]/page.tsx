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

import AnimatedRealisationContent from "@/components/AnimatedRealisationContent";

export default async function RealisationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = portfolio.filter((p) => p.slug !== project.slug);

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <AnimatedRealisationContent project={project} others={others} />
      </main>
      <Footer />
    </>
  );
}
