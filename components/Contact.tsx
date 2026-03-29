"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          spital: formData.get("spital"),
          email: formData.get("email"),
          telefon: formData.get("telefon"),
          mesaj: formData.get("mesaj"),
        }),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Eroare la trimitere. Încercați din nou sau scrieți-ne la office@sanithera.ro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{
        background: "linear-gradient(180deg, #0f1729 0%, #020408 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-syne font-bold text-[36px] md:text-[48px] leading-tight mb-4 text-center"
        >
          90 de minute care vă arată exact unde sunteți și ce puteți îmbunătăți.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 text-lg md:text-xl text-center mb-16 max-w-xl mx-auto"
        >
          Gratuit. Fără obligații. Ne întâlnim la sediul spitalului sau programăm o discuție video.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-white text-lg">office@sanithera.ro</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">
                  Web
                </p>
                <p className="text-white text-lg">sanithera.ro</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">
                  Disponibilitate
                </p>
                <p className="text-white text-lg">Disponibili național · Deplasare la sediul clientului</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  &quot;Discutăm situația actuală, identificăm împreună prioritățile și estimăm impactul concret al primelor măsuri — totul în 90 de minute, la voi.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <div className="bg-card border border-blue/20 rounded-2xl p-8 md:p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-syne font-bold text-2xl text-white mb-2">
                  Vă mulțumim!
                </p>
                <p className="text-gray-300">
                  Vă contactăm în 24 de ore.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-white/5 rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Numele spitalului
                  </label>
                  <input
                    type="text"
                    name="spital"
                    required
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue focus:outline-none transition-colors min-h-[44px]"
                    placeholder="Spitalul Municipal..."
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Email instituțional
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue focus:outline-none transition-colors min-h-[44px]"
                    placeholder="contact@spital.ro"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue focus:outline-none transition-colors min-h-[44px]"
                    placeholder="07xx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Mesaj / Întrebare
                  </label>
                  <textarea
                    name="mesaj"
                    rows={4}
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue focus:outline-none transition-colors resize-none"
                    placeholder="Cu ce vă putem ajuta?"
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue hover:bg-blue-bright text-white font-semibold py-4 rounded-xl transition-all text-lg min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Se trimite..." : "Trimite →"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
