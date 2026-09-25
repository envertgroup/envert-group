import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { insightsData } from '../data/siteData';

export default function Insights() {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-paper border-b border-charcoal/15">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-charcoal/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-earth inline-block rounded-xs"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
                RESEARCH & DISSEMINATION
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight-editorial text-forest-deep">
              From The Group
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 font-mono text-xs text-charcoal/60 max-w-sm">
            Technical perspectives, engineering whitepapers, and editorial monographs published by EnVERT institutions.
          </p>
        </div>

        {/* 3 Editorial Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((item, idx) => (
            <article
              key={item.id}
              className="border-t-2 border-forest-deep pt-6 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-charcoal/50 mb-3">
                  <span className="uppercase tracking-wider text-earth font-semibold">{item.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.readTime}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-forest-deep group-hover:text-earth transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal/10 flex items-center justify-between">
                <span className="text-xs font-mono text-charcoal/50">
                  {item.author}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-forest-deep group-hover:text-earth transition-colors">
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Publishing House Note */}
        <div className="mt-14 p-6 bg-forest-deep text-paper flex flex-col md:flex-row md:items-center justify-between gap-6 border border-paper/10">
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-earth shrink-0 mt-1" />
            <div>
              <h4 className="font-heading text-lg font-bold text-paper">
                Pen & Ink Publishing House
              </h4>
              <p className="text-xs text-paper/70 mt-1 max-w-xl">
                An active division of EnVERT Group publishing academic monographs, conference proceedings, and cultural literature. Accepting peer submissions for upcoming volumes.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 border border-earth text-earth-light hover:bg-earth hover:text-forest-dark font-heading text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            Submit Research / Manuscript
          </a>
        </div>

      </div>
    </section>
  );
}
