/**
 * Fix Project Routing - Move Static Pages to Backup
 * This script renames static project folders so dynamic routing works
 */

const fs = require('fs');
const path = require('path');

const ourWorkPath = path.join(__dirname, '../app/our-work');
const backupPath = path.join(__dirname, '../app/our-work-static-backup');

// Static project folders that need to be moved
const staticFolders = [
  'meatmoot',
  'meatmoot-jbr',
  'meatmoot-khawaneej',
  'Tilal-Al-Ghaf-Interior',
  'Tilal-Al-Ghaf-Landscape',
  'elite-villa-construction',
  'Jumeirah-villa-construction',
  'Landscape-and-Exterior-Construction-Dubai'
];

async function moveStaticFolders() {
  console.log('🔧 Fixing project routing by moving static folders...\n');

  // Create backup directory if it doesn't exist
  if (!fs.existsSync(backupPath)) {
    fs.mkdirSync(backupPath, { recursive: true });
    console.log('✅ Created backup directory: our-work-static-backup/');
  }

  let movedCount = 0;

  for (const folder of staticFolders) {
    const sourcePath = path.join(ourWorkPath, folder);
    const targetPath = path.join(backupPath, folder);

    if (fs.existsSync(sourcePath)) {
      try {
        // Check if target already exists
        if (fs.existsSync(targetPath)) {
          console.log(`⚠️  Skipping ${folder} - backup already exists`);
          continue;
        }

        // Move the folder
        fs.renameSync(sourcePath, targetPath);
        console.log(`✅ Moved: ${folder}/ → our-work-static-backup/${folder}/`);
        movedCount++;
      } catch (error) {
        console.error(`❌ Error moving ${folder}:`, error.message);
      }
    } else {
      console.log(`ℹ️  ${folder}/ not found (already moved or doesn't exist)`);
    }
  }

  console.log(`\n🎉 Routing fix complete!`);
  console.log(`📊 Moved ${movedCount} static folders to backup`);
  console.log(`\n📁 Remaining in our-work/:`)
  
  // List what's left in our-work
  const remaining = fs.readdirSync(ourWorkPath);
  remaining.forEach(item => {
    const itemPath = path.join(ourWorkPath, item);
    const isDir = fs.statSync(itemPath).isDirectory();
    console.log(`   ${isDir ? '📁' : '📄'} ${item}`);
  });

  console.log(`\n✅ Now your project URLs will use the dynamic database-driven pages!`);
  console.log(`\n🔗 Test your project links:`);
  console.log(`   • http://localhost:3001/our-work/meatmoot`);
  console.log(`   • http://localhost:3001/our-work/elite-villa-construction`);
  console.log(`   • etc.`);
  
  console.log(`\n💡 The static pages are safely backed up in: our-work-static-backup/`);
}

module.exports = { moveStaticFolders };

// Run if called directly
if (require.main === module) {
  moveStaticFolders().catch(console.error);
}