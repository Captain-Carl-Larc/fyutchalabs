'use client'

import React, { useState, useEffect } from 'react'

/**
 * Header — fixed, dark slate background (bg-slate-900), scroll-aware border.
 * Updates: Matches the "Call Us" card for a premium "sandwich" framing effect.
 */

// Mocked constants to ensure stability in the preview environment
const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
const SITE = { name: 'Fyutcha Labs' };

// Mock MobileMenu since it's an external dependency
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="lg:hidden z-[60 fixed inset-0 flex flex-col gap-8 bg-slate-900 p-8">
      <button onClick={onClose} className="self-end text-white text-2xl">&times;</button>
      {NAV_LINKS.map(link => (
        <a key={link.href} href={link.href} className="font-bold text-white text-2xl">
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default function App() {
  // Use window.location for preview environment compatibility
  const [pathname, setPathname] = useState('/');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
      const onScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    }
    return () => { 
      if (typeof document !== 'undefined') document.body.style.overflow = ''; 
    };
  }, [menuOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-slate-900 transition-all duration-300
        ${isScrolled ? 'border-b border-slate-800' : ''}
      `}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16 lg:h-20">

          {/* ── Logo ───────────────────────────────────── */}
          <a
            href="/"
            className="font-bold text-white text-xl tracking-tight shrink-0"
          >
            {SITE.name}
          </a>

          {/* ── Desktop nav links (center) ─────────────── */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`
                    relative text-sm font-medium transition-colors duration-200 group
                    ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}
                  `}
                >
                  {link.label}

                  {/* Animated underline indicator */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-px bg-white
                      transition-all duration-200
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  />
                </a>
              )
            })}
          </nav>

          {/* ── CTA button (right, desktop only) ──────── */}
          <div className="hidden lg:block">
            <a
              href="/contact"
              className="bg-white hover:bg-slate-100 px-5 py-2.5 rounded-full font-semibold text-slate-950 text-sm transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>

          {/* ── Hamburger (mobile only) ────────────────── */}
          <button
            onClick={() => setMenuOpen(true)}
            className="group lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open navigation menu"
          >
            <span className="block bg-white rounded-full w-6 h-0.5 transition-all duration-200" />
            <span className="block bg-white rounded-full w-4 group-hover:w-6 h-0.5 transition-all duration-200" />
            <span className="block bg-white rounded-full w-6 h-0.5 transition-all duration-200" />
          </button>

        </div>
      </div>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}