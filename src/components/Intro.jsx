import React, { useState } from 'react';
import { ArrowRight, Layers, ShieldCheck, Compass, CheckCircle2, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Intro() {
  const pillars = [
    {
      num: '01',
      title: 'ENGINEERING & MOBILITY',
      desc: 'Clean power generation, statutory industrial energy compliance, and commercial electric transport under national frameworks.',
      disciplines: ['Solar PV & Biomass CHP (NRG India)', 'Commercial E-Vehicles & Powertrains', 'BEE Certified Industrial Audits', 'NAAC Higher Education Green Audits'],
      icon: Layers,
    },
    {
      num: '02',
      title: 'ADVISORY & CAPABILITY',
      desc: 'Multinational workforce training, executive communication, techno-commercial feasibility, and ESG advisory.',
      disciplines: ['ICST Global Corporate Training', 'Linguistic & Accent Conditioning', 'Applied Research & IP Advisory', 'Executive Curriculum Development'],
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'KNOWLEDGE & LIVING',
      desc: 'International book publishing, intellectual periodicals, social ecology foundations, and cultural platforms.',
      disciplines: ['Pen & Ink Publishers (Afield Touriosity)', 'Curiosity Kid & Writing Awards', 'The Touriosity & Glare Post Media', 'EnVERT Foundation & Wellness Initiatives'],
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-paper border-b border-charcoal/15 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Eyebrow & Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-10 border-b border-charcoal/10 gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-forest-deep rounded-full"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/70 font-semibold">
              ABOUT EnVERT GROUP
            </span>
          </div>
          <div className="font-mono text-xs text-earth uppercase tracking-wider font-medium">
            Kolkata, India • Truly Multidisciplinary Group Working Across 11 Markets
          </div>
        </div>

        {/* Editorial Statement Layout: Asymmetrical grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-forest-deep leading-[1.08] tracking-tight-editorial">
              A truly multidisciplinary engineering, advisory, design, consultancy and publishing group.
            </h2>

            <div className="mt-8 space-y-4 text-base sm:text-lg text-charcoal/80 leading-relaxed font-normal">
              <p>
                <strong>EnVERT® Group</strong> is an integrated corporate institution operating across the eleven essential markets of modern enterprise: from clean power grids, environmental engineering, and electric mobility to commercial architecture, advisory, manufacturing, and international publishing.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70">
                Operating directly through focused legal entities and dedicated platforms—including <strong>NRG India</strong> (Nandi Resources Generation Technology Pvt. Ltd.), <strong>EnVERT E-Vehicles Private Limited</strong>, <strong>ICST Global</strong>, and <strong>Pen & Ink Publishers</strong> (Afield Touriosity Pvt. Ltd.)—we bridge rigorous thermodynamic and electrical practice with strategic management and cultural stewardship.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <div className="bg-paper-warm border border-charcoal/15 p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-forest-deep">
                <Building2 className="w-5 h-5 text-earth" />
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight">Our Multidisciplinary Charter</h3>
              </div>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                We combine physical systems (clean energy, electric powertrains, MEP architecture, lighting hardware) with institutional advisory, management consulting, and intellectual publishing across domestic and overseas corridors.
              </p>
              
              <div className="pt-4 border-t border-charcoal/10 space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-charcoal/80">
                  <CheckCircle2 className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                  <span><strong>Turnkey Physical Delivery:</strong> Solar PV, biomass CHP, energy efficiency & EV manufacturing.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-charcoal/80">
                  <CheckCircle2 className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                  <span><strong>Audits & Standards:</strong> Statutory BEE audits, NAAC campus assessments, and ECBC/MEP compliance.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-charcoal/80">
                  <CheckCircle2 className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                  <span><strong>Advisory & Knowledge:</strong> Strategic management consulting, corporate training, and book publishing.</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/about"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Read Full Corporate Profile & Governance</span>
                  <ArrowRight className="w-3.5 h-3.5 text-earth-light" />
                </Link>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between px-2">
              <span className="font-mono text-xs uppercase tracking-wider text-earth font-medium">
                The 11 Operating Markets
              </span>
              <a
                href="#businesses"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-forest-deep hover:text-earth transition-colors"
              >
                <span>Working Across The Eleven Markets</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Three Pillar Cards with Restrained Editorial Border Framing */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-paper-warm border border-charcoal/15 p-8 flex flex-col justify-between hover:border-forest transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-charcoal/10 mb-6">
                    <span className="font-mono text-xs text-charcoal/40 font-semibold">{pillar.num}</span>
                    <Icon className="w-4 h-4 text-earth" />
                  </div>
                  
                  <h3 className="font-heading text-lg font-bold text-forest-deep tracking-tight">
                    {pillar.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-charcoal/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-charcoal/10">
                  <p className="font-mono text-[10.5px] uppercase tracking-wider text-charcoal/50 mb-2">
                    Operating Domains
                  </p>
                  <ul className="space-y-1.5">
                    {pillar.disciplines.map((d) => (
                      <li key={d} className="text-xs text-charcoal/80 flex items-center gap-2">
                        <span className="w-1 h-1 bg-leaf rounded-full"></span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
