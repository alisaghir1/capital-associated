const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const from = path.join(repoRoot, 'public', 'blogs', 'New folder');
const to = path.join(repoRoot, 'public', 'blogs', 'an-overview-of-acoustics-in-building-design');

try {
  if (!fs.existsSync(from)) {
    console.error('Source folder does not exist:', from);
    process.exit(1);
  }

  if (fs.existsSync(to)) {
    console.log('Destination already exists:', to);
    process.exit(0);
  }

  fs.renameSync(from, to);
  console.log('Renamed folder successfully:', from, '->', to);
} catch (err) {
  console.error('Failed to rename folder:', err.message);
  process.exit(1);
}

