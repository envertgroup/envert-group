import React from 'react';
import { ArrowUpRight, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brandsData, ecosystemData, sectorsData } from '../data/siteData';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 lg:py-28 bg-paper border-b border-charcoal/15">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Unified Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-charcoal/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-earth inline-block rounded-xs"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
                GROUP ARCHITECTURE & PORTFOLIO
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight-editorial text-forest-deep">
              The <span className="normal-case">EnVERT</span> Ecosystem & Brands
            </h2>
            <p className="mt-3 font-sans text-xs sm:text-sm text-charcoal/70 max-w-2xl leading-relaxed">
              Not a disjointed catalogue, but an interdependent matrix of engineering, corporate advisory, published knowledge, and community stewardship.
            </p>
          </div>
          <Link
            to="/companies"
            className="text-xs font-mono uppercase tracking-wider text-forest hover:text-earth font-semibold flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>View All 19 Brands Grouped by Sector</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 19 Official Group Entities & Registered Trademarks Grid */}
        <div className="mb-16 p-6 sm:p-8 bg-paper-warm border border-charcoal/15 rounded-xs">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-charcoal/10">
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/70 font-semibold flex items-center gap-2">
              <span className="w-2 h-0.5 bg-earth inline-block"></span>
              OFFICIAL GROUP ENTITIES & REGISTERED TRADEMARKS ({brandsData.length})
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-charcoal/50">
              Operating Subsidiaries, Institutes, Publications & Initiatives
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5">
            {brandsData.map((brand) => (
              <Link
                key={brand.id}
                to={brand.internalUrl || `/businesses/${brand.internalSlug}`}
                className="group p-3 sm:p-3.5 bg-white hover:bg-forest-warm border border-charcoal/15 hover:border-forest-deep rounded-xs flex flex-col items-center justify-between transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-full h-14 bg-white p-2 rounded-xs border border-charcoal/10 flex items-center justify-center mb-2.5 shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-heading text-xs font-bold text-forest-deep group-hover:text-forest uppercase tracking-tight block truncate w-full transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] font-mono text-charcoal/60 block truncate w-full mt-0.5">
                  {brand.category}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 4 Core Architectural Pillars (Editorial Grid) */}
        <div className="pb-16 border-b border-charcoal/10">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              INTERDEPENDENT MATRIX
            </span>
            <span className="font-mono text-[11px] text-charcoal/50">
              4 Strategic Operational Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemData.pillars.map((pillar) => (
              <div key={pillar.category} className="p-6 bg-paper-warm border border-charcoal/15 space-y-4 rounded-xs flex flex-col justify-between">
                <div>
                  <div className="pb-3 border-b border-charcoal/15">
                    <span className="font-mono text-[10px] text-earth uppercase font-semibold tracking-wider">
                      CORE SECTOR
                    </span>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-forest-deep mt-1">
                      {pillar.category}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal/75 leading-relaxed font-sans mt-3">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-charcoal/10">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-charcoal/50 mb-2 font-medium">
                    Operating Competencies
                  </p>
                  <div className="space-y-1">
                    {pillar.domains.map((dom) => (
                      <div key={dom} className="text-xs text-charcoal/80 flex items-center gap-2 font-mono">
                        <span className="text-leaf">•</span>
                        <span>{dom}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Operating Profiles Section */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
                FEATURED OPERATING PROFILES
              </p>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest-deep tracking-tight mt-1">
                Featured Group Entities & Specialized Brands
              </h3>
            </div>
            <Link
              to="/companies"
              className="text-xs font-mono uppercase tracking-wider text-earth font-bold hover:underline"
            >
              See All 19 Brands →
            </Link>
          </div>

          {/* Featured Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandsData.slice(0, 4).map((brand) => (
              <div
                key={brand.id}
                className="bg-paper-warm border border-charcoal/15 p-6 flex flex-col justify-between hover:border-forest-deep transition-all duration-200 group rounded-xs shadow-xs"
              >
                <div>
                  {/* Status */}
                  <div className="flex items-center justify-between pb-3 border-b border-charcoal/10 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 bg-paper px-2 py-0.5 border border-charcoal/10 rounded-xs">
                      {brand.status}
                    </span>
                    <span className="text-[10px] font-mono text-earth font-medium">
                      {brand.headquarters}
                    </span>
                  </div>

                  {/* Logo */}
                  {brand.logo && (
                    <div className="mb-4 h-12 bg-white p-2 border border-charcoal/10 inline-flex items-center rounded-xs w-full max-w-[160px]">
                      <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
                    </div>
                  )}

                  <h4 className="font-heading text-lg font-bold text-forest-deep group-hover:text-forest transition-colors">
                    {brand.name}
                  </h4>

                  <p className="text-[11px] font-mono text-leaf-dark mt-0.5 font-semibold uppercase">
                    {brand.category}
                  </p>

                  <p className="text-xs text-charcoal/70 mt-3 leading-relaxed line-clamp-3">
                    {brand.summary}
                  </p>

                  {/* Tags */}
                  {brand.domains && (
                    <div className="mt-4 flex flex-wrap gap-1">
                      {brand.domains.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 bg-paper text-charcoal/70 border border-charcoal/10 rounded-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-charcoal/10 flex items-center justify-between">
                  <Link
                    to={brand.internalUrl || `/businesses/${brand.internalSlug}`}
                    className="text-xs font-heading font-semibold uppercase tracking-wider text-forest-deep hover:text-earth flex items-center gap-1 transition-colors"
                  >
                    <span>View Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {brand.portalUrl && (
                    <a
                      href={brand.portalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-charcoal/40 hover:text-forest transition-colors"
                      title="External Portal"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View More Button opening dedicated /companies page */}
          <div className="mt-10 flex justify-center">
            <Link
              to="/companies"
              className="px-6 py-3 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold rounded-xs transition-all duration-200 inline-flex items-center gap-2 shadow-xs hover:shadow-md hover:translate-x-0.5"
            >
              <span>Explore All 19 Brands by Sector</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
