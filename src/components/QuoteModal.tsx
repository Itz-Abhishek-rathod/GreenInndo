import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Zap, IndianRupee, Leaf, Award } from 'lucide-react';
import { submitProposalRequest } from '../lib/supabase';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'Residential',
}) => {
  const [propertyType, setPropertyType] = useState(defaultType);
  const [monthlyBill, setMonthlyBill] = useState(4500);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  // Real-time Solar Estimation calculations in INR (₹)
  const estimatedSystemKw = Math.max(1.5, Math.round((monthlyBill / 900) * 10) / 10);
  const estimatedAnnualSavings = Math.round(monthlyBill * 12 * 0.90);
  const estimated25YearSavings = Math.round(estimatedAnnualSavings * 25 * 1.15);
  const estimatedTreesPlanted = Math.round(estimatedSystemKw * 28);
  const pmSuryaGharSubsidy = estimatedSystemKw >= 3 ? '₹78,000' : estimatedSystemKw >= 2 ? '₹60,000' : '₹30,000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await submitProposalRequest({
        property_type: propertyType,
        monthly_bill: monthlyBill,
        name,
        email,
        phone,
        city,
        pincode,
        estimated_system_kw: estimatedSystemKw,
        estimated_annual_savings: estimatedAnnualSavings,
        estimated_25yr_savings: estimated25YearSavings,
        estimated_subsidy: pmSuryaGharSubsidy,
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Sorry, something went wrong submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#16A34A] flex items-center justify-center mb-5">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Solar Proposal Generated!
            </h3>
            <p className="text-slate-600 max-w-md mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{name || 'valued customer'}</span>. A GreenIndo energy engineer for <span className="font-medium text-slate-900">{city ? `${city} (PIN ${pincode})` : 'your location'}</span> will review your DISCOM net-metering eligibility and email your detailed engineering proposal within 24 hours.
            </p>

            <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-8 text-left grid grid-cols-3 gap-3">
              <div>
                <span className="text-[11px] font-medium text-slate-400 uppercase">Estimated Size</span>
                <p className="text-lg font-bold text-slate-800">{estimatedSystemKw} kW</p>
              </div>
              <div>
                <span className="text-[11px] font-medium text-slate-400 uppercase">Year 1 Savings</span>
                <p className="text-lg font-bold text-[#16A34A]">₹{estimatedAnnualSavings.toLocaleString('en-IN')}</p>
              </div>
              <div>
                <span className="text-[11px] font-medium text-slate-400 uppercase">25-Yr Savings</span>
                <p className="text-lg font-bold text-slate-800">₹{estimated25YearSavings.toLocaleString('en-IN')}</p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold rounded-full shadow-md transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header banner */}
            <div className="bg-gradient-to-r from-[#031d38] to-[#0d3b66] px-8 py-6 text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold tracking-widest text-[#4ade80] uppercase">
                  India Solar Calculator (INR)
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  PM Surya Ghar Eligible
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Get Your Free Solar Proposal in India
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Calculate rooftop solar system size, PM Surya Ghar subsidy, and lifetime savings in Indian Rupees (₹).
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              {/* Property Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Property Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Residential', 'Commercial', 'Off-Grid'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setPropertyType(type)}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                        propertyType === type
                          ? 'bg-emerald-50 border-[#16A34A] text-[#16A34A]'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Electric Bill Slider in INR */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    2. Monthly Electricity Bill (INR)
                  </span>
                  <span className="text-lg font-extrabold text-[#16A34A]">
                    ₹{monthlyBill.toLocaleString('en-IN')} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="60000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full accent-[#16A34A] cursor-pointer"
                />

                {/* Instant Metric Highlights in INR */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-200/60 text-center">
                  <div className="flex flex-col items-center">
                    <Zap className="w-4 h-4 text-amber-500 mb-0.5" />
                    <span className="text-[11px] text-slate-500">Rec. Capacity</span>
                    <span className="text-sm font-bold text-slate-800">{estimatedSystemKw} kW</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <IndianRupee className="w-4 h-4 text-[#16A34A] mb-0.5" />
                    <span className="text-[11px] text-slate-500">Est. 25-Yr Savings</span>
                    <span className="text-sm font-bold text-[#16A34A]">₹{estimated25YearSavings.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Leaf className="w-4 h-4 text-emerald-600 mb-0.5" />
                    <span className="text-[11px] text-slate-500">CO2 Offset</span>
                    <span className="text-sm font-bold text-slate-800">{estimatedTreesPlanted} trees/yr</span>
                  </div>
                </div>

                {/* PM Surya Ghar Subsidy Callout */}
                <div className="mt-3 bg-white p-2.5 rounded-xl border border-emerald-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                    <Award className="w-4 h-4 text-[#16A34A]" />
                    <span>Est. PM Surya Ghar Govt Subsidy:</span>
                  </div>
                  <span className="font-extrabold text-[#16A34A]">{pmSuryaGharSubsidy} Direct DBT</span>
                </div>
              </div>

              {/* Contact Information Fields */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Indian Property & Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile (+91 98765 43210)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="City / State"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
                    />
                    <input
                      type="text"
                      required
                      placeholder="6-digit PIN"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                {error && <p className="text-sm text-red-600 text-center mb-2">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Request Free Proposal with PM Subsidy'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Zero obligation. Official DISCOM net-metering feasibility report included.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
