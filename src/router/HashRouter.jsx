import { useCallback, useEffect, useState } from 'react'

function readHash() {
  const raw = (typeof window !== 'undefined' ? window.location.hash : '') || ''
  if (!raw || raw === '#') return { pathname: '/', anchor: null }
  if (!raw.startsWith('#/')) return { pathname: '/', anchor: raw.slice(1) }
  const rest = raw.slice(1)
  const [pathname] = rest.split('?')
  return { pathname, anchor: null }
}

function matchWorkDetail(pathname) {
  const m = pathname.match(/^\/work\/([^/]+)\/?$/)
  return m ? { id: decodeURIComponent(m[1]) } : null
}

export function useRoute() {
  const [route, setRoute] = useState(readHash)
  useEffect(() => {
    const onChange = () => setRoute(readHash())
    window.addEventListener('hashchange', onChange)
    window.addEventListener('popstate', onChange)
    return () => {
      window.removeEventListener('hashchange', onChange)
      window.removeEventListener('popstate', onChange)
    }
  }, [])
  const workMatch = matchWorkDetail(route.pathname)
  if (workMatch) {
    return { name: 'work-detail', params: workMatch, anchor: null, pathname: route.pathname }
  }
  return { name: 'home', params: {}, anchor: route.anchor, pathname: route.pathname }
}

export function navigate(to) {
  if (typeof window === 'undefined') return
  if (!to) {
    window.location.hash = ''
    return
  }
  if (to.startsWith('/')) {
    window.location.hash = to
  } else {
    window.location.hash = '/' + to
  }
}

export function Link({ to, children, onClick, ...rest }) {
  const handle = useCallback((e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return
    e.preventDefault()
    navigate(to)
    if (onClick) onClick(e)
  }, [to, onClick])
  return (
    <a href={`#${to}`} onClick={handle} {...rest}>
      {children}
    </a>
  )
}
