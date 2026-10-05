import type { APIRoute } from 'astro';
import { SITE } from '../config';

// Generated at build so the sitemap address always matches the site address.
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\nDisallow: /styleguide/\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
