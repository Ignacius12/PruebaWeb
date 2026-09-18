import { clinic } from '../config'

export function ClinicTreatments() {
  return (
    <section
      id="tratamientos"
      aria-labelledby="treatments-heading"
      className="clinic-section bg-white"
    >
      <div className="clinic-container">
        <div className="max-w-2xl">
          <p className="clinic-eyebrow">Cuidados</p>
          <h2
            id="treatments-heading"
            className="display mt-3 text-[2rem] text-clinic-ink md:text-[2.6rem]"
          >
            Tratamientos claros, sin complicaciones.
          </h2>
          <p className="mt-4 text-clinic-muted">
            Información sencilla para decidir con tranquilidad. Cada servicio se
            explica en consulta, con tiempos y opciones comprensibles.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clinic.treatments.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-clinic-line bg-clinic-ice/70 px-5 py-6"
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
