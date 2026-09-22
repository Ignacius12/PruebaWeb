import { bakery } from '../config'
import { Button } from './Button'

export function BakeryHero() {
  const { hero, name } = bakery

  return (
    <section id="inicio" aria-labelledby="bakery-hero-heading" className="bg-bakery-flour">
      <div className="bakery-container pb-8 pt-10 md:pb-10 md:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="bakery-eyebrow">De madrugada, para el barrio</p>
          <div className="mx-auto mt-4 h-px w-16 bg-bakery-wheat" aria-hidden />
          <h1 id="bakery-hero-heading" className="mt-6">
            <span className="display block text-[2.4rem] text-bakery sm:text-[3rem] md:text-[3.5rem]">
              {name}
            </span>
            <span className="display mt-3 block text-[1.65rem] italic leading-[1.2] text-bakery-ink sm:text-[2rem] md:text-[2.35rem]">
              {hero.title}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-bakery-ink-soft md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="#encargar" size="lg" className="w-full sm:w-auto">
              Encargar por teléfono
            </Button>
            <Button href="#panes" variant="secondary" size="lg" className="w-full sm:w-auto">
              Ver panes del día
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-bakery-muted">
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

      <div className="bakery-container pb-10 md:pb-14">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          fetchPriority="high"
          decoding="async"
          className="aspect-[16/10] w-full object-cover md:aspect-[21/9]"
        />
      </div>
    </section>
  )
}
