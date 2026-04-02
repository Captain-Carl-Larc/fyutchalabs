import React from 'react';

/**
 * Footer — updated to bg-slate-900 to match the "Call Us" card.
 * Three columns: brand + description, nav links, contact details.
 */

// Mocked constants to ensure compilation within the preview environment
const SITE = {
  name: 'Fyutcha Labs',
  description: 'Building high-performance digital products for ambitious brands.',
  email: 'hello@fyutchalabs.com',
  phone: '+1 (555) 123-4567',
  location: '123 Innovation Drive, NY 10001',
  social: {
    twitter: '#',
    linkedin: '#',
    instagram: '#'
  }
};

const FOOTER_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'privacy-policy', href: '/privacy-policy' }
];

export default function App() {
  // Computed at build time — stays accurate on redeploy
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-slate-800 border-t">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 max-w-7xl">

        {/* ── Three column grid ───────────────────────── */}
        <div className="gap-12 grid grid-cols-1 md:grid-cols-3">

          {/* Column 1 — Brand */}
          <div>
            <a
              href="/"
              className="font-bold text-white text-xl tracking-tight"
            >
              {SITE.name}
            </a>

            <p className="mt-4 max-w-xs text-slate-400 text-sm leading-relaxed">
              {SITE.description}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              {SITE.social.twitter && (
                <a
                  href={SITE.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="text-slate-500 hover:text-white transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              {SITE.social.linkedin && (
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-500 hover:text-white transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {SITE.social.instagram && (
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-slate-500 hover:text-white transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="mb-5 font-semibold text-white text-xs uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="mb-5 font-semibold text-white text-xs uppercase tracking-widest">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="text-slate-400 text-sm">
                {SITE.location}
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ──────────────────────────────── */}
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 mt-16 pt-8 border-slate-800 border-t">
          <p className="text-slate-500 text-sm">
            © {year} {SITE.name}. All rights reserved.
          </p>
          
        </div>

      </div>
    </footer>
  );
}