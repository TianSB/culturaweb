import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Cultura en Proyectos | Fundación cultural argentina",
    template: "%s | Cultura en Proyectos",
  },
  description:
    "Cultura en Proyectos es una fundación argentina que desarrolla proyectos culturales, artísticos, educativos y tecnológicos con foco en inclusión y sustentabilidad.",
  openGraph: {
    title: "Cultura en Proyectos | Fundación cultural argentina",
    description:
      "Cultura en Proyectos es una fundación argentina que desarrolla proyectos culturales, artísticos, educativos y tecnológicos con foco en inclusión y sustentabilidad.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
