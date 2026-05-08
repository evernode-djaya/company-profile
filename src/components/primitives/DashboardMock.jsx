export default function DashboardMock({ variant = 'analytics', accent = 'var(--en-accent)' }) {
  if (variant === 'analytics') return <AnalyticsMock accent={accent} />
  if (variant === 'kanban') return <KanbanMock accent={accent} />
  if (variant === 'map') return <MapMock accent={accent} />
  if (variant === 'fleet') return <FleetMock accent={accent} />
  if (variant === 'archive') return <ArchiveMock accent={accent} />
  if (variant === 'schedule') return <ScheduleMock accent={accent} />
  return null
}

function MockShell({ children, label }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'linear-gradient(180deg, #0E1218 0%, #0A0D12 100%)',
      borderRadius: 10,
      border: '1px solid var(--en-line)',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        height: 26, background: '#0a0c10', borderBottom: '1px solid var(--en-line)',
        display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6,
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF6B6B' }} />
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FFB547' }} />
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3DDC97' }} />
        <span className="en-mono" style={{ marginLeft: 'auto', fontSize: 9, color: 'var(--en-fg-3)' }}>{label}</span>
      </div>
      <div style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 8, minHeight: 0 }}>
        {children}
      </div>
    </div>
  )
}

function AnalyticsMock({ accent }) {
  const bars = [40, 65, 30, 80, 55, 90, 70, 45, 60, 75, 50, 85]
  return (
    <MockShell label="analytics.evernode.id">
      <div style={{ display: 'flex', gap: 8 }}>
        {[
          { l: 'Active', v: '12,847', d: '+8.2%' },
          { l: 'Revenue', v: '$248K', d: '+12.4%' },
          { l: 'MRR', v: '84.2%', d: '+2.1%' },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, padding: '8px 10px', borderRadius: 6,
            background: 'rgba(255,255,255,0.02)', border: '1px solid var(--en-line)',
          }}>
            <div className="en-mono" style={{ fontSize: 8, color: 'var(--en-fg-3)', textTransform: 'uppercase' }}>{s.l}</div>
            <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>{s.v}</div>
            <div className="en-mono" style={{ fontSize: 8, color: 'var(--en-ok)', marginTop: 1 }}>{s.d}</div>
          </div>
        ))}
      </div>
      <div style={{
        flex: 1, padding: 10, borderRadius: 6,
        background: 'rgba(255,255,255,0.02)', border: '1px solid var(--en-line)',
        display: 'flex', flexDirection: 'column', minHeight: 0,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span className="en-mono" style={{ fontSize: 9, color: 'var(--en-fg-2)' }}>WEEKLY VOLUME</span>
          <span className="en-mono" style={{ fontSize: 9, color: accent }}>● Active</span>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
          {bars.map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`,
              background: i === 5 ? accent : 'rgba(124,197,255,0.25)',
              borderRadius: '2px 2px 0 0',
            }} />
          ))}
        </div>
      </div>
    </MockShell>
  )
}

function KanbanMock({ accent }) {
  const cols = [
    { name: 'Backlog', count: 12, color: 'var(--en-fg-3)' },
    { name: 'In Review', count: 5, color: accent },
    { name: 'Shipped', count: 28, color: 'var(--en-ok)' },
  ]
  return (
    <MockShell label="kanban / sprint-24">
      <div style={{ display: 'flex', gap: 6, flex: 1, minHeight: 0 }}>
        {cols.map((c, i) => (
          <div key={i} style={{
            flex: 1, padding: 6, borderRadius: 6,
            background: 'rgba(255,255,255,0.02)', border: '1px solid var(--en-line)',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 4px' }}>
              <span className="en-mono" style={{ fontSize: 8, color: c.color }}>{c.name}</span>
              <span className="en-mono" style={{ fontSize: 8, color: 'var(--en-fg-3)' }}>{c.count}</span>
            </div>
            {[1, 2, 3].map(j => (
              <div key={j} style={{
                padding: 5, borderRadius: 4,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--en-line)',
              }}>
                <div style={{ height: 4, width: '70%', background: 'var(--en-fg-2)', opacity: 0.4, borderRadius: 2 }} />
                <div style={{ height: 3, width: '50%', background: 'var(--en-fg-3)', opacity: 0.3, borderRadius: 2, marginTop: 3 }} />
                <div style={{ height: 4, width: 16, background: c.color, opacity: 0.6, borderRadius: 2, marginTop: 4 }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </MockShell>
  )
}

function MapMock({ accent }) {
  return (
    <MockShell label="ops/geofence">
      <div style={{
        flex: 1, position: 'relative', borderRadius: 6, overflow: 'hidden',
        background: `
          radial-gradient(circle at 30% 40%, rgba(124,197,255,0.15) 0%, transparent 40%),
          radial-gradient(circle at 70% 60%, rgba(199,255,61,0.08) 0%, transparent 40%),
          #0a0d12
        `,
        border: '1px solid var(--en-line)',
      }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} viewBox="0 0 200 120">
          <defs>
            <pattern id="mapgrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="200" height="120" fill="url(#mapgrid)" />
          <path d="M20,60 Q50,40 80,55 T140,50 T180,65" stroke="rgba(124,197,255,0.3)" strokeWidth="0.8" fill="none" />
          <path d="M30,80 Q70,75 100,70 T170,90" stroke="rgba(124,197,255,0.2)" strokeWidth="0.6" fill="none" />
          {[
            { x: 60, y: 50, big: true },
            { x: 130, y: 70 },
            { x: 90, y: 85 },
            { x: 160, y: 40 },
          ].map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={p.big ? 10 : 5} fill={accent} opacity="0.15" />
              <circle cx={p.x} cy={p.y} r={p.big ? 5 : 2.5} fill={accent} opacity="0.4" />
              <circle cx={p.x} cy={p.y} r={p.big ? 2 : 1.2} fill={accent} />
            </g>
          ))}
        </svg>
        <div style={{
          position: 'absolute', top: 8, left: 8, padding: '4px 8px',
          background: 'rgba(0,0,0,0.6)', border: '1px solid var(--en-line)', borderRadius: 4,
        }}>
          <div className="en-mono" style={{ fontSize: 8, color: 'var(--en-fg-2)' }}>4 ASSETS LIVE</div>
        </div>
      </div>
    </MockShell>
  )
}

function FleetMock({ accent }) {
  const rows = [
    { id: 'VHC-2841', st: 'Active', c: 'var(--en-ok)' },
    { id: 'VHC-2842', st: 'Idle', c: 'var(--en-warn)' },
    { id: 'VHC-2843', st: 'Active', c: 'var(--en-ok)' },
    { id: 'VHC-2844', st: 'Offline', c: 'var(--en-fg-3)' },
    { id: 'VHC-2845', st: 'Active', c: 'var(--en-ok)' },
  ]
  return (
    <MockShell label="fleet/live">
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 4 }}>
        <div style={{ display: 'flex', padding: '4px 8px', borderBottom: '1px solid var(--en-line)' }}>
          <span className="en-mono" style={{ fontSize: 8, color: 'var(--en-fg-3)', flex: 1 }}>ASSET</span>
          <span className="en-mono" style={{ fontSize: 8, color: 'var(--en-fg-3)', width: 50 }}>STATUS</span>
          <span className="en-mono" style={{ fontSize: 8, color: 'var(--en-fg-3)', width: 40, textAlign: 'right' }}>FUEL</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', padding: '5px 8px', borderRadius: 4,
            background: i === 1 ? 'rgba(124,197,255,0.06)' : 'transparent',
            border: i === 1 ? `1px solid ${accent}40` : '1px solid transparent',
          }}>
            <span className="en-mono" style={{ fontSize: 9, color: 'var(--en-fg-1)', flex: 1 }}>{r.id}</span>
            <span style={{ width: 50, display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: r.c }} />
              <span className="en-mono" style={{ fontSize: 8, color: 'var(--en-fg-2)' }}>{r.st}</span>
            </span>
            <div style={{ width: 40, display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ width: 32, height: 4, background: 'var(--en-line)', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: `${30 + i * 15}%`, height: '100%', background: accent }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </MockShell>
  )
}

function ArchiveMock({ accent }) {
  const files = [
    { n: 'Q4-financial-audit.pdf', t: 'Auto-tagged', c: accent },
    { n: 'vendor-contracts-2026.zip', t: 'Indexing', c: 'var(--en-warn)' },
    { n: 'compliance-report.docx', t: 'Verified', c: 'var(--en-ok)' },
    { n: 'asset-registry.xlsx', t: 'Verified', c: 'var(--en-ok)' },
  ]
  return (
    <MockShell label="archive/intelligent">
      <div style={{ display: 'flex', gap: 6, padding: '4px 8px', borderBottom: '1px solid var(--en-line)' }}>
        <span className="en-mono" style={{ fontSize: 8, color: accent }}>● 12,847 docs</span>
        <span className="en-mono" style={{ fontSize: 8, color: 'var(--en-fg-3)' }}>indexed</span>
        <span className="en-mono" style={{ fontSize: 8, color: 'var(--en-fg-3)', marginLeft: 'auto' }}>AI ●</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        {files.map((f, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '5px 6px', borderRadius: 4,
            background: 'rgba(255,255,255,0.02)', border: '1px solid var(--en-line)',
          }}>
            <div style={{ width: 14, height: 16, border: '1px solid var(--en-fg-3)', borderRadius: 2, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 4, height: 4, background: 'var(--en-fg-3)' }} />
            </div>
            <span className="en-mono" style={{ fontSize: 9, color: 'var(--en-fg-1)', flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{f.n}</span>
            <span className="en-mono" style={{ fontSize: 8, color: f.c }}>{f.t}</span>
          </div>
        ))}
      </div>
    </MockShell>
  )
}

function ScheduleMock({ accent }) {
  return (
    <MockShell label="ops/schedule">
      <div style={{ display: 'flex', gap: 4, padding: '0 4px' }}>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <div key={i} style={{
            flex: 1, textAlign: 'center', padding: '3px 0',
            background: i === 2 ? accent : 'transparent',
            color: i === 2 ? '#000' : 'var(--en-fg-3)',
            borderRadius: 3,
            fontFamily: 'var(--en-font-mono)', fontSize: 8, fontWeight: 600,
          }}>{d}</div>
        ))}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3, position: 'relative', overflow: 'hidden' }}>
        {[
          { h: 1, top: 5, width: 60, label: 'Standup' },
          { h: 2, top: 22, width: 80, label: 'Sprint review' },
          { h: 3, top: 45, width: 50, label: '1:1' },
          { h: 1, top: 65, width: 70, label: 'Design review' },
          { h: 2, top: 85, width: 90, label: 'Client demo' },
        ].map((evt, i) => (
          <div key={i} style={{
            position: 'absolute', top: `${evt.top}%`, left: `${i * 4}%`, width: `${evt.width}%`,
            padding: '3px 6px', borderRadius: 3,
            background: i % 2 === 0 ? 'rgba(124,197,255,0.15)' : 'rgba(199,255,61,0.12)',
            borderLeft: `2px solid ${i % 2 === 0 ? accent : 'var(--en-accent-2)'}`,
            fontFamily: 'var(--en-font-mono)', fontSize: 8,
            color: 'var(--en-fg-1)',
          }}>{evt.label}</div>
        ))}
      </div>
    </MockShell>
  )
}
