import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { restaurant } from '../config/restaurant'
import { MobileMenu } from './MobileMenu'
import { Button } from './ui/Button'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? 'border-line/80 bg-cream/95 shadow-soft backdrop-blur-md'
            : 'border-transparent bg-cream/90 backdrop-blur-sm'
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
          <a
            href="#inicio"
            className="display text-[1.35rem] tracking-[0.08em] text-ink md:text-[1.5rem]"
            aria-label={`${restaurant.name} — inicio`}
          >
            {restaurant.shortName}
          </a>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-7 lg:flex"
          >
            {restaurant.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-olive"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#reservas" className="px-3.5 text-sm sm:px-5">
              Reservar mesa
            </Button>

            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-ink hover:text-olive lg:hidden"
              aria-label="Abrir menú de navegación"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu-panel"
              onClick={() => setMenuOpen(true)}
            >
              <Menu aria-hidden="true" size={22} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
