import { useState } from 'react'
import { useT } from '../../i18n/LangContext'
import CornerFrame from '../primitives/CornerFrame'
import Carousel from '../primitives/Carousel'
import SectionHeader from './SectionHeader'

export default function Services() {
  const { t } = useT()
  return (
    <section id="services" data-screen-label="02 Services" style={{
      padding: '120px 32px',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title1={t.services.title1}
          title2={t.services.title2}
          right={
            <div className="en-mono" style={{ fontSize: 11, color: 'var(--en-fg-2)' }}>
              {t.services.version}
            </div>
          }
        />

        <Carousel desktopGrid="1fr 1fr" gap={16} slideWidth="86%">
          {t.services.items.map((s, i) => (
            <ServiceCard key={i} s={s} index={i} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

function ServiceCard({ s }) {
  const [hov, setHov] = useState(false)
  return (
    <CornerFrame
      hovered={hov}
      style={{
        background: 'var(--en-bg-1)',
        border: '1px solid var(--en-line)',
        padding: '32px 32px 28px',
        transition: 'border-color 0.3s, background 0.3s',
        borderColor: hov ? 'var(--en-line-strong)' : 'var(--en-line)',
      }}
    >
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <span className="en-mono" style={{ fontSize: 11, color: 'var(--en-fg-3)' }}>SERVICE / {s.n}</span>
          <span style={{
            display: 'inline-flex', padding: '4px 10px',
            border: `1px solid ${hov ? 'var(--en-accent)' : 'var(--en-line-strong)'}`,
            color: hov ? 'var(--en-accent)' : 'var(--en-fg-2)',
            borderRadius: 999, fontFamily: 'var(--en-font-mono)', fontSize: 10,
            letterSpacing: '0.12em', transition: 'all 0.3s',
          }}>{s.c}</span>
        </div>

        {s.icon
          ? <div style={{
              width: 56, height: 56, borderRadius: 8,
              border: '1px solid var(--en-line)', overflow: 'hidden',
              background: 'var(--en-bg-2)', marginBottom: 20,
            }}>
              <img src={s.icon} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          : null}

        <h3 style={{
          fontFamily: 'var(--en-font-display)',
          fontSize: 36, fontWeight: 500,
          letterSpacing: '-0.025em', lineHeight: 1.05,
          margin: '0 0 20px', textWrap: 'balance',
        }}>{s.t}</h3>

        <p style={{ margin: 0, color: 'var(--en-fg-1)', fontSize: 15, lineHeight: 1.6, maxWidth: 520 }}>{s.d}</p>

        <ul style={{
          listStyle: 'none', padding: 0, margin: '28px 0 0',
          display: 'flex', flexDirection: 'column', gap: 0,
          borderTop: '1px solid var(--en-line)',
        }}>
          {s.details.map((d, i) => (
            <li key={i} style={{
              padding: '14px 0', borderBottom: '1px solid var(--en-line)',
              display: 'flex', alignItems: 'center', gap: 12,
              fontSize: 14, color: 'var(--en-fg-1)',
            }}>
              <span className="en-mono" style={{ fontSize: 10, color: 'var(--en-fg-3)' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ color: 'var(--en-accent)' }}>—</span>
              {d}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 24 }}>
          {s.tags.map(tag => (
            <span key={tag} className="en-mono" style={{
              padding: '4px 10px', borderRadius: 4,
              background: 'var(--en-bg-2)', border: '1px solid var(--en-line)',
              fontSize: 10, color: 'var(--en-fg-2)', letterSpacing: '0.06em',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </CornerFrame>
  )
}
