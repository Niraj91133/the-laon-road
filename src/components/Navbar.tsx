"use client";

import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: (category?: string) => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "150+ Banks", href: "#bank-partners" },
    { name: "Defense VIP", href: "#defense-desk" },
    { name: "Calculator", href: "#calculator" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Clean Brand Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-dark-900 flex items-center justify-center text-white font-black text-sm">
              LR
            </div>
            <span className="text-lg font-black tracking-tight text-dark-900">
              LOAN <span className="text-brand-accent">ROAD</span>
            </span>
          </a>

          {/* Simple Clean Desktop Links - Zero Numbers */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-dark-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-dark-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Single Clean CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => onOpenConsultation("Navbar Action")}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-dark-900 hover:bg-brand-accent rounded-md transition-all flex items-center gap-1.5"
            >
              Check My Case
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-dark-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-borderSubtle bg-white px-5 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-dark-800"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation("Mobile Request");
            }}
            className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-dark-900 rounded-md"
          >
            Check My Case
          </button>
        </div>
      )}
    </header>
  );
}
