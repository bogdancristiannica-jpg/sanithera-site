"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Servicii", href: "#servicii" },
  { label: "Cum lucrăm", href: "#cum-lucram" },
  { label: "De ce noi", href: "#de-ce-noi" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-deep/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="SANITHERA Medical Solutions"
            width={160}
            height={60}
            className="h-16 w-auto object-contain rounded-lg"
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-[15px]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue hover:bg-blue-bright text-white font-semibold px-6 py-2.5 rounded-lg transition-all text-[15px]"
          >
            Consultație gratuită
          </a>
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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-lg py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue hover:bg-blue-bright text-white font-semibold px-6 py-3 rounded-lg transition-all text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Consultație gratuită
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
