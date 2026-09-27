/**
 * SEO & Structured Data (Schema.org) Registry for EnVERT Group
 * Adheres to AGENTS.md rules: all static metadata & structures reside under src/data/
 */

export const SITE_DOMAIN = 'https://www.envertgroup.com';

export const defaultSeoMeta = {
  defaultTitle: 'EnVERT Group',
  defaultDescription: 'A truly multidisciplinary engineering, advisory, design, consultancy and publishing group of companies working across the eleven markets. Headquartered in Kolkata, West Bengal, India.',
  corporateLogo: `${SITE_DOMAIN}/assets/logos/envert_group_logo.webp`,
  founder: 'EnVERT Group Governance Council',
  headquarters: {
    streetAddress: 'EnVERT Group Corporate Office',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    postalCode: '700001',
    addressCountry: 'IN'
  },
  geoCoordinates: {
    latitude: 22.5726,
    longitude: 88.3639
  }
};

/**
 * Generates BreadcrumbList Schema for Google Search Rich Results
 */
export function getBreadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item && item.url 
        ? (item.url.startsWith('http') ? item.url : `${SITE_DOMAIN}${item.url.startsWith('/') ? '' : '/'}${item.url}`)
        : SITE_DOMAIN
    }))
  };
}

/**
 * Generates Root WebSite & Corporation Schema
 */
export function getHomeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Corporation',
        '@id': `${SITE_DOMAIN}/#organization`,
        name: 'EnVERT Group',
        alternateName: [
          'EnVERT',
          'EnVERT®',
          'Nandi Resources Generation Technology Private Limited'
        ],
        url: SITE_DOMAIN,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_DOMAIN}/#logo`,
          url: defaultSeoMeta.corporateLogo,
          caption: 'EnVERT Group Corporate Emblem'
        },
        image: defaultSeoMeta.corporateLogo,
        description: defaultSeoMeta.defaultDescription,
        address: {
          '@type': 'PostalAddress',
          addressLocality: defaultSeoMeta.headquarters.addressLocality,
          addressRegion: defaultSeoMeta.headquarters.addressRegion,
          addressCountry: defaultSeoMeta.headquarters.addressCountry
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+91-9836511995',
            contactType: 'corporate headquarters',
            email: 'admin@envertgroup.com',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi', 'Bengali']
          },
          {
            '@type': 'ContactPoint',
            telephone: '+91-9836511995',
            contactType: 'human resources',
            email: 'hr@envertgroup.com',
            areaServed: 'IN'
          },
          {
            '@type': 'ContactPoint',
            telephone: '+91-9836511995',
            contactType: 'electric mobility division',
            email: 'envertev@gmail.com',
            areaServed: 'IN'
          }
        ],
        sameAs: [
          'http://www.nrgindia.com',
          SITE_DOMAIN
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_DOMAIN}/#website`,
        url: SITE_DOMAIN,
        name: 'EnVERT Group',
        publisher: {
          '@id': `${SITE_DOMAIN}/#organization`
        },
        inLanguage: 'en-US'
      }
    ]
  };
}

/**
 * About Page Schema
 */
export function getAboutSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About EnVERT Group', url: '/about' }
      ]),
      {
        '@type': 'AboutPage',
        '@id': `${SITE_DOMAIN}/about#webpage`,
        url: `${SITE_DOMAIN}/about`,
        name: 'About EnVERT Group — Heritage, Governance & Interdisciplinary Ethos',
        description: 'EnVERT Group brings together physical infrastructure engineering, statutory energy audits, commercial electric transport, multilingual corporate capability, and published academic literature.',
        mainEntity: {
          '@id': `${SITE_DOMAIN}/#organization`
        }
      }
    ]
  };
}
export const getAboutPageSchema = getAboutSchema;

/**
 * Businesses Directory Schema
 */
export function getBusinessesIndexSchema(businesses = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Our Businesses', url: '/businesses' }
      ]),
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_DOMAIN}/businesses#webpage`,
        url: `${SITE_DOMAIN}/businesses`,
        name: 'Our Businesses — 12 Operating Markets & Specialized Divisions | EnVERT Group',
        description: 'Explore EnVERT Group operating sectors across energy audits, commercial EV platforms, corporate training, publishing, materials, and advisory.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: businesses.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${SITE_DOMAIN}/businesses/${b.urlSlug || b.id}`,
            name: `${b.name} (${b.companyName})`
          }))
        }
      }
    ]
  };
}

/**
 * Individual Business Detail Schema
 */
export function getBusinessDetailSchema(business) {
  if (!business) return null;
  const canonicalUrl = `${SITE_DOMAIN}/businesses/${business.urlSlug || business.id}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Businesses', url: '/businesses' },
        { name: business.name, url: `/businesses/${business.urlSlug || business.id}` }
      ]),
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: `${business.name} — ${business.companyName}`,
        provider: {
          '@type': 'Corporation',
          name: 'EnVERT Group',
          url: SITE_DOMAIN
        },
        serviceType: business.category,
        description: business.summary,
        url: canonicalUrl,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${business.name} Capabilities`,
          itemListElement: (business.capabilities || []).map((cap, i) => ({
            '@type': 'Offer',
            position: i + 1,
            itemOffered: {
              '@type': 'Service',
              name: cap
            }
          }))
        }
      }
    ]
  };
}

/**
 * Companies Page Schema
 */
export function getCompaniesPageSchema(companies = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Group Companies', url: '/companies' }
      ]),
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_DOMAIN}/companies#webpage`,
        url: `${SITE_DOMAIN}/companies`,
        name: 'Operating Companies & Legal Entities | EnVERT Group',
        description: 'Directory of operating entities, divisions, and initiatives under EnVERT Group headquartered in Kolkata, India.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: companies.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.name || 'Company',
            description: c.summary || '',
            url: c.portalUrl 
              ? (c.portalUrl.startsWith('http') ? c.portalUrl : `${SITE_DOMAIN}${c.portalUrl.startsWith('/') ? '' : '/'}${c.portalUrl}`)
              : (c.internalSlug ? `${SITE_DOMAIN}/businesses/${c.internalSlug}` : `${SITE_DOMAIN}/companies`)
          }))
        }
      }
    ]
  };
}

/**
 * Projects Page Schema
 */
export function getProjectsPageSchema(projects = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Selected Work', url: '/projects' }
      ]),
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_DOMAIN}/projects#webpage`,
        url: `${SITE_DOMAIN}/projects`,
        name: 'Selected Work & Engineering Case Studies | EnVERT Group',
        description: 'Verifiable engineering deliverables across commercial solar PV, statutory industrial BEE energy audits, and commercial electric vehicle platforms.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: projects.map((p, i) => ({
            '@type': 'CreativeWork',
            position: i + 1,
            name: p.title,
            description: p.scope,
            creator: {
              '@type': 'Organization',
              name: 'EnVERT Group'
            },
            locationCreated: {
              '@type': 'Place',
              name: p.location
            }
          }))
        }
      }
    ]
  };
}

/**
 * Careers Page Schema with Google JobPosting rich snippets for every open role
 */
export function getCareersPageSchema(jobs = []) {
  const jobPostings = jobs.map((job) => ({
    '@type': 'JobPosting',
    title: job.title,
    description: `${job.description} Key Responsibilities: ${(job.keyResponsibilities || []).join('; ')}. Qualifications: ${job.qualification}. Experience: ${job.experience}.`,
    datePosted: '2026-09-01',
    validThrough: '2026-12-31',
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'EnVERT Group',
      sameAs: SITE_DOMAIN,
      logo: defaultSeoMeta.corporateLogo
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kolkata',
        addressRegion: 'West Bengal',
        addressCountry: 'IN'
      }
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        value: 600000,
        unitText: 'YEAR'
      }
    }
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Careers', url: '/careers' }
      ]),
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_DOMAIN}/careers#webpage`,
        url: `${SITE_DOMAIN}/careers`,
        name: 'Work With EnVERT — Careers & Opportunities',
        description: 'Explore live career opportunities across clean power engineering, industrial BEE audits, commercial EV systems, and technical publishing.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: jobPostings
        }
      },
      ...jobPostings
    ]
  };
}

/**
 * Contact Page Schema
 */
export function getContactPageSchema(siteMetadata) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' }
      ]),
      {
        '@type': 'ContactPage',
        '@id': `${SITE_DOMAIN}/contact#webpage`,
        url: `${SITE_DOMAIN}/contact`,
        name: 'Contact EnVERT Group — Corporate Headquarters & Practice Desks',
        description: 'Connect directly with EnVERT Group corporate headquarters in Kolkata, India or reach our specialized desks for clean energy, EV transport, and publishing.',
        mainEntity: {
          '@type': 'Corporation',
          name: 'EnVERT Group',
          telephone: siteMetadata?.phone || '+91 9836511995',
          email: siteMetadata?.email || 'admin@envertgroup.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kolkata',
            addressRegion: 'West Bengal',
            addressCountry: 'IN'
          }
        }
      }
    ]
  };
}
