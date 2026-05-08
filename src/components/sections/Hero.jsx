import { useT } from '../../i18n/LangContext'
import NodeNetwork from '../primitives/NodeNetwork'
import Reticle from '../primitives/Reticle'

export default function Hero() {
  const { t } = useT()
  return (
    <section data-screen-label="01 Hero" style={{
      position: 'relative', overflow: 'hidden',
      padding: '96px 32px 64px',
      borderBottom: '1px solid var(--en-line)',
    }}>
      <div className="en-grid-bg" style={{
        position: 'absolute', inset: 0, opacity: 0.18,
        maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
      }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.45 }}>
        <NodeNetwork density={18} height={780} />
      </div>
      <div style={{
        position: 'absolute', top: '-25%', left: '60%', transform: 'translateX(-50%)',
        width: 1100, height: 700,
        background: 'radial-gradient(ellipse at center, rgba(124,197,255,0.16) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div className="en-noise" />

      <div style={{
        position: 'relative', maxWidth: 1320, margin: '0 auto',
      }}>
        <div>
          <div className="en-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <Reticle size={12} color="var(--en-accent)" />
            {t.hero.eyebrow}
          </div>
          <h1 style={{
            fontFamily: 'var(--en-font-display)',
            fontSize: 'clamp(56px, 9vw, 156px)',
            lineHeight: 0.9,
            letterSpacing: '-0.045em',
            fontWeight: 500,
            margin: '28px 0 0',
            maxWidth: 1200, textWrap: 'balance',
          }}>
            {t.hero.title1}<br />
            {t.hero.title2}<br />
            <span style={{
              color: 'var(--en-fg-3)', fontStyle: 'italic', fontWeight: 300,
              borderBottom: '1px solid var(--en-line-strong)', paddingBottom: 4,
            }}>{t.hero.title3}</span>
          </h1>

          <div style={{ display: 'flex', marginTop: 56, gap: 64, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <p style={{
              fontSize: 17, lineHeight: 1.55, color: 'var(--en-fg-1)',
              maxWidth: 480, margin: 0, textWrap: 'pretty',
            }}>{t.hero.body}</p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <a href="#work" style={{
                padding: '14px 22px', background: 'var(--en-accent)', color: '#001022',
                borderRadius: 999, fontWeight: 600, fontSize: 14,
                boxShadow: '0 0 32px var(--en-accent-glow)',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>{t.hero.primary} <span>→</span></a>
              <a href="#services" style={{
                padding: '14px 22px', border: '1px solid var(--en-line-strong)',
                borderRadius: 999, fontSize: 14, color: 'var(--en-fg-1)',
              }}>{t.hero.secondary}</a>
            </div>
          </div>

          <div style={{
            marginTop: 96, paddingTop: 24,
            borderTop: '1px solid var(--en-line)',
            display: 'grid', gridTemplateColumns: `repeat(${t.hero.stats.length}, 1fr)`,
          }}>
            {t.hero.stats.map((s, i) => (
              <div key={i} style={{
                paddingRight: 24, paddingLeft: i === 0 ? 0 : 24,
                borderLeft: i === 0 ? 'none' : '1px solid var(--en-line)',
              }}>
                <div style={{
                  fontFamily: 'var(--en-font-display)',
                  fontSize: 60, fontWeight: 500,
                  letterSpacing: '-0.04em', lineHeight: 1,
                  color: i === 0 ? 'var(--en-accent)' : 'var(--en-fg-0)',
                }}>{s.k}<span style={{ color: 'var(--en-fg-3)' }}>{s.suf}</span></div>
                <div className="en-mono" style={{
                  fontSize: 11, color: 'var(--en-fg-2)', marginTop: 10,
                  textTransform: 'uppercase', letterSpacing: '0.14em',
                }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
