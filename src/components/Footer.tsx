"use client";

import React from "react";
import { Shield, Phone, MessageSquare } from "lucide-react";

export default function Footer({
  onOpenConsultation,
}: {
  onOpenConsultation: (cat?: string) => void;
}) {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-dark-900 flex items-center justify-center font-bold text-lg shadow-sm">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19L12 4L20 19" />
                  <line x1="12" y1="11" x2="12" y2="15" />
                  <line x1="12" y1="18" x2="12" y2="19" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block leading-none">
                  LOAN <span className="text-brand-accent">ROAD</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mt-1">
                  Direct Lending Desk
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Specialized financial underwriting connecting challenging borrower profiles
              (imperfect paperwork, multiple loans, low CIBIL, defense VIP clearance)
              directly with 150+ Banks & NBFCs.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-amber-400">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Dedicated Armed Forces & Police Priority Desk</span>
            </div>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Specialized Cases
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onOpenConsultation("Imperfect Documentation")}
                  className="hover:text-white transition-colors text-left"
                >
                  Incomplete Documents / No-ITR Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation("Multiple Running Loans")}
                  className="hover:text-white transition-colors text-left"
                >
                  Debt Consolidation & Top-Up
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation("CIBIL Repair & Loan")}
                  className="hover:text-white transition-colors text-left"
                >
                  Low CIBIL Dispute Rectification
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation("Defense Priority Desk")}
                  className="text-amber-400 font-semibold hover:text-amber-300 transition-colors text-left"
                >
                  Army / Defense 24h Express Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation("Insurance Solutions")}
                  className="hover:text-white transition-colors text-left"
                >
                  Complete Insurance & Loan Protection
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Bank Network */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Lenders
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>HDFC Bank Desk</li>
              <li>SBI & PSU Schemes</li>
              <li>ICICI Bank Direct</li>
              <li>Bajaj Finserv Direct</li>
              <li>Tata Capital</li>
              <li>Piramal & L&T</li>
              <li>140+ NBFC Network</li>
            </ul>
          </div>

          {/* Contact Details - No physical address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href="tel:+919204156914"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <span className="font-semibold">Call: 9204156914</span>
              </a>
              <a
                href="https://wa.me/917261852298"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">WhatsApp: 7261852298</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/917261852298?text=Hello%20Loan%20Road,%20I%20need%20urgent%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-semibold shadow-xs transition-all"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="pt-8 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong>Statutory Disclaimer:</strong> Loan Road operates as an authorized direct distribution and marketing partner for RBI-regulated Banks and NBFCs. We are not a direct lender, Bank, or NBFC. All loan approvals, credit underwriting decisions, interest rates, and loan disbursals are solely at the discretion of the respective RBI-registered lending institutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-slate-800 text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} Loan Road Advisory. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">
              Direct Lending & Credit Desk Across 150+ Banks
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
