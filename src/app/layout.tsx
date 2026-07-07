import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elbunkerdelvendedor.com"),
  title: "El Búnker del Vendedor — Vender no se improvisa, se entrena",
  description:
    "El centro de entrenamiento para vendedores independientes que ya se cansaron de improvisar, perseguir prospectos y depender de la suerte. En vivo, cada semana, con Paco Anguiano y Mariana Franco.",
  openGraph: {
    title: "El Búnker del Vendedor — Vender no se improvisa, se entrena",
    description:
      "El centro de entrenamiento para vendedores independientes. En vivo, cada semana, con Paco Anguiano y Mariana Franco.",
    images: ["/banner-coaches.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Búnker del Vendedor",
    description:
      "Vender no se improvisa. Se entrena. Comunidad de entrenamiento para vendedores independientes.",
    images: ["/banner-coaches.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
