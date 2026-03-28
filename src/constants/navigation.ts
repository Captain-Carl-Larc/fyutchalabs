// ============================================
// NAVIGATION
// All nav links defined once here.
// Header and Footer both import from this file.
// ============================================

export type NavLink = {
  label: string
  href:  string
}

// Main navigation — shown in Header
export const NAV_LINKS: NavLink[] = [
  { label: 'Home',     href: '/'         },
  { label: 'About',    href: '/about'    },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog',     href: '/blog'     },
  { label: 'Contact',  href: '/contact'  },
]

// Footer links — can differ from main nav
export const FOOTER_LINKS: NavLink[] = [
  { label: 'Home',           href: '/'               },
  { label: 'About',          href: '/about'           },
  { label: 'Services',       href: '/services'        },
  { label: 'Blog',           href: '/blog'            },
  { label: 'Contact',        href: '/contact'         },
  { label: 'Privacy Policy', href: '/privacy-policy'  },
]