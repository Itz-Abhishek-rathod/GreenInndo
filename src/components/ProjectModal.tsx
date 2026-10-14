import React from 'react';
import { X, MapPin, Zap, IndianRupee, Layers, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { ProjectItem } from './OurProjects.tsx';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#16A34A] text-[11px] font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{project.location}</span>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Body & Specs */}
        <div className="p-6 sm:p-8">
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            {project.description} Engineered with Tier-1 bifacial monocrystalline solar modules, BIS-approved smart grid-tie inverters with 24/7 cloud monitoring, and rapid DISCOM net-metering synchronization.
          </p>

          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            Installation Specifications & India Savings (INR)
          </h4>

          {/* Grid of Key Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>System Size</span>
              </div>
              <p className="text-sm font-bold text-slate-900">{project.specs.systemSize}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                <IndianRupee className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Annual Savings</span>
              </div>
              <p className="text-sm font-bold text-[#16A34A]">{project.specs.annualSavings}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span>Modules</span>
              </div>
              <p className="text-sm font-bold text-slate-900">{project.specs.panelsCount} Panels</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>CO2 Offset</span>
              </div>
              <p className="text-sm font-bold text-slate-900">{project.specs.co2Offset}</p>
            </div>
          </div>

          {/* India Subsidy Highlight */}
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#16A34A]" />
              <span className="text-xs font-bold text-emerald-900">
                Government Scheme / Tariff:
              </span>
            </div>
            <span className="text-xs font-extrabold text-[#16A34A] bg-white px-3 py-1 rounded-full shadow-sm">
              {project.specs.subsidyEligible}
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-400">
              Want a similar rooftop solar setup in India?
            </span>
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all"
            >
              <span>Get Solar Quote in INR</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
