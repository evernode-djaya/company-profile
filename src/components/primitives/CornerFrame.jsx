export default function CornerFrame({ children, style, hovered }) {
  const tick = (pos) => ({
    position: 'absolute', width: 10, height: 10, ...pos,
    borderColor: hovered ? 'var(--en-accent)' : 'var(--en-line-strong)',
    transition: 'border-color 0.3s',
  })
  return (
    <div style={{ position: 'relative', ...style }}>
      <span style={{ ...tick({ top: -1, left: -1, borderTop: '1px solid', borderLeft: '1px solid' }) }} />
      <span style={{ ...tick({ top: -1, right: -1, borderTop: '1px solid', borderRight: '1px solid' }) }} />
      <span style={{ ...tick({ bottom: -1, left: -1, borderBottom: '1px solid', borderLeft: '1px solid' }) }} />
      <span style={{ ...tick({ bottom: -1, right: -1, borderBottom: '1px solid', borderRight: '1px solid' }) }} />
      {children}
    </div>
  )
}
