import { About } from './components/About'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { JsonLd } from './components/JsonLd'
import { LegalNotes } from './components/LegalNotes'
import { Location } from './components/Location'
import { MenuSection } from './components/MenuSection'
import { Reservations } from './components/Reservations'
import { TrustBar } from './components/TrustBar'

function App() {
  return (
    <>
      <JsonLd />
      <a href="#menu" className="skip-link">
        Saltar al menú
      </a>
      <Header />
      <main id="contenido-principal">
        <Hero />
        <TrustBar />
        <About />
        <MenuSection />
        <Gallery />
        <Reservations />
        <Location />
        <LegalNotes />
      </main>
      <Footer />
    </>
  )
}

export default App
