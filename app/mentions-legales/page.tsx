import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import AnimatedMentionsLegales from "@/components/AnimatedMentionsLegales";

export const metadata: Metadata = {
  title: "Mentions légales — Mokodomo Tech",
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <AnimatedMentionsLegales />
      </main>
      <Footer />
    </>
  );
}
