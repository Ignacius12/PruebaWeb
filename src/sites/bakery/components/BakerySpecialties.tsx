import { bakery } from '../config'
import { useInView } from '../../../hooks/useInView'

export function BakerySpecialties() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="encargos"
      ref={ref}
      aria-labelledby="specialties-heading"
      className="bakery-section bg-bakery-flour"
    >
      <div
        className={`bakery-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="bakery-eyebrow">Para encargar</p>
          <h2
            id="specialties-heading"
            className="display mt-3 text-[2rem] text-bakery-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            Cestas, fiestas y mesas bien puestas.
          </h2>
        </div>

        <ul className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 lg:gap-12">
          {bakery.specialties.map((item) => (
            <li key={item.id} className="group">
              <div className="overflow-hidden">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width={900}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="display mt-4 text-2xl text-bakery-ink lg:mt-5 lg:text-3xl">
                {item.name}
              </h3>
              <p className="mt-2 text-bakery-ink-soft lg:text-lg">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
