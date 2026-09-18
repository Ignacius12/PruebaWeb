import { clinic } from '../config'
import { Button } from './Button'

export function ClinicHero() {
  const { hero, name } = clinic

  return (
    <section
      id="inicio"
      aria-labelledby="clinic-hero-heading"
      className="bg-clinic-ice"
    >
      <div className="clinic-container grid items-center gap-10 py-10 md:grid-cols-12 md:gap-12 md:py-14 lg:gap-16 lg:py-16">
        <div className="order-2 md:order-1 md:col-span-5">
          <p className="clinic-eyebrow">Odontología en Madrid</p>
          <h1
            id="clinic-hero-heading"
            className="mt-4 font-sans text-[2rem] font-medium leading-[1.15] tracking-tight text-clinic-ink sm:text-[2.35rem] md:text-[2.75rem]"
          >
            <span className="block text-clinic">{name}</span>
            <span className="mt-3 block display text-[1.85rem] leading-[1.12] text-clinic-ink sm:text-[2.15rem] md:text-[2.45rem]">
              {hero.title}
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-clinic-ink-soft md:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#cita" size="lg" className="w-full sm:w-auto">
              Pedir cita
            </Button>
            <Button
              href="#tratamientos"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Ver tratamientos
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-clinic-muted">
            <li>Primera visita clara</li>
            <li aria-hidden="true" className="text-clinic-line">
              |
            </li>
            <li>Equipo cercano</li>
            <li aria-hidden="true" className="text-clinic-line">
              |
            </li>
            <li>Centro de Madrid</li>
          </ul>
        </div>

        <div className="order-1 md:order-2 md:col-span-7">
          <figure className="overflow-hidden bg-clinic-mint">
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full object-cover md:aspect-[5/4] lg:aspect-[4/3]"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
