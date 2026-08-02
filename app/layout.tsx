import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

import PageTransition from "@/components/PageTransition";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mokodomo-tech.com"),
  title: "Mokodomo Tech — Construisons votre avenir numérique",
  description:
    "Sites web, applications, IA, production audiovisuelle et formations professionnelles. Mokodomo Tech accompagne particuliers, entreprises et organisations en Afrique.",
  keywords: [
    "Mokodomo Tech",
    "développement web Sénégal",
    "applications mobiles Afrique",
    "intelligence artificielle",
    "formation développement web",
    "production vidéo Ziguinchor",
  ],
  openGraph: {
    title: "Mokodomo Tech — Construisons votre avenir numérique",
    description:
      "Studio digital panafricain : sites web, applications, IA, vidéo et formations professionnelles.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="bg-ambient font-sans antialiased overflow-x-hidden">
        <PageTransition>{children}</PageTransition>
        <WhatsAppFloat />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </body>
    </html>
  );
}
