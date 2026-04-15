const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/bg-white/g, 'bg-surface');
content = content.replace(/border-white/g, 'border-surface');
content = content.replace(/bg-pistachio-dark text-white/g, 'bg-pistachio-dark text-primary-foreground');

fs.writeFileSync(filePath, content);
console.log('Replacements done');
