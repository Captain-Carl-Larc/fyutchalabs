// ============================================
// SITE CONSTANTS
// Single source of truth for all business info.
// Change something here and it updates everywhere.
// ============================================

export const SITE = {
  // Business identity
  name:        'Fyutcha Labs',
  tagline:     'Your tagline here',
  description: 'Your one sentence description of what you do for SMEs',
  url:         'https://fyutchalabs.vercel.com',      // update when domain is live

  // Contact
  email:       'hello@fyutchalabs.com',
  phone:       '+254 700 000 000',             // update with real number
  location:    'Nairobi, Kenya',

  // Social media — leave empty string if you don't have it
  social: {
    twitter:   'https://twitter.com/fyutchalabs',
    linkedin:  'https://linkedin.com/company/fyutchalabs',
    instagram: '',
    github:    '',
  },

  // SEO defaults — used when a page doesn't set its own
  seo: {
    defaultTitle:       'Fyutcha Labs',
    titleTemplate:      '%s | Fyutcha Labs',   // %s = page title
    defaultDescription: 'Your one sentence description of what you do for SMEs',
    ogImage:            '/og-default.jpg',     // create this image later — 1200x630px
  },

  // Used in JSON-LD structured data
  founded:     '2024',
  legalName:   'Fyutcha Labs',
} as const