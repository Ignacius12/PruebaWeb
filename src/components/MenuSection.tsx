import { useMemo, useState, type KeyboardEvent } from 'react'
import { menuCategories, menuItems } from '../data/menu'
import type { MenuCategoryId } from '../types'
import { MenuItem } from './MenuItem'
import { SectionHeading } from './ui/SectionHeading'

export function MenuSection() {
  const [active, setActive] = useState<MenuCategoryId>('compartir')

  const items = useMemo(
    () => menuItems.filter((item) => item.category === active),
    [active],
  )

  const activeLabel =
    menuCategories.find((category) => category.id === active)?.label ?? ''

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
      aria-labelledby="menu-heading"
      className="section-pad bg-cream-deep/50"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Carta"
          title="Menú"
          description="Producto de temporada, cocina mediterránea y platos pensados para compartir."
          id="menu-heading"
        />

        <div
          role="tablist"
          aria-label="Categorías del menú"
          className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
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
                className={`min-h-11 shrink-0 rounded-sm border px-4 text-sm transition-colors ${
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

        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`menu-tab-${active}`}
          className="mt-8 max-w-3xl border-t border-line pt-6"
        >
          <h3 className="sr-only">{activeLabel}</h3>
          {items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
