import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalDisclaimer from "@/components/LegalDisclaimer";

export const metadata: Metadata = {
  title: "Termeni și condiții — SANITHERA Medical Solutions",
  description:
    "Termenii și condițiile de utilizare pentru sanithera.ro și serviciile de consultanță oferite.",
  alternates: { canonical: "https://www.sanithera.ro/termeni" },
  robots: { index: true, follow: true },
};

export default function TermeniPage() {
  return (
    <>
      <Navbar />
      <main className="bg-deep min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Termeni și condiții
          </h1>
          <p className="text-gray-400 text-sm mb-2">
            Ultima actualizare: 18 aprilie 2026
          </p>

          <LegalDisclaimer />

          <section className="space-y-4 text-gray-300 leading-relaxed">
            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              1. Obiect și aplicabilitate
            </h2>
            <p>
              Acești termeni reglementează utilizarea website-ului{" "}
              <strong className="text-white">sanithera.ro</strong>, destinat
              prezentării serviciilor de consultanță oferite de SANITHERA
              Medical Solutions S.R.L. unităților sanitare publice din România
              (segment B2B).
            </p>
            <p>
              Prin accesarea site-ului, acceptați acești termeni. Dacă nu sunteți
              de acord, vă rugăm să nu utilizați site-ul.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              2. Identificarea operatorului
            </h2>
            <p>
              <strong className="text-white">SANITHERA Medical Solutions S.R.L.</strong>
              <br />
              CUI: <strong>52928758</strong>
              <br />
              Nr. Registrul Comerțului: <strong>J2025088752003</strong>
              <br />
              Sediu: București, România
              <br />
              Email:{" "}
              <a
                href="mailto:office@sanithera.ro"
                className="text-blue hover:underline"
              >
                office@sanithera.ro
              </a>
              <br />
              Telefon:{" "}
              <a
                href="tel:+40745136707"
                className="text-blue hover:underline whitespace-nowrap"
              >
                0745 136 707
              </a>
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              3. Proprietate intelectuală
            </h2>
            <p>
              Întregul conținut al site-ului (texte, logo, imagini, grafică,
              design) este proprietatea SANITHERA Medical Solutions S.R.L. sau
              a licențiatorilor săi, protejat de legislația privind drepturile
              de autor și mărcile înregistrate.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              4. Utilizare permisă și interzisă
            </h2>
            <p>Este permis:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Consultarea site-ului pentru informare</li>
              <li>Completarea formularului de contact cu date reale</li>
              <li>Citarea conținutului cu atribuire corectă și link</li>
            </ul>
            <p>Este interzis:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Copierea, reproducerea sau distribuirea conținutului în scop
                comercial fără acord scris
              </li>
              <li>
                Scraping automat, colectare automată de date, atacuri de
                denial-of-service
              </li>
              <li>
                Utilizarea formularului cu date false sau pentru spam
              </li>
            </ul>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              5. Link-uri externe
            </h2>
            <p>
              Site-ul poate conține link-uri către resurse externe (ANPC, SOL,
              ANSPDCP, legislație oficială). Nu suntem responsabili pentru
              conținutul site-urilor terțe. Accesarea lor se face pe riscul
              dumneavoastră.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              6. Limitarea răspunderii — caracterul informativ
            </h2>
            <p>
              Informațiile publicate pe sanithera.ro au caracter{" "}
              <strong className="text-white">informativ și consultativ</strong>. Nu constituie
              consultanță juridică, medicală sau financiară individualizată.
              Orice decizie clinică, juridică, financiară sau de management
              rămâne responsabilitatea exclusivă a unității sanitare și a
              profesioniștilor implicați.
            </p>
            <p>
              Relația profesională de consultanță se stabilește exclusiv printr-un{" "}
              <strong className="text-white">contract scris</strong>, semnat de ambele părți.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              7. Servicii oferite
            </h2>
            <p>
              SANITHERA Medical Solutions oferă consultanță integrată în
              următoarele domenii:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Optimizare DRG și Revenue Cycle</li>
              <li>Calitate și acreditare ANMCS</li>
              <li>Organizare CPU și protocoale clinice</li>
              <li>Achiziții publice SEAP</li>
              <li>Dezvoltare strategică și finanțări europene</li>
              <li>Digitalizare și aplicații AI custom</li>
            </ul>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              8. Legea aplicabilă și jurisdicție
            </h2>
            <p>
              Acești termeni sunt guvernați de legislația română. Orice
              dispută se va soluționa amiabil sau, în caz contrar, de către
              instanțele competente din municipiul București.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              9. Drepturile consumatorilor
            </h2>
            <p>
              Pentru litigii cu consumatorii (persoane fizice), puteți apela
              la:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong className="text-white">ANPC</strong> — Autoritatea Națională pentru
                Protecția Consumatorilor:{" "}
                <a
                  href="https://anpc.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  anpc.ro
                </a>
              </li>
              <li>
                <strong className="text-white">SOL</strong> — Platforma europeană de soluționare
                online a litigiilor:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
              </li>
            </ul>
            <p>
              Precizare: serviciile noastre sunt adresate preponderent
              unităților sanitare publice (persoane juridice) în raport B2B.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              10. Contact
            </h2>
            <p>
              Întrebări legate de acești termeni:{" "}
              <a
                href="mailto:office@sanithera.ro"
                className="text-blue hover:underline"
              >
                office@sanithera.ro
              </a>{" "}
              ·{" "}
              <a
                href="tel:+40745136707"
                className="text-blue hover:underline whitespace-nowrap"
              >
                0745 136 707
              </a>
            </p>

            <p className="mt-12 pt-6 border-t border-white/10 text-sm text-gray-400">
              A se vedea și{" "}
              <Link
                href="/confidentialitate"
                className="text-blue hover:underline"
              >
                Politica de confidențialitate
              </Link>{" "}
              și{" "}
              <Link href="/cookies" className="text-blue hover:underline">
                Politica de cookies
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
