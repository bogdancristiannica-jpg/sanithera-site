"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "⚡",
    title: "Optimizare DRG & Venituri",
    description:
      "Identificăm erorile de codificare care reduc finanțarea DRG, instruim medicii și implementăm protocoale de documentare clinică. Impactul financiar devine vizibil din luna 3 de colaborare.",
    highlight: false,
  },
  {
    icon: "🚨",
    title: "Organizare CPU & Protocoale Clinice",
    description:
      "CPU-ul este cel mai verificat punct al spitalului și cel mai expus riscului contractual. Implementăm triajul Manchester, elaborăm setul complet de protocoale clinice și pregătim documentația pentru inspecțiile DSP și MS.",
    highlight: false,
  },
  {
    icon: "✅",
    title: "Calitate & Acreditare ANMCS",
    description:
      "Evaluăm distanța față de standardele ANMCS ciclu II, activăm Sistemul de Management al Calității și măsurăm cultura siguranței pacienților prin instrumente validate internațional. Acreditarea nu mai poate fi lăsată pe ultima sută de metri.",
    highlight: false,
  },
  {
    icon: "📋",
    title: "Achiziții Publice SEAP",
    description:
      "Achizițiile fragmentate generează costuri administrative disproporționate și expun instituția la riscuri juridice reale. Construim planul anual consolidat, elaborăm documentații conforme și eliminăm riscul de contestații.",
    highlight: false,
  },
  {
    icon: "📈",
    title: "Dezvoltare Strategică",
    description:
      "Analizăm zona de influență, identificăm serviciile cu cerere neacoperită și identificăm finanțările disponibile prin POS Sănătate 2021–2027 și FEDR prin ADR. Creștem spitalul strategic, nu la întâmplare.",
    highlight: false,
  },
  {
    icon: "🤖",
    title: "Digitalizare & AI Custom",
    description:
      "Nu există software generic care să rezolve problemele specifice unui spital. Putem dezvolta, împreună cu beneficiarul, aplicații custom: dashboard DRG în timp real, asistent AI pentru codificare ICD-10, platformă digitală protocoale CPU. Tehnologie care lucrează pentru voi, nu invers.",
    highlight: true,
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
