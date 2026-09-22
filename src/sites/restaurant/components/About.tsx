import { restaurant } from '../config/restaurant'
import { SectionHeading } from './ui/SectionHeading'
import { useInView } from '../../../hooks/useInView'

const aboutBlocks = [
  {
    heading: 'Producto y temporada',
    body: 'Cocinamos para la mesa compartida: aceite de oliva virgen, verdura de huerta, pescado del día y recetas mediterráneas con criterio de temporada.',
  },
  {
    heading: 'Mesa sin prisa',
    body: 'Si buscas una cena especial sin teatralidad —solo producto bueno y ritmo pausado— esta es tu mesa.',
  },
  {
    heading: 'Sobremesa cuidada',
    body: 'Reservamos con calma, servimos sin prisa y cuidamos cada detalle para que la sobremesa sea tan buena como el plato.',
  },
] as const

export function About() {
  const { about } = restaurant
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="nosotros"
      ref={ref}
      aria-labelledby="about-heading"
      className="section-pad bg-cream"
    >
      <div
        className={`container-page transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SectionHeading
          eyebrow="Nosotros"
          title={about.title}
          id="about-heading"
        />

        <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-12 md:gap-14 lg:mt-12 lg:items-stretch lg:gap-16">
          <div className="flex flex-col justify-center md:col-span-7 md:order-1 lg:py-2">
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:text-xl lg:hidden">
              {about.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-col lg:justify-center lg:gap-9 xl:gap-11">
              {aboutBlocks.map((block) => (
                <div key={block.heading}>
                  <h3 className="text-[0.8rem] font-medium uppercase tracking-[0.16em] text-olive xl:text-[0.85rem]">
                    {block.heading}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-xl leading-relaxed text-ink-soft xl:text-[1.35rem] xl:leading-relaxed">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 md:order-2">
            <div className="overflow-hidden">
              <img
                src={about.image.src}
                alt={about.image.alt}
                width={about.image.width}
                height={about.image.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03] lg:aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
