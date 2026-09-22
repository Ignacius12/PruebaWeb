import { clinic } from '../config'

export function ClinicTreatments() {
  return (
    <section
      id="tratamientos"
      aria-labelledby="treatments-heading"
      className="clinic-section bg-white"
    >
      <div className="clinic-container">
        <div className="max-w-2xl lg:max-w-4xl">
          <p className="clinic-eyebrow">Cuidados</p>
          <h2
            id="treatments-heading"
            className="display mt-3 text-[2rem] text-clinic-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            Tratamientos claros, sin complicaciones.
          </h2>
          <p className="mt-4 text-clinic-muted lg:mt-5 lg:max-w-3xl lg:text-lg">
            Información sencilla para decidir con tranquilidad. Cada servicio se
            explica en consulta, con tiempos y opciones comprensibles.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {clinic.treatments.map((item) => (
            <li
              key={item.id}
              className="border border-clinic-line bg-clinic-ice/70 px-5 py-6 lg:px-6 lg:py-8"
            >
              <h3 className="text-[1.05rem] font-medium text-clinic-ink">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-clinic-ink-soft">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
