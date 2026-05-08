export default function Reticle({ size = 14, color = 'var(--en-fg-3)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" style={{ display: 'block' }}>
      <circle cx="7" cy="7" r="3.2" fill="none" stroke={color} strokeWidth="0.8" />
      <line x1="7" y1="0" x2="7" y2="3" stroke={color} strokeWidth="0.8" />
      <line x1="7" y1="11" x2="7" y2="14" stroke={color} strokeWidth="0.8" />
      <line x1="0" y1="7" x2="3" y2="7" stroke={color} strokeWidth="0.8" />
      <line x1="11" y1="7" x2="14" y2="7" stroke={color} strokeWidth="0.8" />
    </svg>
  )
}
