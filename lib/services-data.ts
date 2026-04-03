export interface ServiceData {
  slug: string;
  icon: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  benefits: string[];
}

export const allServices: ServiceData[] = [
  {
    slug: "drg-venituri",
    icon: "⚡",
    title: "Optimizare DRG și recuperare venituri pentru spitalul vostru",
    metaTitle: "Optimizare DRG și recuperare venituri | SANITHERA",
    metaDescription:
      "Evaluăm codificarea DRG, identificăm veniturile pierdute și instruim echipa medicală. Impact vizibil din luna 3. Consultație gratuită.",
    paragraphs: [
      "Multe spitale descoperă abia la audit că o parte semnificativă din veniturile DRG contractate rămân neîncasate — nu din lipsă de activitate, ci din erori sistematice de codificare.",
      "Evaluăm împreună situația curentă a codificării, identificăm unde se pierd bani și instruim echipa medicală să documenteze corect. Nu venim cu formule generice — fiecare spital are propriile tipare de erori.",
      "Impactul devine vizibil din luna 3: creșterea valorii medii per caz, reducerea respingerilor la validare și o echipă care înțelege de ce contează fiecare detaliu din foaia de observație.",
    ],
    benefits: [
      "Audit complet al codificării DRG pe ultimele 6-12 luni",
      "Identificarea tipurilor de erori și a pierderilor estimative",
      "Instruire practică a personalului medical și de statistică",
      "Monitorizare lunară a indicatorilor DRG post-intervenție",
      "Impact financiar vizibil din luna 3 de colaborare",
    ],
  },
  {
    slug: "cpu-protocoale",
    icon: "🚨",
    title: "Organizare CPU și protocoale clinice conforme",
    metaTitle: "Organizare CPU și protocoale clinice | SANITHERA",
    metaDescription:
      "Verificăm conformitatea CPU, organizăm triajul Manchester și elaborăm protocoalele clinice pentru inspecțiile DSP și MS.",
    paragraphs: [
      "CPU-ul este punctul cel mai expus al spitalului la inspecțiile DSP și MS. O organizare deficitară nu înseamnă doar neconformitate — înseamnă riscuri reale pentru pacienți.",
      "Verificăm împreună gradul de conformitate, organizăm triajul Manchester și elaborăm protocoalele clinice necesare. Când vine inspecția, documentația e gata.",
      "Lucrăm cu echipa din CPU, nu în locul ei. Scopul este ca la finalul intervenției, personalul să poată menține singur standardele implementate.",
    ],
    benefits: [
      "Evaluarea conformității CPU față de normele în vigoare",
      "Implementare triaj Manchester adaptat la realitățile spitalului",
      "Elaborare protocoale clinice specifice profilului unității",
      "Pregătire echipă pentru inspecțiile DSP și MS",
      "Documentație completă, auditabilă și actualizabilă",
    ],
  },
  {
    slug: "calitate-acreditare",
    icon: "✅",
    title: "Pregătire acreditare ANMCS Ciclul II",
    metaTitle: "Pregătire acreditare ANMCS Ciclul II | SANITHERA",
    metaDescription:
      "Gap analysis ANMCS, sistem de management al calității, cultură siguranță (SAQ, HSPSC). Știți exact unde sunteți și ce aveți de făcut.",
    paragraphs: [
      "Ciclul II de acreditare ANMCS ridică ștacheta. Multe spitale nu știu cu exactitate cât de departe sunt de standardele cerute — și descoperă deficiențele prea târziu.",
      "Evaluăm distanța reală față de standarde prin gap analysis structurat, verificăm și îmbunătățim sistemul de management al calității (SMC) și măsurăm cultura siguranței prin instrumente validate internațional: SAQ și HSPSC.",
      "La final, știți exact unde sunteți, ce mai aveți de făcut și în ce ordine. Planul de acțiune este realist, cu termene și responsabili clar definiți.",
    ],
    benefits: [
      "Gap analysis structurat față de standardele ANMCS Ciclul II",
      "Evaluare și optimizare a sistemului de management al calității",
      "Măsurare cultură siguranță cu instrumente validate (SAQ, HSPSC)",
      "Plan de acțiune cu termene, responsabili și priorități",
      "Suport continuu până la vizita de evaluare",
    ],
  },
  {
    slug: "achizitii-publice",
    icon: "📋",
    title: "Achiziții publice corecte și eficiente",
    metaTitle: "Achiziții publice corecte și eficiente | SANITHERA",
    metaDescription:
      "Consolidăm planul anual de achiziții, elaborăm documentații conforme Legea 98/2016 și reducem riscul de contestații.",
    paragraphs: [
      "Achizițiile fragmentate nu sunt doar ineficiente — sunt și un risc juridic. Mulți manageri de spital descoperă problemele abia când vine o contestație sau un control.",
      "Analizăm împreună situația curentă, consolidăm planul anual de achiziții conform Legii 98/2016 și elaborăm documentațiile necesare. Rezultatul: proceduri mai rapide, contestații mai puține.",
      "Nu înlocuim compartimentul de achiziții — îl sprijinim. Scopul este ca echipa internă să lucreze mai eficient și mai sigur juridic.",
    ],
    benefits: [
      "Analiza situației curente și identificarea riscurilor",
      "Consolidare plan anual de achiziții conform Legea 98/2016",
      "Elaborare documentații de atribuire complete",
      "Reducerea fragmentării și a riscului de contestații",
      "Formare internă pentru compartimentul de achiziții",
    ],
  },
  {
    slug: "dezvoltare-strategica",
    icon: "📈",
    title: "Dezvoltare strategică bazată pe date și finanțări reale",
    metaTitle: "Dezvoltare strategică spitale | SANITHERA",
    metaDescription:
      "Analizăm cererea neacoperită, identificăm finanțări POS Sănătate, FEDR/ADR și construim un plan de dezvoltare pe 3-5 ani.",
    paragraphs: [
      "Fiecare spital are o zonă de influență cu nevoi specifice. Dar puține spitale au o analiză clară a cererii neacoperite și a oportunităților de dezvoltare.",
      "Analizăm datele disponibile, identificăm finanțările accesibile — POS Sănătate 2021-2027, FEDR prin ADR — și construim un plan de dezvoltare care răspunde nevoilor reale, nu presupunerilor.",
      "Planul strategic nu este un document de sertar. Este un instrument de lucru, cu indicatori, termene și surse de finanțare concrete, pe un orizont de 3-5 ani.",
    ],
    benefits: [
      "Analiză a cererii neacoperite în zona de influență",
      "Identificare finanțări disponibile (POS Sănătate, FEDR, ADR)",
      "Plan strategic pe 3-5 ani cu indicatori și termene",
      "Studii de fezabilitate pentru investiții prioritare",
      "Suport în relația cu autoritățile locale și regionale",
    ],
  },
  {
    slug: "digitalizare-ai",
    icon: "🤖",
    title: "Aplicații digitale construite pe realitatea spitalului vostru",
    metaTitle: "Digitalizare și AI pentru spitale | SANITHERA",
    metaDescription:
      "Dashboard DRG, AI ICD-10, platformă protocoale CPU. Aplicații construite specific pe nevoile spitalului vostru.",
    paragraphs: [
      "Software-ul generic rareori rezolvă problemele specifice ale unui spital. Fiecare unitate are fluxuri, priorități și constrângeri diferite.",
      "Dezvoltăm împreună aplicații pe măsură: dashboard DRG în timp real pentru management, asistent AI pentru codificare ICD-10, platformă digitală pentru protocoalele CPU. Tehnologia care lucrează pentru voi, nu invers.",
      "Nu vindem licențe software — construim instrumente care rămân ale spitalului. Fiecare aplicație este testată cu echipa care o va folosi, nu doar cu managementul.",
    ],
    benefits: [
      "Dashboard DRG în timp real pentru monitorizare performanță",
      "Asistent AI pentru codificare ICD-10 mai rapidă și mai precisă",
      "Platformă digitală pentru protocoalele CPU",
      "Instrumente construite specific pe nevoile spitalului",
      "Training echipă și suport post-implementare",
    ],
  },
];

export function getOtherServices(currentSlug: string) {
  return allServices
    .filter((s) => s.slug !== currentSlug)
    .map((s) => ({ slug: s.slug, title: s.title }));
}
