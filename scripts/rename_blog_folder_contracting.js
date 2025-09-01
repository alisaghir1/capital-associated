const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'public', 'blogs');
const oldName = 'New folder';
const newName = 'Top-10-Unseen-Advantages-of-Hiring-a-Building-Contracting-Company-in-Dubai';

const oldPath = path.join(root, oldName);
const newPath = path.join(root, newName);

try {
  if (!fs.existsSync(oldPath)) {
    console.error('Source folder does not exist:', oldPath);
    process.exit(1);
  }
  if (fs.existsSync(newPath)) {
    console.error('Destination already exists:', newPath);
    process.exit(1);
  }
  fs.renameSync(oldPath, newPath);
  console.log('Renamed folder successfully:', oldPath, '->', newPath);
} catch (err) {
  console.error('Failed to rename folder:', err.message);
  process.exit(1);
}
