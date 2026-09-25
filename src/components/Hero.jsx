import React from 'react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import EditorialImage from './EditorialImage';

export default function Hero({ onExploreClick, onAboutClick }) {
  return (
    <section className="relative bg-paper-warm pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-charcoal/15">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Eyebrow / Category Indicator */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-charcoal/10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-earth inline-block rounded-xs"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/70 font-medium">
              Corporate Overview & Portfolio
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-charcoal/50">
            EST. 2018 • MULTIDISCIPLINARY GROUP
          </span>
        </div>

        {/* 12-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (Editorial Typography & Statement): 7 Columns */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-leaf-dark mb-4 font-semibold">
                ENVERT GROUP
              </p>
              
              {/* Confident Headings as requested in PRD */}
              <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight-editorial text-forest-deep leading-[0.98] uppercase">
                Engineering <br className="hidden sm:inline" />
                For A <br className="hidden sm:inline" />
                Changing <br className="hidden sm:inline" />
                World.
              </h1>

              {/* Supporting Copy */}
              <p className="mt-8 text-base sm:text-lg text-charcoal/80 max-w-xl font-normal leading-relaxed">
                A multidisciplinary group working across energy, environment, infrastructure, mobility, advisory and knowledge.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="#businesses"
                  onClick={onExploreClick}
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-forest hover:bg-forest-deep text-paper font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-150 rounded-xs shadow-sm"
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
            <div className="mt-14 pt-8 border-t border-charcoal/10 grid grid-cols-3 gap-6">
              <div>
                <p className="font-mono text-2xl lg:text-3xl font-semibold text-forest-deep">07</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 mt-1">
                  Operating Domains
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl lg:text-3xl font-semibold text-forest-deep">03</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 mt-1">
                  Core Pillars
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl lg:text-3xl font-semibold text-forest-deep">IN</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 mt-1">
                  HQ Kolkata
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Frame (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <EditorialImage
              src="https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1400&auto=format&fit=crop"
              alt="Clean Energy Infrastructure & Photovoltaics"
              domain="ENERGY & TRANSITION"
              caption="Decentralized commercial photovoltaic engineering & electrical infrastructure systems."
              aspectRatio="aspect-[4/3] sm:aspect-[4/3]"
            />

            {/* Subtle editorial index callout */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-charcoal/60 px-1">
              <span>FIG. 1.0 — CLEAN ENERGY ENGINEERING</span>
              <span>EASTERN INDIA</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
