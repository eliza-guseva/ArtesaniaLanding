const SitemapGenerator = require('sitemap-generator');
const fs = require('fs');

// Define the base URL of your app
const baseURL = 'https://www.artesan-ia.com/';

// Array to store URLs
const urls = [
  '/',
  '/demo',
  '/demoinfo',
  '/dashboard'
];

// Create an instance of the sitemap generator
const generator = SitemapGenerator(baseURL, {
  stripQuerystring: false // Set to true if you want to ignore query parameters in URLs
});

// Register event handlers
generator.on('done', (sitemap) => {
  // Save the sitemap to a file
  fs.writeFileSync('public/sitemap.xml', sitemap.xml, 'utf8');
  console.log('Sitemap generated successfully!');
});

// Start the sitemap generation
generator.start();

// Add URLs to the sitemap
urls.forEach((url) => {
  generator.queueURL(url);
});
