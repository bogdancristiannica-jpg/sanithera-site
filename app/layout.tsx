import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SANITHERA Medical Solutions — Consultanță pentru spitale publice",
  description:
    "Consultanță integrată pentru spitalele publice din România. DRG, Calitate, CPU, Achiziții publice, Digitalizare & AI. Rezultate măsurabile din prima lună.",
  keywords: [
    "consultanță spitale",
    "DRG",
    "ANMCS",
    "acreditare spitale",
    "CPU spital",
    "achiziții publice SEAP",
    "digitalizare spitale",
    "SANITHERA",
  ],
  openGraph: {
    title: "SANITHERA Medical Solutions — Consultanță pentru spitale publice",
    description:
      "Consultanță integrată pentru spitalele publice din România. DRG, Calitate, CPU, Achiziții, Digitalizare.",
    type: "website",
    locale: "ro_RO",
    siteName: "SANITHERA Medical Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
