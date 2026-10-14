import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { submitInquiry } from '../lib/supabase';

interface ContactSectionProps {
  onOpenTerms?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenTerms }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Residential Rooftop Solar',
    message: '',
    agreedToTerms: true,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiry_type: formData.inquiryType,
        message: formData.message,
        agreed_to_terms: formData.agreedToTerms,
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Sorry, something went wrong sending your inquiry. Please try again or call us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-bold text-[#16A34A] tracking-wider uppercase">
              — / CONTACT US IN INDIA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
            Get in Touch With Our Solar Experts
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have questions about transitioning your home or business to clean solar energy with government subsidies? 
            Our MNRE-certified solar engineers and DISCOM liaison advisors across India are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] text-[#16A34A] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                  All-India Toll-Free Support
                </h4>
                <p className="text-base font-semibold text-slate-800">
                  1800-258-7652 (1800-258-SOLAR)
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Direct Mobile / WhatsApp: +91 98765 43210
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] text-[#16A34A] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                  Email Inquiries
                </h4>
                <p className="text-base font-semibold text-slate-800">
                  contact@greenindo.in
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Subsidy Helpdesk: pmsuryaghar@greenindo.in
                </p>
              </div>
            </div>

            {/* Office Location Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] text-[#16A34A] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                  National Headquarters & Innovation Hub
                </h4>
                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  450 Solar Hub, Electronic City Phase 1,<br />
                  Bengaluru, Karnataka 560100, India
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Regional Operations: Mumbai • Delhi-NCR • Ahmedabad • Jaipur • Hyderabad • Pune
                </p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] text-[#16A34A] flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                  Operating Hours (IST)
                </h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  <span className="font-semibold">Monday – Saturday:</span> 9:00 AM – 7:00 PM IST
                </p>
                <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                  <span className="font-semibold">Sunday:</span> 10:00 AM – 2:00 PM IST
                </p>
                <p className="text-xs text-emerald-600 font-medium mt-1.5 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  24/7 Automated Generation Telemetry & Inverter Monitoring
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Send a Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-md">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#16A34A] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-slate-600 max-w-md mb-6 leading-relaxed text-sm">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. A GreenIndo solar engineer will connect with you via <span className="font-semibold text-slate-800">{formData.email}</span> with DISCOM net-metering details.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      inquiryType: 'Residential Rooftop Solar',
                      message: '',
                      agreedToTerms: true,
                    });
                  }}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-full transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-2">
                  Request Consultation & Site Survey
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  Fill out the form below and our team will get back to you with custom answers in INR (₹).
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Indian Mobile (+91) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent bg-white"
                      >
                        <option value="Residential Rooftop Solar">Residential Rooftop Solar (PM Surya Ghar)</option>
                        <option value="Commercial & Industrial Solar">Commercial & Industrial Solar</option>
                        <option value="Solar Battery Storage">Solar Battery Storage</option>
                        <option value="DISCOM Net Metering">DISCOM Net Metering</option>
                        <option value="Solar Maintenance & AMC">Solar Maintenance & AMC</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message & Location / PIN Code *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify your city/state, PIN code, and current monthly electricity bill in INR (₹)..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent resize-y"
                    />
                  </div>

                  {/* Terms & Conditions Agreement Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      required
                      checked={formData.agreedToTerms}
                      onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[#16A34A] focus:ring-[#16A34A]"
                    />
                    <label htmlFor="agreeTerms" className="text-xs text-slate-500 leading-normal">
                      I agree to the{' '}
                      <button
                        type="button"
                        onClick={onOpenTerms}
                        className="text-[#16A34A] underline font-medium hover:text-[#15803D]"
                      >
                        Terms & Conditions
                      </button>{' '}
                      and Privacy Policy. I consent to receive communication regarding solar installation and PM Surya Ghar subsidy feasibility.
                    </label>
                  </div>

                  {/* Submit Button */}
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-full font-semibold shadow-sm hover:shadow transition-all group"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
