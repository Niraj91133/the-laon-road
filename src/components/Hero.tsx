"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { HeroRoadIllustration } from "./Illustrations";

interface HeroProps {
  onOpenConsultation: (category?: string) => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Ultra-Short Copy */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-accent bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
              150+ Banks Direct Underwriting Desk
            </span>

            {/* 1-Liner Short Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark-900 tracking-tight leading-tight">
              Jab Bank Reject Kare, Tab <span className="text-brand-accent">Hum Sanction Karate Hain.</span>
            </h1>

            {/* Short 2-Liner Subtitle */}
            <p className="text-sm sm:text-base text-dark-600 font-normal leading-relaxed">
              Incomplete papers, multiple running loans ya low CIBIL.<br className="hidden sm:inline" />
              150+ Banks se direct structure karke approval.
            </p>

            {/* Compact CTA */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenConsultation("File Evaluation")}
                className="px-6 py-3 bg-brand-accent hover:bg-brand-accentHover text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2"
              >
                Check Eligibility
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/917261852298?text=Hello%20Loan%20Road,%20I%20need%20loan%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-subtle hover:bg-slate-200 text-dark-900 border border-borderSubtle text-xs font-bold uppercase tracking-wider rounded-md transition-all text-center"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* 3 Micro Points */}
            <div className="pt-1 flex flex-wrap gap-4 text-xs text-dark-500 font-medium">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Free Review
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> No Advance Fees
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Soft Check Only
              </span>
            </div>
          </div>

          {/* Right Column: Clean Sanction Card */}
          <div className="lg:col-span-5">
            <HeroRoadIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
