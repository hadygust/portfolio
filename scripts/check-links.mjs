// Fails the build if any internal href/src in dist/ points at a file that doesn't exist.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const pages = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) pages.push(p);
  }
};
walk(dist);

const resolves = (url) => {
  const path = decodeURIComponent(url.split(/[?#]/)[0]);
  if (path === '' ) return true; // same-page anchor
  const target = join(dist, path);
  return existsSync(target) && statSync(target).isFile() ? true : existsSync(join(target, 'index.html'));
};

const broken = [];
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    if (!url.startsWith('//') && !resolves(url)) broken.push(`${page}: ${url}`);
  }
}

if (!existsSync(join(dist, 'resume.pdf'))) broken.push('dist/resume.pdf is missing');

if (broken.length) {
  console.error(`Broken internal links (${broken.length}):\n${broken.join('\n')}`);
  process.exit(1);
}
console.log(`check-links: ${pages.length} pages, no broken internal links.`);
