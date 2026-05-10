import { useState } from 'react'
import { useT } from '../../i18n/LangContext'
import DashboardMock from '../primitives/DashboardMock'
import Carousel from '../primitives/Carousel'
import SectionHeader from './SectionHeader'
import { Link } from '../../router/HashRouter'

export default function Work() {
  const { t } = useT()
  return (
    <section id="work" data-screen-label="03 Work" style={{
      padding: '120px 32px', borderTop: '1px solid var(--en-line)',
      background: 'var(--en-bg-1)', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative' }}>
        <SectionHeader
          eyebrow={t.work.eyebrow}
          title1={t.work.title1}
          title2={t.work.title2}
          right={
            <div className="en-mono" style={{
              fontSize: 11, color: 'var(--en-fg-3)', maxWidth: 240,
              textAlign: 'right', lineHeight: 1.6,
            }}>{t.work.note}</div>
          }
        />

        <Carousel desktopGrid="repeat(3, 1fr)" gap={16} slideWidth="84%">
          {t.work.projects.map(p => <ProjectCard key={p.id} p={p} />)}
        </Carousel>
      </div>
    </section>
  )
}

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false)
  return (
    <Link
      to={`/work/${encodeURIComponent(p.id)}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: '1px solid var(--en-line)', borderRadius: 14, overflow: 'hidden',
        background: 'var(--en-bg-2)', display: 'flex', flexDirection: 'column',
        transition: 'transform 0.4s, border-color 0.4s',
        borderColor: hov ? 'var(--en-accent)' : 'var(--en-line)',
        transform: hov ? 'translateY(-2px)' : 'translateY(0)',
        cursor: 'pointer',
        textDecoration: 'none', color: 'inherit',
      }}>
      <div style={{
        aspectRatio: '16/11', padding: p.thumbnail ? 0 : 16,
        background: 'var(--en-bg-0)', borderBottom: '1px solid var(--en-line)',
        overflow: 'hidden', display: 'block',
      }}>
        {p.thumbnail
          ? <img
              src={p.thumbnail} alt={p.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          : <DashboardMock variant={p.variant} />
        }
      </div>
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="en-mono" style={{ fontSize: 10, color: 'var(--en-fg-3)' }}>CASE / {p.id}</span>
          <span className="en-mono" style={{ fontSize: 10, color: 'var(--en-fg-3)' }}>{p.year}</span>
        </div>
        <h3 style={{
          fontFamily: 'var(--en-font-display)', fontSize: 24, fontWeight: 500,
          letterSpacing: '-0.02em', margin: 0,
        }}>{p.title}</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="en-mono" style={{
            padding: '2px 8px', borderRadius: 999,
            background: 'rgba(124,197,255,0.1)', color: 'var(--en-accent)',
            fontSize: 10, letterSpacing: '0.05em',
          }}>{p.tag}</span>
          <span className="en-mono" style={{ fontSize: 10, color: 'var(--en-fg-2)' }}>· {p.client}</span>
        </div>
        <p style={{ margin: 0, fontSize: 13, color: 'var(--en-fg-2)', lineHeight: 1.5 }}>{p.desc}</p>
      </div>
    </Link>
  )
}
