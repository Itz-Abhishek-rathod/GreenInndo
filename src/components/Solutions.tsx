import React from 'react';
import { Home, Building2, BatteryCharging, Wrench, Leaf, BookOpen, MapPin } from 'lucide-react';

interface SolutionsProps {
  onSelectSolution?: (title: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution }) => {
  const solutions = [
    {
      icon: Home,
      title: 'Residential Rooftop',
      subtitle: 'PM Surya Ghar scheme with zero electric bills.',
    },
    {
      icon: Building2,
      title: 'Commercial & Industrial',
      subtitle: 'High-yield solar for factories & offices in INR.',
    },
    {
      icon: BatteryCharging,
      title: 'Solar Battery Storage',
      subtitle: 'Lithium backup for uninterrupted power.',
    },
    {
      icon: Wrench,
      title: 'Operations & AMC',
      subtitle: 'Panel cleaning, inverter telemetry & repairs.',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle, and 4 Solution Items */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-[#16A34A] tracking-wider uppercase">
                — / SOLAR SOLUTIONS ACROSS INDIA
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
              Solar Solutions for Every Need
            </h2>

            {/* Subtitle with Wikipedia Context */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Whether you're an urban homeowner in Bengaluru, an industrial manufacturer in Gujarat, or an agricultural enterprise in Rajasthan, we provide tailored solar systems engineered for Indian climatic conditions.
            </p>

            {/* 4 Items arranged in a clean responsive grid matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {solutions.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => onSelectSolution?.(item.title)}
                    className="flex flex-col items-start p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
                  >
                    {/* Icon in light green rounded square container */}
                    <div className="w-10 h-10 rounded-lg bg-[#ECFDF5] text-[#16A34A] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-[#0F172A] mb-1 tracking-tight group-hover:text-[#16A34A] transition-colors">
                      {item.title}
                    </h3>

                    {/* Subtext */}
                    <p className="text-xs text-slate-500 leading-normal">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Wikipedia Notable Solar Parks in India Callout */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <strong>Wikipedia Landmark Facts:</strong> India hosts some of the planet's largest solar installations, including <strong>Bhadla Solar Park</strong> in Rajasthan (2,245 MW capacity) and <strong>Pavagada Solar Park</strong> in Karnataka (2,050 MW), with the upcoming <strong>Khavda Renewable Energy Park</strong> in Gujarat spanning 72,600 hectares.
              </div>
            </div>
          </div>

          {/* Right Column: Circular Green India Map with Leaf Badge & Location Tag */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative">
              {/* Main Circular Mask with Green India Solar Map */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white relative bg-white flex items-center justify-center p-6">
                <img
                  src="/india-green-map.svg"
                  alt="India Clean Energy Map in Green Circles"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-center transform hover:scale-105 transition-transform duration-700 select-none"
                />
                {/* Soft ambient green bloom */}
                <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Circular Green Leaf Badge in bottom-right corner as shown in screenshot */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 rounded-full bg-[#16A34A] text-white flex items-center justify-center shadow-lg border-4 border-white hover:scale-110 transition-transform">
                <Leaf className="w-6 h-6 stroke-[2.5]" />
              </div>
            </div>

            {/* Caption beneath circular image */}
            <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Pan-India Solar Coverage • 300 Sunny Days/Year</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
