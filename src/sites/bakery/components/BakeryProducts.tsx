import { bakery } from '../config'

export function BakeryProducts() {
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

        <ul className="mx-auto mt-10 max-w-2xl divide-y divide-bakery-line border-y border-bakery-line">
          {bakery.products.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-4"
            >
              <h3 className="text-[1.05rem] font-medium text-bakery-ink">{item.name}</h3>
              <p className="text-right font-medium tabular-nums text-bakery">{item.price}</p>
              <p className="col-span-2 text-sm text-bakery-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
