import React, { useState } from 'react'

/* ─────────────────────────────────────────────────────
   CATALOGUE DATA
   To add/remove/edit banners:  public/banners/<category>/banner-N.svg or .jpg
   To add/remove/edit projects: update the PROJECTS array below.
───────────────────────────────────────────────────── */

const CATEGORIES = [
  { id: 'portfolio',  label: 'Portfolio' },
  { id: 'websites',   label: 'Websites' },
  { id: 'dashboards', label: 'Dashboards' },
  { id: 'lifestyle',  label: 'Digital Gifts' },
]

/* ── Banners: 4 per category ──
   Place your images/SVGs in:
     public/banners/portfolio/banner-1.jpg (or .svg / .png / .webp)
     public/banners/websites/banner-1.svg
     etc.
   Just swap the file and the new image shows instantly.
*/
const BANNERS = {
  portfolio: [
    { src: '/banners/portfolio/banner-1.jpg', alt: 'Portfolio showcase — laptops and code' },
    { src: '/banners/portfolio/banner-2.svg', alt: 'Creative developer identity banner' },
    { src: '/banners/portfolio/banner-3.svg', alt: 'Build. Ship. Inspire. portfolio banner' },
    { src: '/banners/portfolio/banner-4.svg', alt: 'Creative portfolios banner' },
  ],
  websites: [
    { src: '/banners/websites/banner-1.svg', alt: 'Custom websites — your site, your rules' },
    { src: '/banners/websites/banner-2.svg', alt: '100% custom code websites banner' },
    { src: '/banners/websites/banner-3.svg', alt: 'From idea to launch in 2-7 days' },
    { src: '/banners/websites/banner-4.svg', alt: 'Mobile-first lightning fast websites' },
  ],
  dashboards: [
    { src: '/banners/dashboards/banner-1.svg', alt: 'Data analytics dashboard banner' },
    { src: '/banners/dashboards/banner-2.svg', alt: 'Track everything, miss nothing banner' },
    { src: '/banners/dashboards/banner-3.svg', alt: 'Smart dashboards for your goals' },
    { src: '/banners/dashboards/banner-4.svg', alt: 'Built for productivity dashboards' },
  ],
  lifestyle: [
    { src: '/banners/lifestyle/banner-1.svg', alt: 'Customize her website — digital gift' },
    { src: '/banners/lifestyle/banner-2.svg', alt: 'Digital wedding invitations banner' },
    { src: '/banners/lifestyle/banner-3.svg', alt: 'Gift a website they will never forget' },
    { src: '/banners/lifestyle/banner-4.svg', alt: "Happy Father's Day digital gift banner" },
  ],
}

/* ── Projects: add your live links here ── */
const PROJECTS = {
  portfolio: [
    { title: 'Portfolio Demo 1',   url: 'https://prradeepp.netlify.app/' },
    { title: 'Portfolio Demo 2',  url: 'https://pradeepkumr.netlify.app/' },
    { title: 'Portfolio Demo 3', url: 'https://pradeepkumardas.netlify.app/' },
  ],
  websites: [
    { title: 'Professional Business Website', url: 'https://prdipland.netlify.app/' },
    { title: 'Trip Planner App',              url: 'https://tripkaplaneer.netlify.app/' },
  ],
  dashboards: [
    { title: 'Smart Analytics Dashboard',   url: 'https://snazzy-salamander-c303f4.netlify.app/' },
    { title: 'Habit Tracker',               url: 'https://habittrracker.netlify.app/' },
    { title: 'Pro Calendar',                url: 'https://pracalendar.netlify.app/' },
    { title: 'Smart Study Planner',         url: 'https://smartstudyplane.netlify.app/' },
  ],
  lifestyle: [
    { title: "Happy Father's Day — Gift Site", url: 'https://happyfatherrsday.netlify.app/' },
    { title: 'Wedding Invitation Card',        url: 'https://weddingsp.netlify.app/' },
  ],
}

/* ─── ExternalLink icon ─── */
const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

/* ─── Banner carousel with dot nav ─── */
function BannerCarousel({ banners }) {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + banners.length) % banners.length)
  const next = () => setActive((a) => (a + 1) % banners.length)

  return (
    <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: '#111111', aspectRatio: '16/6' }}>
      {/* Slides */}
      {banners.map((banner, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            inset: 0,
            transition: 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            opacity: idx === active ? 1 : 0,
            pointerEvents: idx === active ? 'auto' : 'none',
          }}
        >
          <img
            src={banner.src}
            alt={banner.alt}
            loading={idx === 0 ? 'eager' : 'lazy'}
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => {
              // Fallback gradient if image fails to load
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      ))}

      {/* Prev / Next */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous banner"
            style={{
              position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '100%', width: '40px', height: '40px', cursor: 'pointer',
              color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s ease', backdropFilter: 'blur(8px)',
              zIndex: 2,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button
            onClick={next}
            aria-label="Next banner"
            style={{
              position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '100%', width: '40px', height: '40px', cursor: 'pointer',
              color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s ease', backdropFilter: 'blur(8px)',
              zIndex: 2,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      <div style={{
        position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '6px', zIndex: 2,
      }}>
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            aria-label={`Banner ${idx + 1}`}
            style={{
              width: idx === active ? '20px' : '6px',
              height: '6px',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              background: idx === active
                ? 'linear-gradient(135deg, #00d4ff, #ff00a0)'
                : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Replace hint (visible on hover) */}
      <div style={{
        position: 'absolute', top: '0.75rem', right: '0.75rem',
        background: 'rgba(0,0,0,0.6)', borderRadius: '8px', padding: '4px 10px',
        fontSize: '0.625rem', fontFamily: 'JetBrains Mono, monospace',
        color: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)',
        letterSpacing: '0.04em', zIndex: 2,
      }}>
        {active + 1} / {banners.length}
      </div>
    </div>
  )
}

/* ─── Single project link row ─── */
function ProjectLink({ title, url, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.125rem 1.5rem',
        borderRadius: '12px',
        border: '1px solid',
        borderColor: hovered ? 'transparent' : '#e5e7eb',
        background: hovered
          ? 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(255,0,160,0.06) 100%)'
          : '#ffffff',
        textDecoration: 'none',
        transition: 'all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        cursor: 'pointer',
        outline: hovered ? '1px solid rgba(0,212,255,0.3)' : 'none',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Index number */}
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.6875rem',
          color: '#9ca3af',
          minWidth: '24px',
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        {/* Title */}
        <span style={{
          fontSize: '0.9375rem',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: hovered ? '#111111' : '#374151',
          transition: 'color 0.2s ease',
        }}>
          {title}
        </span>
      </div>

      {/* Right side */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: hovered ? '#00a8cc' : '#9ca3af',
        transition: 'color 0.2s ease',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>View Live</span>
        <ExternalIcon />
      </div>
    </a>
  )
}

/* ─── Main Catalogue ─── */
export default function Catalogue() {
  const [activeId, setActiveId] = useState('portfolio')

  const activeCat   = CATEGORIES.find((c) => c.id === activeId)
  const banners     = BANNERS[activeId] || []
  const projects    = PROJECTS[activeId] || []

  return (
    <div style={{ background: '#fafafa', minHeight: '100vh' }}>

      {/* ── Page Header ── */}
      <section style={{ padding: '8rem 0 4rem', borderBottom: '1px solid #e5e7eb' }}>
        <div className="section-container reveal" style={{ textAlign: 'center' }}>
          <span className="font-mono-accent" style={{ display: 'block', marginBottom: '0.75rem' }}>
            / our work
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1rem' }}>
            See What We've Built
          </h1>
          <p style={{ maxWidth: '520px', margin: '0 auto', fontSize: '1.0625rem' }}>
            Real projects, live and running. Click any title to explore.
          </p>
        </div>
      </section>

      {/* ── Category Tabs ── */}
      <div style={{ padding: '2rem 0', borderBottom: '1px solid #e5e7eb', background: '#fafafa', position: 'sticky', top: '72px', zIndex: 30 }}>
        <div className="section-container">
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeId
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  style={{
                    padding: '9px 22px',
                    borderRadius: '100px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    transition: 'all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    border: isActive ? 'none' : '1px solid #e5e7eb',
                    background: isActive
                      ? 'linear-gradient(135deg, #00d4ff 0%, #ff00a0 100%)'
                      : '#ffffff',
                    color: isActive ? '#ffffff' : '#374151',
                    boxShadow: isActive ? '0 4px 16px rgba(0,212,255,0.25)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ padding: '3rem 0 8rem' }}>
        <div className="section-container">

          {/* ── Section heading ── */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#111111',
              marginBottom: '0.375rem',
            }}>
              {activeCat?.label}
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#6b7280' }}>
              {activeId === 'portfolio'  && 'Personal portfolio websites showcasing my identity and skills.'}
              {activeId === 'websites'   && 'Custom-built websites for businesses and personal brands.'}
              {activeId === 'dashboards' && 'Interactive productivity and analytics dashboards.'}
              {activeId === 'lifestyle'  && 'E-digital gifts — personalized websites for your loved ones.'}
            </p>
          </div>

          {/* ── Banner carousel ── */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
            }}>
              <span className="font-mono-accent">/ banners</span>
            </div>
            <BannerCarousel banners={banners} categoryId={activeId} />
          </div>

          {/* ── Divider ── */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
            <span className="font-mono-accent">/ live projects</span>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
          </div>

          {/* ── Project links ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', maxWidth: '800px', margin: '0 auto' }}>
            {projects.length === 0 ? (
              <p style={{ color: '#9ca3af', textAlign: 'center', padding: '2rem' }}>
                No projects in this category yet.
              </p>
            ) : (
              projects.map((project, idx) => (
                <ProjectLink
                  key={project.url}
                  title={project.title}
                  url={project.url}
                  index={idx}
                />
              ))
            )}
          </div>

          {/* ── Lifestyle extra info ── */}
          {activeId === 'lifestyle' && (
            <div style={{
              marginTop: '3rem',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(255,0,160,0.2)',
              background: 'linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(255,0,160,0.04) 100%)',
              maxWidth: '800px',
              margin: '3rem auto 0',
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111111', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                💝 What we can create for you
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Customize a surprise website for your girlfriend',
                  'Design a digital wedding invitation card',
                  'Create a personalized anniversary website',
                  "Build a Father's Day / Mother's Day tribute page",
                  'Gift a birthday surprise website',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '100%', background: 'linear-gradient(135deg, #00d4ff, #ff00a0)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/message/R4UGDDZIK5XML1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1.5rem',
                  padding: '10px 24px',
                  borderRadius: '100px',
                  background: 'linear-gradient(135deg, #00d4ff 0%, #ff00a0 100%)',
                  color: '#ffffff',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Order a Digital Gift
                <ArrowIcon />
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
