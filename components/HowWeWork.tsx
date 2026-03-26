"use client";

import { motion } from "framer-motion";

const steps = [
  {
    phase: "1",
    title: "Diagnostic",
    period: "Zilele 1–30",
    description: "Audit DRG, CPU, ANMCS",
    deliverable: "Raport priorități",
  },
  {
    phase: "2",
    title: "Intervenție imediată",
    period: "Zilele 31–60",
    description: "Corectare codificare, protocoale",
    deliverable: "Recuperare venituri DRG",
  },
  {
    phase: "3",
    title: "Consolidare",
    period: "Zilele 61–90",
    description: "Formare echipă, acreditare, digital",
    deliverable: "Plan strategic 6 luni",
  },
];

export default function HowWeWork() {
  return (
    <section id="cum-lucram" className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue font-mono text-sm tracking-widest uppercase mb-4"
        >
          Metodologie
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-syne font-bold text-[36px] md:text-[48px] leading-tight mb-16"
        >
          Primele 90 de zile. Concret și măsurabil.
        </motion.h2>

        <div className="relative">
          {/* Vertical line connector */}
          <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-blue via-blue/50 to-blue/10" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-6 md:gap-8 items-start"
              >
                {/* Step number */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-blue/10 border border-blue/20 flex items-center justify-center">
                  <span className="font-syne font-bold text-3xl text-blue">
                    {step.phase}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-8 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                    <h3 className="font-syne font-bold text-2xl text-white">
                      {step.title}
                    </h3>
                    <span className="text-blue text-sm font-mono">
                      {step.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3">{step.description}</p>
                  <p className="text-sm text-gray-500">
                    <span className="text-blue-bright font-semibold">
                      Livrabil:
                    </span>{" "}
                    {step.deliverable}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-card border border-blue/20 rounded-2xl p-6 md:p-8 text-center"
        >
          <p className="font-syne font-semibold text-xl text-white">
            Fiecare livrabil este documentat, măsurabil și al vostru.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
