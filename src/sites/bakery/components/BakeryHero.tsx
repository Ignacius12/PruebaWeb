import { bakery } from '../config'
import { Button } from './Button'

export function BakeryHero() {
  const { hero, name } = bakery

  return (
    <section id="inicio" aria-labelledby="bakery-hero-heading" className="bg-bakery-flour">
      <div className="bakery-container pb-8 pt-10 md:pb-10 md:pt-14 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center lg:max-w-5xl">
          <p className="bakery-eyebrow lg:text-sm lg:tracking-[0.18em]">
            De madrugada, para el barrio
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-bakery-wheat lg:mt-5 lg:w-24" aria-hidden />
          <h1 id="bakery-hero-heading" className="mt-6 lg:mt-8">
            <span className="display block text-[2.4rem] text-bakery sm:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.25rem]">
              {name}
            </span>
            <span className="display mt-3 block max-w-[18ch] mx-auto text-[1.65rem] italic leading-[1.2] text-bakery-ink sm:text-[2rem] md:text-[2.35rem] lg:mt-5 lg:max-w-[16ch] lg:text-[3.25rem] xl:text-[3.75rem]">
              {hero.title}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-bakery-ink-soft md:text-lg lg:mt-7 lg:max-w-2xl lg:text-xl xl:text-[1.35rem]">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:mt-10 lg:gap-4">
            <Button href="#encargar" size="lg" className="w-full sm:w-auto lg:min-h-14 lg:px-8 lg:text-base">
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
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-bakery-muted lg:mt-10 lg:text-base">
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
      </div>

      <div className="bakery-container pb-10 md:pb-14 lg:pb-20">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          fetchPriority="high"
          decoding="async"
          className="aspect-[16/10] w-full object-cover md:aspect-[21/9] lg:aspect-[24/9]"
        />
      </div>
    </section>
  )
}
