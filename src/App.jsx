import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';

// Sub-pages and modals code-split for lightning-fast initial load & zero unused JS
const InquiryModal = lazy(() => import('./components/InquiryModal'));
const BusinessesIndex = lazy(() => import('./pages/BusinessesIndex'));
const BusinessDetail = lazy(() => import('./pages/BusinessDetail'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CompaniesPage = lazy(() => import('./pages/CompaniesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function PageFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-paper-warm">
      <div className="flex flex-col items-center gap-3">
        <div className="w-7 h-7 border-2 border-forest/20 border-t-forest rounded-full animate-spin" />
        <span className="font-mono text-[11px] uppercase tracking-widest text-charcoal/50">Loading EnVERT...</span>
      </div>
    </div>
  );
}

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('General Consultation');
  const [modalDomain, setModalDomain] = useState(null);

  const handleOpenContact = (subject = 'General Consultation', options = null) => {
    let domain = null;
    if (typeof options === 'string') {
      domain = options;
    } else if (options && typeof options === 'object') {
      domain = options.domain || null;
    }
    setModalSubject(subject);
    setModalDomain(domain);
    setInquiryModalOpen(true);
  };

  const handleApplyJob = (job) => {
    handleOpenContact(
      `Application: ${job.title} (${job.department})`,
      { domain: 'Careers / Recruitment' }
    );
  };

  // Initialize Vercel Analytics lazily during idle time to prevent main-thread long tasks
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initAnalytics = () => {
        import('@vercel/analytics')
          .then(({ inject }) => {
            inject();
          })
          .catch(() => {});
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(initAnalytics, { timeout: 3500 });
      } else {
        setTimeout(initAnalytics, 2000);
      }
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-paper-warm text-charcoal font-sans selection:bg-forest selection:text-paper flex flex-col justify-between">
        
        {/* Accessible Skip Link for Accessibility & Crawlers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest focus:text-paper focus:font-heading focus:text-xs focus:uppercase focus:tracking-wider focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-earth"
        >
          Skip to main content
        </a>

        {/* Ensures route changes scroll back to top */}
        <ScrollToTop />

        {/* Global Editorial Corporate Navigation with Businesses Dropdown */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Dynamic Multi-Page Router with Suspense */}
        <main id="main-content" tabIndex="-1" className="flex-grow focus:outline-none">
          <Suspense fallback={<PageFallback />}>
            <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenContact={handleOpenContact}
                  onApplyJob={handleApplyJob}
                />
              }
            />
            {/* 301 Client-Side Canonical Redirects for Legacy /home */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            
            {/* Businesses Pages (Index + Dedicated Dynamic Slug Page) */}
            <Route
              path="/businesses"
              element={<BusinessesIndex onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/businesses/:slug"
              element={<BusinessDetail onOpenContact={handleOpenContact} />}
            />

            {/* Direct Top-Level Business & Company Slugs */}
            <Route path="/energy" element={<BusinessDetail forcedSlug="energy" onOpenContact={handleOpenContact} />} />
            <Route path="/nrg-india" element={<BusinessDetail forcedSlug="energy" onOpenContact={handleOpenContact} />} />
            <Route path="/publication" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
            <Route path="/publication/career" element={<Navigate to="/careers" replace />} />
            <Route path="/publication/careers" element={<Navigate to="/careers" replace />} />
            <Route path="/publishing" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
            <Route path="/touriosity" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
            <Route path="/thetouriosity" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
            <Route path="/touriosity-travelmag" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
            <Route path="/transport-electric" element={<BusinessDetail forcedSlug="transport-electric" onOpenContact={handleOpenContact} />} />
            <Route path="/mobility" element={<BusinessDetail forcedSlug="transport-electric" onOpenContact={handleOpenContact} />} />
            <Route path="/icst" element={<BusinessDetail forcedSlug="icst" onOpenContact={handleOpenContact} />} />
            <Route path="/corporate-training" element={<BusinessDetail forcedSlug="icst" onOpenContact={handleOpenContact} />} />
            <Route path="/glarepost" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
            <Route path="/glarepost-films" element={<BusinessDetail forcedSlug="glarepost-films" onOpenContact={handleOpenContact} />} />
            <Route path="/films" element={<BusinessDetail forcedSlug="glarepost-films" onOpenContact={handleOpenContact} />} />
            <Route path="/pen-ink" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
            <Route path="/fashion-lifestyle" element={<BusinessDetail forcedSlug="fashion-lifestyle" onOpenContact={handleOpenContact} />} />
            <Route path="/atmaja" element={<BusinessDetail forcedSlug="fashion-lifestyle" onOpenContact={handleOpenContact} />} />
            <Route path="/afield-gallery" element={<BusinessDetail forcedSlug="afield-gallery" onOpenContact={handleOpenContact} />} />
            <Route path="/gallery" element={<BusinessDetail forcedSlug="afield-gallery" onOpenContact={handleOpenContact} />} />
            <Route path="/indian-art-and-dolls-gallery" element={<BusinessDetail forcedSlug="afield-gallery" onOpenContact={handleOpenContact} />} />
            <Route path="/arts-and-dolls-gallery" element={<BusinessDetail forcedSlug="afield-gallery" onOpenContact={handleOpenContact} />} />
            <Route path="/art-gallery" element={<BusinessDetail forcedSlug="afield-gallery" onOpenContact={handleOpenContact} />} />
            <Route path="/envert-foundation" element={<BusinessDetail forcedSlug="envert-foundation" onOpenContact={handleOpenContact} />} />
            <Route path="/foundation" element={<BusinessDetail forcedSlug="envert-foundation" onOpenContact={handleOpenContact} />} />
            <Route path="/afield-advisory" element={<BusinessDetail forcedSlug="afield-advisory" onOpenContact={handleOpenContact} />} />
            <Route path="/advisory" element={<BusinessDetail forcedSlug="afield-advisory" onOpenContact={handleOpenContact} />} />
            <Route path="/advisory-services" element={<BusinessDetail forcedSlug="afield-advisory" onOpenContact={handleOpenContact} />} />
            <Route path="/eipr" element={<BusinessDetail forcedSlug="eipr" onOpenContact={handleOpenContact} />} />
            <Route path="/startup-idea-envert-wellness" element={<BusinessDetail forcedSlug="startup-idea-envert-wellness" onOpenContact={handleOpenContact} />} />
            <Route path="/wellness" element={<BusinessDetail forcedSlug="startup-idea-envert-wellness" onOpenContact={handleOpenContact} />} />
            <Route path="/repoxisy" element={<BusinessDetail forcedSlug="repoxisy" onOpenContact={handleOpenContact} />} />
            <Route path="/epoxy" element={<BusinessDetail forcedSlug="repoxisy" onOpenContact={handleOpenContact} />} />
            <Route path="/specialty-chemicals" element={<BusinessDetail forcedSlug="repoxisy" onOpenContact={handleOpenContact} />} />
            <Route path="/wagsol" element={<BusinessDetail forcedSlug="wagsol" onOpenContact={handleOpenContact} />} />
            <Route path="/solar-lighting" element={<BusinessDetail forcedSlug="wagsol" onOpenContact={handleOpenContact} />} />
            <Route path="/railway-lighting" element={<BusinessDetail forcedSlug="wagsol" onOpenContact={handleOpenContact} />} />
            <Route path="/bio-toilets" element={<BusinessDetail forcedSlug="wagsol" onOpenContact={handleOpenContact} />} />
            <Route path="/eisree" element={<BusinessDetail forcedSlug="eisree" onOpenContact={handleOpenContact} />} />
            <Route path="/solar-research" element={<BusinessDetail forcedSlug="eisree" onOpenContact={handleOpenContact} />} />
            <Route path="/energy-efficiency" element={<BusinessDetail forcedSlug="eisree" onOpenContact={handleOpenContact} />} />
            <Route path="/india-corporate-trainers" element={<BusinessDetail forcedSlug="india-corporate-trainers" onOpenContact={handleOpenContact} />} />
            <Route path="/corporate-trainers" element={<BusinessDetail forcedSlug="india-corporate-trainers" onOpenContact={handleOpenContact} />} />
            <Route path="/corporate-training-services" element={<BusinessDetail forcedSlug="india-corporate-trainers" onOpenContact={handleOpenContact} />} />
            <Route path="/career" element={<Navigate to="/careers" replace />} />
            <Route path="/jobs" element={<Navigate to="/careers" replace />} />

            {/* Other Dedicated Routes */}
            <Route
              path="/about"
              element={<AboutPage onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/companies"
              element={<CompaniesPage onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage onOpenContact={handleOpenContact} />}
            />
            <Route
              path="/careers"
              element={<CareersPage onApplyJob={handleApplyJob} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />

            {/* Catch-all fallback */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenContact={handleOpenContact}
                  onApplyJob={handleApplyJob}
                />
              }
            />
          </Routes>
          </Suspense>
        </main>

        {/* Global Editorial Footer */}
        <Footer />

        {/* Interactive Communication Modal - Code-split & lazy loaded on interaction */}
        {inquiryModalOpen && (
          <Suspense fallback={null}>
            <InquiryModal
              isOpen={inquiryModalOpen}
              onClose={() => setInquiryModalOpen(false)}
              initialSubject={modalSubject}
              initialDomain={modalDomain}
            />
          </Suspense>
        )}

      </div>
    </Router>
  );
}
