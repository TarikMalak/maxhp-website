import type { SiteSettings, Capability } from '@/lib/types';

export function OrganizationJsonLd({ settings, capabilities }: { settings: SiteSettings; capabilities: Capability[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://maxhpprod.com/#organization',
    name: settings.name,
    url: settings.url,
    logo: 'https://maxhpprod.com/logo.png',
    image: 'https://maxhpprod.com/logo.png',
    legalName: settings.legal_name,
    description: settings.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6 St Johns Ln',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10013',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 40.7237, longitude: -74.0059 },
    telephone: '+1-646-389-1570',
    email: settings.email,
    sameAs: settings.partners.map((p) => p.url),
    areaServed: 'Worldwide',
    knowsAbout: [
      'Video Production', 'Post-Production', 'Color Grading', 'Sound Design',
      'Visual Effects', 'Motion Graphics', 'AI-Assisted Post-Production',
      'Broadcast Commercials', 'Social Content Production',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${settings.name} Services`,
      itemListElement: capabilities.map((c) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: c.title, description: c.subtitle },
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function WebSiteJsonLd({ settings }: { settings: SiteSettings }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://maxhpprod.com/#website',
    name: settings.site_name,
    url: settings.url,
    inLanguage: 'en-US',
    publisher: { '@id': 'https://maxhpprod.com/#organization' },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ServiceJsonLd({ capabilities }: { capabilities: Capability[] }) {
  const data = capabilities.map((c) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.title,
    description: c.description,
    provider: { '@id': 'https://maxhpprod.com/#organization' },
    areaServed: 'Worldwide',
  }));

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
