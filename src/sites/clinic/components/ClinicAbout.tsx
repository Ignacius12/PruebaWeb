import { clinic } from '../config'

export function ClinicAbout() {
  const { about } = clinic
  return (
    <section id="clinica" aria-labelledby="clinic-about-heading" className="clinic-section bg-clinic-ice">
      <div className="clinic-container grid items-center gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5 md:order-2">
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
        <div className="md:col-span-7 md:order-1">
          <p className="clinic-eyebrow">La clínica</p>
          <h2 id="clinic-about-heading" className="display mt-3 text-[2rem] text-clinic-ink md:text-[2.6rem]">
            {about.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-clinic-ink-soft md:text-lg">
            {about.body.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
