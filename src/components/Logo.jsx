/* EverNode logo — node-graph monogram (E + N as connected nodes) */
export function ENMark({ size = 28, color = 'currentColor', accent = 'var(--en-accent)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-label="EverNode mark">
      <path d="M6 8 L6 24 M6 8 L16 8 M6 16 L14 16 M6 24 L26 24 M16 8 L26 24 M26 8 L26 24"
        stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <circle cx="6" cy="8" r="2.4" fill={accent} />
      <circle cx="6" cy="16" r="1.6" fill={color} />
      <circle cx="14" cy="16" r="1.6" fill={color} />
      <circle cx="6" cy="24" r="1.6" fill={color} />
      <circle cx="16" cy="8" r="1.6" fill={color} />
      <circle cx="26" cy="8" r="1.6" fill={color} />
      <circle cx="26" cy="24" r="2.4" fill={accent} />
    </svg>
  )
}

export function ENLogo({ size = 22 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <ENMark size={size + 6} />
      <span style={{
        fontFamily: 'var(--en-font-display)',
        fontWeight: 600,
        fontSize: size,
        letterSpacing: '-0.02em',
        color: 'var(--en-fg-0)',
      }}>
        ever<span style={{ color: 'var(--en-fg-2)', fontWeight: 400 }}>node</span>
      </span>
    </div>
  )
}
