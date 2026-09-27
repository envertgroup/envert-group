import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, ExternalLink } from 'lucide-react';
import EditorialImage from './EditorialImage';
import { images } from '../data/image.js';

export default function FeaturedCapability({ onInquire }) {
  const [activeTab, setActiveTab] = useState('mobility');

  const capabilities = {
    mobility: {
      tag: 'Commercial Electric Mobility',
      title: 'EnVERT E-Vehicles Pvt. Ltd.',
      subheading: 'Future of Transportation is Electric Vehicle.',
      description: 'Under the national FAME India framework, EnVERT E-Vehicles Private Limited engineers commercial and transit fleet solutions. We focus on electric vehicle weight reduction, powertrain cost reduction, battery technology integration, and robust charging depot infrastructure connected with regional DISCOMs.',
      image: images.transport_hero,
      stats: [
        { label: 'Fleet Viability Assessment', val: '100% Data-Driven' },
        { label: 'Vehicle Series', val: 'Mono, Duex, Trois' },
        { label: 'Direct Technical Desk', val: '+91 9836511995' },
      ],
      highlights: [
        'EnVERT Mono-PN: Compact urban and personal mobility platform',
        'EnVERT Duex-PM: Commercial cargo and industrial logistics carrier',
        'EnVERT Trois-PP: Heavy-duty passenger and three-wheeler fleet series',
        'Charging depot substation sizing & DISCOM grid load coordination'
      ],
      contactPhone: '+91 9836511995',
      contactEmail: 'envertev@gmail.com'
    },
    energy: {
      tag: 'Clean Energy & Industrial Audits',
      title: 'NRG INDIA',
      subheading: 'Statutory energy management & turnkey clean power systems.',
      description: 'NRG India leads EnVERT Group’s clean power engineering and statutory Bureau of Energy Efficiency (BEE) audits. Serving heavy industries—including steel plants, foundries, iron complexes, and pharmaceuticals—alongside NAAC university green audits and USGBC/IGBC certifications.',
      image: images.energy_hero,
      stats: [
        { label: 'Statutory Audits', val: 'BEE Certified' },
        { label: 'Industrial Verticals', val: 'Steel, Iron, Pharma' },
        { label: 'Campus Certifications', val: 'NAAC / IGBC' },
      ],
      highlights: [
        'Industrial energy audits for steel, iron, foundry & casting facilities',
        'NAAC institutional & college green audits for university accreditation',
        'ECBC compliance, HVAC load optimization & computerized energy modeling',
        'Commercial solar PV rooftop installations & biomass co-generation'
      ],
      contactEmail: 'admin@envertgroup.com',
      externalUrl: 'http://www.nrgindia.com'
    }
  };

  const current = capabilities[activeTab];

  return (
    <section className="py-20 lg:py-28 bg-paper-warm border-b border-charcoal/15">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Toggle between two key featured practices */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 border-b border-charcoal/10 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-leaf inline-block rounded-xs"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
              ENGINEERING SPOTLIGHT
            </span>
          </div>

          <div className="inline-flex p-1 bg-paper border border-charcoal/15 rounded-xs">
            <button
              onClick={() => setActiveTab('mobility')}
              className={`px-4 py-1.5 text-xs font-heading font-semibold uppercase tracking-wider transition-colors rounded-xs ${
                activeTab === 'mobility'
                  ? 'bg-forest text-paper shadow-sm'
                  : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              EnVERT E-Vehicles
            </button>
            <button
              onClick={() => setActiveTab('energy')}
              className={`px-4 py-1.5 text-xs font-heading font-semibold uppercase tracking-wider transition-colors rounded-xs ${
                activeTab === 'energy'
                  ? 'bg-forest text-paper shadow-sm'
                  : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              NRG India (Energy & Audits)
            </button>
          </div>
        </div>

        {/* Feature Hero Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs text-earth uppercase tracking-widest font-semibold mb-3">
                {current.tag}
              </p>
              
              <h3 className="font-heading text-2xl sm:text-4xl font-bold uppercase tracking-tight-editorial text-forest-deep leading-[1.05]">
                {current.title}
              </h3>
              
              <p className="mt-4 text-base font-heading font-semibold text-charcoal/90">
                {current.subheading}
              </p>

              <p className="mt-4 text-sm text-charcoal/75 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Engineering Highlights */}
              <div className="mt-6 pt-6 border-t border-charcoal/10 space-y-2.5">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal/80">
                    <span className="w-1.5 h-1.5 bg-leaf rounded-full shrink-0 mt-1.5"></span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-8 pt-6 border-t border-charcoal/10 grid grid-cols-3 gap-4">
              {current.stats.map((s, idx) => (
                <div key={idx}>
                  <p className="font-mono text-sm sm:text-base font-bold text-forest-deep truncate">{s.val}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-charcoal/50 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
              >
                <span>Consult On {activeTab === 'mobility' ? 'E-Vehicles' : 'NRG Energy'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-earth-light" />
              </a>

              {current.externalUrl && (
                <a
                  href={current.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 border border-charcoal/20 hover:border-forest text-xs font-mono uppercase text-forest-deep transition-colors"
                >
                  <span>Visit Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-earth" />
                </a>
              )}
            </div>
          </div>

          {/* Right Photographic Visual */}
          <div className="lg:col-span-7">
            <EditorialImage
              key={activeTab}
              src={current.image}
              alt={current.title}
              domain={activeTab === 'mobility' ? 'E-VEHICLES SPEC' : 'NRG INDIA SPEC'}
              caption={activeTab === 'mobility' ? 'FAME India Scheme • Mono, Duex & Trois Platforms' : 'BEE Certified Audits • Steel, Power, Pharma & NAAC'}
              aspectRatio="aspect-[16/11]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
