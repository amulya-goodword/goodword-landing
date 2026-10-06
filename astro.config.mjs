import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages that exist for review only and must never be indexed or listed.
const INTERNAL = ['/styleguide/'];

// Tables written in a guide's Markdown get two things a plain Markdown table lacks:
// a region that can scroll sideways on a phone, and proper headers so a screen reader can read each cell with its row and column.
// The first cell of every row is treated as that row's label.
function accessibleTables() {
  const el = (n, tag) => n.type === 'element' && n.tagName === tag;
  const walk = (node, parent, index) => {
    if (el(node, 'table')) {
      for (const section of node.children) {
        if (el(section, 'thead')) for (const row of section.children) for (const cell of row.children ?? []) {
          if (!el(cell, 'th')) continue;
          // An empty corner cell is not a header for anything.
          if ((cell.children ?? []).every((c) => c.type === 'text' && !c.value.trim())) cell.tagName = 'td';
          else cell.properties = { ...cell.properties, scope: 'col' };
        }
        if (el(section, 'tbody')) for (const row of section.children) {
          const first = (row.children ?? []).find((c) => el(c, 'td'));
          if (first) { first.tagName = 'th'; first.properties = { ...first.properties, scope: 'row' }; }
        }
      }
      parent.children[index] = { type: 'element', tagName: 'div', properties: { className: ['table-wrap'], role: 'region', tabIndex: 0, ariaLabel: 'Comparison table' }, children: [node] };
      return;
    }
    (node.children ?? []).forEach((child, i) => walk(child, node, i));
  };
  return (tree) => walk(tree, null, 0);
}

export default defineConfig({
  site: 'https://goodword.tech',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  devToolbar: { enabled: false },
  markdown: { rehypePlugins: [accessibleTables] },
  // The default CSS minifier folds animation-timeline into the animation shorthand. Chrome rejects that form
  // and drops the whole animation, so scroll-driven motion silently stops in the built site. esbuild leaves it alone.
  vite: { build: { cssMinify: 'esbuild' } },
  integrations: [
    sitemap({ filter: (page) => !INTERNAL.some((p) => page.endsWith(p)) }),
  ],
});
