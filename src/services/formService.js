import { siteMetadata } from '../data/siteData';

/**
 * Service to dispatch form submissions via Web3Forms API.
 * Protected by hCaptcha spam prevention.
 * Routes inquiries to appropriate corporate desk:
 * - hr@envertgroup.com for job applications & careers
 * - eisree.kolkata@gmail.com for solar research inquiries
 * - admin@envertgroup.com for general & engineering inquiries
 */

export const WEB3FORMS_ACCESS_KEY = 
  import.meta.env.WEB3FORMS_ACCESS_KEY || 
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 
  '';

export const HCAPTCHA_SITE_KEY = 
  import.meta.env.HCAPTCHA_SITE_KEY || 
  import.meta.env.VITE_HCAPTCHA_SITE_KEY || 
  import.meta.env.HCAPTCHA_SITEKEY || 
  import.meta.env.VITE_HCAPTCHA_SITEKEY || 
  '50b2fe65-b00b-4b9e-ad62-3ba471098be2';

export const HCAPTCHA_SITEKEY = HCAPTCHA_SITE_KEY;

export async function submitForm(payload = {}, _options = {}) {
  const isJobApplication = 
    payload.isCareer || 
    Boolean(payload.domain && (
      payload.domain.toLowerCase().includes('application') ||
      payload.domain.toLowerCase().includes('career') ||
      payload.domain.toLowerCase().includes('job') ||
      payload.domain.toLowerCase().includes('recruitment')
    ));

  const isEisree = Boolean(
    (payload.domain && payload.domain.toLowerCase().includes('eisree')) ||
    (payload.subject && payload.subject.toLowerCase().includes('eisree'))
  );

  const isEipr = Boolean(
    (payload.domain && payload.domain.toLowerCase().includes('eipr')) ||
    (payload.subject && payload.subject.toLowerCase().includes('eipr'))
  );

  // Determine intended desk
  const targetEmail = isJobApplication
    ? (import.meta.env.VITE_CONTACT_HR_EMAIL || siteMetadata.hrEmail || 'hr@envertgroup.com')
    : (isEisree 
        ? (import.meta.env.VITE_CONTACT_EISREE_EMAIL || 'eisree.kolkata@gmail.com')
        : (isEipr
            ? 'eipr.kolkata@gmail.com'
            : (import.meta.env.VITE_CONTACT_ADMIN_EMAIL || siteMetadata.email || 'admin@envertgroup.com')
          )
      );

  const subjectLine = payload.subject 
    ? `[EnVERT Group] ${payload.subject}`
    : (payload.domain 
        ? `[EnVERT Group] ${payload.domain} Inquiry - ${payload.name || 'Website Contact'}`
        : `[EnVERT Group] Website Contact from ${payload.name || 'Website Visitor'}`
      );

  // Prepare submission body for Web3Forms
  const body = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: subjectLine,
    from_name: 'EnVERT Group Portal',
    name: payload.name || 'Not provided',
    email: payload.email || 'Not provided',
    phone: payload.phone || 'Not provided',
    ...(payload.email ? { replyto: payload.email } : {}),
    ...(payload.company ? { company: payload.company } : {}),
    ...(payload.domain ? { practice_or_domain: payload.domain } : {}),
    ...(payload.topics && payload.topics.length > 0 
      ? { selected_topics: Array.isArray(payload.topics) ? payload.topics.join(', ') : payload.topics } 
      : {}
    ),
    message: payload.message || 'No additional message provided.',
    intended_desk: targetEmail,
    ...(payload.captchaToken ? { 'h-captcha-response': payload.captchaToken } : {})
  };

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && data.success) {
      return {
        success: true,
        message: data.message || 'Your inquiry was successfully transmitted to our practice desk.',
        targetEmail
      };
    } else {
      throw new Error(data.message || `Submission failed with status ${response.status}`);
    }
  } catch (error) {
    // Build mailto fallback URL
    const mailtoBody = encodeURIComponent(
      `Name: ${payload.name || ''}\n` +
      `Email: ${payload.email || ''}\n` +
      `Phone: ${payload.phone || ''}\n` +
      (payload.company ? `Company: ${payload.company}\n` : '') +
      (payload.domain ? `Domain/Practice: ${payload.domain}\n` : '') +
      (payload.topics ? `Topics: ${Array.isArray(payload.topics) ? payload.topics.join(', ') : payload.topics}\n` : '') +
      `\nMessage:\n${payload.message || ''}`
    );
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subjectLine)}&body=${mailtoBody}`;

    return {
      success: false,
      error: error.message || 'Network error encountered while sending form.',
      targetEmail,
      mailtoUrl
    };
  }
}
