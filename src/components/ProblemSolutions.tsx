"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import {
  ImperfectDocsIllustration,
  DebtConsolidationIllustration,
  CibilGaugeIllustration,
} from "./Illustrations";

interface ProblemSolutionsProps {
  onOpenConsultation: (category: string) => void;
}

export default function ProblemSolutions({
  onOpenConsultation,
}: ProblemSolutionsProps) {
  const cards = [
    {
      num: "01",
      title: "Incomplete Papers",
      badge: "No-ITR / Cash",
      illustration: ImperfectDocsIllustration,
      issue: "Bank rejects due to missing ITR.",
      fix: "Banking Surrogate Model",
      range: "₹1L – ₹25L",
      tat: "48h Approval",
      cat: "Imperfect Documentation Loan",
    },
    {
      num: "02",
      title: "Multiple Loans",
      badge: "Consolidation",
      illustration: DebtConsolidationIllustration,
      issue: "Heavy EMIs cause high FOIR reject.",
      fix: "Single EMI + Top-Up Disbursal",
      range: "Save 35% EMI",
      tat: "Instant Restructure",
      cat: "Running Loan Consolidation",
    },
    {
      num: "03",
      title: "CIBIL Score < 650",
      badge: "Dispute & Loan",
      illustration: CibilGaugeIllustration,
      issue: "Past default blocks fresh credit.",
      fix: "Bureau Audit + Soft-Check NBFC",
      range: "Score Rectify",
      tat: "NOC Issuance",
      cat: "CIBIL Repair & Loan",
    },
  ];

  return (
    <section id="solutions" className="py-14 sm:py-16 bg-white border-b border-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Short Header */}
        <div className="text-center space-y-1 mb-10">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent bg-blue-50 px-2 py-0.5 rounded">
            Case Types
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-900 tracking-tight">
            Complex Cases We Sanction
          </h2>
        </div>

        {/* 3-Card Visual Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, idx) => {
            const Illustration = card.illustration;
            return (
              <div
                key={idx}
                className="bg-subtle rounded-xl p-5 border border-borderSubtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-slate-400">
                      CASE {card.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-white border border-borderSubtle text-dark-700">
                      {card.badge}
                    </span>
                  </div>

                  <Illustration />

                  <h3 className="text-base font-bold text-dark-900 mb-2">
                    {card.title}
                  </h3>

                  <div className="text-xs text-red-600 font-medium mb-1.5">
                    <span className="font-bold">Issue:</span> {card.issue}
                  </div>

                  <div className="text-xs text-emerald-800 font-semibold mb-3 bg-emerald-50 p-2 rounded border border-emerald-100">
                    <span className="font-bold">Fix:</span> {card.fix}
                  </div>

                  <div className="flex justify-between text-xs py-1 border-t border-slate-200 text-dark-700">
                    <span>Benefit:</span>
                    <span className="font-bold text-dark-900">{card.range}</span>
                  </div>
                  <div className="flex justify-between text-xs py-1 border-t border-slate-200 text-dark-700">
                    <span>Speed:</span>
                    <span className="font-bold text-dark-900">{card.tat}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenConsultation(card.cat)}
                    className="w-full py-2 bg-dark-900 hover:bg-dark-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-1"
                  >
                    Apply Case {card.num}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
