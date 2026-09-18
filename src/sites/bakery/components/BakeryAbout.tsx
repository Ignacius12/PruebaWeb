import { bakery } from '../config'

export function BakeryAbout() {
  const { about } = bakery
  return (
    <section id="horno" aria-labelledby="bakery-about-heading" className="bakery-section bg-bakery-flour">
      <div className="bakery-container grid items-center gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-6">
          <img
            src={about.image.src}
            alt={about.image.alt}
            width={about.image.width}
            height={about.image.height}
            loading="lazy"
            decoding="async"
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
        <div className="md:col-span-6">
          <p className="bakery-eyebrow">El horno</p>
          <h2
            id="bakery-about-heading"
            className="display mt-3 text-[2rem] text-bakery-ink md:text-[2.6rem]"
          >
            {about.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-bakery-ink-soft md:text-lg">
            {about.body.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
