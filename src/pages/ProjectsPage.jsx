import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, CheckSquare } from 'lucide-react';
import { projectsData } from '../data/siteData';
import EditorialImage from '../components/EditorialImage';

export default function ProjectsPage({ onOpenContact }) {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const filterOptions = ['ALL', 'ENERGY & AUDITS', 'ELECTRIC VEHICLES', 'CORPORATE TRAINING'];

  const filteredProjects =
    selectedFilter === 'ALL'
      ? projectsData
      : projectsData.filter((p) => p.industry.toUpperCase().includes(selectedFilter.replace('& AUDITS', '')));

  return (
    <div className="bg-paper-warm min-h-screen py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-charcoal/15 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              VERIFIABLE DELIVERIES & CASE STUDIES
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-forest-deep mt-2">
              Selected Work
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl">
              Concrete engineering deliverables across captive solar arrays, statutory industrial energy audits, electric vehicle platform deployments, and corporate capability programs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedFilter(opt)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors border whitespace-nowrap ${
                  selectedFilter === opt
                    ? 'bg-forest text-paper border-forest'
                    : 'bg-paper text-charcoal/70 border-charcoal/15 hover:border-charcoal/40'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-paper border border-charcoal/15 flex flex-col justify-between group hover:border-forest-deep transition-all duration-300"
            >
              <div>
                <EditorialImage
                  src={project.image}
                  alt={project.title}
                  domain={project.industry}
                  caption={`${project.location} (${project.year})`}
                  aspectRatio="aspect-[16/10]"
                />

                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs font-mono text-charcoal/60 mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-earth" /> {project.location}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-earth" /> {project.year}</span>
                  </div>

                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-forest-deep leading-snug">
                    {project.title}
                  </h2>

                  <div className="mt-6 pt-5 border-t border-charcoal/10 space-y-4">
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-charcoal/50 font-semibold">
                        Technical Scope & Engineering Execution
                      </p>
                      <p className="text-xs sm:text-sm text-charcoal/80 mt-1 leading-relaxed">
                        {project.scope}
                      </p>
                    </div>

                    <div className="bg-paper-warm p-4 border border-charcoal/10">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-leaf-dark font-bold flex items-center gap-1.5">
                        <CheckSquare className="w-3.5 h-3.5" />
                        Quantifiable Outcome & Impact
                      </p>
                      <p className="text-xs sm:text-sm text-charcoal/90 mt-1 font-medium leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => onOpenContact(`Inquiry on Project: ${project.title}`)}
                  className="w-full py-3 border border-charcoal/20 hover:border-forest hover:bg-forest hover:text-paper text-forest-deep font-heading text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-150"
                >
                  <span>Inquire on Similar Project Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Data Integrity */}
        <div className="mt-14 p-6 bg-paper border border-charcoal/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-charcoal/60">
          <span>* EnVERT Group adheres to strict confidentiality agreements. Proprietary industrial blueprints and telemetry details are protected under NDA.</span>
          <span className="text-forest font-bold">ALL DATA VERIFIED BY ACCREDITED ENGINEERS</span>
        </div>

      </div>
    </div>
  );
}
