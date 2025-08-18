import type { MetadataRoute } from 'next';

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: Array<MetadataRoute.Sitemap[number]> = [
    // Core
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/all-blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/cv-review`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/login`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/register`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },

    // Pricing
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/pricing/starter`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/pricing/professional`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/pricing/premium-plus`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Policies
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Specialized hub
    { url: `${baseUrl}/specialized-professionals-resume-review`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const specialized = [
    'accountants',
    'auditors',
    'bank-officers',
    'civil-engineers',
    'finance-managers',
    'front-desk-officers',
    'hotel-managers',
    'nurses',
    'pharmacists',
  ].map((slug): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}/specialized-professionals-resume-review/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...entries, ...specialized];
}
