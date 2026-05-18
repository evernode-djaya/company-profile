import { useState } from 'react'
import { useT } from '../../i18n/LangContext'
import CornerFrame from '../primitives/CornerFrame'
import Carousel from '../primitives/Carousel'
import SectionHeader from './SectionHeader'

export default function Team() {
  const { t } = useT()
  return (
    <section id="team" data-screen-label="06 Team" style={{
      padding: '120px 32px', borderTop: '1px solid var(--en-line)',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          eyebrow={t.team.eyebrow}
          title1={t.team.title1}
          title2={t.team.title2}
          right={
            <p style={{ maxWidth: 320, color: 'var(--en-fg-2)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              {t.team.blurb}
              <br />
              <span className="en-mono" style={{ fontSize: 11, color: 'var(--en-fg-3)' }}>{t.team.coming}</span>
            </p>
          }
        />

        <Carousel desktopGrid="repeat(4, 1fr)" gap={16} slideWidth="82%">
          {t.team.members.map((m, i) => <TeamCard key={i} m={m} />)}
        </Carousel>
      </div>
    </section>
  )
}

function TeamCard({ m }) {
  const [hov, setHov] = useState(false)
  return (
    <CornerFrame hovered={hov} style={{
      background: hov ? 'var(--en-bg-2)' : 'var(--en-bg-1)',
      border: '1px solid var(--en-line)',
      padding: 24,
      transition: 'background 0.3s',
    }}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <span className="en-mono" style={{ fontSize: 10, color: 'var(--en-fg-3)' }}>NODE / {m.n}</span>
          <span className="en-mono" style={{ fontSize: 10, color: hov ? 'var(--en-accent)' : 'var(--en-fg-3)' }}>● ACTIVE</span>
        </div>
        <div style={{
          aspectRatio: '5/4', width: '100%', borderRadius: 8,
          background: m.photo ? 'var(--en-bg-2)' : `
            repeating-linear-gradient(
              45deg,
              var(--en-bg-2) 0,
              var(--en-bg-2) 6px,
              var(--en-bg-1) 6px,
              var(--en-bg-1) 12px
            )
          `,
          border: '1px solid var(--en-line)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', marginBottom: 20, overflow: 'hidden',
        }}>
          {m.photo
            ? <img
                src={m.photo} alt={m.role}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            : (
              <>
                <span style={{
                  fontFamily: 'var(--en-font-display)',
                  fontSize: 56, fontWeight: 400,
                  color: hov ? 'var(--en-accent)' : 'var(--en-fg-2)',
                  letterSpacing: '-0.02em', transition: 'color 0.3s',
                }}>{m.initials}</span>
                <span className="en-mono" style={{
                  position: 'absolute', bottom: 8, left: 8,
                  fontSize: 9, color: 'var(--en-fg-3)',
                }}></span>
                <span className="en-mono" style={{
                  position: 'absolute', top: 8, right: 8,
                  fontSize: 9, color: 'var(--en-fg-3)',
                }}>NAME ─────</span>
              </>
            )}
        </div>
        <div style={{
          fontFamily: 'var(--en-font-display)', fontSize: 22, fontWeight: 500,
          letterSpacing: '-0.02em', color: 'var(--en-fg-0)', marginBottom: 4,
        }}>{(m.name && m.name.trim()) || '[ NAME ]'}</div>
        <div style={{ fontSize: 13, color: 'var(--en-fg-1)', marginBottom: 14 }}>{m.role}</div>
        <p style={{ margin: 0, fontSize: 13, color: 'var(--en-fg-2)', lineHeight: 1.6 }}>{m.scope}</p>
      </div>
    </CornerFrame>
  )
}
