# SANITHERA.RO — Reguli pentru Claude Code

## Proiect
- Site de prezentare: sanithera.ro
- Stack: Next.js 14 (App Router), Tailwind CSS, TypeScript
- Hosting: Vercel (Pro), DNS: Cloudflare
- Email: Proton Mail (SMTP token pentru formular contact)
- Repo: GitHub, deploy automat la push pe main

## Reguli Git — OBLIGATORII
- **NU lucra NICIODATĂ direct pe main.** Creează branch pentru fiecare task (ex: `fix/fonts`, `feat/service-pages`, `fix/smtp-proton`).
- Commit separat după fiecare pas logic.
- Când branch-ul e gata și testat: merge în main, push, Vercel face deploy automat.
- Dacă ceva nu merge: `git revert` pe commit-ul problematic, nu șterge codul manual.
- NU face push pe main fără confirmarea explicită a lui Bogdan.

## Reguli de lucru
- Plan → aprobare explicită → execuție. NICIO acțiune fără OK.
- Dacă ceva nu merge după 2 încercări: STOP, raportează, caută pe internet soluții verificate.
- Citește codul existent ÎNAINTE de a modifica.
- Nu adăuga dependențe noi fără aprobare.
- Nu inventa funcționalități care nu au fost cerute.
- Explică CE faci, DE CE, CE ÎNSEAMNĂ — la fiecare pas.

## Structura proiectului
```
/Users/bogdannica/Documents/Consultanta spitale/sanithera-site/
├── app/
│   ├── api/contact/route.ts    ← formular, SMTP Proton
│   ├── layout.tsx              ← layout global, fonturi, meta tags
│   ├── page.tsx                ← pagina principală
│   └── servicii/               ← pagini individuale (de creat)
├── components/                 ← Hero, Stats, Services, etc.
├── lib/content.ts              ← tot textul site-ului (de creat)
├── public/                     ← logo, og-image, robots.txt, llms.txt, sitemap
├── CLAUDE.md                   ← ACEST FIȘIER
└── PROMPT-REFACTOR-COMPLET.md  ← promptul curent de lucru
```

## Env vars (Vercel dashboard, NU în cod)
- `PROTON_SMTP_USER` = office@sanithera.ro
- `PROTON_SMTP_TOKEN` = token SMTP din Proton Settings
- Variabilele vechi GMAIL_USER / GMAIL_APP_PASSWORD sunt de ȘTERS din Vercel după migrare.

## Ce NU mai e relevant
- Repo-ul vechi Emergent din `/Users/bogdannica/Documents/GitHub/sanithera-medical-solutions/` — ABANDONAT, nu-l atinge.
- Framer Motion — ELIMINAT, înlocuit cu CSS pur.
- Google Fonts extern — ELIMINAT, folosim next/font.
- Google Workspace — ÎNCHIS, nu mai există. SMTP e pe Proton.

## Compatibilitate
- Site-ul trebuie să funcționeze decent pe browsere vechi (calculatoare din spitale: Windows 7/Vista, Chrome vechi, IE11 nu e necesar dar Edge vechi da).
- Zero dependențe JavaScript grele pentru animații.
- CSS animations în loc de JS animations.

<!-- VERCEL BEST PRACTICES START -->
## Best practices for developing on Vercel

- Treat Vercel Functions as stateless + ephemeral
- Store secrets in Vercel Env Variables; not in git or `NEXT_PUBLIC_*`
- Set Function regions near your primary data source
- Use Cron Jobs for schedules; cron runs in UTC
- Enable Web Analytics + Speed Insights early
<!-- VERCEL BEST PRACTICES END -->
