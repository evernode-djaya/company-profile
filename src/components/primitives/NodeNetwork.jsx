import { useEffect, useMemo, useRef, useState } from 'react'

export default function NodeNetwork({ density = 14, height = 340, accent = 'var(--en-accent)' }) {
  const ref = useRef(null)
  const [t, setT] = useState(0)
  useEffect(() => {
    let raf
    const start = performance.now()
    const tick = (now) => { setT((now - start) / 1000); raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const W = 800
  const H = height

  const nodes = useMemo(() => {
    const arr = []
    for (let i = 0; i < density; i++) {
      arr.push({
        x: Math.random() * W,
        y: Math.random() * H,
        ax: (Math.random() - 0.5) * 0.3,
        ay: (Math.random() - 0.5) * 0.3,
        r: 1.5 + Math.random() * 2.5,
        phase: Math.random() * Math.PI * 2,
      })
    }
    return arr
  }, [density, height])

  const positioned = nodes.map(n => ({
    ...n,
    px: ((n.x + n.ax * t * 30) % W + W) % W,
    py: ((n.y + n.ay * t * 30) % H + H) % H,
  }))

  const edges = []
  for (let i = 0; i < positioned.length; i++) {
    for (let j = i + 1; j < positioned.length; j++) {
      const dx = positioned[i].px - positioned[j].px
      const dy = positioned[i].py - positioned[j].py
      const d = Math.hypot(dx, dy)
      if (d < 180) edges.push({ a: positioned[i], b: positioned[j], o: 1 - d / 180 })
    }
  }

  return (
    <svg ref={ref} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <radialGradient id="nn-glow">
          <stop offset="0" stopColor={accent} stopOpacity="0.6" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      {edges.map((e, i) => (
        <line key={i} x1={e.a.px} y1={e.a.py} x2={e.b.px} y2={e.b.py}
          stroke={accent} strokeWidth="0.6" opacity={e.o * 0.35} />
      ))}
      {positioned.map((n, i) => {
        const pulse = 0.6 + Math.sin(t * 1.5 + n.phase) * 0.4
        return (
          <g key={i}>
            <circle cx={n.px} cy={n.py} r={n.r * 4} fill="url(#nn-glow)" opacity={pulse * 0.5} />
            <circle cx={n.px} cy={n.py} r={n.r} fill={accent} opacity={pulse} />
          </g>
        )
      })}
    </svg>
  )
}
