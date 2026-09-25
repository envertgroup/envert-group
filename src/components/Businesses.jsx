import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessesData } from '../data/siteData';
import EditorialImage from './EditorialImage';

export default function Businesses({ onSelectBusiness }) {
  const [activeBusinessId, setActiveBusinessId] = useState(businessesData[0].id);

  const activeBusiness = businessesData.find((b) => b.id === activeBusinessId) || businessesData[0];

  return (
    <section id="businesses" className="py-20 lg:py-28 bg-forest-deep text-paper border-b border-charcoal/30">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-paper/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-earth inline-block rounded-xs"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
                OPERATIONAL DOMAINS & COMPANIES
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight-editorial text-paper">
              What We Do
            </h2>
          </div>
          <Link
            to="/businesses"
            className="mt-4 sm:mt-0 font-mono text-xs text-earth hover:text-earth-light uppercase tracking-wider flex items-center gap-1.5"
          >
            <span>Explore All 07 Dedicated Pages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Desktop Split View: Left List with Hover Interaction, Right Large Photographic & Detail Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Businesses Index (7 items) */}
          <div className="lg:col-span-6 flex flex-col justify-between divide-y divide-paper/10 border-t border-b border-paper/10">
            {businessesData.map((biz) => {
              const isActive = biz.id === activeBusinessId;
              return (
                <div
                  key={biz.id}
                  onMouseEnter={() => setActiveBusinessId(biz.id)}
                  onClick={() => {
                    setActiveBusinessId(biz.id);
                    if (onSelectBusiness) onSelectBusiness(biz);
                  }}
                  className={`cursor-pointer py-4 sm:py-5 px-3 transition-all duration-200 group flex items-start justify-between ${
                    isActive
                      ? 'bg-forest/60 pl-5 border-l-2 border-earth'
                      : 'hover:bg-forest/30 hover:pl-4 border-l-2 border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                    {biz.logo ? (
                      <div className="w-8 h-8 rounded-xs bg-white/95 p-1 border border-paper/20 flex items-center justify-center shrink-0 mt-0.5">
                        <img src={biz.logo} alt={biz.name} className="max-w-full max-h-full object-contain" />
                      </div>
                    ) : (
                      <span
                        className={`font-mono text-sm tracking-wider pt-0.5 ${
                          isActive ? 'text-earth font-semibold' : 'text-paper/40 group-hover:text-paper/70'
                        }`}
                      >
                        {biz.num}
                      </span>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-heading text-lg sm:text-xl font-bold tracking-tight uppercase transition-colors truncate ${
                            isActive ? 'text-paper' : 'text-paper/75 group-hover:text-paper'
                          }`}
                        >
                          {biz.name}
                        </h3>
                        {biz.brandRef && (
                          <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 bg-paper/10 text-earth-light rounded-xs border border-paper/15 hidden sm:inline shrink-0">
                            {biz.brandRef}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-paper/60 mt-0.5 truncate max-w-md">
                        {biz.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 mt-1 transition-transform duration-200 shrink-0 ${
                      isActive
                        ? 'text-earth translate-x-1'
                        : 'text-paper/30 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Editorial Showcase of Active Domain */}
          <div className="lg:col-span-6 bg-forest/40 border border-paper/15 p-6 sm:p-8 flex flex-col justify-between rounded-xs">
            <div>
              {/* Image Frame with Editorial Fallback */}
              <div className="mb-6">
                <EditorialImage
                  key={activeBusiness.id}
                  src={activeBusiness.image}
                  alt={activeBusiness.name}
                  domain={`DOMAIN REF: ${activeBusiness.num} // ${activeBusiness.brandRef || 'ENVERT'}`}
                  caption={activeBusiness.imageCaption}
                  aspectRatio="aspect-[16/10]"
                />
              </div>

              {/* Title & Tagline with Official Brand Logo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-paper/10 mb-4 gap-3">
                <div className="flex items-center gap-3">
                  {activeBusiness.logo && (
                    <div className="h-12 bg-white p-2 border border-paper/20 rounded-xs inline-flex items-center shrink-0">
                      <img src={activeBusiness.logo} alt={activeBusiness.name} className="max-h-full max-w-[130px] object-contain" />
                    </div>
                  )}
                  <div>
                    <h4 className="font-heading text-2xl font-bold tracking-tight text-paper">
                      {activeBusiness.name}
                    </h4>
                    {activeBusiness.brandRef && (
                      <p className="text-xs font-mono text-earth mt-0.5">
                        Division: {activeBusiness.brandRef}
                      </p>
                    )}
                  </div>
                </div>
                <span className="font-mono text-xs text-earth uppercase font-semibold shrink-0">
                  CORE PRACTICE
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-paper/80 leading-relaxed font-normal mb-5">
                {activeBusiness.summary}
              </p>

              {/* If EV models available, show authentic series */}
              {activeBusiness.models && (
                <div className="mb-5 p-3.5 bg-forest-dark/80 border border-paper/15">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-earth font-semibold mb-2">
                    Commercial Vehicle Series
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {activeBusiness.models.map((m) => (
                      <div key={m.name} className="text-xs font-mono">
                        <span className="text-paper font-semibold block">{m.name}</span>
                        <span className="text-[10px] text-paper/60">{m.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Capabilities Checklist */}
              <div className="pt-4 border-t border-paper/10">
                <p className="font-mono text-[11px] uppercase tracking-wider text-earth mb-3 font-semibold">
                  Detailed Services & Technical Scope
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeBusiness.capabilities.slice(0, 6).map((cap) => (
                    <div key={cap} className="flex items-start gap-2 text-xs text-paper/90">
                      <span className="w-1.5 h-1.5 bg-leaf rounded-full shrink-0 mt-1.5"></span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action & Direct Division Line */}
            <div className="mt-8 pt-6 border-t border-paper/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-paper/60">
                {activeBusiness.directPhone && (
                  <span className="flex items-center gap-1.5 text-paper/90">
                    <Phone className="w-3 h-3 text-earth" /> {activeBusiness.directPhone}
                  </span>
                )}
                {activeBusiness.directEmail && (
                  <span className="flex items-center gap-1.5 text-paper/90">
                    <Mail className="w-3 h-3 text-earth" /> {activeBusiness.directEmail}
                  </span>
                )}
                {!activeBusiness.directPhone && !activeBusiness.directEmail && (
                  <span>Kolkata Corporate HQ • admin@envertgroup.com</span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={`/businesses/${activeBusiness.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-earth hover:bg-earth-light text-forest-deep text-xs font-heading font-bold uppercase tracking-wider transition-colors rounded-xs"
                >
                  <span>Open Dedicated Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
