import React from 'react';
import { ExternalLink, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getCompaniesPageSchema } from '../data/seoData';
import { brandsData } from '../data/siteData';

export default function CompaniesPage({ onOpenContact }) {
  const companies = brandsData;

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
                      width="160"
                      height="44"
                      loading="lazy"
                      decoding="async"
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
            onClick={() => onOpenContact('Group Company General Inquiry', { domain: 'General Inquiry / Corporate Consultation' })}
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
