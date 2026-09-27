import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X, Bell } from 'lucide-react';
import { navBusinessesData as businessesData } from '../data/navData';


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
      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-paper-warm/95 backdrop-blur-md shadow-sm border-b border-charcoal/10 py-3.5'
            : 'bg-paper-warm border-b border-charcoal/10 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          
          {/* Official Registered Logo & Typography */}
          <div className="flex items-center min-w-[180px] xl:min-w-[210px]">
            <Link to="/" aria-label="EnVERT Group Homepage" className="flex items-center space-x-3 group">
              <img
                src="/assets/logos/envert_group_logo.webp"
                alt="EnVERT Group Official Corporate Logo — Multidisciplinary Engineering & Advisory Conglomerate"
                width="227"
                height="105"
                fetchPriority="high"
                decoding="async"
                className="h-10 sm:h-11 lg:h-12 xl:h-[3.25rem] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links with Dropdown: Perfectly Equidistant with uniform gap */}
          <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-9 text-[13.5px] font-medium tracking-normal text-charcoal/80 flex-1">
            
            {/* About: First link */}
            <Link
              to="/about"
              className={`hover:text-forest-deep transition-colors py-1 ${location.pathname === '/about' ? 'text-forest-deep font-bold' : ''}`}
            >
              About
            </Link>

            {/* Businesses: Second link with Mega Dropdown (Integrated inline chevron for exact equidistance) */}
            <div
              className="relative flex items-center"
              ref={dropdownRef}
              onMouseEnter={() => setBusinessesDropdownOpen(true)}
              onMouseLeave={() => setBusinessesDropdownOpen(false)}
            >
              <Link
                to="/businesses"
                className={`inline-flex items-center gap-1.5 py-1 hover:text-forest-deep transition-colors ${
                  location.pathname.startsWith('/businesses') ? 'text-forest-deep font-bold' : ''
                }`}
              >
                <span>Businesses</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-charcoal/50 ${businessesDropdownOpen ? 'rotate-180 text-earth' : ''}`} />
              </Link>

              {/* Mega Dropdown Panel - Clean Categorization without Logos */}
              {businessesDropdownOpen && (
                <div className="absolute top-full left-[-60px] w-[760px] bg-paper-warm border border-charcoal/20 shadow-2xl p-5 pt-4 mt-1 rounded-xs animate-fadeIn z-50">
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-charcoal/15 text-[10px] font-mono uppercase tracking-widest text-charcoal/60">
                    <span className="font-semibold text-forest-deep">SECTOR CATEGORIES & OPERATING BUSINESSES</span>
                    <Link to="/businesses" className="text-earth hover:underline font-semibold">View All Categories →</Link>
                  </div>

                  {/* 3-Column Categorization Grid without Logos */}
                  <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                    {businessesData.map((biz) => (
                      <div key={biz.id} className="flex flex-col group/cat">
                        <Link
                          to={`/businesses/${biz.id}`}
                          className="flex items-center gap-1.5 py-1 text-forest-deep group-hover/cat:text-earth transition-colors"
                        >
                          <span className="font-mono text-[10.5px] font-bold text-earth/80 shrink-0">{biz.num}</span>
                          <span className="font-heading text-xs font-bold uppercase tracking-tight truncate">
                            {biz.name}
                          </span>
                        </Link>
                        
                        {/* List of Businesses Under this Category */}
                        {biz.businessesUnderCategory && biz.businessesUnderCategory.length > 0 && (
                          <div className="mt-1 space-y-1 pl-2.5 border-l-2 border-charcoal/10 group-hover/cat:border-earth/40 transition-colors">
                            {biz.businessesUnderCategory.map((subBiz, subIdx) => (
                              <Link
                                key={subIdx}
                                to={subBiz.url || `/businesses/${biz.id}`}
                                className="block text-[11.5px] font-sans text-charcoal/70 hover:text-forest-deep hover:font-medium transition-colors leading-snug truncate"
                              >
                                {subBiz.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Footer Bar */}
                  <div className="mt-4 pt-3 border-t border-charcoal/10 flex items-center justify-end text-xs font-mono">
                    <div className="flex items-center gap-4">
                      <Link to="/companies" className="text-forest font-semibold hover:text-earth text-[11.5px]">Our Brands (14+ Entities in 4 Sectors) →</Link>
                      <Link to="/contact" aria-label="Inquire via contact page" className="text-earth font-bold hover:underline text-[11.5px]">Inquire →</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
              to="/careers"
              className={`hover:text-forest-deep transition-colors py-1 ${location.pathname === '/careers' ? 'text-forest-deep font-bold' : ''}`}
            >
              Careers
            </Link>
          </nav>

          {/* Contact Action */}
          <div className="hidden lg:flex items-center justify-end min-w-[180px] xl:min-w-[210px]">
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
              
              {/* Mobile About EnVERT - First Link */}
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-heading font-semibold text-forest-deep hover:text-earth transition-colors border-b border-charcoal/5 pb-2"
              >
                About EnVERT
              </Link>

              {/* Mobile Businesses Accordion - Second Item */}
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
                  <div className="pl-3 py-2 space-y-3 border-l-2 border-earth/40 my-1 bg-paper/60">
                    {businessesData.map((b) => (
                      <div key={b.id} className="space-y-1">
                        <Link
                          to={`/businesses/${b.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs font-mono font-bold uppercase text-forest-deep hover:text-earth py-0.5"
                        >
                          {b.num}. {b.name}
                        </Link>
                        {b.businessesUnderCategory && b.businessesUnderCategory.length > 0 && (
                          <div className="pl-3 space-y-0.5 border-l border-charcoal/15">
                            {b.businessesUnderCategory.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                to={sub.url || `/businesses/${b.id}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-[11px] font-sans text-charcoal/70 hover:text-forest-deep py-0.5"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/companies"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-heading font-semibold text-forest-deep hover:text-earth transition-colors border-b border-charcoal/5 pb-2"
              >
                Our Brands
              </Link>

              <Link
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-heading font-semibold text-forest-deep hover:text-earth transition-colors border-b border-charcoal/5 pb-2"
              >
                Selected Work
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
