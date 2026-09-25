import React, { useState } from 'react';
import { ArrowRight, MapPin, Mail, GraduationCap, Clock, AlertCircle } from 'lucide-react';
import { careersData, siteMetadata } from '../data/siteData';

export default function CareersPage({ onApplyJob }) {
  const [selectedDept, setSelectedDept] = useState('ALL');

  const departments = [
    'ALL',
    'Energy Engineering',
    'Energy Audits (Consortium)',
    'Business Development',
    'Publishing & Media',
    'Manufacturing & Operations'
  ];

  const filteredJobs =
    selectedDept === 'ALL'
      ? careersData
      : careersData.filter((j) => j.department === selectedDept);

  return (
    <div className="bg-paper-warm min-h-screen py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-charcoal/15 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-leaf rounded-full animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-earth font-bold">
                ACTIVE RECRUITMENT DESK
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-forest-deep mt-2">
              Work With Us
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl">
              Authentic engineering, audit, management, and media roles currently open at EnVERT Group headquarters in Kolkata and regional industrial projects.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors border whitespace-nowrap ${
                  selectedDept === dept
                    ? 'bg-forest text-paper border-forest'
                    : 'bg-paper text-charcoal/70 border-charcoal/15 hover:border-charcoal/40'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Live Hiring Alert Box (from scraped homepage banner) */}
        <div className="mb-12 p-6 bg-forest-deep text-paper border border-paper/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-earth shrink-0 mt-0.5" />
            <div>
              <p className="font-mono text-xs uppercase text-earth font-semibold tracking-wider">
                Current Priority Openings
              </p>
              <p className="text-xs sm:text-sm text-paper/90 mt-0.5">
                We are actively hiring: <strong>a) Engineers for Solar PV</strong>, <strong>b) HR Officer</strong>, <strong>c) Public Relations Manager</strong>, <strong>d) Sales Officer for Travel Magazine</strong>.
              </p>
            </div>
          </div>
          <a
            href={`mailto:${siteMetadata.hrEmail}?subject=Application for Current Openings`}
            className="shrink-0 px-5 py-2.5 bg-earth hover:bg-earth-light text-forest-deep font-heading text-xs uppercase tracking-wider font-bold transition-colors text-center"
          >
            Direct CV to: hr@envertgroup.com
          </a>
        </div>

        {/* Job Listings */}
        <div className="divide-y divide-charcoal/15 border-t border-b border-charcoal/15 bg-paper">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="py-8 px-6 sm:px-8 flex flex-col lg:flex-row lg:items-start justify-between gap-6 hover:bg-paper-warm transition-colors"
            >
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-charcoal/60 mb-2">
                  <span className="text-leaf-dark font-bold uppercase">{job.department}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-earth" /> {job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-earth" /> {job.experience}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-forest font-bold">
                    <GraduationCap className="w-3.5 h-3.5" /> {job.qualification}
                  </span>
                </div>

                <h2 className="font-heading text-2xl font-bold text-forest-deep">
                  {job.title}
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center lg:pt-2">
                <button
                  onClick={() => onApplyJob(job)}
                  className="w-full sm:w-auto px-6 py-3 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors rounded-xs shadow-xs"
                >
                  <span>Apply For Role</span>
                  <ArrowRight className="w-3.5 h-3.5 text-earth-light" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Spontaneous Applications & Candidate Guidance */}
        <div className="mt-12 p-8 bg-paper border border-charcoal/15 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold text-forest-deep">
              Application Instructions
            </h3>
            <p className="text-xs text-charcoal/70 mt-2 leading-relaxed">
              Interested candidates should send their updated CV / resume with the position title in the subject line. Please include verified project portfolios or certifications (BEE, IGBC, CAD) where applicable.
            </p>
            <a
              href={`mailto:${siteMetadata.hrEmail}`}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-forest hover:text-earth uppercase tracking-wider mt-4"
            >
              <Mail className="w-4 h-4" />
              <span>hr@envertgroup.com</span>
            </a>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-forest-deep">
              Energy Auditor Consortium
            </h3>
            <p className="text-xs text-charcoal/70 mt-2 leading-relaxed">
              Certified Energy Auditors and Certified Energy Managers with more than 2 years of post-certification experience looking for project-to-project assignments may submit credentials for consortium inclusion.
            </p>
            <p className="text-xs font-mono text-earth font-bold mt-4">
              Consortium Desk: admin@envertgroup.com
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
