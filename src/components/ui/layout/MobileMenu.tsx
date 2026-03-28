'use client'

/**
 * MobileMenu — slides in from the right.
 * Backdrop click closes it. Route change closes it.
 * Accessible: role="dialog", aria-modal, focus-trap-ready.
 */

import Link from 'next/link'
import { useEffect } from 'react'
import { NAV_LINKS } from '@/constants/navigation'

type Props = {
  isOpen:      boolean
  onClose:     () => void
  currentPath: string
}

export default function MobileMenu({ isOpen, onClose, currentPath }: Props) {

  // Close when the user navigates to a new route
  useEffect(() => {
    onClose()
  }, [currentPath]) // eslint-disable-line react-hooks/exhaustive-deps

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <>
      {/* ── Backdrop ────────────────────────────────── */}
      <div
        className={`
          fixed inset-0 bg-black/70 z-40 lg:hidden
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Slide-in panel ──────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed top-0 right-0 h-full w-72
          bg-zinc-950 border-l border-zinc-800
          z-50 lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >

        {/* Panel header row */}
        <div className="flex justify-between items-center px-6 border-zinc-800 border-b h-16">
          <span className="font-semibold text-white text-sm uppercase tracking-wide">
            Menu
          </span>
          <button
            onClick={onClose}
            className="-mr-2 p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close navigation menu"
          >
            {/* X icon — inline SVG, no extra dependency */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 4L16 16M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-6" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              currentPath === link.href ||
              (link.href !== '/' && currentPath.startsWith(link.href + '/'))

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`
                  py-4 text-base font-medium
                  border-b border-zinc-800/60
                  transition-colors duration-200
                  flex items-center justify-between group
                  ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}
                `}
              >
                {link.label}

                {/* Subtle arrow on hover */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="opacity-0 group-hover:opacity-100 transition-transform -translate-x-1 group-hover:translate-x-0 duration-200"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )
          })}
        </nav>

        {/* CTA button at bottom of menu */}
        <div className="px-6 pt-8">
          <Link
            href="/contact"
            onClick={onClose}
            className="block bg-white hover:bg-zinc-100 py-3.5 rounded-full w-full font-semibold text-zinc-950 text-sm text-center transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>

      </div>
    </>
  )
}