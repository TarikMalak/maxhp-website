import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: 'https://maxhpprod.com',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://maxhpprod.com/#capabilities',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://maxhpprod.com/#contact',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://maxhpprod.com/llms.txt',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: 'https://maxhpprod.com/llms-full.txt',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
