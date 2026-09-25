import React from 'react';
import { ArrowUpRight, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ecosystemData } from '../data/siteData';

export default function Ecosystem() {

  // 14 Official Registered Group Entities & Trademarks
  const allBrands = [
    {
      name: "EnVERT Group",
      sector: "Parent Corporate",
      logo: "/assets/logos/envert_group_logo.png",
      url: "/about"
    },
    {
      name: "The Touriosity",
      sector: "Travel & Heritage Magazine",
      logo: "/assets/scraped_images/home/touriosity_logo.png",
      url: "/businesses/publication"
    },
    {
      name: "NRG India",
      sector: "Energy & BEE Audits",
      logo: "/assets/scraped_images/energy/NRGINDIA-logo.png",
      url: "/businesses/energy"
    },
    {
      name: "ICST Global",
      sector: "Corporate Training",
      logo: "/assets/scraped_images/home/ICST-logo.png",
      url: "/businesses/icst"
    },
    {
      name: "Glare Post",
      sector: "Digital Journalism",
      logo: "/assets/scraped_images/home/glarepost_logo.png",
      url: "/glarepost"
    },
    {
      name: "EnVERT E-Vehicles",
      sector: "Commercial EV Systems",
      logo: "/assets/logos/envert_group_logo.png",
      url: "/businesses/transport-electric"
    },
    {
      name: "Pen & Ink Publishers",
      sector: "Publishing & Awards",
      logo: "/assets/scraped_images/home/pen_and_ink_logo.png",
      url: "/businesses/pen-ink"
    },
    {
      name: "Curiosity Kids",
      sector: "Children's Magazine",
      logo: "/assets/scraped_images/home/curiosity_logo.png",
      url: "/businesses/publication"
    },
    {
      name: "Sustainable Energy Review",
      sector: "Trade Journal",
      logo: "/assets/scraped_images/home/sustainable_energy_review_logo.png",
      url: "/businesses/publication"
    },
    {
      name: "EnVERT Foundation",
      sector: "Social Stewardship",
      logo: "/assets/scraped_images/home/envert_foundation_logo.png",
      url: "/businesses/envert-foundation"
    },
    {
      name: "Atmaja",
      sector: "Sustainable Fashion",
      logo: "/assets/scraped_images/fashion-lifestyle/atmaja_logo.png",
      url: "/businesses/fashion-lifestyle"
    },
    {
      name: "Afield Gallery",
      sector: "Contemporary Art",
      logo: "/assets/scraped_images/home/afield_logo.png",
      url: "/businesses/afield-gallery"
    },
    {
      name: "EnVERT Agro Food",
      sector: "Agro & Food Processing",
      logo: "/assets/scraped_images/home/envert_agro_food_logo.png",
      url: "/businesses/envert-agro-food"
    },
    {
      name: "EIPR",
      sector: "Applied Research",
      logo: "/assets/scraped_images/home/eipr_logo.png",
      url: "/businesses/eipr"
    }
  ];

  // In-Depth Company Profiles
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
      name: 'The Touriosity',
      category: 'Travel, Heritage & Eco-Tourism Magazine',
      logo: '/assets/scraped_images/home/touriosity_logo.png',
      summary: 'Premier international travel magazine exploring world heritage, sustainable eco-tourism, cultural geography, and conscious hospitality worldwide.',
      status: 'Flagship Publication',
      internalUrl: '/businesses/publication',
      externalUrl: 'http://www.thetouriosity.com',
      tags: ['Eco-Tourism', 'World Heritage', 'Global Distribution', 'Hospitality']
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
        
        {/* Unified Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-charcoal/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-earth inline-block rounded-xs"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
                GROUP ARCHITECTURE & PORTFOLIO
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight-editorial text-forest-deep">
              The EnVERT Ecosystem & Brands
            </h2>
            <p className="mt-3 font-sans text-xs sm:text-sm text-charcoal/70 max-w-2xl leading-relaxed">
              Not a disjointed catalogue, but an interdependent matrix of engineering, corporate advisory, published knowledge, and community stewardship.
            </p>
          </div>
        </div>

        {/* 14 Official Group Entities & Registered Trademarks Grid */}
        <div className="mb-16 p-6 sm:p-8 bg-paper-warm border border-charcoal/15 rounded-xs">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-charcoal/10">
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/70 font-semibold flex items-center gap-2">
              <span className="w-2 h-0.5 bg-earth inline-block"></span>
              OFFICIAL GROUP ENTITIES & REGISTERED TRADEMARKS
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-charcoal/50">
              14 Operating Subsidiaries & Publications
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5">
            {allBrands.map((brand, idx) => (
              <Link
                key={idx}
                to={brand.url}
                className="group p-3 sm:p-3.5 bg-white hover:bg-forest-warm border border-charcoal/15 hover:border-forest-deep rounded-xs flex flex-col items-center justify-between transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-full h-14 bg-white p-2 rounded-xs border border-charcoal/10 flex items-center justify-center mb-2.5 shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-heading text-xs font-bold text-forest-deep group-hover:text-forest uppercase tracking-tight block truncate w-full transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] font-mono text-charcoal/60 block truncate w-full mt-0.5">
                  {brand.sector}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 4 Core Architectural Pillars (Editorial Grid) */}
        <div className="pb-16 border-b border-charcoal/10">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              INTERDEPENDENT MATRIX
            </span>
            <span className="font-mono text-[11px] text-charcoal/50">
              4 Strategic Operational Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemData.pillars.map((pillar) => (
              <div key={pillar.category} className="p-6 bg-paper-warm border border-charcoal/15 space-y-4 rounded-xs">
                <div className="pb-3 border-b border-charcoal/15">
                  <span className="font-mono text-[10px] text-earth uppercase font-semibold tracking-wider">
                    CORE SECTOR
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
        </div>

        {/* Dedicated Company Cards (Authentic Entities Scraped from Live Site) */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
                DETAILED OPERATING PROFILES
              </p>
              <h4 className="font-heading text-xl sm:text-2xl font-bold text-forest-deep tracking-tight mt-1">
                Affiliated Operating Companies & Publications
              </h4>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-charcoal/50">
              AUTHENTIC GROUP ENTITIES
            </span>
          </div>

          {/* 1 Row Grid (4 cards on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandProfiles.slice(0, 4).map((brand) => (
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

          {/* View More Button opening dedicated /companies page */}
          <div className="mt-10 flex justify-center">
            <Link
              to="/companies"
              className="px-6 py-3 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold rounded-xs transition-all duration-200 inline-flex items-center gap-2 shadow-xs hover:shadow-md hover:translate-x-0.5"
            >
              <span>View More Companies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
