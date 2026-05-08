import { useState } from 'react'
import { useT } from '../../i18n/LangContext'
import CornerFrame from '../primitives/CornerFrame'
import SectionHeader from './SectionHeader'

export default function Clients() {
  const { t } = useT()
  return (
    <section id="clients" data-screen-label="07 Clients" style={{
      padding: '120px 32px', borderTop: '1px solid var(--en-line)',
      background: 'var(--en-bg-1)',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          eyebrow={t.clients.eyebrow}
          title1={t.clients.title1}
          title2={t.clients.title2}
          right={
            <div className="en-mono" style={{ fontSize: 11, color: 'var(--en-fg-3)', letterSpacing: '0.14em' }}>
              {t.clients.label}
            </div>
          }
        />

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32,
        }}>
          {t.clients.featured.map((c, i) => <FeaturedClient key={i} c={c} index={i} />)}
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
          paddingTop: 24, borderTop: '1px solid var(--en-line)',
        }}>
          <span className="en-mono" style={{
            fontSize: 11, color: 'var(--en-fg-3)', letterSpacing: '0.12em', whiteSpace: 'nowrap',
          }}>{t.clients.othersLabel.toUpperCase()} —</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {t.clients.others.map(o => (
              <span key={o} style={{
                padding: '8px 14px', borderRadius: 999,
                border: '1px solid var(--en-line-strong)',
                fontFamily: 'var(--en-font-display)', fontSize: 14, fontWeight: 500,
                color: 'var(--en-fg-1)', letterSpacing: '-0.01em',
              }}>{o}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedClient({ c, index }) {
  const [hov, setHov] = useState(false)
  return (
    <CornerFrame hovered={hov} style={{
      background: 'var(--en-bg-0)',
      border: '1px solid var(--en-line)',
      padding: '48px 40px',
      minHeight: 280,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
           style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="en-mono" style={{ fontSize: 10, color: 'var(--en-fg-3)' }}>CLIENT / {String(index + 1).padStart(2, '0')}</span>
          <span className="en-mono" style={{
            fontSize: 10, padding: '3px 8px', borderRadius: 999,
            border: '1px solid var(--en-line-strong)', color: 'var(--en-fg-2)',
          }}>{c.tag}</span>
        </div>
        <div>
          {c.logo
            ? <div style={{
                margin: '32px 0 16px', height: 96, display: 'flex', alignItems: 'center',
              }}>
                <img src={c.logo} alt={c.name}
                     style={{ maxHeight: 96, maxWidth: '100%', objectFit: 'contain',
                              filter: hov ? 'none' : 'grayscale(0.2)', transition: 'filter 0.3s' }} />
              </div>
            : <div style={{
                fontFamily: 'var(--en-font-display)',
                fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 500,
                letterSpacing: '-0.04em', lineHeight: 0.95,
                color: hov ? 'var(--en-accent)' : 'var(--en-fg-0)',
                transition: 'color 0.3s',
                margin: '32px 0 16px',
              }}>{c.name}</div>
          }
          <p style={{ margin: 0, fontSize: 14, color: 'var(--en-fg-2)', maxWidth: 380, lineHeight: 1.5 }}>{c.sub}</p>
        </div>
      </div>
    </CornerFrame>
  )
}
