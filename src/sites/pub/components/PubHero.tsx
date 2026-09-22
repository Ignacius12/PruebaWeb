import { pub } from '../config'
import { Button } from './Button'

export function PubHero() {
  const { hero, name } = pub

  return (
    <section
      id="inicio"
      aria-labelledby="pub-hero-heading"
      className="relative isolate min-h-[min(100svh,54rem)] overflow-hidden bg-pub-bg lg:min-h-svh"
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
        className="absolute inset-0 bg-gradient-to-r from-pub-bg via-pub-bg/85 to-pub-bg/25 lg:via-pub-bg/75 lg:to-transparent"
        aria-hidden
      />
      <div className="absolute inset-0 bg-pub-bg/30 md:bg-transparent" aria-hidden />

      <div className="pub-container relative flex min-h-[min(100svh,54rem)] items-center py-12 md:py-16 lg:min-h-svh lg:py-20">
        <div className="w-full max-w-xl -translate-y-2 border-l-4 border-pub pl-5 md:-translate-y-4 md:pl-7 lg:max-w-none lg:border-l-[6px] lg:pl-10 xl:pl-12">
          <p className="pub-eyebrow lg:text-sm lg:tracking-[0.22em]">Pub · Malasaña</p>
          <h1 id="pub-hero-heading" className="mt-4 lg:mt-6">
            <span className="block font-sans text-[2.4rem] font-bold leading-none tracking-tight text-pub sm:text-[3rem] md:text-[3.4rem] lg:text-[4.5rem] xl:text-[5.25rem]">
              {name}
            </span>
            <span className="mt-4 block max-w-[18ch] font-sans text-[1.55rem] font-medium leading-[1.15] text-pub-cream sm:text-[1.9rem] md:mt-5 md:text-[2.15rem] lg:mt-7 lg:max-w-[14ch] lg:text-[3.25rem] xl:text-[3.75rem]">
              {hero.title}
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-pub-muted md:text-lg lg:mt-7 lg:max-w-xl lg:text-xl lg:leading-relaxed xl:max-w-2xl xl:text-[1.35rem]">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10 lg:gap-4">
            <Button href="#reservas" size="lg" className="w-full sm:w-auto lg:min-h-14 lg:px-8 lg:text-base">
              Reservar mesa
            </Button>
            <Button
              href="#carta"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto lg:min-h-14 lg:px-8 lg:text-base"
            >
              Ver carta
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
