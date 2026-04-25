"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers";
import { Check, X } from "lucide-react";

export default function PricingPage() {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);

  const PLANS = [
    {
      id: "free",
      name: t("pricing.plan.free.name"),
      priceMonthly: "$0",
      priceAnnual: "$0",
      periodMonthly: "/ month",
      periodAnnual: "/ month",
      description: t("pricing.plan.free.desc"),
      features: [
        t("pricing.plan.free.f1"),
        t("pricing.plan.free.f2"),
        t("pricing.plan.free.f3"),
        t("pricing.plan.free.f4"),
      ],
      cta: t("pricing.plan.free.cta"),
      ctaStyle: "bg-transparent border border-white/10 text-white hover:bg-white/5 rounded-lg",
      highlight: false,
    },
    {
      id: "pro",
      name: t("pricing.plan.pro.name"),
      priceMonthly: "$19",
      priceAnnual: "$15",
      periodMonthly: "/ month",
      periodAnnual: "/ month",
      description: t("pricing.plan.pro.desc"),
      features: [
        t("pricing.plan.pro.f1"),
        t("pricing.plan.pro.f2"),
        t("pricing.plan.pro.f3"),
        t("pricing.plan.pro.f4"),
        t("pricing.plan.pro.f5"),
        t("pricing.plan.pro.f6"),
      ],
      cta: t("pricing.plan.pro.cta"),
      ctaStyle: "bg-white text-black hover:bg-gray-200 rounded-lg",
      highlight: true,
    },
    {
      id: "enterprise",
      name: t("pricing.plan.ent.name"),
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      periodMonthly: "",
      periodAnnual: "",
      description: t("pricing.plan.ent.desc"),
      features: [
        t("pricing.plan.ent.f1"),
        t("pricing.plan.ent.f2"),
        t("pricing.plan.ent.f3"),
        t("pricing.plan.ent.f4"),
        t("pricing.plan.ent.f5"),
        t("pricing.plan.ent.f6"),
      ],
      cta: t("pricing.plan.ent.cta"),
      ctaStyle: "bg-transparent border border-white/10 text-white hover:bg-white/5 rounded-lg",
      highlight: false,
    },
  ];

  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"va" | "card" | "qris">("va");

  return (
    <>
      <Header />
      <main className="pt-32 lg:pt-40 pb-24 bg-black min-h-screen relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-4">
              {t("pricing.title")}
            </h1>
            <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
              {t("pricing.desc")}
            </p>

            {/* Billing Toggle (Mechanical Style) */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={() => setIsAnnual(false)}
                className={cn("text-xs font-bold uppercase tracking-widest transition-colors", !isAnnual ? "text-white" : "text-gray-500 hover:text-gray-400")}
              >
                {t("pricing.billing.monthly")}
              </button>
              <div 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-12 h-6 rounded-lg bg-surface-2 border border-white/10 p-1 relative cursor-pointer group shrink-0"
              >
                <div className={cn(
                  "absolute top-1 bottom-1 w-4 bg-white/40 rounded-md transition-all group-hover:bg-white/60",
                  isAnnual ? "left-7" : "left-1"
                )} />
              </div>
              <button 
                onClick={() => setIsAnnual(true)}
                className={cn("text-xs font-bold uppercase tracking-widest transition-colors", isAnnual ? "text-white" : "text-gray-500 hover:text-gray-400")}
              >
                {t("pricing.billing.yearly")}
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "rounded-2xl p-8 flex flex-col relative transition-all duration-300",
                  plan.highlight
                    ? "bg-[#0a0a0a] border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.03)] z-10"
                    : "bg-[#0a0a0a] border border-white/5 hover:border-white/10"
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#1A1A1A] border border-white/20 rounded-md text-[10px] font-mono tracking-widest text-white uppercase shadow-lg">
                    {t("pricing.most_popular")}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-3">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-white">
                      {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    {(isAnnual ? plan.periodAnnual : plan.periodMonthly) && (
                      <span className="text-xs font-mono text-gray-500 uppercase">
                        {isAnnual ? plan.periodAnnual.replace("/", "").trim() : plan.periodMonthly.replace("/", "").trim()}
                      </span>
                    )}
                  </div>
                  {isAnnual && plan.id !== "enterprise" && plan.id !== "free" && (
                    <p className="text-[10px] text-gray-500 mt-1 font-mono uppercase tracking-tight">
                      {t("pricing.billing.annual_discount")}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed h-10">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-2 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5"
                    >
                      <Check className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-[13px] leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (plan.id === "pro") {
                      setShowPayment(true);
                    }
                  }}
                  className={cn(
                    "w-full text-center py-2.5 font-bold text-xs transition-all duration-200 uppercase tracking-widest",
                    plan.ctaStyle
                  )}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Modal */}
        {showPayment && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowPayment(false)}
            />
            <div className="relative bg-surface-1 border border-white/10 rounded-lg w-full max-w-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
              
              {/* Left Column: Order Summary */}
              <div className="bg-surface-2 p-8 md:p-10 md:w-[280px] border-b md:border-b-0 md:border-r border-white/5">
                <h3 className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-6">
                  {t("pricing.modal.summary")}
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold text-white mb-1">VICO Pro</p>
                    <p className="text-xs text-gray-500">
                      {isAnnual ? "Yearly Subscription" : t("pricing.modal.monthly")}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex justify-between items-end">
                    <p className="text-xs text-gray-500">{t("pricing.modal.total")}</p>
                    <p className="text-3xl font-extrabold text-white">
                      {isAnnual ? "$180.00" : "$19.00"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Payment Details */}
              <div className="p-8 md:p-10 flex-1 relative">
                <button 
                  onClick={() => setShowPayment(false)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-bold text-white mb-8">{t("pricing.modal.method")}</h3>
                
                {/* Tabs */}
                <div className="flex gap-4 border-b border-white/5 mb-8">
                  {["va", "card", "qris"].map((m) => (
                    <button
                      key={m}
                      onClick={() => setPaymentMethod(m as any)}
                      className={cn(
                        "pb-3 text-xs font-bold uppercase tracking-widest transition-all",
                        paymentMethod === m
                          ? "text-white border-b-2 border-white"
                          : "text-gray-500 hover:text-gray-300"
                      )}
                    >
                      {t(`pricing.modal.${m}` as never)}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="min-h-[200px]">
                  {paymentMethod === "va" && (
                    <div className="grid grid-cols-2 gap-3">
                      {["BCA", "Mandiri", "BNI", "BRI"].map(bank => (
                        <div key={bank} className="border border-white/5 rounded-lg p-4 cursor-pointer hover:border-white/20 bg-surface-2 transition-colors flex items-center justify-between group">
                          <span className="font-bold text-white text-sm">{bank}</span>
                          <div className="w-4 h-4 rounded-md border border-white/10 group-hover:border-white/30" />
                        </div>
                      ))}
                    </div>
                  )}

                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                          {t("pricing.modal.card_num")}
                        </label>
                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/30 text-white transition-all" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                            {t("pricing.modal.expiry")}
                          </label>
                          <input type="text" placeholder="MM/YY" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/30 text-white transition-all" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                            {t("pricing.modal.cvc")}
                          </label>
                          <input type="text" placeholder="123" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/30 text-white transition-all" />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "qris" && (
                    <div className="flex flex-col items-center justify-center py-4">
                      <div className="w-40 h-40 bg-black rounded-lg border border-white/10 flex items-center justify-center mb-4">
                        <span className="text-[10px] font-mono text-gray-600 tracking-widest">SCAN_QR</span>
                      </div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                        {t("pricing.modal.scan")}
                      </p>
                    </div>
                  )}
                </div>

                <button className="w-full mt-8 bg-white text-black py-4 rounded-lg font-bold text-sm hover:bg-gray-200 transition-all uppercase tracking-widest">
                  {t("pricing.modal.pay")}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
