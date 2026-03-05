import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Max HP Productions | Production & Post by SWELL — NYC',
  description:
    'Max HP Productions is the dedicated production and post-production arm of SWELL, delivering premium broadcast-level results with lean teams, senior talent, and AI-assisted workflows for fashion, beauty, luxury, and lifestyle brands.',
  metadataBase: new URL('https://maxhpprod.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Max HP Productions | Production & Post by SWELL',
    description:
      'Premium production and post-production with lean teams, senior talent, and AI-assisted workflows. A division of SWELL Labs, LLC.',
    url: 'https://maxhpprod.com',
    siteName: 'Max HP Productions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Max HP Productions — Production + Post',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@swellny',
    creator: '@swellny',
    title: 'Max HP Productions | Production & Post by SWELL',
    description:
      'Premium production and post-production for fashion, beauty, luxury, and lifestyle brands.',
  },
  robots: { index: true, follow: true },
  other: {
    'theme-color': '#C9A962',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="llms-txt" href="/llms.txt" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
