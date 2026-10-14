import React from 'react';
import { ArrowRight, Award, Sun, Building2, Smile } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onLearnMore?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onLearnMore }) => {
  const scrollToWhySolar = () => {
    if (onLearnMore) {
      onLearnMore();
    } else {
      document.querySelector('#why-solar')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Hero Container with Background Landscape & Solar Panels */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] w-full flex flex-col justify-between">
        
        {/* Background Image: Scenic solar farm with mountains, lake, and morning sun flare */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2160&q=85')`,
          }}
        >
          {/* Gradients to recreate the exact lighting and contrast from screenshot */}
          {/* Deep blue/navy top-left gradient to make the white & green text pop */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#031d38]/95 via-[#06284d]/75 to-transparent" />
          {/* Subtle bottom dark gradient for the stats bar readability */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Giant Watermark Typography "Solar" on the upper-right */}
        <div className="absolute top-12 right-6 md:right-16 lg:right-24 pointer-events-none select-none z-10">
          <span className="text-7xl sm:text-9xl md:text-[160px] lg:text-[210px] font-black text-white/35 tracking-tight drop-shadow-sm font-sans leading-none block">
            Solar
          </span>
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Tagline / Subtitle with Wikipedia Context */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#93c5fd] uppercase">
                CLEAN ENERGY IN INDIA / 300+ SUNNY DAYS ANNUALLY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Powering a{' '}
              <span className="text-[#4ade80] drop-shadow-[0_2px_12px_rgba(74,222,128,0.35)]">
                Greener Tomorrow
              </span>
            </h1>

            {/* Description incorporating Wikipedia facts */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl mb-9">
              Delivering dependable, affordable solar energy for Indian homes, businesses, and rural farms. 
              Harnessing over 5 quadrillion kWh of annual solar potential to accelerate India’s 300 GW clean energy revolution.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white text-base font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-emerald-900/30 hover:shadow-xl transition-all group"
              >
                <span>Get a Free Quote in INR</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToWhySolar}
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-base font-medium px-7 py-3.5 rounded-full border border-white/40 backdrop-blur-sm transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Hero Stats Bar (Recreating the exact 4-metric strip from screenshot with Wikipedia Indian data) */}
        <div className="relative z-20 w-full border-t border-white/15 bg-black/35 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {/* Stat 1 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/90 flex-shrink-0 bg-white/5">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none">
                    #3 Global
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-1">
                    Solar Producer (Wikipedia)
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/90 flex-shrink-0 bg-white/5">
                  <Sun className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none">
                    300+ Days
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-1">
                    Yearly Sun Irradiance
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/90 flex-shrink-0 bg-white/5">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none">
                    1.2K+
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-1">
                    Projects Across India
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/90 flex-shrink-0 bg-white/5">
                  <Smile className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none">
                    98%
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-1">
                    Customer Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
