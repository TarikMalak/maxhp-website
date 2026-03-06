import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Max HP Productions | Premium Production & Post — NYC',
  description:
    'Max HP Productions delivers premium broadcast-level production and post-production with lean teams, senior talent, and AI-assisted workflows for fashion, beauty, luxury, and lifestyle brands.',
  metadataBase: new URL('https://maxhpprod.com'),
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Max HP Productions | Premium Production & Post — NYC',
    description:
      'Premium production and post-production with lean teams, senior talent, and AI-assisted workflows for fashion, beauty, luxury, and lifestyle brands.',
    url: 'https://maxhpprod.com',
    siteName: 'Max HP Productions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@swellny',
    creator: '@swellny',
    title: 'Max HP Productions | Premium Production & Post — NYC',
    description: 'Premium production and post-production with lean teams, senior talent, and AI-assisted workflows.',
  },
  robots: { index: true, follow: true },
  other: { 'theme-color': '#C9A962' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="llms-txt" href="https://maxhpprod.com/llms.txt" />
        <link rel="llms-txt-full" href="https://maxhpprod.com/llms-full.txt" />
        <link rel="dns-prefetch" href="https://swellny.com" />
        <link rel="dns-prefetch" href="https://s77.ai" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
