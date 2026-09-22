import { ChevronDown } from 'lucide-react'
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
        className="absolute inset-0 bg-gradient-to-r from-pub-bg via-pub-bg/85 to-pub-bg/25 lg:bg-gradient-to-b lg:from-pub-bg/80 lg:via-pub-bg/65 lg:to-pub-bg/80"
        aria-hidden
      />
      <div className="absolute inset-0 bg-pub-bg/30 md:bg-transparent lg:bg-pub-bg/20" aria-hidden />

      <div className="pub-container relative flex min-h-[min(100svh,54rem)] items-center py-10 md:py-12 lg:min-h-svh lg:justify-center lg:pb-24 lg:pt-16">
        <div className="w-full max-w-xl -translate-y-4 border-l-4 border-pub pl-5 text-left md:-translate-y-6 md:pl-7 lg:max-w-4xl lg:-translate-y-10 lg:border-l-0 lg:pl-0 lg:text-center xl:max-w-5xl">
          <p className="pub-eyebrow lg:text-sm lg:tracking-[0.22em]">Pub · Malasaña</p>
          <h1 id="pub-hero-heading" className="mt-2 lg:mt-3">
            <span className="block font-sans text-[2.4rem] font-bold leading-none tracking-tight text-pub sm:text-[3rem] md:text-[3.4rem] lg:text-[4.5rem] xl:text-[5.25rem]">
              {name}
            </span>
            <span className="mt-2 block max-w-[18ch] font-sans text-[1.55rem] font-medium leading-[1.15] text-pub-cream sm:text-[1.9rem] md:mt-3 md:text-[2.15rem] lg:mx-auto lg:mt-3 lg:max-w-[16ch] lg:text-[3.25rem] xl:text-[3.75rem]">
              {hero.title}
            </span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-pub-muted md:text-lg lg:mx-auto lg:mt-5 lg:max-w-2xl lg:text-xl lg:leading-relaxed xl:text-[1.35rem]">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-9 lg:justify-center lg:gap-4">
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

      <a
        href="#ambiente"
        className="scroll-hint absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-pub-cream/70 transition-colors hover:text-pub lg:flex"
        aria-label="Ver más contenido"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
          Descubre
        </span>
        <ChevronDown size={22} strokeWidth={1.5} className="scroll-hint-icon" aria-hidden />
      </a>
    </section>
  )
}
