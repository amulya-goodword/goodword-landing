import type { APIRoute } from 'astro';
import fs from 'node:fs';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { getCollection } from 'astro:content';

// One share image per page, in brand colours, made when the site is built.
// A new guide gets its own image from its title, with nothing to do by hand.
const black = fs.readFileSync('node_modules/@fontsource/inter/files/inter-latin-900-normal.woff');
const semi = fs.readFileSync('node_modules/@fontsource/inter/files/inter-latin-600-normal.woff');

const PAGES: Record<string, [string, string]> = {
  default: ['Your resume says it.', 'They back it up.'],
  home: ['Your good work', 'deserves a GoodWord.'],
  'how-it-works': ['Three people who know your work.', 'One report.'],
  'sample-report': ['What a GoodWord report', 'looks like.'],
  'resume-pro-max': ['Your resume and your references,', 'in one file.'],
  'for-referees': ['Someone asked you', 'to vouch for them.'],
  'for-recruiters': ['A candidate sent you', 'a GoodWord report.'],
  about: ['Bringing humans back', 'to job applications.'],
  questions: ['GoodWord:', 'the short answers.'],
  guides: ['Straight answers', 'for your job search.'],
};

export async function getStaticPaths() {
  const guides = await getCollection('guides');
  return [
    ...Object.entries(PAGES).map(([name, [line, gold]]) => ({ params: { name }, props: { line, gold, kicker: 'Verified references for your job applications' } })),
    ...guides.map((g) => ({ params: { name: `guide-${g.id}` }, props: { line: g.data.title, gold: '', kicker: 'A GoodWord guide' } })),
  ];
}

const el = (type: string, style: Record<string, unknown>, children: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const { line, gold, kicker } = props as { line: string; gold: string; kicker: string };
  const size = (line + gold).length > 70 ? 60 : (line + gold).length > 46 ? 72 : 86;
  const tree = el('div', { width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0f1b2d', color: '#ffffff', padding: '72px 80px', fontFamily: 'Inter' }, [
    el('div', { display: 'flex', fontSize: 44, fontWeight: 900, letterSpacing: '-0.035em' }, [el('span', {}, 'Good'), el('span', { color: '#d4a442' }, 'Word')]),
    el('div', { display: 'flex', flexDirection: 'column' }, [
      el('div', { width: 96, height: 6, background: '#d4a442', borderRadius: 3, marginBottom: 28 }, ''),
      el('div', { display: 'flex', flexWrap: 'wrap', fontSize: size, fontWeight: 900, lineHeight: 1.04, letterSpacing: '-0.04em', maxWidth: 1000 }, [
        el('span', { marginRight: 18 }, line),
        el('span', { color: '#d4a442' }, gold),
      ]),
    ]),
    el('div', { display: 'flex', justifyContent: 'space-between', fontSize: 26, fontWeight: 600, color: '#c1c4c9' }, [el('span', {}, kicker), el('span', {}, 'goodword.tech')]),
  ]);
  const svg = await satori(tree as any, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Inter', data: black, weight: 900, style: 'normal' },
      { name: 'Inter', data: semi, weight: 600, style: 'normal' },
    ],
  });
  const png = new Resvg(svg).render().asPng();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
