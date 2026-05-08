import { useT, LangToggle } from '../../i18n/LangContext'
import { ENLogo } from '../Logo'

export default function Nav() {
  const { t } = useT()
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      backdropFilter: 'blur(20px) saturate(140%)', WebkitBackdropFilter: 'blur(20px) saturate(140%)',
      background: 'rgba(7,8,10,0.72)',
      borderBottom: '1px solid var(--en-line)',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: '14px 32px',
        display: 'flex', alignItems: 'center', gap: 32,
      }}>
        <ENLogo size={20} />
        <nav style={{ display: 'flex', gap: 22, marginLeft: 36 }}>
          {t.nav.items.map(it => (
            <a key={it.id} href={`#${it.id}`} style={{
              fontSize: 13.5, color: 'var(--en-fg-1)', letterSpacing: '-0.01em',
              padding: '6px 0', borderBottom: '1px solid transparent',
              transition: 'border-color 0.3s, color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--en-accent)'; e.currentTarget.style.color = 'var(--en-fg-0)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.color = 'var(--en-fg-1)' }}>
              {it.label}
            </a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <LangToggle />
          <a href="#contact" style={{
            padding: '9px 16px', borderRadius: 999,
            background: 'var(--en-fg-0)', color: '#000',
            fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            {t.nav.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  )
}
