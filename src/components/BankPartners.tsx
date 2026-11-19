"use client";

import React from "react";
import { Building2 } from "lucide-react";

export default function BankPartners({
  onOpenConsultation,
}: {
  onOpenConsultation: (cat?: string) => void;
}) {
  const partners = [
    { name: "State Bank of India (SBI)", tier: "Govt PSU", rate: "from 8.50%" },
    { name: "HDFC Bank", tier: "Top Private", rate: "from 10.25%" },
    { name: "ICICI Bank", tier: "Top Private", rate: "from 10.40%" },
    { name: "Bajaj Finserv", tier: "Instant NBFC", rate: "from 11.00%" },
    { name: "Axis Bank", tier: "Top Private", rate: "from 10.49%" },
    { name: "Tata Capital", tier: "Instant NBFC", rate: "from 10.99%" },
    { name: "Bank of Baroda", tier: "Govt PSU", rate: "from 8.60%" },
    { name: "Piramal Finance", tier: "Flexible Docs", rate: "from 11.50%" },
  ];

  return (
    <section id="bank-partners" className="py-12 bg-subtle border-b border-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-brand-accent" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-dark-900 tracking-tight">
              150+ Direct Lending Partners
            </h2>
          </div>
          <span className="text-xs text-dark-500 font-semibold hidden sm:inline">
            Direct Underwriting Desk
          </span>
        </div>

        {/* 8 Clean Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg border border-borderSubtle flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-dark-600 inline-block mb-1">
                  {partner.tier}
                </span>
                <h3 className="text-xs font-bold text-dark-900 truncate">
                  {partner.name}
                </h3>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-dark-500">ROI</span>
                <span className="font-bold text-dark-800">{partner.rate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
