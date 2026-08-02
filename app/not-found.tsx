import Link from "next/link";
import { Compass, ArrowRight, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/lib/data";

import AnimatedNotFound from "@/components/AnimatedNotFound";

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
        <AnimatedNotFound suggestions={suggestions} />
      </main>
      <Footer />
    </>
  );
}
