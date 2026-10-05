// One place for the facts every page shares. Change a value here and it changes everywhere.

export const SITE = {
  name: 'GoodWord',
  url: 'https://goodword.tech',
  lang: 'en-IN',
  tagline: 'Let the people you have worked with vouch for you.',
  signature: 'Apply to jobs with a GoodWord.',
  company: 'GoodWord Technologies Private Limited',
  address: 'Tower 4, NESCO, Goregaon East, Mumbai',
  email: 'hello@goodword.tech',
  grievanceEmail: 'grievance@goodword.tech',
  grievanceOfficer: 'Amulya Nidhi',
};

// Paste the codes Google Search Console and Bing Webmaster Tools give you. Empty means no tag is added.
export const VERIFY = { google: '', bing: '' };

// Google Analytics. The site and the app will move onto one property; only this value changes.
export const GA_ID = 'G-2BYBGC5751';

export const APP = {
  base: 'https://app.goodword.tech',
  paths: {
    register: '/register',
    sample: '/sample',
    login: '/login',
    privacy: '/legal/privacy',
    terms: '/legal/terms',
  },
} as const;

export type AppTarget = keyof typeof APP.paths;

// Every link to the app carries where it was clicked, so signups can be traced to a page and a button.
// A visitor who arrived with their own campaign parameters keeps those instead (handled in the browser).
export function appHref(to: AppTarget, page: string, section: string): string {
  const url = new URL(APP.paths[to], APP.base);
  url.searchParams.set('utm_source', 'goodword_site');
  url.searchParams.set('utm_medium', page);
  url.searchParams.set('utm_campaign', section);
  return url.toString();
}
