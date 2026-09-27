import React from 'react';
import SEO from '../components/SEO';
import { getHomeSchema } from '../data/seoData';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Businesses from '../components/Businesses';
import Ecosystem from '../components/Ecosystem';
import Projects from '../components/Projects';

export default function HomePage({ onOpenContact, onApplyJob }) {
  return (
    <>
      <SEO
        title="EnVERT Group | Multidisciplinary Engineering, Advisory & Sustainability Conglomerate"
        description="A truly multidisciplinary engineering, advisory, design, consultancy and publishing group of companies working across the eleven markets. Headquartered in Kolkata, West Bengal, India."
        canonical="/"
        schema={getHomeSchema()}
      />

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

      {/* Section 03: What We Do (Businesses Interactive Showcase) */}
      <Businesses />

      {/* Section 04: The EnVERT Ecosystem */}
      <Ecosystem />

      {/* Section 05: Selected Work (Verifiable Engineering Projects) */}
      <Projects onOpenContact={() => onOpenContact('Project Scope Inquiry')} />
    </>
  );
}
