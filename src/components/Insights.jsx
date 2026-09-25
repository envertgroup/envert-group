import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { insightsData } from '../data/siteData';

export default function Insights() {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-paper border-b border-charcoal/15">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-charcoal/10 gap-4">
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

          <Link
            to="/insights"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-paper hover:bg-forest text-forest-deep hover:text-paper border border-charcoal/20 hover:border-forest text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 rounded-xs shadow-xs group shrink-0"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
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

      </div>
    </section>
  );
}
