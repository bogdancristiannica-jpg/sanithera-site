"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "15–30%",
    description:
      "Din venitul DRG contractat rămâne neîncasat anual — din erori sistematice de codificare, nu din lipsă de activitate.",
  },
  {
    number: "1 din 3",
    description:
      "Spitale publice evaluate în ciclul II ANMCS se confruntă cu deficiențe critice de documentare și conformitate. Cele mai multe pot fi rezolvate cu un plan structurat.",
  },
  {
    number: "Integrat",
    description:
      "Majoritatea consultanților oferă servicii care vizează spitalele doar dintr-un anumit punct de vedere: DRG, Achiziții sau acreditare. Experiența noastră ne permite să oferim soluții integrate și personalizate pentru toate problemele voastre.",
  },
];

export default function Stats() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue font-mono text-sm tracking-widest uppercase mb-4"
        >
          Realitatea din teren
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-syne font-bold text-[36px] md:text-[48px] leading-tight mb-16"
        >
          Datele pe care nimeni nu le spune cu voce tare.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card border border-white/5 rounded-2xl p-8 hover:border-blue/30 transition-all"
            >
              <p className="font-syne font-bold text-[56px] text-blue leading-none mb-4 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                {stat.number}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
