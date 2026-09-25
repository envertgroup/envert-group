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
          <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
            GROUP ARCHITECTURE // 07 OPERATIONAL DOMAINS
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-forest-deep mt-2">
            Our Businesses
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl">
            Each operating company and practice under EnVERT Group functions as a specialized technical unit while sharing common engineering ethics, corporate governance, and sustainability principles.
          </p>
        </div>

        {/* List of 7 Dedicated Businesses */}
        <div className="space-y-16">
          {businessesData.map((biz) => (
            <div
              key={biz.id}
              className="bg-paper border border-charcoal/15 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center hover:border-forest-deep transition-all duration-300"
            >
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {biz.logo && (
                    <div className="mb-3 h-12 bg-white p-2 border border-charcoal/10 inline-flex items-center rounded-xs shadow-xs">
                      <img src={biz.logo} alt={biz.name} className="max-h-full max-w-[160px] object-contain" />
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm font-bold text-earth">{biz.num}</span>
                    <span className="text-charcoal/30">|</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-charcoal/60 font-semibold">
                      {biz.brandRef || 'CORPORATE PRACTICE'}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-tight text-forest-deep">
                    {biz.name}
                  </h2>

                  <p className="mt-2 text-sm sm:text-base font-heading font-medium text-charcoal/80">
                    {biz.tagline}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                    {biz.summary}
                  </p>

                  {/* Capabilities Preview */}
                  <div className="mt-6 pt-4 border-t border-charcoal/10 grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                    <span>View Dedicated Page</span>
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
                    domain={`DOMAIN REF: ${biz.num}`}
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
