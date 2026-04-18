import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalDisclaimer from "@/components/LegalDisclaimer";

export const metadata: Metadata = {
  title: "Politica de cookies — SANITHERA Medical Solutions",
  description:
    "Politica de cookies pentru sanithera.ro — site-ul nu folosește cookies, tracking sau storage local pentru urmărire.",
  alternates: { canonical: "https://www.sanithera.ro/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-deep min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Politica de cookies
          </h1>
          <p className="text-gray-400 text-sm mb-2">
            Ultima actualizare: 18 aprilie 2026
          </p>

          <LegalDisclaimer />

          <section className="space-y-4 text-gray-300 leading-relaxed">
            <div className="bg-green-500/10 border-l-4 border-green-500 rounded-r-lg p-4 my-6">
              <p className="text-green-200 font-semibold mb-2">
                ✓ Sanithera.ro nu folosește cookies
              </p>
              <p className="text-green-100/80 text-sm leading-relaxed">
                Site-ul nostru nu setează cookies de identificare, nu folosește
                tracking, nu folosește localStorage și nu transmite date către
                terți pentru analiză sau publicitate. De aceea nu afișăm banner
                de cookies — nu există nimic de consimțit.
              </p>
            </div>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              1. Ce sunt cookies
            </h2>
            <p>
              Cookies sunt mici fișiere text pe care un site le salvează în
              browserul utilizatorului. Pot fi folosite pentru autentificare,
              preferințe, analiză sau publicitate țintită.
            </p>
            <p>
              Regulamentul GDPR și Directiva ePrivacy (Legea 506/2004 în
              România) obligă site-urile să obțină consimțământul utilizatorului
              înainte de a seta cookies non-esențiale.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              2. Ce folosim pe sanithera.ro
            </h2>
            <p>
              <strong className="text-white">Nimic care să necesite consimțământ.</strong>{" "}
              Concret:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Nu setăm niciun cookie (nici esențial, nici de sesiune)</li>
              <li>Nu folosim localStorage sau sessionStorage pentru urmărire</li>
              <li>Nu avem autentificare pe site</li>
              <li>Nu avem coș de cumpărături sau rețineri de stare</li>
            </ul>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              3. Ce NU folosim (explicit)
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
              <li>Meta/Facebook Pixel</li>
              <li>TikTok Pixel</li>
              <li>Hotjar, Clarity sau orice instrument de session replay</li>
              <li>Rețele publicitare (AdSense, programatic)</li>
              <li>Chat widgets terțe (Intercom, Drift, Tawk etc.)</li>
            </ul>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              4. Fonturile de pe site
            </h2>
            <p>
              Folosim fonturile <strong className="text-white">Inter</strong> și{" "}
              <strong className="text-white">Syne</strong> servite{" "}
              <strong className="text-white">self-hosted</strong> prin mecanismul{" "}
              <code className="bg-surface px-2 py-0.5 rounded text-sm">next/font</code> din Next.js. Asta înseamnă că browserul
              dumneavoastră{" "}
              <strong className="text-white">nu trimite adresa IP către Google</strong>{" "}
              când încarcă fontul — fontul este servit de pe serverul nostru.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              5. Cum controlați cookies în browser
            </h2>
            <p>
              Chiar dacă noi nu setăm cookies, puteți controla cookies general
              din setările browserului:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Chrome: Setări → Confidențialitate și securitate → Cookies
              </li>
              <li>Firefox: Setări → Confidențialitate și securitate</li>
              <li>Safari: Preferințe → Confidențialitate</li>
              <li>
                Edge: Setări → Cookies și permisiuni ale site-ului
              </li>
            </ul>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              6. Date transmise către terți la încărcarea paginii
            </h2>
            <p>
              La încărcarea site-ului, browserul dumneavoastră face conexiuni
              doar către:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong className="text-white">Vercel</strong> (hosting) — pentru servirea
                paginii; adresa IP ajunge la furnizorul de hosting, conform
                logurilor tehnice standard.
              </li>
              <li>
                <strong className="text-white">Cloudflare</strong> (DNS + CDN) — pentru
                rezoluție DNS și servire conținut; logul DNS păstrat conform
                politicii Cloudflare.
              </li>
            </ul>
            <p>
              Aceste date tehnice nu sunt folosite pentru profilare sau
              marketing.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              7. Modificări ale politicii
            </h2>
            <p>
              Dacă pe viitor vom adăuga funcționalități care necesită cookies
              (ex. formulare complexe, chat), vom actualiza această pagină și
              vom implementa un banner de consimțământ conform GDPR + ePrivacy.
              Până atunci: zero cookies, zero tracking, zero banner.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              8. Contact
            </h2>
            <p>
              Întrebări despre această politică:{" "}
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
              <Link href="/termeni" className="text-blue hover:underline">
                Termenii și condițiile
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
