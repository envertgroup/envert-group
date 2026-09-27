import React from 'react';
import { ArrowUp, ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteMetadata } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About EnVERT', to: '/about' },
    { label: 'Services & Businesses', to: '/businesses' },
    { label: 'Operating Companies', to: '/companies' },
    { label: 'Selected Work', to: '/projects' },
    { label: 'Careers & Opportunities', to: '/careers' },
    { label: 'Contact & Inquiries', to: '/contact' },
  ];

  const externalPortals = [
    { label: 'NRG India', href: 'http://www.nrgindia.com' },
    { label: 'ICST Global', href: 'http://www.icstglobal.com' },
    { label: 'Glare Post', href: 'https://www.glarepost.com' },
    { label: 'Touriosity Travelmag', href: 'http://www.thetouriosity.com' },
    { label: 'EnVERT EV', href: 'https://www.envertelectric.com' },
  ];

  return (
    <footer className="bg-forest-deep text-paper border-t border-paper/10 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Main Content Grid */}
        <div className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" onClick={scrollToTop} className="inline-block group">
              <img
                src={siteMetadata.logo || '/assets/logos/envert_group_logo.webp'}
                alt="EnVERT Group Corporate Logo — Sustainable Engineering & Global Media"
                width="200"
                height="48"
                loading="lazy"
                decoding="async"
                className="h-10 sm:h-12 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-200"
              />
            </Link>

            <p className="text-sm text-paper/70 leading-relaxed max-w-md">
              A multidisciplinary corporate group operating across clean power engineering, industrial BEE compliance, electric mobility, sustainable tourism, digital media, and international publishing.
            </p>

            <div className="pt-2 space-y-2 text-xs text-paper/50 font-mono">
              <div className="flex items-center gap-2 text-paper/70">
                <MapPin className="w-3.5 h-3.5 text-earth shrink-0" />
                <span>Kolkata, West Bengal, India</span>
              </div>
              <p className="text-[11px] text-paper/40 leading-normal pl-5">
                Statutory corporate credentials and compliance frameworks verifiable on formal enterprise request.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs text-paper/70">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={scrollToTop}
                    className="hover:text-paper hover:translate-x-0.5 inline-block transition-all duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portals & Media (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              Group Portals
            </p>
            <ul className="space-y-2.5 text-xs text-paper/70">
              {externalPortals.map((portal) => (
                <li key={portal.label}>
                  {portal.href ? (
                    <a
                      href={portal.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-earth inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>{portal.label}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-paper/30 shrink-0" />
                    </a>
                  ) : (
                    <Link
                      to={portal.to}
                      onClick={scrollToTop}
                      className="hover:text-earth transition-colors"
                    >
                      {portal.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-1.5">
                <Link
                  to="/companies"
                  onClick={scrollToTop}
                  className="text-earth hover:text-earth-light inline-flex items-center gap-1 text-[11px] font-mono font-medium transition-colors"
                >
                  <span>All 14 group brands</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Desks (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              Contact Desks
            </p>
            
            <div className="space-y-3.5 text-xs">
              <div className="p-3 bg-paper/5 border border-paper/10 rounded-sm space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-earth block">
                  Corporate HQ
                </span>
                <a
                  href={`tel:${siteMetadata.phone}`}
                  className="font-mono text-paper/90 hover:text-earth transition-colors block text-sm font-medium"
                >
                  {siteMetadata.phone}
                </a>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-paper/40 block">General Correspondence:</span>
                  <a
                    href={`mailto:${siteMetadata.email}`}
                    className="text-paper/80 hover:text-earth transition-colors truncate block"
                  >
                    {siteMetadata.email}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-paper/40 block">Talent & Human Capital:</span>
                  <a
                    href={`mailto:${siteMetadata.hrEmail}`}
                    className="text-earth-light hover:text-paper transition-colors truncate block"
                  >
                    {siteMetadata.hrEmail}
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-earth/15 hover:bg-earth text-earth hover:text-forest-deep border border-earth/30 rounded-xs font-mono text-xs font-medium transition-all duration-200"
                >
                  <span>Initiate Consultation</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="py-6 border-t border-paper/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-paper/50">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} EnVERT® Group. All rights reserved.</span>
            <span className="hidden sm:inline text-paper/20">|</span>
            <span className="text-paper/40">Multidisciplinary Engineering & Advisory</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-paper/60 hover:text-earth transition-colors uppercase tracking-wider cursor-pointer self-start sm:self-auto"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
