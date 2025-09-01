const fs = require('fs');
const path = require('path');

const siteRoot = path.resolve(__dirname, '..');
const blogsDir = path.join(siteRoot, 'public', 'blogs');
const oldName = 'New folder';
const newName = 'Key-Considerations-for-Planning-a-Successful-Commercial-Development';

const oldPath = path.join(blogsDir, oldName);
const newPath = path.join(blogsDir, newName);

try {
  if (!fs.existsSync(oldPath)) {
    console.error('Source folder does not exist:', oldPath);
    process.exit(1);
  }
  if (fs.existsSync(newPath)) {
    console.error('Target folder already exists:', newPath);
    process.exit(1);
  }
  fs.renameSync(oldPath, newPath);
  console.log('Renamed folder successfully:', oldPath, '->', newPath);
} catch (err) {
  console.error('Error renaming folder:', err);
  process.exit(1);
}
