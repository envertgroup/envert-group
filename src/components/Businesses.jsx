import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, LayoutGrid, Rows3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessesData } from '../data/siteData';

export default function Businesses({ onSelectBusiness }) {
  const categories = businessesData;
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);
  const [viewMode, setViewMode] = useState('showcase'); // 'showcase' | 'matrix'
  const hoverTimeoutRef = useRef(null);

  const activeIndex = categories.findIndex((c) => c.id === activeCategoryId);
  const activeCategory = categories[activeIndex] || categories[0];

  useEffect(() => {
    // Preload category hero images into browser cache so switching is instantaneous with zero flicker
    categories.forEach((c) => {
      if (c.image) {
        const img = new Image();
        img.src = c.image;
      }
    });

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [categories]);

  const handleItemMouseEnter = (categoryId) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // 90ms debounce filters out rapid sweeps and boundary tremors without feeling sluggish
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategoryId(categoryId);
    }, 90);
  };

  const handleItemMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleItemClick = (category) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveCategoryId(category.id);
    if (onSelectBusiness) onSelectBusiness(category);
  };

  const handlePrev = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    const prevIndex = (activeIndex - 1 + categories.length) % categories.length;
    setActiveCategoryId(categories[prevIndex].id);
  };

  const handleNext = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    const nextIndex = (activeIndex + 1) % categories.length;
    setActiveCategoryId(categories[nextIndex].id);
  };

  return (
    <section 
      id="businesses" 
      className="py-20 lg:py-28 bg-forest-deep text-paper border-b border-charcoal/30 relative overflow-hidden scroll-mt-20"
      aria-label="Practice Categories - Working Across The Twelve Categories"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-forest/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[350px] bg-earth/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-10 border-b border-paper/15 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper/5 border border-paper/10 rounded-full mb-3">
              <span className="w-1.5 h-1.5 bg-earth rounded-full animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-earth-light font-semibold">
                PRACTICE CATEGORIES
              </span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[3.25rem] font-bold uppercase tracking-tight-editorial text-paper leading-[1.05]">
              Working Across The Twelve Categories
            </h2>
            
            <p className="mt-4 text-sm sm:text-base text-paper/75 leading-relaxed font-normal">
              A truly multidisciplinary engineering, advisory, design, consultancy and publishing group delivering integrated solutions across twelve core practice categories.
            </p>
          </div>

          {/* View Mode Switcher & Navigation Link */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Toggle View: Showcase vs Full Category Matrix */}
            <div className="inline-flex p-1 bg-paper/5 border border-paper/15 rounded-xs">
              <button
                type="button"
                onClick={() => setViewMode('showcase')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-xs transition-colors ${
                  viewMode === 'showcase'
                    ? 'bg-earth text-forest-deep font-bold shadow-sm'
                    : 'text-paper/70 hover:text-paper hover:bg-paper/5'
                }`}
                title="Interactive Showcase"
              >
                <Rows3 className="w-3.5 h-3.5" />
                <span>Showcase</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('matrix')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-xs transition-colors ${
                  viewMode === 'matrix'
                    ? 'bg-earth text-forest-deep font-bold shadow-sm'
                    : 'text-paper/70 hover:text-paper hover:bg-paper/5'
                }`}
                title="Full Category Directory Matrix"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Full Directory Matrix</span>
              </button>
            </div>

            <Link
              to="/businesses"
              className="group font-mono text-xs text-earth hover:text-earth-light uppercase tracking-wider flex items-center gap-1.5 transition-colors pl-2"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* VIEW 1: INTERACTIVE SHOWCASE (Master-Detail) */}
        {/* ============================================================ */}
        {viewMode === 'showcase' && (
          <div>
            {/* Mobile Horizontal Selector Pills */}
            <div className="lg:hidden mb-6 -mx-6 px-6 overflow-x-auto no-scrollbar flex items-center gap-2 pb-2">
              {categories.map((category) => {
                const isActive = category.id === activeCategoryId;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`whitespace-nowrap px-3.5 py-2 text-xs font-mono font-medium rounded-xs transition-colors shrink-0 border ${
                      isActive
                        ? 'bg-earth text-forest-deep border-earth font-bold shadow-sm'
                        : 'bg-paper/5 text-paper/70 border-paper/10 hover:bg-paper/10 hover:text-paper'
                    }`}
                  >
                    <span className="opacity-70 mr-1.5">{category.num}.</span>
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* Desktop Split View Grid: Equal 50 / 50 Size (2 Equal Columns, items-stretch) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Left Column (50%): 12 Categories Navigation Console */}
              <div className="hidden lg:flex flex-col justify-between bg-forest-surface/40 border border-paper/15 rounded-xs p-6 sm:p-7 shadow-2xl h-full">
                {/* Card Header */}
                <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-paper/10">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
                      PRACTICE DIRECTORY
                    </span>
                    <h3 className="font-heading text-lg font-bold uppercase text-paper tracking-tight mt-0.5">
                      Twelve Practice Categories
                    </h3>
                  </div>
                </div>

                {/* 12 Category Rows: Contiguous buttons with constant padding (zero layout shifts or hover boundary jitters) */}
                <div className="flex-1 flex flex-col justify-between divide-y divide-paper/10 border-t border-b border-paper/10 py-1">
                  {categories.map((category) => {
                    const isActive = category.id === activeCategoryId;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onMouseEnter={() => handleItemMouseEnter(category.id)}
                        onMouseLeave={handleItemMouseLeave}
                        onClick={() => handleItemClick(category)}
                        className={`w-full text-left px-3.5 py-2 transition-colors duration-150 flex items-center justify-between group relative border-l-2 ${
                          isActive
                            ? 'bg-paper/10 border-earth text-paper'
                            : 'border-transparent text-paper/70 hover:text-paper hover:bg-paper/[0.04]'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <span
                            className={`font-mono text-xs tracking-wider shrink-0 font-bold transition-colors ${
                              isActive ? 'text-earth' : 'text-paper/40 group-hover:text-paper/70'
                            }`}
                          >
                            {category.num}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h4
                              className={`font-heading text-xs sm:text-sm font-bold tracking-tight uppercase transition-colors truncate ${
                                isActive ? 'text-paper' : 'text-paper/85 group-hover:text-paper'
                              }`}
                            >
                              {category.name}
                            </h4>
                            <p className="text-[11px] text-paper/45 truncate mt-0.5 font-normal">
                              {category.tagline}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          <span className="font-mono text-[10px] text-paper/40 group-hover:text-paper/60 hidden xl:inline">
                            {category.capabilities?.length || 0} items
                          </span>
                          <ChevronRight
                            className={`w-3.5 h-3.5 transition-all duration-150 ${
                              isActive
                                ? 'text-earth translate-x-0.5 opacity-100'
                                : 'text-paper/20 opacity-0 group-hover:opacity-60'
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column (50%): Visual Stage with Verified Photography & Capabilities Checklist */}
              <div className="bg-forest-surface/40 border border-paper/15 p-6 sm:p-7 rounded-xs shadow-2xl flex flex-col justify-between h-full">
                
                <div key={activeCategory.id} className="animate-smooth-fade flex flex-col">
                  
                  {/* Cinematic Image Frame with Fixed Aspect Ratio */}
                  <div className="relative mb-5 overflow-hidden rounded-xs border border-paper/10 bg-black/40 aspect-[16/9] w-full">
                    <img
                      src={activeCategory.image}
                      alt={activeCategory.name}
                      loading="eager"
                      className="w-full h-full object-cover transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1600&auto=format&fit=crop";
                      }}
                    />
                    
                    {/* Image Caption & Floating Badge */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex items-end justify-between gap-4">
                      <span className="font-mono text-[11px] text-paper/90 uppercase tracking-wider truncate">
                        {activeCategory.imageCaption || activeCategory.tagline}
                      </span>
                      <span className="font-mono text-[10px] text-earth uppercase tracking-widest font-semibold px-2.5 py-0.5 bg-black/70 border border-paper/20 rounded-xs shrink-0">
                        CATEGORY {activeCategory.num} OF {categories.length}
                      </span>
                    </div>
                  </div>

                  {/* Sector Title & Tagline */}
                  <div className="pb-3.5 border-b border-paper/10 mb-3.5">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
                        SECTOR: {activeCategory.sector}
                      </span>
                      <span className="font-mono text-[11px] text-paper/50 uppercase tracking-wider">
                        {activeCategory.capabilities?.length || 0} Core Deliverables
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-paper uppercase">
                      {activeCategory.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-leaf-light mt-1 font-semibold leading-relaxed">
                      {activeCategory.tagline}
                    </p>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-paper/80 leading-relaxed font-normal mb-5 line-clamp-3">
                    {activeCategory.summary}
                  </p>

                  {/* Key Capabilities Checklist (Clean 2-Column Grid, not overloaded) */}
                  {activeCategory.capabilities && activeCategory.capabilities.length > 0 && (
                    <div className="pt-4 border-t border-paper/10">
                      <div className="flex items-center justify-between mb-2.5">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-earth font-semibold">
                          Core Practice Capabilities
                        </p>
                        <span className="font-mono text-[10px] text-paper/50">
                          Operational Scope
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                        {activeCategory.capabilities.slice(0, 6).map((cap, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-paper/85 py-0.5">
                            <span className="w-1.5 h-1.5 bg-earth rounded-full shrink-0 mt-1.5" />
                            <span className="leading-snug">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Bar: Prev / Next Controls & Direct Sector Link */}
                <div className="pt-5 border-t border-paper/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-6">
                  {/* Prev / Next Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-paper/5 hover:bg-paper/10 border border-paper/15 text-paper/80 hover:text-paper transition-colors rounded-xs"
                      aria-label="Previous Category"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Prev</span>
                    </button>
                    <span className="font-mono text-xs text-paper/50 px-1">
                      {activeCategory.num} / {categories.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-paper/5 hover:bg-paper/10 border border-paper/15 text-paper/80 hover:text-paper transition-colors rounded-xs"
                      aria-label="Next Category"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <Link
                    to={`/businesses/${activeCategory.urlSlug || activeCategory.id}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-earth hover:bg-earth-light text-forest-deep text-xs font-heading font-bold uppercase tracking-wider transition-all duration-150 rounded-xs shadow-md hover:shadow-lg hover:translate-x-0.5"
                  >
                    <span>Explore Category Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 2: FULL DIRECTORY MATRIX (Poster Reference Layout) */}
        {/* ============================================================ */}
        {viewMode === 'matrix' && (
          <div className="animate-smooth-fade">
            <div className="p-4 bg-paper/5 border border-paper/10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-paper/70">
              <span>Showing all 12 practice categories and technical divisions across EnVERT Group.</span>
              <span className="text-earth font-semibold shrink-0">12 Categories • Engineering & Advisory Solutions</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-paper/[0.03] border border-paper/15 p-6 flex flex-col justify-between hover:border-earth transition-colors duration-200 group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-paper/10 mb-4">
                      <span className="font-mono text-xs text-earth font-bold">
                        CATEGORY {category.num}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-paper/50">
                        {category.capabilities?.length || 0} items
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-paper group-hover:text-earth-light transition-colors">
                      {category.name}
                    </h3>

                    <p className="text-xs text-paper/60 mt-1 mb-4 leading-relaxed font-normal">
                      {category.tagline}
                    </p>

                    {/* Capabilities List */}
                    {category.capabilities && category.capabilities.length > 0 && (
                      <div className="pt-3 border-t border-paper/10 space-y-1.5">
                        {category.capabilities.slice(0, 4).map((cap, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-paper/80">
                            <span className="w-1 h-1 bg-leaf-light rounded-full shrink-0 mt-1.5" />
                            <span className="leading-snug">{cap}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer Link */}
                  <div className="mt-6 pt-4 border-t border-paper/10 flex justify-end">
                    <Link
                      to={`/businesses/${category.urlSlug || category.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-earth hover:text-earth-light font-semibold uppercase tracking-wider"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
