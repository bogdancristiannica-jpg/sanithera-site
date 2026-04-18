# SPRINT 2 — Security Headers & Form Protection (Sanithera.ro)

**Data plan:** 18 aprilie 2026
**Arhitect:** Bogdan (Momo)
**Executant:** Claude Code (Micuțul)
**Repo:** `/Users/bogdannica/Documents/Consultanta spitale/sanithera-site`
**Branch:** `sprint-2/security-headers`

---

## CONTEXT

Sprint 1 a rezolvat GDPR + legal. Sprint 2 se ocupă de partea tehnică de securitate:

1. **Security headers** în `next.config.js` — protejează contra clickjacking, MITM, XSS, info leaking
2. **Honeypot invisible** pe formular — filtru anti-bot simplu, fără JS
3. **Rate limiting** pe `/api/contact` — limitează abuzul (spam / DoS lejer)

Riscul cu **CSP** (Content Security Policy): site-ul folosește `dangerouslySetInnerHTML` pentru 3 blocuri JSON-LD în `app/layout.tsx`. O CSP prea strictă rupe JSON-LD → SEO pierde schema.org. Soluția: `script-src 'self' 'unsafe-inline'` (sau hash-uri). Decizia mai jos.

---

## OBIECTIV

Sanithera.ro obține grad A/A+ pe securityheaders.com fără a rupe nimic vizibil pe site și fără a adăuga dependențe scumpe.

---

## 2.1 — Security Headers în `next.config.mjs`

**Transformăm** `next.config.mjs` din fișier gol într-unul cu `async headers()`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

**Explicații:**

| Header | Ce face | Valoare aleasă |
|--------|---------|----------------|
| HSTS | Forțează HTTPS 2 ani + include subdomenii + eligibil preload list | `max-age=63072000; includeSubDomains; preload` |
| X-Content-Type-Options | Blochează MIME sniffing | `nosniff` |
| X-Frame-Options | Antideclickjacking, site-ul nu poate fi pus în iframe | `DENY` |
| Referrer-Policy | Trimite Referer doar pe același origin, parțial cross-origin | `strict-origin-when-cross-origin` |
| Permissions-Policy | Interzice acces la cameră/microfon/geo/FLoC | — |
| CSP | Restricționează surse de cod/stiluri/imagini | vezi mai jos |

**CSP — compromis:**
- `'unsafe-inline'` la `script-src` e necesar pentru JSON-LD (dangerouslySetInnerHTML). Alternativa e nonce/hash per build — complicație inutilă pe site static.
- `'unsafe-inline'` la `style-src` e necesar pentru Tailwind JIT + stiluri inline Next.js.
- Fără `unsafe-eval`, fără `*` wildcards.
- Fără `upgrade-insecure-requests` (Vercel forțează HTTPS oricum).

**Ce NU includem (justificare):**
- `report-to` / `report-uri` — nu avem CSP reporting setup. Îl putem adăuga ulterior.
- `Cross-Origin-*-Policy` (COOP/COEP/CORP) — nu folosim SharedArrayBuffer sau workers. Inutil pe site static.

**Risc:** CSP poate rupe ceva neașteptat (analytics terțe, fonturi externe). Soluție: testăm pe PR preview înainte de merge. Dacă rupe ceva, relaxăm per caz.

---

## 2.2 — Honeypot invisible pe formular (`components/Contact.tsx`)

**Logica:** un input `<input type="text" name="website">` cu `aria-hidden="true"`, poziționat off-screen. Utilizatorii reali nu-l văd → nu-l completează. Bot-urile completează toate câmpurile → îl completează. Dacă `website` e ne-gol la submit, ignorăm silențios (returnăm 200 OK, dar nu trimitem email — bot nu știe că a fost filtrat).

**Modificări Contact.tsx (client-side):**

```tsx
// în form, imediat după <label htmlFor="gdpr">:
<input
  type="text"
  name="website"
  tabIndex={-1}
  autoComplete="off"
  aria-hidden="true"
  className="absolute left-[-9999px] w-px h-px opacity-0"
  style={{ pointerEvents: "none" }}
/>
```

Plus extragere `website: formData.get("website")` în handleSubmit + trimis în body.

**Modificări `app/api/contact/route.ts` (server-side):**

```ts
const { spital, email, telefon, mesaj, website } = await req.json();

// Honeypot: dacă website e completat, e bot — 200 OK fără email
if (website) {
  return NextResponse.json({ success: true });
}
```

**De ce 200 OK, nu 400?** Dacă răspundem 400, bot-ul retry-uiește sau raportează câmpul greșit. Răspunsul 200 e „fake success" — bot-ul crede că a reușit și pleacă. Tehnica standard.

---

## 2.3 — Rate limiting pe `/api/contact`

**Decizie critică — 3 opțiuni, una trebuie aleasă:**

### Opțiunea A: `@upstash/ratelimit` + Upstash Redis (recomandat)
- **Pro:** nu costă (free tier 10k req/zi), setup 5 minute, cod simplu, funcționează regional Vercel
- **Contra:** dependență nouă (`@upstash/ratelimit` + `@upstash/redis`) + cont Upstash + 2 env vars noi
- **Cost:** $0 (free tier generos)

### Opțiunea B: In-memory cu `Map` globală
- **Pro:** zero dependențe, zero cost
- **Contra:** nu funcționează pe Vercel Fluid Compute multi-instance — rate limit e per-instance, un atacator poate sparge prin request-uri paralele pe mai multe instanțe
- **Verdict:** NU e soluție reală, doar iluzie

### Opțiunea C: Cloudflare WAF Rate Limiting
- **Pro:** gestionat extern, nu atinge cod deloc, protejează tot site-ul
- **Contra:** se configurează în dashboard Cloudflare (nu în cod), free tier limitat (10k req/lună gratis, apoi $0.5/million)
- **Cost:** $0 pentru trafic curent

**Recomandarea mea: Opțiunea A (Upstash).**
- Regula CLAUDE.md: „Nu adăuga dependențe noi fără aprobare." → ȚIE aparține decizia.
- Dacă zici nu Upstash, mergem pe Opțiunea C (Cloudflare) dar atunci Sprint 2 se reduce la 2.1 + 2.2, iar 2.3 devine task de configurare Cloudflare (ți-l explic separat, pas cu pas).

**Limita propusă:** 5 cereri / IP / oră pe `/api/contact`. Un spital real nu trimite 5 cereri pe oră. Bot-urile încearcă zeci.

---

## 2.4 — Log basic la primiri email (opțional, dar util)

Adăugăm `console.log` în `/api/contact` cu timestamp + IP (din header Vercel) + spital + email (scurt, pentru traceability). Vercel logs păstrează 24h free tier, 30 zile pe Pro. Util pentru audit dacă cineva abuzează sau dacă un email nu a ajuns.

```ts
const ip = req.headers.get("x-forwarded-for") ?? "unknown";
console.log(`[contact] ${new Date().toISOString()} ip=${ip} spital=${spital} email=${email}`);
```

Nu logăm `mesaj` (GDPR — conținut personal).

---

## COMMITS PLANIFICATE

1. `feat(security): security headers în next.config.mjs (HSTS, CSP, X-Frame, etc.)`
2. `feat(security): honeypot invisible pe formular + check server-side`
3. `feat(security): rate limiting pe /api/contact` *(condiționat de decizia ta la 2.3)*
4. `chore(api): log basic la primiri email (timestamp + IP)` *(opțional)*

---

## VERIFICĂRI POST-MERGE

```bash
# 1. HSTS live
curl -sI https://www.sanithera.ro/ | grep -i strict-transport-security

# 2. CSP live
curl -sI https://www.sanithera.ro/ | grep -i content-security-policy

# 3. Grad securityheaders.com
# → https://securityheaders.com/?q=sanithera.ro
# → țintă: A sau A+

# 4. Honeypot — test manual POST cu website completat:
curl -X POST https://www.sanithera.ro/api/contact \
  -H "Content-Type: application/json" \
  -d '{"spital":"Test","email":"test@test.ro","website":"http://spam.com"}'
# Răspuns: 200 OK, dar email-ul NU trebuie să ajungă la Proton.

# 5. Formular real — manual pe iPhone, verifici că totul încă merge.
```

---

## RISCURI

| Risc | Probabilitate | Mitigare |
|------|---------------|----------|
| CSP rupe JSON-LD / Tailwind / fonturi next/font | Mică-Medie | Preview Vercel înainte de merge + `unsafe-inline` la script+style |
| Honeypot prinde utilizator real care folosește autofill agresiv | Foarte mică | `autoComplete="off"` + tabindex=-1 + aria-hidden |
| Rate limit oprește un client legitim | Mică | 5/oră/IP e conservator; pot crește la 10 dacă reclamă cineva |
| Upstash se strică / expiră free tier | Mică | Fail-open: dacă Redis e down, request trece (nu blocăm contactul) |

---

## DECIZII CARE TREBUIE LUATE ÎNAINTE

1. **CSP — `unsafe-inline` acceptabil?** (Recomand: DA, e realitate pentru site-uri Next.js cu JSON-LD.)
2. **Rate limit — Upstash, Cloudflare sau deocamdată niciuna?** (Recomand: Upstash — dependență mică, free, reversibil.)
3. **Log IP la primiri email?** (Recomand: DA, util dacă apare abuz.)

Așteptarea: îmi răspunzi cu „da/da/da" (sau variante) → execut ce ai aprobat.
