const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'app', 'blog');
const filesToCheck = [
  path.resolve(__dirname, '..', 'app', 'components', 'Blogs.jsx'),
  path.resolve(__dirname, '..', 'app', 'blog', 'BlogLayout.jsx'),
];

const slugs = new Set();
const pathRegex = /path:\s*"([^"]+)"/g;

for (const f of filesToCheck) {
  if (!fs.existsSync(f)) continue;
  const txt = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = pathRegex.exec(txt)) !== null) {
    const p = m[1];
    if (!p.startsWith('/blog/')) continue;
    const slug = p.replace('/blog/', '');
    slugs.add(slug);
  }
}

const folders = fs.readdirSync(root, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

const actions = [];
for (const slug of slugs) {
  const exact = folders.find(f => f === slug);
  if (exact) continue; // already exact
  const ci = folders.find(f => f.toLowerCase() === slug.toLowerCase());
  if (ci) {
    actions.push({ from: path.join(root, ci), to: path.join(root, slug), currentName: ci, desiredName: slug });
  }
}

if (actions.length === 0) {
  console.log('No folder name changes required.');
  process.exit(0);
}

console.log('Planned renames:');
actions.forEach(a => console.log('-', a.currentName, '->', a.desiredName));

for (const a of actions) {
  try {
    fs.renameSync(a.from, a.to);
    console.log('Renamed:', a.currentName, '->', a.desiredName);
  } catch (err) {
    console.error('Failed to rename', a.currentName, '->', a.desiredName, err.message);
  }
}
