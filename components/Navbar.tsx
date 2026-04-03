"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { label: "DRG & Venituri", href: "/servicii/drg-venituri" },
  { label: "CPU & Protocoale", href: "/servicii/cpu-protocoale" },
  { label: "Calitate & Acreditare", href: "/servicii/calitate-acreditare" },
  { label: "Achiziții publice", href: "/servicii/achizitii-publice" },
  { label: "Dezvoltare strategică", href: "/servicii/dezvoltare-strategica" },
  { label: "Digitalizare & AI", href: "/servicii/digitalizare-ai" },
];

const navLinks = [
  { label: "Cum lucrăm", href: "/#cum-lucram" },
  { label: "De ce noi", href: "/#de-ce-noi" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-deep/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="SANITHERA Medical Solutions"
            width={160}
            height={60}
            className="h-16 w-auto object-contain rounded-lg"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-gray-300 hover:text-white transition-colors text-[15px] flex items-center gap-1"
            >
              Servicii
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-72 bg-card border border-white/10 rounded-xl shadow-2xl overflow-hidden transition-all duration-200 ${
                servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-sm"
                  onClick={() => setServicesOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-[15px]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-blue hover:bg-blue-bright text-white font-semibold px-6 py-2.5 rounded-lg transition-all text-[15px]"
          >
            Consultație gratuită
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-deep/95 backdrop-blur-xl border-t border-white/5 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {/* Mobile Services Accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="text-gray-300 hover:text-white transition-colors text-lg py-2 flex items-center justify-between"
          >
            Servicii
            <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-4 flex flex-col gap-2 pb-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-base py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-lg py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-blue hover:bg-blue-bright text-white font-semibold px-6 py-3 rounded-lg transition-all text-center mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Consultație gratuită
          </Link>
        </div>
      </div>
    </nav>
  );
}
