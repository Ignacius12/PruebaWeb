import { clinic } from '../config'
import { Button } from './Button'

export function ClinicHero() {
  const { hero, shortName } = clinic
  return (
    <section id="inicio" aria-labelledby="clinic-hero-heading" className="relative isolate min-h-[min(92svh,48rem)] overflow-hidden bg-clinic-ink">
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        width={hero.image.width}
        height={hero.image.height}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-clinic-ink/55" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-clinic-ink/50 via-clinic-ink/35 to-clinic-ink/60" aria-hidden />

      <div className="clinic-container relative flex min-h-[min(92svh,48rem)] flex-col justify-center py-16 md:py-20">
        <div className="max-w-2xl -translate-y-4 text-white md:-translate-y-6">
          <h1 id="clinic-hero-heading" className="fade-up">
            <span className="display block text-[1.85rem] tracking-[0.1em] sm:text-[2.2rem] md:text-[2.5rem]">
              {shortName}
            </span>
            <span className="display mt-4 block text-[1.7rem] leading-[1.15] text-white/95 sm:text-[2.2rem] md:text-[2.65rem]">
              {hero.title}
            </span>
          </h1>
          <p className="fade-up delay-1 mt-4 max-w-xl text-base text-white/85 md:text-lg">
            {hero.subtitle}
          </p>
          <div className="fade-up delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#cita" size="lg" className="w-full sm:w-auto">
              Pedir cita
            </Button>
            <Button href="#tratamientos" variant="outline-light" size="lg" className="w-full sm:w-auto">
              Ver tratamientos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
