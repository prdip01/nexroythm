import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home',      path: '/' },
  { label: 'Catalogue', path: '/catalogue' },
  { label: 'Pricing',   path: '/pricing' },
  { label: 'About',     path: '/about' },
]

const WHATSAPP_LINK = 'https://wa.me/message/R4UGDDZIK5XML1'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const location = useLocation()
  const drawerRef = useRef(null)

  const isActive = (path) => location.pathname === path

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trap focus + close on Escape for accessibility
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="section-container h-full flex items-center justify-between">

        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="Nexroythm home"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Nexroythm"
            style={{ height: '32px', width: 'auto', borderRadius: '6px', objectFit: 'cover' }}
            loading="eager"
            decoding="async"
          />
          <span style={{
            fontSize: '1rem',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            color: '#111111',
          }}>
            Nexroythm
          </span>
        </Link>

        {/* ── Desktop nav links (centered) ── */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`link-ghost px-4 py-1.5 ${isActive(link.path) ? 'nav-link-active' : ''}`}
              style={{ fontSize: '0.875rem' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:block">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center' }}
          >
            Get in Touch
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className={`hamburger md:hidden ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
          style={{ zIndex: 101, border: 'none', background: 'transparent', outline: 'none', padding: '4px' }}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* ── Mobile Drawer (Absolute position overlay to prevent clipping issues) ── */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        style={{
          position: 'absolute',
          top: '72px',
          left: 0,
          right: 0,
          width: '100%',
          maxHeight: mobileOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          background: 'rgba(250,250,250,0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: mobileOpen ? '1px solid rgba(229,231,235,0.8)' : 'none',
          boxShadow: mobileOpen ? '0 10px 25px -5px rgba(0,0,0,0.05)' : 'none',
          zIndex: 99,
        }}
        aria-hidden={!mobileOpen}
      >
        <div className="section-container py-6 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`link-ghost py-3 ${isActive(link.path) ? 'nav-link-active' : ''}`}
              style={{ fontSize: '0.9375rem', width: 'fit-content' }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ paddingTop: '1rem', borderTop: '1px solid #e5e7eb', marginTop: '0.5rem' }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
              style={{ width: '100%', padding: '12px 24px', fontSize: '0.875rem', display: 'flex', justifyContent: 'center' }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
