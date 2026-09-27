import React from 'react';
import { Link as RouterLink, useParams as useRouterParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ExternalLink, Phone, Mail, CheckCircle2, MapPin, Calendar, Clock, Layers, Award, BookOpen, Globe } from 'lucide-react';
import { businessesData, projectsData, insightsData, siteMetadata } from '../data/siteData';
import EditorialImage from '../components/EditorialImage';

export default function BusinessDetail({ onOpenContact, forcedSlug }) {
  const params = useRouterParams();
  const targetSlug = forcedSlug || params.slug;
  const business = businessesData.find((b) => 
    b.id.toLowerCase() === targetSlug?.toLowerCase() || 
    b.urlSlug?.toLowerCase() === targetSlug?.toLowerCase() ||
    b.aliases?.includes(targetSlug?.toLowerCase()) ||
    (targetSlug?.toLowerCase() === 'touriosity' && b.id === 'publication') ||
    (targetSlug?.toLowerCase() === 'thetouriosity' && b.id === 'publication') ||
    (targetSlug?.toLowerCase() === 'touriosity-travelmag' && b.id === 'publication') ||
    (targetSlug?.toLowerCase() === 'mobility' && b.id === 'transport-electric') ||
    (targetSlug?.toLowerCase() === 'corporate-training' && b.id === 'icst') ||
    (targetSlug?.toLowerCase() === 'training' && b.id === 'icst') ||
    (targetSlug?.toLowerCase() === 'publishing' && b.id === 'publication') ||
    (targetSlug?.toLowerCase() === 'pen-ink' && b.id === 'publication') ||
    (targetSlug?.toLowerCase() === 'foundation' && b.id === 'envert-foundation') ||
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
    (targetSlug?.toLowerCase() === 'bldc-fans' && b.id === 'wagsol')
  );

  if (!business) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-paper-warm">
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

  // Find related projects & insights
  const relatedProjects = projectsData.filter(
    (p) => p.industry.toLowerCase().includes(business.id.toLowerCase()) || (business.id === 'energy' && p.industry.includes('ENERGY'))
  );

  const relatedInsights = insightsData.filter(
    (i) => i.category.toLowerCase().includes(business.id.toLowerCase()) || 
           (business.id === 'energy' && i.category.includes('ENERGY')) ||
           (business.id === 'glarepost' && i.category.includes('GLARE'))
  );

  // Next / Previous business navigation
  const currentIndex = businessesData.findIndex((b) => b.id === business.id);
  const prevBusiness = currentIndex > 0 ? businessesData[currentIndex - 1] : businessesData[businessesData.length - 1];
  const nextBusiness = currentIndex < businessesData.length - 1 ? businessesData[currentIndex + 1] : businessesData[0];

  return (
    <div className="bg-paper-warm min-h-screen">
      
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
                  <span className="text-earth font-semibold uppercase tracking-wider">
                    SECTOR: {business.category}
                  </span>
                  <span className="text-charcoal/30">•</span>
                  <span className="text-forest font-bold uppercase tracking-wider">
                    OPERATED BY {business.companyName}
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
                    onClick={() => onOpenContact(`Inquiry: ${business.name} (${business.brandRef || 'EnVERT'})`)}
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
                  Businesses Under {business.name}
                </h2>
              </div>
              <span className="text-xs font-mono text-charcoal/50">
                {business.businessesUnderCategory.length} ACTIVE OPERATING {business.businessesUnderCategory.length === 1 ? 'UNIT' : 'UNITS'}
              </span>
            </div>

            <div className={`grid grid-cols-1 ${business.businessesUnderCategory.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-xl'} gap-6`}>
              {business.businessesUnderCategory.map((sub, sIdx) => (
                <div key={sIdx} className="p-6 bg-paper-warm border border-charcoal/15 rounded-xs flex flex-col justify-between hover:border-forest-deep transition-all duration-200 shadow-xs">
                  <div>
                    {sub.logo && (
                      <div className="mb-4 bg-white p-3 border border-charcoal/10 inline-flex items-center justify-center rounded-xs h-16 w-auto max-w-[200px]">
                        <img src={sub.logo} alt={sub.name} className="max-h-full max-w-full object-contain" />
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
                    {sub.url ? (
                      <a
                        href={sub.url}
                        target={sub.url.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-forest hover:text-earth transition-colors"
                      >
                        <span>Official Platform</span>
                        <ExternalLink className="w-3.5 h-3.5 text-earth" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-charcoal/50">Operating Division</span>
                    )}

                    <button
                      onClick={() => onOpenContact(`Inquiry: ${sub.name} (${business.name})`)}
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

      {/* Special Section for EV Models (if mobility) */}
      {business.models && (
        <section className="py-12 bg-paper border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="pb-4 mb-8 border-b border-charcoal/10">
              <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                COMMERCIAL FLEET HARDWARE
              </span>
              <h2 className="font-heading text-2xl font-bold uppercase text-forest-deep mt-1">
                EnVERT Electric Vehicle Series
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {business.models.map((m, idx) => (
                <div key={m.name} className="p-6 bg-paper-warm border border-charcoal/15 rounded-xs">
                  <span className="font-mono text-xs text-earth font-bold">PLATFORM 0{idx + 1}</span>
                  <h3 className="font-heading text-xl font-bold text-forest-deep mt-2">{m.name}</h3>
                  <p className="text-xs font-mono text-leaf-dark mt-1 uppercase font-semibold">{m.type}</p>
                  <p className="text-xs text-charcoal/70 mt-3 leading-relaxed">
                    Engineered for high-ambient tropical durability, duty-cycle battery longevity, and low operating expenditure under the FAME India regulatory architecture.
                  </p>
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
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
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

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <section className="py-16 bg-paper border-b border-charcoal/15">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="pb-4 mb-8 border-b border-charcoal/10">
              <span className="font-mono text-xs text-earth uppercase font-semibold tracking-wider">
                PERSPECTIVES & RESEARCH
              </span>
              <h2 className="font-heading text-2xl font-bold uppercase text-forest-deep mt-1">
                Related Group Publications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedInsights.map((ins) => (
                <div key={ins.id} className="p-6 bg-paper-warm border border-charcoal/15">
                  <div className="flex items-center justify-between text-xs font-mono text-charcoal/50 mb-2">
                    <span className="text-earth font-semibold">{ins.category}</span>
                    <span>{ins.date}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-forest-deep">{ins.title}</h3>
                  <p className="text-xs text-charcoal/75 mt-2">{ins.excerpt}</p>
                  <p className="text-[11px] font-mono text-charcoal/50 mt-4">Published by: {ins.author}</p>
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
