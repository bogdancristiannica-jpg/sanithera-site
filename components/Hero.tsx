"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue/30 bg-blue/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
          <span className="text-blue-bright text-sm font-medium">
            Consultanță specializată pentru spitale publice
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-syne font-bold text-[32px] md:text-[52px] lg:text-[60px] leading-[1.08] tracking-tight mb-6"
        >
          Spitalul vostru ar putea rata oportunități.
          <br />
          Noi vă ajutăm să le identificați.
          <br />
          <span className="text-blue">Cunoaștem sistemul din interior, nu din manuale.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Consultanță integrată pentru spitalele publice din România.
          <br className="hidden md:block" />{" "}
          DRG · Calitate · CPU · Achiziții · Digitalizare.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-blue hover:bg-blue-bright text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg min-h-[44px] inline-flex items-center justify-center"
          >
            Programează consultație gratuită →
          </a>
          <a
            href="#servicii"
            className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg min-h-[44px] inline-flex items-center justify-center"
          >
            Vezi serviciile ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
