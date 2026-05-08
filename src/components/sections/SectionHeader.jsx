import Reticle from '../primitives/Reticle'

export default function SectionHeader({ eyebrow, title1, title2, right }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'flex-end', marginBottom: 56, gap: 32, flexWrap: 'wrap',
    }}>
      <div>
        <div className="en-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <Reticle size={11} /> {eyebrow}
        </div>
        <h2 style={{
          fontFamily: 'var(--en-font-display)',
          fontSize: 'clamp(40px, 5vw, 76px)', fontWeight: 500,
          letterSpacing: '-0.035em', lineHeight: 1, margin: '16px 0 0',
          maxWidth: 900, textWrap: 'balance',
        }}>
          {title1}<br />
          <span style={{ color: 'var(--en-fg-3)' }}>{title2}</span>
        </h2>
      </div>
      {right}
    </div>
  )
}
