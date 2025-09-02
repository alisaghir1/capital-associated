const fs = require('fs');
const path = require('path');

const publicBlogs = path.join(__dirname, '..', 'public', 'blogs');
const sourceFolder = path.join(publicBlogs, 'New folder');
const targetFolder = path.join(publicBlogs, 'noise-pollution-mitigation-in-high-density-residential-fit-out-projects');

try {
  if (!fs.existsSync(sourceFolder)) {
    console.error('Source folder does not exist:', sourceFolder);
    process.exit(1);
  }

  if (fs.existsSync(targetFolder)) {
    console.error('Target folder already exists:', targetFolder);
    process.exit(1);
  }

  fs.renameSync(sourceFolder, targetFolder);
  console.log('Renamed folder successfully:', sourceFolder, '->', targetFolder);
} catch (err) {
  console.error('Error renaming folder:', err.message);
  process.exit(1);
}
