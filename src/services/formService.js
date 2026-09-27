import { siteMetadata } from '../data/siteData';

/**
 * Service to dispatch form submissions to FormSubmit.co via AJAX.
 * Forwards inquiries directly to admin@envertgroup.com (and hr@envertgroup.com for job applications).
 *
 * Note: FormSubmit sends a one-time activation email to the recipient on the very first
 * submission to verify ownership. Once confirmed, all future submissions arrive immediately.
 */

export async function submitForm(payload = {}, options = {}) {
  const isJobApplication = 
    payload.isCareer || 
    Boolean(payload.domain && (
      payload.domain.toLowerCase().includes('application') ||
      payload.domain.toLowerCase().includes('career') ||
      payload.domain.toLowerCase().includes('job')
    ));

  const isEisree = Boolean(
    (payload.domain && payload.domain.toLowerCase().includes('eisree')) ||
    (payload.subject && payload.subject.toLowerCase().includes('eisree'))
  );

  // Determine recipient
  const targetEmail = isJobApplication
    ? (import.meta.env.VITE_FORMSUBMIT_HR_EMAIL || siteMetadata.hrEmail || 'hr@envertgroup.com')
    : (isEisree 
        ? (import.meta.env.VITE_FORMSUBMIT_EISREE_EMAIL || 'eisree.kolkata@gmail.com')
        : (import.meta.env.VITE_FORMSUBMIT_EMAIL || siteMetadata.email || 'admin@envertgroup.com')
      );

  const endpoint = import.meta.env.VITE_FORMSUBMIT_ENDPOINT 
    || `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`;

  const subjectLine = payload.subject 
    ? `[EnVERT Group] ${payload.subject}`
    : (payload.domain 
        ? `[EnVERT Group] ${payload.domain} Inquiry - ${payload.name || 'Website Contact'}`
        : `[EnVERT Group] Website Contact from ${payload.name || 'Website Visitor'}`
      );

  // Prepare submission body
  const body = {
    name: payload.name || 'Not provided',
    email: payload.email || 'Not provided',
    phone: payload.phone || 'Not provided',
    ...(payload.company ? { company: payload.company } : {}),
    ...(payload.domain ? { practice_or_domain: payload.domain } : {}),
    ...(payload.topics && payload.topics.length > 0 
      ? { selected_topics: Array.isArray(payload.topics) ? payload.topics.join(', ') : payload.topics } 
      : {}
    ),
    message: payload.message || 'No additional message provided.',
    _subject: subjectLine,
    _template: 'table',
    _captcha: 'false'
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
      const isActivation = typeof data.message === 'string' && data.message.toLowerCase().includes('activation');
      return {
        success: true,
        message: data.message || 'Your inquiry was successfully transmitted to our practice desk.',
        activationRequired: isActivation,
        targetEmail
      };
    } else {
      throw new Error(data.message || `Submission server responded with status ${response.status}`);
    }
  } catch (error) {
    console.error('Form submission error:', error);
    
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
