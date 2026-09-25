import React from 'react';
import { ArrowUp, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteMetadata } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-dark text-paper border-t border-paper/10 pt-16 pb-12 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-paper/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" onClick={scrollToTop} className="inline-flex items-center space-x-3 group">
              <img
                src={siteMetadata.logo || "/assets/logos/envert_group_logo.png"}
                alt="EnVERT Group"
                className="h-10 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-paper leading-none">
                  EnVERT
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-earth font-semibold mt-0.5">
                  GROUP
                </span>
              </div>
            </Link>

            <p className="text-sm text-paper/70 max-w-sm leading-relaxed">
              A multidisciplinary corporate group operating across clean power engineering, industrial BEE audits, commercial electric vehicles, international media publishing, corporate training, and social stewardship.
            </p>

            <div className="pt-2 text-xs font-mono text-paper/50 space-y-1.5">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-earth shrink-0" />
                <span>Headquarters: Kolkata, West Bengal, India</span>
              </p>
              <p className="text-[11px] text-paper/40 pl-5">
                Statutory disclosures and credentials verifiable on corporate request.
              </p>
            </div>
          </div>

          {/* Operating Divisions */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              Operating Domains
            </p>
            <ul className="space-y-2 text-xs text-paper/75 font-mono">
              <li>
                <Link to="/businesses/energy" className="hover:text-paper hover:text-earth transition-colors">
                  01. Clean Energy & BEE Audits
                </Link>
              </li>
              <li>
                <Link to="/businesses/transport-electric" className="hover:text-paper hover:text-earth transition-colors">
                  02. Commercial EV Systems
                </Link>
              </li>
              <li>
                <Link to="/businesses/publication" className="hover:text-paper hover:text-earth transition-colors">
                  03. Publishing & Global Media
                </Link>
              </li>
              <li>
                <Link to="/businesses/icst" className="hover:text-paper hover:text-earth transition-colors">
                  04. ICST Global Capability Training
                </Link>
              </li>
              <li>
                <Link to="/businesses/fashion-lifestyle" className="hover:text-paper hover:text-earth transition-colors">
                  05. Atmaja Sustainable Fashion
                </Link>
              </li>
              <li>
                <Link to="/businesses/afield-gallery" className="hover:text-paper hover:text-earth transition-colors">
                  06. Afield Contemporary Art
                </Link>
              </li>
              <li>
                <Link to="/businesses/envert-foundation" className="hover:text-paper hover:text-earth transition-colors">
                  07. EnVERT Foundation Stewardship
                </Link>
              </li>
              <li>
                <Link to="/businesses/envert-agro-food" className="hover:text-paper hover:text-earth transition-colors">
                  08. EnVERT Agro & Food Processing
                </Link>
              </li>
            </ul>
          </div>

          {/* Group Entities & Portals */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              External Portals & Brands
            </p>
            <ul className="space-y-2 text-xs text-paper/75">
              <li>
                <a
                  href="http://www.nrgindia.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-earth transition-colors inline-flex items-center gap-1.5"
                >
                  <span>NRG India (Clean Energy)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-paper/40" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.glarepost.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-earth transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Glare Post (Digital Journalism)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-paper/40" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.icstglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-earth transition-colors inline-flex items-center gap-1.5"
                >
                  <span>ICST Global (Training Portal)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-paper/40" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.thetouriosity.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-earth transition-colors inline-flex items-center gap-1.5"
                >
                  <span>The Touriosity (Travel Magazine)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-paper/40" />
                </a>
              </li>
              <li>
                <Link
                  to="/businesses/pen-ink"
                  className="hover:text-earth transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Pen & Ink (Curiosity Kids)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/companies"
                  className="text-earth hover:text-earth-light transition-colors inline-flex items-center gap-1.5 font-semibold font-mono text-[11px]"
                >
                  <span>→ View All 14 Group Brands</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Communication Desks */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              Contact Desks
            </p>
            <div className="space-y-2.5 text-xs text-paper/80 font-mono">
              <div>
                <span className="text-[10px] text-paper/40 block">Corporate HQ:</span>
                <a href={`tel:${siteMetadata.phone}`} className="hover:text-earth transition-colors">
                  {siteMetadata.phone}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-paper/40 block">EV Division:</span>
                <a href={`tel:${siteMetadata.evPhone}`} className="hover:text-earth transition-colors">
                  {siteMetadata.evPhone}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-paper/40 block">General Inquiries:</span>
                <a href={`mailto:${siteMetadata.email}`} className="hover:text-earth transition-colors truncate block">
                  {siteMetadata.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-paper/40 block">Talent & Careers:</span>
                <a href={`mailto:${siteMetadata.hrEmail}`} className="hover:text-earth transition-colors truncate block text-earth-light">
                  {siteMetadata.hrEmail}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Quick Navigation, Legal & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono text-paper/50">
          <div>
            © {new Date().getFullYear()} EnVERT Group. All rights reserved. Multidisciplinary Corporate Architecture.
          </div>
          
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <Link to="/about" className="hover:text-paper transition-colors">About & Governance</Link>
            <Link to="/companies" className="hover:text-paper transition-colors">Registered Companies</Link>
            <Link to="/projects" className="hover:text-paper transition-colors">Selected Work</Link>
            <Link to="/insights" className="hover:text-paper transition-colors">Insights</Link>
            <Link to="/careers" className="hover:text-paper transition-colors">Careers</Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-paper hover:text-earth transition-colors uppercase tracking-wider ml-auto md:ml-2 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
