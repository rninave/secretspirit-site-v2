import type { MetadataRoute } from 'next'
import blogs from '@/data/blogs.json'
import projects from '@/data/projects.json'


export const dynamic = 'force-static';

function parseDateToISO(d?: any): string | undefined {
  if (!d) return undefined;
  // Accept numbers (timestamp) or parsable strings
  const date = typeof d === 'number' ? new Date(d) : new Date(String(d));
  if (isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

  const staticPages = [
    '',
    'about',
    'blog',
    'contact',
    'services',
    'work',
    'hire-us',
  ].map((p) => ({ url: `${baseUrl}/${p}`.replace(/\/+$/, '') }));

  const blogPages = (blogs || []).map((b: any) => {
    const url = `${baseUrl}/blog/${b.slug}`;
    const lastModified = parseDateToISO(b.date);
    return lastModified ? { url, lastModified } : { url };
  });

  const projectPages = (projects || []).map((p: any) => {
    const url = `${baseUrl}/work/${p.slug}`;
    const lastModified = parseDateToISO(p.details?.year || p.date || p.updated);
    return lastModified ? { url, lastModified } : { url };
  });

  return [...staticPages, ...blogPages, ...projectPages];
}