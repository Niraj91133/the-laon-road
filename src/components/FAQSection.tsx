"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "CIBIL score 550–650 hai, kya loan milega?",
      a: "Haan. Hum bureau error rectify karate hain aur cashflow-based NBFCs se loan approve karate hain.",
    },
    {
      q: "ITR ya salary slip nahi hai, toh loan kaise hoga?",
      a: "Banking statement turnover surrogate scheme ke basis par bina 3-saal ITR ke bhi loan sanction hota hai.",
    },
    {
      q: "Already 3-4 loans chal rahe hain, aur paisa chahiye?",
      a: "Hum 'Debt Consolidation' karke sabhi loans ko 1 loan me merge karte hain, EMI 35% kam hoti hai aur extra cash milta hai.",
    },
    {
      q: "Army aur Defense ke liye kya process hai?",
      a: "Dedicated VIP Desk hai — Service ID par 24–48 ghante me direct sanction at lowest interest rates.",
    },
  ];

  return (
    <section className="py-12 bg-subtle border-b border-borderSubtle">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-extrabold text-dark-900 tracking-tight text-center mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-borderSubtle overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-3.5 text-left flex items-center justify-between gap-3 font-bold text-dark-900 text-xs sm:text-sm"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-accent shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-dark-400 shrink-0 transition-transform ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 text-xs text-dark-600 border-t border-slate-100 pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
