import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Businesses from '../components/Businesses';
import FeaturedCapability from '../components/FeaturedCapability';
import Ecosystem from '../components/Ecosystem';
import Projects from '../components/Projects';
import Insights from '../components/Insights';
import Careers from '../components/Careers';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenContact, onApplyJob }) {
  return (
    <>
      {/* Section 01: Hero */}
      <Hero
        onExploreClick={() => {
          const el = document.getElementById('businesses');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onAboutClick={() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Section 02: Introduction & Structural Pillars */}
      <Intro />

      {/* Section 03: What We Do (Businesses 01-07 Interactive Showcase) */}
      <Businesses />

      {/* Section 04: Featured Capability (Electric Mobility & Microgrids) */}
      <FeaturedCapability onInquire={() => onOpenContact('Featured Capability Consultation')} />

      {/* Section 05: The EnVERT Ecosystem (Replaces Logo Wall with Architectural Structure) */}
      <Ecosystem />

      {/* Section 06: Selected Work (Verifiable Engineering Projects) */}
      <Projects onOpenContact={() => onOpenContact('Project Scope Inquiry')} />

      {/* Section 07: Insights (Ideas, Research, Pen & Ink Publishing) */}
      <Insights />

      {/* Section 08: Careers (Work With Us & Open Roles) */}
      <Careers onApplyJob={onApplyJob} />

      {/* Section 09: Contact & Headquarters */}
      <ContactSection />
    </>
  );
}
