// ============================================
// SERVICES
// Hardcoded — edit here when services change.
// Uses lucide-react icon names for the icon field.
// Full list of icons: https://lucide.dev/icons
// ============================================

export type Service = {
  slug:              string   // used in URL: /services/[slug]
  title:             string
  short_description: string   // shown on the services overview card
  full_description:  string   // shown on the individual service page
  icon_name:         string   // lucide icon name
  seo_title?:        string   // overrides title in <title> tag if set
  seo_description?:  string   // meta description for service page
}

export const SERVICES: Service[] = [
  {
    slug:              'seo-audit',
    title:             'SEO Audit',
    icon_name:         'search',
    short_description: 'A full technical and content audit that shows exactly why your site is not ranking and what to fix first.',
    full_description:  `Full description for the SEO audit service page. 
                        Explain the process, what they get, how long it takes, 
                        and what results they can expect.`,
    seo_title:         'SEO Audit Services | Fyutcha Labs',
    seo_description:   'Get a full technical and content SEO audit for your business website. Find out exactly what is holding your rankings back.',
  },
  {
    slug:              'digital-marketing',
    title:             'Digital Marketing',
    icon_name:         'bar-chart-2',
    short_description: 'Strategy and execution across the channels that actually reach your customers.',
    full_description:  `Full description for the digital marketing service page.`,
    seo_title:         'Digital Marketing Services | Fyutcha Labs',
    seo_description:   'Digital marketing strategy and execution for SMEs in Kenya.',
  },
  {
    slug:              'content-marketing',
    title:             'Content Marketing',
    icon_name:         'pen-line',
    short_description: 'Content that ranks, converts, and builds authority in your industry.',
    full_description:  `Full description for the content marketing service page.`,
    seo_title:         'Content Marketing Services | Fyutcha Labs',
    seo_description:   'Content marketing that drives organic traffic and builds authority for your business.',
  },
  // Add more services here following the same pattern
]

// Helper — get a single service by slug
// Used in /services/[slug] page
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug)
}

// Helper — get all slugs for generateStaticParams
export function getServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug)
}