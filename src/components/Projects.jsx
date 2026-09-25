import React from 'react';
import { ArrowRight, MapPin, Calendar, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/siteData';
import EditorialImage from './EditorialImage';

export default function Projects({ onOpenContact }) {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-paper-warm border-b border-charcoal/15">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header with Editorial Headline & Direct Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-charcoal/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-earth inline-block rounded-xs"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
                VERIFIABLE TRACK RECORD
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight-editorial text-forest-deep">
              Selected Work
            </h2>
            <p className="mt-3 text-sm text-charcoal/70 max-w-lg">
              Demonstrating what EnVERT has engineered and delivered across industrial and urban geographies.
            </p>
          </div>
        </div>

        {/* Project Grid (1 Row: 3 Projects) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-paper border border-charcoal/15 flex flex-col justify-between group hover:border-forest-deep transition-all duration-300"
            >
              <div>
                {/* Visual with Editorial Blueprint Fallback */}
                <EditorialImage
                  src={project.image}
                  alt={project.title}
                  domain={project.industry}
                  caption={`${project.location} (${project.year})`}
                  aspectRatio="aspect-[16/10]"
                />

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs font-mono text-charcoal/60 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-earth" />
                      {project.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-earth" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-forest-deep leading-snug group-hover:text-earth transition-colors">
                    {project.title}
                  </h3>

                  <div className="mt-4 pt-4 border-t border-charcoal/10 space-y-3">
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-charcoal/50 font-medium">
                        Scope
                      </p>
                      <p className="text-xs text-charcoal/80 mt-1 leading-relaxed">
                        {project.scope}
                      </p>
                    </div>

                    <div className="bg-paper-warm p-3 border border-charcoal/10">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-leaf-dark font-medium flex items-center gap-1.5">
                        <CheckSquare className="w-3 h-3" />
                        Outcome
                      </p>
                      <p className="text-xs text-charcoal/90 mt-1 font-medium">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 border border-charcoal/20 hover:border-forest hover:bg-forest hover:text-paper text-forest-deep font-heading text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-150"
                >
                  <span>Inquire for Similar Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button opening dedicated /projects page */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="px-6 py-3 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold rounded-xs transition-all duration-200 inline-flex items-center gap-2 shadow-xs hover:shadow-md hover:translate-x-0.5"
          >
            <span>View More Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>



      </div>
    </section>
  );
}
