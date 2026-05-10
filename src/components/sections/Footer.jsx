import { useT } from '../../i18n/LangContext'
import { ENLogo } from '../Logo'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Footer() {
  const { t } = useT()
  const isMobile = useIsMobile()
  return (
    <footer style={{
      padding: '64px 32px 32px', borderTop: '1px solid var(--en-line)',
      background: 'var(--en-bg-1)',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : '2fr 1fr 1fr 1fr',
          gap: isMobile ? 32 : 48,
          marginBottom: isMobile ? 48 : 64,
        }}>
          <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
            <ENLogo size={20} />
            <p style={{
              maxWidth: 380, marginTop: 24, color: 'var(--en-fg-2)',
              fontSize: 14, lineHeight: 1.6,
            }}>{t.footer.blurb}</p>
          </div>
          {t.footer.cols.map((col, i) => (
            <div key={i}>
              <div className="en-mono" style={{
                fontSize: 11, color: 'var(--en-fg-3)', letterSpacing: '0.12em', marginBottom: 16,
              }}>{col.h.toUpperCase()}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.l.map(item => (
                  <li key={item} style={{ fontSize: 14, color: 'var(--en-fg-1)' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: 32, borderTop: '1px solid var(--en-line)',
          fontFamily: 'var(--en-font-display)',
          fontSize: 'clamp(80px, 18vw, 280px)',
          fontWeight: 500, lineHeight: 0.85,
          letterSpacing: '-0.05em',
          background: 'linear-gradient(180deg, var(--en-fg-1) 0%, var(--en-bg-2) 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'center',
        }}>evernode</div>

        <div style={{
          paddingTop: 24, marginTop: 16, borderTop: '1px solid var(--en-line)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          fontFamily: 'var(--en-font-mono)', fontSize: 11,
          color: 'var(--en-fg-3)',
        }}>
          <span>{t.footer.copy1}</span>
          <span>{t.footer.copy2}</span>
        </div>
      </div>
    </footer>
  )
}
