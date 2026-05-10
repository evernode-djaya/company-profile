import { Children, useEffect, useRef, useState } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Carousel({
  children,
  gap = 16,
  slideWidth = '85%',
  desktopGrid = 'repeat(3, 1fr)',
  desktopGap,
  edgePadding = 20,
  showDots = true,
}) {
  const isMobile = useIsMobile()
  const items = Children.toArray(children)
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!isMobile) return
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const slides = track.querySelectorAll('[data-carousel-slide]')
      if (!slides.length) return
      const center = track.scrollLeft + track.clientWidth / 2
      let nearest = 0
      let nearestDist = Infinity
      slides.forEach((s, i) => {
        const slideCenter = s.offsetLeft + s.offsetWidth / 2
        const dist = Math.abs(slideCenter - center)
        if (dist < nearestDist) { nearestDist = dist; nearest = i }
      })
      setActive(nearest)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => track.removeEventListener('scroll', onScroll)
  }, [isMobile, items.length])

  if (!isMobile) {
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: desktopGrid,
        gap: desktopGap ?? gap,
      }}>
        {items}
      </div>
    )
  }

  return (
    <div>
      <div
        ref={trackRef}
        className="en-carousel"
        style={{
          display: 'flex',
          gap,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          margin: `0 -${edgePadding}px`,
          padding: `4px ${edgePadding}px 16px`,
          scrollbarWidth: 'none',
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            data-carousel-slide
            style={{
              flex: `0 0 ${slideWidth}`,
              scrollSnapAlign: 'center',
              minWidth: 0,
              display: 'flex',
            }}
          >
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
              {item}
            </div>
          </div>
        ))}
      </div>

      {showDots && items.length > 1 && (
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: 6, marginTop: 12,
        }}>
          {items.map((_, i) => (
            <span key={i} style={{
              width: i === active ? 18 : 6,
              height: 6,
              borderRadius: 999,
              background: i === active ? 'var(--en-accent)' : 'var(--en-line-strong)',
              transition: 'width 0.25s, background 0.25s',
            }} />
          ))}
        </div>
      )}
    </div>
  )
}
