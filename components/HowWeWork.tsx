"use client";

import { useFadeInOnScroll } from "@/hooks/useIntersectionObserver";
import { content } from "@/lib/content";

const c = content.methodology;

export default function HowWeWork() {
  const ref = useFadeInOnScroll();

  return (
    <section id="cum-lucram" className="bg-surface py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="fade-in-on-scroll text-blue font-mono text-sm tracking-widest uppercase mb-4">
          {c.section_label}
        </p>
        <h2 className="fade-in-on-scroll font-syne font-bold text-[36px] md:text-[48px] leading-[1.25] mb-16">
          {c.section_title}
        </h2>

        <div className="relative">
          {/* Vertical line connector */}
          <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-blue via-blue/50 to-blue/10" />

          <div className="space-y-8">
            {c.steps.map((step, i) => (
              <div
                key={i}
                className="fade-in-on-scroll flex gap-6 md:gap-8 items-start"
                style={{ transitionDelay: `${i * 200}ms` }}
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
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-on-scroll mt-12 bg-card border border-blue/20 rounded-2xl p-6 md:p-8 text-center">
          <p className="font-syne font-semibold text-xl text-white">
            {c.guarantee}
          </p>
          <p className="font-syne font-medium text-lg text-gray-300 mt-3">
            {c.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
