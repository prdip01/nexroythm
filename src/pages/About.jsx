import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* ── Inline icons ── */
const KeyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
)
const ZapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)
const EyeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)
const GradCapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
)

const VALUES = [
  { icon: KeyIcon, title: 'Full Ownership', desc: 'You own every line of code we write. No vendor lock-in, no hidden fees for source files.' },
  { icon: ZapIcon, title: 'Lightning Speed', desc: '2–7 day delivery depending on project scope. We build fast without cutting corners.' },
  { icon: EyeIcon, title: 'Radical Transparency', desc: 'Our pricing is public. No surprises, no scope creep charges. What you see is what you pay.' },
  { icon: GradCapIcon, title: 'Education First', desc: "We don't just build — we teach. Every client learns to maintain their own product." },
]

const STATS = [
  { value: '100%', label: 'Custom Code' },
  { value: 'Full', label: 'Code Ownership' },
  { value: '30 Days', label: 'Support Included' },
  { value: 'Fast', label: 'Delivery Options' },
]



const SectionLabel = ({ children }) => (
  <span className="font-mono-accent" style={{ display: 'block', marginBottom: '0.75rem' }}>{children}</span>
)

export default function About() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#contact' || location.state?.scrollToContact) {
      const el = document.getElementById('contact')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
    }
  }, [location])

  return (
    <div style={{ background: '#fafafa' }}>

      {/* ── Hero ── */}
      <section style={{ padding: '8rem 0 4rem', borderBottom: '1px solid #e5e7eb' }}>
        <div className="section-container reveal" style={{ textAlign: 'center' }}>
          <SectionLabel>/ about</SectionLabel>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1rem' }}>
            About Nexroythm
          </h1>
          <p style={{ maxWidth: '520px', margin: '0 auto', fontSize: '1.0625rem' }}>
            A digital product studio on a mission to make premium web development accessible to everyone.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid #e5e7eb' }}>
        <div className="section-container reveal" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <SectionLabel>/ our mission</SectionLabel>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1.5rem' }}>
            Your Vision. Our Code.{' '}
            <span className="gradient-brand-text">One Rhythm.</span>
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#374151' }}>
            Nexroythm was founded on a simple belief: everyone deserves a premium digital presence —
            not just those with enterprise budgets. We combine refined craftsmanship with
            transparent pricing to deliver custom websites, dashboards, and digital tools
            that stand out.
          </p>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid #e5e7eb' }}>
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>/ values</SectionLabel>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>What We Stand For</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '1.5rem',
          }}
            className="md:grid-cols-2"
          >
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="reveal card"
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#374151',
                }}>
                  <Icon />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Numbers ── */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid #e5e7eb' }}>
        <div className="section-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}
            className="lg:grid-cols-4"
          >
            {STATS.map(({ value, label }, idx) => (
              <div
                key={label}
                className="reveal"
                style={{ textAlign: 'center', padding: '2rem', animationDelay: `${idx * 0.1}s` }}
              >
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  color: '#111111',
                }}>
                  {value}
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#6b7280' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── Contact form ── */}
      <section id="contact" style={{ padding: '6rem 0' }}>
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>/ contact</SectionLabel>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '0.75rem' }}>
              Let's Connect
            </h2>
            <p style={{ marginBottom: '2.5rem' }}>Get in touch with us instantly through any of the platforms below.</p>

            {/* Direct Connect Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: '440px',
              margin: '0 auto',
            }}>
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/message/R4UGDDZIK5XML1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '16px 32px',
                  borderRadius: '100px',
                  background: 'linear-gradient(135deg, #00d4ff 0%, #ff00a0 100%)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0, 212, 255, 0.25)',
                  transition: 'all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 212, 255, 0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.25)'
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ width: '20px', height: '20px', display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}><rect width="24" height="24" rx="5.5" fill="#25D366" /><path d="M12.008 5.51c-3.585 0-6.502 2.918-6.502 6.502 0 1.262.36 2.451.989 3.464L5.51 18.49l3.103-.789c.979.54 2.1.845 3.295.845 3.585 0 6.502-2.918 6.502-6.502 0-3.585-2.918-6.502-6.502-6.502zm3.113 9.123c-.195.55-.989 1.008-1.413 1.033-.42.025-.824.127-2.626-.624-2.304-.96-3.785-3.3-3.902-3.456-.112-.156-.916-1.218-.916-2.324 0-1.106.58-1.647.785-1.861.21-.214.453-.268.604-.268.151 0 .302.005.434.01.137.005.317-.054.498.38.185.444.629 1.534.688 1.651.058.117.097.253.02.409-.078.156-.117.253-.234.39-.117.137-.244.307-.346.414-.112.112-.229.234-.098.458.132.224.585.965 1.252 1.559.668.594 1.233.78 1.408.858.175.078.278.063.38-.054.102-.117.439-.512.556-.687.117-.175.234-.146.395-.088.161.058 1.018.483 1.194.863.175.38.175.706.078.935z" fill="white" /></svg>
                Connect on WhatsApp
              </a>

              {/* Gmail Button */}
              <a
                href="mailto:nexroythm@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '16px 32px',
                  borderRadius: '100px',
                  background: '#ffffff',
                  color: '#111111',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.background = '#f9fafb'
                  e.currentTarget.style.borderColor = '#d1d5db'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = '#ffffff'
                  e.currentTarget.style.borderColor = '#e5e7eb'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                Contact us in Gmail
              </a>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/nexroythm/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '16px 32px',
                  borderRadius: '100px',
                  background: '#ffffff',
                  color: '#111111',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.background = '#f9fafb'
                  e.currentTarget.style.borderColor = '#d1d5db'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = '#ffffff'
                  e.currentTarget.style.borderColor = '#e5e7eb'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                Contact us with Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
