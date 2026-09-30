import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle2, Loader2, AlertCircle, Mail } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { submitForm, HCAPTCHA_SITEKEY } from '../services/formService';

const CANONICAL_DOMAINS = [
  'Energy & Power Systems (NRG India)',
  'Electric Mobility & Clean Transportation (EnVERT E-Vehicles)',
  'Sustainable Tourism & Global Platforms (ICST Global)',
  'Corporate Language & Cultural Training (India Corporate Trainers)',
  'Specialty Chemicals & Advanced Polymers (REPOXISY)',
  'Solar & Railway Lighting (WAGSOL)',
  'Policy, Governance & Environmental Research (EIPR)',
  'Publication & Media (Touriosity, Pen & Ink, Glare Post)',
  'Film & Content Production (Glarepost Films)',
  'Visual Arts & Contemporary Culture (Afield Gallery)',
  'Fashion & Sustainable Lifestyle (Atmaja)',
  'Social Stewardship & Community Ecology (EnVERT Foundation)',
  'Healthcare & Corporate Wellness (EnVERT Wellness)',
  'Strategic Corporate Advisory (Afield Advisory)',
  'Projects & Technical Deliverables',
  'Careers / Recruitment',
  'General Inquiry / Corporate Consultation'
];

function resolveDomain(subject = '', explicitDomain = '') {
  if (explicitDomain && CANONICAL_DOMAINS.includes(explicitDomain)) {
    return explicitDomain;
  }

  const raw = `${explicitDomain || ''} ${subject || ''}`.toLowerCase();

  if (raw.includes('film') || raw.includes('glarepost') || raw.includes('cinema') || raw.includes('vfx') || raw.includes('ott') || raw.includes('commis')) {
    return 'Film & Content Production (Glarepost Films)';
  }
  if (raw.includes('railway') || raw.includes('wagsol') || raw.includes('street light')) {
    return 'Solar & Railway Lighting (WAGSOL)';
  }
  if (raw.includes('chemical') || raw.includes('epoxy') || raw.includes('repoxisy') || raw.includes('polymer') || raw.includes('resin')) {
    return 'Specialty Chemicals & Advanced Polymers (REPOXISY)';
  }
  if (raw.includes('transport') || raw.includes('vehicle') || raw.includes('ev') || raw.includes('mobility') || raw.includes('fleet')) {
    return 'Electric Mobility & Clean Transportation (EnVERT E-Vehicles)';
  }
  if (raw.includes('tourism') || raw.includes('icst') || raw.includes('hospitality')) {
    return 'Sustainable Tourism & Global Platforms (ICST Global)';
  }
  if (raw.includes('language') || raw.includes('corporate trainer') || raw.includes('relocation') || raw.includes('training')) {
    return 'Corporate Language & Cultural Training (India Corporate Trainers)';
  }
  if (raw.includes('gallery') || raw.includes('art') || raw.includes('curator') || raw.includes('dolls')) {
    return 'Visual Arts & Contemporary Culture (Afield Gallery)';
  }
  if (raw.includes('fashion') || raw.includes('textile') || raw.includes('apparel') || raw.includes('atmaja')) {
    return 'Fashion & Sustainable Lifestyle (Atmaja)';
  }
  if (raw.includes('foundation') || raw.includes('csr') || raw.includes('stewardship') || raw.includes('ecology') || raw.includes('volunteer')) {
    return 'Social Stewardship & Community Ecology (EnVERT Foundation)';
  }
  if (raw.includes('wellness') || raw.includes('health') || raw.includes('ergonomic')) {
    return 'Healthcare & Corporate Wellness (EnVERT Wellness)';
  }
  if (raw.includes('eipr') || raw.includes('policy') || raw.includes('environmental research') || raw.includes('governance')) {
    return 'Policy, Governance & Environmental Research (EIPR)';
  }
  if (raw.includes('publication') || raw.includes('magazine') || raw.includes('book') || raw.includes('publisher') || raw.includes('touriosity') || raw.includes('pen & ink') || raw.includes('curiosity') || raw.includes('writing award') || raw.includes('glare post')) {
    return 'Publication & Media (Touriosity, Pen & Ink, Glare Post)';
  }
  if (raw.includes('advisory') || raw.includes('strategic') || raw.includes('m&a') || raw.includes('joint venture')) {
    return 'Strategic Corporate Advisory (Afield Advisory)';
  }
  if (raw.includes('energy') || raw.includes('solar') || raw.includes('nrg') || raw.includes('audit') || raw.includes('power') || raw.includes('bee')) {
    return 'Energy & Power Systems (NRG India)';
  }
  if (raw.includes('project') || raw.includes('deliverable') || raw.includes('scope')) {
    return 'Projects & Technical Deliverables';
  }
  if (raw.includes('career') || raw.includes('job') || raw.includes('application') || raw.includes('recruitment') || raw.includes('hiring') || raw.includes('cv')) {
    return 'Careers / Recruitment';
  }
  if (explicitDomain && explicitDomain.trim()) {
    return explicitDomain.trim();
  }
  if (subject && subject.trim() && !subject.toLowerCase().includes('consultation')) {
    return subject.replace(/^inquiry:\s*/i, '').trim();
  }

  return 'General Inquiry / Corporate Consultation';
}

export default function InquiryModal({ isOpen, onClose, initialSubject = '', initialDomain = null }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fallbackMailto, setFallbackMailto] = useState(null);
  const [submissionMeta, setSubmissionMeta] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: resolveDomain(initialSubject, initialDomain),
    message: ''
  });

  const [prevProps, setPrevProps] = useState({ initialSubject, initialDomain });
  if (prevProps.initialSubject !== initialSubject || prevProps.initialDomain !== initialDomain) {
    setPrevProps({ initialSubject, initialDomain });
    setFormData(prev => ({
      ...prev,
      domain: resolveDomain(initialSubject, initialDomain),
      message: ''
    }));
    setSubmitted(false);
    setErrorMessage(null);
    setFallbackMailto(null);
    setCaptchaToken(null);
  }

  // Reset captcha widget if modal opens or props change
  useEffect(() => {
    if (isOpen) {
      captchaRef.current?.resetCaptcha();
    }
  }, [isOpen, initialSubject, initialDomain]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setFallbackMailto(null);

    if (!captchaToken) {
      setIsSubmitting(false);
      setErrorMessage('Please complete the hCaptcha security check to verify you are human.');
      return;
    }

    const isCareerApp = 
      formData.domain.toLowerCase().includes('application') || 
      formData.domain.toLowerCase().includes('career') ||
      formData.domain.toLowerCase().includes('job');

    const res = await submitForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      domain: formData.domain,
      subject: formData.domain,
      message: formData.message,
      isCareer: isCareerApp,
      captchaToken
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmissionMeta(res);
      setSubmitted(true);
      setCaptchaToken(null);
    } else {
      setErrorMessage(res.error || 'Failed to dispatch inquiry to the server.');
      setFallbackMailto(res.mailtoUrl);
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    }
  };

  const domainList = CANONICAL_DOMAINS.includes(formData.domain)
    ? CANONICAL_DOMAINS
    : [formData.domain, ...CANONICAL_DOMAINS];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-paper-warm border border-charcoal/20 max-w-lg w-full p-6 sm:p-8 relative shadow-2xl rounded-xs">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-charcoal/60 hover:text-charcoal focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-forest mx-auto" />
            <h3 className="font-heading text-2xl font-bold text-forest-deep">
              Inquiry Dispatched
            </h3>
            <p className="text-sm text-charcoal/80 max-w-sm mx-auto">
              Your inquiry has been successfully transmitted to our team at{' '}
              <span className="font-mono font-semibold text-forest-deep">
                {submissionMeta?.targetEmail || 'admin@envertgroup.com'}
              </span>.
            </p>
            {submissionMeta?.activationRequired && (
              <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono rounded-xs max-w-md mx-auto text-left">
                <strong>First-Time Dispatch:</strong> FormSubmit has sent a one-time activation link to the inbox. Please click that link to confirm routing. Subsequent messages deliver immediately.
              </div>
            )}
            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    domain: initialSubject || 'General Inquiry',
                    message: ''
                  });
                }}
                className="px-4 py-2 border border-charcoal/20 text-charcoal font-heading text-xs uppercase tracking-wider font-semibold hover:border-forest hover:text-forest-deep transition-colors"
              >
                New Inquiry
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 bg-forest text-paper font-heading text-xs uppercase tracking-wider font-semibold hover:bg-forest-deep transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b border-charcoal/10 pb-4 mb-6">
              <span className="font-mono text-[11px] text-earth uppercase font-semibold tracking-wider">
                COMMUNICATION CHANNEL
              </span>
              <h3 className="font-heading text-2xl font-bold text-forest-deep uppercase tracking-tight mt-1">
                Start A Conversation
              </h3>
              <p className="text-xs text-charcoal/70 mt-1">
                Direct engagement with EnVERT corporate engineering & advisory.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal/70 mb-1">
                  Domain / Focus Area
                </label>
                <select
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                  className="w-full bg-paper border border-charcoal/20 px-3 py-2 text-xs font-mono text-charcoal focus:border-forest focus:outline-none"
                >
                  {domainList.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal/70 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. A. Sen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-paper border border-charcoal/20 px-3 py-2 text-sm text-charcoal focus:border-forest focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal/70 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@work.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-paper border border-charcoal/20 px-3 py-2 text-sm text-charcoal focus:border-forest focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal/70 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-paper border border-charcoal/20 px-3 py-2 text-sm text-charcoal focus:border-forest focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal/70 mb-1">
                  Requirements / Message *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Outline your project scope, site details or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-paper border border-charcoal/20 p-2.5 text-xs text-charcoal focus:border-forest focus:outline-none"
                ></textarea>
              </div>

              {/* Spam Protection (hCaptcha) */}
              <div className="flex justify-center my-3 min-h-[78px] overflow-hidden">
                <HCaptcha
                  ref={captchaRef}
                  sitekey={HCAPTCHA_SITEKEY}
                  reCaptchaCompat={false}
                  onVerify={(token) => {
                    setCaptchaToken(token);
                    setErrorMessage(null);
                  }}
                  onExpire={() => setCaptchaToken(null)}
                  onError={(err) => console.warn('hCaptcha error:', err)}
                />
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-mono rounded-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                  {fallbackMailto && (
                    <a
                      href={fallbackMailto}
                      className="inline-flex items-center gap-1.5 text-xs text-red-900 underline hover:text-red-700 font-bold"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Click here to send directly via Email Client</span>
                    </a>
                  )}
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] font-mono text-charcoal/50">
                  Direct dispatch to {formData.domain?.toLowerCase().includes('application') || formData.domain?.toLowerCase().includes('career') ? 'hr@envertgroup.com' : 'admin@envertgroup.com'}
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-5 py-2.5 bg-forest hover:bg-forest-deep text-paper font-heading text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
