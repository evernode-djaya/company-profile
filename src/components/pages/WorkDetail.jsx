import { useEffect } from 'react'
import { useT } from '../../i18n/LangContext'
import { Link } from '../../router/HashRouter'
import DashboardMock from '../primitives/DashboardMock'

export default function WorkDetail({ id }) {
  const { t } = useT()
  const projects = (t.work && t.work.projects) || []
  const p = projects.find(x => String(x.id) === String(id))

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [id])

  if (!p) {
    return <NotFound id={id} />
  }

  const blocks = Array.isArray(p.blocks) ? p.blocks.filter(b => b && (b.heading || b.body || b.image)) : []
  const gallery = Array.isArray(p.gallery) ? p.gallery.filter(Boolean) : []
  const outcomes = Array.isArray(p.outcomes) ? p.outcomes.filter(Boolean) : []
  const stack = Array.isArray(p.stack) ? p.stack.filter(Boolean) : []
  const summary = (p.summary && p.summary.trim()) || p.desc || ''

  return (
    <main style={{ minHeight: '100vh', background: 'var(--en-bg-0)', paddingTop: 32, paddingBottom: 120 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <Link to="/" className="en-mono" style={{
            fontFamily: 'var(--en-font-mono)', fontSize: 11,
            color: 'var(--en-fg-2)', textDecoration: 'none',
            letterSpacing: '0.06em',
          }}>← BACK</Link>
          <span className="en-mono" style={{ fontSize: 11, color: 'var(--en-fg-3)' }}>
            CASE / {p.id} · {p.year}
          </span>
        </div>

        <div style={{ marginBottom: 56 }}>
          <div className="en-mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 11, color: 'var(--en-fg-3)', letterSpacing: '0.12em',
            marginBottom: 16,
          }}>{p.tag}</div>
          <h1 style={{
            fontFamily: 'var(--en-font-display)',
            fontSize: 'clamp(40px, 6vw, 88px)', fontWeight: 500,
            letterSpacing: '-0.035em', lineHeight: 1, margin: '0 0 24px',
            textWrap: 'balance',
          }}>{p.title}</h1>
          <div className="en-mono" style={{ fontSize: 12, color: 'var(--en-fg-2)', marginBottom: 24 }}>
            CLIENT · {p.client || '—'}
          </div>
          {summary
            ? <p style={{
                margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--en-fg-1)',
                maxWidth: 720, whiteSpace: 'pre-wrap',
              }}>{summary}</p>
            : null}
        </div>

        <div style={{
          aspectRatio: '16/9', borderRadius: 14, overflow: 'hidden',
          border: '1px solid var(--en-line)', background: 'var(--en-bg-1)',
          marginBottom: 56,
        }}>
          {p.hero
            ? <img src={p.hero} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            : (p.thumbnail
              ? <img src={p.thumbnail} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              : <div style={{ padding: 32, height: '100%' }}><DashboardMock variant={p.variant} /></div>
            )}
        </div>

        {(outcomes.length > 0 || stack.length > 0) && (
          <div style={{
            display: 'grid', gridTemplateColumns: outcomes.length && stack.length ? '1fr 1fr' : '1fr',
            gap: 32, marginBottom: 56, padding: '32px 0',
            borderTop: '1px solid var(--en-line)', borderBottom: '1px solid var(--en-line)',
          }}>
            {outcomes.length > 0 && (
              <div>
                <div className="en-mono" style={{ fontSize: 11, color: 'var(--en-fg-3)', letterSpacing: '0.12em', marginBottom: 16 }}>OUTCOMES</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
                  {outcomes.map((o, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5, color: 'var(--en-fg-1)' }}>
                      <span style={{ color: 'var(--en-accent)' }}>—</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {stack.length > 0 && (
              <div>
                <div className="en-mono" style={{ fontSize: 11, color: 'var(--en-fg-3)', letterSpacing: '0.12em', marginBottom: 16 }}>STACK</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {stack.map((s, i) => (
                    <span key={i} className="en-mono" style={{
                      padding: '4px 10px', borderRadius: 4,
                      background: 'var(--en-bg-2)', border: '1px solid var(--en-line)',
                      fontSize: 11, color: 'var(--en-fg-2)', letterSpacing: '0.06em',
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {blocks.length > 0 && (
          <div style={{ display: 'grid', gap: 56, marginBottom: 56 }}>
            {blocks.map((b, i) => (
              <article key={i}>
                {b.heading
                  ? <h2 style={{
                      fontFamily: 'var(--en-font-display)', fontSize: 32, fontWeight: 500,
                      letterSpacing: '-0.025em', margin: '0 0 16px', color: 'var(--en-fg-0)',
                    }}>{b.heading}</h2>
                  : null}
                {b.body
                  ? <p style={{
                      margin: 0, fontSize: 16, lineHeight: 1.7, color: 'var(--en-fg-1)',
                      maxWidth: 720, whiteSpace: 'pre-wrap',
                    }}>{b.body}</p>
                  : null}
                {b.image
                  ? <div style={{ marginTop: 20, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--en-line)' }}>
                      <img src={b.image} alt={b.heading || ''} style={{ width: '100%', display: 'block' }} />
                    </div>
                  : null}
              </article>
            ))}
          </div>
        )}

        {gallery.length > 0 && (
          <div style={{ marginBottom: 56 }}>
            <div className="en-mono" style={{ fontSize: 11, color: 'var(--en-fg-3)', letterSpacing: '0.12em', marginBottom: 16 }}>GALLERY</div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12,
            }}>
              {gallery.map((src, i) => (
                <div key={i} style={{
                  borderRadius: 10, overflow: 'hidden', border: '1px solid var(--en-line)',
                  aspectRatio: '4/3', background: 'var(--en-bg-1)',
                }}>
                  <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{
          paddingTop: 32, borderTop: '1px solid var(--en-line)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
        }}>
          <Link to="/" className="en-mono" style={{
            fontSize: 12, color: 'var(--en-fg-2)', textDecoration: 'none', letterSpacing: '0.06em',
          }}>← BACK TO ALL WORK</Link>
          <span className="en-mono" style={{ fontSize: 11, color: 'var(--en-fg-3)' }}>
            EVERNODE · CASE / {p.id}
          </span>
        </div>
      </div>
    </main>
  )
}

function NotFound({ id }) {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--en-bg-0)', display: 'grid', placeItems: 'center', padding: 32 }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div className="en-mono" style={{ fontSize: 11, color: 'var(--en-fg-3)', letterSpacing: '0.12em', marginBottom: 16 }}>
          ERR · 404
        </div>
        <h1 style={{
          fontFamily: 'var(--en-font-display)', fontSize: 48, fontWeight: 500,
          letterSpacing: '-0.035em', lineHeight: 1, margin: '0 0 16px',
        }}>No case file for "{id}"</h1>
        <p style={{ color: 'var(--en-fg-2)', margin: '0 0 24px' }}>
          That work item doesn't exist. It may have been renamed.
        </p>
        <Link to="/" className="en-mono" style={{
          display: 'inline-block', padding: '10px 20px',
          border: '1px solid var(--en-line-strong)', borderRadius: 999,
          color: 'var(--en-fg-1)', textDecoration: 'none', fontSize: 12,
        }}>← Back home</Link>
      </div>
    </main>
  )
}
