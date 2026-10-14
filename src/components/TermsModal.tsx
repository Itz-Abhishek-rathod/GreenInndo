import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0F172A] text-white p-6 sm:p-8 flex items-center justify-between border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#4ADE80] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Terms & Conditions (T&C)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                GreenIndo Clean Energy Solutions • Effective Date: January 1, 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          
          {/* Quick Notice Badge */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-900 leading-relaxed">
              <span className="font-bold">Transparent Commitment:</span> All GreenIndo residential and commercial installations are backed by our comprehensive 25-Year Production Guarantee, Tier-1 solar manufacturer hardware warranties, and licensed master electrician supervision.
            </div>
          </div>

          {/* Section 1 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center justify-center font-bold">1</span>
              Scope of Solar Installation & Engineering
            </h4>
            <p>
              GreenIndo agrees to design, engineer, permit, procure, install, and commission the photovoltaic (PV) solar energy system and/or energy storage system as detailed in your customized Proposal and Master Services Agreement (MSA). All system layouts are subject to final on-site structural and electrical engineering verification.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center justify-center font-bold">2</span>
              25-Year Performance & Workmanship Warranty
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>
                <strong>Power Output Warranty:</strong> Photovoltaic modules are guaranteed to produce not less than 85% of rated output at Year 25.
              </li>
              <li>
                <strong>Inverter & Hardware Warranty:</strong> Microinverters and string inverters carry standard 25-year manufacturer-backed replacements.
              </li>
              <li>
                <strong>Roof Penetration & Leak Protection:</strong> 10-year watertight roof penetration warranty on all flashed attachment points installed by our certified technicians.
              </li>
              <li>
                <strong>Workmanship Guarantee:</strong> 10-year comprehensive coverage on all electrical conduit, wiring, balance of systems (BOS), and mechanical racking.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center justify-center font-bold">3</span>
              Permits, HOA Approvals & Utility Interconnection
            </h4>
            <p>
              GreenIndo manages all municipal building permits, HOA compliance filings, electrical permits, and utility Permission to Operate (PTO) applications on the customer’s behalf. Interconnection timelines are governed by local utility tariffs (e.g., NEM 2.0 / NEM 3.0 / net-billing protocols) and local authority inspection scheduling.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center justify-center font-bold">4</span>
              Pricing, Payment Milestones & Federal Tax Incentives
            </h4>
            <p>
              Project milestones are typically billed upon (a) Engineering Approval, (b) Hardware Delivery, (c) Physical Installation Completion, and (d) Final Utility PTO. Federal and state incentives (such as the 30% Residential Clean Energy Credit under Section 25D) are claimed directly by eligible taxpayers; GreenIndo provides all requisite documentation but recommends consulting a tax advisor.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center justify-center font-bold">5</span>
              System Monitoring & Customer Responsibilities
            </h4>
            <p>
              Customers receive continuous digital access to the GreenIndo smart cloud monitoring portal. To maintain warranty continuity, the customer agrees to keep their broadband internet gateway active for inverter telemetry and refrain from unauthorized alterations to the PV system by uncertified third parties.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center justify-center font-bold">6</span>
              Cancellation Rights & Consumer Protection
            </h4>
            <p>
              Residential solar customers have the right to cancel their agreement without penalty within three (3) business days of signing ("Notice of Cancellation" statutory cooling-off period), or prior to the finalization of site survey engineering if structural modifications are declined.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs flex items-center justify-center font-bold">7</span>
              Privacy & Energy Data Security
            </h4>
            <p>
              Your personal information and utility consumption history are encrypted with 256-bit SSL protocols. We never sell customer information to third-party data brokers. Data is used exclusively for engineering sizing, rebate filings, and system performance diagnostics.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-slate-400">
            Questions regarding terms? Contact <strong className="text-slate-600">legal@greenindo.in</strong>
          </span>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold rounded-full shadow-sm transition-all"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>I Understand</span>
          </button>
        </div>
      </div>
    </div>
  );
};
