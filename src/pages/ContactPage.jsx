import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import { siteMetadata } from '../data/siteData';
import { submitForm } from '../services/formService';
import SEO from '../components/SEO';
import { getContactPageSchema } from '../data/seoData';

export default function ContactPage() {
  const [selectedTopics, setSelectedTopics] = useState(['Energy & Solar PV']);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [fallbackMailto, setFallbackMailto] = useState(null);
  const [submissionMeta, setSubmissionMeta] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const topics = [
    'Energy & Solar PV',
    'BEE Industrial Audits',
    'Electric Vehicles (FAME)',
    'Corporate Language Training',
    'Publishing & Media',
    'NAAC University Green Audits',
    'Careers / Recruitment',
    'General Inquiry'
  ];

  const toggleTopic = (t) => {
    if (selectedTopics.includes(t)) {
      if (selectedTopics.length > 1) {
        setSelectedTopics(selectedTopics.filter((item) => item !== t));
      }
    } else {
      setSelectedTopics([...selectedTopics, t]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setFallbackMailto(null);

    const isCareerTopic = selectedTopics.some(t => t.toLowerCase().includes('career') || t.toLowerCase().includes('recruitment'));

    const res = await submitForm({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      topics: selectedTopics,
      domain: selectedTopics.join(', '),
      subject: `Inquiry: ${selectedTopics.join(', ')}`,
      isCareer: isCareerTopic
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmissionMeta(res);
      setFormSubmitted(true);
    } else {
      setErrorMessage(res.error || 'Failed to dispatch inquiry to the server.');
      setFallbackMailto(res.mailtoUrl);
    }
  };

  return (
    <div className="bg-paper-warm min-h-screen py-16 lg:py-24">
      <SEO
        title="Contact EnVERT Group — Corporate Desks & Practice Inquiries"
        description="Directly connect with our specialized practice desks in Kolkata for commercial clean energy, BEE statutory audits, commercial EV fleet conversion, corporate language training, or publication proposals."
        canonical="/contact"
        schema={getContactPageSchema(siteMetadata)}
      />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="pb-8 mb-16 border-b border-charcoal/15">
          <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
            COMMUNICATION & CONSULTATION
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-forest-deep mt-2 leading-[1.02]">
            Let's Talk. <br />
            <span className="text-leaf-dark">Tell Us What You're Working On.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80 max-w-2xl">
            Directly connect with our specialized practice desks for commercial clean energy, BEE statutory audits, commercial EV fleet conversion, corporate language training, or publication proposals.
          </p>
        </div>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Desks & Office Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-paper border border-charcoal/15 space-y-6">
              <h2 className="font-heading text-xl font-bold text-forest-deep uppercase tracking-tight pb-3 border-b border-charcoal/10">
                Corporate Headquarters
              </h2>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-earth shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-xs text-earth uppercase font-semibold">Address</p>
                  <p className="font-heading text-base font-bold text-forest-deep mt-0.5">EnVERT Group Corporate Office</p>
                  <p className="text-xs font-mono text-charcoal/70 mt-0.5">Kolkata, West Bengal, India</p>
                </div>
              </div>

              {/* Direct Telephone Desks */}
              <div className="flex items-start gap-4 pt-4 border-t border-charcoal/10">
                <Phone className="w-5 h-5 text-earth shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="font-mono text-xs text-earth uppercase font-semibold">Telephone Desks</p>
                  <div>
                    <a href={`tel:${siteMetadata.phone}`} className="font-heading text-base font-bold text-forest hover:text-earth block">
                      {siteMetadata.phone} <span className="font-mono text-xs text-charcoal/50">(Corporate HQ)</span>
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${siteMetadata.evPhone}`} className="font-heading text-base font-bold text-forest hover:text-earth block">
                      {siteMetadata.evPhone} <span className="font-mono text-xs text-charcoal/50">(Electric Vehicles Desk)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Department Emails */}
              <div className="flex items-start gap-4 pt-4 border-t border-charcoal/10">
                <Mail className="w-5 h-5 text-earth shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="font-mono text-xs text-earth uppercase font-semibold">Department Contacts</p>
                  <div className="text-xs font-mono space-y-1.5 text-charcoal/80">
                    <p>Corporate: <a href="mailto:admin@envertgroup.com" className="text-forest hover:underline font-bold">admin@envertgroup.com</a></p>
                    <p>Careers / HR: <a href="mailto:hr@envertgroup.com" className="text-forest hover:underline font-bold">hr@envertgroup.com</a></p>
                    <p>E-Vehicles: <a href="mailto:envertev@gmail.com" className="text-forest hover:underline font-bold">envertev@gmail.com</a></p>
                    <p>Publishing: <a href="mailto:curiosity@penandinkpublishers.com" className="text-forest hover:underline font-bold">curiosity@penandinkpublishers.com</a></p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-charcoal/10">
                <Clock className="w-5 h-5 text-earth shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-xs text-earth uppercase font-semibold">Operating Hours</p>
                  <p className="text-xs font-mono text-charcoal/70 mt-0.5">Monday to Friday: 09:30 – 18:30 IST</p>
                  <p className="text-[11px] font-mono text-charcoal/50">Urgent engineering emergencies monitored 24/7</p>
                </div>
              </div>
            </div>

            {/* Credibility Guarantee */}
            <div className="p-6 bg-forest-deep text-paper border border-paper/15 text-xs space-y-2">
              <div className="flex items-center gap-2 text-earth font-mono font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Confidentiality</span>
              </div>
              <p className="text-paper/80 leading-relaxed">
                All technical disclosures, industrial factory blueprints, and operational telemetry received are treated under strict non-disclosure obligations.
              </p>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div className="lg:col-span-7 bg-paper border border-charcoal/15 p-8 sm:p-12">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-forest mx-auto animate-bounce-subtle" />
                <h3 className="font-heading text-3xl font-bold text-forest-deep">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-charcoal/80 max-w-md mx-auto">
                  Thank you for reaching out to EnVERT Group. Your inquiry has been routed directly to our team at{' '}
                  <span className="font-mono font-semibold text-forest-deep">
                    {submissionMeta?.targetEmail || 'admin@envertgroup.com'}
                  </span>. A designated engineer or department lead will follow up shortly.
                </p>
                {submissionMeta?.activationRequired && (
                  <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono rounded-xs max-w-md mx-auto text-left">
                    <strong>First-Time Dispatch:</strong> FormSubmit has sent a one-time activation link to the recipient inbox. Once clicked, future submissions arrive immediately.
                  </div>
                )}
                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
                    }}
                    className="px-6 py-3 bg-forest text-paper font-heading text-xs uppercase tracking-wider font-semibold hover:bg-forest-deep transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="text-xs font-mono text-earth uppercase tracking-wider font-bold mb-3">
                    What can we help with? (Select all that apply)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => {
                      const isSelected = selectedTopics.includes(t);
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => toggleTopic(t)}
                          className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors border ${
                            isSelected
                              ? 'bg-forest text-paper font-bold border-forest'
                              : 'bg-paper-warm text-charcoal/80 border-charcoal/20 hover:border-charcoal/50'
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-1.5 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Mukherjee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-paper-warm border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal focus:border-forest focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-1.5 font-semibold">
                      Organisation / Enterprise
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Industrial Consortium"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-paper-warm border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal focus:border-forest focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-1.5 font-semibold">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-paper-warm border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal focus:border-forest focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-1.5 font-semibold">
                      Telephone / Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-paper-warm border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal focus:border-forest focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-1.5 font-semibold">
                    Project Overview or Inquiry Brief *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Briefly describe your site, facility scope, required certifications, or intended project timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-paper-warm border border-charcoal/20 p-3.5 text-sm text-charcoal focus:border-forest focus:outline-none"
                  ></textarea>
                </div>

                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs font-mono rounded-xs space-y-2">
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

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <span className="text-xs font-mono text-charcoal/60">
                    Dispatched to {selectedTopics.some(t => t.toLowerCase().includes('career') || t.toLowerCase().includes('recruitment')) ? 'hr@envertgroup.com' : 'admin@envertgroup.com'}
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-8 py-3.5 bg-forest hover:bg-forest-deep text-paper font-heading font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-earth-light" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5 text-earth-light" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
