import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X, Bell, ExternalLink } from 'lucide-react';
import { businessesData, siteMetadata } from '../data/siteData';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessesDropdownOpen, setBusinessesDropdownOpen] = useState(false);
  const [mobileBusinessesOpen, setMobileBusinessesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setBusinessesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setBusinessesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Editorial Ticker Bar */}
      <div className="bg-forest-deep text-paper/80 text-[11px] py-1.5 px-6 sm:px-12 border-b border-paper/10 tracking-wider uppercase font-mono hidden md:flex justify-between items-center z-50">
        <div className="flex items-center space-x-5">
          <span className="flex items-center gap-1.5 text-earth-light">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse"></span>
            EnVERT Group Corporate
          </span>
          <span className="text-paper/30">|</span>
          <span className="text-paper/70">Kolkata, WB, India (HQ)</span>
          <span className="text-paper/30">|</span>
          <Link to="/careers" className="text-earth-light hover:underline flex items-center gap-1">
            <Bell className="w-3 h-3 text-leaf" />
            <span>We are hiring Engineers & Executives</span>
          </Link>
        </div>
        <div className="flex items-center space-x-5">
          <a href={`tel:${siteMetadata.phone}`} className="hover:text-paper transition-colors">
            HQ: {siteMetadata.phone}
          </a>
          <span className="text-paper/30">|</span>
          <a href={`mailto:${siteMetadata.email}`} className="hover:text-paper transition-colors">
            {siteMetadata.email}
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-paper-warm/95 backdrop-blur-md shadow-sm border-b border-charcoal/10 py-3.5'
            : 'bg-paper-warm border-b border-charcoal/10 py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          
          {/* Official Registered Logo & Typography */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/assets/logos/envert_group_logo.png"
              alt="EnVERT Group"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-forest-deep leading-none">
                ENVERT
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-earth font-semibold mt-0.5">
                GROUP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Dropdown */}
          <nav className="hidden lg:flex items-center space-x-7 text-[13.5px] font-medium tracking-normal text-charcoal/80">
            
            {/* Businesses Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setBusinessesDropdownOpen(true)}
              onMouseLeave={() => setBusinessesDropdownOpen(false)}
            >
              <button
                onClick={() => setBusinessesDropdownOpen(!businessesDropdownOpen)}
                className={`flex items-center gap-1 py-1 hover:text-forest-deep transition-colors ${
                  location.pathname.startsWith('/businesses') ? 'text-forest-deep font-bold' : ''
                }`}
              >
                <span>Businesses</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${businessesDropdownOpen ? 'rotate-180 text-earth' : 'text-charcoal/40'}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {businessesDropdownOpen && (
                <div className="absolute top-full left-0 w-[460px] bg-paper-warm border border-charcoal/15 shadow-xl p-4 pt-3 mt-1 rounded-xs animate-fadeIn z-50 max-h-[82vh] overflow-y-auto">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-charcoal/10 text-[10px] font-mono uppercase tracking-widest text-charcoal/50">
                    <span>Corporate Verticals & Brands</span>
                    <Link to="/businesses" className="text-earth hover:underline">View Index →</Link>
                  </div>

                  <div className="divide-y divide-charcoal/5">
                    {businessesData.map((biz) => (
                      <Link
                        key={biz.id}
                        to={`/businesses/${biz.id}`}
                        className="py-2 px-2 flex items-center gap-3 hover:bg-paper transition-colors group rounded-xs"
                      >
                        {biz.logo ? (
                          <div className="w-8 h-8 rounded-xs bg-white p-1 border border-charcoal/10 flex items-center justify-center shrink-0">
                            <img src={biz.logo} alt={biz.name} className="max-w-full max-h-full object-contain" />
                          </div>
                        ) : (
                          <span className="font-mono text-xs text-earth font-bold w-6 shrink-0">{biz.num}</span>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-heading text-xs font-bold text-forest-deep uppercase group-hover:text-earth transition-colors truncate">
                              {biz.name}
                            </span>
                            {biz.brandRef && (
                              <span className="text-[9px] font-mono px-1.5 py-0.2 bg-paper text-charcoal/60 border border-charcoal/10 shrink-0">
                                {biz.brandRef}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-charcoal/65 truncate mt-0.5 font-sans">
                            {biz.tagline}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-charcoal/30 group-hover:text-forest-deep group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-charcoal/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-charcoal/50 text-[11px]">Need statutory audits or fleet plans?</span>
                    <Link to="/contact" className="text-forest font-bold hover:text-earth">Inquire →</Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`hover:text-forest-deep transition-colors py-1 ${location.pathname === '/about' ? 'text-forest-deep font-bold' : ''}`}
            >
              About
            </Link>

            <Link
              to="/companies"
              className={`hover:text-forest-deep transition-colors py-1 ${location.pathname === '/companies' ? 'text-forest-deep font-bold' : ''}`}
            >
              Companies
            </Link>

            <Link
              to="/projects"
              className={`hover:text-forest-deep transition-colors py-1 ${location.pathname === '/projects' ? 'text-forest-deep font-bold' : ''}`}
            >
              Projects
            </Link>

            <Link
              to="/insights"
              className={`hover:text-forest-deep transition-colors py-1 ${location.pathname === '/insights' ? 'text-forest-deep font-bold' : ''}`}
            >
              Insights
            </Link>

            <Link
              to="/careers"
              className={`hover:text-forest-deep transition-colors py-1 relative ${location.pathname === '/careers' ? 'text-forest-deep font-bold' : ''}`}
            >
              <span>Careers</span>
              <span className="absolute -top-1.5 -right-2 w-1.5 h-1.5 bg-earth rounded-full"></span>
            </Link>
          </nav>

          {/* Contact Action */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-heading font-semibold tracking-wide uppercase bg-forest hover:bg-forest-deep text-paper transition-all duration-150 rounded-xs shadow-sm"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-earth-light" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-forest-deep focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Editorial Drawer with Collapsible Businesses Submenu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[49px] z-30 bg-paper-warm border-b border-charcoal/15 p-6 flex flex-col justify-between overflow-y-auto lg:hidden">
          <div className="pt-2">
            <p className="text-[11px] font-mono tracking-widest uppercase text-charcoal/50 mb-4 pb-2 border-b border-charcoal/10">
              Corporate Navigation
            </p>
            
            <nav className="flex flex-col space-y-3">
              
              {/* Mobile Businesses Accordion */}
              <div className="border-b border-charcoal/5 pb-2">
                <div className="flex items-center justify-between py-2">
                  <Link
                    to="/businesses"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-heading font-semibold text-forest-deep"
                  >
                    Businesses
                  </Link>
                  <button
                    onClick={() => setMobileBusinessesOpen(!mobileBusinessesOpen)}
                    className="p-1 text-charcoal/60"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileBusinessesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {mobileBusinessesOpen && (
                  <div className="pl-3 py-2 space-y-2 border-l border-earth/30 my-1 bg-paper/60">
                    {businessesData.map((b) => (
                      <Link
                        key={b.id}
                        to={`/businesses/${b.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-mono uppercase text-charcoal/80 hover:text-forest-deep py-1"
                      >
                        {b.num}. {b.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-heading font-semibold text-forest-deep hover:text-earth transition-colors border-b border-charcoal/5 pb-2"
              >
                About EnVERT
              </Link>

              <Link
                to="/companies"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-heading font-semibold text-forest-deep hover:text-earth transition-colors border-b border-charcoal/5 pb-2"
              >
                Our Companies
              </Link>

              <Link
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-heading font-semibold text-forest-deep hover:text-earth transition-colors border-b border-charcoal/5 pb-2"
              >
                Selected Work
              </Link>

              <Link
                to="/insights"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-heading font-semibold text-forest-deep hover:text-earth transition-colors border-b border-charcoal/5 pb-2"
              >
                Insights & Publishing
              </Link>

              <Link
                to="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-heading font-semibold text-forest-deep hover:text-earth transition-colors border-b border-charcoal/5 pb-2"
              >
                Careers (Hiring)
              </Link>
            </nav>
          </div>

          <div className="pt-6 border-t border-charcoal/15 mt-6 space-y-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-5 bg-forest text-paper font-heading font-semibold tracking-wide uppercase text-sm flex items-center justify-between rounded-xs"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4 text-earth-light" />
            </Link>
            <div className="text-xs text-charcoal/60 space-y-1 font-mono">
              <p>EnVERT Group • Kolkata, India</p>
              <p>admin@envertgroup.com • +91 9836511995</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
