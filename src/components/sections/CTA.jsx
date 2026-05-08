import { useT } from '../../i18n/LangContext'
import Reticle from '../primitives/Reticle'

export default function CTA() {
  const { t } = useT()
  return (
    <section id="contact" data-screen-label="08 Contact" style={{
      padding: '140px 32px', borderTop: '1px solid var(--en-line)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1100, height: 1100,
        background: 'radial-gradient(circle, rgba(124,197,255,0.12) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        <div className="en-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <Reticle size={11} /> {t.cta.eyebrow}
        </div>
        <h2 style={{
          fontFamily: 'var(--en-font-display)',
          fontSize: 'clamp(48px, 7vw, 108px)', fontWeight: 500,
          letterSpacing: '-0.04em', lineHeight: 0.95, margin: '32px 0 48px',
          textWrap: 'balance',
        }}>
          {t.cta.title1}<br />
          <span style={{ fontStyle: 'italic', color: 'var(--en-accent)' }}>{t.cta.title2}</span>
        </h2>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:hello@evernode.id" style={{
            padding: '18px 28px', borderRadius: 999,
            background: 'var(--en-fg-0)', color: '#000',
            fontWeight: 500, fontSize: 16, letterSpacing: '-0.01em',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>{t.cta.primary} <span>↗</span></a>
          <a href="#" style={{
            padding: '18px 28px', borderRadius: 999,
            border: '1px solid var(--en-line-strong)', color: 'var(--en-fg-1)',
            fontSize: 16, letterSpacing: '-0.01em',
          }}>{t.cta.secondary}</a>
        </div>
      </div>
    </section>
  )
}
