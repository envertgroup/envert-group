import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, ExternalLink } from 'lucide-react';
import { businessesData } from '../data/siteData';
import EditorialImage from '../components/EditorialImage';

export default function BusinessesIndex({ onOpenContact }) {
  return (
    <div className="bg-paper-warm min-h-screen py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="pb-8 mb-16 border-b border-charcoal/15">
          <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-forest-deep">
            Our Businesses
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl">
            Each operating company and practice under EnVERT Group functions as a specialized technical unit within our organized categories, sharing common engineering ethics, corporate governance, and sustainability principles.
          </p>
        </div>

        {/* List of Categorized Businesses */}
        <div className="space-y-16">
          {businessesData.map((biz) => (
            <div
              key={biz.id}
              className="bg-paper border border-charcoal/15 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center hover:border-forest-deep transition-all duration-300"
            >
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                    <span className="font-bold text-earth text-sm">{biz.num}</span>
                    <span className="text-charcoal/30">|</span>
                    <span className="uppercase text-charcoal/60 font-semibold tracking-wider">
                      CATEGORY: {biz.name}
                    </span>
                    <span className="text-charcoal/30">•</span>
                    <span className="uppercase text-forest font-bold tracking-wider">
                      {biz.companyName}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-tight text-forest-deep">
                    {biz.name}
                  </h2>

                  <p className="mt-2 text-sm sm:text-base font-heading font-medium text-charcoal/80">
                    {biz.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                    {biz.summary}
                  </p>

                  {/* Operating Businesses Under this Category */}
                  {biz.businessesUnderCategory && biz.businessesUnderCategory.length > 0 && (
                    <div className="mt-5 p-3.5 bg-paper-warm border border-charcoal/10 rounded-xs">
                      <div className="text-[10.5px] font-mono uppercase tracking-wider text-charcoal/60 font-semibold mb-2">
                        Operating Businesses Under {biz.name}:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {biz.businessesUnderCategory.map((sub, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2.5 p-2 bg-white border border-charcoal/10 rounded-xs">
                            {sub.logo ? (
                              <div className="w-8 h-8 bg-white flex items-center justify-center shrink-0">
                                <img src={sub.logo} alt={sub.name} className="max-h-full max-w-full object-contain" />
                              </div>
                            ) : (
                              <span className="w-2 h-2 rounded-full bg-leaf shrink-0"></span>
                            )}
                            <div className="min-w-0">
                              <span className="font-heading text-xs font-bold text-forest-deep block truncate">{sub.name}</span>
                              <span className="text-[10px] text-charcoal/60 block truncate">{sub.role}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Capabilities Preview */}
                  <div className="mt-5 pt-3 border-t border-charcoal/10 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {biz.capabilities.slice(0, 4).map((c, i) => (
                      <div key={i} className="text-xs text-charcoal/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-leaf rounded-full shrink-0"></span>
                        <span className="truncate">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/businesses/${biz.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
                  >
                    <span>View Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-earth-light" />
                  </Link>

                  <button
                    onClick={() => onOpenContact(`Inquiry: ${biz.name}`)}
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
                    aspectRatio="aspect-[16/10]"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
