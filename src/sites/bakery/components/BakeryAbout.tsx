import { bakery } from '../config'
import { useInView } from '../../../hooks/useInView'

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

        <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-12 md:gap-14 lg:gap-20">
          <div className="md:col-span-6">
            <img
              src={about.image.src}
              alt={about.image.alt}
              width={about.image.width}
              height={about.image.height}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="md:col-span-6">
            <div className="mx-auto max-w-xl space-y-4 text-base leading-relaxed text-bakery-ink-soft md:mx-0 md:text-lg lg:max-w-none lg:space-y-5 lg:text-xl">
              {about.body.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
