import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin, Home, Building2, SunMedium, Sparkles } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  state: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  specs: {
    systemSize: string;
    annualSavings: string;
    panelsCount: number;
    co2Offset: string;
    subsidyEligible: string;
  };
}

interface OurProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const OurProjects: React.FC<OurProjectsProps> = ({ onSelectProject }) => {
  const allProjects: ProjectItem[] = [
    {
      id: 'residential-1',
      title: 'Residential Rooftop Solar',
      category: 'Residential',
      location: 'Bengaluru, Karnataka, India',
      state: 'Karnataka',
      description:
        'A modern Bengaluru independent home equipped with high-efficiency bifacial monocrystalline panels, delivering clean energy and grid independence.',
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      icon: Home,
      specs: {
        systemSize: '8.4 kW DC',
        annualSavings: '₹1,85,000 / yr',
        panelsCount: 22,
        co2Offset: '8.4 tonnes / yr',
        subsidyEligible: '₹78,000 PM Surya Ghar',
      },
    },
    {
      id: 'commercial-1',
      title: 'Commercial Industrial Solar',
      category: 'Commercial',
      location: 'Ahmedabad, Gujarat, India',
      state: 'Gujarat',
      description:
        'Helping industrial manufacturing units in Sanand industrial belt slash operating electricity tariffs with custom net-metered rooftop solar arrays.',
      image:
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      icon: Building2,
      specs: {
        systemSize: '145 kW DC',
        annualSavings: '₹28,50,000 / yr',
        panelsCount: 380,
        co2Offset: '115 tonnes / yr',
        subsidyEligible: '40% Accelerated Deprec.',
      },
    },
    {
      id: 'off-grid-1',
      title: 'Off-Grid Agri Solar Project',
      category: 'Off-Grid',
      location: 'Jodhpur, Rajasthan, India',
      state: 'Rajasthan',
      description:
        'High-capacity solar microgrid with lithium battery backup powering remote farm tube-wells and agro-processing in rural Western Rajasthan.',
      image:
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
      icon: SunMedium,
      specs: {
        systemSize: '18.2 kW + 30kWh Storage',
        annualSavings: '₹4,20,000 / yr',
        panelsCount: 48,
        co2Offset: '19.8 tonnes / yr',
        subsidyEligible: 'PM KUSUM Scheme',
      },
    },
    {
      id: 'residential-2',
      title: 'Suburban Villa Installation',
      category: 'Residential',
      location: 'Pune, Maharashtra, India',
      state: 'Maharashtra',
      description:
        'Premium rooftop installation in Baner with hybrid smart inverter and integrated lithium battery storage ensuring zero power cuts.',
      image:
        'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
      icon: Home,
      specs: {
        systemSize: '12.6 kW DC',
        annualSavings: '₹2,65,000 / yr',
        panelsCount: 32,
        co2Offset: '12.2 tonnes / yr',
        subsidyEligible: 'MSEDCL Net Metering',
      },
    },
    {
      id: 'commercial-2',
      title: 'Agri-PV Farm Installation',
      category: 'Commercial',
      location: 'Coimbatore, Tamil Nadu, India',
      state: 'Tamil Nadu',
      description:
        'Dual-use elevated solar arrays delivering green electricity to cold-storage hubs while safeguarding organic plantation crops underneath.',
      image:
        'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
      icon: SunMedium,
      specs: {
        systemSize: '420 kW DC',
        annualSavings: '₹76,00,000 / yr',
        panelsCount: 1100,
        co2Offset: '390 tonnes / yr',
        subsidyEligible: 'TANGEDCO Grid Tie',
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (allProjects.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (allProjects.length - 2)) % (allProjects.length - 2));
  };

  // Get current 3 visible projects
  const visibleProjects = allProjects.slice(currentIndex, currentIndex + 3);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#EFF6FA] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* National Solar Mission & India Highlight Strip */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-900 via-[#032342] to-slate-900 text-white shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#4ADE80] flex-shrink-0">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider uppercase text-[#4ADE80]">
                  India Solar Revolution
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                  MNRE & DISCOM Approved
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                Compliant with <strong>PM Surya Ghar: Muft Bijli Yojana</strong> subsidies up to ₹78,000 for Indian homes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span>Pan-India Net-Metering</span>
            </div>
            <div className="font-semibold text-white">
              Avg. ROI: <span className="text-[#4ADE80]">3.5 - 4 Years</span>
            </div>
          </div>
        </div>

        {/* Top Header with Title and Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-[#16A34A] tracking-wider uppercase">
                — / OUR PROJECTS IN INDIA
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
              Real Projects. Real Impact.
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Explore our latest solar installations across Karnataka, Gujarat, Rajasthan, and Maharashtra, helping Indian families and businesses slash power bills in INR (₹).
            </p>
          </div>

          {/* Carousel Arrow Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="w-11 h-11 rounded-full bg-white border border-slate-200/80 hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="w-11 h-11 rounded-full bg-white border border-slate-200/80 hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group cursor-pointer"
              >
                {/* Project Image & Floating Badge */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Floating Circular Icon Badge matching screenshot */}
                  <div className="absolute left-6 -bottom-5 w-11 h-11 rounded-full bg-[#16A34A] text-white flex items-center justify-center border-2 border-white shadow-md z-10">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* INR Savings Badge Top Right */}
                  <div className="absolute top-4 right-4 bg-[#0F172A]/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20 flex items-center gap-1 shadow-sm">
                    <span className="text-[#4ADE80]">Saves {project.specs.annualSavings}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-9 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#0F172A] tracking-tight group-hover:text-[#16A34A] transition-colors">
                      {project.title}
                    </h3>

                    {/* Location with Pin */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span className="font-semibold text-slate-700">{project.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Highlights in INR */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Annual Savings</span>
                      <span className="font-bold text-[#16A34A] text-sm">{project.specs.annualSavings}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-[#16A34A] group-hover:underline">
                      <span>View details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
