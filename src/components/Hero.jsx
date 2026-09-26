import React from 'react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import EditorialImage from './EditorialImage';
import { images } from '../data/image.js';

export default function Hero({ onExploreClick, onAboutClick }) {
  return (
    <section className="relative bg-paper-warm pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-charcoal/15">
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* 12-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Editorial Typography & Statement): 7 Columns */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-4">
            <div>
              {/* Confident Headings as requested in PRD */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight-editorial text-forest-deep leading-[0.98] uppercase">
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
                  href="#businesses"
                  onClick={onExploreClick}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-forest hover:bg-forest-deep text-paper font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-150 rounded-xs shadow-sm"
                >
                  <span>Explore our businesses</span>
                  <ArrowRight className="w-4 h-4 text-earth-light transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="#about"
                  onClick={onAboutClick}
                  className="group inline-flex items-center gap-2 px-5 py-3.5 border border-charcoal/20 hover:border-charcoal/50 text-charcoal font-heading font-medium text-xs tracking-wider uppercase transition-colors rounded-xs"
                >
                  <span>About EnVERT</span>
                  <ArrowDownRight className="w-4 h-4 text-charcoal/60 group-hover:text-forest-deep transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Micro-specs / Group metrics */}
            <div className="mt-12 pt-7 border-t border-charcoal/10 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="font-mono text-2xl lg:text-3xl font-semibold text-forest-deep">10</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 mt-1">
                  Business Sectors
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

          {/* Right Column: Editorial Visual Frame (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <EditorialImage
              src={images.hero_main}
              alt="Clean Energy Infrastructure & Photovoltaics"
              domain="ENERGY & TRANSITION"
              caption="Decentralized commercial photovoltaic engineering & electrical infrastructure systems."
              aspectRatio="aspect-[4/3] sm:aspect-[4/3]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
