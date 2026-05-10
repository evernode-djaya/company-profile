import { useEffect, useState } from 'react'
import { useT, LangToggle } from '../../i18n/LangContext'
import { ENLogo } from '../Logo'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Nav() {
  const { t } = useT()
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)

  useEffect(() => { if (!isMobile) setOpen(false) }, [isMobile])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  const linkBase = {
    fontSize: 13.5, color: 'var(--en-fg-1)', letterSpacing: '-0.01em',
    padding: '6px 0', borderBottom: '1px solid transparent',
    transition: 'border-color 0.3s, color 0.3s',
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      backdropFilter: 'blur(20px) saturate(140%)', WebkitBackdropFilter: 'blur(20px) saturate(140%)',
      background: 'rgba(7,8,10,0.72)',
      borderBottom: '1px solid var(--en-line)',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: isMobile ? '14px 20px' : '14px 32px',
        display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 32,
      }}>
        <ENLogo size={20} />

        {!isMobile && (
          <nav style={{ display: 'flex', gap: 22, marginLeft: 36 }}>
            {t.nav.items.map(it => (
              <a key={it.id} href={`#${it.id}`} style={linkBase}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--en-accent)'; e.currentTarget.style.color = 'var(--en-fg-0)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.color = 'var(--en-fg-1)' }}>
                {it.label}
              </a>
            ))}
          </nav>
        )}

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          {!isMobile && <LangToggle />}
          {!isMobile && (
            <a href="#contact" style={{
              padding: '9px 16px', borderRadius: 999,
              background: 'var(--en-fg-0)', color: '#000',
              fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              {t.nav.cta} <span aria-hidden="true">→</span>
            </a>
          )}
          {isMobile && (
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(o => !o)}
              style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'transparent',
                border: '1px solid var(--en-line-strong)',
                color: 'var(--en-fg-0)', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: 0,
              }}
            >
              <Burger open={open} />
            </button>
          )}
        </div>
      </div>

      {isMobile && (
        <MobileDrawer
          open={open}
          onClose={() => setOpen(false)}
          items={t.nav.items}
          ctaLabel={t.nav.cta}
        />
      )}
    </header>
  )
}

function Burger({ open }) {
  const bar = {
    position: 'absolute', left: 9, right: 9, height: 1.5,
    background: 'currentColor', borderRadius: 2,
    transition: 'transform 0.25s, opacity 0.25s, top 0.25s',
  }
  return (
    <span style={{ position: 'relative', width: 22, height: 14, display: 'inline-block' }}>
      <span style={{ ...bar, top: open ? 6.5 : 2, transform: open ? 'rotate(45deg)' : 'none' }} />
      <span style={{ ...bar, top: 6.5, opacity: open ? 0 : 1 }} />
      <span style={{ ...bar, top: open ? 6.5 : 11, transform: open ? 'rotate(-45deg)' : 'none' }} />
    </span>
  )
}

function MobileDrawer({ open, onClose, items, ctaLabel }) {
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, top: 64,
          background: 'rgba(7,8,10,0.5)',
          backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s',
          zIndex: 40,
        }}
      />
      <nav
        aria-hidden={!open}
        style={{
          position: 'fixed', top: 64, left: 0, right: 0,
          background: 'var(--en-bg-1)',
          borderBottom: '1px solid var(--en-line)',
          transform: open ? 'translateY(0)' : 'translateY(-12px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'transform 0.25s, opacity 0.25s',
          zIndex: 45,
          padding: '12px 20px 24px',
          display: 'flex', flexDirection: 'column', gap: 4,
          maxHeight: 'calc(100vh - 64px)', overflowY: 'auto',
        }}
      >
        {items.map(it => (
          <a
            key={it.id}
            href={`#${it.id}`}
            onClick={onClose}
            style={{
              padding: '14px 4px', fontSize: 18,
              color: 'var(--en-fg-0)', letterSpacing: '-0.015em',
              borderBottom: '1px solid var(--en-line)',
              fontFamily: 'var(--en-font-display)', fontWeight: 500,
            }}
          >
            {it.label}
          </a>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 20 }}>
          <LangToggle />
          <a
            href="#contact"
            onClick={onClose}
            style={{
              padding: '12px 18px', borderRadius: 999,
              background: 'var(--en-fg-0)', color: '#000',
              fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}
          >
            {ctaLabel} <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
    </>
  )
}
