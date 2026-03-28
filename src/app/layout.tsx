import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { SITE } from '@/constants/site'

/**
 * Root layout — wraps every page on the site.
 * Only put things here that truly every page needs:
 * fonts, global metadata, body tag.
 *
 * Header and Footer live in (site)/layout.tsx instead
 * so other route groups (e.g. future /admin) can have
 * a completely different layout.
 */

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

// Default metadata — each page overrides what it needs
export const metadata: Metadata = {
  title: {
    default:  SITE.seo.defaultTitle,
    template: SITE.seo.titleTemplate,  // e.g. "About | Fyutcha Labs"
  },
  description:  SITE.seo.defaultDescription,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type:        'website',
    locale:      'en_KE',
    url:         SITE.url,
    siteName:    SITE.name,
    title:       SITE.seo.defaultTitle,
    description: SITE.seo.defaultDescription,
    images: [
      {
        url:    SITE.seo.ogImage,
        width:  1200,
        height: 630,
        alt:    SITE.name,
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       SITE.seo.defaultTitle,
    description: SITE.seo.defaultDescription,
    images:      [SITE.seo.ogImage],
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} h-full antialiased`}
    >
      <body className="flex flex-col bg-zinc-950 min-h-full text-white">
        {children}
      </body>
    </html>
  )
}