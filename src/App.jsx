import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';

// Pages
import HomePage from './pages/HomePage';
import BusinessesIndex from './pages/BusinessesIndex';
import BusinessDetail from './pages/BusinessDetail';
import AboutPage from './pages/AboutPage';
import CompaniesPage from './pages/CompaniesPage';
import ProjectsPage from './pages/ProjectsPage';
import InsightsPage from './pages/InsightsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('General Consultation');

  const handleOpenContact = (subject = 'General Consultation') => {
    setModalSubject(subject);
    setInquiryModalOpen(true);
  };

  const handleApplyJob = (job) => {
    setModalSubject(`Application: ${job.title} (${job.department})`);
    setInquiryModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-paper-warm text-charcoal font-sans selection:bg-forest selection:text-paper flex flex-col justify-between">
        
        {/* Ensures route changes scroll back to top */}
        <ScrollToTop />

        {/* Global Editorial Corporate Navigation with Businesses Dropdown */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Dynamic Multi-Page Router */}
        <main className="flex-grow">
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
            <Route path="/publishing" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
            <Route path="/touriosity" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
            <Route path="/thetouriosity" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
            <Route path="/touriosity-travelmag" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
            <Route path="/transport-electric" element={<BusinessDetail forcedSlug="transport-electric" onOpenContact={handleOpenContact} />} />
            <Route path="/mobility" element={<BusinessDetail forcedSlug="transport-electric" onOpenContact={handleOpenContact} />} />
            <Route path="/icst" element={<BusinessDetail forcedSlug="icst" onOpenContact={handleOpenContact} />} />
            <Route path="/corporate-training" element={<BusinessDetail forcedSlug="icst" onOpenContact={handleOpenContact} />} />
            <Route path="/glarepost" element={<BusinessDetail forcedSlug="publication" onOpenContact={handleOpenContact} />} />
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
            <Route path="/career" element={<CareersPage onApplyJob={handleApplyJob} />} />

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
              path="/insights"
              element={<InsightsPage onOpenContact={handleOpenContact} />}
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
        </main>

        {/* Global Editorial Footer */}
        <Footer />

        {/* Interactive Communication Modal */}
        <InquiryModal
          isOpen={inquiryModalOpen}
          onClose={() => setInquiryModalOpen(false)}
          initialSubject={modalSubject}
        />

        {/* Vercel Web Analytics */}
        <Analytics />

      </div>
    </Router>
  );
}
