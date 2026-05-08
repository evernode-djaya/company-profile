import { createContext, useContext, useEffect, useState } from 'react'
import EN from './en.js'
import ID from './id.js'

const LangCtx = createContext({ lang: 'en', t: EN, setLang: () => {} })

export const useT = () => useContext(LangCtx)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('en-lang') || 'en' } catch { return 'en' }
  })
  useEffect(() => {
    try { localStorage.setItem('en-lang', lang) } catch {}
    document.documentElement.lang = lang
  }, [lang])
  const t = lang === 'id' ? ID : EN
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>
}

export function LangToggle() {
  const { lang, setLang } = useT()
  return (
    <div role="group" aria-label="Language" style={{
      display: 'inline-flex', border: '1px solid var(--en-line-strong)', borderRadius: 999,
      padding: 2, fontFamily: 'var(--en-font-mono)', fontSize: 11,
      background: 'rgba(7,8,10,0.6)',
    }}>
      {[{ k: 'en', l: 'EN' }, { k: 'id', l: 'ID' }].map(o => (
        <button key={o.k} onClick={() => setLang(o.k)} aria-pressed={lang === o.k} style={{
          padding: '4px 12px', border: 0, cursor: 'pointer',
          background: lang === o.k ? 'var(--en-fg-0)' : 'transparent',
          color: lang === o.k ? '#000' : 'var(--en-fg-2)',
          borderRadius: 999, fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: '0.06em',
        }}>{o.l}</button>
      ))}
    </div>
  )
}
