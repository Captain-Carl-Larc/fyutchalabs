import { MetadataRoute } from 'next';

/**
 * Configures the robots.txt file to guide search engine crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  // Replace with your actual production domain
  const baseUrl = 'https://fyutchalabs.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/thank-you', // No need to index the conversion success page
        '/api/',      // Prevent crawling of internal API routes
        '/_next/',    // Standard Next.js internal files
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}