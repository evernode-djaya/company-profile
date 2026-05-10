import { useT } from '../../i18n/LangContext'
import NodeNetwork from '../primitives/NodeNetwork'
import Reticle from '../primitives/Reticle'
import Carousel from '../primitives/Carousel'

export default function Manifesto() {
  const { t } = useT()
  return (
    <section data-screen-label="05 Manifesto" style={{
      padding: '120px 32px', borderTop: '1px solid var(--en-line)',
      background: 'linear-gradient(180deg, var(--en-bg-0) 0%, #0A0E14 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
        <NodeNetwork density={10} height={700} accent="var(--en-accent-2)" />
      </div>
      <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative' }}>
        <div className="en-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <Reticle size={11} /> {t.manifesto.eyebrow}
        </div>
        <p style={{
          fontFamily: 'var(--en-font-display)',
          fontSize: 'clamp(34px, 4.6vw, 60px)',
          fontWeight: 400, lineHeight: 1.1,
          letterSpacing: '-0.03em',
          margin: '32px 0 0',
          maxWidth: 1100, textWrap: 'balance',
        }}>
          {t.manifesto.body1}
          <span style={{ color: 'var(--en-accent-2)', fontStyle: 'italic' }}>{t.manifesto.em1}</span>
          {t.manifesto.body2}
          <span style={{ color: 'var(--en-accent)', fontStyle: 'italic' }}>{t.manifesto.em2}</span>
          {t.manifesto.body3}
        </p>
        <div style={{ marginTop: 64 }}>
          <Carousel desktopGrid="repeat(3, 1fr)" gap={32} slideWidth="82%">
            {t.manifesto.pillars.map((p, i) => (
              <div key={i} style={{ paddingTop: 24, borderTop: '1px solid var(--en-line)' }}>
                <div className="en-mono" style={{ fontSize: 10, color: 'var(--en-fg-3)', marginBottom: 12 }}>0{i + 1}</div>
                <h4 style={{
                  fontFamily: 'var(--en-font-display)', fontSize: 22, fontWeight: 500,
                  letterSpacing: '-0.01em', margin: '0 0 8px',
                }}>{p.t}</h4>
                <p style={{ margin: 0, color: 'var(--en-fg-2)', fontSize: 14, lineHeight: 1.6 }}>{p.d}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
