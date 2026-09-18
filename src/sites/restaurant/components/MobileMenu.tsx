import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'
import { restaurant } from '../config/restaurant'
import { Button } from './ui/Button'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const frame = requestAnimationFrame(() => closeRef.current?.focus())

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const panel = document.getElementById('mobile-menu-panel')
      if (!panel) return

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/45"
        aria-label="Cerrar menú"
        onClick={onClose}
      />

      <div
        id="mobile-menu-panel"
        className="absolute inset-y-0 right-0 flex w-[min(100%,20.5rem)] flex-col bg-cream px-6 pb-8 pt-5 shadow-soft"
      >
        <div className="mb-8 flex items-center justify-between">
          <p id={titleId} className="display text-2xl tracking-[0.04em] text-ink">
            {restaurant.shortName}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-ink hover:text-olive"
            aria-label="Cerrar menú de navegación"
          >
            <X aria-hidden="true" size={22} strokeWidth={1.75} />
          </button>
        </div>

        <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
          {restaurant.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="min-h-12 border-b border-line py-3 text-lg text-ink-soft transition-colors hover:text-olive"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-3 pt-8">
          <Button
            href={`tel:${restaurant.phone.tel}`}
            className="w-full"
            onClick={onClose}
          >
            Reservar mesa
          </Button>
        </div>
      </div>
    </div>
  )
}
