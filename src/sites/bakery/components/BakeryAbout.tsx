import { bakery } from '../config'
import { useInView } from '../../../hooks/useInView'

const aboutBlocks = [
  {
    heading: 'Pan del barrio',
    body: 'Si pasas de camino al trabajo o bajas a por el pan del fin de semana, aquí encuentras corteza crujiente y miga con memoria.',
  },
  {
    heading: 'Sin atajos',
    body: 'Sin atajos: fermentación larga, harina seleccionada y mostrador que se vacía según sale la hornada.',
  },
  {
    heading: 'Encargos con tiempo',
    body: 'Encargos con un día de antelación para fiestas, mesas grandes y el pan del domingo que no puede faltar.',
  },
] as const

export function BakeryAbout() {
  const { about } = bakery
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="horno"
      ref={ref}
      aria-labelledby="bakery-about-heading"
      className="bakery-section bg-bakery-flour"
    >
      <div
        className={`bakery-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="bakery-eyebrow">El horno</p>
          <h2
            id="bakery-about-heading"
            className="display mt-3 text-[2rem] text-bakery-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            {about.title}
          </h2>
        </div>

        <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-12 md:gap-14 lg:mt-12 lg:items-stretch lg:gap-16">
          <div className="order-2 flex flex-col justify-center md:order-1 md:col-span-7 lg:py-2">
            <div className="space-y-5 text-lg leading-relaxed text-bakery-ink-soft md:text-xl lg:hidden">
              {about.body.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-col lg:justify-center lg:gap-9 xl:gap-11">
              {aboutBlocks.map((block) => (
                <div key={block.heading}>
                  <h3 className="text-[0.8rem] font-medium uppercase tracking-[0.16em] text-bakery xl:text-[0.85rem]">
                    {block.heading}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-xl leading-relaxed text-bakery-ink-soft xl:text-[1.35rem] xl:leading-relaxed">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-5">
            <img
              src={about.image.src}
              alt={about.image.alt}
              width={about.image.width}
              height={about.image.height}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-[1.02] lg:aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
