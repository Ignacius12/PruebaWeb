import { clinic } from '../config'
import { useInView } from '../../../hooks/useInView'

export function ClinicTreatments() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="tratamientos"
      ref={ref}
      aria-labelledby="treatments-heading"
      className="clinic-section bg-white"
    >
      <div
        className={`clinic-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="clinic-eyebrow">Cuidados</p>
          <h2
            id="treatments-heading"
            className="display mt-3 text-[2rem] text-clinic-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            Tratamientos claros, sin complicaciones.
          </h2>
          <p className="mt-4 text-clinic-muted lg:mx-auto lg:mt-5 lg:max-w-2xl lg:text-lg">
            Información sencilla para decidir con tranquilidad. Cada servicio se
            explica en consulta, con tiempos y opciones comprensibles.
          </p>
        </div>

        <div className="mt-10 overflow-hidden lg:mt-14">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=80&auto=format&fit=crop"
            alt="Espacio de consulta luminoso y calmado"
            width={1400}
            height={700}
            loading="lazy"
            decoding="async"
            className="aspect-[21/9] w-full object-cover"
          />
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {clinic.treatments.map((item) => (
            <li
              key={item.id}
              className="border border-clinic-line bg-clinic-ice/70 px-5 py-6 transition-colors hover:border-clinic/40 lg:px-6 lg:py-8"
            >
              <h3 className="display text-[1.35rem] leading-tight text-clinic-ink md:text-[1.45rem] lg:text-[1.65rem] xl:text-[1.75rem]">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-clinic-muted lg:mt-3.5 lg:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
