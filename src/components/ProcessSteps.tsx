"use client";

import React from "react";

export default function ProcessSteps() {
  const steps = [
    { num: "01", title: "Share Case", desc: "Online / WhatsApp" },
    { num: "02", title: "File Structuring", desc: "Surrogate & Debt Map" },
    { num: "03", title: "Bank Matching", desc: "150+ Direct Lenders" },
    { num: "04", title: "Disbursal", desc: "Direct Account Transfer" },
  ];

  return (
    <section className="py-12 bg-white border-b border-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-extrabold text-dark-900 tracking-tight text-center mb-8">
          4-Step Approval Process
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-subtle p-4 rounded-xl border border-borderSubtle text-center"
            >
              <span className="text-xs font-black text-brand-accent block mb-1">
                STEP {step.num}
              </span>
              <h3 className="text-sm font-bold text-dark-900">
                {step.title}
              </h3>
              <p className="text-xs text-dark-500 mt-0.5">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
