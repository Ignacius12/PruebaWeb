import { restaurant } from '../config/restaurant'
import { Button } from './ui/Button'

export function Hero() {
  const { hero, shortName } = restaurant

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[min(100svh,52rem)] overflow-hidden bg-ink lg:min-h-svh"
    >
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        width={hero.image.width}
        height={hero.image.height}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/70"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />

      <div className="container-page relative flex min-h-[min(100svh,52rem)] flex-col justify-center py-12 md:py-16 lg:min-h-svh lg:items-center lg:justify-center lg:py-20">
        <div className="w-full max-w-2xl -translate-y-4 text-left text-white md:-translate-y-8 lg:max-w-5xl lg:translate-y-0 lg:text-center">
          <h1 id="hero-heading" className="fade-up">
            <span className="display block text-[2rem] tracking-[0.12em] text-white sm:text-[2.4rem] md:text-[2.75rem] lg:text-[3.75rem] xl:text-[4.25rem]">
              {shortName}
            </span>
            <span className="display mt-4 block max-w-[18ch] text-[1.85rem] leading-[1.12] text-white/95 sm:text-[2.35rem] md:mt-5 md:text-[2.85rem] lg:mx-auto lg:mt-6 lg:max-w-[18ch] lg:text-[3.75rem] xl:text-[4.25rem]">
              {hero.title}
            </span>
          </h1>
          <p className="fade-up delay-1 mt-4 max-w-xl text-base text-white/85 md:text-lg lg:mx-auto lg:mt-6 lg:max-w-2xl lg:text-xl xl:text-[1.35rem]">
            {hero.subtitle}
          </p>

          <div className="fade-up delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-10 lg:justify-center lg:gap-4">
            <Button href="#reservas" size="lg" className="w-full sm:w-auto lg:min-h-14 lg:px-8 lg:text-base">
              Reservar mesa
            </Button>
            <Button
              href="#menu"
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto lg:min-h-14 lg:px-8 lg:text-base"
            >
              Ver menú
            </Button>
          </div>

          <ul className="fade-up delay-3 mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/75 lg:mt-10 lg:justify-center lg:text-base">
            {hero.meta.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 ? (
                  <span className="text-white/40" aria-hidden="true">
                    ·
                  </span>
                ) : null}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
