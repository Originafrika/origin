#!/usr/bin/env node

// Simple SEO checker script
// This script checks for basic SEO elements in your HTML

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const htmlContent = fs.readFileSync(indexPath, 'utf8');

const checks = [
  { name: 'Title tag', regex: /<title>.*<\/title>/i },
  { name: 'Meta description', regex: /<meta[^>]*name=["']description["'][^>]*content=["'][^"']*["']/i },
  { name: 'Meta keywords', regex: /<meta[^>]*name=["']keywords["'][^>]*content=["'][^"']*["']/i },
  { name: 'Open Graph title', regex: /<meta[^>]*property=["']og:title["'][^>]*content=["'][^"']*["']/i },
  { name: 'Open Graph description', regex: /<meta[^>]*property=["']og:description["'][^>]*content=["'][^"']*["']/i },
  { name: 'Open Graph image', regex: /<meta[^>]*property=["']og:image["'][^>]*content=["'][^"']*["']/i },
  { name: 'Twitter card', regex: /<meta[^>]*name=["']twitter:card["'][^>]*content=["'][^"']*["']/i },
  { name: 'Canonical URL', regex: /<link[^>]*rel=["']canonical["'][^>]*href=["'][^"']*["']/i },
  { name: 'Favicon', regex: /<link[^>]*rel=["']icon["'][^>]*href=["'][^"']*["']/i }
];

console.log('SEO Check Results for index.html:');
console.log('================================');

let passed = 0;
let total = checks.length;

checks.forEach(check => {
  const found = htmlContent.match(check.regex);
  if (found) {
    console.log(`✓ ${check.name}`);
    passed++;
  } else {
    console.log(`✗ ${check.name} (missing)`);
  }
});

console.log('\nSummary:');
console.log(`${passed}/${total} SEO elements found`);

if (passed === total) {
  console.log('🎉 All SEO elements are present!');
} else {
  console.log('⚠️  Some SEO elements are missing. Please review the results above.');
}