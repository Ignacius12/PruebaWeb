import { bakery } from '../config'

export function BakerySpecialties() {
  return (
    <section id="encargos" aria-labelledby="specialties-heading" className="bakery-section bg-bakery-flour">
      <div className="bakery-container">
        <p className="bakery-eyebrow">Para encargar</p>
        <h2
          id="specialties-heading"
          className="display mt-3 max-w-2xl text-[2rem] text-bakery-ink md:text-[2.6rem] lg:mt-4 lg:max-w-4xl lg:text-[3.5rem] xl:text-[4rem]"
        >
          Cestas, fiestas y mesas bien puestas.
        </h2>

        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {bakery.specialties.map((item) => (
            <li key={item.id}>
              <img
                src={item.image.src}
                alt={item.image.alt}
                width={900}
                height={700}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <h3 className="mt-4 display text-2xl text-bakery-ink">{item.name}</h3>
              <p className="mt-2 text-bakery-ink-soft">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
