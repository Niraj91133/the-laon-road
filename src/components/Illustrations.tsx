"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, TrendingUp, Zap, Building2, CreditCard } from "lucide-react";

// 1. Hero Vector Graphic: Ultra-Modern Fintech Sanction Card
export function HeroRoadIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-emerald-500/10 rounded-3xl blur-xl" />

      {/* Main Glassmorphic Sanction Card */}
      <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-xl space-y-5 text-left">
        {/* Top Card Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-dark-900 flex items-center justify-center text-white font-bold text-xs">
              LR
            </div>
            <div>
              <span className="text-xs font-bold text-dark-900 block leading-tight">
                LOAN ROAD DIRECT DESK
              </span>
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Sanction Approved & Active
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            24h EXPRESS
          </span>
        </div>

        {/* Central Metric */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
            Approved Loan Amount
          </span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-black text-dark-900 tracking-tight">
              ₹15,00,000
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
              @ 9.99% p.a.
            </span>
          </div>
        </div>

        {/* Visual 3-Step Approval Pathway */}
        <div className="space-y-2">
          <div className="flex justify-between text-[11px] font-bold text-slate-400">
            <span>1. Profile Structuring</span>
            <span>2. Underwriting</span>
            <span className="text-emerald-600">3. Disbursed</span>
          </div>
          {/* Progress track */}
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex">
            <div className="w-1/3 bg-brand-accent h-full" />
            <div className="w-1/3 bg-indigo-500 h-full" />
            <div className="w-1/3 bg-emerald-500 h-full" />
          </div>
        </div>

        {/* 2 Live Status Badges */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {/* Badge 1: CIBIL Score Meter */}
          <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200/60 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-800 uppercase block leading-tight">
                CIBIL Score
              </span>
              <span className="text-xs font-black text-emerald-950">
                785 • Prime Tier
              </span>
            </div>
          </div>

          {/* Badge 2: Bank Direct Tie-Up */}
          <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200/60 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-brand-accent text-white flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-blue-800 uppercase block leading-tight">
                Lender Network
              </span>
              <span className="text-xs font-black text-blue-950">
                150+ Direct Banks
              </span>
            </div>
          </div>
        </div>

        {/* Micro Guarantee Note */}
        <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 font-medium border-t border-slate-100">
          <span className="flex items-center gap-1 text-slate-700 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            No Standard ITR Required
          </span>
          <span className="text-slate-400">Zero Advance Fees</span>
        </div>
      </div>
    </div>
  );
}

// 2. Vector Illustration for Case 01: Incomplete Docs / Surrogate Model
export function ImperfectDocsIllustration() {
  return (
    <div className="w-full bg-white rounded-lg p-3 border border-slate-200 space-y-2 mb-3">
      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-500 font-medium">Income Model:</span>
        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
          ✓ Banking Surrogate
        </span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
        <div className="bg-emerald-500 h-full w-[92%]" />
      </div>
      <div className="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
        <span>Without 3-Year ITR</span>
        <span className="font-bold text-dark-900">Passed Underwriting</span>
      </div>
    </div>
  );
}

// 3. Vector Illustration for Case 02: Debt Consolidation
export function DebtConsolidationIllustration() {
  return (
    <div className="w-full bg-white rounded-lg p-3 border border-slate-200 space-y-2 mb-3">
      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-400 line-through">Old: 3 EMIs ₹42,000</span>
        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
          New: 1 EMI ₹27,500
        </span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden flex">
        <div className="bg-brand-accent h-full w-full" />
      </div>
      <div className="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
        <span className="font-bold text-emerald-600">Save 35% Monthly</span>
        <span className="font-bold text-dark-900">+ Top-Up Disbursed</span>
      </div>
    </div>
  );
}

// 4. Vector Illustration for Case 03: CIBIL Score Gauge
export function CibilGaugeIllustration() {
  return (
    <div className="w-full bg-white rounded-lg p-3 border border-slate-200 space-y-2 mb-3">
      <div className="flex items-center justify-between text-xs">
        <span className="text-red-500 font-semibold">Was: 590 (Default)</span>
        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
          Now: 760+ Approved
        </span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden flex">
        <div className="bg-red-400 h-full w-1/4" />
        <div className="bg-amber-400 h-full w-1/4" />
        <div className="bg-emerald-500 h-full w-2/4" />
      </div>
      <div className="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
        <span>Bureau Error Rectified</span>
        <span className="font-bold text-dark-900">NOC Issued</span>
      </div>
    </div>
  );
}

// 5. Vector Illustration for Defense VIP Insignia
export function DefenseInsigniaIllustration() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 shadow-sm">
      <ShieldCheck className="w-9 h-9 text-amber-400" />
    </div>
  );
}
