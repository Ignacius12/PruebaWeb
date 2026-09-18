import { Clock, Leaf, Star, UtensilsCrossed } from 'lucide-react'
import { restaurant } from '../config/restaurant'
import type { TrustItem } from '../types'

const icons = {
  stars: Star,
  leaf: Leaf,
  utensils: UtensilsCrossed,
  clock: Clock,
} as const

function TrustIcon({ item }: { item: TrustItem }) {
  if (item.icon === 'stars') {
    return (
      <span className="flex gap-0.5 text-olive" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
    )
  }

  const Icon = item.icon ? icons[item.icon] : null
  if (!Icon) return null
  return <Icon size={18} strokeWidth={1.6} className="text-olive" aria-hidden="true" />
}

export function TrustBar() {
  return (
    <section
      aria-label="Información rápida"
      className="border-b border-line bg-cream-deep/60"
    >
      <div className="container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-4 md:py-10">
        {restaurant.trust.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start gap-2 md:items-center md:text-center"
          >
            <TrustIcon item={item} />
            <p className="text-sm font-medium text-ink-soft md:text-[0.95rem]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
