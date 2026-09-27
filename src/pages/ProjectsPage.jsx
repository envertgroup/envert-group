import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, CheckSquare, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/siteData';
import EditorialImage from '../components/EditorialImage';
import SEO from '../components/SEO';
import { getProjectsPageSchema } from '../data/seoData';

export default function ProjectsPage({ onOpenContact }) {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const filterOptions = [
    'ALL',
    'SOLAR & DC SYSTEMS',
    'SMART CONTROLS & IOT',
    'ENERGY & GREEN AUDITS',
    'STORAGE & ADVANCED RENEWABLES',
    'SPECIALTY CHEMICALS & REPOXISY',
    'FLEET & MOBILITY',
    'CORPORATE PPA & ADVISORY'
  ];

  const filteredProjects =
    selectedFilter === 'ALL'
      ? projectsData
      : projectsData.filter((p) => {
          const combined = `${p.category || ''} ${p.industry || ''} ${p.vertical || ''} ${p.title || ''}`.toUpperCase();
          if (selectedFilter === 'SOLAR & DC SYSTEMS') {
            return combined.includes('SOLAR') || combined.includes('DC') || combined.includes('BVCM');
          }
          if (selectedFilter === 'SMART CONTROLS & IOT') {
            return combined.includes('WAGSOL') || combined.includes('CCU') || combined.includes('CONTROLS');
          }
          if (selectedFilter === 'ENERGY & GREEN AUDITS') {
            return combined.includes('AUDIT');
          }
          if (selectedFilter === 'STORAGE & ADVANCED RENEWABLES') {
            return combined.includes('STORAGE') || combined.includes('BESS') || combined.includes('HYDROGEN') || combined.includes('BIOENERGY') || combined.includes('WIND') || combined.includes('HYBRID');
          }
          if (selectedFilter === 'SPECIALTY CHEMICALS & REPOXISY') {
            return combined.includes('EPOXY') || combined.includes('REPOXISY') || combined.includes('CHEMICAL');
          }
          if (selectedFilter === 'FLEET & MOBILITY') {
            return combined.includes('FLEET') || combined.includes('VEHICLE') || combined.includes('MOBILITY') || combined.includes('GRAPHIC');
          }
          if (selectedFilter === 'CORPORATE PPA & ADVISORY') {
            return combined.includes('PPA') || combined.includes('CARBON') || combined.includes('ADVISORY') || combined.includes('TRAINING');
          }
          return combined.includes(selectedFilter);
        });

  return (
    <div className="bg-paper-warm min-h-screen py-16 lg:py-24">
      <SEO
        title="New & Emerging Business Verticals & Verifiable Deliveries | EnVERT Group"
        description="Explore Nandi Resources & EnVERT Group's emerging verticals: BVCM/BVZI solar systems, WAGSOL CCU controls, lithium BESS storage, REPOXISY polyamine epoxy, BEE casting audits, green audits, and corporate PPAs."
        canonical="/projects"
        schema={getProjectsPageSchema(projectsData)}
      />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-16 border-b border-charcoal/15 gap-6">
          <div>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-forest-deep">
              Selected Work & Verticals
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
              Explore the strategic evolution of Nandi Resources (NRG India) and EnVERT Group across integrated solar technology, smart CCU controls, specialised railway/industrial DC systems, polyamine epoxy flooring, BEE energy audits, and corporate PPAs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 max-w-xl">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedFilter(opt)}
                className={`px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase transition-colors border whitespace-nowrap rounded-xs ${
                  selectedFilter === opt
                    ? 'bg-forest text-paper border-forest font-bold shadow-xs'
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
              className="bg-paper border border-charcoal/15 flex flex-col justify-between group hover:border-forest-deep transition-all duration-300 rounded-xs shadow-xs hover:shadow-md"
            >
              <div>
                <EditorialImage
                  src={project.image}
                  alt={project.title}
                  domain={project.industry}
                  caption={`${project.location} (${project.year})`}
                  aspectRatio="aspect-[16/10]"
                />

                <div className="p-7 sm:p-8">
                  {/* Category & Vertical Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-earth font-bold bg-earth/10 px-2 py-0.5 rounded-xs border border-earth/20">
                      {project.vertical || project.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-mono text-charcoal/60">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-earth" /> {project.location}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-earth" /> {project.year}</span>
                    </div>
                  </div>

                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-forest-deep leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-xs font-mono text-charcoal/50 mt-1 uppercase">
                    Division: <span className="font-semibold text-charcoal/70">{project.division || project.client}</span>
                  </p>

                  <div className="mt-5 pt-4 border-t border-charcoal/10 space-y-4">
                    <div>
                      <p className="text-[10.5px] font-mono uppercase tracking-wider text-charcoal/50 font-semibold">
                        Technical Scope & Engineering Execution
                      </p>
                      <p className="text-xs sm:text-sm text-charcoal/80 mt-1 leading-relaxed">
                        {project.scope}
                      </p>
                    </div>

                    <div className="bg-paper-warm p-4 border border-charcoal/10 rounded-xs">
                      <p className="text-[10.5px] font-mono uppercase tracking-wider text-leaf-dark font-bold flex items-center gap-1.5">
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

              <div className="p-7 sm:p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenContact(`Inquiry on Project: ${project.title}`)}
                  className="flex-1 py-3 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-150 rounded-xs"
                >
                  <span>Inquire on Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 border border-charcoal/20 hover:border-forest text-forest font-heading text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors rounded-xs"
                  >
                    <span>Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Data Integrity & Strategic Evolution */}
        <div className="mt-14 p-6 bg-paper border border-charcoal/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-charcoal/60 rounded-xs">
          <span>* Nandi Resources Generation Technology Pvt. Ltd. & EnVERT Group adhere to strict statutory disclosures. Operational data verifiable on corporate request.</span>
          <span className="text-forest font-bold uppercase tracking-wider shrink-0">BEE CERTIFIED & ISO COMPLIANT EXECUTION</span>
        </div>

      </div>
    </div>
  );
}
