import React from 'react';
import { ArrowRight, Layers, ShieldCheck, Compass } from 'lucide-react';

export default function Intro() {
  const pillars = [
    {
      num: '01',
      title: 'ENGINEERING',
      desc: 'Physical systems, clean energy generation, environmental compliance, and commercial electric mobility platforms.',
      disciplines: ['Solar & Bio-energy', 'Environmental Sciences', 'High-Performance Buildings', 'Commercial E-Mobility'],
      icon: Layers,
    },
    {
      num: '02',
      title: 'ADVISORY',
      desc: 'Executive management consulting, techno-commercial feasibility, ESG governance, and specialized technical training.',
      disciplines: ['Corporate Sustainability', 'Management Advisory', 'Linguistic Competencies', 'Technical Certifications'],
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'KNOWLEDGE',
      desc: 'Curated publishing houses, peer-reviewed monographs, travel literature platforms, and social impact foundation initiatives.',
      disciplines: ['Pen & Ink Publishing', 'Touriosity Media', 'EnVERT Foundation', 'Applied Research Papers'],
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-paper border-b border-charcoal/15">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 pb-4 mb-8 border-b border-charcoal/10">
          <span className="w-1.5 h-1.5 bg-forest-deep rounded-full"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
            WHO WE ARE
          </span>
        </div>

        {/* Editorial Statement Layout: Asymmetrical grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-forest-deep leading-[1.08] tracking-tight-editorial">
              A multidisciplinary group working across industries that shape the future.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-normal">
              From energy and environmental services to electric mobility, infrastructure, advisory and publishing, EnVERT brings together different disciplines under one group.
            </p>
            <p className="mt-4 text-sm text-charcoal/65 leading-relaxed font-normal">
              Headquartered in Kolkata and operating across regional and national industrial corridors, we bridge rigorous engineering practice with strategic foresight and knowledge dissemination.
            </p>

            <div className="mt-8 pt-6 border-t border-charcoal/10 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-earth-muted font-medium">
                Established Framework
              </span>
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-forest-deep hover:text-earth transition-colors"
              >
                <span>View Group Structure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Three Pillar Cards with Restrained Editorial Border Framing (0-8px radius, no 32px bubbles) */}
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
                  
                  <h3 className="font-heading text-xl font-bold text-forest-deep tracking-tight">
                    {pillar.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-charcoal/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-charcoal/10">
                  <p className="font-mono text-[10.5px] uppercase tracking-wider text-charcoal/50 mb-2">
                    Key Disciplines
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
