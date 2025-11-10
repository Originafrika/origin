const fs = require('fs');
const path = require('path');

// Define your site URL
const siteUrl = 'https://origin.africa';

// Define your routes
const routes = [
  '/',
  '/about',
  '/projects',
  '/projects/cortexia',
  '/projects/code',
  '/blog',
  '/blog/pourquoi-afrique-doit-creer-ia',
  '/blog/defis-accessibilite-ia-startups-africaines',
  '/blog/origin-democratiser-sota-ia-afrique',
  '/contact'
  // Add more routes as you create them
];

// Define static pages that don't change often
const staticPages = routes.map(route => ({
  url: `${siteUrl}${route}`,
  changefreq: route === '/' ? 'daily' : 'weekly',
  priority: route === '/' ? '1.0' : '0.8',
  lastmod: new Date().toISOString().split('T')[0]
}));

// Generate sitemap XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${page.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to public directory
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml);

console.log('Sitemap generated successfully at:', sitemapPath);