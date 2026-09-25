import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ecosystemData } from '../data/siteData';

export default function Ecosystem() {
  const brandProfiles = [
    {
      name: 'NRG India',
      category: 'Energy Systems & BEE Industrial Audits',
      logo: '/assets/scraped_images/energy/NRGINDIA-logo.png',
      summary: 'Turnkey clean power, commercial solar PV, biomass systems, and statutory energy audits for steel, iron, foundries, pharma, and NAAC university campuses.',
      status: 'Operating Entity',
      internalUrl: '/businesses/energy',
      externalUrl: 'http://www.nrgindia.com',
      tags: ['Solar PV', 'BEE Audits', 'Steel & Foundry', 'NAAC Audits']
    },
    {
      name: 'EnVERT E-Vehicles Pvt. Ltd.',
      category: 'Electric Mobility & Fleet Engineering',
      logo: '/assets/logos/envert_group_logo.png',
      summary: 'Design, manufacturing, and marketing of electric cars, 3-wheelers, e-cycles, and charging depot infrastructures under FAME India guidelines.',
      status: 'Private Limited Entity',
      internalUrl: '/businesses/transport-electric',
      tags: ['Mono-PN', 'Duex-PM', 'Trois-PP', 'Charging Depots']
    },
    {
      name: 'ICST Global',
      category: 'Corporate Training & Language Engineering',
      logo: '/assets/scraped_images/home/ICST-logo.png',
      summary: 'Over 15 years experience training more than 30 Multinational Corporations across 20+ Indian and international languages with measured productivity ROI.',
      status: 'Training Division',
      internalUrl: '/businesses/icst',
      externalUrl: 'http://www.icstglobal.com',
      tags: ['20+ Languages', 'Voice & Accent', '30+ MNCs', 'Executive Comm']
    },
    {
      name: 'Glare Post',
      category: 'Digital Perspectives & Investigative Journalism',
      logo: '/assets/scraped_images/home/glarepost_logo.png',
      summary: 'Independent online commentary and analytical journal dedicated to clean transition policies, industrial decarbonization, and investigative ESG reporting.',
      status: 'Digital Portal',
      internalUrl: '/businesses/glarepost',
      externalUrl: 'https://www.glarepost.com',
      tags: ['Perspectives', 'Policy Analysis', 'ESG Journalism']
    },
    {
      name: 'Pen & Ink Publishers',
      category: 'Publishing & Editorial House',
      logo: '/assets/scraped_images/home/pen_and_ink_logo.png',
      summary: 'Publisher of Curiosity Kids magazine (7+ years, Amazon global distribution), Sustainable Energy Review, and host of Curiosity Writing Awards.',
      status: 'Publishing House',
      internalUrl: '/businesses/pen-ink',
      tags: ['Curiosity Kids', 'Energy Review', 'Anthologies', 'Amazon Global']
    },
    {
      name: 'EnVERT Foundation',
      category: 'Ecological & Social Stewardship',
      logo: '/assets/scraped_images/home/envert_foundation_logo.png',
      summary: 'Non-profit arm directing community reforestation, regional environmental literacy, youth STEM awards, and applied scholarships.',
      status: 'Non-Profit Initiative',
      internalUrl: '/businesses/envert-foundation',
      tags: ['Community Ecology', 'Tree Drives', 'Literacy']
    },
    {
      name: 'Atmaja',
      category: 'Sustainable Fashion & Handcrafted Living',
      logo: '/assets/scraped_images/fashion-lifestyle/atmaja_logo.png',
      summary: 'Ethical slow fashion and handcrafted lifestyle brand celebrating handloom traditions, organic cotton, zero-waste design, and artisan empowerment.',
      status: 'Conscious Brand',
      internalUrl: '/businesses/fashion-lifestyle',
      tags: ['Slow Fashion', 'Handloom', 'Artisan Livelihood']
    },
    {
      name: 'EnVERT Agro Food',
      category: 'Sustainable Agriculture & Food Processing',
      logo: '/assets/scraped_images/home/envert_agro_food_logo.png',
      summary: 'Regenerative farming, solar-assisted food processing, and fair-value cooperative models advancing sustainable rural food supply chains.',
      status: 'Agro Division',
      internalUrl: '/businesses/envert-agro-food',
      tags: ['Organic Farming', 'Solar Cold Storage', 'Clean Food']
    }
  ];

  return (
    <section id="ecosystem" className="py-20 lg:py-28 bg-paper border-b border-charcoal/15">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-charcoal/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-earth inline-block rounded-xs"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
                GROUP ARCHITECTURE
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight-editorial text-forest-deep">
              The EnVERT Ecosystem
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 font-mono text-xs text-charcoal/60 max-w-sm">
            Not a disjointed catalogue, but an interdependent matrix of engineering, corporate advisory, published knowledge, and community stewardship.
          </p>
        </div>

        {/* Authentic Group Brand Ticker / Logos Row */}
        <div className="mb-14 p-6 bg-paper-warm border border-charcoal/10 rounded-xs">
          <p className="text-[10.5px] font-mono uppercase tracking-widest text-charcoal/50 mb-4 font-semibold text-center sm:text-left">
            OFFICIAL GROUP ENTITIES & REGISTERED TRADEMARKS
          </p>
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
            <img src="/assets/logos/envert_group_logo.png" alt="EnVERT Group" className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100" />
            <img src="/assets/scraped_images/energy/NRGINDIA-logo.png" alt="NRG India" className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100" />
            <img src="/assets/scraped_images/home/ICST-logo.png" alt="ICST Global" className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100" />
            <img src="/assets/scraped_images/home/glarepost_logo.png" alt="Glare Post" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100" />
            <img src="/assets/scraped_images/home/pen_and_ink_logo.png" alt="Pen & Ink" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100" />
            <img src="/assets/scraped_images/home/curiosity_logo.png" alt="Curiosity Kids" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100" />
            <img src="/assets/scraped_images/home/envert_foundation_logo.png" alt="EnVERT Foundation" className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100" />
            <img src="/assets/scraped_images/fashion-lifestyle/atmaja_logo.png" alt="Atmaja" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100" />
          </div>
        </div>

        {/* 4 Core Architectural Pillars (Editorial Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16 border-b border-charcoal/10">
          {ecosystemData.pillars.map((pillar) => (
            <div key={pillar.category} className="p-6 bg-paper-warm border border-charcoal/15 space-y-4 rounded-xs">
              <div className="pb-3 border-b border-charcoal/15">
                <span className="font-mono text-[10px] text-earth uppercase font-semibold tracking-wider">
                  PILLAR DOMAIN
                </span>
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-forest-deep mt-1">
                  {pillar.category}
                </h3>
              </div>
              <p className="text-xs text-charcoal/75 leading-relaxed font-sans">
                {pillar.description}
              </p>
              <div className="pt-2">
                <p className="font-mono text-[10px] uppercase tracking-wider text-charcoal/50 mb-2 font-medium">
                  Operating Competencies
                </p>
                <div className="space-y-1">
                  {pillar.domains.map((dom) => (
                    <div key={dom} className="text-xs text-charcoal/80 flex items-center gap-2 font-mono">
                      <span className="text-leaf">•</span>
                      <span>{dom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Company Cards (Authentic Entities Scraped from Live Site) */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
                OPERATING BRANDS & PLATFORMS
              </p>
              <h4 className="font-heading text-xl sm:text-2xl font-bold text-forest-deep tracking-tight mt-1">
                Affiliated Operating Companies & Publications
              </h4>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-charcoal/50">
              AUTHENTIC GROUP ENTITIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandProfiles.map((brand) => (
              <div
                key={brand.name}
                className="bg-paper-warm border border-charcoal/15 p-6 flex flex-col justify-between hover:border-forest-deep transition-all duration-200 group rounded-xs shadow-xs"
              >
                <div>
                  
                  {/* Status */}
                  <div className="flex items-center justify-between pb-3 border-b border-charcoal/10 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 bg-paper px-2 py-0.5 border border-charcoal/10">
                      {brand.status}
                    </span>
                  </div>

                  {/* Authentic Logo */}
                  {brand.logo && (
                    <div className="mb-4 h-12 bg-white p-2 border border-charcoal/10 inline-flex items-center rounded-xs">
                      <img src={brand.logo} alt={brand.name} className="max-h-full max-w-[140px] object-contain" />
                    </div>
                  )}

                  <h5 className="font-heading text-lg font-bold text-forest-deep">
                    {brand.name}
                  </h5>

                  <p className="text-[11px] font-mono text-leaf-dark mt-0.5 font-semibold uppercase">
                    {brand.category}
                  </p>

                  <p className="text-xs text-charcoal/70 mt-3 leading-relaxed">
                    {brand.summary}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {brand.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 bg-paper text-charcoal/70 border border-charcoal/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-charcoal/10 flex items-center justify-between">
                  <Link
                    to={brand.internalUrl}
                    className="text-xs font-heading font-semibold uppercase tracking-wider text-forest-deep hover:text-earth flex items-center gap-1 transition-colors"
                  >
                    <span>View Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {brand.externalUrl && (
                    <a
                      href={brand.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-charcoal/40 hover:text-forest transition-colors"
                      title="External Portal"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
