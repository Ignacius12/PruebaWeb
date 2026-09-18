import { useEffect, useId, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { bakery } from '../config'

const AUTO_MS = 4500

export function BakeryProducts() {
  const products = bakery.products
  const labelId = useId()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const active = products[index]

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || paused || products.length < 2) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % products.length)
    }, AUTO_MS)

    return () => window.clearInterval(timer)
  }, [paused, products.length])

  const goTo = (next: number) => {
    setIndex((next + products.length) % products.length)
  }

  return (
    <section id="panes" aria-labelledby="products-heading" className="bakery-section bg-bakery-paper">
      <div className="bakery-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="bakery-eyebrow">Hoy en el mostrador</p>
          <h2
            id="products-heading"
            className="display mt-3 text-[2rem] text-bakery-ink md:text-[2.6rem]"
          >
            Panes y bollería del día
          </h2>
          <p className="mt-4 text-bakery-muted">
            Disponibilidad según hornada. Si buscas algo concreto, llámanos antes de venir.
          </p>
        </div>

        <div
          className="relative mx-auto mt-10 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPaused(false)
            }
          }}
        >
          <div
            role="group"
            aria-roledescription="carrusel"
            aria-labelledby={labelId}
            className="overflow-hidden border border-bakery-line bg-bakery-flour"
          >
            <p id={labelId} className="sr-only">
              Producto {index + 1} de {products.length}: {active.name}
            </p>

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-bakery-paper md:aspect-[16/10]">
              {products.map((item, i) => (
                <img
                  key={item.id}
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    i === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-end justify-between gap-4 border-t border-bakery-line px-5 py-5 md:px-7 md:py-6">
              <div>
                <h3 className="display text-2xl text-bakery-ink md:text-[1.85rem]">
                  {active.name}
                </h3>
                <p className="mt-1 text-sm text-bakery-muted">{active.description}</p>
              </div>
              <p className="shrink-0 text-xl font-medium tabular-nums text-bakery md:text-2xl">
                {active.price}
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-bakery-line text-bakery-ink hover:border-bakery hover:text-bakery"
              aria-label="Producto anterior"
            >
              <ChevronLeft aria-hidden size={20} />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Productos del mostrador">
              {products.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ver ${item.name}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 w-2.5 rounded-none transition-colors ${
                    i === index ? 'bg-bakery' : 'bg-bakery-line hover:bg-bakery/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-bakery-line text-bakery-ink hover:border-bakery hover:text-bakery"
              aria-label="Producto siguiente"
            >
              <ChevronRight aria-hidden size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
