import { useEffect } from 'react'
import { BakeryAbout } from './components/BakeryAbout'
import { BakeryFooter } from './components/BakeryFooter'
import { BakeryGallery } from './components/BakeryGallery'
import { BakeryHeader } from './components/BakeryHeader'
import { BakeryHero } from './components/BakeryHero'
import { BakeryJsonLd } from './components/BakeryJsonLd'
import { BakeryLegal } from './components/BakeryLegal'
import { BakeryLocation } from './components/BakeryLocation'
import { BakeryOrder } from './components/BakeryOrder'
import { BakeryProducts } from './components/BakeryProducts'
import { BakerySpecialties } from './components/BakerySpecialties'
import { BakeryTrust } from './components/BakeryTrust'
import { bakery } from './config'

export function BakeryApp() {
  useEffect(() => {
    document.title = bakery.seo.title
  }, [])

  return (
    <div className="theme-bakery min-h-svh bg-bakery-flour text-bakery-ink">
      <BakeryJsonLd />
      <a href="#panes" className="skip-link skip-link-bakery">
        Saltar a panes del día
      </a>
      <BakeryHeader />
      <main>
        <BakeryHero />
        <BakeryTrust />
        <BakeryAbout />
        <BakeryProducts />
        <BakerySpecialties />
        <BakeryGallery />
        <BakeryOrder />
        <BakeryLocation />
        <BakeryLegal />
      </main>
      <BakeryFooter />
    </div>
  )
}
