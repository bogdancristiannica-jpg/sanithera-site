"use client";

import { useFadeInOnScroll } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import Link from "next/link";

interface ServicePage {
  title: string;
  icon: string;
  slug: string;
  paragraphs: string[];
  benefits: string[];
  otherServices: { slug: string; title: string }[];
}

export default function ServicePageTemplate({ title, icon, slug, paragraphs, benefits, otherServices }: ServicePage) {
  const ref = useFadeInOnScroll();

  return (
    <div ref={ref}>
      {/* Breadcrumb */}
      <div className="bg-deep pt-24 pb-4">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Acasă</Link>
            <span className="mx-2">›</span>
            <Link href="/#servicii" className="hover:text-white transition-colors">Servicii</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-300">{title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-deep py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-4xl mb-6 block">{icon}</span>
          <h1 className="font-syne font-bold text-[32px] md:text-[48px] lg:text-[56px] leading-[1.25] tracking-tight mb-8">
            {title}
          </h1>
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <p key={i} className="fade-in-on-scroll text-gray-300 text-lg leading-relaxed max-w-3xl">
                {p}
              </p>
            ))}
          </div>

          {/* Hero image */}
          <div className="mt-12 rounded-2xl overflow-hidden">
            <Image
              src={`/images/servicii/${slug}.webp`}
              alt={title}
              width={1216}
              height={640}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="fade-in-on-scroll font-syne font-bold text-[28px] md:text-[36px] leading-[1.25] mb-10">
            Ce obțineți concret
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="fade-in-on-scroll flex items-start gap-4 bg-card border border-white/5 rounded-xl p-5"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-blue text-xl mt-0.5">✓</span>
                <p className="text-gray-200 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="fade-in-on-scroll font-syne font-bold text-[28px] md:text-[36px] leading-[1.25] mb-6">
            Discutăm despre spitalul vostru?
          </h2>
          <p className="fade-in-on-scroll text-gray-300 text-lg mb-8">
            Consultație inițială gratuită de 90 de minute. Fără obligații.
          </p>
          <a
            href="/#contact"
            className="fade-in-on-scroll inline-flex items-center justify-center bg-blue hover:bg-blue-bright text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg"
          >
            Programează consultație gratuită →
          </a>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="fade-in-on-scroll font-syne font-bold text-[24px] md:text-[30px] leading-[1.25] mb-8">
            Alte servicii
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/servicii/${service.slug}`}
                className="fade-in-on-scroll group bg-card border border-white/5 rounded-xl p-5 hover:border-blue/30 transition-all"
              >
                <p className="font-syne font-semibold text-white group-hover:text-blue transition-colors">
                  {service.title}
                </p>
                <span className="text-gray-500 text-sm mt-2 block group-hover:text-gray-300 transition-colors">
                  Află mai mult →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
