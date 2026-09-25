import React from 'react';
import { ArrowRight, BookOpen, Clock, ExternalLink } from 'lucide-react';
import { insightsData } from '../data/siteData';

export default function InsightsPage({ onOpenContact }) {
  return (
    <div className="bg-paper-warm min-h-screen py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="pb-8 mb-16 border-b border-charcoal/15">
          <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
            EDITORIAL PERSPECTIVES & MONOGRAPHS
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-forest-deep mt-2">
            Insights From The Group
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl">
            Thought leadership, technical analysis, and research perspectives generated across EnVERT’s clean energy, electric transit, and publishing divisions.
          </p>
        </div>

        {/* Featured Pen & Ink Banner */}
        <div className="mb-16 p-8 sm:p-10 bg-forest-deep text-paper border border-paper/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-xs text-earth uppercase font-bold tracking-wider">
              PUBLISHING HOUSE SPOTLIGHT
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-paper">
              Pen & Ink Publishers & The Curiosity Writing Awards
            </h2>
            <p className="text-xs sm:text-sm text-paper/80 leading-relaxed max-w-2xl">
              Celebrating over seven years of international publishing for <em>Curiosity Kids</em> magazine with global distribution on Amazon in paperback and Kindle. Pen & Ink publishes peer-reviewed research monographs, sustainable energy journals, and annual youth anthologies.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="https://www.envertgroup.com/pen-ink"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-earth hover:bg-earth-light text-forest-deep font-heading text-xs uppercase tracking-wider font-bold transition-colors text-center inline-flex items-center justify-center gap-1.5"
            >
              <span>Explore Pen & Ink Books</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => onOpenContact('Publishing Manuscript Submission')}
              className="px-5 py-3 border border-paper/20 hover:border-earth text-xs font-mono uppercase text-paper transition-colors text-center"
            >
              Submit Manuscript
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((item) => (
            <article
              key={item.id}
              className="bg-paper border border-charcoal/15 p-8 flex flex-col justify-between group hover:border-forest-deep transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-charcoal/50 mb-3 pb-3 border-b border-charcoal/10">
                  <span className="uppercase tracking-wider text-earth font-bold">{item.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-charcoal/40" />
                    {item.readTime}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-forest-deep group-hover:text-earth transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-charcoal/50">
                  {item.author}
                </span>
                <span className="text-xs font-heading font-bold text-forest-deep group-hover:text-earth transition-colors uppercase tracking-wider flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
