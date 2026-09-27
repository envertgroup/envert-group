import React, { useEffect } from 'react';

const DEFAULT_ORIGIN = 'https://www.envertgroup.com';
const DEFAULT_TITLE = 'EnVERT Group — Multidisciplinary Engineering, Sustainability, Mobility & Advisory';
const DEFAULT_DESCRIPTION = 'A truly multidisciplinary engineering, advisory, design, consultancy and publishing group of companies working across the eleven markets. Headquartered in Kolkata, West Bengal, India.';
const DEFAULT_IMAGE = `${DEFAULT_ORIGIN}/assets/logos/envert_group_logo.png`;

/**
 * Enterprise SEO Head & Structured Data Management Component
 * Supports React 19 hoisted metadata tags and synchronous DOM updates
 * for all search crawlers, social share cards, and Rich Snippets.
 */
export default function SEO({
  title,
  description,
  canonical,
  keywords,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schema,
  noindex = false
}) {
  const fullTitle = title 
    ? (title.includes('EnVERT') ? title : `${title} | EnVERT Group`)
    : DEFAULT_TITLE;

  const fullDescription = description || DEFAULT_DESCRIPTION;

  const fullCanonical = canonical
    ? (canonical.startsWith('http') ? canonical : `${DEFAULT_ORIGIN}${canonical.startsWith('/') ? '' : '/'}${canonical}`)
    : DEFAULT_ORIGIN;

  const fullOgImage = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${DEFAULT_ORIGIN}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`)
    : DEFAULT_IMAGE;

  useEffect(() => {
    try {
      if (document.title !== fullTitle) {
        document.title = fullTitle;
      }
    } catch {
      // safe fallback
    }
  }, [fullTitle]);

  let schemaString = '';
  if (schema) {
    try {
      schemaString = JSON.stringify(schema);
    } catch (e) {
      console.warn('SEO Schema warning:', e);
    }
  }

  return (
    <>
      {/* React 19 Document Metadata Hoisting */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={fullCanonical} />
      
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {schemaString && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaString }}
        />
      )}
    </>
  );
}
