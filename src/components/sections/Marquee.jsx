import { useT } from '../../i18n/LangContext'

export default function Marquee() {
  const { t } = useT()
  const items = t.marquee
  return (
    <section style={{
      borderBottom: '1px solid var(--en-line)',
      padding: '18px 0', overflow: 'hidden',
      background: 'var(--en-bg-1)',
    }}>
      <div style={{
        display: 'flex', gap: 56, whiteSpace: 'nowrap',
        animation: 'en-marquee 50s linear infinite',
      }}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            fontFamily: 'var(--en-font-display)',
            fontSize: 26, fontWeight: 400,
            color: i % 4 === 1 ? 'var(--en-accent)' : 'var(--en-fg-1)',
            fontStyle: i % 4 === 1 ? 'italic' : 'normal',
            letterSpacing: '-0.02em',
          }}>
            {it}
            <span style={{ color: 'var(--en-fg-3)', fontSize: 14 }}>◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes en-marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </section>
  )
}
