import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  GraduationCap, 
  Clock, 
  AlertCircle, 
  Search, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  FileText,
  Share2,
  Users
} from 'lucide-react';
import { careersData } from '../data/careersData';
import { siteMetadata } from '../data/siteData';
import SEO from '../components/SEO';
import { getCareersPageSchema } from '../data/seoData';

export default function CareersPage({ onApplyJob }) {
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [selectedType, setSelectedType] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Extract unique departments dynamically from careersData
  const departmentOptions = useMemo(() => {
    const set = new Set(careersData.map(j => j.department));
    return ['ALL', ...Array.from(set)];
  }, []);

  // Filter jobs dynamically
  const filteredJobs = useMemo(() => {
    return careersData.filter((job) => {
      const matchDept = selectedDept === 'ALL' || job.department === selectedDept;
      const matchType = selectedType === 'ALL' || job.type.toLowerCase().includes(selectedType.toLowerCase());
      const matchSearch = searchQuery.trim() === '' || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (job.skillsRequired && job.skillsRequired.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchDept && matchType && matchSearch;
    });
  }, [selectedDept, selectedType, searchQuery]);

  const toggleExpand = (jobId) => {
    setExpandedJobId(prev => (prev === jobId ? null : jobId));
  };

  const copyShareLink = (job) => {
    const url = `${window.location.origin}/careers#${job.id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(job.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-paper-warm min-h-screen py-14 lg:py-20 font-sans selection:bg-forest selection:text-paper">
      <SEO
        title="Careers at EnVERT Group — Open Positions & Recruitment Desk"
        description="Explore live career opportunities across Solar PV engineering, BEE certified audits, commercial EV systems, editorial journalism, HR, and corporate advisory."
        canonical="/careers"
        schema={getCareersPageSchema(careersData)}
      />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Eyebrow & Headline Section */}
        <div className="pb-10 mb-10 border-b border-charcoal/15">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight-editorial text-forest-deep leading-[1.02]">
                Work With <span className="normal-case">EnVERT</span>
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-3xl leading-relaxed">
                Join a multidisciplinary group uniting clean power engineering, industrial energy audits, electric vehicle manufacturing, corporate advisory, and international publishing.
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="flex items-center gap-4 sm:gap-6 bg-paper p-4 border border-charcoal/15 rounded-xs shadow-2xs shrink-0 font-mono">
              <div className="pr-4 border-r border-charcoal/15">
                <p className="text-xl font-bold text-forest-deep">{careersData.length}</p>
                <p className="text-[10.5px] uppercase tracking-wider text-charcoal/60">Open Roles</p>
              </div>
              <div className="pr-4 border-r border-charcoal/15">
                <p className="text-xl font-bold text-earth font-mono">100%</p>
                <p className="text-[10.5px] uppercase tracking-wider text-charcoal/60">Direct Hiring</p>
              </div>
              <div>
                <p className="text-xl font-bold text-forest-deep">Kolkata</p>
                <p className="text-[10.5px] uppercase tracking-wider text-charcoal/60">Corporate HQ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Priority Openings Alert Banner (Live Scraped Notice) */}
        <div className="mb-10 p-6 sm:p-7 bg-forest-deep text-paper border border-paper/15 rounded-xs shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-full bg-radial from-earth/10 to-transparent pointer-events-none"></div>
          
          <div className="flex items-start gap-4 z-10">
            <div className="p-2.5 bg-earth/15 border border-earth/30 rounded-xs text-earth shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase text-earth font-bold tracking-widest">
                  URGENT HIRING MANDATE
                </span>
                <span className="px-2 py-0.5 bg-paper/10 text-paper text-[10px] font-mono rounded-xs border border-paper/10">
                  Immediate Joining
                </span>
              </div>
              <p className="text-sm sm:text-base text-paper/95 mt-1 font-sans leading-relaxed">
                Priority recruitment active for: <strong>Solar PV Engineers</strong>, <strong>HR Officers</strong>, <strong>Public Relations Managers</strong>, and <strong>Travel Magazine Ad Sales Executives</strong>.
              </p>
              <p className="text-xs text-paper/60 mt-1 font-mono">
                Applications reviewed directly by executive directors within 48 hours.
              </p>
            </div>
          </div>

          <div className="z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={`mailto:${siteMetadata.hrEmail}?subject=Direct%20CV%20Submission%20%E2%80%94%20Priority%20Openings`}
              className="px-6 py-3 bg-earth hover:bg-earth-light text-forest-deep font-heading text-xs uppercase tracking-wider font-bold transition-all duration-150 rounded-xs text-center shadow-xs hover:shadow-md"
            >
              Direct CV to: {siteMetadata.hrEmail}
            </a>
          </div>
        </div>

        {/* Dynamic Search & Multi-Filter Controls */}
        <div className="mb-8 p-5 bg-paper border border-charcoal/15 rounded-xs shadow-2xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search job title, skills (e.g. PVsyst, BEE, AutoCAD, Sales)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-paper-warm border border-charcoal/20 focus:border-forest text-xs font-mono text-charcoal placeholder:text-charcoal/40 rounded-xs focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-charcoal/50 hover:text-charcoal"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Employment Type Quick Filter */}
            <div className="md:col-span-6 flex items-center justify-start md:justify-end gap-2 overflow-x-auto pb-1 md:pb-0">
              <span className="font-mono text-xs text-charcoal/50 uppercase tracking-wider shrink-0 mr-1">
                Type:
              </span>
              {['ALL', 'Full-time', 'Consortium', 'Hybrid'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-colors border rounded-xs whitespace-nowrap ${
                    selectedType === type
                      ? 'bg-forest-deep text-paper border-forest-deep font-semibold shadow-xs'
                      : 'bg-paper text-charcoal/70 border-charcoal/15 hover:border-charcoal/30'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

          </div>

          {/* Department Filter Pills */}
          <div className="pt-3 border-t border-charcoal/10 flex items-center gap-2 overflow-x-auto pb-1">
            <span className="font-mono text-xs text-charcoal/50 uppercase tracking-wider shrink-0 mr-1">
              Sector:
            </span>
            {departmentOptions.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors border rounded-xs whitespace-nowrap ${
                  selectedDept === dept
                    ? 'bg-forest text-paper border-forest font-semibold shadow-xs'
                    : 'bg-paper text-charcoal/70 border-charcoal/15 hover:border-charcoal/40'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Active Filters Summary */}
        <div className="flex items-center justify-between mb-4 px-1 text-xs font-mono text-charcoal/60">
          <div>
            Showing <strong className="text-forest-deep">{filteredJobs.length}</strong> of {careersData.length} available roles
            {(selectedDept !== 'ALL' || selectedType !== 'ALL' || searchQuery) && (
              <span className="text-leaf-dark font-medium ml-2">
                (Filtered view)
              </span>
            )}
          </div>
          {(selectedDept !== 'ALL' || selectedType !== 'ALL' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedDept('ALL');
                setSelectedType('ALL');
                setSearchQuery('');
              }}
              className="text-earth hover:text-earth-dark font-semibold underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Job Listings Cards Container */}
        {filteredJobs.length === 0 ? (
          <div className="p-12 text-center bg-paper border border-charcoal/15 rounded-xs space-y-3">
            <Briefcase className="w-10 h-10 text-charcoal/30 mx-auto" />
            <h3 className="font-heading text-lg font-bold text-forest-deep">No Matching Openings Found</h3>
            <p className="text-xs text-charcoal/60 max-w-md mx-auto">
              We couldn't find any current opening matching your search query or department filter. You may submit a spontaneous application to our human resources desk.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteMetadata.hrEmail}?subject=Spontaneous%20Application%20%E2%80%94%20EnVERT%20Group`}
                className="px-5 py-2.5 bg-forest hover:bg-forest-deep text-paper text-xs font-heading uppercase tracking-wider font-semibold rounded-xs inline-flex items-center gap-2"
              >
                <span>Submit Spontaneous CV</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div
                  id={job.id}
                  key={job.id}
                  className={`bg-paper border transition-all duration-200 rounded-xs shadow-xs ${
                    isExpanded 
                      ? 'border-forest-deep ring-1 ring-forest-deep/15 bg-paper-warm/50' 
                      : 'border-charcoal/15 hover:border-charcoal/35'
                  }`}
                >
                  {/* Job Header Row */}
                  <div className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="max-w-3xl space-y-2">
                      
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
                        <span className="px-2.5 py-0.5 bg-forest/10 text-forest-deep font-semibold rounded-xs border border-forest/20 uppercase tracking-wider">
                          {job.department}
                        </span>
                        <span className="text-charcoal/30 hidden sm:inline">•</span>
                        <span className="flex items-center gap-1 text-charcoal/70">
                          <MapPin className="w-3.5 h-3.5 text-earth shrink-0" />
                          <span>{job.location}</span>
                        </span>
                        <span className="text-charcoal/30 hidden sm:inline">•</span>
                        <span className="flex items-center gap-1 text-charcoal/70">
                          <Briefcase className="w-3.5 h-3.5 text-earth shrink-0" />
                          <span>{job.type}</span>
                        </span>
                        {job.experience && (
                          <>
                            <span className="text-charcoal/30 hidden sm:inline">•</span>
                            <span className="flex items-center gap-1 text-charcoal/70">
                              <Clock className="w-3.5 h-3.5 text-earth shrink-0" />
                              <span>{job.experience}</span>
                            </span>
                          </>
                        )}
                        {job.openings && (
                          <span className="px-2 py-0.5 bg-earth/15 text-earth-dark font-bold text-[10.5px] rounded-xs border border-earth/25">
                            {job.openings} Openings
                          </span>
                        )}
                      </div>

                      {/* Job Title */}
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-forest-deep tracking-tight pt-1">
                        {job.title}
                      </h2>

                      {/* Brief Excerpt */}
                      <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-sans line-clamp-2">
                        {job.description}
                      </p>

                      {/* Key Qualification Badge */}
                      <div className="pt-1 flex items-center gap-1.5 text-xs font-mono text-forest font-semibold">
                        <GraduationCap className="w-4 h-4 text-leaf-dark shrink-0" />
                        <span>Qualification: {job.qualification}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="shrink-0 flex sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2.5 pt-2 lg:pt-0">
                      <button
                        onClick={() => onApplyJob(job)}
                        className="flex-1 sm:flex-none px-6 py-2.5 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-150 rounded-xs shadow-xs hover:shadow-md cursor-pointer"
                      >
                        <span>Apply For Role</span>
                        <ArrowRight className="w-3.5 h-3.5 text-earth-light" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleExpand(job.id)}
                          className="px-3.5 py-2 border border-charcoal/20 hover:border-forest text-forest-deep font-mono text-xs rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                          aria-expanded={isExpanded}
                        >
                          <span>{isExpanded ? 'Hide Details' : 'View Scope & Skills'}</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        <button
                          onClick={() => copyShareLink(job)}
                          title="Copy direct position link"
                          className="p-2 border border-charcoal/20 hover:border-charcoal/40 text-charcoal/60 hover:text-forest-deep rounded-xs transition-colors cursor-pointer"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {copiedId === job.id && (
                        <span className="text-[10px] font-mono text-leaf-dark">Link copied!</span>
                      )}
                    </div>
                  </div>

                  {/* Expandable Comprehensive Job Scope & Skills */}
                  {isExpanded && (
                    <div className="px-6 pb-7 sm:px-7 pt-2 border-t border-charcoal/10 bg-paper-warm/40 space-y-6 animate-fadeIn">
                      
                      {/* Full Scope */}
                      <div>
                        <h4 className="font-heading text-xs uppercase tracking-widest text-earth font-bold mb-2">
                          Detailed Role Overview & Scope
                        </h4>
                        <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
                          {job.description}
                        </p>
                      </div>

                      {/* Responsibilities & Skills Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Key Responsibilities */}
                        {job.keyResponsibilities && job.keyResponsibilities.length > 0 && (
                          <div className="p-4 bg-paper border border-charcoal/10 rounded-xs">
                            <h5 className="font-mono text-xs uppercase tracking-wider text-forest-deep font-bold mb-3 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-leaf" />
                              <span>Key Operating Responsibilities</span>
                            </h5>
                            <ul className="space-y-2 text-xs text-charcoal/80 font-sans">
                              {job.keyResponsibilities.map((resp, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-2">
                                  <span className="text-earth font-mono text-sm leading-none">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Skills & Competencies */}
                        {job.skillsRequired && job.skillsRequired.length > 0 && (
                          <div className="p-4 bg-paper border border-charcoal/10 rounded-xs">
                            <h5 className="font-mono text-xs uppercase tracking-wider text-forest-deep font-bold mb-3 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-earth" />
                              <span>Required Skills & Technical Competencies</span>
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {job.skillsRequired.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="px-2.5 py-1 bg-paper-warm text-charcoal/80 text-[11px] font-mono border border-charcoal/15 rounded-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            {/* Benefits / Perks */}
                            {job.perks && job.perks.length > 0 && (
                              <div className="mt-4 pt-3 border-t border-charcoal/10">
                                <span className="font-mono text-[10.5px] uppercase tracking-wider text-charcoal/50 block mb-1.5">
                                  Benefits & Entitlements
                                </span>
                                <div className="flex flex-wrap gap-1">
                                  {job.perks.map((p, pIdx) => (
                                    <span key={pIdx} className="px-2 py-0.5 bg-forest/5 text-forest text-[10px] font-mono border border-forest/15 rounded-xs">
                                      ✓ {p}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                      </div>

                      {/* Expanded Bottom Action */}
                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-charcoal/10 text-xs font-mono text-charcoal/60">
                        <div>
                          <span>Posted: {job.postedDate || 'Active'}</span>
                          {job.workplaceType && (
                            <span className="ml-3 font-medium text-forest-deep">• {job.workplaceType}</span>
                          )}
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => onApplyJob(job)}
                            className="px-5 py-2 bg-earth hover:bg-earth-light text-forest-deep font-heading text-xs uppercase tracking-wider font-bold rounded-xs transition-colors"
                          >
                            Proceed to Apply Form
                          </button>
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

        {/* Corporate Talent Architecture & Special Guidance */}
        <div className="mt-14 p-8 bg-paper border border-charcoal/15 rounded-xs grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-forest-deep">
              <FileText className="w-4 h-4 text-earth" />
              <h3 className="font-heading text-base font-bold uppercase tracking-tight">
                Application Instructions
              </h3>
            </div>
            <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
              Candidates should send an updated CV with the position title in the subject line. Please include verified portfolio dossiers, code repositories, or regulatory certifications (BEE, CEIG, CAD) where applicable.
            </p>
            <a
              href={`mailto:${siteMetadata.hrEmail}`}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-forest hover:text-earth uppercase tracking-wider mt-4"
            >
              <Mail className="w-3.5 h-3.5 text-earth" />
              <span>{siteMetadata.hrEmail}</span>
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 text-forest-deep">
              <ShieldCheck className="w-4 h-4 text-earth" />
              <h3 className="font-heading text-base font-bold uppercase tracking-tight">
                BEE Auditor Consortium
              </h3>
            </div>
            <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
              Certified Energy Auditors and Certified Energy Managers with more than 2 years of post-certification experience looking for project-to-project assignments may submit credentials for consortium inclusion.
            </p>
            <p className="text-xs font-mono text-earth font-bold mt-4">
              Consortium Desk: {siteMetadata.email}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 text-forest-deep">
              <Users className="w-4 h-4 text-earth" />
              <h3 className="font-heading text-base font-bold uppercase tracking-tight">
                Corporate Governance
              </h3>
            </div>
            <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
              EnVERT Group is an equal opportunity employer committed to merit-based hiring across engineering sciences, corporate communication, sustainable fashion, and editorial curation.
            </p>
            <p className="text-xs font-mono text-charcoal/50 mt-4">
              Corporate Office: Kolkata, WB, India
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
