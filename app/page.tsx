import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Packs from "@/components/Packs";
import Formations from "@/components/Formations";
import Portfolio from "@/components/Portfolio";
import Journey from "@/components/Journey";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CanvasScrollBackground from "@/components/CanvasScrollBackground";

export default function Home() {
  return (
    <>
      <CanvasScrollBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Packs />
          <Formations />
          <Portfolio />
          <Journey />
          <WhyUs />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

