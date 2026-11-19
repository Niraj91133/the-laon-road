"use client";

import React from "react";
import { ShieldAlert, HeartPulse, Car, Umbrella, ArrowRight } from "lucide-react";

interface InsuranceProps {
  onOpenConsultation: (category: string) => void;
}

export default function InsuranceSection({ onOpenConsultation }: InsuranceProps) {
  const plans = [
    {
      title: "Loan Suraksha",
      badge: "Must-Have",
      icon: Umbrella,
      desc: "Borrower ke sath an-honi par insurance pura loan chukata hai.",
      highlight: true,
    },
    {
      title: "Health & Medical",
      badge: "Cashless",
      icon: HeartPulse,
      desc: "Emergency bimari me naya loan na lena pade. Cashless cover.",
      highlight: false,
    },
    {
      title: "Term Life",
      badge: "Family Security",
      icon: ShieldAlert,
      desc: "Lowest premium par pure family protection with 80C benefit.",
      highlight: false,
    },
    {
      title: "General & Motor",
      badge: "Instant",
      icon: Car,
      desc: "Car, bike, commercial vehicle instant cashless policy.",
      highlight: false,
    },
  ];

  return (
    <section id="insurance" className="py-12 bg-white border-b border-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-dark-900 tracking-tight">
            Insurance & Protection
          </h2>
          <span className="text-xs text-dark-500 font-semibold hidden sm:inline">
            Bundled with Loan Facility
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {plans.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className={`p-4 rounded-xl border flex flex-col justify-between ${
                  p.highlight
                    ? "bg-blue-50/40 border-brand-accent"
                    : "bg-subtle border-borderSubtle"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-dark-900 text-white flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-white border border-borderSubtle text-dark-700">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-dark-900 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-dark-600 mb-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <button
                  onClick={() => onOpenConsultation(`Insurance: ${p.title}`)}
                  className="w-full py-1.5 bg-white text-dark-900 border border-borderSubtle rounded text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1 mt-2"
                >
                  Get Quote
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
