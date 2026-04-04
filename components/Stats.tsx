"use client";

import { useFadeInOnScroll } from "@/hooks/useIntersectionObserver";
import { content } from "@/lib/content";

const c = content.stats;

export default function Stats() {
  const ref = useFadeInOnScroll();

  return (
    <section className="bg-surface py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="fade-in-on-scroll text-blue font-mono text-sm tracking-widest uppercase mb-4">
          {c.section_label}
        </p>
        <h2 className="fade-in-on-scroll font-syne font-bold text-[36px] md:text-[48px] leading-[1.25] mb-16">
          {c.section_title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {c.items.map((stat, i) => (
            <div
              key={i}
              className="fade-in-on-scroll group bg-card border border-white/5 rounded-2xl p-8 hover:border-blue/30 transition-[border-color]"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="font-syne font-bold text-[56px] text-blue leading-[1.25] mb-4 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-[filter]">
                {stat.number}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
