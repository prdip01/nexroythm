import React, { useState } from 'react'

/* ── Inline icons ── */
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const CrossIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)
const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <rect width="24" height="24" rx="5.5" fill="#25D366" />
    <path d="M12.008 5.51c-3.585 0-6.502 2.918-6.502 6.502 0 1.262.36 2.451.989 3.464L5.51 18.49l3.103-.789c.979.54 2.1.845 3.295.845 3.585 0 6.502-2.918 6.502-6.502 0-3.585-2.918-6.502-6.502-6.502zm3.113 9.123c-.195.55-.989 1.008-1.413 1.033-.42.025-.824.127-2.626-.624-2.304-.96-3.785-3.3-3.902-3.456-.112-.156-.916-1.218-.916-2.324 0-1.106.58-1.647.785-1.861.21-.214.453-.268.604-.268.151 0 .302.005.434.01.137.005.317-.054.498.38.185.444.629 1.534.688 1.651.058.117.097.253.02.409-.078.156-.117.253-.234.39-.117.137-.244.307-.346.414-.112.112-.229.234-.098.458.132.224.585.965 1.252 1.559.668.594 1.233.78 1.408.858.175.078.278.063.38-.054.102-.117.439-.512.556-.687.117-.175.234-.146.395-.088.161.058 1.018.483 1.194.863.175.38.175.706.078.935z" fill="white" />
  </svg>
)

const PLANS = [
  {
    title: 'Personal Portfolio',
    originalPrice: '₹1,598',
    price: '₹799',
    discount: '50% OFF',
    features: ['Simple 1-page layout', 'Mobile responsive design', 'Basic sections included', '2 revision rounds included', '2-day delivery', 'Full source code ownership'],
    popular: false,
  },
  {
    title: 'Personal Dashboard',
    originalPrice: '₹1,000',
    price: '₹500',
    discount: '50% OFF',
    features: ['Interactive charts & data visuals', 'Light & dark mode support', 'Local storage / API sync', '3 revision rounds included', '3-5 days delivery', 'Full source code ownership'],
    popular: false,
  },
  {
    title: 'Digital Gift Site',
    originalPrice: '₹2,000',
    price: '₹1,000',
    discount: '50% OFF',
    features: ['Personalized greeting experience', 'Interactive elements & music', 'Photo & memory carousel', '3 revision rounds included', 'Netlify hosting setup', '30 days support included'],
    popular: true,
  },
  {
    title: 'Premium Website',
    originalPrice: '₹7,000',
    price: '₹3,500',
    discount: '50% OFF',
    features: ['Multi-page custom design', 'Premium GSAP micro-animations', 'Contact form & basic SEO', '3 revision rounds included', '30 days support included', 'Full source code ownership'],
    popular: false,
  },
]

const COMPARISONS = [
  { feature: 'Price',         freelancer: 'Market rates',          agency: 'Premium rates',         nexroythm: 'Starts at ₹499' },
  { feature: 'Customization', freelancer: 'Often template-based',   agency: 'Varies by budget',      nexroythm: 'Fully custom code' },
  { feature: 'Delivery',      freelancer: '1–2 weeks',             agency: '3–6 weeks',             nexroythm: '2–7 days' },
  { feature: 'Ownership',     freelancer: 'Varies by contract',    agency: 'Licensing fees apply',  nexroythm: 'Full source code' },
  { feature: 'Revisions',     freelancer: 'Limited iterations',    agency: 'Additional cost extra', nexroythm: '2-3 rounds included' },
  { feature: 'Support',       freelancer: 'Depends on provider',   agency: 'Support SLA contracts', nexroythm: '30 days included' },
  { feature: 'Extras',        freelancer: 'Often extra charge',    agency: 'Charged separately',    nexroythm: 'Basic SEO included' },
]

const FAQS = [
  { q: 'Is ₹499 really enough?',             a: "Yes. It covers a clean, single-page, fully responsive personal portfolio or landing page with basic sections, 2 revision rounds, and 2-day delivery." },
  { q: 'Do I get the source code?',          a: 'Absolutely. You own every single line of code we write for your project.' },
  { q: "What if I don't know what I want?",  a: 'We offer a free consultation call to help plan and define your design requirements.' },
  { q: 'Are the courses beginner-friendly?', a: 'Yes. We assume zero prior knowledge and teach using practical, hands-on projects.' },
]

const SectionLabel = ({ children }) => (
  <span className="font-mono-accent" style={{ display: 'block', marginBottom: '0.75rem' }}>{children}</span>
)

const WHATSAPP_LINK = 'https://wa.me/message/R4UGDDZIK5XML1'

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div style={{ background: '#fafafa' }}>

      {/* Header */}
      <section style={{ padding: '8rem 0 4rem', borderBottom: '1px solid #e5e7eb' }}>
        <div className="section-container reveal" style={{ textAlign: 'center' }}>
          <SectionLabel>/ pricing</SectionLabel>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1rem' }}>
            Simple, Transparent Pricing
          </h1>
          <p style={{ maxWidth: '400px', margin: '0 auto' }}>
            No hidden fees. No surprises. 50% discount active today.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section style={{ padding: '6rem 0' }}>
        <div className="section-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
            className="sm:grid-cols-2 lg:grid-cols-2"
          >
            {PLANS.map((plan, idx) => (
              <div
                key={plan.title}
                className="reveal card"
                style={{
                  padding: '2.5rem 2rem',
                  animationDelay: `${(idx % 2) * 0.1}s`,
                  position: 'relative',
                  outline: plan.popular ? '2px solid #ff00a0' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {plan.popular && (
                    <span style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #00d4ff 0%, #ff00a0 100%)',
                      color: '#ffffff',
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      padding: '4px 12px',
                      borderRadius: '100px',
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.03em',
                    }}>
                      Most Popular
                    </span>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, letterSpacing: '-0.02em', color: '#111111' }}>
                      {plan.title}
                    </h3>
                    <span style={{
                      background: 'rgba(255, 0, 160, 0.1)',
                      color: '#ff00a0',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}>
                      {plan.discount}
                    </span>
                  </div>

                  {/* Price display */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <span style={{
                      fontSize: '2.25rem',
                      fontWeight: 700,
                      color: '#111111',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}>
                      {plan.price}
                    </span>
                    <span style={{
                      textDecoration: 'line-through',
                      color: '#9ca3af',
                      fontSize: '1rem',
                    }}>
                      {plan.originalPrice}
                    </span>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                    {plan.features.map((feat) => (
                      <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                        <CheckIcon />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5"
                  style={{
                    width: '100%',
                    padding: '14px 24px',
                    borderRadius: '100px',
                    fontSize: '0.875rem',
                    fontFamily: 'Inter, sans-serif',
                    textDecoration: 'none',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: 'none',
                    background: plan.popular
                      ? 'linear-gradient(135deg, #00d4ff 0%, #ff00a0 100%)'
                      : '#111111',
                    color: '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)'
                    e.currentTarget.style.boxShadow = plan.popular 
                      ? '0 0 30px rgba(0,212,255,0.25)' 
                      : '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">Get Started</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid #e5e7eb' }}>
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>/ comparison</SectionLabel>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '0.75rem' }}>
              Why Pay More for Less?
            </h2>
            <p>See how we compare to freelancers and agencies.</p>
          </div>

          {/* Desktop table */}
          <div className="reveal hidden lg:block" style={{ border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f9fafb' }}>
                  {['Feature', 'Freelancers', 'Agencies', 'Nexroythm'].map((h, i) => (
                    <th key={h} style={{
                      padding: '1rem',
                      textAlign: 'left',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      color: i === 3 ? '#ff00a0' : i === 0 ? '#111111' : '#9ca3af',
                      borderBottom: '1px solid #e5e7eb',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISONS.map((row, idx) => (
                  <tr key={row.feature} style={{ background: idx % 2 === 1 ? '#f9fafb' : '#ffffff' }}>
                    <td style={{ padding: '0.875rem 1rem', fontSize: '0.875rem', fontWeight: 500, color: '#111111' }}>
                      {row.feature}
                    </td>
                    {[row.freelancer, row.agency].map((val, ci) => (
                      <td key={ci} style={{ padding: '0.875rem 1rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#9ca3af' }}>
                          <CrossIcon />{val}
                        </span>
                      </td>
                    ))}
                    <td style={{ padding: '0.875rem 1rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#059669' }}>
                        <CheckIcon />{row.nexroythm}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {COMPARISONS.map((row) => (
              <div key={row.feature} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem', background: '#ffffff' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111111', marginBottom: '0.75rem' }}>{row.feature}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#9ca3af' }}>
                    <CrossIcon /><strong>Freelancers:</strong> {row.freelancer}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#9ca3af' }}>
                    <CrossIcon /><strong>Agencies:</strong> {row.agency}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#059669' }}>
                    <CheckIcon /><strong>Nexroythm:</strong> {row.nexroythm}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="reveal" style={{
            marginTop: '2.5rem',
            padding: '2.5rem',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            background: '#ffffff',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '1.0625rem', fontWeight: 600, letterSpacing: '-0.02em', color: '#111111', maxWidth: '600px', margin: '0 auto' }}>
              We don't just deliver a product. We deliver power, speed, and knowledge — at a fraction of the market cost.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid #e5e7eb' }}>
        <div className="section-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionLabel>/ faq</SectionLabel>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>Frequently Asked</h2>
          </div>

          <div className="reveal" style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FAQS.map((faq, idx) => (
              <div key={idx} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', background: '#ffffff' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.25rem 1.5rem',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                    color: '#111111',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    letterSpacing: '-0.01em',
                  }}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span style={{
                    color: '#9ca3af',
                    transition: 'transform 0.25s ease',
                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                    marginLeft: '1rem',
                  }}>
                    <ChevronDown />
                  </span>
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.9375rem', color: '#6b7280', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
