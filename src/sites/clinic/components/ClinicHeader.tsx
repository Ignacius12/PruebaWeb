import { useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { clinic } from '../config'
import { Button } from './Button'

export function ClinicHeader() {
  const [open, setOpen] = useState(false)
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
        className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
          scrolled
            ? 'border-clinic-line bg-clinic-ice/95 backdrop-blur-md'
            : 'border-transparent bg-clinic-ice/90 backdrop-blur-sm'
        }`}
      >
        <div className="clinic-container flex h-16 items-center justify-between gap-3 md:h-[4.25rem]">
          <a
            href="#inicio"
            className="font-sans text-[1.05rem] font-medium tracking-tight text-clinic-ink sm:text-[1.15rem]"
          >
            {clinic.name}
          </a>

          <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex">
            {clinic.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-clinic-ink-soft hover:text-clinic"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#cita" className="rounded-full px-3.5 text-sm sm:px-5">
              Pedir cita
            </Button>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-clinic-ink hover:text-clinic lg:hidden"
              aria-label="Abrir menú de navegación"
              aria-expanded={open}
              aria-controls="clinic-mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu aria-hidden size={22} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>
      <ClinicMobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}

function ClinicMobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const frame = requestAnimationFrame(() => closeRef.current?.focus())
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal aria-labelledby={titleId}>
      <button type="button" className="absolute inset-0 bg-clinic-ink/40" aria-label="Cerrar menú" onClick={onClose} />
      <div
        id="clinic-mobile-menu"
        className="absolute inset-y-0 right-0 flex w-[min(100%,20.5rem)] flex-col bg-clinic-ice px-6 pb-8 pt-5"
      >
        <div className="mb-8 flex items-center justify-between">
          <p id={titleId} className="font-sans text-lg font-medium tracking-tight">
            {clinic.name}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center"
            aria-label="Cerrar menú de navegación"
          >
            <X aria-hidden size={22} />
          </button>
        </div>
        <nav aria-label="Navegación móvil" className="flex flex-col">
          {clinic.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="min-h-12 border-b border-clinic-line py-3 text-lg text-clinic-ink-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <Button href={`tel:${clinic.phone.tel}`} className="w-full rounded-full" onClick={onClose}>
            Pedir cita
          </Button>
        </div>
      </div>
    </div>
  )
}
