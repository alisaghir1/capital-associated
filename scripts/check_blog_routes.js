const fs = require('fs');
const path = require('path');

const compPath = path.resolve(__dirname, '..', 'app', 'components', 'Blogs.jsx');
const blogDir = path.resolve(__dirname, '..', 'app', 'blog');

const text = fs.readFileSync(compPath, 'utf8');
const pathRegex = /path:\s*"([^"]+)"/g;
let m;
const missing = [];
while ((m = pathRegex.exec(text)) !== null) {
  const p = m[1];
  if (!p.startsWith('/blog/')) continue;
  const slug = p.replace('/blog/', '');
  const folderPath = path.join(blogDir, slug);
  if (!fs.existsSync(folderPath)) {
    missing.push({ path: p, folder: folderPath });
  }
}

if (missing.length === 0) {
  console.log('All blog paths have matching folders.');
  process.exit(0);
}

console.log('Missing folders for the following paths:');
missing.forEach((x) => console.log('-', x.path, '->', x.folder));
process.exit(1);
