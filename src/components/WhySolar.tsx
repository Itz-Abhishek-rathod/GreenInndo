import React from 'react';
import { ArrowRight, Leaf, Zap, RefreshCw, Home, BookOpen, Sun, Globe2, ShieldCheck } from 'lucide-react';

interface WhySolarProps {
  onExploreProjects?: () => void;
}

export const WhySolar: React.FC<WhySolarProps> = ({ onExploreProjects }) => {
  const scrollToProjects = () => {
    if (onExploreProjects) {
      onExploreProjects();
    } else {
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Leaf,
      title: 'Lower Energy Bills in INR (₹)',
      description: 'Generate on-site clean solar energy and reduce monthly DISCOM power tariffs by up to 90%.',
    },
    {
      icon: Zap,
      title: 'Energy Independence',
      description: 'Overcome peak-load shedding with hybrid inverter and battery storage systems.',
    },
    {
      icon: RefreshCw,
      title: 'Eco Friendly & Net Zero',
      description: 'Cut carbon footprint and contribute to India’s national target of 500 GW non-fossil capacity.',
    },
    {
      icon: Home,
      title: 'Increase Property Value',
      description: 'Rooftop solar installations add substantial equity and lower operational costs for Indian homes.',
    },
  ];

  return (
    <section id="why-solar" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wikipedia Solar Power in India Brief Overview Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-3.5 max-w-3xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                <BookOpen className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#16A34A]">
                    Source: Wikipedia • Solar Power in India
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-semibold">
                    Global Standing
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mt-1">
                  According to Wikipedia, <strong>India is the 3rd largest producer of solar electricity in the world</strong> (behind only China and the United States). With approximately <strong>300 clear and sunny days each year</strong>, India’s land area receives roughly <strong>5 quadrillion kWh of solar energy annually</strong>—an amount that exceeds the country’s total fossil fuel energy reserves combined.
                </p>
              </div>
            </div>

            {/* Quick Stats from Wikipedia */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-shrink-0 text-center">
              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-xs">
                <div className="text-base font-extrabold text-[#16A34A] flex items-center justify-center gap-1">
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span>300+ Days</span>
                </div>
                <div className="text-[10px] font-medium text-slate-500 uppercase">Annual Sunshine</div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-xs">
                <div className="text-base font-extrabold text-slate-900 flex items-center justify-center gap-1">
                  <Globe2 className="w-4 h-4 text-blue-500" />
                  <span>#3 Global</span>
                </div>
                <div className="text-[10px] font-medium text-slate-500 uppercase">Solar Producer</div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-xs col-span-2 sm:col-span-1">
                <div className="text-base font-extrabold text-slate-900 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>300 GW</span>
                </div>
                <div className="text-[10px] font-medium text-slate-500 uppercase">2030 Target</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Copy, and CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-[#16A34A] tracking-wider uppercase">
                — / WHY SOLAR IN INDIA?
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] leading-[1.15] tracking-tight mb-5">
              A Cleaner India Starts with Rooftop Solar
            </h2>

            {/* Description Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Harness India’s tropical solar irradiance to safeguard against rising grid tariffs. 
              With the Government of India’s <strong>PM Surya Ghar Muft Bijli Yojana</strong> providing direct DBT subsidies up to ₹78,000, 
              installing rooftop solar delivers instant savings and guaranteed payback in just 3.5 to 4 years.
            </p>

            {/* Button */}
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-base font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all group"
            >
              <span>Explore India Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: 2x2 Feature Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-slate-200 transition-all group"
                  >
                    {/* Circular Icon Container */}
                    <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#16A34A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2 tracking-tight">
                      {feature.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
