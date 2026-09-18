import { bakery } from '../config'

export function BakeryTrust() {
  return (
    <section
      aria-label="Señas del horno"
      className="border-y border-bakery-line bg-bakery-paper"
    >
      <div className="bakery-container grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-4 md:py-10">
        {bakery.trust.map((item) => (
          <p
            key={item.id}
            className="text-center font-medium text-bakery-ink-soft md:text-[0.95rem]"
          >
            {item.label}
          </p>
        ))}
      </div>
    </section>
  )
}
