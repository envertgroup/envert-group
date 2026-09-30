import React, { lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import { getHomeSchema } from '../data/seoData';
import Hero from '../components/Hero';

// Below-the-fold sections: code-split for minimal initial JS payload
const Intro = lazy(() => import('../components/Intro'));
const Businesses = lazy(() => import('../components/Businesses'));
const Ecosystem = lazy(() => import('../components/Ecosystem'));
const Projects = lazy(() => import('../components/Projects'));

// Lightweight placeholder matching approx section height to avoid CLS
function SectionSkeleton({ height = 'min-h-[320px]' }) {
  return <div className={`${height} bg-paper-warm animate-pulse`} aria-hidden="true" />;
}

export default function HomePage({ onOpenContact, onApplyJob }) {
  return (
    <>
      <SEO
        title="EnVERT Group | Multidisciplinary Engineering, Advisory & Sustainability Conglomerate"
        description="A truly multidisciplinary engineering, advisory, design, consultancy and publishing group of companies working across the eleven markets. Headquartered in Kolkata, West Bengal, India."
        canonical="/"
        schema={getHomeSchema()}
      />

      {/* Section 01: Hero — eagerly rendered (LCP element, must not be lazy) */}
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

      {/* Section 02: Introduction & Structural Pillars — below fold */}
      <Suspense fallback={<SectionSkeleton height="min-h-[480px]" />}>
        <Intro />
      </Suspense>

      {/* Section 03: What We Do (Businesses Interactive Showcase) — below fold */}
      <Suspense fallback={<SectionSkeleton height="min-h-[640px]" />}>
        <Businesses />
      </Suspense>

      {/* Section 04: The EnVERT Ecosystem — below fold */}
      <Suspense fallback={<SectionSkeleton height="min-h-[480px]" />}>
        <Ecosystem />
      </Suspense>

      {/* Section 05: Selected Work (Verifiable Engineering Projects) — below fold */}
      <Suspense fallback={<SectionSkeleton height="min-h-[480px]" />}>
        <Projects onOpenContact={() => onOpenContact('Project Scope Inquiry', { domain: 'Projects & Technical Deliverables' })} />
      </Suspense>
    </>
  );
}
