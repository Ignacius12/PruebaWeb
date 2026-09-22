import { bakery } from '../config'
import { Button } from './Button'

export function BakeryHero() {
  const { hero, name } = bakery

  return (
    <section id="inicio" aria-labelledby="bakery-hero-heading" className="bg-bakery-flour">
      <div className="bakery-container grid items-center gap-10 py-10 md:gap-12 md:py-14 lg:min-h-[min(92svh,52rem)] lg:grid-cols-12 lg:gap-20 lg:py-20">
        <div className="order-2 text-center md:order-1 lg:col-span-5 lg:text-left">
          <p className="bakery-eyebrow lg:text-sm lg:tracking-[0.18em]">
            De madrugada, para el barrio
          </p>
          <div
            className="mx-auto mt-4 h-px w-16 bg-bakery-wheat lg:mx-0 lg:mt-5 lg:w-24"
            aria-hidden
          />
          <h1 id="bakery-hero-heading" className="mt-6 lg:mt-5">
            <span className="display block text-[2.4rem] text-bakery sm:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.25rem]">
              {name}
            </span>
            <span className="display mx-auto mt-3 block max-w-[18ch] text-[1.65rem] italic leading-[1.2] text-bakery-ink sm:text-[2rem] md:text-[2.35rem] lg:mx-0 lg:mt-5 lg:max-w-[16ch] lg:text-[3.25rem] xl:text-[3.75rem]">
              {hero.title}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-bakery-ink-soft md:text-lg lg:mx-0 lg:mt-6 lg:max-w-xl lg:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:mt-10 lg:justify-start lg:gap-4">
            <Button
              href="#encargar"
              size="lg"
              className="w-full sm:w-auto lg:min-h-14 lg:px-8 lg:text-base"
            >
              Encargar por teléfono
            </Button>
            <Button
              href="#panes"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto lg:min-h-14 lg:px-8 lg:text-base"
            >
              Ver panes del día
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-bakery-muted lg:mt-10 lg:justify-start lg:text-base">
            {hero.meta.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 ? (
                  <span className="text-bakery-wheat" aria-hidden>
                    ·
                  </span>
                ) : null}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2 lg:col-span-7">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            fetchPriority="high"
            decoding="async"
            className="aspect-[16/10] w-full object-cover md:aspect-[21/9] lg:aspect-[4/3] lg:min-h-[32rem] xl:min-h-[38rem]"
          />
        </div>
      </div>
    </section>
  )
}
