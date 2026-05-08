import { LangProvider } from './i18n/LangContext'
import { useRoute } from './router/HashRouter'
import Nav from './components/sections/Nav'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import Services from './components/sections/Services'
import Work from './components/sections/Work'
import Process from './components/sections/Process'
import Manifesto from './components/sections/Manifesto'
import Team from './components/sections/Team'
import Clients from './components/sections/Clients'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'
import WorkDetail from './components/pages/WorkDetail'

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <Manifesto />
      <Team />
      <Clients />
      <CTA />
      <Footer />
    </>
  )
}

function Router() {
  const route = useRoute()
  if (route.name === 'work-detail') {
    return <WorkDetail id={route.params.id} />
  }
  return <Home />
}

export default function App() {
  return (
    <LangProvider>
      <Router />
    </LangProvider>
  )
}
