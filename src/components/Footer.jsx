import React from 'react';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { siteMetadata } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-dark text-paper border-t border-paper/10 pt-16 pb-12 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-paper/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/logos/envert_group_logo.png"
                alt="EnVERT Group"
                className="h-10 w-auto object-contain brightness-110"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-paper leading-none">
                  ENVERT
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-earth font-semibold mt-0.5">
                  GROUP
                </span>
              </div>
            </div>
            <p className="text-sm text-paper/70 max-w-sm leading-relaxed">
              A multidisciplinary group operating across clean energy, industrial energy audits, electric vehicles, corporate capability training, sustainability, and publishing.
            </p>
            <div className="pt-2 text-xs font-mono text-paper/50 space-y-1">
              <p>Headquarters: Kolkata, West Bengal, India</p>
              <p>Corporate CIN & Statutory Disclosures on Request</p>
            </div>
          </div>

          {/* Operational Practices */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              Operational Practices
            </p>
            <ul className="space-y-2 text-xs text-paper/80 font-mono">
              <li><a href="/businesses/energy" className="hover:text-paper transition-colors">01. Energy & BEE Audits (NRG India)</a></li>
              <li><a href="/businesses/transport-electric" className="hover:text-paper transition-colors">02. Electric Vehicles (EnVERT E-Vehicles)</a></li>
              <li><a href="/businesses/icst" className="hover:text-paper transition-colors">03. Corporate Training (ICST Global)</a></li>
              <li><a href="/businesses/glarepost" className="hover:text-paper transition-colors">04. Glare Post (Digital News & Media)</a></li>
              <li><a href="/businesses/pen-ink" className="hover:text-paper transition-colors">05. Publishing & Awards (Pen & Ink)</a></li>
              <li><a href="/businesses/fashion-lifestyle" className="hover:text-paper transition-colors">06. Atmaja (Sustainable Fashion)</a></li>
              <li><a href="/businesses/envert-foundation" className="hover:text-paper transition-colors">07. EnVERT Foundation (Ecology)</a></li>
            </ul>
          </div>

          {/* Group Entities & External Portals */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              Operating Platforms
            </p>
            <ul className="space-y-2 text-xs text-paper/80">
              <li>
                <a href="http://www.nrgindia.com" target="_blank" rel="noreferrer" className="hover:text-earth transition-colors inline-flex items-center gap-1">
                  <span>NRG India (Energy)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-paper/40" />
                </a>
              </li>
              <li>
                <a href="https://www.glarepost.com" target="_blank" rel="noreferrer" className="hover:text-earth transition-colors inline-flex items-center gap-1">
                  <span>Glare Post (Digital Journalism)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-paper/40" />
                </a>
              </li>
              <li>
                <a href="https://www.envertgroup.com/transport-electric" target="_blank" rel="noreferrer" className="hover:text-earth transition-colors inline-flex items-center gap-1">
                  <span>EnVERT E-Vehicles Pvt. Ltd.</span>
                  <ExternalLink className="w-2.5 h-2.5 text-paper/40" />
                </a>
              </li>
              <li>
                <a href="http://www.icstglobal.com" target="_blank" rel="noreferrer" className="hover:text-earth transition-colors inline-flex items-center gap-1">
                  <span>ICST Global (Training)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-paper/40" />
                </a>
              </li>
              <li>
                <a href="https://www.envertgroup.com/pen-ink" target="_blank" rel="noreferrer" className="hover:text-earth transition-colors inline-flex items-center gap-1">
                  <span>Pen & Ink (Curiosity Kids)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-paper/40" />
                </a>
              </li>
              <li>
                <a href="http://www.thetouriosity.com" target="_blank" rel="noreferrer" className="hover:text-earth transition-colors inline-flex items-center gap-1">
                  <span>The Touriosity (Travel Media)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-paper/40" />
                </a>
              </li>
              <li>
                <a href="https://www.glarepost.com" target="_blank" rel="noreferrer" className="hover:text-earth transition-colors inline-flex items-center gap-1">
                  <span>Glare Post (Perspectives)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-paper/40" />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Communication Desks */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              Contact Desks
            </p>
            <div className="space-y-2 text-xs text-paper/80 font-mono">
              <a href={`tel:${siteMetadata.phone}`} className="block hover:text-earth transition-colors">
                HQ: {siteMetadata.phone}
              </a>
              <a href={`tel:${siteMetadata.evPhone}`} className="block hover:text-earth transition-colors">
                EV: {siteMetadata.evPhone}
              </a>
              <a href={`mailto:${siteMetadata.email}`} className="block hover:text-earth transition-colors truncate">
                {siteMetadata.email}
              </a>
              <a href={`mailto:${siteMetadata.hrEmail}`} className="block hover:text-earth transition-colors truncate text-earth-light">
                {siteMetadata.hrEmail}
              </a>
              <p className="text-[11px] text-paper/50 pt-1 font-sans">
                Kolkata, WB, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-paper/50">
          <div>
            © {new Date().getFullYear()} EnVERT Group. All rights reserved. Multidisciplinary Engineering & Corporate Advisory.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-paper transition-colors">Governance</a>
            <a href="#careers" className="hover:text-paper transition-colors">Active Careers</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-paper hover:text-earth transition-colors uppercase tracking-wider"
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
