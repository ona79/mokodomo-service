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

import AnimatedServiceContent from "@/components/AnimatedServiceContent";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-20">
        <AnimatedServiceContent service={service} others={others} />
      </main>
      <Footer />
    </>
  );
}
