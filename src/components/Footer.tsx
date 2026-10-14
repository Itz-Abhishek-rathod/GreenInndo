import React from 'react';
import { Logo } from './Logo.tsx';
import { ShieldCheck, ArrowRight, Heart } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenQuote }) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid with Dedicated Services & Blog Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="sm:col-span-2 space-y-4">
            <div className="bg-white/10 p-2.5 rounded-2xl inline-block backdrop-blur-sm">
              <Logo />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              GreenIndo Energy India Pvt Ltd delivers reliable, affordable solar power for homes, commercial establishments, and industrial units across India. Accelerating the national 300 GW clean energy vision.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
              <span>MNRE Empanelled • DISCOM Net-Metering Certified • ISO 9001:2015</span>
            </div>
          </div>

          {/* Column 1: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#why-solar')}
                  className="hover:text-white transition-colors"
                >
                  Why Solar
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#projects')}
                  className="hover:text-white transition-colors"
                >
                  India Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#solutions')}
                  className="hover:text-white transition-colors"
                >
                  Solar Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#blog')}
                  className="hover:text-white transition-colors"
                >
                  Blog & Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Services Column (Dedicated) */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">
                  Residential Rooftop Solar
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">
                  Commercial & Industrial EPC
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">
                  Solar Battery Storage
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">
                  Agricultural PM-KUSUM
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">
                  Solar Maintenance & AMC
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left">
                  DISCOM Net-Metering
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Blog & Guides Column (Dedicated) */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Blog & Insights
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('#blog')}
                  className="hover:text-white transition-colors text-left"
                >
                  PM Surya Ghar 2026 Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#blog')}
                  className="hover:text-white transition-colors text-left"
                >
                  Bifacial vs Mono PERC Panels
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#blog')}
                  className="hover:text-white transition-colors text-left"
                >
                  Commercial Solar ROI in India
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#blog')}
                  className="hover:text-white transition-colors text-left"
                >
                  State Net-Metering Tariffs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#blog')}
                  className="hover:text-white transition-colors text-left"
                >
                  Solar Subsidy Claim Process
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Legal Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              India Office & Legal
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="font-semibold text-slate-200">1800-258-7652</p>
              <p className="text-xs">contact@greenindo.in</p>
              <p className="text-xs text-slate-500 leading-snug">
                450 Solar Hub, Electronic City Phase 1, Bengaluru, Karnataka 560100
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenTerms}
                  className="inline-flex items-center gap-1.5 text-xs text-[#4ADE80] hover:underline font-semibold"
                >
                  <span>Terms & Conditions (T&C)</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} GreenIndo Energy India Pvt Ltd. GSTIN & MNRE Empanelled. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors underline"
            >
              Terms & Conditions
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors underline"
            >
              MNRE Subsidy Guidelines
            </button>
          </div>

          <div className="flex items-center gap-1 text-slate-500">
            <span>Powering India's Green Future</span>
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
