"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "⚡",
    title: "Optimizare DRG & Venituri",
    description: "Recuperăm venitul pierdut. Rezultate din luna 3.",
    highlight: false,
  },
  {
    icon: "🚨",
    title: "Organizare CPU & Protocoale",
    description: "Conformitate completă. Triaj Manchester.",
    highlight: false,
  },
  {
    icon: "✅",
    title: "Calitate & Acreditare ANMCS",
    description: "GAP analysis, SMC, cultură siguranță pacienți.",
    highlight: false,
  },
  {
    icon: "📋",
    title: "Achiziții Publice SEAP",
    description: "Plan consolidat, conformitate Legea 98/2016.",
    highlight: false,
  },
  {
    icon: "📈",
    title: "Dezvoltare Strategică",
    description: "Piața de servicii, finanțări POS Sănătate, plan 3 ani.",
    highlight: false,
  },
  {
    icon: "🤖",
    title: "Digitalizare & AI Custom",
    description: "Aplicații specifice spitalului vostru.",
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
          Nicio altă firmă din România nu le acoperă simultan pentru spitalul
          public.
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
              <h3 className="font-syne font-bold text-xl mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
