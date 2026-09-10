import { restaurant } from '../config/restaurant'
import { SectionHeading } from './ui/SectionHeading'

export function About() {
  const { about } = restaurant

  return (
    <section
      id="nosotros"
      aria-labelledby="about-heading"
      className="section-pad bg-cream"
    >
      <div className="container-page grid items-center gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5 md:order-2">
          <div className="overflow-hidden">
            <img
              src={about.image.src}
              alt={about.image.alt}
              width={about.image.width}
              height={about.image.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:order-1">
          <SectionHeading
            eyebrow="Nosotros"
            title={about.title}
            id="about-heading"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft md:text-lg md:leading-relaxed">
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
