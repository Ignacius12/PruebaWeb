import { restaurant } from '../config/restaurant'
import { SectionHeading } from './ui/SectionHeading'
import { useInView } from '../../../hooks/useInView'

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

        <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-12 md:gap-14 lg:gap-20">
          <div className="md:col-span-5 md:order-2">
            <div className="overflow-hidden">
              <img
                src={about.image.src}
                alt={about.image.alt}
                width={about.image.width}
                height={about.image.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:order-1">
            <div className="mx-auto max-w-xl space-y-4 text-base leading-relaxed text-ink-soft md:mx-0 md:text-lg lg:max-w-2xl lg:space-y-5 lg:text-xl">
              {about.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
