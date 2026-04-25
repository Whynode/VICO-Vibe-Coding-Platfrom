const fs = require('fs');
const path = require('path');

function replaceRadii(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceRadii(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace rounded-2xl, rounded-3xl, rounded-xl with rounded-lg
      content = content.replace(/rounded-(2xl|3xl|xl)/g, 'rounded-lg');
      
      // Replace pill buttons/badges (rounded-full)
      // px-4 py-1.5 rounded-full -> rounded-md
      content = content.replace(/rounded-full/g, (match, offset, str) => {
        const line = str.substring(Math.max(0, offset - 50), Math.min(str.length, offset + 50));
        // Keep rounded-full for purely decorative dots (w-1.5 h-1.5) or avatars (w-10 h-10) or ambient orbs (w-80 h-80)
        if (line.match(/w-\d+(\.\d+)?\s+h-\d+(\.\d+)?/)) {
          return 'rounded-full'; // keep
        }
        // CTAs, buttons, badges
        if (line.includes('px-') || line.includes('py-') || line.includes('cta') || line.includes('badge')) {
          return line.includes('text-[10px]') || line.includes('text-[11px]') ? 'rounded-md' : 'rounded-lg';
        }
        return 'rounded-lg';
      });

      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceRadii('./src');
console.log('Replaced all playful radii in .tsx files');
