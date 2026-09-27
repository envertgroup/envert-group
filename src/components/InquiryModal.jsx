import React, { useState } from 'react';
import { X, Send, CheckCircle2, ArrowRight, Loader2, AlertCircle, Mail } from 'lucide-react';
import { siteMetadata } from '../data/siteData';
import { submitForm } from '../services/formService';

export default function InquiryModal({ isOpen, onClose, initialSubject = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fallbackMailto, setFallbackMailto] = useState(null);
  const [submissionMeta, setSubmissionMeta] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: initialSubject || 'General Inquiry',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setFallbackMailto(null);

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
      isCareer: isCareerApp
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmissionMeta(res);
      setSubmitted(true);
    } else {
      setErrorMessage(res.error || 'Failed to dispatch inquiry to the server.');
      setFallbackMailto(res.mailtoUrl);
    }
  };

  const domains = [
    'Energy Systems',
    'Environmental Compliance',
    'Buildings & Infrastructure',
    'Electric Mobility',
    'Corporate Advisory',
    'Capability Training',
    'Publishing & Media',
    'Careers / Recruitment',
    'General Inquiry'
  ];

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
                  {domains.map((d) => (
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
