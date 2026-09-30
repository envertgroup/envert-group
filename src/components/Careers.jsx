import React, { useState } from 'react';
import { ArrowRight, MapPin, Mail, GraduationCap, Clock } from 'lucide-react';
import { careersData, siteMetadata } from '../data/siteData';

export default function Careers({ onApplyJob }) {
  const [selectedDept, setSelectedDept] = useState('ALL');

  const departments = ['ALL', ...Array.from(new Set(careersData.map(j => j.department)))];

  const filteredJobs =
    selectedDept === 'ALL'
      ? careersData
      : careersData.filter((j) => j.department === selectedDept);

  return (
    <section id="careers" className="py-20 lg:py-28 bg-paper-warm border-b border-charcoal/15">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-charcoal/10 gap-6">
          <div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight-editorial text-forest-deep">
              Work With Us
            </h2>
            <p className="mt-3 text-sm text-charcoal/70 max-w-xl">
              Authentic positions currently open across clean energy design, BEE industrial audits, business development, and international media publishing.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-colors border whitespace-nowrap ${
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

        {/* Job Listings (Clean, editorial rows scraped from actual career desk) */}
        <div className="divide-y divide-charcoal/15 border-t border-b border-charcoal/15">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="py-6 sm:py-8 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-paper transition-colors duration-150 px-3 sm:px-4"
            >
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-charcoal/60 mb-2">
                  <span className="text-leaf-dark font-medium uppercase">{job.department}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-earth" />
                    {job.location}
                  </span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-earth" />
                    {job.experience}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-forest font-semibold">
                    <GraduationCap className="w-3 h-3" />
                    {job.qualification}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-forest-deep">
                  {job.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center pt-1">
                <button
                  onClick={() => onApplyJob(job)}
                  className="px-5 py-2.5 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-colors rounded-xs shadow-xs"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-earth-light" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* General Application & Direct HR Instructions */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-paper border border-charcoal/10 gap-4 text-xs font-mono text-charcoal/70">
          <div>
            <span className="font-semibold text-forest-deep uppercase block sm:inline mr-2">
              Application Instructions:
            </span>
            Interested candidates may send their resume mentioning the position in the subject line to:
          </div>
          <a
            href={`mailto:${siteMetadata.hrEmail}`}
            className="text-forest hover:text-earth font-bold tracking-wider uppercase shrink-0 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{siteMetadata.hrEmail}</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
