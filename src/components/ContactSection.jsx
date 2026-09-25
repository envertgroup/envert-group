import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { siteMetadata } from '../data/siteData';

export default function ContactSection() {
  const [selectedTopics, setSelectedTopics] = useState(['Energy & Solar PV']);
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    'NAAC Green Audits',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-forest-deep text-paper">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="pb-6 mb-12 border-b border-paper/15">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-earth inline-block rounded-xs"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-earth font-semibold">
              DIRECT CORPORATE ENGAGEMENT
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight-editorial text-paper leading-[1.0]">
            Have A Project In Mind? <br />
            <span className="text-earth-light">Let's Talk.</span>
          </h2>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office Contacts & Authentic Division Desks */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-base text-paper/80 leading-relaxed">
              Whether you require a statutory BEE energy audit for an industrial campus, commercial EV fleet conversion under the FAME framework, corporate language training, or book publication, connect directly with our specialized desks.
            </p>

            {/* Direct Details */}
            <div className="space-y-6 pt-4 border-t border-paper/10">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-earth shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-xs text-earth uppercase tracking-wider font-semibold">
                    Headquarters
                  </p>
                  <p className="font-heading text-base font-semibold text-paper mt-1">
                    EnVERT Group Corporate Office
                  </p>
                  <p className="text-sm text-paper/70 font-mono mt-0.5">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>

              {/* Direct Telephone Desks */}
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-earth shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <p className="font-mono text-xs text-earth uppercase tracking-wider font-semibold">
                    Telephone Desks
                  </p>
                  <div>
                    <a
                      href={`tel:${siteMetadata.phone}`}
                      className="font-heading text-base font-semibold text-paper hover:text-earth-light transition-colors block"
                    >
                      {siteMetadata.phone} <span className="font-mono text-xs text-paper/60">(Corporate HQ)</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href={`tel:${siteMetadata.evPhone}`}
                      className="font-heading text-base font-semibold text-paper hover:text-earth-light transition-colors block"
                    >
                      {siteMetadata.evPhone} <span className="font-mono text-xs text-paper/60">(Electric Vehicles Desk)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Division Emails */}
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-earth shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <p className="font-mono text-xs text-earth uppercase tracking-wider font-semibold">
                    Specialized Department Emails
                  </p>
                  <div className="text-xs font-mono space-y-1 text-paper/80">
                    <p>Corporate Administration: <a href="mailto:admin@envertgroup.com" className="text-earth-light hover:underline font-semibold">admin@envertgroup.com</a></p>
                    <p>Careers & Recruitment: <a href="mailto:hr@envertgroup.com" className="text-earth-light hover:underline font-semibold">hr@envertgroup.com</a></p>
                    <p>Electric Vehicles Division: <a href="mailto:envertev@gmail.com" className="text-earth-light hover:underline font-semibold">envertev@gmail.com</a></p>
                    <p>Pen & Ink Publishers: <a href="mailto:curiosity@penandinkpublishers.com" className="text-earth-light hover:underline font-semibold">curiosity@penandinkpublishers.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility note */}
            <div className="p-4 bg-forest border border-paper/15 text-xs text-paper/75 space-y-1">
              <p className="font-mono text-earth font-semibold uppercase">Technical Integrity</p>
              <p>Audits and engineering assessments are conducted by Certified Energy Auditors and credentialed systems engineers.</p>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div className="lg:col-span-7 bg-forest/30 border border-paper/15 p-6 sm:p-10 rounded-xs">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-earth mx-auto" />
                <h3 className="font-heading text-2xl font-bold text-paper">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-paper/80 max-w-md mx-auto">
                  Thank you for reaching out to EnVERT Group. Your message has been routed to the relevant technical department in Kolkata.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
                  }}
                  className="mt-4 px-5 py-2.5 bg-paper text-forest-deep font-heading text-xs uppercase tracking-wider font-semibold hover:bg-paper-warm transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="text-xs font-mono text-earth uppercase tracking-wider font-semibold mb-3">
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
                              ? 'bg-earth text-forest-deep font-semibold border-earth'
                              : 'bg-forest/50 text-paper/80 border-paper/20 hover:border-paper/40'
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-paper/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Mukherjee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-forest-dark/80 border border-paper/20 px-3.5 py-2.5 text-sm text-paper placeholder-paper/30 focus:border-earth focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-paper/70 mb-1.5">
                      Organisation / Enterprise
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Industrial Consortium"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-forest-dark/80 border border-paper/20 px-3.5 py-2.5 text-sm text-paper placeholder-paper/30 focus:border-earth focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-paper/70 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-forest-dark/80 border border-paper/20 px-3.5 py-2.5 text-sm text-paper placeholder-paper/30 focus:border-earth focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-paper/70 mb-1.5">
                      Telephone / Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-forest-dark/80 border border-paper/20 px-3.5 py-2.5 text-sm text-paper placeholder-paper/30 focus:border-earth focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-paper/70 mb-1.5">
                    Project Overview or Inquiry Brief *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your site, facility scope, required certifications, or intended project timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-forest-dark/80 border border-paper/20 p-3.5 text-sm text-paper placeholder-paper/30 focus:border-earth focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-earth hover:bg-earth-light text-forest-deep font-heading font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
