"use client";

import { useState, FormEvent } from "react";
import { useFadeInOnScroll } from "@/hooks/useIntersectionObserver";
import { content } from "@/lib/content";

const c = content.contact;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const ref = useFadeInOnScroll();

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
      setError(c.form.error_message);
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
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="fade-in-on-scroll font-syne font-bold text-[36px] md:text-[48px] leading-[1.25] mb-4 text-center">
          {c.title}
        </h2>
        <p className="fade-in-on-scroll text-gray-300 text-lg md:text-xl text-center mb-16 max-w-xl mx-auto">
          {c.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left — Info */}
          <div className="fade-in-on-scroll flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-white text-lg">{c.email}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">
                  Web
                </p>
                <p className="text-white text-lg">{c.web}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">
                  Disponibilitate
                </p>
                <p className="text-white text-lg">{c.availability}</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  &quot;{c.quote}&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="fade-in-on-scroll">
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
                  {c.form.success_title}
                </p>
                <p className="text-gray-300">
                  {c.form.success_message}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-white/5 rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    {c.form.label_spital}
                  </label>
                  <input
                    type="text"
                    name="spital"
                    required
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue focus:outline-none transition-colors min-h-[44px]"
                    placeholder={c.form.placeholder_spital}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    {c.form.label_email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue focus:outline-none transition-colors min-h-[44px]"
                    placeholder={c.form.placeholder_email}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    {c.form.label_telefon}
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue focus:outline-none transition-colors min-h-[44px]"
                    placeholder={c.form.placeholder_telefon}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    {c.form.label_mesaj}
                  </label>
                  <textarea
                    name="mesaj"
                    rows={4}
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue focus:outline-none transition-colors resize-none"
                    placeholder={c.form.placeholder_mesaj}
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
                  {loading ? c.form.submitting : c.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
