"use client";

import { useFadeInOnScroll } from "@/hooks/useIntersectionObserver";
import { content } from "@/lib/content";

const c = content.why_us;

export default function WhyUs() {
  const ref = useFadeInOnScroll();

  return (
    <section id="de-ce-noi" className="bg-deep py-24 md:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="fade-in-on-scroll font-syne font-bold text-[36px] md:text-[48px] leading-[1.25] mb-2">
          {c.title}
        </h2>
        <p className="fade-in-on-scroll text-gray-500 text-xl italic mb-16">
          {c.subtitle}
        </p>

        <div className="space-y-6">
          {c.reasons.map((reason, i) => (
            <div
              key={i}
              className="fade-in-on-scroll border-l-2 border-blue pl-6 md:pl-8 py-2"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="font-syne font-semibold text-xl md:text-2xl text-white leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
