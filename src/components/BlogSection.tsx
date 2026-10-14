import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, Tag, X, BookOpen, Share2 } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
}

export const BlogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'blog-1',
      title: 'How to Claim up to ₹78,000 Subsidy Under PM Surya Ghar: Step-by-Step Guide',
      category: 'Government Subsidy',
      date: 'Oct 12, 2026',
      readTime: '5 min read',
      author: 'Er. Rajesh Verma, Lead Solar Consultant',
      excerpt:
        'A comprehensive guide for Indian homeowners on navigating the National Portal for Rooftop Solar, DISCOM feasibility, and direct DBT subsidy transfer.',
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      content: [
        'The Government of India launched the PM Surya Ghar: Muft Bijli Yojana with an outlay of ₹75,021 crore to provide free electricity to 1 crore households nationwide.',
        'Under the revised guidelines, homeowners installing a 1 kW system receive ₹30,000, 2 kW systems receive ₹60,000, and systems of 3 kW or higher receive the maximum subsidy of ₹78,000 directly credited to their bank account via Direct Benefit Transfer (DBT).',
        'GreenIndo provides end-to-end liaison with your regional DISCOM (e.g. BESCOM, MSEDCL, TPDDL, UGVCL) to handle technical feasibility, net-metering synchronization, and final commissioning documentation so your subsidy is disbursed within 30 days of inspection.',
      ],
    },
    {
      id: 'blog-2',
      title: 'Top Solar Panel Technologies for High-Heat Indian Summer Climates',
      category: 'Solar Technology',
      date: 'Oct 08, 2026',
      readTime: '4 min read',
      author: 'Dr. Ananya Sen, Photovoltaic R&D',
      excerpt:
        'Comparing n-type TOPCon, Bifacial Monocrystalline, and HJT modules to minimize temperature coefficient losses during extreme heatwaves.',
      image:
        'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=800&q=80',
      content: [
        'Standard polycrystalline solar panels suffer significant efficiency drops when surface temperatures exceed 40°C during peak Indian summer months.',
        'Modern n-type TOPCon (Tunnel Oxide Passivated Contact) and Bifacial Monocrystalline cells feature a superior temperature coefficient of -0.30%/°C, generating up to 8% to 12% more energy over their 25-year operational lifespan.',
        'At GreenIndo, all residential and commercial rooftop installations exclusively utilize Tier-1 bifacial panels with anti-reflective nanocoatings that resist dust accumulation common across Indian cities.',
      ],
    },
    {
      id: 'blog-3',
      title: 'How Indian Commercial & Industrial Units Cut Tariffs with Net Metering',
      category: 'Commercial ROI',
      date: 'Sep 29, 2026',
      readTime: '6 min read',
      author: 'Vikram Mehta, Commercial EPC Director',
      excerpt:
        'Exploring 40% accelerated depreciation, captive solar models, and ROI payback periods under 3.5 years for manufacturing and textile hubs.',
      image:
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      content: [
        'Commercial and industrial electricity tariffs across Indian states range between ₹8.50 to ₹12.50 per unit (kWh). Rooftop solar generates electricity at a levelized cost of energy (LCOE) under ₹2.20 per unit.',
        'Indian businesses can also claim 40% Accelerated Depreciation in the first financial year under Section 32 of the Income Tax Act, significantly lowering corporate tax liability while reducing daytime grid consumption.',
        'With commercial payback periods dropping to 3.5 years, investing in on-site solar provides clean energy resilience against rising DISCOM power costs.',
      ],
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-[#16A34A] tracking-wider uppercase">
                — / LATEST BLOG & SOLAR INSIGHTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
              Solar News, Guides & Industry Insights
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Stay informed with the latest updates on government subsidy schemes, technology breakthroughs, and net-metering policies across India.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#16A34A]">
            <BookOpen className="w-4 h-4" />
            <span>Updated Weekly by Certified Solar Engineers</span>
          </div>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group cursor-pointer"
            >
              {/* Image & Category Pill */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#16A34A] border border-emerald-100 shadow-xs flex items-center gap-1.5">
                  <Tag className="w-3 h-3" />
                  <span>{post.category}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Date & Read Time */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight group-hover:text-[#16A34A] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read Article CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#16A34A]">
                  <span>Read full guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden flex-shrink-0">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-[#16A34A] text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                  {activeArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {activeArticle.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-300 mt-2">
                  <span>{activeArticle.author}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                <h4 className="text-sm font-bold text-emerald-900 mb-1">
                  Want expert assistance with this topic?
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                  Our certified solar consultants can calculate your specific property savings and handle all government subsidy paperwork.
                </p>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-semibold rounded-full transition-all"
                >
                  Contact Our Solar Engineers
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 flex-shrink-0">
              <span className="flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5" />
                GreenIndo Clean Energy Insights
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-full font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
