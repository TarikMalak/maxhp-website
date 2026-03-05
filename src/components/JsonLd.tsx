// JSON-LD structured data for Max HP Productions

import { siteData, capabilities } from '@/lib/data';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://maxhpprod.com/#organization',
    name: 'Max HP Productions',
    url: 'https://maxhpprod.com',
    logo: 'https://maxhpprod.com/logo.png',
    image: 'https://maxhpprod.com/logo.png',
    legalName: siteData.legalName,
    description: siteData.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6 St Johns Ln',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10013',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7237,
      longitude: -74.0059,
    },
    telephone: '+1-646-389-1570',
    email: siteData.email,
    sameAs: siteData.partners.map((p) => p.url),
    areaServed: 'Worldwide',
    knowsAbout: [
      'Video Production',
      'Post-Production',
      'Color Grading',
      'Sound Design',
      'Visual Effects',
      'Motion Graphics',
      'AI-Assisted Post-Production',
      'Broadcast Commercials',
      'Social Content Production',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Max HP Productions Services',
      itemListElement: capabilities.map((c) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: c.title,
          description: c.subtitle,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://maxhpprod.com/#website',
    name: 'Max HP Productions',
    url: 'https://maxhpprod.com',
    inLanguage: 'en-US',
    publisher: { '@id': 'https://maxhpprod.com/#organization' },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd() {
  const data = capabilities.map((c) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.title,
    description: c.description,
    provider: { '@id': 'https://maxhpprod.com/#organization' },
    areaServed: 'Worldwide',
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
