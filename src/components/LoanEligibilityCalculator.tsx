"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";

interface CalcProps {
  onOpenConsultation: (details: string) => void;
}

export default function LoanEligibilityCalculator({ onOpenConsultation }: CalcProps) {
  const [amount, setAmount] = useState<number>(500000);
  const [tenureYears, setTenureYears] = useState<number>(3);
  const [rate, setRate] = useState<number>(10.5);

  // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const calculateEMI = () => {
    const p = amount;
    const r = rate / 12 / 100;
    const n = tenureYears * 12;
    if (r === 0) return Math.round(p / n);
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalMonths = tenureYears * 12;
  const totalPayment = monthlyEMI * totalMonths;
  const totalInterest = Math.max(0, totalPayment - amount);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-16 bg-white border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent px-2.5 py-0.5 bg-blue-50 rounded border border-blue-100">
            Smart Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-900 tracking-tight">
            Instant Loan EMI & Eligibility Estimator
          </h2>
          <p className="text-sm text-dark-600">
            Monthly installment calculate karein aur direct eligibility check karein.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-subtle border border-borderSubtle rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Loan Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-dark-800">Loan Amount:</span>
                  <span className="text-base font-extrabold text-dark-900 px-3 py-1 bg-white rounded border border-borderSubtle">
                    {formatINR(amount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="25000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
                <div className="flex justify-between text-[11px] text-dark-500">
                  <span>₹50,000</span>
                  <span>₹25 Lakh</span>
                  <span>₹50 Lakh</span>
                </div>
              </div>

              {/* Slider 2: Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-dark-800">Tenure (Samay):</span>
                  <span className="text-base font-extrabold text-dark-900 px-3 py-1 bg-white rounded border border-borderSubtle">
                    {tenureYears} Saal ({totalMonths} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
                <div className="flex justify-between text-[11px] text-dark-500">
                  <span>1 Saal</span>
                  <span>3 Saal</span>
                  <span>5 Saal</span>
                  <span>7 Saal</span>
                </div>
              </div>

              {/* Slider 3: Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-dark-800">Interest Rate (% p.a):</span>
                  <span className="text-base font-extrabold text-dark-900 px-3 py-1 bg-white rounded border border-borderSubtle">
                    {rate}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min="8.5"
                  max="20"
                  step="0.25"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
                <div className="flex justify-between text-[11px] text-dark-500">
                  <span>8.5% (PSU/Defense)</span>
                  <span>11.5% (Average)</span>
                  <span>20% (NBFC Flexible)</span>
                </div>
              </div>
            </div>

            {/* Results Right Column */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-borderSubtle space-y-5">
              <div className="text-center pb-4 border-b border-borderSubtle">
                <span className="text-xs uppercase font-bold text-dark-500 tracking-wider">
                  Monthly EMI Payable
                </span>
                <div className="text-3xl font-extrabold text-dark-900 mt-1">
                  {formatINR(monthlyEMI)}
                </div>
                <span className="text-[11px] text-emerald-600 font-semibold block mt-1">
                  Affordable & Easy Installment
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-dark-500">Principal Amount:</span>
                  <span className="font-bold text-dark-900">{formatINR(amount)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-dark-500">Total Interest Payable:</span>
                  <span className="font-bold text-dark-900">{formatINR(totalInterest)}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-dark-500 font-semibold">Total Amount (P + I):</span>
                  <span className="font-extrabold text-dark-900">{formatINR(totalPayment)}</span>
                </div>
              </div>

              <button
                onClick={() =>
                  onOpenConsultation(
                    `EMI Estimation: ${formatINR(amount)} for ${tenureYears} yrs @ ${rate}%`
                  )
                }
                className="w-full py-3.5 bg-brand-accent hover:bg-brand-accentHover text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-sm transition-all flex items-center justify-center gap-2"
              >
                Apply For This Amount
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
