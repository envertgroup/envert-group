import React from 'react';
import { Link as RouterLink, useParams as useRouterParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ExternalLink, Phone, Mail, CheckCircle2, Award, Globe, Film } from 'lucide-react';
import { businessesData, brandDetailsData, projectsData } from '../data/siteData';
import EditorialImage from '../components/EditorialImage';
import SEO from '../components/SEO';
import { getBusinessDetailSchema } from '../data/seoData';

export default function BusinessDetail({ onOpenContact, forcedSlug }) {
  const params = useRouterParams();
  const targetSlug = forcedSlug || params.slug;
  const allDetailRecords = [...businessesData, ...(brandDetailsData || [])];

  const business = allDetailRecords.find((b) => 
    b.id.toLowerCase() === targetSlug?.toLowerCase() || 
    b.urlSlug?.toLowerCase() === targetSlug?.toLowerCase() ||
    b.aliases?.some(a => a.toLowerCase() === targetSlug?.toLowerCase()) ||
    (targetSlug?.toLowerCase() === 'touriosity' && b.id === 'publication') ||
    (targetSlug?.toLowerCase() === 'thetouriosity' && b.id === 'publication') ||
    (targetSlug?.toLowerCase() === 'touriosity-travelmag' && b.id === 'publication') ||
    (targetSlug?.toLowerCase() === 'mobility' && b.id === 'transport-electric') ||
    (targetSlug?.toLowerCase() === 'corporate-training' && b.id === 'india-corporate-trainers') ||
    (targetSlug?.toLowerCase() === 'training' && b.id === 'india-corporate-trainers') ||
    (targetSlug?.toLowerCase() === 'publishing' && b.id === 'publication') ||
    (targetSlug?.toLowerCase() === 'pen-ink' && b.id === 'publication') ||
    (targetSlug?.toLowerCase() === 'foundation' && b.id === 'envert-foundation') ||
    (targetSlug?.toLowerCase() === 'social-stewardship' && b.id === 'envert-foundation') ||
    (targetSlug?.toLowerCase() === 'atmaja' && b.id === 'fashion-lifestyle') ||
    (targetSlug?.toLowerCase() === 'glare-post' && b.id === 'glarepost') ||
    (targetSlug?.toLowerCase() === 'glarepost' && b.id === 'publication') ||
    (targetSlug?.toLowerCase() === 'advisory' && b.id === 'afield-advisory') ||
    (targetSlug?.toLowerCase() === 'advisory-services' && b.id === 'afield-advisory') ||
    (targetSlug?.toLowerCase() === 'afield-gallery' && b.id === 'afield-gallery') ||
    (targetSlug?.toLowerCase() === 'gallery' && b.id === 'afield-gallery') ||
    (targetSlug?.toLowerCase() === 'art-gallery' && b.id === 'afield-gallery') ||
    (targetSlug?.toLowerCase() === 'arts-and-dolls-gallery' && b.id === 'afield-gallery') ||
    (targetSlug?.toLowerCase() === 'indian-art-and-dolls-gallery' && b.id === 'afield-gallery') ||
    (targetSlug?.toLowerCase() === 'repoxisy' && b.id === 'repoxisy') ||
    (targetSlug?.toLowerCase() === 'epoxy' && b.id === 'repoxisy') ||
    (targetSlug?.toLowerCase() === 'specialty-chemicals' && b.id === 'repoxisy') ||
    (targetSlug?.toLowerCase() === 'specialty-chemicals-and-epoxy-solutions' && b.id === 'repoxisy') ||
    (targetSlug?.toLowerCase() === 'wagsol' && b.id === 'wagsol') ||
    (targetSlug?.toLowerCase() === 'solar-lighting' && b.id === 'wagsol') ||
    (targetSlug?.toLowerCase() === 'railway-lighting' && b.id === 'wagsol') ||
    (targetSlug?.toLowerCase() === 'bio-toilets' && b.id === 'wagsol') ||
    (targetSlug?.toLowerCase() === 'railway-sanitation' && b.id === 'wagsol') ||
    (targetSlug?.toLowerCase() === 'bldc-fans' && b.id === 'wagsol') ||
    (targetSlug?.toLowerCase() === 'eisree' && b.id === 'eisree') ||
    (targetSlug?.toLowerCase() === 'solar-research' && b.id === 'eisree') ||
    (targetSlug?.toLowerCase() === 'green-campus' && b.id === 'eisree') ||
    (targetSlug?.toLowerCase() === 'india-corporate-trainers' && b.id === 'india-corporate-trainers') ||
    (targetSlug?.toLowerCase() === 'corporate-trainers' && b.id === 'india-corporate-trainers') ||
    (targetSlug?.toLowerCase() === 'corporate-training-services' && b.id === 'india-corporate-trainers') ||
    (targetSlug?.toLowerCase() === 'ict' && b.id === 'india-corporate-trainers') ||
    (targetSlug?.toLowerCase() === 'glarepost-films' && b.id === 'glarepost-films') ||
    (targetSlug?.toLowerCase() === 'films' && b.id === 'glarepost-films') ||
    (targetSlug?.toLowerCase() === 'film-production' && b.id === 'glarepost-films')
  );

  if (!business) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-paper-warm">
        <SEO
          title="Domain Not Found | EnVERT Group"
          description="The requested business domain or division could not be found."
          noindex={true}
        />
        <h1 className="font-heading text-4xl font-bold text-forest-deep">Domain Not Found</h1>
        <p className="mt-3 text-sm text-charcoal/70">The business domain you requested does not exist or has been reorganized.</p>
        <RouterLink
          to="/"
          className="mt-6 px-6 py-2.5 bg-forest text-paper font-heading text-xs uppercase tracking-wider font-semibold"
        >
          Return to Homepage
        </RouterLink>
      </div>
    );
  }

  // Find related projects and emerging verticals
  const relatedProjects = projectsData.filter((p) => {
    const combined = `${p.industry} ${p.vertical || ''} ${p.title} ${p.category || ''}`.toLowerCase();
    const bid = business.id.toLowerCase();
    if (bid === 'energy') {
      return combined.includes('solar') || combined.includes('energy') || combined.includes('bvcm') || combined.includes('audit');
    }
    if (bid === 'wagsol') {
      return combined.includes('wagsol') || combined.includes('ccu') || combined.includes('railway') || combined.includes('lighting');
    }
    if (bid === 'repoxisy') {
      return combined.includes('repoxisy') || combined.includes('epoxy') || combined.includes('chemical');
    }
    if (bid === 'transport-electric') {
      return combined.includes('transport') || combined.includes('vehicle') || combined.includes('fleet');
    }
    if (bid === 'icst' || bid === 'india-corporate-trainers') {
      return combined.includes('training') || combined.includes('capability') || combined.includes('corporate');
    }
    if (bid === 'afield-advisory' || bid === 'eipr') {
      return combined.includes('advisory') || combined.includes('carbon') || combined.includes('policy');
    }
    return combined.includes(bid);
  });

  // Next / Previous business navigation
  const currentIndex = businessesData.findIndex((b) => b.id === business.id);
  const prevBusiness = currentIndex > 0 ? businessesData[currentIndex - 1] : businessesData[businessesData.length - 1];
  const nextBusiness = currentIndex < businessesData.length - 1 ? businessesData[currentIndex + 1] : businessesData[0];

  const detailSchema = getBusinessDetailSchema(business);

  return (
    <div className="bg-paper-warm min-h-screen">
      <SEO
        title={`${business.name} — Capabilities & Solutions | EnVERT Group`}
        description={business.summary ? business.summary.slice(0, 160) : undefined}
        canonical={`/businesses/${business.urlSlug || business.id}`}
        schema={detailSchema}
        ogImage={business.image || business.logo}
      />
      
      {/* Editorial Breadcrumb Bar */}
      <div className="bg-paper border-b border-charcoal/10 py-3 px-6 sm:px-12 text-xs font-mono text-charcoal/60">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2">
          <RouterLink to="/" className="hover:text-forest-deep transition-colors">HOME</RouterLink>
          <span>/</span>
          <RouterLink to="/businesses" className="hover:text-forest-deep transition-colors">BUSINESSES</RouterLink>
          <span>/</span>
          <span className="text-forest font-semibold uppercase">{business.name}</span>
        </div>
      </div>

      {/* Hero Section of the Business */}
      <section className="py-12 lg:py-20 border-b border-charcoal/15 bg-paper-warm">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Header Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                
                <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                  {business.num && (
                    <>
                      <span className="font-bold text-earth text-sm bg-paper px-2 py-0.5 border border-charcoal/10 rounded-xs">
                        CATEGORY {business.num}
                      </span>
                      <span className="text-charcoal/30">|</span>
                    </>
                  )}
                  <span className="text-earth font-semibold uppercase tracking-wider">
                    SECTOR: {business.sector || business.category}
                  </span>
                </div>

                <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-forest-deep leading-[1.02]">
                  {business.name}
                </h1>

                <p className="mt-4 text-lg font-heading font-medium text-charcoal/90 leading-snug">
                  {business.tagline}
                </p>

                <p className="mt-6 text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal">
                  {business.summary}
                </p>
              </div>

              {/* Direct Technical Contacts */}
              <div className="mt-8 pt-6 border-t border-charcoal/15 space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-charcoal/60 font-semibold">
                  Direct Department Engagement
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                  {business.directPhone && (
                    <a href={`tel:${business.directPhone}`} className="flex items-center gap-1.5 text-forest font-semibold hover:text-earth">
                      <Phone className="w-3.5 h-3.5 text-earth" /> {business.directPhone}
                    </a>
                  )}
                  {business.directEmail && (
                    <a href={`mailto:${business.directEmail}`} className="flex items-center gap-1.5 text-forest font-semibold hover:text-earth">
                      <Mail className="w-3.5 h-3.5 text-earth" /> {business.directEmail}
                    </a>
                  )}
                  {!business.directPhone && !business.directEmail && (
                    <span className="text-charcoal/70">Kolkata Corporate Desk: +91 9836511995 • admin@envertgroup.com</span>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenContact(
                      `Inquiry: ${business.name} (${business.brandRef || 'EnVERT'})`,
                      { domain: business.category || business.name }
                    )}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
                  >
                    <span>Inquire on {business.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-earth-light" />
                  </button>

                  {business.domainLink && (
                    <a
                      href={business.domainLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-charcoal/20 hover:border-forest text-xs font-mono uppercase text-forest-deep transition-colors"
                    >
                      <span>Visit External Portal</span>
                      <ExternalLink className="w-3 h-3 text-earth" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Large Image */}
            <div className="lg:col-span-6">
              <EditorialImage
                src={business.image}
                alt={business.name}
                domain={business.name}
                caption={business.imageCaption}
                aspectRatio="aspect-[16/11]"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Operating Businesses & Brands Under This Category */}
      {business.businessesUnderCategory && business.businessesUnderCategory.length > 0 && (
        <section className="py-14 bg-paper border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="pb-4 mb-8 border-b border-charcoal/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                  OPERATING ENTERPRISES & BRANDS
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-forest-deep mt-1">
                  {business.businessesUnderCategory.length === 1 ? 'Operating Business Enterprise' : `Businesses Under ${business.name}`}
                </h2>
              </div>
              <span className="text-xs font-mono text-charcoal/50">
                {business.businessesUnderCategory.length} {business.businessesUnderCategory.length === 1 ? 'ACTIVE OPERATING UNIT' : 'ACTIVE OPERATING UNITS'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {business.businessesUnderCategory.map((sub, sIdx) => (
                <div key={sIdx} className="p-6 bg-paper-warm border border-charcoal/15 rounded-xs flex flex-col justify-between hover:border-forest-deep transition-all duration-200 shadow-xs">
                  <div>
                    {sub.logo && (
                      <div className="mb-3.5 h-12 flex items-center">
                        <img
                          src={sub.logo}
                          alt={`${sub.name} official operating brand logo — EnVERT Group`}
                          width="160"
                          height="48"
                          loading="lazy"
                          decoding="async"
                          className="max-h-full max-w-[180px] object-contain object-left"
                        />
                      </div>
                    )}
                    <h3 className="font-heading text-xl font-bold text-forest-deep uppercase tracking-tight">
                      {sub.name}
                    </h3>
                    <p className="text-xs font-mono text-earth font-semibold uppercase mt-1">
                      {sub.role}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal/75 mt-3 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-charcoal/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {sub.url && (
                        <RouterLink
                          to={sub.url}
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase text-forest hover:text-earth transition-colors"
                        >
                          <span>View Division</span>
                          <ArrowRight className="w-3.5 h-3.5 text-earth" />
                        </RouterLink>
                      )}
                      {sub.externalUrl && (
                        <a
                          href={sub.externalUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-charcoal/50 hover:text-forest transition-colors"
                          title="External Portal"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-earth" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => onOpenContact(
                        `Inquiry: ${sub.name} (${business.name})`,
                        { domain: business.category || business.name }
                      )}
                      className="text-xs font-mono text-forest-deep hover:text-earth underline decoration-dotted"
                    >
                      Inquire →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products & Services Matrix (e.g. REPOXISY) */}
      {business.productsMatrix && (
        <section className="py-14 bg-paper border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="pb-4 mb-8 border-b border-charcoal/10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                  IDENTIFIED PRODUCT & SERVICE SCOPE
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-forest-deep mt-1">
                  Product Lines & System Solutions
                </h2>
              </div>
              <span className="font-mono text-xs text-charcoal/60">
                Nandi Resources Generation Technology Pvt. Ltd.
              </span>
            </div>

            <div className="overflow-x-auto border border-charcoal/15 bg-paper-warm rounded-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-charcoal/15 bg-paper font-mono text-xs uppercase tracking-wider text-charcoal/70">
                    <th className="py-3.5 px-6 font-semibold w-1/3">Area</th>
                    <th className="py-3.5 px-6 font-semibold">Products / Services Identified</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10 font-sans text-sm">
                  {business.productsMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-paper/70 transition-colors">
                      <td className="py-3.5 px-6 font-heading font-bold text-forest-deep italic">
                        {row.area}
                      </td>
                      <td className="py-3.5 px-6 text-charcoal/80 font-normal">
                        {row.products}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Single-Window Epoxy Flooring Execution Workflow (e.g. REPOXISY) */}
      {business.singleWindowProcess && (
        <section className="py-14 bg-paper-warm border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="pb-4 mb-8 border-b border-charcoal/10">
              <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                END-TO-END EXECUTION FRAMEWORK
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-forest-deep mt-1">
                Single-Window Epoxy Flooring Service
              </h2>
              <p className="text-sm text-charcoal/75 mt-2 max-w-3xl">
                Nandi Resources delivers an integrated, turnkey flooring workflow ensuring absolute substrate integrity, precision thickness control, and certified curing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {business.singleWindowProcess.map((step, idx) => (
                <div key={idx} className="p-4 bg-paper border border-charcoal/15 rounded-xs flex flex-col justify-between hover:border-forest-deep transition-all">
                  <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                    <span className="font-mono text-xs text-earth font-bold">STEP {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest/50" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-forest-deep mt-3">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WAGSOL Specialized Engineering Focus: Solar Transit & Green Sanitation */}
      {business.id === 'wagsol' && (
        <section className="py-14 bg-paper-warm border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="pb-4 mb-8 border-b border-charcoal/10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                  NANDI RESOURCES INTEGRATED RAILWAY & CLEAN POWER FRAMEWORK
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-forest-deep mt-1">
                  Dual Core Engineering Disciplines
                </h2>
              </div>
              <span className="font-mono text-xs text-charcoal/60">
                WAGSOL™ Division
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pillar A: Solar & Transit Illumination */}
              <div className="p-8 bg-paper border border-charcoal/15 rounded-xs space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-charcoal/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 bg-earth rounded-full"></span>
                    <span className="font-mono text-xs uppercase font-bold text-forest-deep tracking-wider">
                      DISCIPLINE 01
                    </span>
                  </div>
                  <span className="font-mono text-xs text-earth font-semibold">Solar & Electrical Engineering</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-forest-deep">
                  Solar Power, Lighting Systems & Wagon Applications
                </h3>
                <p className="text-sm text-charcoal/75 leading-relaxed">
                  Turnkey engineering for high-mast solar lighting, street lighting arrays, and specialized off-grid DC solar solutions for BVCM/BVZI railway wagon applications. Integrated with charge controller units (CCUs), solar-powered industrial batteries, and GPS/GPRS cloud telemetry alongside MW-scale plant AMC services.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono">
                    <span className="font-bold text-forest-deep block">BVCM / BVZI Solutions</span>
                    Dedicated DC solar for railway wagons
                  </div>
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono">
                    <span className="font-bold text-forest-deep block">High-Mast & Street Illumination</span>
                    Tall-mast luminaires & smart LED arrays
                  </div>
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono">
                    <span className="font-bold text-forest-deep block">Cloud Monitoring & CCUs</span>
                    GPS/GPRS telemetry & charge control
                  </div>
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono">
                    <span className="font-bold text-forest-deep block">BLDC Energy-Saving Fans</span>
                    Low-wattage ventilation & exhaust
                  </div>
                </div>
              </div>

              {/* Pillar B: Biological Sanitation & Environmental Systems */}
              <div className="p-8 bg-paper border border-charcoal/15 rounded-xs space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-charcoal/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 bg-forest rounded-full"></span>
                    <span className="font-mono text-xs uppercase font-bold text-forest-deep tracking-wider">
                      DISCIPLINE 02
                    </span>
                  </div>
                  <span className="font-mono text-xs text-forest font-semibold">Transit Sanitation & Bio-Systems</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-forest-deep">
                  Railway Bio-Toilets, Waterless Urinals & Sanitation
                </h3>
                <p className="text-sm text-charcoal/75 leading-relaxed">
                  Sustainable bio-digestive sanitation systems designed for high-density railway coaches, transit stations, and public institutional infrastructure. Features waterless urinals, water-saving sanitary apparatus, and biological waste decomposition ensuring zero track discharge and environmental compliance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono">
                    <span className="font-bold text-forest-deep block">Railway Bio-Toilets</span>
                    Bio-digestive bacterial digestion tanks
                  </div>
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono">
                    <span className="font-bold text-forest-deep block">Waterless Urinal Systems</span>
                    100% zero-water sanitary installations
                  </div>
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono">
                    <span className="font-bold text-forest-deep block">Coach & Station Sanitation</span>
                    Sanitary installations for transit hubs
                  </div>
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono">
                    <span className="font-bold text-forest-deep block">Water Conservation</span>
                    Regulatory water-saving apparatus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EISREE Specialized Section: Vision, Core Work Areas, Initiatives & Impact */}
      {business.id === 'eisree' && (
        <section className="py-14 bg-paper-warm border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 space-y-12">
            
            {/* Vision Banner */}
            <div className="p-8 bg-forest-deep text-paper rounded-xs border border-charcoal/20">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-earth-light">
                <span className="w-2 h-2 rounded-full bg-earth animate-pulse"></span>
                <span>INSTITUTIONAL VISION</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-paper">
                "To be a global leader in renewable energy research and innovation, driving sustainable development and climate resilience."
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-paper/70 font-mono">
                EnVERT Institute of Solar Research & Energy Efficiency • Affiliated with EnVERT Foundation
              </p>
            </div>

            {/* Core Areas of Work (05 Tracks) */}
            <div>
              <div className="pb-4 mb-6 border-b border-charcoal/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                    DISCIPLINES & PRACTICES
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase text-forest-deep mt-1">
                    Core Areas of Work
                  </h3>
                </div>
                <span className="font-mono text-xs text-charcoal/60">05 Focus Tracks</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(business.coreAreas || [
                  { title: "Solar Research", desc: "Developing advanced photovoltaic technologies and solar thermal systems." },
                  { title: "Energy Efficiency", desc: "Promoting smart energy management, green building practices, and efficient appliances." },
                  { title: "Policy & Advocacy", desc: "Supporting governments and organizations with evidence-based recommendations." },
                  { title: "Community Outreach", desc: "Training programs, awareness campaigns, and grassroots initiatives to spread renewable adoption." },
                  { title: "Innovation Hub", desc: "Incubating startups and fostering collaborations in clean energy technologies." }
                ]).map((area, idx) => (
                  <div key={idx} className="p-6 bg-paper border border-charcoal/15 rounded-xs space-y-2 hover:border-forest-deep transition-colors">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest-deep uppercase">TRACK 0{idx + 1}</span>
                      <span className="w-2 h-2 rounded-full bg-leaf"></span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-forest-deep">{area.title}</h4>
                    <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Initiatives (4 items) & Impact (4 items) Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Key Initiatives */}
              <div className="p-8 bg-paper border border-charcoal/15 rounded-xs space-y-6">
                <div className="pb-3 border-b border-charcoal/10 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase font-bold text-forest-deep tracking-wider">
                    STRATEGIC INITIATIVES
                  </span>
                  <span className="font-mono text-xs text-earth font-semibold">Active Programs</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-forest-deep">
                  Grassroots & Institutional Deployments
                </h3>
                
                <div className="space-y-4">
                  {(business.initiatives || [
                    { title: "Solar for All", desc: "Expanding access to affordable solar solutions in rural and urban communities." },
                    { title: "Green Campus Program", desc: "Partnering with educational institutions to implement energy-efficient infrastructure." },
                    { title: "Research Collaborations", desc: "Working with universities, industry leaders, and international organizations." },
                    { title: "Skill Development", desc: "Offering workshops and certifications in renewable energy technologies." }
                  ]).map((init, iIdx) => (
                    <div key={iIdx} className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                        <span className="font-heading text-sm font-bold text-forest-deep">{init.title}</span>
                      </div>
                      <p className="text-xs text-charcoal/75 pl-6">{init.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurable Impact */}
              <div className="p-8 bg-paper border border-charcoal/15 rounded-xs space-y-6">
                <div className="pb-3 border-b border-charcoal/10 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase font-bold text-forest-deep tracking-wider">
                    MEASURABLE IMPACT
                  </span>
                  <span className="font-mono text-xs text-forest font-semibold">Verified Outcomes</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-forest-deep">
                  Environmental & Community Abatement
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(business.impactMetrics || [
                    { label: "Carbon Abatement", desc: "Reduced carbon emissions through solar adoption projects." },
                    { label: "Community Empowerment", desc: "Empowered local communities with sustainable energy solutions." },
                    { label: "Published Research", desc: "Published research contributing to global renewable energy knowledge." },
                    { label: "Green Jobs", desc: "Created employment opportunities in the green energy sector." }
                  ]).map((imp, mIdx) => (
                    <div key={mIdx} className="p-4 bg-forest/5 border border-forest/15 rounded-xs space-y-1">
                      <span className="font-mono text-[11px] text-earth uppercase font-bold block">{imp.label}</span>
                      <p className="text-xs text-charcoal/80 leading-snug">{imp.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Institute Affiliation & Contact */}
                <div className="pt-4 border-t border-charcoal/10 space-y-2 text-xs font-mono text-charcoal/70">
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-earth shrink-0" />
                    <span>Inquiries: <a href="mailto:eisree.kolkata@gmail.com" className="text-forest-deep font-semibold hover:underline">eisree.kolkata@gmail.com</a></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <ExternalLink className="w-3.5 h-3.5 text-forest shrink-0" />
                    <span>Parent Stewardship: <RouterLink to="/businesses/envert-foundation" className="text-earth font-semibold hover:underline">EnVERT Foundation</RouterLink></span>
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* EnVERT Media Group Specialized Publishing & Periodicals Section */}
      {business.id === 'publication' && (
        <section className="py-16 bg-paper-warm border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 space-y-14">
            
            {/* Editorial Mandate Overview */}
            <div className="p-8 sm:p-10 bg-paper border border-charcoal/15 rounded-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-charcoal/10 gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 bg-earth rounded-full"></span>
                    <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                      EDITORIAL CHARTER & GLOBAL LITERARY FOOTPRINT
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase text-forest-deep">
                    EnVERT Media Group: Periodicals, Publishing & Digital Journalism
                  </h2>
                </div>
                <span className="font-mono text-xs text-charcoal/60">
                  Global Circulation & Literary Imprints
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-charcoal/80 leading-relaxed font-sans">
                <p>
                  EnVERT Media Group represents the cultural, literary, and journalistic cornerstone of EnVERT Group. Headquartered in Kolkata, West Bengal, the publishing division unifies internationally distributed travel and heritage periodicals, prestigious book publishing imprints, peer-reviewed renewable energy journals, and independent digital investigative journalism. Operating with a commitment to authentic storytelling, environmental stewardship, and academic rigor, our publications reach discerning readers, university libraries, research institutes, and cultural institutions across more than thirty countries worldwide.
                </p>
                <p>
                  From grassroots scientific literacy in our youth magazine <em>Curiosity Kids</em> to global literary recognition through the annual <em>Curiosity Writing Awards</em> hosted by Pen & Ink Publishers, our publishing platforms cultivate critical thinking and cultural exchange. Each imprint operates under rigorous editorial review protocols, ethical journalism guidelines, and international ISBN cataloging standards, offering authors, researchers, journalists, and visual creators an authentic worldwide platform for meaningful expression.
                </p>
              </div>

              {/* Publication Scope Quick Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-charcoal/10">
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">30+</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">Countries Reached</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">International circulation & digital readers</p>
                </div>
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">05</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">Specialized Imprints</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">Travel, books, science, trade & ESG</p>
                </div>
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">7+ Yrs</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">Curiosity Kids</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">Continuous youth science journalism</p>
                </div>
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">Global</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">Distribution Channels</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">Amazon Kindle, Paperback & Institutional</p>
                </div>
              </div>
            </div>

            {/* In-Depth Profiles of Flagship Imprints */}
            <div className="space-y-6">
              <div className="pb-3 border-b border-charcoal/10">
                <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                  DETAILED IMPRINT DOSSIERS
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-forest-deep mt-1">
                  Operating Publications & Periodical Platforms
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Imprint 1: Touriosity Travelmag */}
                <div className="p-7 bg-paper border border-charcoal/15 rounded-xs space-y-4 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">PERIODICAL 01</span>
                      <span className="font-mono text-xs text-earth font-semibold">Print & Digital Magazine</span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-forest-deep">Touriosity Travelmag</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">International Tourism, World Heritage & Cultural Preservation</p>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      <em>The Touriosity</em> is EnVERT Group’s flagship international travel publication, dedicated to responsible ecotourism, intangible cultural heritage, indigenous lifestyles, and sustainable tourism development. Featuring meticulously researched travelogues, photo essays, and interviews with conservationists and cultural custodians across Asia, Europe, Africa, and the Americas, the magazine bridges destination marketing with ecological sensitivity. Available in print circulation, digital subscriber formats, and distributed across premium travel lounges and international tourism conferences.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-forest font-semibold">Portal: thetouriosity.com</span>
                    <a href="http://www.thetouriosity.com" target="_blank" rel="noreferrer" className="text-earth hover:text-forest flex items-center gap-1 font-bold">
                      Read Online <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Imprint 2: Pen & Ink Publishers */}
                <div className="p-7 bg-paper border border-charcoal/15 rounded-xs space-y-4 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">IMPRINT 02</span>
                      <span className="font-mono text-xs text-earth font-semibold">Book Publishing & Awards</span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-forest-deep">Pen & Ink Publishers</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Global Literature Anthologies & Author Publishing</p>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      Pen & Ink Publishers is an independent literary imprint established to discover, nurture, and publish emerging and established literary talent worldwide. The imprint produces high-quality multi-genre anthologies, poetry volumes, academic essays, and thematic non-fiction collections. Every title published through Pen & Ink receives international ISBN assignment, professional editorial curation, bespoke cover design, and global distribution in both paperback and Amazon Kindle digital editions, ensuring worldwide readership across continents.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-forest font-semibold">Kindle & Paperback Distribution</span>
                    <span className="text-charcoal/60">Annual Anthologies</span>
                  </div>
                </div>

                {/* Imprint 3: Curiosity Kids */}
                <div className="p-7 bg-paper border border-charcoal/15 rounded-xs space-y-4 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">PERIODICAL 03</span>
                      <span className="font-mono text-xs text-earth font-semibold">Youth Science & Literature</span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-forest-deep">Curiosity Kids Magazine</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Children's Educational Literacy & STEM Exploration</p>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      For more than seven continuous years, <em>Curiosity Kids</em> has been inspiring young readers, students, and educators with accessible scientific exploration, biodiversity discovery, space sciences, and imaginative creative writing. The magazine empowers young authors by publishing their original poems, science projects, and illustrated stories alongside expert articles crafted for elementary and middle school comprehension. With active global distribution through Amazon print editions, Curiosity Kids fosters early childhood critical thinking and ecological consciousness.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-forest font-semibold">7+ Years of Continuous Publication</span>
                    <span className="text-charcoal/60">Amazon Global</span>
                  </div>
                </div>

                {/* Imprint 4: Sustainable Energy Review */}
                <div className="p-7 bg-paper border border-charcoal/15 rounded-xs space-y-4 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">PERIODICAL 04</span>
                      <span className="font-mono text-xs text-earth font-semibold">B2B Trade & Engineering Journal</span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-forest-deep">Sustainable Energy Review</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Clean Energy Transition, BEE Audits & Decarbonization Policy</p>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      <em>Sustainable Energy Review</em> is our specialized technical and trade periodical addressing industrial renewable power deployments, statutory Bureau of Energy Efficiency (BEE) energy audits, commercial electric fleet integration, and corporate carbon accounting frameworks. Circulated among plant managers, chief sustainability officers, energy auditors, and regulatory consultants, the journal bridges techno-commercial engineering methodologies with ground-level industrial decarbonization case studies across heavy industries.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-forest font-semibold">Technical Industrial Circulation</span>
                    <span className="text-charcoal/60">BEE & Solar Focus</span>
                  </div>
                </div>

                {/* Imprint 5: Glare Post */}
                <div className="p-7 bg-paper border border-charcoal/15 rounded-xs space-y-4 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">PORTAL 05</span>
                      <span className="font-mono text-xs text-earth font-semibold">Digital Investigative Journalism</span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-forest-deep">Glare Post</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Independent Commentary, Climate Policy & Corporate ESG</p>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      <em>Glare Post</em> delivers fearless, independent digital journalism, geopolitical economic analysis, and investigative perspectives on environmental degradation, climate justice, and corporate ESG transparency. Staffed by dedicated contributing journalists, policy analysts, and academic researchers, Glare Post scrutinizes regulatory enforcement, greenwashing in enterprise marketing, and the real-world socio-economic impact of clean energy transitions on local communities across emerging economies.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-forest font-semibold">Digital News Desk: glarepost.com</span>
                    <a href="https://www.glarepost.com" target="_blank" rel="noreferrer" className="text-earth hover:text-forest flex items-center gap-1 font-bold">
                      Visit News Desk <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Curiosity Writing Awards Feature Box */}
            <div className="p-8 sm:p-10 bg-forest-deep text-paper rounded-xs border border-charcoal/20 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-paper/15 gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1 font-mono text-xs uppercase tracking-widest text-earth-light">
                    <Award className="w-4 h-4 text-earth" />
                    <span>ANNUAL LITERARY COMPETITION</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-paper">
                    The Curiosity Writing Awards
                  </h3>
                </div>
                <span className="font-mono text-xs text-paper/60">
                  Curated by Pen & Ink Publishers
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-paper/80 leading-relaxed font-sans">
                <div className="space-y-2">
                  <h5 className="font-heading text-base font-bold text-earth-light">Worldwide Literary Submissions</h5>
                  <p className="text-xs text-paper/70 leading-relaxed">
                    Open annually to creative writers, poets, environmental essayists, and student authors worldwide. Submissions span short fiction, climate narratives, cultural memoirs, and reflective poetry evaluated by a distinguished panel of editors and authors.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-heading text-base font-bold text-earth-light">Global Anthology Publication</h5>
                  <p className="text-xs text-paper/70 leading-relaxed">
                    Shortlisted and winning entries are curated into professionally edited print anthologies published through Pen & Ink Publishers with international ISBN assignments, available across Amazon paperback and Kindle digital libraries globally.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-heading text-base font-bold text-earth-light">Literary Recognition & Royalties</h5>
                  <p className="text-xs text-paper/70 leading-relaxed">
                    Award recipients receive author honorariums, certificate credentials, public literary citations, and contributor royalties, creating a verified stepping stone for emerging writers into professional international publication.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-paper/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
                <span className="text-paper/70">Manuscript submissions & editorial inquiries: curiosity@penandinkpublishers.com</span>
                <button
                  onClick={() => onOpenContact(
                    'Inquiry: Curiosity Writing Awards & Book Publishing (Pen & Ink)',
                    { domain: 'Publication & Media (Touriosity, Pen & Ink, Glare Post)' }
                  )}
                  className="px-5 py-2.5 bg-earth hover:bg-earth-dark text-paper font-heading text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors shrink-0"
                >
                  Submit Manuscript / Inquire
                </button>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Glarepost Films Specialized Film & Content Production Section */}
      {business.id === 'glarepost-films' && (
        <section className="py-16 bg-paper-warm border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 space-y-14">
            
            {/* Cinematic Mandate Overview */}
            <div className="p-8 sm:p-10 bg-paper border border-charcoal/15 rounded-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-charcoal/10 gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 bg-earth rounded-full"></span>
                    <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                      MULTI-FORMAT PRODUCTION HOUSE & VFX PIPELINE
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase text-forest-deep">
                    Glarepost Films: Cinematic Storytelling & Content Production
                  </h2>
                </div>
                <span className="font-mono text-xs text-charcoal/60">
                  Pre-to-Post Turnkey Filmmaking
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-charcoal/80 leading-relaxed font-sans">
                <p>
                  Glarepost Films operates as the dedicated film, documentary, and multi-format content production arm of EnVERT Group. With a focus on social impact, ecological transition, cultural geography, and investigative human stories, Glarepost Films brings complex concepts to the screen with cinematic depth and emotional resonance. Our capabilities span turnkey filmmaking—from original script development and casting to field cinematography and theatrical-grade post-production.
                </p>
                <p>
                  Equipped with 4K/6K digital cinema camera packages, licensed aerial drone cinematography, sync-sound location recording, and an end-to-end post-production studio running DaVinci Resolve color suites and surround sound mastering, Glarepost Films services documentary films, feature and short fiction, OTT web series, corporate documentaries, and high-impact broadcast commercials.
                </p>
              </div>

              {/* Film Scope Quick Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-charcoal/10">
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">4K / 6K</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">Cinema Capture</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">High dynamic range digital cinema rigs</p>
                </div>
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">06</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">Production Tracks</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">Documentary, fiction, OTT, TVCs, VFX</p>
                </div>
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">Turnkey</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">End-to-End Delivery</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">Pre-production to final delivery master</p>
                </div>
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">OTT & TVC</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">Multi-Platform</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">Streaming series & broadcast commercials</p>
                </div>
              </div>
            </div>

            {/* 8 Main Divisions Grid */}
            <div className="space-y-6">
              <div className="pb-3 border-b border-charcoal/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                    GLAREPOST FILMS — MAIN DIVISIONS
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-forest-deep mt-1">
                    Eight Core Operating Divisions
                  </h3>
                </div>
                <span className="font-mono text-xs text-charcoal/60">08 Main Divisions</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* 1. Film Production */}
                <div className="p-6 bg-paper border border-charcoal/15 rounded-xs space-y-3 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">DIVISION 01</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-forest-deep">Film Production</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Film & Web Series</p>
                    <p className="text-xs text-charcoal/80 leading-relaxed">
                      Feature films, short films, web series and original content.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-charcoal/10 text-[11px] font-mono text-charcoal/60">
                    Feature & Short Slate
                  </div>
                </div>

                {/* 2. Advertising & Brand Films */}
                <div className="p-6 bg-paper border border-charcoal/15 rounded-xs space-y-3 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">DIVISION 02</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-forest-deep">Advertising & Brand Films</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Commercial & Brand</p>
                    <p className="text-xs text-charcoal/80 leading-relaxed">
                      TV commercials, digital ads, corporate films, product films and campaign videos.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-charcoal/10 text-[11px] font-mono text-charcoal/60">
                    TVCs & Campaigns
                  </div>
                </div>

                {/* 3. Digital & OTT Content */}
                <div className="p-6 bg-paper border border-charcoal/15 rounded-xs space-y-3 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">DIVISION 03</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-forest-deep">Digital & OTT Content</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Digital & Streaming</p>
                    <p className="text-xs text-charcoal/80 leading-relaxed">
                      YouTube, social-media content, OTT projects and digital-first storytelling.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-charcoal/10 text-[11px] font-mono text-charcoal/60">
                    Digital-First IP
                  </div>
                </div>

                {/* 4. Documentary & Factual */}
                <div className="p-6 bg-paper border border-charcoal/15 rounded-xs space-y-3 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">DIVISION 04</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-forest-deep">Documentary & Factual</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Real-Life Storytelling</p>
                    <p className="text-xs text-charcoal/80 leading-relaxed">
                      Documentaries, social-impact films, cultural and real-life storytelling.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-charcoal/10 text-[11px] font-mono text-charcoal/60">
                    Social & Cultural Impact
                  </div>
                </div>

                {/* 5. Post-Production & VFX */}
                <div className="p-6 bg-paper border border-charcoal/15 rounded-xs space-y-3 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">DIVISION 05</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-forest-deep">Post-Production & VFX</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Finishing & Mastering</p>
                    <p className="text-xs text-charcoal/80 leading-relaxed">
                      Editing, colour grading, sound design, VFX, motion graphics and finishing.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-charcoal/10 text-[11px] font-mono text-charcoal/60">
                    Full Studio Pipeline
                  </div>
                </div>

                {/* 6. Music & Entertainment */}
                <div className="p-6 bg-paper border border-charcoal/15 rounded-xs space-y-3 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">DIVISION 06</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-forest-deep">Music & Entertainment</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Artist & Entertainment</p>
                    <p className="text-xs text-charcoal/80 leading-relaxed">
                      Music videos, artist content, entertainment programmes and promotional content.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-charcoal/10 text-[11px] font-mono text-charcoal/60">
                    Artist & Video Media
                  </div>
                </div>

                {/* 7. Production Services */}
                <div className="p-6 bg-paper border border-charcoal/15 rounded-xs space-y-3 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">DIVISION 07</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-forest-deep">Production Services</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Turnkey Line Support</p>
                    <p className="text-xs text-charcoal/80 leading-relaxed">
                      Line production, location management, casting, equipment, crew and production support.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-charcoal/10 text-[11px] font-mono text-charcoal/60">
                    Crew & Gear Logistics
                  </div>
                </div>

                {/* 8. Original IP & Content Development */}
                <div className="p-6 bg-paper border border-charcoal/15 rounded-xs space-y-3 flex flex-col justify-between hover:border-forest-deep transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                      <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">DIVISION 08</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-forest"></span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-forest-deep">Original IP & Content Development</h4>
                    <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Creative Incubation</p>
                    <p className="text-xs text-charcoal/80 leading-relaxed">
                      Developing and owning original film concepts, series, characters and other intellectual properties.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-charcoal/10 text-[11px] font-mono text-charcoal/60">
                    Proprietary IP Assets
                  </div>
                </div>

              </div>
            </div>

            {/* Production Engagement CTA Box */}
            <div className="p-8 sm:p-10 bg-forest-deep text-paper rounded-xs border border-charcoal/20 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-paper/15 gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1 font-mono text-xs uppercase tracking-widest text-earth-light">
                    <Film className="w-4 h-4 text-earth" />
                    <span>PRODUCTION INQUIRIES & COMMISSIONS</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-paper">
                    Commission A Film or Production Project
                  </h3>
                </div>
                <a
                  href="https://www.glarepost.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-earth-light hover:text-paper flex items-center gap-1.5 transition-colors font-bold"
                >
                  <span>Visit glarepost.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-paper/80 leading-relaxed font-sans">
                <div className="space-y-2">
                  <h5 className="font-heading text-base font-bold text-earth-light">Documentary & Commercial Pitches</h5>
                  <p className="text-xs text-paper/70 leading-relaxed">
                    Submit treatment briefs, documentary project proposals, or corporate commercial RFPs directly to our executive production desk for feasibility evaluation and budget modeling.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-heading text-base font-bold text-earth-light">Turnkey Technical Services</h5>
                  <p className="text-xs text-paper/70 leading-relaxed">
                    Access specialized 4K/6K camera rigs, licensed aerial drone survey teams, sound mastering suites, or DaVinci Resolve color grading for external film and broadcast productions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-heading text-base font-bold text-earth-light">Co-Productions & Screenplays</h5>
                  <p className="text-xs text-paper/70 leading-relaxed">
                    We welcome co-production partnerships with independent directors, international broadcasters, and writers with developed scripts in social impact, environment, and regional fiction.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-paper/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
                <span className="text-paper/70">Production inquiries & script submissions: admin@envertgroup.com</span>
                <button
                  onClick={() => onOpenContact(
                    'Inquiry: Film & Content Production (Glarepost Films)',
                    { domain: 'Film & Content Production (Glarepost Films)' }
                  )}
                  className="px-5 py-2.5 bg-earth hover:bg-earth-dark text-paper font-heading text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors shrink-0"
                >
                  Commission Film Project
                </button>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* EnVERT Foundation Specialized Non-Profit Stewardship Section */}
      {business.id === 'envert-foundation' && (
        <section className="py-16 bg-paper-warm border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 space-y-14">
            
            {/* Mission & Founding Charter Banner */}
            <div className="p-8 sm:p-10 bg-paper border border-charcoal/15 rounded-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-charcoal/10 gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 bg-earth rounded-full"></span>
                    <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                      NON-PROFIT PHILANTHROPIC CHARTER
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-4xl font-bold uppercase text-forest-deep">
                    EnVERT Foundation: Grassroots Ecology & Human Stewardship
                  </h2>
                </div>
                <span className="font-mono text-xs text-charcoal/60">
                  Community Action & Ecological Resilience
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-charcoal/80 leading-relaxed font-sans">
                <p>
                  EnVERT Foundation is the institutional non-profit and social stewardship foundation of EnVERT Group. Governed by a dedicated steering council and community advisory board, the Foundation translates sustainable engineering principles into actionable, high-impact grassroots initiatives. Focusing on ecological afforestation, experiential environmental literacy for school children, educational equity through STEM and literary scholarships, and clean drinking water advocacy in rural communities across West Bengal and Eastern India, EnVERT Foundation works hand-in-hand with local village panchayats, community schools, and environmental volunteers.
                </p>
                <p>
                  Rooted in the philosophy that true sustainability cannot be achieved through commercial engineering alone, EnVERT Foundation operates strictly on a non-profit basis with zero commercial dividend extraction. Every project—from micro-afforestation clusters planting native indigenous trees to community water contamination testing camps—is executed with meticulous documentation, long-term post-plantation survivability monitoring, and transparent public reporting.
                </p>
              </div>

              {/* Foundation Stewardship Scale Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-charcoal/10">
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">Thousands</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">Native Trees Planted</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">Neem, Banyan, Sal & Mahua saplings</p>
                </div>
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">&gt;85%</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">Survival Rate</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">Community guardianship & monitoring</p>
                </div>
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">25+</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">School Workshops</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">Experiential climate & science literacy</p>
                </div>
                <div className="p-4 bg-paper-warm border border-charcoal/10 rounded-xs">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-forest-deep block">100%</span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block mt-1">Non-Profit Integrity</span>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">Audited grassroots volunteer initiatives</p>
                </div>
              </div>
            </div>

            {/* Four Flagship Community Initiatives (Detailed Dossiers) */}
            <div className="space-y-6">
              <div className="pb-3 border-b border-charcoal/10">
                <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                  ACTIVE GROUND PROGRAMS
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-forest-deep mt-1">
                  Four Core Stewardship Initiatives
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Initiative 1: Afforestation Drives */}
                <div className="p-7 bg-paper border border-charcoal/15 rounded-xs space-y-4 hover:border-forest-deep transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                    <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">INITIATIVE 01</span>
                    <span className="font-mono text-xs text-earth font-semibold">Ecological Regeneration</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-forest-deep">Community Afforestation & Native Tree Cultivation</h4>
                  <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Micro-Forest Creation, Native Biodiversity & Soil Recovery</p>
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    EnVERT Foundation organizes large-scale native tree plantation drives across rural school campuses, degraded community lands, and riverbank embankments. Rather than planting commercial timber species, the Foundation focuses exclusively on climate-hardy native flora including Neem (<em>Azadirachta indica</em>), Banyan (<em>Ficus benghalensis</em>), Peepal (<em>Ficus religiosa</em>), Arjun, and Mahua. Crucially, every drive pairs local community guardians with systematic sapling watering and fencing protocols, achieving verified multi-year survival rates exceeding 85%.
                  </p>
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono text-charcoal/70">
                    <span className="font-bold text-forest-deep block mb-1">Key Objectives:</span>
                    Restoration of indigenous biodiversity, micro-climate cooling, ground water table recharge, and community shade creation.
                  </div>
                </div>

                {/* Initiative 2: Environmental Literacy */}
                <div className="p-7 bg-paper border border-charcoal/15 rounded-xs space-y-4 hover:border-forest-deep transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                    <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">INITIATIVE 02</span>
                    <span className="font-mono text-xs text-earth font-semibold">School Curriculum Outreach</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-forest-deep">Student Environmental Literacy & Green Schools</h4>
                  <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Experiential Climate Science & Plastic-Free Living</p>
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    Through its Green Schools outreach initiative, Foundation volunteers deliver hands-on, activity-based environmental education to primary and secondary school children. Sessions cover scientific waste segregation, vermicomposting of organic campus waste, the lifecycle of single-use plastics, bird and pollinator identification, and practical water conservation techniques. By empowering young students with tangible environmental knowledge, the Foundation fosters lifelong conservation habits among tomorrow's leaders.
                  </p>
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono text-charcoal/70">
                    <span className="font-bold text-forest-deep block mb-1">Key Objectives:</span>
                    Interactive school workshops, distribution of illustrated environmental primers, school campus tree gardens, and plastic-free pledges.
                  </div>
                </div>

                {/* Initiative 3: Scholarships & Youth Mentorship */}
                <div className="p-7 bg-paper border border-charcoal/15 rounded-xs space-y-4 hover:border-forest-deep transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                    <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">INITIATIVE 03</span>
                    <span className="font-mono text-xs text-earth font-semibold">Academic Equity</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-forest-deep">Youth Creative & STEM Academic Scholarships</h4>
                  <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Student Bursaries, Educational Kits & Literary Recognition</p>
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    Recognizing that academic opportunity is often constrained by socio-economic challenges, EnVERT Foundation awards annual merit-cum-means scholarships to deserving rural students excelling in STEM fields and creative arts. Working in close collaboration with Pen & Ink Publishers, the Foundation also sponsors the youth categories of the Curiosity Writing Awards, granting cash bursaries, scientific textbook kits, and certificate citations to encourage students from marginalized communities to pursue higher education.
                  </p>
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono text-charcoal/70">
                    <span className="font-bold text-forest-deep block mb-1">Key Objectives:</span>
                    Annual student bursaries, STEM lab supply donations, educational books distribution, and young author publishing sponsorships.
                  </div>
                </div>

                {/* Initiative 4: Clean Water & Community Sanitation */}
                <div className="p-7 bg-paper border border-charcoal/15 rounded-xs space-y-4 hover:border-forest-deep transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-charcoal/10">
                    <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">INITIATIVE 04</span>
                    <span className="font-mono text-xs text-earth font-semibold">Public Health & Sanitation</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-forest-deep">Rural Clean Water Advocacy & Hygiene Camps</h4>
                  <p className="text-xs font-mono text-charcoal/60 font-semibold uppercase">Groundwater Testing, Bio-Sanitation & Community Health</p>
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    Access to safe drinking water and dignified sanitation remains an urgent priority across rural Bengal. EnVERT Foundation conducts periodic water quality assessment camps, testing village tubewells for arsenic, excessive iron, and bacterial pathogens. In parallel, the Foundation conducts community hygiene education and promotes biological waste treatment solutions in partnership with WAGSOL’s biological sanitation research, advocating for zero open discharge and the protection of local groundwater tables.
                  </p>
                  <div className="p-3 bg-paper-warm border border-charcoal/10 text-xs font-mono text-charcoal/70">
                    <span className="font-bold text-forest-deep block mb-1">Key Objectives:</span>
                    Arsenic and pathogen field testing, community clean water storage awareness, bio-sanitation advocacy, and personal hygiene workshops.
                  </div>
                </div>

              </div>
            </div>

            {/* UN Sustainable Development Goals (SDG) Alignment Matrix */}
            <div className="p-8 sm:p-10 bg-forest-deep text-paper rounded-xs border border-charcoal/20 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-paper/15 gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1 font-mono text-xs uppercase tracking-widest text-earth-light">
                    <Globe className="w-4 h-4 text-earth" />
                    <span>GLOBAL SUSTAINABILITY BENCHMARK</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-paper">
                    United Nations Sustainable Development Goals (SDGs) Alignment
                  </h3>
                </div>
                <span className="font-mono text-xs text-paper/60">
                  Targeted Impact Verification
                </span>
              </div>

              <p className="text-sm text-paper/80 leading-relaxed max-w-4xl">
                EnVERT Foundation aligns every philanthropic deployment with the United Nations 2030 Agenda for Sustainable Development, actively contributing measurable outcomes across five core Global Goals:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
                <div className="p-4 bg-paper/10 border border-paper/15 rounded-xs space-y-2">
                  <span className="font-mono text-xs font-bold text-earth-light block">SDG 04</span>
                  <h5 className="font-heading text-sm font-bold text-paper">Quality Education</h5>
                  <p className="text-[11px] text-paper/70 leading-snug">
                    STEM scholarships, environmental primers, and school literacy workshops for rural students.
                  </p>
                </div>

                <div className="p-4 bg-paper/10 border border-paper/15 rounded-xs space-y-2">
                  <span className="font-mono text-xs font-bold text-earth-light block">SDG 06</span>
                  <h5 className="font-heading text-sm font-bold text-paper">Clean Water & Sanitation</h5>
                  <p className="text-[11px] text-paper/70 leading-snug">
                    Drinking water contaminant testing, hygiene awareness, and bio-sanitation system promotion.
                  </p>
                </div>

                <div className="p-4 bg-paper/10 border border-paper/15 rounded-xs space-y-2">
                  <span className="font-mono text-xs font-bold text-earth-light block">SDG 11</span>
                  <h5 className="font-heading text-sm font-bold text-paper">Sustainable Communities</h5>
                  <p className="text-[11px] text-paper/70 leading-snug">
                    Rural community green spaces, shaded village centers, and ecological restoration clusters.
                  </p>
                </div>

                <div className="p-4 bg-paper/10 border border-paper/15 rounded-xs space-y-2">
                  <span className="font-mono text-xs font-bold text-earth-light block">SDG 13</span>
                  <h5 className="font-heading text-sm font-bold text-paper">Climate Action</h5>
                  <p className="text-[11px] text-paper/70 leading-snug">
                    Carbon sequestration through native afforestation and youth climate resilience advocacy.
                  </p>
                </div>

                <div className="p-4 bg-paper/10 border border-paper/15 rounded-xs space-y-2">
                  <span className="font-mono text-xs font-bold text-earth-light block">SDG 15</span>
                  <h5 className="font-heading text-sm font-bold text-paper">Life on Land</h5>
                  <p className="text-[11px] text-paper/70 leading-snug">
                    Protection of native flora, micro-habitat restoration, and biodiversity preservation.
                  </p>
                </div>
              </div>

              {/* Stewardship Contact & Participation Bar */}
              <div className="pt-6 border-t border-paper/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
                <span className="text-paper/70">Volunteer participation, scholarship nominations & CSR partnerships: admin@envertgroup.com</span>
                <button
                  onClick={() => onOpenContact(
                    'Inquiry: EnVERT Foundation (Volunteer, CSR & Stewardship)',
                    { domain: 'Social Stewardship & Community Ecology (EnVERT Foundation)' }
                  )}
                  className="px-5 py-2.5 bg-earth hover:bg-earth-dark text-paper font-heading text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors shrink-0"
                >
                  Partner With Foundation
                </button>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* India Corporate Trainers Specialized Section: 5 Principal Service Areas & MNC Client Wall */}
      {business.id === 'india-corporate-trainers' && (
        <section className="py-14 bg-paper-warm border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 space-y-12">
            
            {/* Scale & Enterprise Performance Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Completed Enterprise Assignments", value: "200+", desc: "Delivered for global industry leaders" },
                { label: "Nationwide Hubs", value: "10 Cities", desc: "Pan-India operational presence" },
                { label: "Fortune 500 MNC Clients", value: "12+", desc: "Technology, banking & manufacturing" },
                { label: "Service Disciplines", value: "05 Tracks", desc: "Training, Education, Legal, Relocation, Language" }
              ].map((stat, sIdx) => (
                <div key={sIdx} className="p-6 bg-paper border border-charcoal/15 rounded-xs space-y-1">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-forest-deep block">
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase text-earth block">
                    {stat.label}
                  </span>
                  <p className="text-[11px] text-charcoal/60 font-sans">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Five Principal Service Areas Header */}
            <div>
              <div className="pb-4 mb-8 border-b border-charcoal/10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 bg-earth rounded-full"></span>
                    <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                      DOCUMENTED ORGANISATIONAL CAPABILITY
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-forest-deep">
                    Five Principal Service Areas
                  </h2>
                </div>
                <span className="font-mono text-xs text-charcoal/60">
                  Comprehensive Workforce & Institutional Solutions
                </span>
              </div>

              {/* 5 Service Areas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(business.serviceAreas || []).map((area, aIdx) => (
                  <div
                    key={aIdx}
                    className={`p-7 bg-paper border border-charcoal/15 rounded-xs flex flex-col justify-between hover:border-forest-deep transition-all duration-200 ${
                      aIdx === 0 ? 'lg:col-span-2' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-charcoal/10 mb-4">
                        <span className="font-mono text-xs font-bold text-forest uppercase tracking-wider">
                          SERVICE DISCIPLINE {area.num}
                        </span>
                        <span className="text-[11px] font-mono text-earth font-semibold uppercase">
                          {area.subtitle}
                        </span>
                      </div>
                      
                      <h3 className="font-heading text-xl font-bold text-forest-deep mb-2">
                        {area.title}
                      </h3>
                      
                      <p className="text-sm text-charcoal/80 leading-relaxed mb-5">
                        {area.desc}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-charcoal/10">
                        {area.points && area.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs text-charcoal/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Blue-Chip MNC Clients Showcase */}
            <div className="p-8 sm:p-10 bg-forest-deep text-paper rounded-xs border border-charcoal/20 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-paper/15 gap-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-earth-light font-semibold block mb-1">
                    ENTERPRISE ENGAGEMENT RECORD
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-paper">
                    Major Multinational Corporate Clients
                  </h3>
                </div>
                <span className="font-mono text-xs text-paper/60">
                  Global Leaders Trained & Consulted
                </span>
              </div>

              <p className="text-sm text-paper/80 max-w-3xl leading-relaxed">
                India Corporate Trainers has delivered structured employee training, executive capability curricula, and corporate advisory to leadership and functional teams across premier global organizations:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
                {[
                  "Microsoft", "IBM", "Coca-Cola", "PepsiCo",
                  "Johnson & Johnson", "Citibank", "ING", "Cisco",
                  "GE Commercial Finance", "Thermo Fisher Scientific",
                  "Goldman Sachs", "Jaguar Land Rover"
                ].map((client, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 bg-paper/10 border border-paper/15 rounded-xs flex items-center justify-center text-center hover:bg-paper/15 transition-colors"
                  >
                    <span className="font-heading text-xs sm:text-sm font-bold text-paper tracking-wide">
                      {client}
                    </span>
                  </div>
                ))}
              </div>

              {/* Engagement CTA Bar */}
              <div className="pt-6 border-t border-paper/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs font-mono text-paper/70">
                  <span>Inquire for enterprise training mandates, legal consultancy or corporate relocation</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenContact(
                      'Inquiry: India Corporate Trainers (Corporate Training & Relocation)',
                      { domain: 'Corporate Language & Cultural Training (India Corporate Trainers)' }
                    )}
                    className="px-5 py-2.5 bg-earth hover:bg-earth-dark text-paper font-heading text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
                  >
                    Book Corporate Consultation
                  </button>
                  <a
                    href="mailto:admin@envertgroup.com"
                    className="px-4 py-2.5 border border-paper/25 hover:border-paper text-paper text-xs font-mono uppercase transition-colors"
                  >
                    admin@envertgroup.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Authentic Scraped Project Photography Gallery (e.g. EnVERT Foundation) */}
      {(() => {
        const uniqueGallery = (business.galleryImages || []).filter(
          (item, idx, self) =>
            item.src !== business.image &&
            self.findIndex((s) => s.src === item.src) === idx
        );
        if (uniqueGallery.length === 0) return null;

        return (
          <section className="py-16 bg-paper-warm border-b border-charcoal/15">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
              <div className="pb-4 mb-8 border-b border-charcoal/10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 bg-earth rounded-full"></span>
                  <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                    AUTHENTIC FIELD DOCUMENTATION
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-forest-deep">
                  Grassroots Project & Stewardship Photography
                </h2>
                <p className="text-xs text-charcoal/70 mt-1 font-mono">
                  Archival documentation of EnVERT Foundation tree plantation drives, rural literacy campaigns, and youth awards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {uniqueGallery.map((item, idx) => (
                  <div key={idx} className="group bg-paper border border-charcoal/15 overflow-hidden rounded-xs flex flex-col justify-between">
                    <div className="aspect-[4/3] bg-charcoal/5 overflow-hidden">
                      <img
                        src={item.src}
                        alt={`${item.caption} — EnVERT Group field installation & corporate project archive`}
                        width="400"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 bg-paper">
                      <p className="text-[11px] font-mono text-charcoal/80 leading-snug">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Capabilities Section */}
      <section className="py-16 bg-paper border-b border-charcoal/15">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="pb-4 mb-8 border-b border-charcoal/10">
            <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
              TECHNICAL SCOPE
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase text-forest-deep mt-1">
              Core Capabilities & Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {business.capabilities.map((cap, i) => (
              <div key={i} className="p-5 bg-paper-warm border border-charcoal/15 flex items-start gap-3">
                <span className="font-mono text-xs text-earth font-semibold pt-0.5">0{i + 1}.</span>
                <div>
                  <h3 className="font-heading text-sm font-bold text-forest-deep">{cap}</h3>
                  <p className="text-xs text-charcoal/65 mt-1">
                    Executed according to national and international engineering codes with rigorous documentation.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects (if any) */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-paper-warm border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="pb-4 mb-8 border-b border-charcoal/10">
              <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                SELECTED DELIVERIES
              </span>
              <h2 className="font-heading text-2xl font-bold uppercase text-forest-deep mt-1">
                Representative Projects in {business.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <div key={p.id} className="bg-paper border border-charcoal/15 p-6">
                  <span className="font-mono text-[10px] text-earth uppercase tracking-widest">{p.industry} • {p.year}</span>
                  <h3 className="font-heading text-lg font-bold text-forest-deep mt-2">{p.title}</h3>
                  <p className="text-xs text-charcoal/70 mt-2">{p.scope}</p>
                  <div className="mt-4 pt-3 border-t border-charcoal/10 text-xs text-forest font-semibold">
                    Outcome: {p.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* Bottom Switcher: Navigate to other businesses */}
      <section className="py-12 bg-forest-dark text-paper">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <RouterLink
            to={`/businesses/${prevBusiness.id}`}
            className="flex items-center gap-3 text-paper hover:text-earth transition-colors group text-left"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="font-mono text-[10px] text-paper/50 block uppercase">Previous Domain</span>
              <span className="font-heading text-sm font-bold uppercase">{prevBusiness.name}</span>
            </div>
          </RouterLink>

          <RouterLink
            to="/businesses"
            className="font-mono text-xs uppercase tracking-wider text-earth hover:underline"
          >
            View All Corporate Verticals
          </RouterLink>

          <RouterLink
            to={`/businesses/${nextBusiness.id}`}
            className="flex items-center gap-3 text-paper hover:text-earth transition-colors group text-right"
          >
            <div>
              <span className="font-mono text-[10px] text-paper/50 block uppercase">Next Domain</span>
              <span className="font-heading text-sm font-bold uppercase">{nextBusiness.name}</span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </RouterLink>
        </div>
      </section>

    </div>
  );
}
