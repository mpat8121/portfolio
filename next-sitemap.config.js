/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
    siteUrl: 'https://mickpatterson.com.au',
    generateRobotsTxt: true, // (optional)
    // ...other options
    exclude: ['/admin'],
    generateIndexSitemap: false
  }
  
module.exports = sitemapConfig