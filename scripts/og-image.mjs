// Draws the share images in brand colours. Run by hand with Playwright installed:
//   node scripts/og-image.mjs
// Each entry becomes public/og/<name>.png at 1200 x 630.
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const font = pathToFileURL(path.join(root, 'public/fonts/inter-gw.woff2')).href;
const cards = [
  { name: 'default', line: 'Your resume says it.', gold: 'They back it up.' },
  { name: 'home', line: 'Let the people you have worked with', gold: 'vouch for you.' },
];
const html = (c) => `<!doctype html><html><head><style>
@font-face{font-family:Inter;src:url('${font}') format('woff2');font-weight:400 900}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;background:#0f1b2d;color:#fff;font-family:Inter,sans-serif;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between}
.wm{font-weight:900;font-size:44px;letter-spacing:-.035em}.wm b{color:#d4a442}
h1{font-weight:900;font-size:86px;line-height:1.02;letter-spacing:-.04em;max-width:960px}h1 span{color:#d4a442}
.foot{display:flex;justify-content:space-between;align-items:center;font-size:26px;font-weight:600;color:#b8c2d1}
.rule{width:96px;height:6px;background:#d4a442;border-radius:3px;margin-bottom:28px}
</style></head><body><div class="wm">Good<b>Word</b></div><div><div class="rule"></div><h1>${c.line} <span>${c.gold}</span></h1></div><div class="foot"><span>Verified references for your job applications</span><span>goodword.tech</span></div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const c of cards) {
  await page.setContent(html(c));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(root, 'public/og', `${c.name}.png`) });
  console.log('wrote', c.name);
}
await browser.close();
