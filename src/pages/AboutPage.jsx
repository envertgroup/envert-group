import React from 'react';
import { ArrowRight, Layers, ShieldCheck, Compass, CheckCircle } from 'lucide-react';
import { siteMetadata } from '../data/siteData';
import SEO from '../components/SEO';
import { getAboutSchema } from '../data/seoData';

export default function AboutPage({ onOpenContact }) {
  const principles = [
    {
      title: "Engineering Precision Over Hype",
      desc: "We prioritize thermodynamic feasibility, electrical safety, structural load validations, and verifiable data over trendy corporate buzzwords."
    },
    {
      title: "Interdisciplinary Cohesion",
      desc: "Complex modern infrastructure problems cannot be solved within single silos. We bridge clean energy with transport economics, environmental science, and technical publishing."
    },
    {
      title: "Statutory & Institutional Accountability",
      desc: "From Bureau of Energy Efficiency (BEE) audits to FAME India mobility standards and peer-reviewed journals, our processes adhere to rigorous statutory scrutiny."
    },
    {
      title: "Local Rootedness, Global Standards",
      desc: "Headquartered in Kolkata and operating across regional industrial belts, our frameworks respect local operational realities while matching international benchmarks."
    }
  ];

  return (
    <div className="bg-paper-warm min-h-screen py-16 lg:py-24">
      <SEO
        title="About EnVERT Group — Corporate Profile, Governance & Philosophy"
        description="Learn about EnVERT Group's multidisciplinary engineering heritage, governance, corporate pillars, and leadership across clean energy, mobility, and publishing."
        canonical="/about"
        schema={getAboutSchema()}
      />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Hero Section */}
        <div className="pb-12 mb-16 border-b border-charcoal/15">
          <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
            ABOUT ENVERT GROUP
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-forest-deep mt-2 leading-[1.02]">
            Different Disciplines. <br />
            One Group. <br />
            <span className="text-leaf-dark">A Shared Purpose.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            EnVERT Group is a multidisciplinary corporate organisation bridging physical infrastructure engineering, statutory energy audits, commercial electric transport, sustainable tourism conferences, and published academic literature.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-charcoal/15">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-earth uppercase font-semibold">OUR EVOLUTION</span>
            <h2 className="font-heading text-3xl font-bold text-forest-deep uppercase mt-2">
              From Individual Practices to a Unified Group
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-charcoal/80 leading-relaxed">
            <p>
              EnVERT began with a clear recognition: the transition toward clean power, sustainable transport, and industrial efficiency requires both high-rigor mechanical engineering and executive human capability.
            </p>
            <p>
              Over the past decade, EnVERT consolidated specialized operating entities—including clean power and BEE audit firm <strong>NRG India</strong>, electric vehicle manufacturer <strong>EnVERT E-Vehicles Private Limited</strong>, sustainable tourism conference and industry platform <strong>ICST Global</strong> (International Conference on Sustainable Transition), and literary publisher <strong>Pen & Ink Publishers</strong>.
            </p>
            <p>
              By housing these distinct capabilities under one structured group, we offer clients end-to-end institutional capabilities: from statutory environmental approvals and factory energy audits to customized vehicle electrification and global corporate communication.
            </p>
          </div>
        </div>

        {/* Disciplines Diagram (Section 18 PRD) */}
        <div className="py-20 border-b border-charcoal/15">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-mono text-xs text-earth uppercase font-semibold">ORGANIZATIONAL TOPOLOGY</span>
            <h2 className="font-heading text-3xl font-bold text-forest-deep uppercase mt-1">
              The Group Architecture
            </h2>
            <p className="text-xs text-charcoal/60 mt-2 font-mono">
              Three operational pillars coordinating seven technical domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-paper border border-charcoal/15">
              <div className="flex items-center justify-between pb-4 border-b border-charcoal/10 mb-4">
                <span className="font-mono text-xs text-earth font-bold">PILLAR 01</span>
                <Layers className="w-5 h-5 text-earth" />
              </div>
              <h3 className="font-heading text-xl font-bold text-forest-deep uppercase">Engineering</h3>
              <p className="text-xs text-charcoal/70 mt-2 leading-relaxed">Physical systems, electrical power installations, and mobility manufacturing.</p>
              <ul className="mt-6 space-y-2 text-xs font-mono text-charcoal/80">
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> Solar PV & Bio-energy (NRG India)</li>
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> Electric Vehicles (EnVERT E-Vehicles)</li>
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> High-Performance Buildings (MEP/BEM)</li>
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> Environmental Science & Clearances</li>
              </ul>
            </div>

            <div className="p-8 bg-paper border border-charcoal/15">
              <div className="flex items-center justify-between pb-4 border-b border-charcoal/10 mb-4">
                <span className="font-mono text-xs text-earth font-bold">PILLAR 02</span>
                <ShieldCheck className="w-5 h-5 text-earth" />
              </div>
              <h3 className="font-heading text-xl font-bold text-forest-deep uppercase">Tourism & Advisory</h3>
              <p className="text-xs text-charcoal/70 mt-2 leading-relaxed">International tourism conferences, statutory energy compliance, and strategic advisory.</p>
              <ul className="mt-6 space-y-2 text-xs font-mono text-charcoal/80">
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> BEE Industrial Energy Audits</li>
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> NAAC University Green Audits</li>
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> Sustainable Tourism Conferences (ICST Global)</li>
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> Tourism Policy & Destination Development</li>
              </ul>
            </div>

            <div className="p-8 bg-paper border border-charcoal/15">
              <div className="flex items-center justify-between pb-4 border-b border-charcoal/10 mb-4">
                <span className="font-mono text-xs text-earth font-bold">PILLAR 03</span>
                <Compass className="w-5 h-5 text-earth" />
              </div>
              <h3 className="font-heading text-xl font-bold text-forest-deep uppercase">Knowledge & Media</h3>
              <p className="text-xs text-charcoal/70 mt-2 leading-relaxed">Curated publication houses, journalism platforms, and social action.</p>
              <ul className="mt-6 space-y-2 text-xs font-mono text-charcoal/80">
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> Pen & Ink Publishing House</li>
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> Curiosity Kids Magazine (Amazon Global)</li>
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> Sustainable Energy Review & Touriosity Travelmag</li>
                <li className="flex items-center gap-2"><span className="text-leaf">•</span> EnVERT Foundation (Applied Ecology)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="py-20">
          <div className="pb-6 mb-12 border-b border-charcoal/10">
            <span className="font-mono text-xs text-earth uppercase font-semibold">CORE ETHICS</span>
            <h2 className="font-heading text-3xl font-bold text-forest-deep uppercase mt-1">
              What We Believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((pr, i) => (
              <div key={i} className="p-6 bg-paper border border-charcoal/15">
                <span className="font-mono text-xs text-earth font-bold">PRINCIPLE 0{i + 1}</span>
                <h3 className="font-heading text-lg font-bold text-forest-deep mt-2">{pr.title}</h3>
                <p className="text-xs sm:text-sm text-charcoal/70 mt-2 leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 bg-forest-deep text-paper flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-earth-light uppercase font-semibold">COLLABORATION</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-paper mt-1">
              Work With An Established Multidisciplinary Group
            </h3>
            <p className="text-xs text-paper/70 mt-1 max-w-xl">
              Discuss enterprise clean energy, fleet transition, sustainable tourism, or publishing partnerships with our leadership in Kolkata.
            </p>
          </div>
          <button
            onClick={() => onOpenContact('General Executive Consultation')}
            className="px-6 py-3 bg-earth hover:bg-earth-light text-forest-deep font-heading text-xs uppercase tracking-wider font-semibold shrink-0 transition-colors"
          >
            Start Conversation →
          </button>
        </div>

      </div>
    </div>
  );
}
