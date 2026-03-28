'use client'

/**
 * Header — fixed, dark background, scroll-aware border.
 * Logo left | Nav links center | CTA right | Hamburger on mobile
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/constants/navigation'
import { SITE } from '@/constants/site'
import MobileMenu from './MobileMenu'

export default function Header() {
  const pathname                        = usePathname()
  const [isScrolled, setIsScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]         = useState(false)

  // Show subtle border when user scrolls past 20px
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-zinc-950 transition-all duration-300
        ${isScrolled ? 'border-b border-zinc-800' : ''}
      `}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16 lg:h-20">

          {/* ── Logo ───────────────────────────────────── */}
          <Link
            href="/"
            className="font-bold text-white text-xl tracking-tight shrink-0"
          >
            {SITE.name}
          </Link>

          {/* ── Desktop nav links (center) ─────────────── */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {/* Filter out Home — the logo already links there */}
            {NAV_LINKS.filter((l) => l.href !== '/').map((link) => {
              // Mark active: exact match OR starts with the path
              // Special case: avoid /contact matching /contact-us etc.
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href + '/'))

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative text-sm font-medium transition-colors duration-200 group
                    ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}
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
                </Link>
              )
            })}
          </nav>

          {/* ── CTA button (right, desktop only) ──────── */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-white hover:bg-zinc-100 px-5 py-2.5 rounded-full font-semibold text-zinc-950 text-sm transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>

          {/* ── Hamburger (mobile only) ────────────────── */}
          <button
            onClick={() => setMenuOpen(true)}
            className="group lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="block bg-white rounded-full w-6 h-0.5 transition-all duration-200" />
            {/* Middle line is shorter — creates a small visual detail */}
            <span className="block bg-white rounded-full w-4 group-hover:w-6 h-0.5 transition-all duration-200" />
            <span className="block bg-white rounded-full w-6 h-0.5 transition-all duration-200" />
          </button>

        </div>
      </div>

      {/* ── Mobile menu ─────────────────────────────── */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentPath={pathname}
      />
    </header>
  )
}