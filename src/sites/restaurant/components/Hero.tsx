import { restaurant } from '../config/restaurant'
import { Button } from './ui/Button'

export function Hero() {
  const { hero, shortName } = restaurant

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[min(100svh,52rem)] overflow-hidden bg-ink"
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

      <div className="container-page relative flex min-h-[min(100svh,52rem)] flex-col justify-center pb-20 pt-8 md:pb-24 md:pt-10">
        <div className="max-w-2xl -translate-y-6 text-white md:-translate-y-10">
          <h1 id="hero-heading" className="fade-up">
            <span className="display block text-[2rem] tracking-[0.12em] text-white sm:text-[2.4rem] md:text-[2.75rem]">
              {shortName}
            </span>
            <span className="display mt-4 block text-[1.85rem] leading-[1.12] text-white/95 sm:text-[2.35rem] md:text-[2.85rem]">
              {hero.title}
            </span>
          </h1>
          <p className="fade-up delay-1 mt-4 max-w-xl text-base text-white/85 md:text-lg">
            {hero.subtitle}
          </p>

          <div className="fade-up delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#reservas" size="lg" className="w-full sm:w-auto">
              Reservar mesa
            </Button>
            <Button
              href="#menu"
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Ver menú
            </Button>
          </div>

          <ul className="fade-up delay-3 mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/75">
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
