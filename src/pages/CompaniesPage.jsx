import React from 'react';
import { ExternalLink, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getCompaniesPageSchema } from '../data/seoData';

export default function CompaniesPage({ onOpenContact }) {
  const companies = [
    {
      name: 'NRG India',
      category: 'Energy Systems & BEE Industrial Audits',
      logo: '/assets/scraped_images/energy/NRGINDIA-logo.png',
      portalUrl: 'http://www.nrgindia.com',
      internalSlug: 'energy',
      status: 'Operating Division',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Turnkey clean power generation and statutory Bureau of Energy Efficiency (BEE) audits. Delivers industrial energy management for steel, iron, foundry, and pharmaceutical plants, as well as institutional NAAC green audits.',
      domains: ['Commercial Solar PV', 'BEE Energy Audits', 'Steel & Foundry Audits', 'NAAC College Audits', 'ECBC & HVAC Modeling']
    },
    {
      name: 'EnVERT E-Vehicles Private Limited',
      category: 'Electric Mobility & Transport Manufacturing',
      logo: '/assets/logos/envert_group_logo.png',
      portalUrl: 'https://www.envertgroup.com/transport-electric',
      internalSlug: 'transport-electric',
      status: 'Private Limited Entity',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'envertev@gmail.com',
      summary: 'Specialized enterprise designing, engineering, and marketing battery-operated commercial electric vehicles. Aligned with the national FAME India framework with active vehicle series (Mono-PN, Duex-PM, Trois-PP).',
      domains: ['EnVERT Mono-PN', 'EnVERT Duex-PM', 'EnVERT Trois-PP', 'Charging Depot Topologies', 'Battery Thermal Diagnostics']
    },
    {
      name: 'REPOXISY',
      category: 'Specialty Chemicals & Epoxy Solutions',
      logo: '/assets/repoxisy_logo.png',
      portalUrl: '/businesses/repoxisy',
      internalSlug: 'repoxisy',
      status: 'Advanced Materials Division',
      headquarters: 'Kolkata, India (Nandi Resources)',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Advanced materials and construction chemicals brand of Nandi Resources Generation Technology Pvt. Ltd. Delivers industrial & railway epoxy flooring systems, protective resin coatings, waterproofing chemical sealants, and single-window turnkey execution.',
      domains: [
        'Industrial & Railway Epoxy Flooring',
        'Protective & Anti-Corrosion Coatings',
        'Epoxy Grout & Adhesives',
        'Waterproofing Chemical Sealants',
        'Construction Chemicals & Primers',
        'Single-Window Turnkey Execution'
      ]
    },
    {
      name: 'WAGSOL',
      category: 'Solar, Railway Systems & Green Sanitation',
      logo: '/assets/wagsol_logo.png',
      portalUrl: '/businesses/wagsol',
      internalSlug: 'wagsol',
      status: 'Solar & Rail Sanitation Division',
      headquarters: 'Kolkata, India (Nandi Resources)',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Specialized solar equipment, railway solutions, and green sanitation division of Nandi Resources Generation Technology Pvt. Ltd. Delivers solar street & high-mast systems, wagon solar applications (BVCM/BVZI), railway coach & platform lighting, BLDC energy-efficient ventilation, and railway bio-toilets alongside waterless sanitary installations.',
      domains: [
        'Solar & High-Mast Lighting Systems',
        'BVCM/BVZI Railway Wagon Solar Solutions',
        'Railway Coach & Platform Lighting',
        'BLDC Energy-Efficient Ventilation',
        'Railway Bio-Toilets & Bio-Digesters',
        'Waterless Urinals & Sanitation Systems',
        'MW-Scale Solar Plant AMC Maintenance'
      ]
    },
    {
      name: 'ICST Global',
      category: 'Sustainable Tourism, Conferences & Industry Platform',
      logo: '/assets/scraped_images/home/ICST-logo.png',
      portalUrl: 'http://www.icstglobal.com',
      internalSlug: 'icst',
      status: 'International Tourism Conference & Exhibition Platform',
      headquarters: 'Kolkata, India & International',
      phone: '+91 9836511995',
      email: 'icst@thetouriosity.com',
      summary: 'ICST Global (International Conference on Sustainable Transition) is a premier international tourism knowledge, conference, networking, and industry-platform organisation. It organises international conferences and exhibitions on sustainable tourism, destination development, ecotourism, tourism innovation, and policy — bringing together tourism ministries, NTOs, hoteliers, airlines, tour operators, and technology companies.',
      domains: [
        'International Sustainable Tourism Conferences & Exhibitions',
        'Sustainable Destination Development (Ecotourism, Rural & Cultural)',
        'Tourism Innovation, Technology & Policy Dialogue',
        'Exhibition Platform for Tourism Ministries, NTOs & Trade Bodies',
        'Publishing Tourism Industry News, Trends & Intelligence',
        'Community-Sensitive & Responsible Tourism Promotion'
      ]
    },

    {
      name: 'Glare Post',
      category: 'Digital Perspectives & Investigative Journalism',
      logo: '/assets/scraped_images/home/glarepost_logo.png',
      portalUrl: 'https://www.glarepost.com',
      internalSlug: 'glarepost',
      status: 'Digital News & Portal',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Independent online commentary and analytical journal dedicated to clean transition policies, heavy industrial decarbonization, economic governance, and environmental journalism.',
      domains: ['Environmental Journalism', 'Public Policy Analysis', 'Clean Energy Markets', 'Corporate ESG Reporting']
    },
    {
      name: 'Touriosity Travelmag',
      category: 'Global Travel, Heritage & Eco-Tourism Magazine',
      logo: '/assets/scraped_images/home/touriosity_logo.png',
      portalUrl: 'http://www.thetouriosity.com',
      internalSlug: 'publication',
      status: 'Flagship International Magazine',
      headquarters: 'Global Circulation & Kolkata Desk',
      phone: '+91 9836511995',
      email: 'thetouriosity@gmail.com',
      summary: "One of EnVERT Group's premier international publications. Touriosity Travelmag explores global heritage, conscious eco-tourism, cultural geography, responsible hospitality, and sustainable travel narratives with contributors worldwide.",
      domains: ['World Heritage Narratives', 'Eco-Tourism & Conservation', 'Travel Journalism', 'Global Space Partnerships', 'Cultural Geography']
    },
    {
      name: 'Pen & Ink Publishers',
      category: 'Publishing House & Editorial Media',
      logo: '/assets/scraped_images/home/pen_and_ink_logo.png',
      portalUrl: 'https://www.envertgroup.com/pen-ink',
      internalSlug: 'pen-ink',
      status: 'Publishing Division',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'curiosity@penandinkpublishers.com',
      summary: 'Editorial publishing house curating peer-reviewed technical journals, academic monographs, the international Curiosity Kids magazine (7+ years on Amazon Paperback & Kindle), and the annual Curiosity Writing Awards.',
      domains: ['Curiosity Kids Magazine', 'Sustainable Energy Review', 'Curiosity Writing Awards', 'Amazon Global Distribution', 'Academic Monograph Publishing']
    },
    {
      name: 'Curiosity Kids',
      category: 'Children’s Literature & Global Education',
      logo: '/assets/scraped_images/home/curiosity_logo.png',
      internalSlug: 'publication',
      status: 'Magazine Imprint',
      headquarters: 'Global Distribution (Amazon)',
      phone: '+91 9836511995',
      email: 'curiosity@penandinkpublishers.com',
      summary: 'For 7+ years, Curiosity Kids has cultivated youth scientific curiosity and storytelling with global distribution on Amazon Paperback and Kindle editions.',
      domains: ['Amazon Paperback & Kindle', 'STEM Education', 'Creative Writing', 'Global Young Authors']
    },
    {
      name: 'Sustainable Energy Review',
      category: 'Clean Energy & Technology Trade Magazine',
      logo: '/assets/scraped_images/home/sustainable_energy_review_logo.png',
      internalSlug: 'publication',
      status: 'Trade Magazine',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'B2B trade publication dedicated to renewable energy hardware, energy auditing standards, statutory state regulations, and industrial technology advances.',
      domains: ['Renewable Energy Research', 'Trade Advertising', 'BEE Auditing Standards', 'Technical Whitepapers']
    },
    {
      name: 'EnVERT Foundation',
      category: 'Social Stewardship & Applied Ecology',
      logo: '/assets/scraped_images/home/envert_foundation_logo.png',
      internalSlug: 'envert-foundation',
      status: 'Non-Profit Initiative',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Non-profit arm directing community afforestation, regional environmental literacy, student STEM & creative writing scholarships, and grassroots conservation.',
      domains: ['Community Afforestation', 'Ecological Literacy', 'Youth STEM Grants', 'Grassroots Conservation']
    },
    {
      name: 'Atmaja',
      category: 'Sustainable Fashion & Handcrafted Living',
      logo: '/assets/scraped_images/fashion-lifestyle/atmaja_logo.png',
      internalSlug: 'fashion-lifestyle',
      status: 'Conscious Lifestyle Brand',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Ethical slow fashion and handcrafted lifestyle brand celebrating handloom traditions, organic cotton, zero-waste design, and artisan empowerment.',
      domains: ['Slow Fashion', 'Handloom Textiles', 'Artisanal Empowerment', 'Circular Sourcing']
    },
    {
      name: 'Afield Gallery',
      category: 'Visual Arts & Contemporary Culture',
      logo: '/assets/indian_arts_and_dolls_gallery.png',
      internalSlug: 'afield-gallery',
      portalUrl: '/businesses/afield-gallery',
      status: 'Visual Arts Initiative',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Curatorial initiative showcasing contemporary visual artists, Indian arts and dolls gallery, printmakers, and cultural dialogues exploring ecological harmony and modern expression.',
      domains: ['Afield Gallery', 'Contemporary Art', 'Printmaking', 'Curated Exhibitions', 'Cultural Dialogues']
    },
    {
      name: 'Afield Advisory',
      category: 'Strategic Advisory & Brand Consultancy',
      logo: '/assets/scraped_images/home/afield_logo.png',
      internalSlug: 'afield-advisory',
      status: 'Advisory Department',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Dedicated advisory department of EnVERT Group providing institutional destination profiling, tourism board representation, brand architecture, PR communications, and cross-border promotional partnerships.',
      domains: ['Destination Representation', 'Tourism Board Advisory', 'Brand Consultancy', 'Strategic PR & Media', 'CSR Advisory']
    },
    {
      name: 'EIPR',
      category: 'EnVERT Institute of Policy Research',
      logo: '/assets/scraped_images/home/eipr_logo.png',
      internalSlug: 'eipr',
      status: 'Policy Research Wing',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Bridging heavy industry and policy research with energy modeling, techno-economic evaluations, decarbonization frameworks, and patent innovation studies.',
      domains: ['Industrial Policy', 'Patent Landscaping', 'Techno-Economic Feasibility', 'Regulatory Studies']
    },
    {
      name: 'EISREE',
      category: 'Solar Research & Energy Efficiency',
      logo: '/assets/eisree_logo.png',
      internalSlug: 'eisree',
      portalUrl: '/businesses/eisree',
      status: 'Research Institute',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'eisree.kolkata@gmail.com',
      summary: 'EnVERT Institute of Solar Research & Energy Efficiency (EISREE) is dedicated to advancing sustainable energy solutions through cutting-edge solar research, energy efficiency practices, Green Campus initiatives, and community engagement.',
      domains: ['Solar PV Research', 'Energy Efficiency', 'Green Campus Program', 'Solar for All', 'Skill Development', 'Innovation Hub']
    },
    {
      name: 'India Corporate Trainers',
      category: 'Corporate Training, Education, Legal & Relocation',
      logo: '/assets/india_corporate_trainers_logo.png',
      internalSlug: 'india-corporate-trainers',
      portalUrl: '/businesses/india-corporate-trainers',
      status: 'Corporate Training Division',
      headquarters: 'Pan-India (10 Major Cities)',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Delivers corporate training, language curricula, education consultancy, corporate legal compliance, and turnkey corporate relocation. Track record of 200+ assignments across 10 Indian cities for global MNCs including Microsoft, IBM, Coca-Cola, PepsiCo, Johnson & Johnson, Citibank, ING, Cisco, GE, Thermo Fisher, Goldman Sachs and Jaguar Land Rover.',
      domains: ['Corporate Training', 'Language Engineering', 'Education Consultancy', 'Legal Consultancy', 'Corporate Relocation', '200+ MNC Assignments']
    },
    {
      name: 'Glarepost Films',
      category: 'Film & Content Production',
      logo: '/assets/scraped_images/home/glarepost_films_logo.png',
      portalUrl: 'https://www.glarepost.com',
      internalSlug: 'glarepost-films',
      status: 'Film & Production House',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Glarepost Films is a multi-format film and content production company undertaking documentary films, feature and short fiction films, OTT and web series development, advertising and corporate communication films, travel and heritage cinema, and social-impact productions — supported by full end-to-end production and post-production services.',
      domains: [
        'Documentary & Factual Films',
        'Feature Films, Short Films & Independent Cinema',
        'OTT & Web Series Original Content',
        'Advertising Films, TVCs & Brand Storytelling',
        'Corporate Profiles, CSR & Institutional Films',
        'Culture, Travel, Heritage & Social Impact Films',
        'Production & Post-Production Services'
      ]
    },
    {
      name: 'EnVERT Wellness',
      category: 'Healthcare & Corporate Wellness',
      logo: '/assets/logos/envert_group_logo.png',
      portalUrl: '',
      internalSlug: 'startup-idea-envert-wellness',
      status: 'Corporate Healthcare Initiative',
      headquarters: 'Kolkata, India',
      phone: '+91 9836511995',
      email: 'admin@envertgroup.com',
      summary: 'Corporate healthcare, occupational wellness programs, health awareness workshops, preventive health screenings, and ergonomic wellness advisory for industrial workforces.',
      domains: [
        'Occupational Health Programs',
        'Corporate Wellness Workshops',
        'Preventive Health Screenings',
        'Industrial Workforce Health',
        'Ergonomic Workstation Advisory'
      ]
    }
  ];

  return (
    <div className="bg-paper-warm min-h-screen py-16 lg:py-24">
      <SEO
        title="Our Brands & Operating Entities | EnVERT Group"
        description="Directory of specialized brands, operating companies, publishing houses, film production, and social stewardship entities united under EnVERT Group in Kolkata, India."
        canonical="/companies"
        schema={getCompaniesPageSchema(companies)}
      />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="pb-8 mb-16 border-b border-charcoal/15">
          <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
            GROUP BRANDS, ENTITIES & INITIATIVES
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-forest-deep mt-2">
            Our Brands
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl">
            A network of specialized brands, operating companies, publishing houses, film production, and social stewardship entities united under EnVERT Group.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((co) => (
            <div
              key={co.name}
              className="bg-paper border border-charcoal/15 p-7 flex flex-col justify-between hover:border-forest-deep transition-all duration-200 rounded-xs shadow-xs"
            >
              <div>
                
                {/* Status & Headquarters */}
                <div className="flex items-center justify-between pb-3 border-b border-charcoal/10 mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/60 bg-paper-warm px-2 py-0.5 border border-charcoal/10">
                    {co.status}
                  </span>
                  <span className="text-xs font-mono text-earth font-medium">
                    {co.headquarters}
                  </span>
                </div>

                {/* Official Brand Logo */}
                {co.logo && (
                  <div className="mb-3.5 h-11 flex items-center">
                    <img
                      src={co.logo}
                      alt={`${co.name} official brand logo — EnVERT Group`}
                      className="max-h-full max-w-[170px] object-contain object-left"
                    />
                  </div>
                )}

                <h2 className="font-heading text-xl font-bold text-forest-deep">
                  {co.name}
                </h2>

                <p className="text-xs font-mono text-leaf-dark mt-1 font-semibold uppercase">
                  {co.category}
                </p>

                <p className="text-xs text-charcoal/75 mt-3 leading-relaxed font-sans">
                  {co.summary}
                </p>

                {/* Domains Tags */}
                <div className="mt-5 pt-3 border-t border-charcoal/10">
                  <p className="text-[10px] font-mono text-charcoal/50 uppercase tracking-wider mb-2 font-semibold">
                    Core Specializations
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {co.domains.map((d) => (
                      <span
                        key={d}
                        className="text-[10px] font-mono px-2 py-0.5 bg-paper-warm text-charcoal/80 border border-charcoal/10"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions & Contacts */}
              <div className="mt-6 pt-5 border-t border-charcoal/10 flex flex-col gap-3">
                <div className="text-[11px] font-mono text-charcoal/60 space-y-0.5">
                  {co.phone && <p className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-earth" /> {co.phone}</p>}
                  {co.email && <p className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-earth" /> {co.email}</p>}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  {co.internalSlug && (
                    <Link
                      to={`/businesses/${co.internalSlug}`}
                      className="px-3.5 py-1.5 bg-forest hover:bg-forest-deep text-paper text-xs font-heading font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                    >
                      <span>Explore Domain</span>
                      <ArrowRight className="w-3 h-3 text-earth-light" />
                    </Link>
                  )}
                  {co.portalUrl && (
                    <a
                      href={co.portalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 border border-charcoal/20 hover:border-forest text-charcoal/60 hover:text-forest transition-colors"
                      title="External Portal"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 p-8 sm:p-12 bg-forest-deep text-paper rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              GROUP ENGAGEMENT
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase mt-1">
              Connect With Any <span className="normal-case">EnVERT</span> Entity
            </h3>
            <p className="text-xs sm:text-sm text-paper/70 mt-2 max-w-xl">
              From Bureau of Energy Efficiency statutory audits to electric fleet deployment and corporate training programs across India.
            </p>
          </div>
          <button
            onClick={() => onOpenContact('Group Company General Inquiry')}
            className="px-6 py-3 bg-earth hover:bg-earth-dark text-paper font-heading text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Direct Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
