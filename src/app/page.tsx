"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BankPartners from "@/components/BankPartners";
import ProblemSolutions from "@/components/ProblemSolutions";
import DefenseSpecial from "@/components/DefenseSpecial";
import InsuranceSection from "@/components/InsuranceSection";
import LoanEligibilityCalculator from "@/components/LoanEligibilityCalculator";
import ProcessSteps from "@/components/ProcessSteps";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { MessageSquare, Phone } from "lucide-react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<string>("General File Evaluation");

  const handleOpenConsultation = (category?: string) => {
    if (category) {
      setModalCategory(category);
    }
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-canvas text-dark-900 font-sans selection:bg-brand-accent selection:text-white">
      {/* Navbar with sticky layout */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Hero Section */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* 150+ Bank Network */}
      <BankPartners onOpenConsultation={handleOpenConsultation} />

      {/* Core Specialized Problem Solvers (Docs, Running Loans, CIBIL) */}
      <ProblemSolutions onOpenConsultation={handleOpenConsultation} />

      {/* Indian Army / Defense Dedicated VIP Desk */}
      <DefenseSpecial onOpenConsultation={handleOpenConsultation} />

      {/* Insurance Section */}
      <InsuranceSection onOpenConsultation={handleOpenConsultation} />

      {/* Interactive EMI & Eligibility Calculator */}
      <LoanEligibilityCalculator onOpenConsultation={handleOpenConsultation} />

      {/* 4-Step Process */}
      <ProcessSteps />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Floating Action Icons (WhatsApp & Direct Phone Call) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Call Floating Pill */}
        <a
          href="tel:+919204156914"
          className="group flex items-center gap-2.5 px-3.5 py-2.5 bg-dark-900 hover:bg-dark-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all border border-slate-700 hover:scale-105 active:scale-95"
          title="Call 9204156914"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Phone className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex flex-col text-left pr-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 leading-none">
              Call Now
            </span>
            <span className="text-xs font-extrabold tracking-tight text-white leading-tight">
              9204156914
            </span>
          </div>
        </a>

        {/* WhatsApp Floating Pill */}
        <a
          href="https://wa.me/917261852298?text=Hello%20Loan%20Road,%20I%20need%20urgent%20loan%20help."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all border border-emerald-500 hover:scale-105 active:scale-95"
          title="WhatsApp 7261852298"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col text-left pr-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-100 leading-none">
              WhatsApp
            </span>
            <span className="text-xs font-extrabold tracking-tight text-white leading-tight">
              7261852298
            </span>
          </div>
        </a>
      </div>

      {/* Consultation & Lead Capture Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCategory={modalCategory}
      />
    </main>
  );
}
