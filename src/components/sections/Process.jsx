import { useT } from '../../i18n/LangContext'
import SectionHeader from './SectionHeader'

export default function Process() {
  const { t } = useT()
  return (
    <section id="process" data-screen-label="04 Process" style={{
      padding: '120px 32px', borderTop: '1px solid var(--en-line)',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          eyebrow={t.process.eyebrow}
          title1={t.process.title1}
          title2={t.process.title2}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
          <div style={{
            position: 'absolute', top: 22, left: '12.5%', right: '12.5%',
            height: 1, background: 'var(--en-line)',
          }} />
          {t.process.steps.map((s) => (
            <div key={s.n} style={{ paddingRight: 32, position: 'relative' }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                border: '1px solid var(--en-line-strong)',
                background: 'var(--en-bg-0)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--en-font-mono)', fontSize: 11, color: 'var(--en-fg-2)',
                marginBottom: 24, position: 'relative', zIndex: 1,
              }}>{s.n}</div>
              <h3 style={{
                fontFamily: 'var(--en-font-display)', fontSize: 24, fontWeight: 500,
                letterSpacing: '-0.02em', margin: '0 0 12px',
              }}>{s.t}</h3>
              <p style={{ margin: 0, color: 'var(--en-fg-2)', fontSize: 14, lineHeight: 1.6, textWrap: 'pretty' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
