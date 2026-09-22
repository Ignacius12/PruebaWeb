import { clinic } from '../config'
import { useInView } from '../../../hooks/useInView'

const aboutBlocks = [
  {
    heading: 'Escucha primero',
    body: 'Sabemos que ir al dentista no siempre es fácil. Por eso empezamos escuchando, explicamos sin tecnicismos y avanzamos a tu ritmo.',
  },
  {
    heading: 'Entorno calmado',
    body: 'Protocolos actuales, materiales de calidad y un entorno luminoso pensado para bajar la tensión desde que entras.',
  },
] as const

export function ClinicAbout() {
  const { about } = clinic
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="clinica"
      ref={ref}
      aria-labelledby="clinic-about-heading"
      className="clinic-section bg-clinic-ice"
    >
      <div
        className={`clinic-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="clinic-eyebrow">La clínica</p>
          <h2
            id="clinic-about-heading"
            className="display mt-3 text-[2rem] text-clinic-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            {about.title}
          </h2>
        </div>

        <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-12 md:gap-14 lg:mt-12 lg:items-stretch lg:gap-16">
          <div className="flex flex-col justify-center md:col-span-7 md:order-1 lg:py-2">
            <div className="space-y-4 text-base leading-relaxed text-clinic-ink-soft md:text-lg lg:hidden">
              {about.body.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-col lg:justify-center lg:gap-10 xl:gap-12">
              {aboutBlocks.map((block) => (
                <div key={block.heading}>
                  <h3 className="display text-[1.65rem] leading-tight text-clinic-ink xl:text-[1.85rem]">
                    {block.heading}
                  </h3>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-clinic-ink-soft xl:text-xl xl:leading-relaxed">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 md:order-2">
            <img
              src={about.image.src}
              alt={about.image.alt}
              width={about.image.width}
              height={about.image.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02] lg:aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
