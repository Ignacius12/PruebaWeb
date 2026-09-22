import { useMemo, useState, type KeyboardEvent } from 'react'
import { menuCategories, menuItems } from '../data/menu'
import type { MenuCategoryId } from '../types'
import { MenuItem } from './MenuItem'
import { SectionHeading } from './ui/SectionHeading'
import { useInView } from '../../../hooks/useInView'

const categoryImagery: Record<
  MenuCategoryId,
  { src: string; alt: string }
> = {
  compartir: {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80&auto=format&fit=crop',
    alt: 'Platos para compartir en la mesa',
  },
  entrantes: {
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1000&q=80&auto=format&fit=crop',
    alt: 'Entrante fresco de temporada',
  },
  principales: {
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1000&q=80&auto=format&fit=crop',
    alt: 'Plato principal emplatado',
  },
  arroces: {
    src: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=1000&q=80&auto=format&fit=crop',
    alt: 'Arroz mediterráneo en cazuela',
  },
  postres: {
    src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1000&q=80&auto=format&fit=crop',
    alt: 'Postre artesanal',
  },
  bebidas: {
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1000&q=80&auto=format&fit=crop',
    alt: 'Copa de vino en la mesa',
  },
}

export function MenuSection() {
  const [active, setActive] = useState<MenuCategoryId>('compartir')
  const { ref, visible } = useInView<HTMLElement>()

  const items = useMemo(
    () => menuItems.filter((item) => item.category === active),
    [active],
  )

  const activeLabel =
    menuCategories.find((category) => category.id === active)?.label ?? ''
  const imagery = categoryImagery[active]

  const selectCategory = (id: MenuCategoryId) => {
    setActive(id)
    requestAnimationFrame(() => {
      document.getElementById(`menu-tab-${id}`)?.focus()
    })
  }

  const onTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()

    const last = menuCategories.length - 1
    let next = index
    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1
    if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = last

    selectCategory(menuCategories[next].id)
  }

  return (
    <section
      id="menu"
      ref={ref}
      aria-labelledby="menu-heading"
      className="section-pad bg-cream-deep/50"
    >
      <div
        className={`container-page transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SectionHeading
          eyebrow="Carta"
          title="Menú"
          description="Producto de temporada, cocina mediterránea y platos pensados para compartir."
          id="menu-heading"
        />

        <div
          role="tablist"
          aria-label="Categorías del menú"
          className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0 lg:mt-10"
        >
          {menuCategories.map((category, index) => {
            const selected = category.id === active
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`menu-tab-${category.id}`}
                aria-selected={selected}
                aria-controls="menu-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(category.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`min-h-11 shrink-0 rounded-sm border px-4 text-sm transition-colors lg:min-h-12 lg:px-5 lg:text-base ${
                  selected
                    ? 'border-olive bg-olive text-white'
                    : 'border-line bg-cream text-ink-soft hover:border-olive/50 hover:text-olive'
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <div
            id="menu-panel"
            role="tabpanel"
            aria-labelledby={`menu-tab-${active}`}
            className="border-t border-line pt-6 lg:col-span-7 lg:pt-8"
          >
            <h3 className="sr-only">{activeLabel}</h3>
            {items.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>

          <aside className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 overflow-hidden">
              <img
                key={active}
                src={imagery.src}
                alt={imagery.alt}
                width={1000}
                height={1250}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover animate-[fade-up_0.55s_ease_both]"
              />
              <p className="mt-4 text-sm tracking-[0.12em] text-muted uppercase">
                {activeLabel}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
