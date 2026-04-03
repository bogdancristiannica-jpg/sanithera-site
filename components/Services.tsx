"use client";

import Link from "next/link";
import { useFadeInOnScroll } from "@/hooks/useIntersectionObserver";
import { content } from "@/lib/content";

const c = content.services;

export default function Services() {
  const ref = useFadeInOnScroll();

  return (
    <section id="servicii" className="bg-deep py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="fade-in-on-scroll text-blue font-mono text-sm tracking-widest uppercase mb-4">
          {c.section_label}
        </p>
        <h2 className="fade-in-on-scroll font-syne font-bold text-[36px] md:text-[48px] leading-[1.25] mb-4">
          {c.section_title}
        </h2>
        <p className="fade-in-on-scroll text-gray-500 text-lg max-w-2xl mb-16">
          {c.section_subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((service, i) => (
            <div
              key={i}
              className="fade-in-on-scroll group bg-card border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/30"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="font-syne font-bold text-xl mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href={`/servicii/${service.slug}`}
                className="text-blue hover:text-blue-bright text-sm font-semibold transition-colors"
              >
                Află mai mult →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
