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
      <div className="clinic-container grid items-center gap-10 py-10 md:grid-cols-12 md:gap-12 md:py-14 lg:min-h-[min(92svh,52rem)] lg:gap-20 lg:py-20">
        <div className="order-2 md:order-1 md:col-span-5 lg:col-span-5">
          <p className="clinic-eyebrow lg:text-sm lg:tracking-[0.18em]">
            Odontología en Madrid
          </p>
          <h1
            id="clinic-hero-heading"
            className="mt-4 font-sans text-[2rem] font-medium leading-[1.15] tracking-tight text-clinic-ink sm:text-[2.35rem] md:text-[2.75rem] lg:mt-5"
          >
            <span className="block text-clinic lg:text-[3.5rem] xl:text-[4rem]">
              {name}
            </span>
            <span className="mt-3 block display max-w-[16ch] text-[1.85rem] leading-[1.12] text-clinic-ink sm:text-[2.15rem] md:text-[2.45rem] lg:mt-5 lg:max-w-[14ch] lg:text-[3.25rem] xl:text-[3.75rem]">
              {hero.title}
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-clinic-ink-soft md:text-lg lg:mt-6 lg:max-w-xl lg:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-10 lg:gap-4">
            <Button href="#cita" size="lg" className="w-full sm:w-auto lg:min-h-14 lg:px-8 lg:text-base">
              Pedir cita
            </Button>
            <Button
              href="#tratamientos"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto lg:min-h-14 lg:px-8 lg:text-base"
            >
              Ver tratamientos
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-clinic-muted lg:mt-10 lg:text-base">
            <li>Primera visita sin prisa</li>
            <li aria-hidden="true" className="text-clinic-line">
              |
            </li>
            <li>Explicaciones claras</li>
            <li aria-hidden="true" className="text-clinic-line">
              |
            </li>
            <li>Ambiente calmado</li>
          </ul>
        </div>

        <div className="order-1 md:order-2 md:col-span-7 lg:col-span-7">
          <figure className="overflow-hidden bg-clinic-mint">
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full object-cover md:aspect-[5/4] lg:aspect-[4/3] lg:min-h-[32rem] xl:min-h-[38rem]"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
