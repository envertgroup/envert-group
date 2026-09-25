import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
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
                BUSINESS CATEGORIES & ENTERPRISES
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
            <span>Explore All 10 Categories & Operating Entities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Desktop Split View: Left List with Hover Interaction, Right Large Photographic & Detail Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Categories Index (Clean Monospace Numbering, No Logos) */}
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
                    <span
                      className={`font-mono text-xs sm:text-sm tracking-wider pt-0.5 shrink-0 w-6 font-bold ${
                        isActive ? 'text-earth' : 'text-paper/40 group-hover:text-paper/70'
                      }`}
                    >
                      {biz.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-heading text-base sm:text-lg font-bold tracking-tight uppercase transition-colors truncate ${
                            isActive ? 'text-paper' : 'text-paper/75 group-hover:text-paper'
                          }`}
                        >
                          {biz.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] font-mono font-semibold text-earth-light uppercase shrink-0">
                          {biz.companyName}
                        </span>
                        <span className="text-[10px] text-paper/30">•</span>
                        <p className="text-xs text-paper/60 truncate max-w-xs">
                          {biz.tagline}
                        </p>
                      </div>
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

          {/* Right Column: Dynamic Editorial Showcase of Active Domain (No Logo Icon) */}
          <div className="lg:col-span-6 bg-forest/40 border border-paper/15 p-6 sm:p-8 flex flex-col justify-between rounded-xs transition-all duration-300">
            <div key={activeBusiness.id} className="animate-fadeIn">
              {/* Image Frame with Editorial Fallback */}
              <div className="mb-6">
                <EditorialImage
                  src={activeBusiness.image}
                  alt={activeBusiness.name}
                  domain={activeBusiness.name}
                  caption={activeBusiness.imageCaption}
                  aspectRatio="aspect-[16/10]"
                />
              </div>

              {/* Title & Tagline without individual logo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-paper/10 mb-4 gap-3">
                <div>
                  <span className="text-[11px] font-mono text-earth uppercase font-semibold block">
                    {activeBusiness.name}
                  </span>
                  <h4 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-paper">
                    {activeBusiness.companyName}
                  </h4>
                  <p className="text-xs font-mono text-leaf mt-0.5 font-semibold">
                    {activeBusiness.tagline}
                  </p>
                </div>
                <span className="font-mono text-xs text-earth uppercase font-semibold shrink-0">
                  ACTIVE SECTOR
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

            {/* Bottom Action */}
            <div className="mt-8 pt-6 border-t border-paper/10 flex justify-end">
              <Link
                to={`/businesses/${activeBusiness.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-earth hover:bg-earth-light text-forest-deep text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 rounded-xs shadow-sm hover:shadow-md hover:translate-x-0.5"
              >
                <span>Open Dedicated Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

