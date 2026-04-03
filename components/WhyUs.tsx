"use client";

import { motion } from "framer-motion";

const reasons = [
  "Cunoaștem sistemul din interior, nu din manuale. Avem experiență de peste 30 de ani în sistem.",
  "Primele rezultate concrete în 30 de zile. Nu rapoarte de 200 de pagini.",
  "Disponibili când aveți nevoie. Nu doar la ședințele programate.",
  "Aplicații digitale construite pe realitatea spitalului vostru, nu software generic.",
];

export default function WhyUs() {
  return (
    <section id="de-ce-noi" className="bg-deep py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne font-bold text-[36px] md:text-[48px] leading-[1.15] mb-2"
        >
          Cunoaștem sistemul din interior.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-xl italic mb-16"
        >
          Nu din manuale.
        </motion.p>

        <div className="space-y-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border-l-2 border-blue pl-6 md:pl-8 py-2"
            >
              <p className="font-syne font-semibold text-xl md:text-2xl text-white leading-relaxed">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
