import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalDisclaimer from "@/components/LegalDisclaimer";

export const metadata: Metadata = {
  title: "Politica de confidențialitate — SANITHERA Medical Solutions",
  description:
    "Politica de confidențialitate și protecția datelor pentru sanithera.ro, conform Regulamentului GDPR (UE) 2016/679.",
  alternates: { canonical: "https://www.sanithera.ro/confidentialitate" },
  robots: { index: true, follow: true },
};

export default function ConfidentialitatePage() {
  return (
    <>
      <Navbar />
      <main className="bg-deep min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Politica de confidențialitate
          </h1>
          <p className="text-gray-400 text-sm mb-2">
            Ultima actualizare: 18 aprilie 2026
          </p>

          <LegalDisclaimer />

          <section className="space-y-4 text-gray-300 leading-relaxed">
            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              1. Operatorul de date
            </h2>
            <p>
              <strong className="text-white">SANITHERA Medical Solutions S.R.L.</strong>
              <br />
              Cod Unic de Înregistrare (CUI): <strong>52928758</strong>
              <br />
              Număr Registrul Comerțului: <strong>J2025088752003</strong>
              <br />
              Sediu: București, România
              <br />
              Contact GDPR:{" "}
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

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              2. Date colectate prin formularul de contact
            </h2>
            <p>
              Când folosiți formularul de contact de pe sanithera.ro, colectăm
              următoarele date:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Numele instituției/spitalului</li>
              <li>Adresa de email instituțională</li>
              <li>Numărul de telefon (opțional)</li>
              <li>Conținutul mesajului transmis</li>
            </ul>
            <p>
              Datele sunt folosite exclusiv pentru a răspunde solicitării
              dumneavoastră de consultație. <strong className="text-white">Nu colectăm date medicale ale pacienților</strong>{" "}
              prin acest formular (Art. 9 GDPR).
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              3. Temeiul legal al prelucrării
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Art. 6(1)(a) GDPR</strong> —
                consimțământ explicit acordat prin bifarea checkbox-ului din
                formular înainte de trimitere.
              </li>
              <li>
                <strong className="text-white">Art. 6(1)(f) GDPR</strong> —
                interes legitim al operatorului în a răspunde solicitărilor
                comerciale B2B din partea instituțiilor medicale publice.
              </li>
            </ul>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              4. Durata stocării datelor
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Datele din formular: maximum <strong className="text-white">24 de luni</strong> de la
                ultima interacțiune, dacă nu se inițiază o colaborare.
              </li>
              <li>
                Dacă se inițiază un contract: durata contractului +{" "}
                <strong className="text-white">10 ani</strong> arhivare
                contabilă (conform Codului Fiscal și Legii Contabilității nr. 82/1991).
              </li>
            </ul>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              5. Drepturile dumneavoastră conform GDPR
            </h2>
            <p>Beneficiați de următoarele drepturi:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Dreptul de acces la datele personale</li>
              <li>Dreptul la rectificare</li>
              <li>Dreptul la ștergere („dreptul de a fi uitat")</li>
              <li>Dreptul la restricționarea prelucrării</li>
              <li>Dreptul la portabilitatea datelor</li>
              <li>Dreptul la opoziție</li>
              <li>Dreptul de a vă retrage consimțământul în orice moment</li>
            </ul>
            <p>
              Pentru exercitarea oricărui drept, contactați-ne la{" "}
              <a
                href="mailto:office@sanithera.ro"
                className="text-blue hover:underline"
              >
                office@sanithera.ro
              </a>
              . Vă vom răspunde în cel mult 30 de zile.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              6. Destinatari terți
            </h2>
            <p>
              Datele sunt procesate doar prin prestatori de servicii selectați
              cu grijă:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong className="text-white">Proton Mail AG</strong> (Elveția) — primim mesajul
                dumneavoastră prin serviciul SMTP criptat end-to-end. Elveția
                beneficiază de decizie de adecvare UE.
              </li>
              <li>
                <strong className="text-white">Vercel Inc.</strong> (SUA) —
                hosting pentru website. Transferul de date către SUA este
                acoperit de Standard Contractual Clauses (SCC) conform Art. 46
                GDPR.
              </li>
            </ul>
            <p>
              Nu vindem, nu închiriem și nu transferăm datele dumneavoastră
              către terți în scopuri comerciale.
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              7. Securitatea prelucrării
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Transfer criptat HTTPS/TLS 1.3</li>
              <li>Email criptat end-to-end prin Proton Mail</li>
              <li>Backup automat al site-ului (Vercel)</li>
              <li>Control acces intern pe bază de rol</li>
            </ul>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              8. Plângeri și reclamații
            </h2>
            <p>
              Dacă aveți nelămuriri privind modul în care prelucrăm datele
              dumneavoastră, vă rugăm să ne contactați mai întâi direct. În
              cazul în care considerați că drepturile v-au fost încălcate,
              aveți dreptul să depuneți o plângere la:
            </p>
            <p className="ml-4">
              <strong className="text-white">
                Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
                Caracter Personal (ANSPDCP)
              </strong>
              <br />
              B-dul Gen. Gheorghe Magheru 28–30, Sector 1, București
              <br />
              Web:{" "}
              <a
                href="https://www.dataprotection.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline"
              >
                www.dataprotection.ro
              </a>
            </p>

            <h2 className="font-syne font-bold text-2xl text-white mt-12 mb-4">
              9. Modificări ale politicii
            </h2>
            <p>
              Orice modificare a acestei politici va fi publicată pe această
              pagină. Data ultimei actualizări este afișată în antet.
            </p>

            <p className="mt-12 pt-6 border-t border-white/10 text-sm text-gray-400">
              A se vedea și{" "}
              <Link
                href="/termeni"
                className="text-blue hover:underline"
              >
                Termenii și condițiile
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
