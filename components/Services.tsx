"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "⚡",
    title: "DRG & Venituri — Știți sigur că încasați tot ce vi se cuvine?",
    description:
      "Multe spitale descoperă abia la audit că o parte din veniturile DRG contractate rămân neîncasate din cauza unor erori de codificare ușor de corectat. Evaluăm împreună situația, identificăm unde se pierd bani și instruim echipa medicală să documenteze corect. Impactul devine vizibil din luna 3.",
    highlight: false,
  },
  {
    icon: "🚨",
    title: "CPU & Protocoale — Sunteți pregătiți pentru următoarea inspecție?",
    description:
      "CPU-ul este punctul cel mai expus al spitalului la inspecțiile DSP și MS. Verificăm împreună gradul de conformitate, organizăm triajul Manchester și elaborăm protocoalele clinice necesare. Când vine inspecția, documentația e gata.",
    highlight: false,
  },
  {
    icon: "✅",
    title: "Calitate & Acreditare — Cât de departe sunteți de standardele ANMCS?",
    description:
      "Ciclul II de acreditare ANMCS ridică ștacheta. Evaluăm distanța reală față de standarde, verificăm și îmbunătățim sistemul de management al calității și măsurăm cultura siguranței prin instrumente validate internațional. Știți exact unde sunteți și ce mai aveți de făcut.",
    highlight: false,
  },
  {
    icon: "📋",
    title: "Achiziții publice — Planul anual vă protejează sau vă expune?",
    description:
      "Achizițiile fragmentate nu sunt doar ineficiente — sunt și un risc juridic. Analizăm împreună situația curentă, consolidăm planul anual de achiziții și elaborăm documentațiile conforme. Rezultatul: proceduri mai rapide, contestații mai puține.",
    highlight: false,
  },
  {
    icon: "📈",
    title: "Dezvoltare strategică — Ce servicii lipsesc în zona voastră?",
    description:
      "Fiecare spital are o zonă de influență cu nevoi specifice. Analizăm cererea neacoperită, identificăm finanțările disponibile — POS Sănătate 2021–2027, FEDR prin ADR — și construim un plan de dezvoltare care răspunde nevoilor reale, nu presupunerilor.",
    highlight: false,
  },
  {
    icon: "🤖",
    title: "Digitalizare & AI — Ce ar face un soft construit exact pe nevoile spitalului vostru?",
    description:
      "Software-ul generic rareori rezolvă problemele specifice ale unui spital. Dezvoltăm împreună aplicații pe măsură: dashboard DRG în timp real, asistent AI pentru codificare ICD-10, platformă digitală pentru protocoalele CPU. Tehnologia care lucrează pentru voi, nu invers.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="servicii" className="bg-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue font-mono text-sm tracking-widest uppercase mb-4"
        >
          Ce facem
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-syne font-bold text-[36px] md:text-[48px] leading-tight mb-4"
        >
          Șase domenii. Un singur partener.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-lg max-w-2xl mb-16"
        >
          Nicio altă firmă din România nu le acoperă simultan pentru spitalul public.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group bg-card border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                service.highlight
                  ? "border-gold/40 shadow-[0_0_30px_rgba(201,168,76,0.1)] hover:border-gold/60"
                  : "border-white/5 hover:border-blue/30"
              }`}
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="font-syne font-bold text-xl mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-[15px] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
