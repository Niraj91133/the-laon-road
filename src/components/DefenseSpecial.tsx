"use client";

import React from "react";
import { Award, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import { DefenseInsigniaIllustration } from "./Illustrations";

interface DefenseProps {
  onOpenConsultation: (category: string) => void;
}

export default function DefenseSpecial({ onOpenConsultation }: DefenseProps) {
  const highlights = [
    "24-48h Express Sanction",
    "Starting 9.99% Lowest ROI",
    "Service ID & Pay Slip Only",
    "100% Digital / Border Posting Friendly",
  ];

  return (
    <section id="defense-desk" className="py-14 bg-white border-b border-borderSubtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-4">
              <DefenseInsigniaIllustration />
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded border border-amber-500/30 inline-block">
                  Priority Clearance Desk
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Indian Army & Defense: <span className="text-amber-400">24h Express Sanction</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-300">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 w-full md:w-auto">
              <button
                onClick={() => onOpenConsultation("Defense Priority Desk")}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-dark-900 font-extrabold text-xs uppercase tracking-wider rounded transition-colors text-center"
              >
                Apply Defense Desk
              </button>
              <a
                href="https://wa.me/917261852298?text=Jai%20Hind.%20I%20am%20from%20Armed%20Forces%20and%20need%20express%20loan%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                Jai Hind WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
