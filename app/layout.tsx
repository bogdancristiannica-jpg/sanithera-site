import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sanithera.ro"),
  title: "SANITHERA Medical Solutions — Consultanță pentru spitale publice",
  description:
    "Consultanță integrată pentru spitalele publice din România: DRG, Calitate, CPU, Achiziții, Digitalizare. Primele rezultate în 30 de zile.",
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
  alternates: {
    canonical: "https://www.sanithera.ro/",
  },
  openGraph: {
    title: "SANITHERA Medical Solutions",
    description:
      "Consultanță integrată pentru spitalele publice din România.",
    url: "https://www.sanithera.ro",
    siteName: "SANITHERA Medical Solutions",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <head>
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SANITHERA Medical Solutions",
              url: "https://www.sanithera.ro",
              logo: "https://www.sanithera.ro/logo.png",
              description:
                "Consultanță integrată pentru spitalele publice din România: DRG, Calitate, CPU, Achiziții, Digitalizare.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "București",
                addressCountry: "RO",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "office@sanithera.ro",
                contactType: "customer service",
                availableLanguage: "Romanian",
              },
            }),
          }}
        />
        {/* JSON-LD: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Ce servicii oferă SANITHERA pentru spitalele publice?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SANITHERA oferă consultanță integrată în 6 domenii: optimizare DRG și venituri, organizare CPU și protocoale clinice, calitate și acreditare ANMCS, achiziții publice SEAP, dezvoltare strategică și digitalizare cu AI custom.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Cât durează până apar primele rezultate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Primele rezultate concrete devin vizibile în 30 de zile de la începerea colaborării. Metodologia noastră prevede diagnostic în primele 30 de zile, intervenție imediată în zilele 31–60 și consolidare în zilele 61–90.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Consultația inițială este gratuită?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Da. Oferim o consultație inițială gratuită de 90 de minute, fără obligații, la sediul spitalului.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Pentru ce tip de spitale lucrați?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lucrăm cu spitale publice din România — de la spitale orășenești la spitale județene de urgență. Suntem disponibili la nivel național.",
                  },
                },
              ],
            }),
          }}
        />
        {/* JSON-LD: Service x6 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Optimizare DRG și venituri",
                provider: {
                  "@type": "Organization",
                  name: "SANITHERA Medical Solutions",
                },
                areaServed: { "@type": "Country", name: "România" },
                description:
                  "Evaluăm situația DRG, identificăm unde se pierd bani și instruim echipa medicală să documenteze corect. Impactul devine vizibil din luna 3.",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Organizare CPU și protocoale clinice",
                provider: {
                  "@type": "Organization",
                  name: "SANITHERA Medical Solutions",
                },
                areaServed: { "@type": "Country", name: "România" },
                description:
                  "Verificăm conformitatea CPU, organizăm triajul Manchester și elaborăm protocoalele clinice necesare pentru inspecțiile DSP și MS.",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Calitate și acreditare ANMCS",
                provider: {
                  "@type": "Organization",
                  name: "SANITHERA Medical Solutions",
                },
                areaServed: { "@type": "Country", name: "România" },
                description:
                  "Evaluăm distanța față de standardele ANMCS ciclul II, verificăm sistemul de management al calității și măsurăm cultura siguranței.",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Achiziții publice SEAP",
                provider: {
                  "@type": "Organization",
                  name: "SANITHERA Medical Solutions",
                },
                areaServed: { "@type": "Country", name: "România" },
                description:
                  "Consolidăm planul anual de achiziții, elaborăm documentațiile conforme și reducem riscul de contestații.",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Dezvoltare strategică",
                provider: {
                  "@type": "Organization",
                  name: "SANITHERA Medical Solutions",
                },
                areaServed: { "@type": "Country", name: "România" },
                description:
                  "Analizăm cererea neacoperită, identificăm finanțările disponibile și construim un plan de dezvoltare bazat pe nevoi reale.",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Digitalizare și AI custom",
                provider: {
                  "@type": "Organization",
                  name: "SANITHERA Medical Solutions",
                },
                areaServed: { "@type": "Country", name: "România" },
                description:
                  "Dezvoltăm aplicații pe măsură: dashboard DRG, asistent AI pentru codificare ICD-10, platformă digitală pentru protocoalele CPU.",
              },
            ]),
          }}
        />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
