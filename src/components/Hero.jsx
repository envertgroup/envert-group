import React from 'react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { images } from '../data/image.js';

export default function Hero({ onExploreClick, onAboutClick }) {
  return (
    <section className="relative bg-paper-warm pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-charcoal/15 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-earth/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-1/3 w-80 h-80 bg-forest/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* 12-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Editorial Typography & Statement): 6 Columns on lg */}
          <div className="lg:col-span-6 flex flex-col justify-between pr-0 lg:pr-4">
            <div>
              {/* Confident Headings as requested in PRD */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight-editorial text-forest-deep leading-[0.98] uppercase">
                Engineering <br className="hidden sm:inline" />
                For A <br className="hidden sm:inline" />
                Changing <br className="hidden sm:inline" />
                World.
              </h1>

              {/* Supporting Copy */}
              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-charcoal/80 max-w-xl font-normal leading-relaxed">
                A multidisciplinary group working across energy, environment, infrastructure, mobility, advisory and knowledge.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#about"
                  onClick={onAboutClick}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-forest hover:bg-forest-deep text-paper font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-150 rounded-xs shadow-sm"
                >
                  <span>About EnVERT</span>
                  <ArrowRight className="w-4 h-4 text-earth-light transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="#businesses"
                  onClick={onExploreClick}
                  className="group inline-flex items-center gap-2 px-5 py-3.5 border border-charcoal/20 hover:border-charcoal/50 text-charcoal font-heading font-medium text-xs tracking-wider uppercase transition-colors rounded-xs"
                >
                  <span>Explore our businesses</span>
                  <ArrowDownRight className="w-4 h-4 text-charcoal/60 group-hover:text-forest-deep transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Micro-specs / Group metrics */}
            <div className="mt-12 pt-7 border-t border-charcoal/10 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="font-mono text-2xl lg:text-3xl font-semibold text-forest-deep">11</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 mt-1">
                  Markets
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl lg:text-3xl font-semibold text-forest-deep">14+</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 mt-1">
                  Operating Brands
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl lg:text-3xl font-semibold text-forest-deep">HQ</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 mt-1">
                  Kolkata, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Multidisciplinary Group Editorial Collage (6 Columns) */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Mosaic Collage Grid: 12 Columns, Perfectly Flush Editorial Rectangle */}
              <div className="grid grid-cols-12 gap-3 sm:gap-3.5">
                
                {/* 1. Main Anchor Tile: Renewable Energy (7 Columns, spans 2 rows) */}
                <div
                  className="col-span-7 row-span-2 relative group overflow-hidden rounded-xs border border-charcoal/15 bg-forest-deep shadow-md aspect-[4/4.9]"
                >
                  <img
                    src={images.heroCollage.energy}
                    alt="Clean Energy Infrastructure & Renewable Power"
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 sm:p-3.5 flex items-end">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-paper/90 bg-black/60 px-2 py-0.5 rounded-xs backdrop-blur-xs font-medium">
                      Energy
                    </span>
                  </div>
                </div>

                {/* 2. Secondary Tile: Travel & Tourism (5 Columns, 1 row) */}
                <div
                  className="col-span-5 relative group overflow-hidden rounded-xs border border-charcoal/15 bg-forest-deep shadow-md aspect-[4/2.95]"
                >
                  <img
                    src={images.heroCollage.travel}
                    alt="Experiential Travel & Sustainable Tourism"
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-2.5 sm:p-3 flex items-end">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-paper/90 bg-black/60 px-2 py-0.5 rounded-xs backdrop-blur-xs font-medium">
                      Travel
                    </span>
                  </div>
                </div>

                {/* 3. Secondary Tile: Clean Electric Transit & Mobility (5 Columns, 1 row) */}
                <div
                  className="col-span-5 relative group overflow-hidden rounded-xs border border-charcoal/15 bg-forest-deep shadow-md aspect-[4/2.95]"
                >
                  <img
                    src={images.heroCollage.mobility}
                    alt="Clean Mobility & Electric Transit Systems"
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-2.5 sm:p-3 flex items-end">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-paper/90 bg-black/60 px-2 py-0.5 rounded-xs backdrop-blur-xs font-medium">
                      Transport
                    </span>
                  </div>
                </div>

                {/* 4. Horizontal Base Tile: Publishing, Research & Knowledge (12 Columns, full width) */}
                <div
                  className="col-span-12 relative group overflow-hidden rounded-xs border border-charcoal/15 bg-forest-deep shadow-md aspect-[16/4.5]"
                >
                  <img
                    src={images.heroCollage.publishing}
                    alt="Knowledge, Periodical Publishing & Research Monographs"
                    loading="eager"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 sm:p-3.5 flex items-end justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-paper/90 bg-black/60 px-2 py-0.5 rounded-xs backdrop-blur-xs font-medium">
                      Publishing & Advisory
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-paper/70 hidden sm:inline">
                      EnVERT® Disciplines
                    </span>
                  </div>
                </div>

              </div>
          

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
