const fs = require('fs');
const path = require('path');

const publicBlogs = path.join(__dirname, '..', 'public', 'blogs');
const from = path.join(publicBlogs, 'New folder');
const to = path.join(publicBlogs, 'villa-design-ideas-for-your-dream-home-in-the-city-or-countryside');

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
  console.error('Error renaming folder:', err.message);
  process.exit(1);
}
