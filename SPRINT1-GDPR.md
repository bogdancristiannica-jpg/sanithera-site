# SPRINT 1 — Conformitate GDPR & Legal (Sanithera.ro)

**Data plan:** 18 aprilie 2026
**Arhitect:** Bogdan (Momo)
**Executant:** Claude Code (Micuțul)
**Orchestrator:** Jarvis (Opus 4.7)
**Repo:** `/Users/bogdannica/Documents/Consultanta spitale/sanithera-site`
**Branch:** `sprint-1/gdpr-legal`
**Stack:** Next.js 14 App Router + Tailwind + TypeScript, deploy Vercel

---

## CONTEXT

Site-ul sanithera.ro colectează prin formularul de contact date personale: **email instituțional, telefon, numele spitalului, mesaj**. Aceste date se trimit prin Proton SMTP la `office@sanithera.ro`.

Auditul realizat pe 18 aprilie 2026 a identificat:

1. **Formular fără consimțământ GDPR** — nu există checkbox obligatoriu, utilizatorul își trimite datele fără acord explicit.
2. **Zero pagini legale** — lipsesc `/privacy`, `/termeni`, `/cookies`.
3. **Zero link-uri legale în footer** (Politică de confidențialitate, ANPC, SOL).
4. **Nu e necesar cookie banner** — site-ul NU folosește cookies (localStorage nu e folosit, fontul e next/font self-hosted, nu există Google Analytics / Meta Pixel). Totuși, pentru robustețe vom include o pagină `/cookies` care explică absența cookie-urilor.

Risc legal: amendă ANSPDCP (autoritatea română GDPR) — site-ul e formal necomform cu Regulamentul 2016/679.

---

## OBIECTIV

Site conform GDPR pentru B2B medical românesc, fără dependență suplimentară de un avocat — folosind template-uri cu disclaimer „versiune provizorie — în revizuire juridică" până când clientul (SANITHERA SRL) aprobă oficial.

Livrare: 1 branch, 1 PR, merge după aprobare Momo, deploy automat Vercel.

---

## PRECONDIȚII — SATISFĂCUTE ✓

Datele oficiale SANITHERA Medical Solutions SRL (sursă: Certificat Constatator ONRC din 18.11.2025, arhivat privat la `../docs-legal/CERTIFICAT-CONSTATATOR-CUI-SANITHERA-2025-11-18.pdf` — în afara repo-ului Git):

| Câmp | Valoare |
|------|---------|
| Denumire completă | SANITHERA MEDICAL SOLUTIONS S.R.L. |
| CUI (Cod Unic de Înregistrare) | **52928758** (din 17.11.2025) |
| Nr. Registrul Comerțului | **J2025088752003** (din 14.11.2025) |
| EUID | ROONRC.J2025088752003 |
| Adresă sediu social (doc oficial) | București Sectorul 1, Calea Victoriei, Nr. 91-93, Bl. ARO, Sc. A, Et. 3, Ap. 25B |
| **Adresă afișată pe website** | **doar „București, România"** (decizie Bogdan: adresa completă nu e publică) |
| Email oficial | office@sanithera.ro |
| Telefon contact (public, în disclaimer + pagini legale) | **0745 136 707** |

**Notă juridică:** Conform Legii 265/2022 și GDPR, pe website e obligatoriu să afișezi: denumire, CUI, număr Registrul Comerțului, contact (email + tel) — NU și adresa completă. Adresa sediului e publică în ONRC (oricine caută pe CUI o găsește) — de aceea nu e obligatoriu pe site. Decizie validă.

**Confirmat de Bogdan (via Telegram, 18.04.2026):**
- Nu există Google Analytics, Hotjar, Meta Pixel, sau tracking terț → zero cookies, zero banner
- Telefonul `0745 136 707` poate apărea în disclaimer și pagini legale
- Adresa pe website: doar oraș+țară

---

## MODIFICĂRI

### 1.1 — Checkbox GDPR în formular (`components/Contact.tsx`)

**Find:** blocul `<textarea name="mesaj" ...>` și `</div>` după el.

**Add imediat înainte de `<button type="submit" ...>`:**

```tsx
<div className="flex items-start gap-3">
  <input
    type="checkbox"
    name="gdpr"
    id="gdpr"
    required
    className="mt-1 w-5 h-5 rounded border-white/20 bg-surface text-blue focus:ring-2 focus:ring-blue focus:ring-offset-0 cursor-pointer flex-shrink-0"
  />
  <label htmlFor="gdpr" className="text-sm text-gray-300 cursor-pointer leading-relaxed">
    Sunt de acord cu prelucrarea datelor conform{" "}
    <a href="/confidentialitate" className="text-blue hover:underline">
      Politicii de confidențialitate
    </a>
    .
  </label>
</div>
```

**Reguli Tailwind explicate:**
- `w-5 h-5` — checkbox de 20×20px (tap target mare).
- `flex-shrink-0` — checkbox nu se contractă la wrap.
- `mt-1` — aliniere verticală cu prima linie a textului.
- `focus:ring-2` — feedback vizual la focus keyboard.

### 1.2 — Pagini legale (3 route noi)

Structură Next.js App Router:

```
app/
├── confidentialitate/
│   └── page.tsx       ← Politica de Confidențialitate (GDPR)
├── termeni/
│   └── page.tsx       ← Termeni și Condiții
└── cookies/
    └── page.tsx       ← Politica de Cookies
```

**Conținut comun:**
- Header Navbar (din `<Navbar>` component)
- Main cu `<h1>` + paragrafe legal
- Disclaimer ⚠️ „Versiune provizorie — în curs de revizuire juridică"
- Footer (din `<Footer>` component)

**Disclaimer component reutilizabil** — se adaugă în `components/LegalDisclaimer.tsx`:

```tsx
export default function LegalDisclaimer() {
  return (
    <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-lg p-4 my-6">
      <p className="text-yellow-200 font-semibold mb-2">⚠️ Versiune provizorie</p>
      <p className="text-yellow-100/80 text-sm leading-relaxed">
        Acest document este în curs de revizuire juridică. Pentru informații
        definitive și oficiale, vă rugăm să ne contactați la{" "}
        <a href="mailto:office@sanithera.ro" className="underline">
          office@sanithera.ro
        </a>{" "}
        sau la telefonul{" "}
        <a href="tel:+40745136707" className="underline whitespace-nowrap">
          0745 136 707
        </a>.
      </p>
    </div>
  );
}
```

**Tailwind classes pentru pagini legale** — se pot factoriza într-un layout specific sau direct în pagini:

- Container: `max-w-3xl mx-auto px-6 py-16 md:py-24`
- Background: reutilizează `bg-deep`/`bg-surface` existente
- H1: `font-syne font-bold text-4xl md:text-5xl text-white mb-4`
- H2: `font-syne font-bold text-2xl text-white mt-12 mb-4`
- P: `text-gray-300 leading-relaxed mb-4`
- Link-uri: `text-blue hover:underline`

#### Conținut `confidentialitate/page.tsx`

**9 secțiuni GDPR standard:**

1. **Operatorul de date**
   SANITHERA Medical Solutions S.R.L.
   CUI: **52928758**
   Nr. Registrul Comerțului: **J2025088752003**
   Sediu: București, România
   Contact GDPR (punct unic): office@sanithera.ro · tel. 0745 136 707

2. **Date colectate prin formular**
   Numele spitalului/instituției, email instituțional, telefon, mesaj. Folosite exclusiv pentru a răspunde solicitării de consultație.

3. **Temeiul legal al prelucrării**
   - Art. 6(1)(a) GDPR — consimțământ explicit via checkbox
   - Art. 6(1)(f) GDPR — interes legitim de a răspunde solicitărilor comerciale B2B
   - Menționare specifică: datele NU includ date medicale ale pacienților (Art. 9 GDPR)

4. **Durata stocării**
   - Datele din formular: 24 de luni de la ultima interacțiune
   - Dacă se inițiază contract: durata contractului + 10 ani arhivare contabilă (Cod Fiscal Rom.)

5. **Drepturile utilizatorului (GDPR)**
   - Acces, rectificare, ștergere ("right to be forgotten"), restricționare, portabilitate, opoziție, retragere consimțământ
   - Mod de exercitare: email la office@sanithera.ro

6. **Destinatari terți**
   - Proton Mail (Elveția) — operator împuternicit pentru procesare email (conform Adequacy Decision EU-CH)
   - Vercel (SUA) — hosting site (Standard Contractual Clauses EU-US)
   - Nu vindem, nu închiriem, nu transferăm în scopuri comerciale

7. **Securitatea prelucrării**
   - Transfer HTTPS/TLS
   - Email criptat end-to-end pe Proton
   - Backup Vercel auto
   - Controlul accesului

8. **Plângeri și reclamații**
   - ANSPDCP — Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal
   - www.dataprotection.ro

9. **Modificări ale politicii**
   - Versiune actualizată permanent la `/confidentialitate`
   - Data ultimei actualizări afișată în pagină

#### Conținut `termeni/page.tsx`

**10 secțiuni:**

1. Obiect și aplicabilitate (B2B — spitale publice)
2. Identificare operator (date firmă)
3. Proprietate intelectuală (logo, texte, imagini — © SANITHERA)
4. Utilizare permisă / interzisă (scraping, copiere comercială)
5. Link-uri externe (responsabilitate terți)
6. Limitarea răspunderii (sfat consultativ, nu medical individualizat — decizii clinice rămân ale spitalului)
7. Servicii de consultanță — domeniu (DRG, Acreditare ANMCS, CPU, Achiziții SEAP, Digitalizare)
8. Legea aplicabilă (Dreptul român) + jurisdicție (București)
9. Drepturile consumatorilor — ANPC + SOL
10. Contact

#### Conținut `cookies/page.tsx`

**8 secțiuni:**

1. Definiție cookies vs. localStorage vs. session storage
2. Ce folosim — **nimic pe sanithera.ro**: nu avem cookies, localStorage, tracking
3. Ce NU folosim — Google Analytics, Meta Pixel, Hotjar, Clarity, nimic
4. Fonturile — next/font self-hosted (NU de la Google Fonts extern, deci nu transmitem IP la Google)
5. Cum controlați (redundant la noi, dar standard legal)
6. Date trimise către terți — zero la încărcare pagină
7. Modificări politicii
8. Contact

### 1.3 — Link-uri legale în Footer (`components/Footer.tsx`)

Extindere Footer existent cu secțiune nouă sub `copyright`:

```tsx
<div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm text-gray-400">
  <a href="/confidentialitate" className="hover:text-white transition-colors">
    Politica de confidențialitate
  </a>
  <span>·</span>
  <a href="/termeni" className="hover:text-white transition-colors">
    Termeni și condiții
  </a>
  <span>·</span>
  <a href="/cookies" className="hover:text-white transition-colors">
    Politica de cookies
  </a>
  <span>·</span>
  <a
    href="https://anpc.ro"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    ANPC
  </a>
  <span>·</span>
  <a
    href="https://ec.europa.eu/consumers/odr"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    SOL
  </a>
</div>
```

### 1.4 — Sitemap update

Fișierul `next-sitemap.config.js` generează automat sitemap la build. După Sprint 1, cele 3 pagini legale vor fi incluse automat în `/sitemap.xml` fără modificări la config.

### 1.5 — Text contact în `lib/content.ts` (minor)

Adăugat un câmp `gdpr_label` în `c.form` cu textul checkbox-ului pentru i18n (dacă va exista EN ulterior).

---

## VERIFICĂRI POST-MERGE

```bash
# Pagini legale live
for p in confidentialitate termeni cookies; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "https://www.sanithera.ro/$p")
  echo "  /$p → HTTP $code"
done
# Așteptat: toate 200

# Checkbox GDPR în HTML
curl -s https://www.sanithera.ro/ | grep -c 'name="gdpr"'
# Așteptat: 1

# Footer legal prezent
curl -s https://www.sanithera.ro/ | grep -c 'href="/confidentialitate"'
# Așteptat: 1

# Disclaimer vizibil pe privacy
curl -s https://www.sanithera.ro/confidentialitate | grep -c 'Versiune provizorie'
# Așteptat: 1

# Sitemap include noile pagini
curl -s https://www.sanithera.ro/sitemap-0.xml | grep -c 'confidentialitate\|termeni\|cookies'
# Așteptat: 3
```

**Test manual pe iPhone:**
1. Formular contact: încerci să trimiți FĂRĂ bifa GDPR → browser blochează (required)
2. Bifezi și trimiți → mesaj ajunge la Proton ✓
3. Click pe „Politica de confidențialitate" din footer → pagina se încarcă corect
4. Disclaimer galben vizibil, dark mode OK
5. Link ANPC se deschide extern

---

## PROCES DE EXECUȚIE (regula CLAUDE.md)

1. **Plan aprobat de Bogdan** — tu citești acest fișier și-mi dai OK explicit.
2. **Branch nou:** `sprint-1/gdpr-legal`
3. **Modificări atomice, commit per pas logic:**
   - Commit 1: checkbox GDPR în Contact.tsx
   - Commit 2: LegalDisclaimer component
   - Commit 3: pagina confidentialitate
   - Commit 4: pagina termeni
   - Commit 5: pagina cookies
   - Commit 6: footer links + navbar link opțional
4. **Build local:** `npm run build` trebuie să treacă (12 + 3 = 15 pagini statice).
5. **Push → PR deschis** (nu merge automat).
6. **Tu aprobi PR → merge → Vercel deploy.**
7. **Verificări post-deploy** (secțiunea de mai sus).

---

## RISCURI ȘI MITIGARE

| Risc | Probabilitate | Mitigare |
|------|---------------|----------|
| Texte legale incomplete sau inexacte | Mare | Disclaimer „Versiune provizorie" vizibil pe toate 3 pagini + recomandare revizuire avocat |
| CUI/nr. Registrul Comerțului lipsă | Sigur | Placeholder `[CUI — de completat]` cu TODO clar în cod |
| Link-uri legale sparg design-ul footer | Mică | Test responsive (wrap pe mobile) |
| Formularul devine uzabil din cauza checkbox-ului | Mică | `required` nativ browser — nu JS, funcționează și cu JS dezactivat |
| Vercel deploy eșuează la build | Mică | Build local înainte de push |

---

## ESTIMARE TIMP

- Plan (acum): ✓
- Aprobare Bogdan: 5-15 min review
- Execuție (branch + 6 commits + build + push + PR): ~45-60 min
- Review + merge: 5 min
- Deploy Vercel: 90 sec
- **Total: ~60-90 min de la aprobare la live**

---

## DUPĂ SPRINT 1

Când acesta e merged și live, planificăm:

- **Sprint 2 — Security headers**
  - `next.config.js` cu `async headers()` pentru CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy
  - Rate limiting pe `/api/contact` (Vercel `@vercel/kv` pentru IP tracking, sau Cloudflare WAF)
  - Honeypot invisible pe form (input hidden `name="website"` — dacă e completat = bot)

- **Sprint 3 — Nice to have**
  - Twitter Card meta
  - apple-touch-icon.png + android-chrome-192x192.png
  - Verificare accesibilitate (ARIA, alt text pe imagini, contrast WCAG AA)

---

## CHECKLIST „GATA"

- [x] CUI furnizat (52928758)
- [x] Nr. Registrul Comerțului furnizat (J2025088752003)
- [x] Adresă pe site decisă (doar „București, România")
- [x] Telefon contact legal furnizat (0745 136 707)
- [ ] Bogdan aprobă acest plan
- [ ] Branch `sprint-1/gdpr-legal` creat
- [ ] `components/LegalDisclaimer.tsx` creat
- [ ] `components/Contact.tsx` modificat (checkbox GDPR)
- [ ] `app/confidentialitate/page.tsx` creat
- [ ] `app/termeni/page.tsx` creat
- [ ] `app/cookies/page.tsx` creat
- [ ] `components/Footer.tsx` extins cu link-uri legale
- [ ] `npm run build` → 15 pages succes
- [ ] PR #N deschis, descriere completă
- [ ] Bogdan aprobă merge
- [ ] Vercel deploy success
- [ ] Toate verificările curl post-deploy
- [ ] Test manual iPhone
- [ ] Update `CLAUDE.md` cu notă despre Sprint 1 finalizat

---

*Plan scris pe 18 aprilie 2026. Versiune 1. Actualizări ulterioare se documentează direct în acest fișier.*
