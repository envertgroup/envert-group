import React from 'react';
import { Link } from 'react-router-dom';
import { brandsData } from '../data/siteData';

export default function TopBrandTicker() {
  const brands = brandsData.map(b => ({
    name: b.name,
    category: b.category,
    logo: b.logo,
    url: b.internalUrl || `/businesses/${b.internalSlug}`,
    isPrimary: b.id === 'nrg-india'
  }));

  // Duplicate the list to create an unbroken seamless infinite loop
  const tickerItems = [...brands, ...brands];

  return (
    <div className="bg-forest-deep text-paper/90 border-b border-paper/10 overflow-hidden select-none z-50 py-2 sm:py-2.5">
      <div className="relative w-full flex items-center">
        
        {/* Fixed Editorial Label at Start on Desktop */}
        <div className="hidden xl:flex items-center gap-2 pl-6 pr-4 shrink-0 bg-forest-deep z-10 border-r border-paper/15 text-[10.5px] font-mono tracking-widest uppercase text-earth-light">
          <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse"></span>
          <span>COMPANIES & INITIATIVES</span>
        </div>

        {/* Sliding Marquee Track */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-slide flex items-center gap-6 sm:gap-10">
            {tickerItems.map((brand, idx) => (
              <Link
                key={`${brand.name}-${idx}`}
                to={brand.url}
                className="group flex items-center gap-2.5 px-3 py-1 hover:bg-forest/80 rounded-xs transition-colors shrink-0"
              >
                {/* Brand Logo Container */}
                {brand.logo && (
                  <div className="h-6 w-auto px-1.5 py-0.5 bg-white/95 rounded-xs flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} brand logo — EnVERT Group`}
                      width="85"
                      height="24"
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-[70px] sm:max-w-[85px] object-contain"
                    />
                  </div>
                )}

                {/* Brand Name & Category Badge */}
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-xs sm:text-[13px] tracking-tight text-paper group-hover:text-earth-light transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-earth/80 bg-paper/10 px-1.5 py-0.5 rounded-xs whitespace-nowrap border border-paper/10">
                    {brand.category}
                  </span>
                </div>

                {/* Subtle Divider */}
                <span className="text-paper/20 ml-3">•</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
