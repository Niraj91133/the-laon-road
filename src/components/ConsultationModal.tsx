"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, ShieldCheck, Phone, Send, ArrowRight } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  initialCategory,
}: ModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    loanAmount: "₹5,00,000",
    caseType: "Incomplete / Missing Paperwork",
    employment: "Salaried",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      if (initialCategory.includes("Defense")) {
        setFormData((prev) => ({
          ...prev,
          caseType: "Indian Armed Forces / Defense Special Deal",
          employment: "Defense / Govt",
        }));
      } else if (initialCategory.includes("CIBIL")) {
        setFormData((prev) => ({
          ...prev,
          caseType: "Low CIBIL Score Improvement & Loan",
        }));
      } else if (initialCategory.includes("Running")) {
        setFormData((prev) => ({
          ...prev,
          caseType: "Multiple Running Loans / Debt Consolidation",
        }));
      } else if (initialCategory.includes("Insurance")) {
        setFormData((prev) => ({
          ...prev,
          caseType: "Complete Insurance (Health / Life / Loan Shield)",
        }));
      } else if (initialCategory.includes("EMI Estimation")) {
        setFormData((prev) => ({
          ...prev,
          notes: initialCategory,
        }));
      }
    }
  }, [initialCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `*New Case Evaluation Request*
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*City:* ${formData.city}
*Category:* ${formData.caseType}
*Employment:* ${formData.employment}
*Amount Needed:* ${formData.loanAmount}
*Notes:* ${formData.notes || "None"}`;

    return `https://wa.me/917261852298?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-borderSubtle relative animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-dark-500 hover:text-dark-900 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent px-2.5 py-0.5 rounded bg-blue-50 border border-blue-100">
                Direct File Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-dark-900 tracking-tight mt-1">
                Apna Loan Case Share Karein
              </h3>
              <p className="text-xs text-dark-600 mt-1">
                Free confidential review • 150+ Banks se matching • Zero advance fees
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-dark-800 mb-1">
                    Aapka Naam *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:border-brand-accent text-dark-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-800 mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:border-brand-accent text-dark-900"
                  />
                </div>
              </div>

              {/* City & Employment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-dark-800 mb-1">
                    City / State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur, Lucknow, Pune"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:border-brand-accent text-dark-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-800 mb-1">
                    Employment Type
                  </label>
                  <select
                    value={formData.employment}
                    onChange={(e) =>
                      setFormData({ ...formData, employment: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:border-brand-accent text-dark-900 bg-white"
                  >
                    <option value="Salaried (Bank Credit)">Salaried (Bank Credit)</option>
                    <option value="Salaried (Cash/Informal)">Salaried (Cash/Informal)</option>
                    <option value="Self Employed / Business">Self Employed / Business</option>
                    <option value="Defense / Armed Forces">Defense / Armed Forces (Special)</option>
                    <option value="Professional (CA/Doctor/Advocate)">Professional (CA/Doctor)</option>
                  </select>
                </div>
              </div>

              {/* Specific Case Category */}
              <div>
                <label className="block text-xs font-semibold text-dark-800 mb-1">
                  Aapki Main Problem / Case Category *
                </label>
                <select
                  value={formData.caseType}
                  onChange={(e) =>
                    setFormData({ ...formData, caseType: e.target.value })
                  }
                  className="w-full text-xs px-3 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:border-brand-accent text-dark-900 bg-white"
                >
                  <option value="Incomplete / Missing Paperwork">
                    1. Paperwork poora nahi hai (No ITR, Cash salary)
                  </option>
                  <option value="Multiple Running Loans / Debt Consolidation">
                    2. Pehle se 3-4 loans chal rahe hain (Consolidation + Top-up)
                  </option>
                  <option value="Low CIBIL Score Improvement & Loan">
                    3. CIBIL score kharab hai (Thik karana + Loan)
                  </option>
                  <option value="Indian Armed Forces / Defense Special Deal">
                    4. Indian Army / Defense Personnel (24h Express Deal)
                  </option>
                  <option value="Complete Insurance (Health / Life / Loan Shield)">
                    5. Insurance (Health, Life, Motor, Loan Protection)
                  </option>
                </select>
              </div>

              {/* Loan Amount */}
              <div>
                <label className="block text-xs font-semibold text-dark-800 mb-1">
                  Required Amount (Lagbhag Kitna Chahiye)
                </label>
                <select
                  value={formData.loanAmount}
                  onChange={(e) =>
                    setFormData({ ...formData, loanAmount: e.target.value })
                  }
                  className="w-full text-xs px-3 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:border-brand-accent text-dark-900 bg-white"
                >
                  <option value="₹1,00,000 to ₹3,00,000">₹1,00,000 - ₹3,00,000</option>
                  <option value="₹3,00,000 to ₹5,00,000">₹3,00,000 - ₹5,00,000</option>
                  <option value="₹5,00,000 to ₹10,00,000">₹5,00,000 - ₹10,00,000</option>
                  <option value="₹10,00,000 to ₹25,00,000">₹10,00,000 - ₹25,00,000</option>
                  <option value="₹25,00,000+">₹25,00,000+ (High Value / Secured)</option>
                </select>
              </div>

              {/* Optional Note */}
              <div>
                <label className="block text-xs font-semibold text-dark-800 mb-1">
                  Koi khas jankari (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Jaise: CIBIL 610 hai, ya purana loan settle kiya tha..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full text-xs px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:border-brand-accent text-dark-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-brand-accent hover:bg-brand-accentHover text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm transition-all flex items-center justify-center gap-2"
              >
                File Submit Karein
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-extrabold text-dark-900">
                Aapka Case Note Kar Liya Gaya Hai!
              </h4>
              <p className="text-xs text-dark-600 mt-1 max-w-sm mx-auto">
                Hamare senior credit specialist aapke case ko evaluate karke agle{" "}
                <strong>2-4 ghante me call/WhatsApp</strong> karenge.
              </p>
            </div>

            <div className="bg-subtle p-4 rounded-lg border border-borderSubtle text-left text-xs space-y-1.5 text-dark-700">
              <div>
                <strong>Name:</strong> {formData.fullName}
              </div>
              <div>
                <strong>Category:</strong> {formData.caseType}
              </div>
              <div>
                <strong>Amount:</strong> {formData.loanAmount}
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm transition-all flex items-center justify-center gap-2"
              >
                Instant WhatsApp Par Details Bhein
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 text-xs font-semibold text-dark-600 hover:text-dark-900"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
