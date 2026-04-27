const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.git') {
        walkDir(dirPath, callback);
      }
    } else {
      callback(path.join(dir, f));
    }
  });
}

function processFile(filePath) {
  // Only process text files like liquid, json, css, js, md
  if (!filePath.match(/\.(liquid|json|css|js|md)$/)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace in specific order to prevent partial replacement bugs
  content = content.replace(/MOON RIDGE COMPANY/g, 'MOON RIDGE COMPANY');
  content = content.replace(/Moon Ridge Company/g, 'Moon Ridge Company');
  content = content.replace(/Moon Ridge Co\./g, 'Moon Ridge Co.');
  content = content.replace(/Moon Ridge/g, 'Moon Ridge');
  content = content.replace(/MOON RIDGE/g, 'MOON RIDGE');
  content = content.replace(/Moon Ridge/g, 'Moon Ridge');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

walkDir('.', processFile);
console.log('Replacement complete.');
