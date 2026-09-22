import { pub } from '../config'
import { Button } from './Button'

export function PubHero() {
  const { hero, name } = pub

  return (
    <section
      id="inicio"
      aria-labelledby="pub-hero-heading"
      className="relative isolate min-h-[min(100svh,54rem)] overflow-hidden bg-pub-bg"
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
        className="absolute inset-0 bg-gradient-to-r from-pub-bg via-pub-bg/85 to-pub-bg/25"
        aria-hidden
      />
      <div className="absolute inset-0 bg-pub-bg/30 md:bg-transparent" aria-hidden />

      <div className="pub-container relative flex min-h-[min(100svh,54rem)] items-center py-12 md:py-16">
        <div className="max-w-xl -translate-y-2 border-l-4 border-pub pl-5 md:-translate-y-4 md:pl-7">
          <p className="pub-eyebrow">Pub · Malasaña</p>
          <h1 id="pub-hero-heading" className="mt-4">
            <span className="block font-sans text-[2.4rem] font-bold leading-none tracking-tight text-pub sm:text-[3rem] md:text-[3.4rem]">
              {name}
            </span>
            <span className="mt-4 block font-sans text-[1.55rem] font-medium leading-[1.2] text-pub-cream sm:text-[1.9rem] md:text-[2.15rem]">
              {hero.title}
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-pub-muted md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#reservas" size="lg" className="w-full sm:w-auto">
              Reservar mesa
            </Button>
            <Button href="#carta" variant="secondary" size="lg" className="w-full sm:w-auto">
              Ver carta
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
