import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, ExternalLink, Filter, CheckCircle2, ChevronRight } from 'lucide-react';
import { businessesData, sectorsData } from '../data/siteData';
import EditorialImage from '../components/EditorialImage';
import SEO from '../components/SEO';
import { getBusinessesIndexSchema } from '../data/seoData';

export default function BusinessesIndex({ onOpenContact }) {
  const [selectedSector, setSelectedSector] = useState('all');

  const filteredCategories = selectedSector === 'all'
    ? businessesData
    : businessesData.filter((biz) => biz.sectorId === selectedSector);

  return (
    <div className="bg-paper-warm min-h-screen py-16 lg:py-24">
      <SEO
        title="Our Businesses — Practice Categories & Operating Divisions"
        description="Explore EnVERT Group practice categories and specialized operating businesses across clean energy, statutory BEE audits, EV transport, corporate capability, and media."
        canonical="/businesses"
        schema={getBusinessesIndexSchema(businessesData)}
      />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="pb-8 mb-12 border-b border-charcoal/15">
          <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-forest-deep">
            Our Businesses
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-3xl leading-relaxed">
            Every business under EnVERT Group functions as a specialized technical enterprise organized under core practice categories. Categories serve as our operational index, uniting specialized brands under common engineering ethics, corporate governance, and sustainable development.
          </p>

          {/* Sector Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-charcoal/10">
            <span className="text-xs font-mono uppercase tracking-wider text-charcoal/50 mr-2 flex items-center gap-1.5 font-semibold">
              <Filter className="w-3.5 h-3.5 text-earth" /> Filter by Sector:
            </span>
            <button
              onClick={() => setSelectedSector('all')}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-all ${
                selectedSector === 'all'
                  ? 'bg-forest-deep text-paper font-bold shadow-xs'
                  : 'bg-paper text-charcoal/70 border border-charcoal/15 hover:border-forest hover:text-forest-deep'
              }`}
            >
              All Categories ({businessesData.length})
            </button>
            {sectorsData.map((sector) => {
              const count = businessesData.filter((b) => b.sectorId === sector.id).length;
              return (
                <button
                  key={sector.id}
                  onClick={() => setSelectedSector(sector.id)}
                  className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-all ${
                    selectedSector === sector.id
                      ? 'bg-forest-deep text-paper font-bold shadow-xs'
                      : 'bg-paper text-charcoal/70 border border-charcoal/15 hover:border-forest hover:text-forest-deep'
                  }`}
                >
                  {sector.shortName} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* List of Categorized Businesses: Category is the index */}
        <div className="space-y-16">
          {filteredCategories.map((biz) => (
            <article
              key={biz.id}
              id={biz.id}
              className="bg-paper border border-charcoal/15 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start hover:border-forest-deep transition-all duration-300 rounded-xs shadow-xs"
            >
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  
                  {/* Category Index & Sector Eyebrow */}
                  <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                    <span className="font-bold text-earth text-sm bg-paper-warm px-2 py-0.5 border border-charcoal/10 rounded-xs">
                      CATEGORY {biz.num}
                    </span>
                    <span className="text-charcoal/30">|</span>
                    <span className="uppercase text-forest-deep font-semibold tracking-wider">
                      SECTOR: {biz.sector}
                    </span>
                  </div>

                  {/* Category Name as Index Title */}
                  <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-tight text-forest-deep">
                    {biz.name}
                  </h2>

                  <p className="mt-2 text-sm sm:text-base font-heading font-medium text-charcoal/80">
                    {biz.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                    {biz.summary}
                  </p>

                  {/* Operating Businesses Under this Category */}
                  {biz.businessesUnderCategory && biz.businessesUnderCategory.length > 0 && (
                    <div className="mt-6 p-4 sm:p-5 bg-paper-warm border border-charcoal/15 rounded-xs">
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-charcoal/10">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-forest-deep font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-earth rounded-full"></span>
                          Operating Businesses Under {biz.name}:
                        </span>
                        <span className="text-[10px] font-mono text-charcoal/50">
                          {biz.businessesUnderCategory.length} ACTIVE
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {biz.businessesUnderCategory.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex flex-col justify-between p-3.5 bg-paper border border-charcoal/12 rounded-xs hover:border-forest transition-colors shadow-2xs group/sub"
                          >
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                {sub.logo ? (
                                  <div className="w-10 h-10 bg-white p-1 border border-charcoal/10 rounded-xs flex items-center justify-center shrink-0">
                                    <img
                                      src={sub.logo}
                                      alt={`${sub.name} corporate entity logo — EnVERT Group`}
                                      width="40"
                                      height="40"
                                      loading="lazy"
                                      decoding="async"
                                      className="max-h-full max-w-full object-contain"
                                    />
                                  </div>
                                ) : (
                                  <span className="w-2.5 h-2.5 rounded-full bg-leaf shrink-0"></span>
                                )}
                                <div className="min-w-0">
                                  <span className="font-heading text-xs sm:text-sm font-bold text-forest-deep block truncate group-hover/sub:text-earth transition-colors">
                                    {sub.name}
                                  </span>
                                  <span className="text-[10px] font-mono text-charcoal/60 block truncate uppercase">
                                    {sub.role}
                                  </span>
                                </div>
                              </div>

                              <p className="text-[11.5px] text-charcoal/70 line-clamp-2 leading-snug">
                                {sub.desc}
                              </p>
                            </div>

                            <div className="mt-3 pt-2 border-t border-charcoal/8 flex items-center justify-between text-[11px] font-mono">
                              <Link
                                to={sub.url || `/businesses/${biz.id}`}
                                className="text-forest hover:text-earth font-semibold inline-flex items-center gap-1 transition-colors"
                              >
                                <span>Explore Division</span>
                                <ChevronRight className="w-3 h-3" />
                              </Link>
                              {sub.externalUrl && (
                                <a
                                  href={sub.externalUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-charcoal/50 hover:text-forest transition-colors"
                                  title="External Portal"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Capabilities Preview */}
                  <div className="mt-6 pt-4 border-t border-charcoal/10">
                    <p className="text-[10px] font-mono text-charcoal/50 uppercase tracking-wider mb-2 font-semibold">
                      Core Technical Capabilities
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {biz.capabilities.slice(0, 4).map((c, i) => (
                        <div key={i} className="text-xs text-charcoal/80 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest/70 shrink-0" />
                          <span className="truncate">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/businesses/${biz.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
                  >
                    <span>Explore Category Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-earth-light" />
                  </Link>

                  <button
                    onClick={() => onOpenContact(`Inquiry: ${biz.name} (${biz.sector})`)}
                    className="px-4 py-2.5 border border-charcoal/20 hover:border-forest text-xs font-mono uppercase text-forest-deep transition-colors"
                  >
                    Direct Consultation
                  </button>
                </div>
              </div>

              {/* Right Image (5 cols) */}
              <div className="lg:col-span-5">
                <Link to={`/businesses/${biz.id}`} className="block group">
                  <EditorialImage
                    src={biz.image}
                    alt={biz.name}
                    domain={biz.name}
                    caption={biz.imageCaption}
                    aspectRatio="aspect-[16/11]"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 sm:p-10 bg-forest-deep text-paper rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-charcoal/30">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              GROUP DIRECTORY
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase mt-1">
              Looking for Individual Operating Brands?
            </h3>
            <p className="text-xs sm:text-sm text-paper/70 mt-2 max-w-xl">
              Explore our 19 group brands and operating legal entities classified by corporate sector on our Brands Directory.
            </p>
          </div>
          <Link
            to="/companies"
            className="px-6 py-3 bg-earth hover:bg-earth-dark text-paper font-heading text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 flex items-center gap-2"
          >
            <span>View All Brands by Sector</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
