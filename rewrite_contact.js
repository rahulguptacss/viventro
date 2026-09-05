const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'section', 'Contact', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Colors
content = content.replace(/text-\[#9c27b0\]/g, 'text-[#D49A4D]');
content = content.replace(/bg-purple-50/g, 'bg-[#F9F3EA]');
content = content.replace(/border-purple-100/g, 'border-[#B88E52]/20');
content = content.replace(/bg-orange-300/g, 'bg-[#D49A4D]');
content = content.replace(/bg-purple-300/g, 'bg-[#080d1e]');
content = content.replace(/text-transparent bg-clip-text bg-gradient-to-r from-\[#9c27b0\] to-\[#e91e63\]/g, 'text-[#B88E52]');
content = content.replace(/bg-\[#9c27b0\]\/30/g, 'bg-[#D49A4D]/30');
content = content.replace(/bg-\[#9c27b0\]/g, 'bg-[#D49A4D]');
content = content.replace(/focus:border-\[#9c27b0\]/g, 'focus:border-[#D49A4D]');
content = content.replace(/focus:ring-\[#9c27b0\]/g, 'focus:ring-[#D49A4D]');
content = content.replace(/bg-gradient-to-r from-\[#9c27b0\] to-\[#b340c4\]/g, 'bg-[#D49A4D] hover:bg-[#bd853e]');
content = content.replace(/shadow-purple-500\/30/g, 'shadow-[#D49A4D]/30');

// Fonts
content = content.replace(/<h3 className="text-\[22px\] font-bold text-\[#1a1a1a\] mb-2">/g, '<h3 className="text-[22px] font-bold text-[#080d1e] mb-2" style={{ fontFamily: \'var(--font-geist-sans), "Outfit", "Plus Jakarta Sans", sans-serif\' }}>');
content = content.replace(/<h2 className="text-4xl md:text-\[42px\] font-bold text-\[#1a1a1a\] mb-6 leading-tight">/g, '<h2 className="text-4xl md:text-[42px] font-bold text-[#080d1e] mb-6 leading-[1.08] tracking-[-1.2px]" style={{ fontFamily: \'var(--font-geist-sans), "Outfit", "Plus Jakarta Sans", sans-serif\' }}>');

// Specific text colors to match the rest of the site
content = content.replace(/text-\[#1a1a1a\]/g, 'text-[#080d1e]');
content = content.replace(/text-gray-500/g, 'text-[#6b7280]');
content = content.replace(/text-gray-400/g, 'text-[#9ca3af]');

// Typography for labels
content = content.replace(/<span className="text-\[#D49A4D\] font-semibold text-\[14px\] tracking-widest uppercase mb-3 block">/g, '<span className="text-[#B88E52] font-bold text-[14px] tracking-wide uppercase mb-3 block inline-flex items-center rounded-full bg-[#F9F3EA] px-5 py-2.5">');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated contact component styling.');
